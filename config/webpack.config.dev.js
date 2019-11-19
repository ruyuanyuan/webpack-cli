// webpack 是node 写出来的  node 的写法
let path = require('path')
let HtmlwebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin') //css 抽离插件
let optimizeCss= require('optimize-css-assets-webpack-plugin')
let uglifyjsPlugin =require('uglifyjs-webpack-plugin')
module.exports = {
  //本地起服务
  devServer:{
    port:3000, //端口号
    progress:true, //显示进度
    contentBase:path.resolve(__dirname,'../build'), //启动服务位置
    open:true, //打开默认浏览器
    compress:true //默认压缩
  },
  mode:'development', // 模式  1. production 2.development
  entry:'./src/index.js' ,//入口
  //出口
  output:{
    filename:'bundle.[hash:8].js', //打包后的文件名
    path:path.resolve(__dirname,'../build') //输出位置
  },
  //优化项
  optimization:{
    minimizer:[
      new uglifyjsPlugin({
        cache:true,
        parallel:true,
        sourceMap:true,
      }),
      new optimizeCss(),
      
    ]
  },
  // 插件
  plugins:[
    new HtmlwebpackPlugin({
      template:path.resolve(__dirname,'../index.html'), //模板路径
      filename:'index.html', //输出文件
      minify:{ //压缩文件
        removeAttributeQuotes:true, //去除双引号
        collapseWhitespace:true, //去除空行
      },
      // hash:true //加hash值
    }),
    new MiniCssExtractPlugin({
      filename:'main.[hash:8].css'
    })
  ],
  // 模块
  module:{ 
    rules:[ //规则
      { 
        //css-loader 解析 @import语法 
        //style-loader css插入到head标签中
        //loader执行顺序 从右向左,从下到上
        test:/\.css$/,
        use:[
          MiniCssExtractPlugin.loader, //css 抽离插件 link 引入
          'css-loader',
          'postcss-loader',
        ]
      },
      { 
        //css-loader 解析 @import语法 
        //style-loader css插入到head标签中
        //loader执行顺序 从右向左,从下到上
        test:/\.scss$/,
        use:[
          MiniCssExtractPlugin.loader, //css 抽离插件 link 引入
          'css-loader',
          'postcss-loader',
          'sass-loader', //scss => css
        ]
      }
    ]
  }
}