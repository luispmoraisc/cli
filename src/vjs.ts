#!/usr/bin/env node

export { };

const minimist = require('minimist');
const generateProject = require('./project/generate');
const generateComponent = require('./component/generate');
const { exec } = require('child_process');

module.exports = async (args: { slice: (arg0: number) => void; }) => {
    const argv = minimist(args.slice(2), { '--': true });

    const projectName = argv.n || argv.new;
    const authorName = argv.a || argv.author;
    const description = argv.d || argv.description;
    const componentName = argv.g || argv.generate;

    if (projectName) {
        await generateProject(projectName, authorName, description);

        console.log("Installing dependencies ...");

        await exec(`cd ${projectName} && git init && npm install`,
            (error: Error) => {
                if (error) {
                    console.log(error);
                    return;
                }
                console.log(`Created a new ${projectName} project and installed all dependencies`);
            });
    }

    if (componentName) {
        await generateComponent(componentName);
    }
}