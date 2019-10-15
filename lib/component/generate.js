#!/usr/bin/env node
"use strict";
var fs = require('fs');
var fileClass = require('../shared/files/class');
var fileTemplate = require('../shared/files/template');
var fileScss = require('../shared/files/scss');
module.exports = function (componentName) {
    console.log('component name:', componentName);
    var classFile = fileClass(componentName);
    var templateFile = fileTemplate(componentName);
    var scssFile = fileScss();
    try {
        fs.statSync(componentName);
    }
    catch (error) { }
    if (!fs.existsSync(componentName)) {
        fs.mkdirSync(componentName);
    }
    fs.writeFile("./" + componentName + "/" + componentName + ".js", classFile, function (error) {
        if (error) {
            console.log(error);
        }
        ;
        console.log("Created a new javascript in component.");
    });
    fs.writeFile("./" + componentName + "/template.js", templateFile, function (error) {
        if (error) {
            console.log(error);
        }
        ;
        console.log("Created a new template in component.");
    });
    fs.writeFile("./" + componentName + "/" + componentName + ".scss", scssFile, function (error) {
        if (error) {
            console.log(error);
        }
        ;
        console.log("Created a new scss in component.");
    });
};
