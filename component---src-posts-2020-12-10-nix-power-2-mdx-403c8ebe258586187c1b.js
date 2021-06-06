(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"0kTE":function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return o})),n.d(a,"default",(function(){return i}));var t=n("zLVn"),s=(n("q1tI"),n("7ljp")),c=n("8hLB"),o={},b={_frontmatter:o},p=c.a;function i(e){var a=e.components,n=Object(t.a)(e,["components"]);return Object(s.b)(p,Object.assign({},b,n,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Just cool ..."),Object(s.b)("h1",null,"Feel the Power of Nix"),Object(s.b)("p",null,"To build a reproducible env is the Nix's Ultimate Power. You can live without NixOS or not using Home-Manager. But this one is the essential of Nix. This post is to illustrate what you can perform with Nix."),Object(s.b)("h1",null,"Direnv"),Object(s.b)("p",null,"Nix ❤ Direnv. These two are so powerful that it could be illegal to use both 😆. Direnv grants you seamless environment while Nix guarantees they are reliable and reproducible instantly. My rest blogs are merely snippets and tips to showcase/advertise this combination (all in my dotfiles ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/daizeng1984/dotfiles/tree/master/direnv"}),"repo"),"). BTW, direnv can ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/daizeng1984/dotfiles/blob/master/direnv/.direnvrc"}),"work with conda")," too!"),Object(s.b)("h1",null,"NodeJS"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"nix"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-nix"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-nix"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"# Nixpkgs 20.09"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"# no -g/global install needed! node_modules/.bin is in PATH when in this folder"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"# { pkgs ? import <nixpkgs> {} }:"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," pkgs ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?")," \n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"import")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"builtins"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"fetchTarball")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      name ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"nixos-20.09"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n      url ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"https://codeload.github.com/NixOS/nixpkgs/tar.gz/20.09"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n      sha256 ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"1wg61h4gndm3vcprdcg7rc4s1v3jkm5xd7lw8r2f67w502y94gcy"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),"\n\npkgs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"mkShell ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  buildInputs ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"with")," pkgs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n    nodejs\n    yarn\n  ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  shellHook ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"''\n    export PATH=\"$PWD/node_modules/.bin/:$PATH\"\n    echo \"🚀 nodejs ready!\"\n  ''"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  MY_ENVIRONMENT_VARIABLE ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"dummy"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(s.b)("p",null,"Here usually you pin down to a particular nixpkgs to make sure the reproducibility. Remember ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"npm install -g"),"? Now it's not allowed and neither good practice. You just install to local ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"node_modules")," folder and export the ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"node_modules/.bin")," path."),Object(s.b)("h1",null,"Emscripten"),Object(s.b)("p",null,"Webassembly? Easy piece:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"nix"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-nix"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-nix"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"let"),"\n   emscriptenPackages",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"zlib\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"in")," \npkgs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"mkShell ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  buildInputs ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"with")," pkgs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n    emscripten\n    emscriptenPackages",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"zlib\n    webfs ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"# webfs -F -p 3000 to serve current folder"),"\n  ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(s.b)("p",null,"Nixpkgs already has common emscriptenPackages ready but if you can compile your own as shown ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/NixOS/nixpkgs/blob/master/doc/languages-frameworks/emscripten.section.md#user-content-usage-2-pkgsbuildemscriptenpackage"}),"here"),"."),Object(s.b)("h1",null,"Rust"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"nix"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-nix"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-nix"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"let"),"\n  moz_overlay ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"import")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"builtins"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"fetchTarball")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token url"}),"https://github.com/mozilla/nixpkgs-mozilla/archive/master.tar.gz"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  nixpkgs ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"import")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"nixpkgs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),">")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," overlays ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"[")," moz_overlay ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ruststable ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"nixpkgs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"latest",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"rustChannels",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"stable",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"rust",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"override ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," extensions ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"[")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"rust-src"')," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"clippy-preview"')," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"rls-preview"')," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"rust-analysis"')," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"rustfmt-preview"')," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"in"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"with")," nixpkgs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\nmkShell ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  buildInputs ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"[")," \n    openssl \n    pkg",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"-"),"config\n    nasm\n    ruststable\n    rustup\n    cmake\n    zlib \n  ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  shellHook ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"''\n    export PATH=$HOME/.cargo/bin:$PATH\n  ''"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(s.b)("p",null,"New and fast evolving lang, you have to overlay nightly pkgs from Mozilla. Relax, nixpkgs master is stable than you thought!"),Object(s.b)("h1",null,"Python"),Object(s.b)("p",null,"Install pkgs in read-only nix python is impossible. You either use local pip (virtual python env) or manage packages in nix. With nix, you don't need to worry about the native package like cython etc.."),Object(s.b)("div",{className:"gatsby-highlight","data-language":"nix"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-nix"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-nix"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"let"),"\n  pythonEnv ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," pkgs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"python38",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"withPackages ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"ps",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n    ps",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"numpy\n    ps",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"pytorch\n    ps",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"dateutil\n  ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"in")," pkgs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"mkShell ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  buildInputs ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"with")," pkgs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n    pythonEnv\n    libffi\n    openssl\n  ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(s.b)("p",null,"If you are dealing with mostly pure py pkgs or has no admin permission, you might consider conda. It's also powerful: before my Nix age, conda is my environment pkgs manager."),Object(s.b)("h1",null,"C++"),Object(s.b)("p",null,"Nix is the out of box C++ dev pkg manager in *nix OS I'd say, since C++ pkgs are mostly low level and OS related. However, nix expression is not as good for incremental build, yet you can integrate with powerful like bazel etc. If you just need some scratch start, here you go:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"nix"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-nix"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-nix"}),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"let"),"\n  version ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"0.1"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"in")," pkgs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"mkShell ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  name ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"my-cpp-app"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  src ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"./."'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  nativeBuildInputs ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"with")," pkgs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"[")," cmake meson ninja ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"# phases: unpackPhase -> configurePhase -> buildPhase -> installPhase"),"\n  buildInputs ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"with")," pkgs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"[")," \n    boost\n    poco\n  ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  configurePhase ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"''\n    cmake -G Ninja .\n    #meson setup builddir\n  ''"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  buildPhase ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"''\n    c++ -o main main.cpp -lPocoFoundation -lboost_system\n    #meson compile\n  ''"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  installPhase ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"''\n    mkdir -p $out/bin\n    cp main $out/bin\n    #cd builddir && meson compile\n  ''"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  enableParallelBuilding ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"true"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(s.b)("p",null,"These buildPhase will be called in order if you build *.nix file. You can manually revoke them in nix-shell or just make it as Nix derivative and build."),Object(s.b)("h1",null,"🚧Jdk"),Object(s.b)("p",null,"TODO:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"nix"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-nix"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-nix"}),"    buildInputs ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"with")," pkgs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"[")," jdk11 ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    \n    shellHook ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"''\n      export JAVA_HOME=",Object(s.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"token antiquotation variable"}),"$"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),"pkgs",Object(s.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),"jdk11",Object(s.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),'\n      PATH="',Object(s.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"token antiquotation variable"}),"$"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),"pkgs",Object(s.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),"jdk11",Object(s.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),"/bin:$PATH\"\n    ''"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(s.b)("h2",null,"Android"),Object(s.b)("p",null,Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/NixOS/nixpkgs/blob/master/pkgs/development/mobile/androidenv/examples/shell.nix"}),"https://github.com/NixOS/nixpkgs/blob/master/pkgs/development/mobile/androidenv/examples/shell.nix"),"\nFinally, we got some updates from nix community for license issue."),Object(s.b)("p",null,"You'll need to accept a bunch of licenses, ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"config.androidenv.accept_licneses = true")," only help some core licenses, you need to specify extra licenses"),Object(s.b)("h1",null,"Non-Root"),Object(s.b)("p",null,"If this bothers you ..."),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Namespace ",Object(s.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"nix-user-chroot"),". However, it cannot support ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"TODO"}),"tmux reattachment")," (hope this is tmux fault)."),Object(s.b)("li",{parentName:"ol"},"Proot allow tmux to reattach, however, it has limit os support for certain system call which is very hard to find out when it happens. "),Object(s.b)("li",{parentName:"ol"},"Build your own stuff and troubleshooting all on your own.")),Object(s.b)("p",null,"Namespace is recommended however in Mac it seems to be impossible."))}i.isMDXComponent=!0},"8hLB":function(e,a,n){"use strict";var t=n("q1tI"),s=n.n(t),c=(n("Wbzz"),n("Bl7J"));a.a=function(e){return s.a.createElement(c.a,Object.assign({},e,{icon:"post"}))}}}]);
//# sourceMappingURL=component---src-posts-2020-12-10-nix-power-2-mdx-403c8ebe258586187c1b.js.map