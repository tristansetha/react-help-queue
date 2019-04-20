const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {

  entry: [
    resolve(__dirname, "src") + "/index.jsx"
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
  },

  resolve: {
    extensions: [ '.js', '.jsx' ]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "es2015",
            "react"
          ]
        }
      },
    ],
  }
};

// test takes a RegEx expression indicating which files the loader should transform.
// loader details which loader tool will transform these files
// excluded outlines which files, if any, should not be transformed. We don't need to transform our npm dependencies so we list node_modules here.
// options tells Babel what kind of project we’re working with (React), and what version of JavaScript code should be transpiled to (ES5).
// In plain English, the configuration above reads “Hey Webpack, use this babel-loader tool to transpile our JSX into ES5 in this React project. You can find the JSX in files with a .jsx extension. But ignore .jsx files in the nodemodules directory.”_