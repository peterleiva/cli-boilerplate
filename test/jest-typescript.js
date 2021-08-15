const { resolve } = require("path");
const { defaults: tsjPreset } = require("ts-jest/presets");

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = function (
  tsconfig = resolve(__dirname, "../tsconfig.test.json")
) {
  return {
    preset: "ts-jest",
    transform: {
      ...tsjPreset.transform,
    },
    globals: {
      "ts-jest": {
        tsconfig,
      },
    },
  };
};
