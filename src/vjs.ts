#!/usr/bin/env node

export { };

const minimist = require('minimist');
const generateProject = require('./project/generate');
const generateComponent = require('./component/generate');
const { exec } = require('child_process');
const { Spinner } = require('cli-spinner');

module.exports = async (args: { slice: (arg0: number) => void; }) => {
    const argv = minimist(args.slice(2), { '--': true });

    const projectName = argv.n || argv.new;
    const authorName = argv.a || argv.author;
    const description = argv.d || argv.description;
    const componentName = argv.g || argv.generate;

    if (projectName) {
        await generateProject(projectName, authorName, description);

        const spinner = new Spinner('Installing dependencies');
        spinner.start();
        
        await exec(`cd ${projectName} && git init && npm install`, function (error: Error, stdout: any, stderr: any) {
            // if (error || stderr) console.log(error || stderr);
            spinner.stop();
        });
    }

    if (componentName) {
        await generateComponent(componentName);
    }
}