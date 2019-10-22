#!/usr/bin/env node

module.exports = () => {
    return `@import './mixins.scss';
@import './themify.scss';
@import '../app/app.scss';`;
};