#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var writeFile = require('../shared/services/write-file');
var fileEnum = require('../shared/enums/file-enum');
module.exports = function (componentName) {
    console.log('component name:', componentName);
    try {
        fs.statSync(componentName);
    }
    catch (error) { }
    var defaultDir = componentName;
    if (!fs.existsSync(defaultDir)) {
        fs.mkdirSync(defaultDir);
    }
    writeFile(fs, defaultDir, fileEnum(componentName).CLASS, componentName);
    writeFile(fs, defaultDir, fileEnum(componentName).TEMPLATE);
    writeFile(fs, defaultDir, fileEnum(componentName).STYLE, componentName);
};
