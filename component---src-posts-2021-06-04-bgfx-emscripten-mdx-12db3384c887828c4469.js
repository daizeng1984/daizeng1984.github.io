(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"8hLB":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),s=(a("Wbzz"),a("Bl7J"));t.a=function(e){return n.a.createElement(s.a,Object.assign({},e,{icon:"post"}))}},"Z7p/":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return r}));var i=a("zLVn"),n=(a("q1tI"),a("7ljp")),s=a("8hLB"),o={},b={_frontmatter:o},l=s.a;function r(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(l,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"bgfx support many platform, let's see if we can embed it on this post..."),Object(n.b)("h1",null,"Bgfx + Emscripten?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/bkaradzic/bgfx"}),"Bgfx")," is a powerful rendering API help you to deal with lots of cross platform/low-level graphics API stuff!")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://emscripten.org/"}),"Emscripten")," allows you code in familiar native language like C++ and compile it to WebAssembly (wasm) that runs in browser. There are some limitation of course but good thing about wasm is: your app can be accessed by anyone with modern browser (webgl).")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"WebGL & mobile graphics is the relative low end, if you manage to run on these platform, it also prove that it can run anywhere else.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If you are believer of wasm ..."))),Object(n.b)("p",null,Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/daizeng1984/bgfx.emscripten"}),"Here"),"'s code repo to compile a simple example from bgfx."),Object(n.b)("h1",null,"Tips"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Using nix and direnv saved a lot of rampup works, if you are interested. Check out my previous ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"./2020-12-10-nix-power-2"}),"post"),"."),Object(n.b)("li",{parentName:"ol"},"BGFX can build wasm but failed to compile some examples, you need to compile wasm without example like ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/daizeng1984/bgfx.emscripten/blob/master/Makefile#L76"}),"this")),Object(n.b)("li",{parentName:"ol"},"Emscripten provides virtual file system but you need to specify the path in configuration and use @: ",Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"path@virtualpath")),Object(n.b)("li",{parentName:"ol"},"To use emcc with webgl or glfw you need to treat specially instead of compile yourself. A bunch of ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/daizeng1984/bgfx.emscripten/blob/master/Makefile#L29"}),"flags")," I have to add to make things work."),Object(n.b)("li",{parentName:"ol"},"shader and assets build requires tools build. You can write your own ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/daizeng1984/bgfx.make/blob/master/assets/Makefile"}),"make")," or reuse ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/daizeng1984/bgfx.emscripten/blob/master/assets/build.ninja"}),"ninja script")," from examples."),Object(n.b)("li",{parentName:"ol"},"To generate ",Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"compile_commands.json"),", you can use ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/daizeng1984/bgfx.emscripten/blob/master/default.nix#L10"}),"compiledb"),"."),Object(n.b)("li",{parentName:"ol"},"To serve the local wasm html files, you can just ",Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"miniserve -p 9000")," which is included in the nix or ",Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"emrun"),"."),Object(n.b)("li",{parentName:"ol"},"To debug the wasm, you need to add ",Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"-g")," flag and use google-chrome browser with DWARF plugin (see ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://developer.chrome.com/blog/wasm-debugging-2020/"}),"here"),"). It's just this feature's still in beta version.")),Object(n.b)("p",null,"If you have some patience and modern browser, you should be able to see the 3D bunny in the iframe below:"),Object(n.b)("div",{style:{position:"relative",width:"100%",height:"0",paddingBottom:"51%"}},Object(n.b)("iframe",{width:"100%",style:{position:"absolute",width:"100%",height:"100%",left:"0",top:"0"},src:"https://daizeng1984.bitbucket.io/assets/wasm/hdr/main.html"})))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-2021-06-04-bgfx-emscripten-mdx-12db3384c887828c4469.js.map