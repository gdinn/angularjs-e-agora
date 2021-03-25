const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  mode: 'development',
  devServer: {
    contentBase: './src',
    watchContentBase: true,
    compress: true,
    port: 4200,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      }      
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/index.html", to: "./" },
      ],
    }),
  ],  
};

