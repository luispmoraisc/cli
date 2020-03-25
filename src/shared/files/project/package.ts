#!/usr/bin/env node

module.exports = (
  fileName: string,
  fileDescription: string,
  fileAuthor: string
) => {
  return `{
  "name": "${fileName}",
  "version": "0.0.1",
  "description": "${fileDescription}",
  "scripts": {
    "local": "webpack-dev-server --open --watch --display-error-details --config ./config/webpack.dev --env=./.env --mode development",
    "build": "rimraf dist && webpack --config ./config/webpack.prod  --env=./.env --mode production",
    "docs": "./node_modules/.bin/jsdoc -c jsdoc.json"
  },
  "author": "${fileAuthor}",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.7.5",
    "@babel/plugin-proposal-optional-chaining": "^7.7.5",
    "@babel/preset-env": "^7.7.6",
    "@babel/runtime": "^7.7.7",
    "autoprefixer": "^9.7.3",
    "babel-eslint": "^10.0.3",
    "babel-loader": "^8.0.6",
    "brotli-webpack-plugin": "^1.1.0",
    "compression-webpack-plugin": "^3.1.0",
    "core-js": "^3.5.0",
    "css-loader": "^3.4.0",
    "docdash": "^1.1.0",
    "dotenv-webpack": "^1.5.7",
    "eslint": "^6.7.2",
    "eslint-config-standard": "^14.1.0",
    "eslint-plugin-import": "^2.19.1",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-node": "^10.0.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-standard": "^4.0.1",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^5.0.2",
    "html-webpack-plugin": "^3.2.0",
    "husky": "^3.1.0",
    "import-sort": "^6.0.0",
    "jsdoc": "^3.6.1",
    "json-server": "^0.15.1",
    "lint-staged": "^9.5.0",
    "mini-css-extract-plugin": "^0.8.2",
    "node-sass": "^4.13.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "postcss-cli": "^6.1.3",
    "postcss-loader": "^3.0.0",
    "resolve-url-loader": "^3.1.1",
    "rimraf": "^3.0.0",
    "sass-loader": "^8.0.0",
    "script-ext-html-webpack-plugin": "^2.1.4",
    "string-replace-loader": "^2.1.1",
    "style-loader": "^1.0.2",
    "svgo": "^1.3.2",
    "svgo-loader": "^2.2.1",
    "terser-webpack-plugin": "^2.3.1",
    "text-replace-html-webpack-plugin": "^1.0.3",
    "webpack": "^4.41.3",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.10.0",
    "webpack-merge": "^4.1.3"
  },
  "dependencies": {},
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {}
    }
  },
  "browserslist": "last 2 versions, IE 11, not ie <= 8"
}`;
};
