// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

// minimizer
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
  // argv.modeはnone,development,productionのいずれか
  const IS_DEVELOPMENT = argv.mode === 'development';

  return {
    // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
    // mode: 'development',
    // エントリーポイントの設定
    entry: './src/js/app.js',
    // 出力の設定
    output: {
      // 出力するファイル名
      filename: 'bundle.js',
      // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
      path: path.join(__dirname, 'public/js')
    },
    // ローダー（module）の設定
    module: {
      rules: [
        {
          // ローダーの処理対象ファイル（拡張子js）
          test: /\.js$/,
          // ローダーの処理対象から外すディレクトリ
          exclude: /node_modules/,
          // 利用するローダー
          loader: 'babel-loader',
          // ローダーのオプション
          // 今回はbabel-loaderを利用しているため、babelのオプションを指定している
          options: {
            presets: [
              [
                'env',
                { modules: false }
              ]
            ]
          }
        },
        {
          // enforce: 'pre'を指定することによって付いてないローダーより早く処理される
          // babel-loaderで変換する前にコードを検証したい
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        }
      ]
    },
    // developmentモードならソースマップを出力する
    devtool: IS_DEVELOPMENT ? 'source-map' : 'none',
    // productionモードならminimizerを上書きする
    optimization: {
      minimizer: IS_DEVELOPMENT ? [] : [
        new UglifyJSPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true
            }
          }
        })
      ]
    }

  }
};
