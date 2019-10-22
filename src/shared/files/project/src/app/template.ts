#!/usr/bin/env node

module.exports = (componentName: string) => {
    return `export default {
    /**
     * Template da classe App
     * @memberof Templates
     * @function app     
     * @return {String} retorna o HTML dos componentes 
    */
    app(){
        return \`<h1>${componentName} run</h1>\`;
    }
}`;
};