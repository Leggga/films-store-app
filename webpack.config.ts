import * as path from 'path'
import CopyPlugin from 'copy-webpack-plugin'
// @ts-ignore
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import {Configuration as WebpackConfiguration} from 'webpack'
import {Configuration as WebpackDevServerConfiguration} from 'webpack-dev-server'

interface WebpackConfig extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: WebpackConfig = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{from: 'public', to: './'}]
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: './src/**/*'
      }
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    publicPath: "/",
    compress: true,
    port: 8000,
  },
}

export default config