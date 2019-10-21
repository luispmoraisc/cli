#!/usr/bin/env node
"use strict";
module.exports = function (fs, dirName, file, customFileName) {
    var fileName = file.name ? file.name : customFileName;
    fs.writeFile("./" + dirName + "/" + fileName + file.extension, file.content, function (error) {
        if (error) {
            console.log(error);
        }
        ;
        console.log("Created a new " + file.extension + " in " + fileName + " component.");
    });
};
