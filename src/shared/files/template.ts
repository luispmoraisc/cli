#!/usr/bin/env node

module.exports = (name: any) => {
    return `
        export default {
            ${name}() {
                return //your template here;
            }
        }
    `;
}