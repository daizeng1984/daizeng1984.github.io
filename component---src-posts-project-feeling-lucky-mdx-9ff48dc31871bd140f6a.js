(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"8hLB":function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),s=(n("Wbzz"),n("Bl7J"));t.a=function(e){return a.a.createElement(s.a,Object.assign({},e,{icon:"post"}))}},CrSN:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return r}));var o=n("zLVn"),a=(n("q1tI"),n("7ljp")),s=n("8hLB"),l={},i={_frontmatter:l},c=s.a;function r(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"I feel I need a quick keyword linking tools in Vim so that I could keep writing while providing reflink. But I'm too lazy to grab link by myself and I trust Google Feeling Lucky feature most of the time. Therefore, this plugin is written to feed my need! It just does the job for me."),Object(a.b)("h2",null,"How"),Object(a.b)("p",null,"Put your cursor on the word and make command ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),":FeelingLuckyReflink")," and you're done."),Object(a.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(a.b)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"Jekyll --\x3e [Jekyll](https://jekyllrb.com/)"))),Object(a.b)("h2",null,"Vim Plugin again!"),Object(a.b)("p",null,"Writing python plugin for vim is the easist since Vim script is a little bit obscure for me. Not like last time, my plugins was a module under deoplete and I spent a lot of time to read it. This time, I just need a quick helloworld neovim plugin in Python like ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/jacobsimpson/nvim-example-python-plugin"}),"here"),"."),Object(a.b)("p",null,"Clone to plugged folder and remove vim part. Don't forgot to ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"UpdateRemotePlugins")," and add ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),":exec")," to run function. I probably need command so I changed accordingly as illustrated ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/neovim/python-client"}),"here"),". Now just leave the rest for Python requests lib!"),Object(a.b)("p",null,"%%\n%% ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"%%         buf = self.vim.current.buffer\n%%         (lnum1, col1) = buf.mark('<')\n%%         (lnum2, col2) = buf.mark('>')\n%%         lines = self.vim.eval('getline({}, {})'.format(lnum1, lnum2))\n%%         if lines :\n%%             lines[0] = lines[0][col1:]\n%%             lines[-1] = lines[-1][:col2]\n%%             self.vim.command('echo \"' + \"\\n\".join(lines) + '\"')\n%%         else:\n%%\n%%"),"\n%%\n%%\nBecause of lack of document and examples, and the cursor keeps resetting. Confused... It seems like Functioni will be reset while command is okay...\nSome information on\n",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/19728252/python-get-redirected-url-from-googles-i-feel-lucky-and-duckduckgos-im-f"}),"https://stackoverflow.com/questions/19728252/python-get-redirected-url-from-googles-i-feel-lucky-and-duckduckgos-im-f")),Object(a.b)("h2",null,"Now More Bonus!"),Object(a.b)("p",null,"I need to add the function of auto tag generation using ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://brettterpstra.com/2013/03/23/auto-tagging-jekyll-posts-with-zemanta/"}),"http://brettterpstra.com/2013/03/23/auto-tagging-jekyll-posts-with-zemanta/"),"\nZemanta is down... So I decided to find a light solution like ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://pypi.python.org/pypi/topia.termextract/"}),"https://pypi.python.org/pypi/topia.termextract/")," ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/ashleyw/phrasie/"}),"https://github.com/ashleyw/phrasie/")," and ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://www.quora.com/What-are-good-tools-to-extract-key-words-and-or-topics-tags-from-a-random-paragraph-of-text"}),"https://www.quora.com/What-are-good-tools-to-extract-key-words-and-or-topics-tags-from-a-random-paragraph-of-text")),Object(a.b)("h2",null,"Try out RAKE"),Object(a.b)("h2",null,"Selenium for Robot Defense"),Object(a.b)("p",null,"Not working, Google block this ip and ask for recaptcha."),Object(a.b)("h2",null,"Chromote"),Object(a.b)("p",null,"It's too complicate and a lot of setup"),Object(a.b)("h2",null,"API key"),Object(a.b)("p",null,"AIzaSyCYtnzDWqzPYE6LTtNyuxEZ6pLy6DCkysQ\nexample: ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/google/google-api-python-client/blob/master/samples/customsearch/main.py"}),"https://github.com/google/google-api-python-client/blob/master/samples/customsearch/main.py"),"\ncx  =  014324005263008877010:zmwtfjahkfe\nYou could get it from the cse's setup->basics-> ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://support.google.com/customsearch/answer/2631040?hl=en"}),"https://support.google.com/customsearch/answer/2631040?hl=en")),Object(a.b)("h2",null,"I might need"),Object(a.b)("p",null,"Save the prevoius reflink and find it and done!\nUse db? ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://docs.python.org/3/library/shelve.html#example"}),"https://docs.python.org/3/library/shelve.html#example")),Object(a.b)("h2",null,"Python3"),Object(a.b)("p",null,"To be able to use python3 you should have folder structure like: ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/neovim/python-client#user-content-remote-new-style-plugins"}),"https://github.com/neovim/python-client#user-content-remote-new-style-plugins")))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-project-feeling-lucky-mdx-9ff48dc31871bd140f6a.js.map