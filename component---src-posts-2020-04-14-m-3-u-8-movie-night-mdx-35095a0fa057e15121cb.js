(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"33vx":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return r}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("q1tI");var n=a("7ljp"),i=a("8hLB");var s={},c={_frontmatter:s},o=i.a;function r(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(o,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"There are a lot of movie night chat room, but none of them supports m3u8! Let me fix that..."),Object(n.b)("h1",null,"Intros"),Object(n.b)("p",null,"Why? A lot of great free resource is using ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"m3u8")," for example ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/topics/m3u8-playlist"}),"here")," and under Shelter In Place orders, keeping social distance and watching these along with friends remotely is highly demanded!"),Object(n.b)("h1",null,"Scope"),Object(n.b)("p",null,"Users are mostly my UIowa Alumni friends (no more than 8 concurrent users). Scale is not issue at all even if we host on one single old machine. Heroku is free!"),Object(n.b)("h1",null,"Quick Hack"),Object(n.b)("p",null,"So my target is to finish it asap."),Object(n.b)("p",null,"After 30min search, I found ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/kyle8998/Vynchronize"}),"Vynchronize")," comes to my sight... Yeah, it's old js app likely 2008ish which means almost no common js framework and tooling. But you know, hacker doesn't care about that."),Object(n.b)("p",null,"If we have a player that can play the ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"m3u8")," then we just need a bit adaptation for the player. Oh, luckily we just found one: ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://dplayer.js.org/guide.html"}),"DPlayer"),"!"),Object(n.b)("p",null,"Html5 player in this app is very similar to DPlayer interface wise. So for quick hack, I changed the ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"media")," which is original html5 video object to dplayer object. The only difference of both interfaces are loading new video ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"switchVideo()")," and ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"seek(time)"),". This way, we keep the minimum code changes."),Object(n.b)("p",null,"After 1 hr's reading and writing, changes are done and movie is synchronized! Then just 10 min to deploy it as a Heroku app. I'm totally satisfied with the time spent on this today."),Object(n.b)("p",null,"Here's my mod ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/daizeng1984/Vynchronize"}),"code"),", welcome to deploy it for your friends! If you do, don't forget to star it as well!"),Object(n.b)("p",null,Object(n.b)("figure",Object.assign({parentName:"p"},{className:"gatsby-resp-image-figure",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",width:"40%",textAlign:"center",minWidth:"15rem",backgroundColor:"rgb(255, 255, 255)",border:"1px solid rgb(222, 226, 230)",maxWidth:"600px"}}),"\n    ",Object(n.b)("span",Object.assign({parentName:"figure"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}}),"\n      ",Object(n.b)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/static/04a75e6e5e974487fa695c5e493d7c22/78958/synchronize-m3u8.png",style:{display:"block"},target:"_blank",rel:["noopener"]}),"\n    ",Object(n.b)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"70%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/svg+xml,%3csvg%20xmlns=\\'http://www.w3.org/2000/svg\\'%20width=\\'400\\'%20height=\\'279\\'%20viewBox=\\'0%200%20400%20279\\'%20preserveAspectRatio=\\'none\\'%3e%3cpath%20d=\\'M14%2027c-2%201-1%2020%200%2021l32%201c36%200%2033%201%2033-12%200-12%203-11-33-11l-32%201m27%208h-1l-3-1c-2%200-2%200-2%204v3l3-2c3-2%203-2%203%200%200%203%206%203%206%200%200-2%200-2%201%200v3h1l2-3h1l2%202%202-2h1c0%203%202%202%202-1%201-3%201-4-1-2h-2c0-1-5-1-6%201h-1c-1-2-5-2-6-1l1%201v1c-1%201-2%200-2-2-1-2-1-3-1-1M7%2083c0%202%200%20193%201%20192h384V82h-6v27l-1%2028-186%201H15l-1-28V83l-3-1-4%201\\'%20fill=\\'%23d3d3d3\\'%20fill-rule=\\'evenodd\\'/%3e%3c/svg%3e')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"Vynchronize with m3u8",title:"Vynchronize with m3u8",src:"/static/04a75e6e5e974487fa695c5e493d7c22/0a47e/synchronize-m3u8.png",srcSet:["/static/04a75e6e5e974487fa695c5e493d7c22/8a4e8/synchronize-m3u8.png 150w","/static/04a75e6e5e974487fa695c5e493d7c22/5a46d/synchronize-m3u8.png 300w","/static/04a75e6e5e974487fa695c5e493d7c22/0a47e/synchronize-m3u8.png 600w","/static/04a75e6e5e974487fa695c5e493d7c22/1cfc2/synchronize-m3u8.png 900w","/static/04a75e6e5e974487fa695c5e493d7c22/c1b63/synchronize-m3u8.png 1200w","/static/04a75e6e5e974487fa695c5e493d7c22/78958/synchronize-m3u8.png 1320w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    "),"\n    ",Object(n.b)("figcaption",Object.assign({parentName:"figure"},{className:"gatsby-resp-image-figcaption"}),"Vynchronize with m3u8"),"\n  ")))}r.isMDXComponent=!0},"8hLB":function(e,t,a){"use strict";a("E5k/");var n=a("q1tI"),i=a.n(n),s=(a("Wbzz"),a("Bl7J"));t.a=function(e){return i.a.createElement(s.a,Object.assign({},e,{icon:"post"}))}}}]);
//# sourceMappingURL=component---src-posts-2020-04-14-m-3-u-8-movie-night-mdx-35095a0fa057e15121cb.js.map