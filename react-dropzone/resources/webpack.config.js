var path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname, "dist"),
    filename: "react-dropzone.inc.js",
    libraryTarget: "var",
    library: "Dropzone"
  },
  externals: {
    "react": "React"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
};
