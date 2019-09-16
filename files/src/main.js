module.exports = () => {
    return `
import App from './app/app.js';

window.app = new App();
app.render();
    `;
}