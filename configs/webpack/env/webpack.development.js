const { ProgressPlugin } = require("webpack");

/**
 * @param {object} [env]
 * @param {boolean} [env.clean = false]
 * @return {import("webpack").Configuration}
 */
module.exports = function () {
  return {
    mode: "development",
    devtool: "eval",
    output: {
      clean: true,
      devtoolModuleFilenameTemplate: "/[absolute-resource-path]",
    },

    plugins: [new ProgressPlugin()],
  };
};
