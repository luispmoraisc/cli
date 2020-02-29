#!/usr/bin/env node

module.exports = () => {
  return `$colors: (
  'white': #fff,
  'black': #000,
) !default;
$breakpoints: (
  'mobile': 481px,
  'tablet': 769px,
  'desktop': 1025px,
  'tv': 1201px,
) !default;
`;
};
