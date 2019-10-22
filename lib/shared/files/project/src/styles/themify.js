#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "@import 'themes.scss';\n\n@mixin themify($themes: $themes) {\n    @each $theme,\n    $map in $themes {\n        .theme-#{$theme} & {\n            $theme-map: () !global;\n            @each $key,\n            $submap in $map {\n                $value: map-get(map-get($themes, $theme), '#{$key}');\n                $theme-map: map-merge($theme-map, ($key: $value)) !global;\n            }\n            @content;\n            $theme-map: null !global;\n        }\n    }\n}\n\n@function themed($key) {\n    @return map-get($theme-map, $key);\n}";
};
