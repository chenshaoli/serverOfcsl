const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:"development",
    entry: {'./src/index.js':'./src/index.js',
            './src/home.js':'./src/home.js'
           },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].[hash].js',
        chunkFilename:'[name].[hash].js'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',//根据自己的指定的模板文件来生成特定的 html 文件。这里的模板类型可以是任意你喜欢的模板，可以是 html, jade, ejs, hbs, 等等，但是要注意的是，使用自定义的模板文件时，需要提前安装对应的 loader， 否则webpack不能正确解析
            filename: 'index.html',// 默认情况下生成的 html 文件叫 index.html
            minify: {
              collapseWhitespace: true, //把生成的 index.html 文件的内容的没用空格去掉，减少空间
            },
            hash: true, //为了更好的 cache，可以在文件名后加个 hash。
          }),
    ], 
    module:{
        rules:[
            {
                test:/\.(jsx|js)$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['@babel/preset-react']
                }
            }
        ]
    },
    devServer:{
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        },
        port:9000,
        // open:true,
        disableHostCheck : true
    }
}