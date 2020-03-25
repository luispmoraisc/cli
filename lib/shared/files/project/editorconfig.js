#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "# https://EditorConfig.org\nroot = true\n\n[*]\ncharset = utf-8\nend_of_line = lf\nindent_size = 2\nindent_style = space\ninsert_final_newline = true\nmax_line_length = 120\ntrim_trailing_whitespace = true\n\n[*.md]\nmax_line_length = 0\ntrim_trailing_whitespace = false\n\n[COMMIT_EDITMSG]\nmax_line_length = 0";
};
