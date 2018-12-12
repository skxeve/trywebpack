# try webpack

webpackことはじめ
```
$ npm init
$ npm install webpack --save-dev
npm ERR! code ENOSELF
npm ERR! Refusing to install package with name "webpack" under a package
npm ERR! also called "webpack". Did you name your project the same
npm ERR! as the dependency you're installing?
npm ERR!
npm ERR! For more information, see:
npm ERR!     <https://docs.npmjs.com/cli/install#limitations-of-npms-install-algorithm>
```

いきなりエラーで心を折りにくるwebpack！  
URL先を見たら、現在のパッケージ名と同じパッケージ名のインストールを拒否するらしい。  
確かに最初はパッケージ名をwebpackにしていたので（考えなし）、trywebpackに変更してから再試行。

```
$ npm init
$ npm install webpack --save-dev

> fsevents@1.2.4 install /Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents
> node install

node-pre-gyp WARN Tried to download(404): https://fsevents-binaries.s3-us-west-2.amazonaws.com/v1.2.4/fse-v1.2.4-node-v67-darwin-x64.tar.gz
node-pre-gyp WARN Pre-built binaries not found for fsevents@1.2.4 and node@11.1.0 (node-v67 ABI, unknown) (falling back to source compile with node-gyp)
No receipt for 'com.apple.pkg.CLTools_Executables' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLILeo' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLI' found at '/'.

gyp: No Xcode or CLT version detected!
gyp ERR! configure error
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:345:16)
gyp ERR! stack     at ChildProcess.emit (events.js:182:13)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:246:12)
gyp ERR! System Darwin 18.2.0
gyp ERR! command "/usr/local/Cellar/node/11.1.0/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "configure" "--fallback-to-build" "--module=/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents/lib/binding/Release/node-v67-darwin-x64/fse.node" "--module_name=fse" "--module_path=/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents/lib/binding/Release/node-v67-darwin-x64" "--napi_version=3" "--node_abi_napi=napi"
gyp ERR! cwd /Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents
gyp ERR! node -v v11.1.0
gyp ERR! node-gyp -v v3.8.0
gyp ERR! not ok
node-pre-gyp ERR! build error
node-pre-gyp ERR! stack Error: Failed to execute '/usr/local/Cellar/node/11.1.0/bin/node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js configure --fallback-to-build --module=/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents/lib/binding/Release/node-v67-darwin-x64/fse.node --module_name=fse --module_path=/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents/lib/binding/Release/node-v67-darwin-x64 --napi_version=3 --node_abi_napi=napi' (1)
node-pre-gyp ERR! stack     at ChildProcess.<anonymous> (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents/node_modules/node-pre-gyp/lib/util/compile.js:83:29)
node-pre-gyp ERR! stack     at ChildProcess.emit (events.js:182:13)
node-pre-gyp ERR! stack     at maybeClose (internal/child_process.js:970:16)
node-pre-gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:257:5)
node-pre-gyp ERR! System Darwin 18.2.0
node-pre-gyp ERR! command "/usr/local/Cellar/node/11.1.0/bin/node" "/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents/node_modules/node-pre-gyp/bin/node-pre-gyp" "install" "--fallback-to-build"
node-pre-gyp ERR! cwd /Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents
node-pre-gyp ERR! node -v v11.1.0
node-pre-gyp ERR! node-pre-gyp -v v0.10.0
node-pre-gyp ERR! not ok
Failed to execute '/usr/local/Cellar/node/11.1.0/bin/node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js configure --fallback-to-build --module=/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents/lib/binding/Release/node-v67-darwin-x64/fse.node --module_name=fse --module_path=/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents/lib/binding/Release/node-v67-darwin-x64 --napi_version=3 --node_abi_napi=napi' (1)
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN trywebpack@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 install: `node install`
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: Exit status 1

+ webpack@4.27.1
added 321 packages from 278 contributors and audited 4152 packages in 17.748s
found 0 vulnerabilities
```

また何か色々エラー表示されてるけど、package-lock.jsonは生成されてて、package.jsonにもwebpackの設定が追記されている。  
そのままwebpac-cliもインストール

