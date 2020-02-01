#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const commander = require('commander');
const fs = require('fs-extra');
const path = require('path');
const spawn = require('cross-spawn');
const validateProjectName = require('validate-npm-package-name');

const packageJson = require('../package.json');

// These files should be allowed to remain on a failed install,
// but then silently removed during the next create.
const errorLogFilePatterns = ['npm-debug.log', 'yarn-error.log', 'yarn-debug.log', 'lerna-debug.log'];

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .option('-r, --repo-directory <repo-directory>', 'create mono-repo from template')
  .option('-s, --skip-configs', 'do not create configs from template')
  .option('-x, --skip-examples', 'do not create example shared components from template')
  .usage(`--repo-directory <repo-directory>`)
  .usage(`--skip-configs`)
  .parse(process.argv)
  .on('--help', () => {
    console.log(`    Only ${chalk.green('<repo-directory>')} is required.`);
    console.log();
  });

if (typeof program.repoDirectory === 'undefined') {
  console.error('Please specify the repo directory:');
  console.log(`  ${chalk.cyan(`${program.name()} --repo-directory`)} ${chalk.green('<repo-directory>')}`);
  console.log();
  console.log('For example:');
  console.log(`  ${chalk.cyan(`${program.name()} --repo-directory`)} ${chalk.green('my-monorepo')}`);
  console.log();
  console.log(`Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`);
  process.exit(1);
}

// call main function
createRepo(program.repoDirectory);

// main function
function createRepo(repoDir) {
  // fullRepoDirPath = resolve the full path to the repo directory specified.
  // The user may have specified a relative or absolute path.
  // repoDirName = the last directory in the path = name of repo to create.
  const fullRepoDirPath = path.resolve(repoDir);
  const repoDirName = path.basename(fullRepoDirPath);

  // check repo name against npm naming restrictions and dependency names
  checkRepoName(repoDirName);

  // equivalent to mkdir -p; creates the directory and any required paths to it
  if (!fs.ensureDirSync(fullRepoDirPath)) {
    process.exit(1);
  }

  // ensure created directory is either empty or only contains allowed files or error logs
  if (!isSafeToCreateProjectIn(fullRepoDirPath, repoDir)) {
    process.exit(1);
  }

  console.log(`Creating mono-repo in ${chalk.green(fullRepoDirPath)}.`);
  console.log();

  // save location cli was run from
  const originalDirectory = process.cwd();

  // move into newly created repo direcotry
  process.chdir(fullRepoDirPath);

  // self-explanatory?
  if (!checkThatNpmCanReadCwd()) {
    process.exit(1);
  }

  // call run command to create monorepo
  run(fullRepoDirPath, repoDirName, originalDirectory);
}

function printValidationResults(results) {
  if (typeof results !== 'undefined') {
    results.forEach(error => {
      console.error(chalk.red(`  *  ${error}`));
    });
  }
}

// arg: repoName = repository name / directory name to create
function checkRepoName(repoName) {
  const validationResult = validateProjectName(repoName);
  if (!validationResult.validForNewPackages) {
    console.error(
      `Could not create a repo called ${chalk.red(`"${repoName}"`)} because of npm naming restrictions:`,
    );
    printValidationResults(validationResult.errors);
    printValidationResults(validationResult.warnings);
    process.exit(1);
  }

  const dependencies = Object.keys(packageJson.dependencies).sort();
  if (dependencies.indexOf(repoName) >= 0) {
    console.error(
      chalk.red(
        `We cannot create a project called ${chalk.green(
          repoName,
        )} because a dependency with the same name exists.\n` +
          `Due to the way npm works, the following names are not allowed:\n\n`,
      ) +
        chalk.cyan(dependencies.map(depName => `  ${depName}`).join('\n')) +
        chalk.red('\n\nPlease choose a different project name.'),
    );
    process.exit(1);
  }
}

function isSafeToCreateProjectIn(repoDirPath, repoDirName) {
  const validFiles = [
    '.DS_Store',
    'Thumbs.db',
    '.git',
    '.gitignore',
    'README.md',
    'LICENSE',
    '.hg',
    '.hgignore',
    '.hgcheck',
    '.npmignore',
    'mkdocs.yml',
    'docs',
    '.travis.yml',
    '.gitlab-ci.yml',
    '.gitattributes',
  ];
  console.log();

  const conflicts = fs
    .readdirSync(repoDirPath)
    .filter(file => !validFiles.includes(file))
    // Don't treat log files from previous installation as conflicts
    .filter(file => !errorLogFilePatterns.some(pattern => file.indexOf(pattern) === 0));

  if (conflicts.length > 0) {
    console.log(`The directory ${chalk.green(repoDirName)} contains files that could conflict:`);
    console.log();
    for (const file of conflicts) {
      console.log(`  ${file}`);
    }
    console.log();
    console.log('Either try using a new directory name, or remove the files listed above.');

    return false;
  }

  // Remove any remnant files from a previous installation
  const currentFiles = fs.readdirSync(path.join(repoDirPath));
  currentFiles.forEach(file => {
    errorLogFilePatterns.forEach(errorLogFilePattern => {
      // This will catch `(npm-debug|yarn-error|yarn-debug|lerna-debug).log*` files
      if (file.indexOf(errorLogFilePattern) === 0) {
        fs.removeSync(path.join(repoDirPath, file));
      }
    });
  });
  return true;
}

