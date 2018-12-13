# try webpack

webpackことはじめ

[参考記事](https://qiita.com/soarflat/items/28bf799f7e0335b68186)

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


babel-loaderを導入

```
$ npm install babel-loader babel-core babel-preset-env --save-dev

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
npm WARN babel-loader@8.0.4 requires a peer of @babel/core@^7.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN trywebpack@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 install: `node install`
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: Exit status 1

+ babel-preset-env@1.7.0
+ babel-loader@8.0.4
+ babel-core@6.26.3
added 111 packages from 27 contributors and audited 6276 packages in 10.243s
found 0 vulnerabilities



   ╭───────────────────────────────────────────────────────────────╮
   │                                                               │
   │       New minor version of npm available! 6.4.1 → 6.5.0       │
   │   Changelog: https://github.com/npm/cli/releases/tag/v6.5.0   │
   │               Run npm install -g npm to update!               │
   │                                                               │
   ╰───────────────────────────────────────────────────────────────╯
```


eslint-loaderを導入

```
$ npm install eslint eslint-loader --save-dev
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.

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
npm WARN babel-loader@8.0.4 requires a peer of @babel/core@^7.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN acorn-jsx@5.0.1 requires a peer of acorn@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN trywebpack@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 install: `node install`
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: Exit status 1

+ eslint-loader@2.1.1
+ eslint@5.10.0
added 75 packages from 62 contributors and audited 6498 packages in 14.983s
found 0 vulnerabilities



   ╭───────────────────────────────────────────────────────────────╮
   │                                                               │
   │       New minor version of npm available! 6.4.1 → 6.5.0       │
   │   Changelog: https://github.com/npm/cli/releases/tag/v6.5.0   │
   │               Run npm install -g npm to update!               │
   │                                                               │
   ╰───────────────────────────────────────────────────────────────╯

```


babel設定をwebpack.config.jsに追記してwebpack実行
するとエラーが

```
$ webpack
Hash: 73dcaac5c9ed16ffa921
Version: webpack 4.27.1
Time: 89ms
Built at: 2018/12/13 22:47:46
    Asset      Size  Chunks             Chunk Names
bundle.js  6.83 KiB    main  [emitted]  main
Entrypoint main = bundle.js
[./src/js/app.js] 3.03 KiB {main} [built] [failed] [1 error]

ERROR in ./src/js/app.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
Error: Cannot find module '@babel/core'
 babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:587:15)
    at Function.Module._load (internal/modules/cjs/loader.js:513:25)
    at Module.require (internal/modules/cjs/loader.js:643:17)
    at require (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.<anonymous> (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/babel-loader/lib/index.js:10:11)
    at Module._compile (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/v8-compile-cache/v8-compile-cache.js:178:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:718:10)
    at Module.load (internal/modules/cjs/loader.js:605:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:544:12)
    at Function.Module._load (internal/modules/cjs/loader.js:536:3)
    at Module.require (internal/modules/cjs/loader.js:643:17)
    at require (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at loadLoader (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/loader-runner/lib/loadLoader.js:13:17)
    at iteratePitchingLoaders (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/loader-runner/lib/LoaderRunner.js:169:2)
    at runLoaders (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/loader-runner/lib/LoaderRunner.js:362:2)
    at NormalModule.doBuild (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/webpack/lib/NormalModule.js:280:3)
    at NormalModule.build (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/webpack/lib/NormalModule.js:427:15)
    at Compilation.buildModule (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/webpack/lib/Compilation.js:633:10)
    at moduleFactory.create (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/webpack/lib/Compilation.js:1019:12)
    at factory (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/webpack/lib/NormalModuleFactory.js:405:6)
    at hooks.afterResolve.callAsync (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/webpack/lib/NormalModuleFactory.js:155:13)
    at AsyncSeriesWaterfallHook.eval [as callAsync] (eval at create (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)
    at AsyncSeriesWaterfallHook.lazyCompileHook (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/tapable/lib/Hook.js:154:20)
    at resolver (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/webpack/lib/NormalModuleFactory.js:138:29)
    at process.nextTick (/Users/hogeUser/git/github.com/skxeve/tryWebpack/node_modules/webpack/lib/NormalModuleFactory.js:342:9)
    at process.internalTickCallback (internal/process/next_tick.js:70:11)
```

babelパッケージ３種のバージョン依存問題らしい

```
$ npm install babel-core@7
npm ERR! code ETARGET
npm ERR! notarget No matching version found for babel-core@7
npm ERR! notarget In most cases you or one of your dependencies are requesting
npm ERR! notarget a package version that doesn't exist.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/hogeUser/.npm/_logs/2018-12-13T13_51_56_042Z-debug.log

$ npm install babel-loader@7

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
npm WARN acorn-jsx@5.0.1 requires a peer of acorn@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN trywebpack@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 install: `node install`
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: Exit status 1

+ babel-loader@7.1.5
removed 13 packages, updated 1 package and audited 6479 packages in 7.865s
found 0 vulnerabilities
```

再度webpack

```
$ webpack
Hash: 3e4bff90e2792361b2b3
Version: webpack 4.27.1
Time: 543ms
Built at: 2018/12/13 22:53:56
    Asset      Size  Chunks             Chunk Names
bundle.js  5.82 KiB    main  [emitted]  main
Entrypoint main = bundle.js
[./src/js/app.js] 324 bytes {main} [built]
[./src/js/modules/addition-calculator.js] 92 bytes {main} [built]
[./src/js/modules/tax-calculator.js] 87 bytes {main} [built]
```
