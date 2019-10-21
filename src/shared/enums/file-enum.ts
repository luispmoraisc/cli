#!/usr/bin/env node

const fileClass = require('../files/class');
const fileTemplate = require('../files/template');
const fileScss = require('../files/scss');
const filePackage = require('../files/package');
const fileJsDoc = require('../files/jsdoc');
const fileGitignore = require('../files/gitignore');
const fileReadme = require('../files/readme');

module.exports = async (customFileName: string, fileAuthor: string, fileDescription: string) => {
    return {
        CLASS: {
            name: null,
            extension: '.js',
            content: fileClass(customFileName),
            useCustomName: true
        },
        TEMPLATE_NEWC: {
            name: 'template',
            extension: '.js',
            content: fileTemplate(customFileName)
        },
        STYLE: {
            name: null,
            extension: '.scss',
            content: fileScss(),
            useCustomName: true
        },
        PACKAGE: {
            name: 'package',
            extension: '.json',
            content: filePackage(customFileName, fileDescription, fileAuthor)
        },
        JSDOC: {
            name: 'jsdoc',
            extension: '.json',
            content: fileJsDoc()
        },
        GITIGNORE: {
            name: '.gitignore',
            extension: '',
            content: await fileGitignore(['visualstudio', 'visualstudiocode'])
        },
        README: {
            name: 'README',
            extension: '.md',
            content: fileReadme()
        },
        ENV: {
            name: null,
            extension: '.env',
            content: null
        },
        SETENTRY: {
            name: 'setEntry',
            extension: '.js',
            content: null
        },
        SETOPTIMIZATION: {
            name: 'setOptimization',
            extension: '.js',
            content: null
        },
        SETPLUGINS: {
            name: 'setPlugins',
            extension: '.js',
            content: null
        },
        SETRULES: {
            name: 'setRules',
            extension: '.js',
            content: null
        },
        WEBPACKRULES: {
            name: 'webpack.rules',
            extension: '.js',
            content: null
        },
        WEBPACKDEV: {
            name: 'webpack.dev',
            extension: '.js',
            content: null
        },
        WEBPACKPROD: {
            name: 'webpack.prod',
            extension: '.js',
            content: null
        },
        INDEX: {
            name: 'index',
            extension: '.html',
            content: null
        },
        MAINJS: {
            name: 'main',
            extension: '.js',
            content: null
        },
        APPJS: {
            name: 'app',
            extension: '.js',
            content: null
        },
        TEMPLATE_NEWP: {
            name: 'template',
            extension: '.js',
            content: null
        },
        APPCSSS: {
            name: 'app',
            extension: '.scss',
            content: null
        },
        MAINSCSS: {
            name: 'main',
            extension: '.scss',
            content: null
        },
        MIXINS: {
            name: 'mixins',
            extension: '.scss',
            content: null
        },
        SPINNER: {
            name: 'spinner',
            extension: '.scss',
            content: null
        },
        THEMES: {
            name: 'themes',
            extension: '.scss',
            content: null
        },
        THEMIFY: {
            name: 'themify',
            extension: '.scss',
            content: null
        }
    }
}