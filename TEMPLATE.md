# webpackプロダクト作る時のテンプレ的な

都度カスタマイズ都合を考えると何だかんだで雑にecho

```
$ npm init -y
# babel-loader@7はバージョン指定しないと2018/12現在はうまくいかない
$ npm i -D webpack webpack-cli babel-loader@7 babel-core babel-preset-env eslint eslint-loader uglifyjs-webpack-plugin
$ gsed -i 's/scripts": {/scripts": {\n    "dev": "webpack --mode development --watch",\n    "build": "webpack --mode production",/' package.json
$ echo "const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development';
  return {
    entry: './src/js/app.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'public/js')
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              [ 'env', { modules: false } ]
            ]
          }
        }
      ]
    },
    devtool: IS_DEVELOPMENT ? 'source-map' : 'none',
    optimization: {
      minimizer: IS_DEVELOPMENT ? [] : [
        new UglifyJSPlugin({
          uglifyOptions: {
            compress: { drop_console: true }
          }
        })
      ]
    },
  }
};" > webpack.config.js
$ echo '{
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "jquery": true
  },
  rules: {
    "no-console": "off"
  }
}' > .eslintrc
$ mkdir -p src/js/modules public/js
$ touch public/js/.gitkeep
$ echo "console.log('launch app.js')" > src/js/app.js
$ echo '<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>initial web page.</title>
</head>
<body>
  <script src="js/bundle.js"></script>
</body>
</html>' > public/index.html
$ echo ".DS_Store
*.bak
*.swp
node_modules/
bundle.js
bundle.js.map" >> .gitignore
```
