(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"8hLB":function(e,a,t){"use strict";var n=t("q1tI"),s=t.n(n),c=(t("Wbzz"),t("Bl7J"));a.a=function(e){return s.a.createElement(c.a,Object.assign({},e,{icon:"post"}))}},z0qx:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return r}));var n=t("zLVn"),s=(t("q1tI"),t("7ljp")),c=t("8hLB"),o={},i={_frontmatter:o},b=c.a;function r(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(s.b)(b,Object.assign({},i,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Markdown + ReactJS = MDX."),Object(s.b)("h1",null,"RIP Jekyll and ",Object(s.b)("a",Object.assign({parentName:"h1"},{href:"https://daizeng1984.bitbucket.io/"}),"My Old Home Page")),Object(s.b)("p",null,"It's been an idea for a while since the ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"/2019-05-12-reactjs-webpack-jekyll"}),"posts")," last year. After I upgraded my mac, Jeykyll is broken in my new setup. Installing ruby's native package is nightmare, and I cannot bear the tedious rb-package, e.g. ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://anaconda.org/conda-forge/rb-eventmachine"}),"rb-eventmachine"),". So why not try out the javascript based blog framework?"),Object(s.b)("p",null,"There are quite a few framework based on Javascript, like Hexo, etc. But if you love ReactJS and Markdown, ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/react-static/react-static/tree/master/"}),"React Static")," and ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/"}),"Gatsby")," might catch your eyes. In my first trials, I dumped React Static because of too much scratch work need to be done for MDX mixed with frontmatters."),Object(s.b)("h1",null,"So Gatsby?"),Object(s.b)("h2",null,"Pros"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"All in JS"),Object(s.b)("li",{parentName:"ul"},"A lot of good plugins"),Object(s.b)("li",{parentName:"ul"},"A lot of optimization for static generation like images"),Object(s.b)("li",{parentName:"ul"},"Support MDX with Frontmatters")),Object(s.b)("h2",null,"Cons"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"ReactJS is required"),Object(s.b)("li",{parentName:"ul"},"GraphQL is required")),Object(s.b)("h1",null,"How to Migrate"),Object(s.b)("h2",null,"UI"),Object(s.b)("p",null,"Basically ReactJS doesn't like the dangerously old html template in Jekyll. Redesign from scratch is necessary. I redesign all the modules and try to keep my favorite elements as possible. For ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://threejs.org/"}),"Three.js")," ocean wave and some tiny scripts, still work in progress. But overall, the current UI looks nice and clean. I'll add more dynamic items later."),Object(s.b)("p",null,"I also replaced the old background gradient color images with css gradient animation for better performance."),Object(s.b)("p",null,"Meanwhile, of course responsive and mobile friendly page is always my goal."),Object(s.b)("h2",null,"Posts"),Object(s.b)("p",null,"I need to support my old frontmatters as much as possible, and the old markdown posts can be directly used in MDX. Resources like images and links need to change a bit in these posts. To get images, GraphQL is used. It looks tedius and confusing at first, but later when you modularize them, it works better with benefits of image loading optimization."),Object(s.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function-variable function"}),"Image")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"props")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"\n  ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),"StaticQuery\n    query",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"graphql",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"\n      query {\n        images: allFile {\n          edges {\n            node {\n              relativePath\n              name\n              childImageSharp {\n                fluid(maxWidth: 600) {\n                  ...GatsbyImageSharpFluid\n                }\n              }\n            }\n          }\n        }\n      }\n    "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n    render",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"data")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," image ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," data",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"images",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"edges",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"find"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"n")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"return")," n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"node",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"relativePath",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"includes"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"props",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"filename",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n      ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n      ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// do something for your image"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"/"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"export")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"default")," Image"))),Object(s.b)("p",null,"Tweak these query with ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"http://localhost:8000/___graphql"}),"http://localhost:8000/___graphql")),Object(s.b)("h2",null,"Images"),Object(s.b)("p",null,"The powerful Gatsby plugin preprocess static images and optimize them when loading out of box. For other format like gif and svg, we have to keep the original. Static webpage in Gatsby allow you to spend very little effort to achieve something very close to professional. As below, when website initially load Grey SVG image, it is blazing fast! Then lazily, higher res png image will be loaded. Making sure you won't wait for assets loading."),Object(s.b)("figure",{className:"gatsby-resp-image-figure",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",width:"40%",textAlign:"center",minWidth:"7rem",backgroundColor:"rgb(255, 255, 255)",border:"1px solid rgb(222, 226, 230)",maxWidth:"600px"}},"\n    ",Object(s.b)("span",Object.assign({parentName:"figure"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}}),"\n      ",Object(s.b)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/static/7fb9984e70f1e5026921ee844c14f91a/38af3/ninja-fluid-svg.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(s.b)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"155.33333333333331%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,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')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"Ninja Gaiden Image Preprocess into Gray B&W SVG",title:"Ninja Gaiden Image Preprocess into Gray B&W SVG",src:"/static/7fb9984e70f1e5026921ee844c14f91a/0a47e/ninja-fluid-svg.png",srcSet:["/static/7fb9984e70f1e5026921ee844c14f91a/8a4e8/ninja-fluid-svg.png 150w","/static/7fb9984e70f1e5026921ee844c14f91a/5a46d/ninja-fluid-svg.png 300w","/static/7fb9984e70f1e5026921ee844c14f91a/0a47e/ninja-fluid-svg.png 600w","/static/7fb9984e70f1e5026921ee844c14f91a/38af3/ninja-fluid-svg.png 894w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    "),"\n    ",Object(s.b)("figcaption",Object.assign({parentName:"figure"},{className:"gatsby-resp-image-figcaption"}),"Ninja Gaiden Image Preprocess into Gray B&W SVG"),"\n  "),Object(s.b)("h1",null,"Deploy"),Object(s.b)("p",null,"Github failed my build everytime. I need to add .nojekyll in the root of the repository!"),Object(s.b)("h1",null,"Future Work"),Object(s.b)("p",null,"Continue to finish the Three.js work and tiny scripts."))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-2020-04-17-all-in-javascript-mdx-105a334e98c1c723d341.js.map