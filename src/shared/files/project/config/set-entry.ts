#!/usr/bin/env node

module.exports = () => {
  return `module.exports = () => {
  const objEntry = {
    main: \`./src/main.js\`,
  };
  return objEntry;
};
`;
};
