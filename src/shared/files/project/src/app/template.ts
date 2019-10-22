#!/usr/bin/env node

module.exports = () => {
    return `export default {
    /**
     * Template da classe App
     * @memberof Templates
     * @function app     
     * @return {String} retorna o HTML dos componentes 
    */
    app(){
        return <h1>App run</h1>;
    }
}`;
};