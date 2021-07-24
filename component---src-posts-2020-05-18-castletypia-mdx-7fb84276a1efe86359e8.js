(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"8hLB":function(e,a,t){"use strict";var n=t("q1tI"),s=t.n(n),c=(t("Wbzz"),t("Bl7J"));a.a=function(e){return s.a.createElement(c.a,Object.assign({},e,{icon:"post"}))}},"Ql/J":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return b})),t.d(a,"default",(function(){return m}));var n=t("zLVn"),s=(t("q1tI"),t("7ljp")),c=t("8hLB"),o=t("Pflh"),b={},p={_frontmatter:b},r=c.a;function m(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(s.b)(r,Object.assign({},p,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"If your kid love Castlevania and they are interested in computer ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"#simon-sprite-demo"}),"TL;DR"),"..."),Object(s.b)("h1",null,"Why?"),Object(s.b)("p",null,"My kids loves Castlevania when he saw me played in Nintendo virtual console. Graphics/sound effect are simple enough for him to digest."),Object(s.b)("p",null,"So why not make a typing game and meanwhile play a bit of PIXI.js (haven't done serious project for a bit while 😜)?"),Object(s.b)("h2",null,"Ambush! Webpack Complains"),Object(s.b)("p",null,"Because gatsby try to render the page and staticize it using server side rendering (please see ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/gatsbyjs/gatsby/issues/13355"}),"here"),"). For our app, it's dynamic js so we need to stop it, by wrapping our modules with LazyLoader components as below:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," Loadable ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"@loadable/component"'),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"export")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," SimonSpriteDemo ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"Loadable"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"./castletypia/simon-sprite-demo.js"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(s.b)("h2",null,"WebGL and Legacy"),Object(s.b)("p",null,"It turns out My Linux's Firefox doesn't support webgl well... For larger audience with no WebGL but only html5 I turned off it by installing the ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"legacy PIXI")," and import the right pkgs:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"json"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-json"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),"    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"pixi.js-legacy"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^5.3.3"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")))),Object(s.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"..."),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'@inlet/react-pixi/legacy'"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"..."),"\n\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," stageOptions ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  forceCanvas",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"true"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(s.b)("h2",null,Object(s.b)("a",Object.assign({parentName:"h2"},{href:"https://reactpixi.org/"}),"React PIXI.js"),"!"),Object(s.b)("p",null,"Good someone already have done something for react! But they don't support animation timing (different duration for each frame at this point)?"),Object(s.b)("p",null,"Let's customize our own component! "),Object(s.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," MyAnimatedSprite ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"PixiComponent"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'MyAnimatedSprite'"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function-variable function"}),"create"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"props"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," frameObjects",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," images",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," isPlaying ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"true"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," initialFrame ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," props\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," animatedSprite ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"new")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"PIXI",Object(s.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),"AnimatedSprite"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"frameObjects",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n        animatedSprite",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"isPlaying ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'gotoAndPlay'")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'gotoAndStop'"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"initialFrame ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"||")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"return")," animatedSprite\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function-variable function"}),"applyProps"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"instance",Object(s.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),",")," oldProps",Object(s.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),",")," newProps"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," frameObjects",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," isPlaying",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," initialFrame",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"..."),"props ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," newProps\n\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"applyDefaultProps"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"instance",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," oldProps",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," props",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"if")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"frameObjects ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"&&")," oldProps",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'frameObjects'"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!==")," frameObjects",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n            instance",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"textures ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"frameObjects",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n            instance",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"gotoAndPlay"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"if")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"isPlaying ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!==")," oldProps",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"isPlaying ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"||")," initialFrame ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!==")," oldProps",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"initialFrame",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n            ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," frame ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"typeof")," initialFrame ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"===")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'number'")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?")," initialFrame ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," instance",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"currentFrame ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"||")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),"\n            instance",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"isPlaying ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'gotoAndPlay'")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'gotoAndStop'"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"frame",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"return")," instance\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(s.b)("p",null,"This ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"MyAnimatedSprite")," do similar what ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"AnimatedSprite")," does but accept frameObjects as defined here:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"export")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"interface")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"FrameObject")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    texture",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," Texture",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    time",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," number",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(s.b)("h1",null,"Sprites!"),Object(s.b)("p",null,"2D game is all about sprite. We just need animation texture and its meta file (json). For texture, I found Simon sprite ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"http://supermariobroscrossover.com/media/simon-belmont-castlevania.290/#media"}),"here")," and with some basic painting tool e.g. gimp, I slowly locate their coordinates and sprite size... basically to fill these format:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"json"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-json"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),"    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"frames"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"walk0"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":"),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n            ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"frame"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"x"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"29"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"y"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"22"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"w"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"16"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"h"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"32"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n            ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"rotated"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"false"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n            ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"trimmed"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"true"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n            ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"spriteSourceSize"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"x"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"y"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"w"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"16"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"h"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"32"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n            ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"sourceSize"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"w"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"16"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"h"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"32"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ...\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(s.b)("p",null,"For the frameObjects, I created my definition of animations that'll be compatible with ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"AnimatedSprite"),":"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"json"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-json"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"my_animations"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"walk"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n            ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"texture"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"walk0"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n            ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token property"}),'"time"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"200"),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n        ...\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(s.b)("p",null,"Okay, now here it is:"),Object(s.b)("div",{id:"simon-sprite-demo"}),Object(s.b)(o.a,{mdxType:"SimonSpriteDemo"}))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-2020-05-18-castletypia-mdx-7fb84276a1efe86359e8.js.map