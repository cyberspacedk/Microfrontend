const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer:{
        port: 9091,
    },
    plugins:[
        new ModuleFederationPlugin({
           name: 'products',
           filename: 'remoteEntry.js',
           exposes: {
               './ProductsIndex': './src/bootstrap.js'
           },
            shared: {
                faker: {
                    singleton: true
                }
            }
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
}