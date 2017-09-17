const webpackConfig = require('./webpack.config')();
const fileGlob= '**/*.test.js';

module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      '**/*.test.js'
    ],
    preprocessors: {
        [fileGlob]: ['webpack']
    },
    webpack: webpackConfig,
    exclude: ['node_modules/**/*.test.js'],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
  })
}
