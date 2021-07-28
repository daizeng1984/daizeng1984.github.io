(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"8hLB":function(e,a,t){"use strict";t("E5k/");var n=t("q1tI"),s=t.n(n),c=(t("Wbzz"),t("Bl7J"));a.a=function(e){return s.a.createElement(c.a,Object.assign({},e,{icon:"post"}))}},MGci:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return p}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("q1tI");var n=t("7ljp"),s=t("8hLB");var c={},o={_frontmatter:c},b=s.a;function p(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.b)(b,Object.assign({},o,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"(Obsolete: because of migration from Jekyll to Gatsby mdx, js in page will be much easier!)."),Object(n.b)("p",null,"It's been on my TODO list for a while to put frontend framework into Jekyll"),Object(n.b)("h1",null,"Why"),Object(n.b)("p",null,"Jekyll template is great but it's static multipage. Considering later I might post a few front end stuff (single page toy) in my blog with more new js and css to use, I guess it's time to move and organize every js/css to ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://webpack.js.org/"}),"Webpack")," and use some framework for frontend view. This work is the behind the scene: my website won't visually change much. However it did accelerate a bit cause Webpack could do some optimization like minimize. As frontend framework, ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/"}),"ReactJS")," is ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://2018.stateofjs.com/front-end-frameworks/conclusion/"}),"cool and hot"),", so it's not bad to use it for any frontend view related work."),Object(n.b)("h1",null,"Folder Structure"),Object(n.b)("p",null,"Jeyll has its own structure, and we need to add webpack config and source atop. Just think a plain folder name and make it as separate as possible. Some examples from Google Search should be fine to follow: like ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://medium.com/@allizadrozny/using-webpack-and-react-with-jekyll-cfe137f8a2cc"}),"this"),"."),Object(n.b)("h1",null,"Webpack"),Object(n.b)("p",null,"Webpack essentially do one job: bundle your assets including js, css, shaders, etc. and then it could nicely either inject your bundle assets into the html or you manually inject yourself. I like this tool better than ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://gulpjs.com/"}),"gulp")," etc. because it's so convenient with a lot of ready-to-use plugin and you don't need to do much more (like the feeling of Spring Boot). For React we just need to ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"npm install --save-dev")," a bunch of packages from ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://babeljs.io/docs/en/"}),"Babel")," and it should work out of box too. However, setting up ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"webpack.config.js")," and ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"package.json")," takes some efforts e.g. to: find the name; solve dependencies issue; and figure out new version vs old version. Therefore, to help you if interested, I also dump them out here. First is the major part of our ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"package.json"),":"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"//..."),"\n    \n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"scripts"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"start"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"concurrently \\"./node_modules/.bin/webpack --watch\\" \\"bundle exec jekyll serve\\""'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"test"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"echo \\"Error: no test specified\\" && exit 1"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"prod"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"./node_modules/.bin/webpack  --config webpack.prod.config.js"'),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"devDependencies"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"@babel/core"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^7.4.4"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"@babel/preset-env"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^7.4.4"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"@babel/preset-react"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^7.0.0"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"babel-loader"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^8.0.6"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"concurrently"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^4.1.0"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"css-loader"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^2.1.1"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"extract-text-webpack-plugin"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^4.0.0-beta.0"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"file-loader"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^3.0.1"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"html-loader"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^0.5.5"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"html-webpack-plugin"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^3.2.0"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"optimize-css-assets-webpack-plugin"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^5.0.1"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"raw-loader"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^2.0.0"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"react"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^16.8.6"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"react-addons-update"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^15.6.2"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"react-dom"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^16.8.6"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"style-loader"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^0.23.1"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"terser-webpack-plugin"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^1.2.3"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"webpack"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^4.31.0"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"webpack-cli"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"^3.3.2"'),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"//..."),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(n.b)("p",null,"This config contains all the npm package to make webpack and reactjs lib dependency right including ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"concurrently")," that runs webpack and jekyll simultaneously with the magic ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),'"concurrently \\"./node_modules/.bin/webpack --watch\\" \\"bundle exec jekyll serve\\""')),Object(n.b)("p",null,"Second part is ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"webpack.config.js"),":"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," HtmlWebPackPlugin ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"require"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"html-webpack-plugin"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," path ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"require"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'path'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ExtractTextPlugin ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"require"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"extract-text-webpack-plugin"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\nmodule",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"exports ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    entry",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"./webpack/js/main.js"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    output",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        path",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," __dirname ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"+")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'/assets/built'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        filename",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"bundle.js"'),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    resolve",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        modules",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n            path",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"resolve"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"__dirname",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n            path",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"resolve"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"__dirname ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"+")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'/node_modules'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n        ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    module",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        rules",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n            ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n                test",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token regex"}),"/\\.jsx?$/"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n                exclude",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token regex"}),"/(node_modules)/"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n                use",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n                    loader",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"babel-loader"'),"\n                ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n            ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n            ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n                test",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token regex"}),"/\\.html$/"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n                use",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n                    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n                        loader",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"html-loader"'),"\n                    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n                ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),"\n            ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n            ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n                test",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token regex"}),"/\\.css$/"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n                use",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ExtractTextPlugin",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"extract"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n                    fallback",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"style-loader"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n                    use",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"css-loader"'),"\n                ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n            ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n            ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n                test",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token regex"}),"/\\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n                loader",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'file-loader?name=assets/[name].[hash].[ext]'"),"\n            ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    plugins",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n        ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"new")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"ExtractTextPlugin"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n            filename",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"style.css"'),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n            disable",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," process",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"env",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"NODE_ENV")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"===")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"development"'),"\n        ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    mode",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'development'")," \n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"This configuration can pack your js into ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"bundle.js"),", css into ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"style.css")," and hash font name etc. as long as you ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"import")," the files (js/css) in your entry js, which is ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"main.js")," here in config file. Note here I removed the html templating but feel free to add it back for your application because right now I was actually using Jekyll's. Note if you need do multiple ReactJS projects like me you need to add entry point for each ReactJS project."),Object(n.b)("p",null,"So the following work is tediously importing things."),Object(n.b)("h1",null,"ReactJS"),Object(n.b)("p",null,"What I like ReactJS is that it actually force you to think page in components and commuicate via Flux. This is benefitial and elegant when you have a lot of components to interact for users and unlike Angular which is now very ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Java"),", you got a lot easier to handle template's data binding."),Object(n.b)("h1",null,"Result"),Object(n.b)("p",null,"So end up with this ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://codepen.io/gaearon/pen/gWWZgR?editors=0010"}),"TicTacToe")," below rendered by ReactJS! Thank you for reading to this far! I also didn't expect I could write about this work so much..."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-2019-05-12-reactjs-webpack-jekyll-mdx-6380b10e41dd6d9e8299.js.map