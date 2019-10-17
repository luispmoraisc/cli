#!/usr/bin/env node
"use strict";
module.exports = function (fs, componentName, file) {
    fs.writeFile("./" + componentName + "/" + (file.type == 'template' ? 'template' : componentName) + "." + file.extension, file.content, function (error) {
        if (error) {
            console.log(error);
        }
        ;
        console.log("Created a new " + file.type + " in " + componentName + " component.");
    });
};
