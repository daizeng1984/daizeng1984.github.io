(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"8hLB":function(e,t,n){"use strict";n("E5k/");var a=n("q1tI"),o=n.n(a),r=(n("Wbzz"),n("Bl7J"));t.a=function(e){return o.a.createElement(r.a,Object.assign({},e,{icon:"post"}))}},UYfN:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("q1tI");var a=n("7ljp"),o=n("8hLB");var r={},s={_frontmatter:r},i=o.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(i,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Wanna a gantt chart editor for free? Download for ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/daizeng1984/jQueryGantt/releases/download/HEAD/jQueryGantt-1.0.0.dmg"}),"Mac")," or ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/daizeng1984/jQueryGantt/releases/download/HEAD/jQueryGantt-1.0.0.x86_64.zip"}),"Centos"),"."),Object(a.b)("h1",null,"Findings"),Object(a.b)("p",null,"I assume you know what's ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Gantt_chart"}),"Gantt")," chart. ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/robicch/jQueryGantt"}),"jQueryGantt")," is an ancient pure front web app of Gantt chart that looks nice. It's also free, simple and quite easy to use. It'll be even nicer if it's native app. At first, I thought I could make a native app out of this pure frontend web app using ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/jiahaog/nativefier"}),"nativefier"),". However, it seems not to work as I expected. It still connects to localhost server and cannot save frontend layout page which, in my understanding, is not ",Object(a.b)("em",{parentName:"p"},"nativefied"),". Plus, save/load is not functional. Ok, there's no magic for native and free app: we need to manually wrap it up into a fresh handmade ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://electronjs.org/"}),"Electron")," app with patience. Luckily Electron provides very smooth browser to desktop app (chrome based) migration. After moving ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://jquery.com/"}),"jquery")," etc. modules in ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"package.json"),", everything almost works out of box. Nice!"),Object(a.b)("h1",null,"Keep Fixing"),Object(a.b)("p",null,"Even though not much migration work, some parts of the software doesn't work as advertised (buggy) e.g. adding new entry, endless recursion etc.. But since I have source code, I can just fix+use it and later distribute it using ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://www.electron.build/"}),"electron.build"),". This distribution tool allow you to download and use for ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/daizeng1984/jQueryGantt/releases"}),"free")," 🙌!\nFor developers, just directly clone ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/daizeng1984/jQueryGantt"}),"this")," repo and ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"npm start")," your god mod."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-2018-08-25-gantt-chart-app-mdx-fd2935bd75f594ebeefd.js.map