const { config } = require("@swc/core/spack");

module.exports = config({
  options:{minify: true,}, 
  entry: {
    web: __dirname + "/src/index.ts",
  },
  output: {
    path: __dirname + "/dist/swc",
  },
  module: {},
});
