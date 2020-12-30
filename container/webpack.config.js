const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer:{
        port: 9090,
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'container',
            remotes:{
                products: 'products@http://localhost:9091/remoteEntry.js',
                cart: 'cart@http://localhost:9092/remoteEntry.js'
            }
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