```
$ npm install webpack-cli --save-dev

> fsevents@1.2.4 install /Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents
> node install

node-pre-gyp WARN Tried to download(404): https://fsevents-binaries.s3-us-west-2.amazonaws.com/v1.2.4/fse-v1.2.4-node-v67-darwin-x64.tar.gz
node-pre-gyp WARN Pre-built binaries not found for fsevents@1.2.4 and node@11.1.0 (node-v67 ABI, unknown) (falling back to source compile with node-gyp)
No receipt for 'com.apple.pkg.CLTools_Executables' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLILeo' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLI' found at '/'.

gyp: No Xcode or CLT version detected!
gyp ERR! configure error
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:345:16)
gyp ERR! stack     at ChildProcess.emit (events.js:182:13)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:246:12)
gyp ERR! System Darwin 18.2.0
gyp ERR! command "/usr/local/Cellar/node/11.1.0/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "configure" "--fallback-to-build" "--module=/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents/lib/binding/Release/node-v67-darwin-x64/fse.node" "--module_name=fse" "--module_path=/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents/lib/binding/Release/node-v67-darwin-x64" "--napi_version=3" "--node_abi_napi=napi"
gyp ERR! cwd /Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents
gyp ERR! node -v v11.1.0
gyp ERR! node-gyp -v v3.8.0
gyp ERR! not ok
node-pre-gyp ERR! build error
node-pre-gyp ERR! stack Error: Failed to execute '/usr/local/Cellar/node/11.1.0/bin/node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js configure --fallback-to-build --module=/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents/lib/binding/Release/node-v67-darwin-x64/fse.node --module_name=fse --module_path=/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents/lib/binding/Release/node-v67-darwin-x64 --napi_version=3 --node_abi_napi=napi' (1)
node-pre-gyp ERR! stack     at ChildProcess.<anonymous> (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents/node_modules/node-pre-gyp/lib/util/compile.js:83:29)
node-pre-gyp ERR! stack     at ChildProcess.emit (events.js:182:13)
node-pre-gyp ERR! stack     at maybeClose (internal/child_process.js:970:16)
node-pre-gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:257:5)
node-pre-gyp ERR! System Darwin 18.2.0
node-pre-gyp ERR! command "/usr/local/Cellar/node/11.1.0/bin/node" "/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents/node_modules/node-pre-gyp/bin/node-pre-gyp" "install" "--fallback-to-build"
node-pre-gyp ERR! cwd /Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents
node-pre-gyp ERR! node -v v11.1.0
node-pre-gyp ERR! node-pre-gyp -v v0.10.0
node-pre-gyp ERR! not ok
Failed to execute '/usr/local/Cellar/node/11.1.0/bin/node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js configure --fallback-to-build --module=/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents/lib/binding/Release/node-v67-darwin-x64/fse.node --module_name=fse --module_path=/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/fsevents/lib/binding/Release/node-v67-darwin-x64 --napi_version=3 --node_abi_napi=napi' (1)
npm WARN trywebpack@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 install: `node install`
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: Exit status 1

+ webpack-cli@3.1.2
added 58 packages from 15 contributors and audited 4263 packages in 11.009s
found 0 vulnerabilities
```

一応PATH通し

```
$ export PATH=$PATH:./node_modules/.bin
```

webpack設定ファイル作成、ディレクトリ作成、ファイル作成

```
$ vim webpack.config.js
$ mkdir -p src/js/modules public/js
$ vim src/js/app.js
$ vim src/js/modules/addition-calculator.js
$ vim src/js/modules/tax-calculator.js
```

webpack実行

```
$ webpack
Hash: 06ee545dbfc5ad1a76c4
Version: webpack 4.27.1
Time: 110ms
Built at: 2018/12/12 22:13:07
    Asset      Size  Chunks             Chunk Names
bundle.js  5.83 KiB    main  [emitted]  main
Entrypoint main = bundle.js
[./src/js/app.js] 325 bytes {main} [built]
[./src/js/modules/addition-calculator.js] 93 bytes {main} [built]
[./src/js/modules/tax-calculator.js] 88 bytes {main} [built]
```

動作確認用HTML作成
```
$ vim public/index.html
```

[結果確認](https://skxeve.github.io/trywebpack/public/)
