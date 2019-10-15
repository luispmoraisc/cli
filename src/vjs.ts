#!/usr/bin/env node

const minimist = require('minimist');
const projectNew = require('./project/new');
const componentGenerate = require('./component/generate');

module.exports = (args: { slice: (arg0: number) => void; }) => {
    const argv = minimist(args.slice(2), { '--': true });

    const newProject = argv.n || argv.new;
    const authorName = argv.a || argv.author;
    const description = argv.d || argv.description;
    const newGenerate = argv.g || argv.generate;

    console.log(newProject);
    console.log(authorName);
    console.log(description);
    console.log(newGenerate);

    if (newProject) {
        projectNew(newProject, authorName, description);
    }

    if (newGenerate) {
        componentGenerate(newGenerate);
    }
}