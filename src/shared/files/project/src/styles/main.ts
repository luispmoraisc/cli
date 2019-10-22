#!/usr/bin/env node

module.exports = () => {
    return `@import './mixins.scss';
@import './themify.scss';
@import './spinner.scss';
@import '../app/app.scss';`;
};