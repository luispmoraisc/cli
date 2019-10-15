module.exports = () => {
    return `
const setEntry = require('./setEntry');
const setPlugins = require('./setPlugins');
const setRules = require('./setRules');
const setOptimization = require('./setOptimization');

module.exports = (env, args) => {
    let getEntry = setEntry(args.entry);
    let getPlugins = setPlugins(args.entry); 
    let getRules = setRules();
    let getOptimization = setOptimization( args.entry );
    return {
        entry : getEntry,
        plugins : getPlugins,
        rules : getRules,
        optimization : getOptimization
    }  
}
    `;
}