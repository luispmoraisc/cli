module.exports = () => {
    return `
export default {
    /**
     * Template da classe App
     * @memberof Templates
     * @function app     
     * @return {String} retorna o HTML dos componentes 
    */
    app(){
        return ##template_here##;
    }
}
    `;
}