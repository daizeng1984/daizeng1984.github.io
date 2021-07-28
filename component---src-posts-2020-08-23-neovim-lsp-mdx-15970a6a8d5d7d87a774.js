(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"8hLB":function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),l=(a("Wbzz"),a("Bl7J"));t.a=function(e){return s.a.createElement(l.a,Object.assign({},e,{icon:"post"}))}},"8lWo":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a("zLVn"),s=(a("q1tI"),a("7ljp")),l=a("8hLB"),o={},i={_frontmatter:o},c=l.a;function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)(c,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Coming late, but it is worth the wait..."),Object(s.b)("h1",null,"What's LSP"),Object(s.b)("p",null,"Please see my old ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"./2018-11-05-language-server-protocol"}),"post"),". Now LSP client is integrated in neovim to bring fast/smooth user experience!"),Object(s.b)("h1",null,"What About LanguageClient-Neovim in That Post?"),Object(s.b)("p",null,"It's way hard to config and this one is no better than ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/neoclide/coc.nvim"}),"CoC"),"."),Object(s.b)("h1",null,"What About CoC?"),Object(s.b)("p",null,"Wow, this one changes a lot since my ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"./2018-11-05-language-server-protocol"}),"last check"),". Now it's very easy to use and a lot mature. Strongly recommend to people just from Visual Studio. It's a lot heavy as it looks like. It's an ambitious migration of VS extensions plus many powerful features. Major language as JS is a plus. If nvim-lsp fails me, I'll convert to CoC for sure."),Object(s.b)("p",null,"The reason to prefer nvim-lsp a bit is native support and performance, though right now, I have no evidence to show that. Another execuse is deoplete plugin doesn't work nicely with CoC and some of my plugins are with deoplete 😢."),Object(s.b)("p",null,"Anyway, now I could evaluate both of them in different projects in work and probably update later."),Object(s.b)("h1",null,"Nvim-LSP Setup in 3 Min"),Object(s.b)("p",null,"If setting up CoC is in 1 min, then lsp takes just a bit longer. To preview nvim's native lsp with me:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Be sure to have ",Object(s.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"conda")," at hand (you should!). If not please follow ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/daizeng1984/dotfiles/blob/master/installConda.sh#L16-L17"}),"this"),". Just install nvim nightly build:")),Object(s.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"conda install -c daizeng1984/label/nightly nvim"))),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Comment out your old complete plugins like CoC, LanguageClient-neovim etc.")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Install plugin ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/neovim/nvim-lsp"}),"nvim-lsp"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Add these lines to your config.vimrc:"))),Object(s.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"lua <<EOF\nrequire'nvim_lsp'.pyls.setup{}\nrequire'nvim_lsp'.tsserver.setup{}\nEOF"))),Object(s.b)("ol",{start:5},Object(s.b)("li",{parentName:"ol"},"Then install language servers you need, for example ",Object(s.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"pyls")," you can do: ",Object(s.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"conda install -y -c conda-forge python-language-server")," and for ",Object(s.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"tsserver")," you can do in nvim directly ",Object(s.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),":LspInstall tsserver"),". For more language support, look at ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/neovim/nvim-lsp#user-content-configurations"}),"here"),". Ideally, all these plugins should be installed with ",Object(s.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),":LspInstall")," seamlessly in nvim in the future just like CoC.")),Object(s.b)("h1",null,"Java"),Object(s.b)("p",null,"Java is missing here. But again, just a ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/neovim/nvim-lsp/pull/245"}),"matter of time"),"."),Object(s.b)("h1",null,"Autocomplete"),Object(s.b)("p",null,"If you need autocomplete, add autocomplete plugin e.g. ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/Shougo/deoplete-lsp"}),"deoplete-lsp"),"."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-2020-08-23-neovim-lsp-mdx-15970a6a8d5d7d87a774.js.map