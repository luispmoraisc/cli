#!/usr/bin/env node

module.exports = () => {
    return `{
    "tags": {
        "allowUnknownTags": false
    },
    "source": {
        "include": "./src",
        "includePattern": ".js$",
        "excludePattern": "(node_modules/|docs)|.spec.js"
    },
    "plugins": [
        "plugins/markdown"
    ],
    "opts": {
        "template": "node_modules/docdash",
        "encoding": "utf8",
        "destination": "docs/",
        "recurse": true,
        "verbose": true
    },
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": false
    },
    "docdash" : {
        "static" : true,
        "sort" : false,
        "sectionOrder" : [
            "Classes",
            "Modules",
            "Externals",
            "Events",
            "Namespaces",
            "Mixins",
            "Tutorials",
            "Interfaces"
        ],
        "disqus": "",
        "search": true,
        "collapse": true,
        "wrap": true,
        "typedefs": true,
        "navLevel": 0,
        "private": true,
        "removeQuotes": "all",
        "scripts": []
    }
    }`;
}