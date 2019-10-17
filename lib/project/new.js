#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var writeFile = require('../shared/services/write-file');
var fileEnum = require('../shared/enums/file-enum');
module.exports = function (projectName, authorName, description) {
    console.log('project name: ', projectName);
    console.log('author name: ', authorName);
    console.log('project description: ', description);
    try {
        fs.statSync(projectName);
    }
    catch (error) { }
    var defaultDir = projectName;
    var srcDir = projectName + "/src";
    var configDir = projectName + "/config";
    var appDir = projectName + "/app";
    var stylesDir = projectName + "/styles";
    if (!fs.existsSync(defaultDir)) {
        fs.mkdirSync(defaultDir);
        fs.mkdirSync(srcDir);
        fs.mkdirSync(configDir);
        fs.mkdirSync(appDir);
        fs.mkdirSync(stylesDir);
    }
    writeFile(fs, defaultDir, fileEnum(projectName, authorName, description).PACKAGE);
};
