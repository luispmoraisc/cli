#!/usr/bin/env node
declare const fileClass: any;
declare const fileTemplate: any;
declare const fileScss: any;
declare const fileTypes: {
    CLASS: {
        type: string;
        extension: string;
        content: any;
    };
    TEMPLATE: {
        type: string;
        extension: string;
        content: any;
    };
    STYLE: {
        type: string;
        extension: string;
        content: any;
    };
};
