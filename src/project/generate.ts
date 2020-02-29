#!/usr/bin/env node

export {};

const fs = require("fs");
const writeFile = require("../shared/services/write-file");
const fileEnum = require("../shared/enums/file-enum");

module.exports = async (
  projectName: string,
  authorName: string,
  description: string
) => {
  try {
    fs.statSync(projectName);
  } catch (error) {}

  const defaultDir = projectName;
  const configDir = `${projectName}/config`;
  const srcDir = `${projectName}/src`;
  const appDir = `${srcDir}/app`;
  const assetsDir = `${srcDir}/assets`;
  const imgDir = `${assetsDir}/img`;
  const stylesDir = `${assetsDir}/styles`;

  if (!fs.existsSync(defaultDir)) {
    fs.mkdirSync(defaultDir);
    fs.mkdirSync(srcDir);
    fs.mkdirSync(configDir);
    fs.mkdirSync(appDir);
    fs.mkdirSync(assetsDir);
    fs.mkdirSync(imgDir);
    fs.mkdirSync(stylesDir);
  }

  const allFiles = await fileEnum(projectName, authorName, description);

  writeFile(fs, defaultDir, allFiles.PROJECT_BABEL_RC);
  writeFile(fs, defaultDir, allFiles.PROJECT_EDITOR_CONFIG);
  writeFile(fs, defaultDir, allFiles.PROJECT_ENV);
  writeFile(fs, defaultDir, allFiles.PROJECT_ESLINT_IGNORE);
  writeFile(fs, defaultDir, allFiles.PROJECT_ESLINT_RC);
  writeFile(fs, defaultDir, allFiles.PROJECT_GITIGNORE);
  writeFile(fs, defaultDir, allFiles.PROJECT_PRETTIER_RC);
  writeFile(fs, defaultDir, allFiles.PROJECT_JSDOC);
  writeFile(fs, defaultDir, allFiles.PROJECT_PACKAGE);
  writeFile(fs, defaultDir, allFiles.PROJECT_README);

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
  writeFile(fs, stylesDir, allFiles.PROJECT_STYLE_INDEX);
  writeFile(fs, stylesDir, allFiles.PROJECT_STYLE_MIXINS);
  writeFile(fs, stylesDir, allFiles.PROJECT_STYLE_COMMON);
  writeFile(fs, stylesDir, allFiles.PROJECT_STYLE_VARIABLES);
};
