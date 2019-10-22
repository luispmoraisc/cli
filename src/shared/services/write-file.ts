#!/usr/bin/env node

module.exports = (fs: any, dirName: string, file: any, customFileName: string) => {
    const fileName = file.useCustomName ? customFileName : file.name;
    fs.writeFile(`./${dirName}/${fileName ? fileName : ''}${file.extension}`, file.content, (error: Error) => {
        if (error) {
            console.log(error);
        };
        console.log(`Created a new ${file.extension} in ${fileName} component.`);
    });
}