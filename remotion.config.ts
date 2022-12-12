import { Config } from 'remotion';

Config.Rendering.setImageFormat('jpeg');


// Overwrite remotion default webpack config
// Path: webpack.config.js


Config.Bundling.overrideWebpackConfig((config) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...(config.module?.rules ?? []),
        {
          test: /\.js$/,
          exclude: /node_modules[/\\](?!react-native-vector-icons)/,
          use: {
            loader: 'babel-loader',
            options: {
              // Disable reading babel configuration
              babelrc: false,
              configFile: false,

              // The configuration for compilation
              presets: [
                ['@babel/preset-env'],
                '@babel/preset-react',
                '@babel/preset-flow',
                "@babel/preset-typescript"
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread'
              ],
            },
          },
        },
      ]
    }
  }
});
