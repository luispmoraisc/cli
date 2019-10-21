#!/usr/bin/env node

export {};

const fs = require('fs');
const writeFile = require('../shared/services/write-file');
const fileEnum = require('../shared/enums/file-enum');

module.exports = async (projectName: string, authorName: string, description: string) => {
    console.log('project name: ', projectName);
    console.log('author name: ', authorName);
    console.log('project description: ', description);

    try {
        fs.statSync(projectName);
    }
    catch (error) { }

    const defaultDir = projectName;
    const srcDir = `${projectName}/src`;
    const configDir = `${projectName}/config`;
    const appDir = `${projectName}/app`;
    const stylesDir = `${projectName}/styles`;

    if (!fs.existsSync(defaultDir)) {
        fs.mkdirSync(defaultDir);
        fs.mkdirSync(srcDir);
        fs.mkdirSync(configDir);
        fs.mkdirSync(appDir);
        fs.mkdirSync(stylesDir);
    }

    const allFiles = await fileEnum(projectName, authorName, description);

    writeFile(fs, defaultDir, allFiles.PACKAGE);
    writeFile(fs, defaultDir, allFiles.JSDOC);
    writeFile(fs, defaultDir, allFiles.GITIGNORE);
    writeFile(fs, defaultDir, allFiles.README);
    writeFile(fs, defaultDir, allFiles.ENV);
    
    // config
    writeFile(fs, configDir, allFiles.SETENTRY);
    writeFile(fs, configDir, allFiles.SETOPTIMIZATION);
    writeFile(fs, configDir, allFiles.SETPLUGINS);
    writeFile(fs, configDir, allFiles.SETRULES);
    writeFile(fs, configDir, allFiles.WEBPACKRULES);
    writeFile(fs, configDir, allFiles.WEBPACKDEV);
    writeFile(fs, configDir, allFiles.WEBPACKPROD);
    
    // src
    writeFile(fs, srcDir, allFiles.INDEX);
    writeFile(fs, srcDir, allFiles.MAINJS);

    // application
    writeFile(fs, appDir, allFiles.APPJS);
    writeFile(fs, appDir, allFiles.TEMPLATE_NEWP);
    writeFile(fs, appDir, allFiles.APPCSSS);

    // styles
    writeFile(fs, stylesDir, allFiles.MAINSCSS);
    writeFile(fs, stylesDir, allFiles.MIXINS);
    writeFile(fs, stylesDir, allFiles.SPINNER);
    writeFile(fs, stylesDir, allFiles.THEMES);
    writeFile(fs, stylesDir, allFiles.THEMIFY);
}