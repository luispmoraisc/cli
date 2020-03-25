#!/usr/bin/env node

module.exports = () => {
  return `import './app.scss';
import template from './template.js';
/**
 * @class App
 * @classdesc Componente principal
 * @constructs App
*/
export default class App{
  constructor(){}

  /**
   * @description Este método é responsável por renderizar o projeto
   * @memberof App
   * @function render
   * @example var app = new App;
   * app.render();
  */
  render(){
    document.getElementById('app').innerHTML = template.app();
  }
}`;
};
