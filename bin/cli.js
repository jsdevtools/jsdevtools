#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const commander = require('commander');
// const dns = require('dns');
// const envinfo = require('envinfo');
// const execSync = require('child_process').execSync;
const fs = require('fs-extra');
// const hyperquest = require('hyperquest');
// const inquirer = require('inquirer');
// const os = require('os');
const path = require('path');
// const semver = require('semver');
const spawn = require('cross-spawn');
// const tmp = require('tmp');
// const unpack = require('tar-pack').unpack;
// const url = require('url');
const validateProjectName = require('validate-npm-package-name');

const packageJson = require('../package.json');

// These files should be allowed to remain on a failed install,
// but then silently removed during the next create.
const errorLogFilePatterns = ['npm-debug.log', 'yarn-error.log', 'yarn-debug.log', 'lerna-debug.log'];

let repoName;

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<repo-directory>')
  .usage(`${chalk.green('<repo-directory>')} [options]`)
  .action(name => {
    repoName = name;
  })
  .allowUnknownOption()
  .on('--help', () => {
    console.log(`    Only ${chalk.green('<repo-directory>')} is required.`);
    console.log();
  })
  .parse(process.argv);

if (typeof repoName === 'undefined') {
  console.error('Please specify the repo directory:');
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('<repo-directory>')}`);
  console.log();
  console.log('For example:');
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('my-monorepo')}`);
  console.log();
  console.log(`Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`);
  process.exit(1);
}

createRepo(repoName);

function createRepo(name) {
  const root = path.resolve(name);
  const repoDirName = path.basename(root);

  checkRepoName(repoDirName); //y
  fs.ensureDirSync(name);
  if (!isSafeToCreateProjectIn(root, name)) {
    //y
    process.exit(1);
  }

  console.log(`Creating a new React app in ${chalk.green(root)}.`);
  console.log();

  const originalDirectory = process.cwd();
  process.chdir(root);
  if (!checkThatNpmCanReadCwd()) {
    //y
    process.exit(1);
  }

  run(root, repoDirName, originalDirectory); //y
}

function printValidationResults(results) {
  if (typeof results !== 'undefined') {
    results.forEach(error => {
      console.error(chalk.red(`  *  ${error}`));
    });
  }
}

function checkRepoName(repoName) {
  const validationResult = validateProjectName(repoName); //y
  if (!validationResult.validForNewPackages) {
    console.error(
      `Could not create a repo called ${chalk.red(`"${repoName}"`)} because of npm naming restrictions:`,
    );
    printValidationResults(validationResult.errors); //y
    printValidationResults(validationResult.warnings); //y
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

function isSafeToCreateProjectIn(root, name) {
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
    .readdirSync(root)
    .filter(file => !validFiles.includes(file))
    // Don't treat log files from previous installation as conflicts
    .filter(file => !errorLogFilePatterns.some(pattern => file.indexOf(pattern) === 0));

  if (conflicts.length > 0) {
    console.log(`The directory ${chalk.green(name)} contains files that could conflict:`);
    console.log();
    for (const file of conflicts) {
      console.log(`  ${file}`);
    }
    console.log();
    console.log('Either try using a new directory name, or remove the files listed above.');

    return false;
  }

  // Remove any remnant files from a previous installation
  const currentFiles = fs.readdirSync(path.join(root));
  currentFiles.forEach(file => {
    errorLogFilePatterns.forEach(errorLogFilePattern => {
      // This will catch `(npm-debug|yarn-error|yarn-debug|lerna-debug).log*` files
      if (file.indexOf(errorLogFilePattern) === 0) {
        fs.removeSync(path.join(root, file));
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

function run(root, appName, originalDirectory) {
  // Copy files
  // Exclude non-template
  console.log(`root: ${JSON.stringify(root)}`);
  console.log(`appName: ${JSON.stringify(appName)}`);
  console.log(`originalDirectory: ${JSON.stringify(originalDirectory)}`);
  console.log(`argv: ${JSON.stringify(process.argv)}`);
  const templateDir = path.resolve(path.join(process.argv[1],'../..'));
  console.log(`path: ${JSON.stringify(path.resolve(path.join(process.argv[1],'../..')))}`);
  if (fs.existsSync(templateDir)) {
    fs.copySync(templateDir, root);
  } else {
    console.error(
      `Could not locate supplied template: ${chalk.green(templateDir)}`
    );
    return;
  }
}
