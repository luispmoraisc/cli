#!/usr/bin/env node

const fileComponentClass = require('../files/component/class');
const fileComponentTemplate = require('../files/component/template');
const fileComponentScss = require('../files/component/scss');

const fileProjectPackage = require('../files/project/package');
const fileProjectJsdoc = require('../files/project/jsdoc');
const fileProjectGitignore = require('../files/project/gitignore');
const fileProjectReadme = require('../files/project/readme');
const fileProjectEnv = require('../files/project/env');

const fileProjectConfigSetEntry = require('../files/project/config/set-entry');
const fileProjectConfigSetOptimization = require('../files/project/config/set-optimization');
const fileProjectConfigSetPlugins = require('../files/project/config/set-plugins');
const fileProjectConfigSetRules = require('../files/project/config/set-rules');
const fileProjectConfigWebpackDev = require('../files/project/config/webpack-dev');
const fileProjectConfigWebpackProd = require('../files/project/config/webpack-prod');
const fileProjectConfigWebpackRules = require('../files/project/config/webpack-rules');

const fileProjectSrcIndex = require('../files/project/src/index');
const fileProjectSrcMain = require('../files/project/src/main');

const fileProjectSrcAppApp = require('../files/project/src/app/app');
const fileProjectSrcAppTemplate = require('../files/project/src/app/template');

const fileProjectSrcStyleMain = require('../files/project/src/styles/main');
const fileProjectSrcStyleMixins = require('../files/project/src/styles/mixins');
const fileProjectSrcStyleSpinner = require('../files/project/src/styles/spinner');
const fileProjectSrcStyleThemes = require('../files/project/src/styles/themes');
const fileProjectSrcStyleThemify = require('../files/project/src/styles/themify');

module.exports = async (customFileName: string, fileAuthor: string, fileDescription: string) => {
    const componentEnum = await getComponentEnum(customFileName, fileAuthor, fileDescription);
    const projectEnum = await getProjectEnum(customFileName, fileAuthor, fileDescription);
    const projectSrcEnum = await getProjectSrcEnum(customFileName, fileAuthor, fileDescription);
    const projectConfigEnum = await getProjectConfigEnum(customFileName, fileAuthor, fileDescription);
    const projectAppEnum = await getProjectAppEnum(customFileName, fileAuthor, fileDescription);
    const projectStyleEnum = await getProjectStyleEnum(customFileName, fileAuthor, fileDescription);
    return Object.assign(componentEnum, projectEnum, projectSrcEnum, projectConfigEnum, projectAppEnum, projectStyleEnum);
}

async function getComponentEnum(customFileName: string, fileAuthor: string, fileDescription: string) {
    return {
        COMPONENT_CLASS: {
            name: null,
            extension: '.js',
            content: fileComponentClass(customFileName),
            useCustomName: true
        },
        COMPONENT_TEMPLATE: {
            name: 'template',
            extension: '.js',
            content: fileComponentTemplate(customFileName)
        },
        COMPONENT_STYLE: {
            name: null,
            extension: '.scss',
            content: fileComponentScss(),
            useCustomName: true
        },
    }
}

async function getProjectEnum(customFileName: string, fileAuthor: string, fileDescription: string) {
    return {
        PROJECT_ENV: {
            name: null,
            extension: '.env',
            content: fileProjectEnv()
        },
        PROJECT_GITIGNORE: {
            name: '.gitignore',
            extension: '',
            content: await fileProjectGitignore(['visualstudio', 'visualstudiocode'])
        },
        PROJECT_JSDOC: {
            name: 'jsdoc',
            extension: '.json',
            content: fileProjectJsdoc()
        },
        PROJECT_PACKAGE: {
            name: 'package',
            extension: '.json',
            content: fileProjectPackage(customFileName, fileDescription, fileAuthor)
        },
        PROJECT_README: {
            name: 'README',
            extension: '.md',
            content: fileProjectReadme()
        },
    }
}

async function getProjectConfigEnum(customFileName: string, fileAuthor: string, fileDescription: string) {
    return {
        PROJECT_CONFIG_SET_ENTRY: {
            name: 'setEntry',
            extension: '.js',
            content: fileProjectConfigSetEntry()
        },
        PROJECT_CONFIG_SET_OPTIMIZATION: {
            name: 'setOptimization',
            extension: '.js',
            content: fileProjectConfigSetOptimization()
        },
        PROJECT_CONFIG_SET_PLUGINS: {
            name: 'setPlugins',
            extension: '.js',
            content: fileProjectConfigSetPlugins()
        },
        PROJECT_CONFIG_SET_RULES: {
            name: 'setRules',
            extension: '.js',
            content: fileProjectConfigSetRules()
        },
        PROJECT_CONFIG_WEBPACK_RULES: {
            name: 'webpack.rules',
            extension: '.js',
            content: fileProjectConfigWebpackRules()
        },
        PROJECT_CONFIG_WEBPACK_DEV: {
            name: 'webpack.dev',
            extension: '.js',
            content: fileProjectConfigWebpackDev()
        },
        PROJECT_CONFIG_WEBPACK_PROD: {
            name: 'webpack.prod',
            extension: '.js',
            content: fileProjectConfigWebpackProd()
        },
    }
}

async function getProjectSrcEnum(customFileName: string, fileAuthor: string, fileDescription: string) {
    return {
        PROJECT_SRC_INDEX: {
            name: 'index',
            extension: '.html',
            content: fileProjectSrcIndex(customFileName)
        },
        PROJECT_SRC_MAIN: {
            name: 'main',
            extension: '.js',
            content: fileProjectSrcMain()
        },
    }
}

async function getProjectAppEnum(customFileName: string, fileAuthor: string, fileDescription: string) {
    return {
        PROJECT_APP_APP: {
            name: 'app',
            extension: '.js',
            content: fileProjectSrcAppApp()
        },
        PROJECT_APP_TEMPLATE: {
            name: 'template',
            extension: '.js',
            content: fileProjectSrcAppTemplate()
        },
        PROJECT_APP_SCSS: {
            name: 'app',
            extension: '.scss',
            content: ''
        },
    }
}

async function getProjectStyleEnum(customFileName: string, fileAuthor: string, fileDescription: string) {
    return {
        PROJECT_STYLE_MAIN: {
            name: 'main',
            extension: '.scss',
            content: fileProjectSrcStyleMain()
        },
        PROJECT_STYLE_MIXINS: {
            name: 'mixins',
            extension: '.scss',
            content: fileProjectSrcStyleMixins()
        },
        PROJECT_STYLE_SPINNER: {
            name: 'spinner',
            extension: '.scss',
            content: fileProjectSrcStyleSpinner()
        },
        PROJECT_STYLE_THEMES: {
            name: 'themes',
            extension: '.scss',
            content: fileProjectSrcStyleThemes()
        },
        PROJECT_STYLE_THEMIFY: {
            name: 'themify',
            extension: '.scss',
            content: fileProjectSrcStyleThemify()
        },
    }
}
