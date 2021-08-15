const {
  configs: { typescript, common },
} = require("./test");

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  ...common,
  ...typescript,
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
