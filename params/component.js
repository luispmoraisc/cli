const http = require('http')
const fs = require('fs')
const mainSass = require('../files/src/styles/main')

module.exports = (params) => {    
    let classFile = createClass(params._[2]);
    let templateFile = createTemplateFile(params._[2]);
    let dir = `./${params._[2]}`;

    try{
        fs.mkdirSync(dir);
        fs.appendFile(`./${params._[2]}/${params._[2]}.js`, classFile, (err) => {
            if(err) throw err;
        })

        fs.appendFile(`./${params._[2]}/template.js`, templateFile, (err) => {
            if(err) throw err;
        })

        fs.appendFile(`./${params._[2]}/${params._[2]}.scss`, `// you need to @import this file on //<your_project>/src/styles/main.scss`, (err) => {
            if(err) throw err;
        })        
    }catch(err){
        if(err.Error == 'EEXIST'){
            console.log(`Folder ${params._[2]} exist in the current directory`);
        }else{
            console.log(err);
        }
    }
}

function createClass(name){
    let capitalize = firstChar(name);
    return `import template from "./template.js";
 
import "./${name}.scss";
/**
 * @class ${capitalize}
 * @classdesc component/class ${capitalize}
*/
export default class ${capitalize}{
    constructor(){
      this._defaultSelector = "component-${name}";
    }
    
    render(){
      
    }
}
`;
}

function createTemplateFile(name){
    return `export default {
    ${name}(){
        return //your template here;
    }
}
`;
}

function firstChar(str) {
    return str.charAt(0).toUpperCase() + str.substring(1, str.length);
}