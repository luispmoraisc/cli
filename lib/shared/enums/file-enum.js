#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var fileComponentClass = require('../files/component/class');
var fileComponentTemplate = require('../files/component/template');
var fileComponentScss = require('../files/component/scss');
var fileProjectPackage = require('../files/project/package');
var fileProjectJsdoc = require('../files/project/jsdoc');
var fileProjectGitignore = require('../files/project/gitignore');
var fileProjectReadme = require('../files/project/readme');
var fileProjectEnv = require('../files/project/env');
var fileProjectConfigSetEntry = require('../files/project/config/set-entry');
var fileProjectConfigSetOptimization = require('../files/project/config/set-optimization');
var fileProjectConfigSetPlugins = require('../files/project/config/set-plugins');
var fileProjectConfigSetRules = require('../files/project/config/set-rules');
var fileProjectConfigWebpackDev = require('../files/project/config/webpack-dev');
var fileProjectConfigWebpackProd = require('../files/project/config/webpack-prod');
var fileProjectConfigWebpackRules = require('../files/project/config/webpack-rules');
var fileProjectSrcIndex = require('../files/project/src/index');
var fileProjectSrcMain = require('../files/project/src/main');
var fileProjectSrcAppApp = require('../files/project/src/app/app');
var fileProjectSrcAppTemplate = require('../files/project/src/app/template');
var fileProjectSrcStyleMain = require('../files/project/src/styles/main');
var fileProjectSrcStyleMixins = require('../files/project/src/styles/mixins');
var fileProjectSrcStyleSpinner = require('../files/project/src/styles/spinner');
var fileProjectSrcStyleThemes = require('../files/project/src/styles/themes');
var fileProjectSrcStyleThemify = require('../files/project/src/styles/themify');
module.exports = function (customFileName, fileAuthor, fileDescription) { return __awaiter(void 0, void 0, void 0, function () {
    var componentEnum, projectEnum, projectSrcEnum, projectConfigEnum, projectAppEnum, projectStyleEnum;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getComponentEnum(customFileName, fileAuthor, fileDescription)];
            case 1:
                componentEnum = _a.sent();
                return [4 /*yield*/, getProjectEnum(customFileName, fileAuthor, fileDescription)];
            case 2:
                projectEnum = _a.sent();
                return [4 /*yield*/, getProjectSrcEnum(customFileName, fileAuthor, fileDescription)];
            case 3:
                projectSrcEnum = _a.sent();
                return [4 /*yield*/, getProjectConfigEnum(customFileName, fileAuthor, fileDescription)];
            case 4:
                projectConfigEnum = _a.sent();
                return [4 /*yield*/, getProjectAppEnum(customFileName, fileAuthor, fileDescription)];
            case 5:
                projectAppEnum = _a.sent();
                return [4 /*yield*/, getProjectStyleEnum(customFileName, fileAuthor, fileDescription)];
            case 6:
                projectStyleEnum = _a.sent();
                return [2 /*return*/, Object.assign(componentEnum, projectEnum, projectSrcEnum, projectConfigEnum, projectAppEnum, projectStyleEnum)];
        }
    });
}); };
function getComponentEnum(customFileName, fileAuthor, fileDescription) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
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
                }];
        });
    });
}
function getProjectEnum(customFileName, fileAuthor, fileDescription) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = {
                        PROJECT_ENV: {
                            name: null,
                            extension: '.env',
                            content: fileProjectEnv()
                        }
                    };
                    _b = {
                        name: '.gitignore',
                        extension: ''
                    };
                    return [4 /*yield*/, fileProjectGitignore(['visualstudio', 'visualstudiocode'])];
                case 1: return [2 /*return*/, (_a.PROJECT_GITIGNORE = (_b.content = _c.sent(),
                        _b),
                        _a.PROJECT_JSDOC = {
                            name: 'jsdoc',
                            extension: '.json',
                            content: fileProjectJsdoc()
                        },
                        _a.PROJECT_PACKAGE = {
                            name: 'package',
                            extension: '.json',
                            content: fileProjectPackage(customFileName, fileDescription, fileAuthor)
                        },
                        _a.PROJECT_README = {
                            name: 'README',
                            extension: '.md',
                            content: fileProjectReadme()
                        },
                        _a)];
            }
        });
    });
}
function getProjectConfigEnum(customFileName, fileAuthor, fileDescription) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
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
                }];
        });
    });
}
function getProjectSrcEnum(customFileName, fileAuthor, fileDescription) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
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
                }];
        });
    });
}
function getProjectAppEnum(customFileName, fileAuthor, fileDescription) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
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
                }];
        });
    });
}
function getProjectStyleEnum(customFileName, fileAuthor, fileDescription) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
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
                }];
        });
    });
}
