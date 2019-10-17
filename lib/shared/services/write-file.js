#!/usr/bin/env node
"use strict";
module.exports = function (fs, componentName, file, type, extension) {
    fs.writeFile("./" + componentName + "/" + (type == 'template' ? 'template' : componentName) + "." + extension, file, function (error) {
        if (error) {
            console.log(error);
        }
        ;
        console.log("Created a new " + type + " in " + componentName + " component.");
    });
};
