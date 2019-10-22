#!/usr/bin/env node

module.exports = () => {
    return `@mixin grid($columns: 2, $tag: "div") {
    #{$tag + $columns} {
        width: 100% / (12 / $columns);
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        float: left;
        padding: 0px 15px;

        &:after {
            display: table;
            content: " ";
            clear: both;
            *zoom: 1;
        }
    }    
}

@include grid(1, '.col-');
@include grid(2, '.col-');
@include grid(3, '.col-');
@include grid(4, '.col-');
@include grid(5, '.col-');
@include grid(6, '.col-');
@include grid(7, '.col-');
@include grid(8, '.col-');
@include grid(9, '.col-');
@include grid(10, '.col-');
@include grid(11, '.col-');
@include grid(12, '.col-');

@media(max-width: 1000px){
    .container{
        max-width: 768px;
    }
}

@media(max-width: 768px){
    .container{
        width: 100%;
    }

    .col-1,
    .col-2,
    .col-3,
    .col-4,
    .col-5,
    .col-6,
    .col-7,
    .col-8,
    .col-9,
    .col-10,
    .col-11,
    .col-12{
        width: 100%;
    }
}`;
};