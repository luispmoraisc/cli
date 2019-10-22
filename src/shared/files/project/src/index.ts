#!/usr/bin/env node

module.exports = (project_name: string) => {
    return `<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="utf-8">
        <title>${project_name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">        
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>`;
};