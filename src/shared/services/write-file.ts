#!/usr/bin/env node

module.exports = (fs: any, componentName: string, file: any) => {
    fs.writeFile(`./${componentName}/${file.type == 'template' ? 'template' : componentName}.${file.extension}`, file.content, (error: Error) => {
        if (error) {
            console.log(error);
        };
        console.log(`Created a new ${file.type} in ${componentName} component.`);
    });
}