"use strict";
module.exports = function (name) {
    var capitalize = firstChar(name);
    return "\n        import template from \"./template.js\";\n        import \"./" + name + ".scss\";\n\n        /**\n        * @class " + capitalize + "\n        * @classdesc component/class " + capitalize + "\n        */\n        \n        export default class " + capitalize + " {\n            constructor() {\n                this._defaultSelector = \"component-" + name + "\";\n            }\n        \n            render() {\n\n            }\n        }\n    ";
};
function firstChar(str) {
    return str.charAt(0).toUpperCase() + str.substring(1, str.length);
}
