const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require("glob");
const PurifycssWebpack = require("purifycss-webpack");
const entry = require("./src/webpack_config/webpack_entry");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports={
  mode:"development",
  entry,
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js',
    publicPath:"http://127.0.0.1:8081/"
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:[{
            loader:'css-loader',
            options:{importLoaders:1}
          },'postcss-loader']
        })
      },
      {
        test:/\.(jpg|png|gif)$/,
        use:[{
          loader:"url-loader",
          options:{
            limit:500,
            outputPath:"images/",
            esModule:false
          }
        }]
      },
      {
        test: /\.(htm|html)$/i,
        loader: 'html-withimg-loader'
      },
      {
        test:/\.scss/,
        use:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:['css-loader','sass-loader']
        })
      },
      {
        test:/\.(jsx|js)$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        },
        exclude:/node_modules/
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template:"./src/index.html",
      hash:true,
      minify:{
        removeAttributeQuotes:true
      }
    }),
    new ExtractTextPlugin("css/main.css"),
    new PurifycssWebpack({
      paths:glob.sync(path.join(__dirname,'./src/*.html'))
    }),
    new webpack.BannerPlugin('fellow37'),
    new webpack.ProvidePlugin({
      $:'jquery'
    }),
    new CopyWebpackPlugin([{
      from:__dirname + "/src/public",
      to:'./public'
    }])
  ],
  devServer:{
    contentBase:path.resolve(__dirname,'dist'),
    host:"127.0.0.1",
    compress:true,
    port:'8081',
    open:true,
    hot:true
  }
}