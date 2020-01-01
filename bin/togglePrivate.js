#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const commander = require('commander');
const path = require('path');
const fs = require('fs');

const packageJson = require('../package.json');

const program = new commander.Command(`${path.basename(process.argv[0])} ${path.basename(process.argv[1])}`)
  .version(packageJson.version)
  .option('-p, --private <private-value>', 'set "private" key to <private-value> in package.json')
  .usage(`--private [true|false]`)
  .parse(process.argv);

const privateValue = program.private;

if (privateValue !== 'true' && privateValue !== 'false') {
  program.outputHelp();
} else {
  const newJson = {
    ...packageJson,
    private: privateValue === 'true' ? true : false,
  };

  fs.writeFileSync('package.json', JSON.stringify(newJson, null, 2));
}
