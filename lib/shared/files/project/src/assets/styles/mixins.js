#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "@function rem($pixels) {\n  @return #{$pixels / map_get($fontsize, 'normal')}rem;\n}\n\n@mixin mq($width, $type: min) {\n  @if map_has_key($breakpoints, $width) {\n    $width: map_get($breakpoints, $width);\n\n    @if $type == max {\n      $width: $width - 1px;\n    }\n\n    @media only screen and (#{$type}-width: $width) {\n      @content;\n    }\n  }\n}\n  ";
};
