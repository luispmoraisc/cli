#!/usr/bin/env node

export { };

const minimist = require('minimist');
const generateProject = require('./project/generate');
const generateComponent = require('./component/generate');

module.exports = async (args: { slice: (arg0: number) => void; }) => {
    const argv = minimist(args.slice(2), { '--': true });

    const projectName = argv.n || argv.new;
    const authorName = argv.a || argv.author;
    const description = argv.d || argv.description;
    const componentName = argv.g || argv.generate;

    if (projectName) {
        await generateProject(projectName, authorName, description);
    }

    if (componentName) {
        await generateComponent(componentName);
    }
}