(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"8hLB":function(e,t,a){"use strict";a("E5k/");var n=a("q1tI"),s=a.n(n),o=(a("Wbzz"),a("Bl7J"));t.a=function(e){return s.a.createElement(o.a,Object.assign({},e,{icon:"post"}))}},YGTQ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return p}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("q1tI");var n=a("7ljp"),s=a("8hLB");var o={},c={_frontmatter:o},i=s.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(n.b)(i,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"It's a breaking workflow when I need to take a picture of screen (to clipboard), save it into somewhere and link it before starting to write something in markdown. This plugin is to fix that for vim users. It can also do the same job for image file if you have its absolute path in clipboard!"),Object(n.b)("h1",null,"But Markdown Cannot Show Image!"),Object(n.b)("p",null,"Well I don't want to address this problem here but technically yes it can if you use a fancier terminal like ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://www.iterm2.com/"}),"iTerm2"),". Actually for markdown preview in vim, a practical way is to use GUI vim e.g. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/qvacua/vimr"}),"vimR")," or browser solution like ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/suan/vim-instant-markdown"}),"markdown instant preview"),". However, if you are hardcore vimmer, probably solution as in ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/ashisha/image.vim"}),"image.vim")," will be preferrable. Maybe at some point, we could write another plugin to display colorful blocky image in markdown vim."),Object(n.b)("h1",null,"Search in Darkness"),Object(n.b)("p",null,"First we need to grab clipboard data and this is not trivial at all in Python. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/7045264/how-do-i-read-a-jpg-or-png-from-the-windows-clipboard-in-python-and-vice-versa"}),"This")," one from ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://python-pillow.org/"}),"PIL")," actually only support win32 unfortunately. So I did some research on stackoverflow: went through recommendations like ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://pypi.python.org/pypi/pyperclip"}),"Pyperclip")," (text-only and I used before but got issues due to its GUI dependencies in ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/ranger/ranger"}),"Ranger"),"), ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://wiki.python.org/moin/TkInter"}),"TKinter")," (too heavy for a vim plugin), ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/7045264/how-do-i-read-a-jpg-or-png-from-the-windows-clipboard-in-python-and-vice-versa#answer-7047190"}),"PythonMagick")," (I use ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://www.imagemagick.org/script/index.php"}),"Magick")," a lot, but this python version has no ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"http://pip.pypa.io/en/stable/"}),"pip")," support, and is hard to install for normal users), ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/7083313/python-get-mac-clipboard-contents#answer-8309779"}),"Xerox")," (only support text, ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://pypi.python.org/pypi/richxerox/1.0.0"}),"richxerox")," does extra for html but didn't support image)... I'm surprised that we don't have this in Python! Maybe because this type (clipboard) of GUI related feature have too much trap to cross platform. But I just need it work on Mac OSX and Linux."),Object(n.b)("h1",null,"From Scratch"),Object(n.b)("p",null,"Therefore, here's what I could do at this point:\nFor Mac OS X: we just need to ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"brew install pngpaste")," from ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/jcsalterego/pngpaste"}),"here"),". Then use osascript to check the clipboard information and call this program to do the job.\nFor Linux: this ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/6841532/linux-image-from-clipboard#answer-27995840"}),"answer")," looks promising."),Object(n.b)("p",null,"Ok, let's quickly build a working plugin. Since we have access to clipboard and we could also check if clipboard contains image file name to copy it to local folder and link in markdown as well."),Object(n.b)("p",null,"Hooray for Mac Vim user! Now, let's make it work in Linux."),Object(n.b)("h1",null,"Bumping Around"),Object(n.b)("p",null,"Again promising ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"xclip")," suggested from ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/6841532/linux-image-from-clipboard#answer-27995840"}),"here")," doesn't work... and some suggests ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://superuser.com/questions/199285/how-to-copy-image-to-clipboard-to-paste-to-another-application/247069#answer-247069"}),"pygtk"),". Okay, looks like we are stuck in GTK but that should be fine (easier to install on linux and probably on mac as well) for most use cases. PyGtk is actually a bit old, and we'd better use GTK3 from ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://python-gtk-3-tutorial.readthedocs.io/en/latest/index.html"}),"here"),"."),Object(n.b)("p",null,"So I installed ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"pyobject2")," and ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"python34-gobject")," and try the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://pygobject.readthedocs.io/en/latest/"}),"test code"),". After making sure everything works, just follow the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"http://python-gtk-3-tutorial.readthedocs.io/en/latest/clipboard.html"}),"example")," snippet:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"python"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-python"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-python"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," gi\ngi",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"require_version",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'Gtk'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'3.0'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," gi",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"repository ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," Gtk",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," Gdk\n\nclipboard ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," Gtk",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"Clipboard",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"get",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"Gdk",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"SELECTION_CLIPBOARD",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\nimage ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," clipboard",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"wait_for_image",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"if")," image ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"is")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"not")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"None"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),"\n    image",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"savev",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'screenshot.png'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'png'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n\ntext ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," clipboard",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"wait_for_text",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"if")," text ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"is")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"not")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"None"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"print"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"text",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("p",null,"It's so simple, neat and I just wanted to have it on Mac as well."),Object(n.b)("h1",null,"Revisit PyGObject on Mac"),Object(n.b)("p",null,"conda install -c conda-forge pygobject"))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-project-snip-n-paste-mdx-4fe54004b2ceab899760.js.map