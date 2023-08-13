const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appDirectory = path.resolve(__dirname);
const {presets, plugins} = require(`${appDirectory}/babel.config.js`);
const compileNodeModules = [
  // Add every react-native package that needs compiling
  // 'react-native-gesture-handler',
  'react-native-vector-icons',
].map((moduleName) => path.resolve(appDirectory, `node_modules/${moduleName}`));
const babelLoaderConfiguration = {
  test: /\\\\.ts$|tsx?|js$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(__dirname, 'index.web.js'), // Entry to your application
    path.resolve(__dirname, 'App.tsx'), // Change this to your main App file
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'component'),
    path.resolve(__dirname, 'node_modules/react-native-vector-icons/lib'),
    path.resolve(__dirname, 'node_modules/react-native-awesome-alerts/src'),
    path.resolve(__dirname, 'node_modules/react-native-webview/lib'),
    ...compileNodeModules,
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets,
      plugins,
    },
  },
};

const svgLoaderConfiguration = {
  test: /\\\\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
    },
  ],
};

// ADD THIS LINE HERE (ttfLoaderConfiguration)
const ttfLoaderConfiguration = {
  test: /\.ttf$/,
  loader: 'url-loader', // or directly file-loader
  include: [
    path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
  ],
};


const imageLoaderConfiguration = {
 test: /\.(svg|png|jpg|jpeg|gif)$/,
  include: [
    path.resolve(__dirname, 'assets/images'),
    path.resolve(__dirname, 'node_modules/@react-navigation/elements/src/assets'),
    path.resolve(__dirname, 'node_modules/@react-navigation/elements/lib/module/assets'),
  ],
  use: {
    loader: 'url-loader',
    options: {
      name: 'assets/images/[name].[ext]',
      esModule: false
    },
  },
};
module.exports = {
  entry: {
    app: path.join(__dirname, 'index.web.js'),
  },
  output: {
    path: path.resolve(appDirectory, 'dist'),
    publicPath: '/',
    filename: 'rnw.bundle.js',
  },
  resolve: {
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js', '.png'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      ttfLoaderConfiguration,
      svgLoaderConfiguration,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      // See: <https://github.com/necolas/react-native-web/issues/349>
      __DEV__: JSON.stringify(true),
    }),
  ],
};
