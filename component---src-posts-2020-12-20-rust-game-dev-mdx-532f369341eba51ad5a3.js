(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"8hLB":function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),c=(a("Wbzz"),a("Bl7J"));t.a=function(e){return s.a.createElement(c.a,Object.assign({},e,{icon:"post"}))}},ofmB:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return r}));var n=a("zLVn"),s=(a("q1tI"),a("7ljp")),c=a("8hLB"),o={},i={_frontmatter:o},b=c.a;function r(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)(b,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Could be next gen C/C++ lang..."),Object(s.b)("h1",null,"Bugs"),Object(s.b)("p",null,"If you played Cyberpunk 2077 at this time on consoles, you'll hate the bugs like missing texture/geom, crappy physics, weird AI etc. and most of them look very mutithready. Symptom shows this game's threading is messily async under console compiler env and thus not playable. But it's good lesson for developers."),Object(s.b)("p",null,"Game developer tends to aim for maximum efficiency with limit hardware budget (a few milliseconds for 30fps, shooter game even higher). Bad habits foster e.g. never care about segment fault and memory security. It makes sense if game hack is not that critical as long as it doesn't impact game sales, gamer might just reboot and no one's bank account is going to be hacked. A bit risky thinking model🤔."),Object(s.b)("p",null,"Rust, as a more secure and yet efficient lang, recently catches my eyes and ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://hub.packtpub.com/rust-as-a-game-programming-language-is-it-any-good/"}),"some people")," believe it can replace (at least somewhat) the long-live C++ for game dev. Even though lang itself is not the one to blame for messy C++ game code, I still wish there'll be a cleaner/stricter language to branch from C++ (instead of merging tons of developer requests) so that developer doesn't need to create their own rules, wheels, e.g. hack memory model etc. and has less tedious code review. C++ after 2013ish is full of sugars. It becomes more and more syntax-complicate than it should be and amounts to a wrapped new looking language. Too many historical burdens🙁. Developers under C++ are free to not following strict rules they should have which potentially leading to hard-to-find bugs like uninitialized resources, memory tampering, multithread resource sharing etc.."),Object(s.b)("p",null,"Rust uses stricter compiling check to make sure a more reliable run time code, which means like a good human language teacher Rust requires you to elaborate your statements to make things clear. A lot of system level cli app I used are written by Rust. Besides, with like other mainstream langs, it has friendlier pkg manager 👍(cargo and crates.io) than C++. It's definitely up a level to old C/C++. Enthusiastic people even consider using it for safer ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://doc.redox-os.org/book/ch01-02-what-is-redox.html"}),"OS"),"!"),Object(s.b)("p",null,"Plus Rust is modern and mutually first class to webassembly, if you believe wasm is the future."),Object(s.b)("p",null,"I know, learning a new language can be intensive, but Rust is very friendly to C/C++ programmers. It feels like a better C/C++ that you can transpile it into C/C++ code if you have certain C/C++ proficiency."),Object(s.b)("p",null,"In my pov, Rust does the right balance between safety and efficiency. C++ can do that but requires trained and discipline programmers. The question will be down to whether extra 2% perf gain worth the trade-off. Besides how about pkg manager? Does C++ give you that by default?"),Object(s.b)("h1",null,"Unsafety of C++"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Type overflow"),Object(s.b)("li",{parentName:"ol"},"dangling pointer"),Object(s.b)("li",{parentName:"ol"},"IO and exception"),Object(s.b)("li",{parentName:"ol"},"Threading and sharing")),Object(s.b)("h1",null,"Game"),Object(s.b)("p",null,"Game need engine, it requires several "),Object(s.b)("p",null,Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/gfx-rs/wgpu"}),"https://github.com/gfx-rs/wgpu")),Object(s.b)("h1",null,"Rust"),Object(s.b)("p",null,"To learn Rust, ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://doc.rust-lang.org/book/"}),"here"),"'s the official book. To play wth it, either ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Nix")," it like introduced in my previous ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"./2020-12-10-nix-power-2"}),"post")," or webly ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://play.rust-lang.org/"}),"here"),"."),Object(s.b)("h1",null,"Low Level Graphics"),Object(s.b)("p",null,"gfx.rs\n",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://rust-tutorials.github.io/learn-gfx-hal/"}),"https://rust-tutorials.github.io/learn-gfx-hal/")),Object(s.b)("h1",null,"Engine"),Object(s.b)("h2",null,"Bevy"),Object(s.b)("h2",null,"Godot"),Object(s.b)("p",null,"A bit cheating here. It's not rust written but there's a good wrapper."),Object(s.b)("h2",null,"Amethyst"),Object(s.b)("p",null,Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://www.amethyst.rs/"}),"Amethyst")," seems to be almost ripe so let's try that out. It uses entity components system to model multithread behavior I guess similar to actor framework etc. from Erlang. These model ensured some ",Object(s.b)("em",{parentName:"p"},"correct")," distributed safe behaviors to avoid dead lock etc.. "),Object(s.b)("p",null,"You need to pin down Rust to ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"1.47.0")," according to this ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/amethyst/amethyst/issues/2524"}),"issue"),". Of course for 3D graphics, also run with ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"nixGL")," to enable hardware for non nixos env like my centos."),Object(s.b)("div",{className:"gatsby-highlight","data-language":"nix"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-nix"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-nix"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"let"),"\n  mozilla ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"import")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"builtins"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"fetchTarball")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token url"}),"https://github.com/mozilla/nixpkgs-mozilla/archive/master.tar.gz"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  nixpkgs ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"import")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"nixpkgs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),">")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," overlays ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"[")," mozilla ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"in"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"with")," nixpkgs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\nmkShell ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  buildInputs ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n    alsaLib\n    cmake\n    freetype\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"rustChannelOf ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," channel ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"1.47.0"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"rust\n    expat\n    openssl\n    pkgconfig\n    python3\n    vulkan",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"-"),"validation",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"-"),"layers\n    xlibs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"libX11\n  ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  APPEND_LIBRARY_PATH ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," stdenv",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"lib",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"makeLibraryPath ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n    vulkan",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"-"),"loader\n    xlibs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"libXcursor\n    xlibs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"libXi\n    xlibs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"libXrandr\n  ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  shellHook ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"''\n    export LD_LIBRARY_PATH=\"$LD_LIBRARY_PATH:$APPEND_LIBRARY_PATH\"\n  ''"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(s.b)("p",null,"Cool, and think about much nicer code behind!"),Object(s.b)("h2",null,"Pass"),Object(s.b)("p",null,"Engine wrap render into renderly."))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-2020-12-20-rust-game-dev-mdx-532f369341eba51ad5a3.js.map