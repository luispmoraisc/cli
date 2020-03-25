#!/usr/bin/env node
declare const fileComponentClass: any;
declare const fileComponentTemplate: any;
declare const fileComponentScss: any;
declare const fileProjectBabelRC: any;
declare const fileProjectEditorConfig: any;
declare const fileProjectEnv: any;
declare const fileProjectESLintIgnore: any;
declare const fileProjectESLintRC: any;
declare const fileProjectGitignore: any;
declare const fileProjectJsdoc: any;
declare const fileProjectPackage: any;
declare const fileProjectPrettier: any;
declare const fileProjectReadme: any;
declare const fileProjectConfigSetEntry: any;
declare const fileProjectConfigSetOptimization: any;
declare const fileProjectConfigSetPlugins: any;
declare const fileProjectConfigSetRules: any;
declare const fileProjectConfigWebpackDev: any;
declare const fileProjectConfigWebpackProd: any;
declare const fileProjectConfigWebpackRules: any;
declare const fileProjectSrcIndex: any;
declare const fileProjectSrcMain: any;
declare const fileProjectSrcAppApp: any;
declare const fileProjectSrcAppSass: any;
declare const fileProjectSrcAppTemplate: any;
declare const fileProjectSrcStyleCommon: any;
declare const fileProjectSrcStyleIndex: any;
declare const fileProjectSrcStyleMixins: any;
declare const fileProjectSrcStyleVariables: any;
declare function getComponentEnum(customFileName: string, fileAuthor: string, fileDescription: string): Promise<{
    COMPONENT_CLASS: {
        name: null;
        extension: string;
        content: any;
        useCustomName: boolean;
    };
    COMPONENT_TEMPLATE: {
        name: string;
        extension: string;
        content: any;
    };
    COMPONENT_STYLE: {
        name: null;
        extension: string;
        content: any;
        useCustomName: boolean;
    };
}>;
declare function getProjectEnum(customFileName: string, fileAuthor: string, fileDescription: string): Promise<{
    PROJECT_BABEL_RC: {
        name: null;
        extension: string;
        content: any;
    };
    PROJECT_EDITOR_CONFIG: {
        name: null;
        extension: string;
        content: any;
    };
    PROJECT_ENV: {
        name: null;
        extension: string;
        content: any;
    };
    PROJECT_ESLINT_IGNORE: {
        name: null;
        extension: string;
        content: any;
    };
    PROJECT_ESLINT_RC: {
        name: null;
        extension: string;
        content: any;
    };
    PROJECT_GITIGNORE: {
        name: string;
        extension: string;
        content: any;
    };
    PROJECT_PRETTIER_RC: {
        name: null;
        extension: string;
        content: any;
    };
    PROJECT_JSDOC: {
        name: string;
        extension: string;
        content: any;
    };
    PROJECT_PACKAGE: {
        name: string;
        extension: string;
        content: any;
    };
    PROJECT_README: {
        name: string;
        extension: string;
        content: any;
    };
}>;
declare function getProjectConfigEnum(customFileName: string, fileAuthor: string, fileDescription: string): Promise<{
    PROJECT_CONFIG_SET_ENTRY: {
        name: string;
        extension: string;
        content: any;
    };
    PROJECT_CONFIG_SET_OPTIMIZATION: {
        name: string;
        extension: string;
        content: any;
    };
    PROJECT_CONFIG_SET_PLUGINS: {
        name: string;
        extension: string;
        content: any;
    };
    PROJECT_CONFIG_SET_RULES: {
        name: string;
        extension: string;
        content: any;
    };
    PROJECT_CONFIG_WEBPACK_RULES: {
        name: string;
        extension: string;
        content: any;
    };
    PROJECT_CONFIG_WEBPACK_DEV: {
        name: string;
        extension: string;
        content: any;
    };
    PROJECT_CONFIG_WEBPACK_PROD: {
        name: string;
        extension: string;
        content: any;
    };
}>;
declare function getProjectSrcEnum(customFileName: string, fileAuthor: string, fileDescription: string): Promise<{
    PROJECT_SRC_INDEX: {
        name: string;
        extension: string;
        content: any;
    };
    PROJECT_SRC_MAIN: {
        name: string;
        extension: string;
        content: any;
    };
}>;
declare function getProjectSrcAppEnum(customFileName: string, fileAuthor: string, fileDescription: string): Promise<{
    PROJECT_APP_APP: {
        name: string;
        extension: string;
        content: any;
    };
    PROJECT_APP_TEMPLATE: {
        name: string;
        extension: string;
        content: any;
    };
    PROJECT_APP_SCSS: {
        name: string;
        extension: string;
        content: any;
    };
}>;
declare function getProjectStyleEnum(customFileName: string, fileAuthor: string, fileDescription: string): Promise<{
    PROJECT_STYLE_COMMON: {
        name: string;
        extension: string;
        content: any;
    };
    PROJECT_STYLE_INDEX: {
        name: string;
        extension: string;
        content: any;
    };
    PROJECT_STYLE_MIXINS: {
        name: string;
        extension: string;
        content: any;
    };
    PROJECT_STYLE_VARIABLES: {
        name: string;
        extension: string;
        content: any;
    };
}>;