function checkThatNpmCanReadCwd() {
  const cwd = process.cwd();
  let childOutput = null;
  try {
    childOutput = spawn.sync('npm', ['config', 'list']).output.join('');
  } catch (err) {
    return true;
  }
  if (typeof childOutput !== 'string') {
    return true;
  }
  const lines = childOutput.split('\n');
  // `npm config list` output includes the following line:
  // "; cwd = C:\path\to\current\dir" (unquoted)
  // I couldn't find an easier way to get it.
  const prefix = '; cwd = ';
  const line = lines.find(line => line.indexOf(prefix) === 0);
  if (typeof line !== 'string') {
    // Fail gracefully. They could remove it.
    return true;
  }
  const npmCWD = line.substring(prefix.length);
  if (npmCWD === cwd) {
    return true;
  }
  console.error(
    chalk.red(
      `Could not start an npm process in the right directory.\n\n` +
        `The current directory is: ${chalk.bold(cwd)}\n` +
        `However, a newly started npm process runs in: ${chalk.bold(npmCWD)}\n\n` +
        `This is probably caused by a misconfigured system terminal shell.`,
    ),
  );
  if (process.platform === 'win32') {
    console.error(
      chalk.red(`On Windows, this can usually be fixed by running:\n\n`) +
        `  ${chalk.cyan('reg')} delete "HKCU\\Software\\Microsoft\\Command Processor" /v AutoRun /f\n` +
        `  ${chalk.cyan('reg')} delete "HKLM\\Software\\Microsoft\\Command Processor" /v AutoRun /f\n\n` +
        chalk.red(`Try to run the above two lines in the terminal.\n`) +
        chalk.red(
          // eslint-disable-next-line max-len
          `To learn more about this problem, read: https://blogs.msdn.microsoft.com/oldnewthing/20071121-00/?p=24433/`,
        ),
    );
  }
  return false;
}

/* 
  params:
    repoDirPath: full path to repo dir
    repoDirName: name of repo / repo dir
    originalDirectory: dir from which cli called from
  run: create the mono-repo from template
*/
function run(repoDirPath, repoDirName, originalDirectory) {
  console.log(`repoDirPath: ${JSON.stringify(repoDirPath)}`);
  console.log(`repoDirName: ${JSON.stringify(repoDirName)}`);
  console.log(`originalDirectory: ${JSON.stringify(originalDirectory)}`);
  console.log(`argv: ${JSON.stringify(process.argv)}`);

  // we use the monorepo-template package, which contains the cli, as our template
  const templateDir = path.resolve(path.join(process.argv[1], '../..'));
  console.log(`path: ${JSON.stringify(path.resolve(path.join(process.argv[1], '../..')))}`);

  // copy the template to the target directory, don't copy bin folder or node_modules
  if (fs.existsSync(templateDir)) {
    fs.copySync(templateDir, repoDirPath, {
      dereference: true,
      filter: (src, dest) =>
        !dest.match(/node_modules/) &&
        !dest.match(/bin/) &&
        !dest.match(/LICENSE/) &&
        !dest.match(/CHANGELOG.md/) &&
        !(program.skipConfigs && dest.match(/packages\/configs/)) &&
        !(program.skipExamples && dest.match(/packages\/shared-components\/input/)) &&
        !(program.skipExamples && dest.match(/packages\/shared-components\/input-ts/)),
    });
  } else {
    console.error(`Could not locate supplied template: ${chalk.green(templateDir)}`);
    process.exit(1);
  }

  // create the new project's package.json
  const newJsonPath = path.resolve(repoDirPath, 'package.json');
  const { bin, dependencies, description, version, ...rest } = packageJson;
  const newJson = {
    ...rest,
    devDependencies: {
      ...Object.keys(packageJson.devDependencies)
        .map(key => (skipConfigs ? key : key.replace('@jsdt', `@${repoDirName}`)))
        .reduce((acc, curr, i, arr) => {
          return packageJson.devDependencies[curr]
            ? { ...acc, [curr]: packageJson.devDependencies[curr] }
            : { ...acc, [curr]: '^0.0.1' };
        }, {}),
    },
    eslintConfig: {
      ...Object.keys(packageJson.eslintConfig).reduce(
        (acc, curr, i, arr) =>
          skipConfigs
            ? {
                ...acc,
                [curr]: packageJson.eslintConfig[curr],
              }
            : {
                ...acc,
                [curr]: packageJson.eslintConfig[curr].replace('@jsdt', `@${repoDirName}`),
              },
        {},
      ),
    },
    name: `@${repoDirName}/${repoDirName}`,
    prettier: skipConfigs
      ? packageJson.prettier
      : packageJson.prettier.replace('@jsdt', `@${repoDirName}`),
    private: true,
    scripts: {
      ...packageJson.scripts,
      'clean-packages': packageJson.scripts['clean-packages'].replace('@jsdt', `@${repoDirName}`),
      commit: `git-cz`,
    },
    workspaces: [...packageJson.workspaces.filter(workspace => workspace !== './')],
  };
  fs.writeFileSync(newJsonPath, JSON.stringify(newJson, null, 2));

  const lernaJson = require(path.resolve(templateDir, 'lerna.json'));
  const newLernaPath = path.resolve(repoDirPath, 'lerna.json');
  const newLerna = {
    ...lernaJson,
    packages: [...lernaJson.packages.filter(pkg => pkg !== './')],
  };
  fs.writeFileSync(newLernaPath, JSON.stringify(newLerna, null, 2));
}
