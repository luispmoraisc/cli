#!/usr/bin/env node

const fileClass = require('../files/class');
const fileTemplate = require('../files/template');
const fileScss = require('../files/scss');
const filePackage = require('../files/package');
const fileGitignore = require('../files/gitignore');

module.exports = async (customFileName: string, fileAuthor: string, fileDescription: string) => {
    return {
        CLASS: {
            name: null,
            extension: '.js',
            content: fileClass(customFileName)
        },
        TEMPLATE: {
            name: 'template',
            extension: '.js',
            content: fileTemplate(customFileName)
        },
        STYLE: {
            name: null,
            extension: '.scss',
            content: fileScss()
        },
        PACKAGE: {
            name: 'package',
            extension: '.json',
            content: filePackage(customFileName, fileDescription, fileAuthor)
        },
        JSDOC: {
            name: 'jsdoc',
            extension: '.json',
            content: null
        },
        GITIGNORE: {
            name: '.gitignore',
            extension: '',
            content: await fileGitignore(['visualstudio', 'visualstudiocode'])
        }
    }
}