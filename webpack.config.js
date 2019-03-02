const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  target: "node",
  entry: {
    app: ["./lib/app.js"]
  },
  output: {
    path: path.resolve(__dirname, `${__dirname}/server/`),
    filename: "app.js"
  },
  externals: [nodeExternals()],
};