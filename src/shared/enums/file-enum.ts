#!/usr/bin/env node

const fileComponentClass = require("../files/component/class");
const fileComponentTemplate = require("../files/component/template");
const fileComponentScss = require("../files/component/scss");

const fileProjectBabelRC = require("../files/project/babelrc");
const fileProjectEditorConfig = require("../files/project/editorconfig");
const fileProjectEnv = require("../files/project/env");
const fileProjectESLintIgnore = require("../files/project/eslintignore");
const fileProjectESLintRC = require("../files/project/eslintrc");
const fileProjectGitignore = require("../files/project/gitignore");
const fileProjectJsdoc = require("../files/project/jsdoc");
const fileProjectPackage = require("../files/project/package");
const fileProjectPrettier = require("../files/project/prettierrc");
const fileProjectReadme = require("../files/project/readme");

const fileProjectConfigSetEntry = require("../files/project/config/set-entry");
const fileProjectConfigSetOptimization = require("../files/project/config/set-optimization");
const fileProjectConfigSetPlugins = require("../files/project/config/set-plugins");
const fileProjectConfigSetRules = require("../files/project/config/set-rules");
const fileProjectConfigWebpackDev = require("../files/project/config/webpack-dev");
const fileProjectConfigWebpackProd = require("../files/project/config/webpack-prod");
const fileProjectConfigWebpackRules = require("../files/project/config/webpack-rules");

const fileProjectSrcIndex = require("../files/project/src/index");
const fileProjectSrcMain = require("../files/project/src/main");

const fileProjectSrcAppApp = require("../files/project/src/app/app");
const fileProjectSrcAppSass = require("../files/project/src/app/app.scss");
const fileProjectSrcAppTemplate = require("../files/project/src/app/template");

const fileProjectSrcStyleCommon = require("../files/project/src/assets/styles/common");
const fileProjectSrcStyleIndex = require("../files/project/src/assets/styles/index");
const fileProjectSrcStyleMixins = require("../files/project/src/assets/styles/mixins");
const fileProjectSrcStyleVariables = require("../files/project/src/assets/styles/variables");

module.exports = async (
  customFileName: string,
  fileAuthor: string,
  fileDescription: string
) => {
  const componentEnum = await getComponentEnum(
    customFileName,
    fileAuthor,
    fileDescription
  );
  const projectEnum = await getProjectEnum(
    customFileName,
    fileAuthor,
    fileDescription
  );
  const projectSrcEnum = await getProjectSrcEnum(
    customFileName,
    fileAuthor,
    fileDescription
  );
  const projectSrcAppEnum = await getProjectSrcAppEnum(
    customFileName,
    fileAuthor,
    fileDescription
  );
  const projectConfigEnum = await getProjectConfigEnum(
    customFileName,
    fileAuthor,
    fileDescription
  );
  const projectStyleEnum = await getProjectStyleEnum(
    customFileName,
    fileAuthor,
    fileDescription
  );
  return Object.assign(
    componentEnum,
    projectEnum,
    projectSrcEnum,
    projectConfigEnum,
    projectSrcAppEnum,
    projectStyleEnum
  );
};

async function getComponentEnum(
  customFileName: string,
  fileAuthor: string,
  fileDescription: string
) {
  return {
    COMPONENT_CLASS: {
      name: null,
      extension: ".js",
      content: fileComponentClass(customFileName),
      useCustomName: true
    },
    COMPONENT_TEMPLATE: {
      name: "template",
      extension: ".js",
      content: fileComponentTemplate(customFileName)
    },
    COMPONENT_STYLE: {
      name: null,
      extension: ".scss",
      content: fileComponentScss(),
      useCustomName: true
    }
  };
}

