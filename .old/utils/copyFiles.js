const fs = require('fs');
const package = require('../files/package.json');
const jsDoc = require('../files/jsdoc');
const gitignore = require('../files/gitignore');
const readme = require('../files/readme');
const webpackDev = require('../files/config/webpack.dev');
const webpackProd = require('../files/config/webpack.prod');
const webpackRules = require('../files/config/webpack.rules');
const webpackSetEntry = require('../files/config/setEntry');
const webpackSetOptimization = require('../files/config/setOptimization');
const webpackSetPlugins = require('../files/config/setPlugins');
const webpackSetRules = require('../files/config/setRules');
const indexHTML = require('../files/src/index.html');
const mainJS = require('../files/src/main');
const appJS = require('../files/src/app/app');
const templateJS = require('../files/src/app/template');
const error = require('../utils/error');
const mainSass = require('../files/src/styles/main');
const mixins = require('../files/src/styles/mixins');
const spinner = require('../files/src/styles/spinner');
const themes = require('../files/src/styles/themes');
const themify = require('../files/src/styles/themify');

module.exports = ( folder, params ) => { 
    let dir = `./${params._[1]}`;
    let src = `${dir}/src`,
        config = `${dir}/config`;
    let application = `${src}/app`,
        styles = `${src}/styles`;    
    try{
        fs.mkdirSync(dir);
        fs.mkdirSync(src);
        fs.mkdirSync(config);
        fs.mkdirSync(application);
        fs.mkdirSync(styles);
    }catch(err){
        error(`There was an error generating folders.Check if the current folder not name is identical project`, true)
        return;
    }

    try{                
        fs.appendFile(`./${dir}/package.json`, generatePackageJson(params), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`./${dir}/jsdoc.json`, JSON.stringify(jsDoc(), null, '\t'), (err) => {
            if(err) throw err;
        })                        
        fs.appendFile(`./${dir}/.gitignore`, gitignore(), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`./${dir}/README.md`, readme(), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`./${dir}/.env`, 'ASSETS_URL=./', (err) => {
            if(err) throw err;
        })
        fs.appendFile(`${config}/setEntry.js`, webpackSetEntry(), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`${config}/setOptimization.js`, webpackSetOptimization(), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`${config}/setPlugins.js`, webpackSetPlugins(), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`${config}/setRules.js`, webpackSetRules(), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`${config}/webpack.rules.js`, webpackRules().replace(/##ASSETS_URL##/g, '`${ASSETS_URL}`'), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`${config}/webpack.dev.js`, webpackDev().replace(/##ASSETS_URL##/g, '`${ASSETS_URL}`'), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`${config}/webpack.prod.js`, webpackProd(), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`${src}/index.html`, indexHTML().replace(/##project_name##/g, params._[1]), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`./${src}/main.js`, mainJS(), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`./${application}/app.js`, appJS(), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`./${application}/template.js`, templateJS().replace(/##template_here##/g, '`<h1>App run</h1>`'), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`./${application}/app.scss`, '', (err) => {
            if(err) throw err;
        })
        fs.appendFile(`${styles}/main.scss`, mainSass(), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`${styles}/mixins.scss`, mixins(), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`${styles}/spinner.scss`, spinner(), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`${styles}/themes.scss`, themes(), (err) => {
            if(err) throw err;
        })
        fs.appendFile(`${styles}/themify.scss`, themify(), (err) => {
            if(err) throw err;
        })
    }catch(err){
        error(`There was an error generating files.`, true)
        return;
    }
}

function generatePackageJson( params ){
    let file = package();
    file.name = params._[1];
    file.description = params.description;
    file.author = params.author;
    return JSON.stringify(file, null, '\t');
}