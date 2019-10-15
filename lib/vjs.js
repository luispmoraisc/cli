#!/usr/bin/env node
"use strict";
var minimist = require('minimist');
var projectNew = require('./project/new');
var componentGenerate = require('./component/generate');
module.exports = function (args) {
    var argv = minimist(args.slice(2), { '--': true });
    var newProject = argv.n || argv.new;
    var authorName = argv.a || argv.author;
    var description = argv.d || argv.description;
    var newGenerate = argv.g || argv.generate;
    console.log(newProject);
    console.log(authorName);
    console.log(description);
    console.log(newGenerate);
    if (newProject) {
        projectNew(newProject, authorName, description);
    }
    if (newGenerate) {
        componentGenerate(newGenerate);
    }
};
