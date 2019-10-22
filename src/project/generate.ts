#!/usr/bin/env node

export {};

const fs = require('fs');
const writeFile = require('../shared/services/write-file');
const fileEnum = require('../shared/enums/file-enum');

module.exports = async (projectName: string, authorName: string, description: string) => {
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

    writeFile(fs, defaultDir, allFiles.PROJECT_PACKAGE);
    writeFile(fs, defaultDir, allFiles.PROJECT_JSDOC);
    writeFile(fs, defaultDir, allFiles.PROJECT_GITIGNORE);
    writeFile(fs, defaultDir, allFiles.PROJECT_README);
    writeFile(fs, defaultDir, allFiles.PROJECT_ENV);
    
    // config
    writeFile(fs, configDir, allFiles.PROJECT_CONFIG_SET_ENTRY);
    writeFile(fs, configDir, allFiles.PROJECT_CONFIG_SET_OPTIMIZATION);
    writeFile(fs, configDir, allFiles.PROJECT_CONFIG_SET_PLUGINS);
    writeFile(fs, configDir, allFiles.PROJECT_CONFIG_SET_RULES);
    writeFile(fs, configDir, allFiles.PROJECT_CONFIG_WEBPACK_RULES);
    writeFile(fs, configDir, allFiles.PROJECT_CONFIG_WEBPACK_DEV);
    writeFile(fs, configDir, allFiles.PROJECT_CONFIG_WEBPACK_PROD);
    
    // src
    writeFile(fs, srcDir, allFiles.PROJECT_SRC_INDEX);
    writeFile(fs, srcDir, allFiles.PROJECT_SRC_MAIN);

    // application
    writeFile(fs, appDir, allFiles.PROJECT_APP_APP);
    writeFile(fs, appDir, allFiles.PROJECT_APP_TEMPLATE);
    writeFile(fs, appDir, allFiles.PROJECT_APP_SCSS);

    // styles
    writeFile(fs, stylesDir, allFiles.PROJECT_STYLE_MAIN);
    writeFile(fs, stylesDir, allFiles.PROJECT_STYLE_MIXINS);
    writeFile(fs, stylesDir, allFiles.PROJECT_STYLE_SPINNER);
    writeFile(fs, stylesDir, allFiles.PROJECT_STYLE_THEMES);
    writeFile(fs, stylesDir, allFiles.PROJECT_STYLE_THEMIFY);
}