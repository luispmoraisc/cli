const copy = require('../utils/copyFiles');

module.exports = (params) => {
    let dir = `./${params._[1]}`;
    
    copy(dir, params);
    let message = `
        cd ${params._[1]} to open your project
        npm install to install project dependencies
        npm run local to run your project
        npm run docs to generate documentation
        npm run test to generate unity tests
        npm run cy:run to generate e2e tests
    `;

    console.log(message);
}