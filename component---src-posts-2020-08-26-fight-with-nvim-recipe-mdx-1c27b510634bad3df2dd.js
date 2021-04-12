(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"/yG0":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return l}));var n=t("zLVn"),s=(t("q1tI"),t("7ljp")),o=t("8hLB"),c={},i={_frontmatter:c},b=o.a;function l(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(s.b)(b,Object.assign({},i,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Track issues..."),Object(s.b)("h1",null,"Motivation"),Object(s.b)("p",null,"Just want to contribute a bit back to community and also I heavily relies on conda on my environment setup. Conda compare brew it has advantage of self contains ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"./2018-11-18-conda-everything"}),"cross building environment")," and more control to versioning."),Object(s.b)("p",null,"This post is just my tracking board in case I forgot these PR:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/conda-forge/staged-recipes/pull/12493"}),"neovim")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/conda-forge/staged-recipes/pull/12584"}),"fasd")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/conda-forge/staged-recipes/pull/13682"}),"zoxide"))),Object(s.b)("h1",null,"Problems"),Object(s.b)("h2",null,"Neovim"),Object(s.b)("h3",null,"Libtool Hardcoded Path"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"Conda build env is not reproducible"))),Object(s.b)("p",null,"Remember conda is heavily home-folderable, it doesn't require root permission; it doesn't hardcoded path; so ..."),Object(s.b)("p",null,"Some logs:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"# Which release of libtool.m4 was used?"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token assign-left variable"}),"macro_version"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"2.4"),".6\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token assign-left variable"}),"macro_revision"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"2.4"),".6\n\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"# Assembler program."),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token assign-left variable"}),"AS"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"/Users/runner/miniforge3/conda-bld/libtool_1596899629849/_build_env/bin/x86_64-apple-darwin13.4.0-as"'),"\n"))),Object(s.b)("p",null,"Note Mac's libtool is different from GNU libtool. When you ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"brew install libtool")," you are actually installing glibtool."),Object(s.b)("p",null,"Therefore when you build ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"libtool")," with other environment, you get the relocation nightmare. One way to stop is to remove prefix e.g. like ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/conda-forge/libtool-feedstock/pull/22"}),"this")," for all env vars and do some post built dirty removing."),Object(s.b)("h3",null,"Neovim Sticked to Lua5.1"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"Multiversion & coexists package is hard in many pkg manager including Conda"))),Object(s.b)("p",null,"Lua5.1 is not back compatible since 5.3. So, things get more and more sticky. I created PR to solve."),Object(s.b)("p",null,"🥴I'm now dreaming neovim was ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/neovim/neovim/issues/8669"}),"written in Rust"),"."),Object(s.b)("h2",null,"Fasd"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"Command line (bash etc.) script has conflicting requirements"))),Object(s.b)("p",null,"The ticket is sticked to whether we should include bash in conda while conda is relies on bash. This is more a philosophy/belief type of argument. I realized don't have much time then and drop the conversation and later fell into new love zoxide, which is much faster and also kinds of migrating my pkg army to ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"./2020-10-24-nix-power"}),"Nix")," which is more rootily powerful."),Object(s.b)("h2",null,"Zoxide"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"my z for conda"))),Object(s.b)("p",null,"Just created the ticket and rust recipes are pretty standard..."),Object(s.b)("p",null,"Be guided to solve the license files for zoxide... Hope it goes smoothly."))}l.isMDXComponent=!0},"8hLB":function(e,a,t){"use strict";var n=t("q1tI"),s=t.n(n),o=(t("Wbzz"),t("Bl7J"));a.a=function(e){return s.a.createElement(o.a,Object.assign({},e,{icon:"post"}))}}}]);
//# sourceMappingURL=component---src-posts-2020-08-26-fight-with-nvim-recipe-mdx-1c27b510634bad3df2dd.js.map