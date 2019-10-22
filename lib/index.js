#!/usr/bin/env node
"use strict";
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander');
var vjs = require('./vjs');
clear();
console.log(chalk.red(figlet.textSync('vanilla-js-cli', { horizontalLayout: 'full' })));
program
    .version('0.0.1')
    .description("Vanilla JavaScript CLI")
    .option('-n, --new <project_name>', 'generate a new project')
    .option('-a, --author <your_name>', 'define author name in project')
    .option('-d, --description <project_description>', 'define description in project')
    .option('-g, --generate component <component_name>', 'generate a new struct')
    .parse(process.argv);
vjs(process.argv);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
