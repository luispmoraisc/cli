#!/usr/bin/env node
"use strict";
module.exports = function (project_name) {
    return "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n  <head>\n    <meta charset=\"utf-8\">\n    <title>" + project_name + "</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">        \n  </head>\n  <body>\n    @@ANALYTICS\n    <div id=\"app\"></div>\n  </body>\n</html>";
};
