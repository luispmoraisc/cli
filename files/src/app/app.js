module.exports = () => {
    return `
import template from './template.js';
import '../styles/main.scss';
/**
 * @class App
 * @classdesc Componente principal
*/
export default class App{
    constructor(){}

    /**
     * Este método é responsável por renderizar o projeto     
     * 
     * @memberof App
     * @function render
     * @example var app = new App;
     * app.render();
    */
    render(){
        document.getElementById('app').innerHTML = template.app();
    }
}
    `;
}