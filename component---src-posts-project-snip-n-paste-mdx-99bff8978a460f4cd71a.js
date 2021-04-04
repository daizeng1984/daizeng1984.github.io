(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"8hLB":function(e,a,t){"use strict";var n=t("q1tI"),s=t.n(n),o=(t("Wbzz"),t("Bl7J"));a.a=function(e){return s.a.createElement(o.a,Object.assign({},e,{icon:"post"}))}},YGTQ:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return r}));var n=t("zLVn"),s=(t("q1tI"),t("7ljp")),o=t("8hLB"),c={},i={_frontmatter:c},p=o.a;function r(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(s.b)(p,Object.assign({},i,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"It's a breaking workflow when I need to take a picture of screen (to clipboard), save it into somewhere and link it before starting to write something in markdown. This plugin is to fix that for vim users. It can also do the same job for image file if you have its absolute path in clipboard!"),Object(s.b)("h1",null,"But Markdown Cannot Show Image!"),Object(s.b)("p",null,"Well I don't want to address this problem here but technically yes it can if you use a fancier terminal like ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://www.iterm2.com/"}),"iTerm2"),". Actually for markdown preview in vim, a practical way is to use GUI vim e.g. ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/qvacua/vimr"}),"vimR")," or browser solution like ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/suan/vim-instant-markdown"}),"markdown instant preview"),". However, if you are hardcore vimmer, probably solution as in ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/ashisha/image.vim"}),"image.vim")," will be preferrable. Maybe at some point, we could write another plugin to display colorful blocky image in markdown vim."),Object(s.b)("h1",null,"Search in Darkness"),Object(s.b)("p",null,"First we need to grab clipboard data and this is not trivial at all in Python. ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/7045264/how-do-i-read-a-jpg-or-png-from-the-windows-clipboard-in-python-and-vice-versa"}),"This")," one from ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://python-pillow.org/"}),"PIL")," actually only support win32 unfortunately. So I did some research on stackoverflow: went through recommendations like ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://pypi.python.org/pypi/pyperclip"}),"Pyperclip")," (text-only and I used before but got issues due to its GUI dependencies in ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/ranger/ranger"}),"Ranger"),"), ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://wiki.python.org/moin/TkInter"}),"TKinter")," (too heavy for a vim plugin), ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/7045264/how-do-i-read-a-jpg-or-png-from-the-windows-clipboard-in-python-and-vice-versa#answer-7047190"}),"PythonMagick")," (I use ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://www.imagemagick.org/script/index.php"}),"Magick")," a lot, but this python version has no ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"http://pip.pypa.io/en/stable/"}),"pip")," support, and is hard to install for normal users), ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/7083313/python-get-mac-clipboard-contents#answer-8309779"}),"Xerox")," (only support text, ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://pypi.python.org/pypi/richxerox/1.0.0"}),"richxerox")," does extra for html but didn't support image)... I'm surprised that we don't have this in Python! Maybe because this type (clipboard) of GUI related feature have too much trap to cross platform. But I just need it work on Mac OSX and Linux."),Object(s.b)("h1",null,"From Scratch"),Object(s.b)("p",null,"Therefore, here's what I could do at this point:\nFor Mac OS X: we just need to ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"brew install pngpaste")," from ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/jcsalterego/pngpaste"}),"here"),". Then use osascript to check the clipboard information and call this program to do the job.\nFor Linux: this ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/6841532/linux-image-from-clipboard#answer-27995840"}),"answer")," looks promising."),Object(s.b)("p",null,"Ok, let's quickly build a working plugin. Since we have access to clipboard and we could also check if clipboard contains image file name to copy it to local folder and link in markdown as well."),Object(s.b)("p",null,"Hooray for Mac Vim user! Now, let's make it work in Linux."),Object(s.b)("h1",null,"Bumping Around"),Object(s.b)("p",null,"Again promising ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"xclip")," suggested from ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/6841532/linux-image-from-clipboard#answer-27995840"}),"here")," doesn't work... and some suggests ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://superuser.com/questions/199285/how-to-copy-image-to-clipboard-to-paste-to-another-application/247069#answer-247069"}),"pygtk"),". Okay, looks like we are stuck in GTK but that should be fine (easier to install on linux and probably on mac as well) for most use cases. PyGtk is actually a bit old, and we'd better use GTK3 from ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://python-gtk-3-tutorial.readthedocs.io/en/latest/index.html"}),"here"),"."),Object(s.b)("p",null,"So I installed ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"pyobject2")," and ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"python34-gobject")," and try the ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://pygobject.readthedocs.io/en/latest/"}),"test code"),". After making sure everything works, just follow the ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"http://python-gtk-3-tutorial.readthedocs.io/en/latest/clipboard.html"}),"example")," snippet:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"python"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-python"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-python"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," gi\ngi",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"require_version",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'Gtk'"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'3.0'"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," gi",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"repository ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," Gtk",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," Gdk\n\nclipboard ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," Gtk",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"Clipboard",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"get",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"Gdk",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"SELECTION_CLIPBOARD",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\nimage ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," clipboard",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"wait_for_image",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"if")," image ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"is")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"not")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"None"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),"\n    image",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"savev",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'screenshot.png'"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'png'"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n\ntext ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," clipboard",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"wait_for_text",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"if")," text ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"is")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"not")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"None"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"print"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"text",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(s.b)("p",null,"It's so simple, neat and I just wanted to have it on Mac as well."),Object(s.b)("h1",null,"Revisit PyGObject on Mac"),Object(s.b)("p",null,"conda install -c conda-forge pygobject"))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-project-snip-n-paste-mdx-99bff8978a460f4cd71a.js.map