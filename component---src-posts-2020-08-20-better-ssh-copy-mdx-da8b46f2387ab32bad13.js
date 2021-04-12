(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"8hLB":function(e,a,n){"use strict";var s=n("q1tI"),t=n.n(s),c=(n("Wbzz"),n("Bl7J"));a.a=function(e){return t.a.createElement(c.a,Object.assign({},e,{icon:"post"}))}},fpMR:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return b})),n.d(a,"default",(function(){return m}));var s=n("zLVn"),t=(n("q1tI"),n("7ljp")),c=n("8hLB"),b={},o={_frontmatter:b},p=c.a;function m(e){var a=e.components,n=Object(s.a)(e,["components"]);return Object(t.b)(p,Object.assign({},o,n,{components:a,mdxType:"MDXLayout"}),Object(t.b)("p",null,"One simple improvement that solves my previous ssh copy pain on remote vim..."),Object(t.b)("h1",null,"Just Three Functions"),Object(t.b)("p",null,"In your Vim config:"),Object(t.b)("div",{className:"gatsby-highlight","data-language":"vim"},Object(t.b)("pre",Object.assign({parentName:"div"},{className:"language-vim"}),Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-vim"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"function"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"GetVisualSelection"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n  ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"try"),"\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"let")," a_save ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," @a\n    normal",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!")," gv",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),'"ay'),"\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"return")," @a\n  ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"finally"),"\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"let")," @a ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," a_save\n  ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"endtry"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"endfunction"),"\n\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"function")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"CopyToNetCat"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," range\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"let")," selected_lines ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"GetVisualSelection"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    echo ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"system"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'printf \"%s\" '"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"."),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"shellescape"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"selected_lines",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"."),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"' | nc localhost 2000'"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"endfunction")))),Object(t.b)("p",null,"and probably bind it like this:"),Object(t.b)("div",{className:"gatsby-highlight","data-language":"vim"},Object(t.b)("pre",Object.assign({parentName:"div"},{className:"language-vim"}),Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-vim"}),"vnoremap ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"C",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"-"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"y"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),">")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"call")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"CopyToNetCat"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"CR",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),">")))),Object(t.b)("p",null,"In your Mac shell script (Linux should replace ",Object(t.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"pbcopy")," with ",Object(t.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"xclip -sel clip")," or ",Object(t.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"xsel -i -b "),"):"),Object(t.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(t.b)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function-name function"}),"ssh_copy"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"while")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"nc -l ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"2000")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"|")," pbcopy",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"||")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"true"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"do")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"done")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"&"),"\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token assign-left variable"}),"copy_daemon"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token variable"}),"$!"),"\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"ssh")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token variable"}),"$@")," -R ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"2000"),":localhost:2000\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"pkill")," -9 -g ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token variable"}),"$copy_daemon"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(t.b)("p",null,"Now, you login with ",Object(t.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"ssh_copy user@server")," instead of normal ",Object(t.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"ssh")," to remote and have fun there with ",Object(t.b)("kbd",null,"Ctrl"),"+",Object(t.b)("kbd",null,"y"),". Also feel free to change the port number if ",Object(t.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"2000")," is too familar to you. "),Object(t.b)("h1",null,"If Multiple SSH Sessions Bother You"),Object(t.b)("p",null,"Just forcefully kick out your dups session:"),Object(t.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(t.b)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function-name function"}),"ssh_copy"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token builtin class-name"}),"echo")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"Make sure you setup password free by doing: ssh-copy-id id@server"'),"\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"# clean all other ssh session"),"\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"ssh")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token variable"}),"${1}")," -t ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'\'ps -aux | grep "[s]sh" | grep pts/ | grep -v ',Object(t.b)("span",Object.assign({parentName:"span"},{className:"token variable"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"token variable"}),"$("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"token function"}),"ps")," --no-headers -fp $$ ",Object(t.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),"|")," ",Object(t.b)("span",Object.assign({parentName:"span"},{className:"token function"}),"awk")," ",Object(t.b)("span",Object.assign({parentName:"span"},{className:"token string"}),'"{print \\',Object(t.b)("span",Object.assign({parentName:"span"},{className:"token variable"}),"$3"),'}"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"token variable"}),")")),' | awk "{print \\',Object(t.b)("span",Object.assign({parentName:"span"},{className:"token variable"}),"$2"),"}\" | xargs kill -9'"),"\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"while")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"nc -l ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"2000")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"|")," pbcopy",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"||")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"true"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"do")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"done")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"&"),"\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token assign-left variable"}),"copy_daemon"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token variable"}),"$!"),"\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"ssh")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token variable"}),"${1}")," -R ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"2000"),":localhost:2000 -t ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'tmux a || ",Object(t.b)("span",Object.assign({parentName:"span"},{className:"token environment constant"}),"$SHELL")," '"),"\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"pkill")," -9 -g ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token variable"}),"$copy_daemon"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(t.b)("h1",null,"Bonus: No +clipboard or DISPLAY"),Object(t.b)("p",null,Object(t.b)("strong",{parentName:"p"},"Symptoms"),": SSHed in the same remote server, with no ",Object(t.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"+clipboard")," or ",Object(t.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"$DISPLAY"),", thus ",Object(t.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"unamedplus"),", ",Object(t.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"xsel")," or ",Object(t.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"xclip")," would not work in different tmux session etc."),Object(t.b)("p",null,Object(t.b)("strong",{parentName:"p"},"Treatment"),": ancient/traditional copy via tmp files. Map keys to these functions."),Object(t.b)("div",{className:"gatsby-highlight","data-language":"vim"},Object(t.b)("pre",Object.assign({parentName:"div"},{className:"language-vim"}),Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-vim"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"function")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"CopyToTmpBuffer"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," range\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"let")," selected_lines ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"GetVisualSelection"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    echo ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"system"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'printf \"%s\" '"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"."),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"shellescape"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"selected_lines",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"."),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"' > ~/.config/nvim/backup/.vim-buf'"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"endfunction"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"function")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"PasteFromTmpBuffer"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"try"),"\n        ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"let")," a_save ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," @a\n        ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"let")," @a ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"system"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'cat ~/.config/nvim/backup/.vim-buf'"),Object(t.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n        normal",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!")," ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),'"ap'),"\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"finally"),"\n        ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"let")," @a ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," a_save\n    ",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"endtry"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"endfunction")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-2020-08-20-better-ssh-copy-mdx-da8b46f2387ab32bad13.js.map