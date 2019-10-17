#!/usr/bin/env node

module.exports = (fs: any, componentName: string, file: any, type: string, extension: string) => {
    fs.writeFile(`./${componentName}/${type == 'template' ? 'template' : componentName}.${extension}`, file, (error: Error) => {
        if (error) {
            console.log(error);
        };
        console.log(`Created a new ${type} in ${componentName} component.`);
    });
}