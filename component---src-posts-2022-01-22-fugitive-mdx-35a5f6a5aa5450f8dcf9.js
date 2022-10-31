(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"3Lei":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a("zLVn"),s=(a("q1tI"),a("7ljp")),c=a("8hLB"),i={},o={_frontmatter:i},b=c.a;function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)(b,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Most powerful git tool vimmer ever created..."),Object(s.b)("h1",null,"Why"),Object(s.b)("p",null,"This is just a simple tutorial to features I found useful in ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/tpope/vim-fugitive"}),"Fugitive.vim"),"."),Object(s.b)("p",null,"In my experience, Fugitive is like a surgery tool directly operating on those SHA objects in ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),".git"),". There's basically nothing it cannot do and it sounds so illegal. However, it's not foolproof type of product, instead, you need to dive deeper into its documents and tutorial to find your own way. So this blog is just to summarize my way. But I hope it's also useful for you."),Object(s.b)("h1",null,"Basic Concept"),Object(s.b)("p",null,"First, you need to understand what's ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"fugitive object"),". We have 3 types of object: ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"tree"),", ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"blob")," and ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"commit"),". ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"tree")," is folder structure; ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"blob")," is file; and ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"commit")," is the commit object. All of them are coded in SHA to refer to. "),Object(s.b)("p",null,Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/tpope/vim-fugitive/blob/master/doc/fugitive.txt#L593-L615"}),"Here"),"'s the example for how Fugitive refers to these objects. But it's much more than you could use in daily life though! What I found useful are:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"**HEAD~2** HEAD's previous 2 commit object and @ equals HEAD if you like to type short\n**master~2** master current commit's previous 2 commit object\n**branch:filename** e.g. master:% current file blob, or just give branch name master for current file\n**branch:** branch tree object\n**@~2:filename** HEAD's grandparent's file blob"))),Object(s.b)("p",null,"In following, I'll just call them object with this context. Together with normal git version syntax, it's easy enough to identify files of different branch and commits. Let's see how powerful it is."),Object(s.b)("h1",null,"Fugitive Swiss Knife"),Object(s.b)("h2",null,"Git"),Object(s.b)("p",null,"Type ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),":G")," and you get interactive ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"git status"),", where you could staged/unstaged (-), revert (X), and check diff (dv). Do you still remember the painful ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"git add -p")," command? When you diff you can directly edit the staged version to partially stage your changes!"),Object(s.b)("p",null,"This single interface alone is very satisfying already and probably cover 60% of your git usage. "),Object(s.b)("h2",null,"Git diff(tool)"),Object(s.b)("p",null,"You can directly diff two version e.g. ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),":G d object1 object2")," (diff object now has issue). It returns you the list of diff files. Use ",Object(s.b)("kbd",null,"[q")," and ",Object(s.b)("kbd",null,"]","q")," to move between hotspot. To view file line by line diff, you can add this ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/tpope/vim-fugitive/issues/132#issuecomment-570844756"}),"temporary fix"),". I personally bind it to a ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/daizeng1984/dotfiles/commit/db62f1d86b2d1a92584e61d9bcce1ab3cde0c32b#diff-35c46ca8a60cfeffe2fb3abb0865cbd7b0caa446d207e0b0d8b4d523221438e4R248"}),"key")," so that we could diff lines anytime."),Object(s.b)("h2",null,"Git log (Following Files)"),Object(s.b)("p",null,"You can trace historical changes through ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),":0Gclog -- %")," to get all commits containing current file. Of course ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"%")," is just vim's syntax sugar for current file. You can put any file after the ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"--"),". To diff any 2 versions in the quickfix window, I open a version (in current buffer) and use ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/daizeng1984/dotfiles/commit/162431234f74b607415f569aa541672d40c76940#diff-35c46ca8a60cfeffe2fb3abb0865cbd7b0caa446d207e0b0d8b4d523221438e4R246"}),"key")," to select another version to diff against current buffer."),Object(s.b)("h2",null,"Git mergetool"),Object(s.b)("p",null,"You can directly merge the conflicting file using ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Gvdiffsplit!"),". Conflicting file will open as three way merge style. 3-way merge windows looks confusing but it's actually straightforward: From left to right is ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Merge Target")," or ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Ours")," ➡ ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Working Copy")," ➡ ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Feature Branch")," or ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Theirs"),"."),Object(s.b)("p",null,Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),":diffget")," is the same as normal vimdiff mode except that you need to give buffer name. For example, for buffers like:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"Ours: ......//2/demo.js\nWorking: ....../demo.js\nTheirs: ......//3/demo.js"))),Object(s.b)("p",null,"Then you 3-way merge will refer to these buffer with the name ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"2"),", ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"demo")," and ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"3"),". For example, to get from ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Ours"),", we type ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),":diffget 2"),". To conclude your merge, just ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),":Gwrite"),"."),Object(s.b)("h2",null,"Gedit"),Object(s.b)("p",null,"You can get any version in git like God using ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),":Gedit object"),". For example, if I want to see the file in a feature branch, I just do ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),":Gedit branchname:/path/to/file"),". Or if not sure about the filename, I'll just ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),":Gedit branchname:")," to open tree object or folder."),Object(s.b)("p",null,"Run ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),":Gedit")," without any parameters will take you back to working copy. Combining with ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Gvdiffsplit")," you can diff with any version as well manually."),Object(s.b)("h2",null,"Gwrite"),Object(s.b)("p",null,"Write/save your working one and also update to staged. It's somewhat useful when you do merging and want to use purely from ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Ours")," or ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Theirs"),"."))}l.isMDXComponent=!0},"8hLB":function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),c=(a("Wbzz"),a("Bl7J"));t.a=function(e){return s.a.createElement(c.a,Object.assign({},e,{icon:"post"}))}}}]);
//# sourceMappingURL=component---src-posts-2022-01-22-fugitive-mdx-35a5f6a5aa5450f8dcf9.js.map