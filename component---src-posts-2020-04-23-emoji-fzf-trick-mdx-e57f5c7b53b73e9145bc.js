(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"8hLB":function(e,a,n){"use strict";var t=n("q1tI"),s=n.n(t),c=(n("Wbzz"),n("Bl7J"));a.a=function(e){return s.a.createElement(c.a,Object.assign({},e,{icon:"post"}))}},"j+4u":function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return o})),n.d(a,"default",(function(){return m}));var t=n("zLVn"),s=(n("q1tI"),n("7ljp")),c=n("8hLB"),o={},b={_frontmatter:o},p=c.a;function m(e){var a=e.components,n=Object(t.a)(e,["components"]);return Object(s.b)(p,Object.assign({},b,n,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Fzf + emoji is fun!😆..."),Object(s.b)("h1",null,"Vim Fzf"),Object(s.b)("p",null,"A powerful tool that you should know if you use command lines. I assume you know Fzf well and have it working with Vim."),Object(s.b)("h1",null,"Vim Script"),Object(s.b)("p",null,"We need a plugin from the same author of Fzf: ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/junegunn/vim-emoji"}),"Vim-Emoji"),". However, appreantly author didn't bother to tell the ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"fzf")," flavor of this plugin. So here I am:"),Object(s.b)("p",null,"You need extra scripts to load all emojis from plugin and dump it to fzf so that you can find your emoji with ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"fzf"),"!"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"vim"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-vim"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-vim"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"function"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!")," s",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"getemoji"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"let")," keys ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," emoji#",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"list"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"let")," retval ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"for")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"e")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"in")," keys\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"let")," v ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," emoji#",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"for"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"e"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"call")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"add"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"retval",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"e")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),".")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'='")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),".")," v",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"endfor"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"return")," retval\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"endfunction"),"\n\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"function"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!")," s",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"addemoji"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"line",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"let")," arr ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"split"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"a",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),"line",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'='"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    execute ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"normal! a"')," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),".")," arr",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"1"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),".")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"\\<Esc>"'),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"endfunction"),"\n\ncommand",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"-"),"nargs",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"*")," FzfEmoji ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"call")," fzf#",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"run"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n            \\ ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'source'"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"sid",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"getemoji"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n            \\ ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'sink'"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"function"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'<sid>addemoji'"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n            \\ ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'down'"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),"    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'50%'"),"\n            \\",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n"))),Object(s.b)("p",null,"Now go bind ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"FzfEmoji")," and have fun!"),Object(s.b)("p",null,"For more fzf vim script and plugins, see my fzf ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/daizeng1984/dotfiles/blob/master/neovim/nvim/config/functions.vimrc#L44-L117"}),"collections"),"."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-2020-04-23-emoji-fzf-trick-mdx-e57f5c7b53b73e9145bc.js.map