async function getProjectEnum(
  customFileName: string,
  fileAuthor: string,
  fileDescription: string
) {
  return {
    PROJECT_BABEL_RC: {
      name: null,
      extension: ".babelrc",
      content: fileProjectBabelRC()
    },
    PROJECT_EDITOR_CONFIG: {
      name: null,
      extension: ".editorconfig",
      content: fileProjectEditorConfig()
    },
    PROJECT_ENV: {
      name: null,
      extension: ".env",
      content: fileProjectEnv()
    },
    PROJECT_ESLINT_IGNORE: {
      name: null,
      extension: ".eslintignore",
      content: fileProjectESLintIgnore()
    },
    PROJECT_ESLINT_RC: {
      name: null,
      extension: ".eslintrc",
      content: fileProjectESLintRC()
    },
    PROJECT_GITIGNORE: {
      name: ".gitignore",
      extension: "",
      content: await fileProjectGitignore(["visualstudio", "visualstudiocode"])
    },
    PROJECT_PRETTIER_RC: {
      name: null,
      extension: ".prettierrc",
      content: fileProjectPrettier()
    },
    PROJECT_JSDOC: {
      name: "jsdoc",
      extension: ".json",
      content: fileProjectJsdoc()
    },
    PROJECT_PACKAGE: {
      name: "package",
      extension: ".json",
      content: fileProjectPackage(customFileName, fileDescription, fileAuthor)
    },
    PROJECT_README: {
      name: "README",
      extension: ".md",
      content: fileProjectReadme()
    }
  };
}

async function getProjectConfigEnum(
  customFileName: string,
  fileAuthor: string,
  fileDescription: string
) {
  return {
    PROJECT_CONFIG_SET_ENTRY: {
      name: "setEntry",
      extension: ".js",
      content: fileProjectConfigSetEntry()
    },
    PROJECT_CONFIG_SET_OPTIMIZATION: {
      name: "setOptimization",
      extension: ".js",
      content: fileProjectConfigSetOptimization()
    },
    PROJECT_CONFIG_SET_PLUGINS: {
      name: "setPlugins",
      extension: ".js",
      content: fileProjectConfigSetPlugins()
    },
    PROJECT_CONFIG_SET_RULES: {
      name: "setRules",
      extension: ".js",
      content: fileProjectConfigSetRules()
    },
    PROJECT_CONFIG_WEBPACK_RULES: {
      name: "webpack.rules",
      extension: ".js",
      content: fileProjectConfigWebpackRules()
    },
    PROJECT_CONFIG_WEBPACK_DEV: {
      name: "webpack.dev",
      extension: ".js",
      content: fileProjectConfigWebpackDev()
    },
    PROJECT_CONFIG_WEBPACK_PROD: {
      name: "webpack.prod",
      extension: ".js",
      content: fileProjectConfigWebpackProd()
    }
  };
}

async function getProjectSrcEnum(
  customFileName: string,
  fileAuthor: string,
  fileDescription: string
) {
  return {
    PROJECT_SRC_INDEX: {
      name: "index",
      extension: ".html",
      content: fileProjectSrcIndex(customFileName)
    },
    PROJECT_SRC_MAIN: {
      name: "main",
      extension: ".js",
      content: fileProjectSrcMain()
    }
  };
}

async function getProjectSrcAppEnum(
  customFileName: string,
  fileAuthor: string,
  fileDescription: string
) {
  return {
    PROJECT_APP_APP: {
      name: "app",
      extension: ".js",
      content: fileProjectSrcAppApp()
    },
    PROJECT_APP_TEMPLATE: {
      name: "template",
      extension: ".js",
      content: fileProjectSrcAppTemplate(customFileName)
    },
    PROJECT_APP_SCSS: {
      name: "app",
      extension: ".scss",
      content: fileProjectSrcAppSass()
    }
  };
}

async function getProjectStyleEnum(
  customFileName: string,
  fileAuthor: string,
  fileDescription: string
) {
  return {
    PROJECT_STYLE_COMMON: {
      name: "_common",
      extension: ".scss",
      content: fileProjectSrcStyleCommon()
    },
    PROJECT_STYLE_INDEX: {
      name: "index",
      extension: ".scss",
      content: fileProjectSrcStyleIndex()
    },
    PROJECT_STYLE_MIXINS: {
      name: "_mixins",
      extension: ".scss",
      content: fileProjectSrcStyleMixins()
    },
    PROJECT_STYLE_VARIABLES: {
      name: "_variables",
      extension: ".scss",
      content: fileProjectSrcStyleVariables()
    }
  };
}
