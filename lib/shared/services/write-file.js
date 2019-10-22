#!/usr/bin/env node
"use strict";
module.exports = function (fs, dirName, file, customFileName) {
    var fileName = file.useCustomName ? customFileName : file.name;
    fs.writeFile("./" + dirName + "/" + (fileName ? fileName : '') + file.extension, file.content, function (error) {
        if (error) {
            console.log(error);
        }
        ;
        console.log("Created a new " + file.extension + " in " + fileName + " component.");
    });
};
