#!/usr/bin/env node

module.exports = () => {
    return `const setEntry = require('./setEntry');
const setPlugins = require('./setPlugins');
const setRules = require('./setRules');
const setOptimization = require('./setOptimization');

module.exports = (env, args) => {
    let getEntry = setEntry(args.entryPoint);
    let getPlugins = setPlugins(args.entryPoint); 
    let getRules = setRules();
    let getOptimization = setOptimization( args.entryPoint );
    return {
        entry : getEntry,
        plugins : getPlugins,
        rules : getRules,
        optimization : getOptimization
    }  
}`;
};