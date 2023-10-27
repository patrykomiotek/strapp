const path = require("path");
// tsconfig-paths

module.exports = {
  webpack: {
    // configure: {
    //   entry: './path/to/my/entry/file.js',
    // },
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@services": path.resolve(__dirname, "src/services"),
        "@utilities": path.resolve(__dirname, "src/utilities"),
        "@ui": path.resolve(__dirname, "src/ui"),
      },
    },
  },
};
