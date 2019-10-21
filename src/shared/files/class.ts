#!/usr/bin/env node

module.exports = (name: any) => {
    let capitalize = firstChar(name);
    return `import template from "./template.js";
import "./${name}.scss";

/**
* @class ${capitalize}
* @classdesc component/class ${capitalize}
*/

export default class ${capitalize} {
    constructor() {
        this._defaultSelector = "component-${name}";
    }

    render() {

    }
}`;
}

function firstChar(str: string) {
    return str.charAt(0).toUpperCase() + str.substring(1, str.length);
}