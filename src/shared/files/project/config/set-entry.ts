#!/usr/bin/env node

module.exports = () => {
    return `module.exports = ( entry ) => {
    let stringEntry = \`./src/\${entry}.js\`;
    let objEntry = {};
    objEntry[entry] = stringEntry;
    return objEntry;
}`;
};