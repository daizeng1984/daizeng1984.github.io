(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"8hLB":function(e,a,t){"use strict";var n=t("q1tI"),s=t.n(n),c=(t("Wbzz"),t("Bl7J"));a.a=function(e){return s.a.createElement(c.a,Object.assign({},e,{icon:"post"}))}},EK5r:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return b}));var n=t("zLVn"),s=(t("q1tI"),t("7ljp")),c=t("8hLB"),o={},i={_frontmatter:o},r=c.a;function b(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(s.b)(r,Object.assign({},i,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Reading notes from ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://www.manning.com/books/micro-frontends-in-action"}),"Micro Frontends in Action")," to get background for webpack 5 (",Object(s.b)("a",Object.assign({parentName:"p"},{href:"#nowait"}),"TL;DR"),")..."),Object(s.b)("h1",null,"Micro Frontends in Action (⭐⭐⭐)"),Object(s.b)("p",null,"When things gets bigger, you divided it and give it autonomy and trust. Yet during reading, I got to know Webpack Federation even more interesting!"),Object(s.b)("h1",null,"Specialist vs Cross Functional Team"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Old fashion"),": divide team based on their skills."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"New fashion"),": vertically divide into each small full stack group."),Object(s.b)("p",null,"In old fashion team provides modules/functions, knowledge, tools and asistance. However, they mostly focus on their own target. In real world many new features require full stack integration from front through to backend, therefore with too many dependencies and project moves slow. While with new vertical fashion, team is an independent ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"startup")," group (localized decision and management) and move faster. Some sharing cross team can help reduce duplication. Good or bad, I think it's very feasible for agile UX focus features. However, backend world and many other complicate system might still be leaning to old fashion since simply a tool or an infrastructure might cost a whole team effort and these parts are very commonly shared."),Object(s.b)("p",null,"Besides hiring, I think the keys of success for micro frontend structure are sharing and communications. Share to reuse knowledge/effort as much as possible. Communication and even compromising to avoid conflicting in integration."),Object(s.b)("h1",null,"Micro Frontend Framework"),Object(s.b)("p",null,"Basically, a framework that can integrates pages and page elemnts (fragments) into a solid normal web page. "),Object(s.b)("h2",null,"Page Split"),Object(s.b)("p",null,"Old MPA way to split. User experience bad."),Object(s.b)("h2",null,"iframe?"),Object(s.b)("p",null,"Performance, layout and accessibility make it not feasible. However, how Spotify uses for desktop application is very interesting to give a ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://www.quora.com/How-is-JavaScript-used-within-the-Spotify-desktop-application-Is-it-packaged-up-and-run-locally-only-retrieving-the-assets-as-and-when-needed-What-JavaScript-VM-is-used/answer/Mattias-Petter-Johansson"}),"read"),". It's Chromium Embedded Framework (CEF) in V8 which is somewhat like iframe (think about open multiple chrome tab windows in your app). It has interesting name Spotlet. Communication is through REST API style."),Object(s.b)("h2",null,"Ajax"),Object(s.b)("p",null,"Load and assembly the page. Still cannot solve namespace issues and nasty way to share/communicate in Javascript. Too many queries for different features. One option is to put this assembly in server side (SSR)."),Object(s.b)("h2",null,"Nginx or CDN Providers' Tricks"),Object(s.b)("p",null,"Server side templating or includes by configuring nginx, old tech to integrate pages/fragments and ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"nginx.conf")," form to fill. Many CDN providers also support similar stuff, just do: "),Object(s.b)("div",{className:"gatsby-highlight","data-language":"html"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-html"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"token namespace"}),"esi:"),"include")," ",Object(s.b)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"src"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(s.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"...",Object(s.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(s.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"/>"))))),Object(s.b)("p",null,"Not good for server side load. Communication between pages? No way!"),Object(s.b)("h2",null,"Client Side Composition"),Object(s.b)("p",null,"Client side do the integration and we only take care of traffic. Use webcomponent/custom html element to implement. "),Object(s.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"class")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"MyNewComponent")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"extends")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"HTMLElement")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"constructor"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// creation"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"disconnectedCallback"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// destroy"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"connectedCallback"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// this.innerHTML = `<fancy page/>`"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"attributeChangedCallback"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),'// this.getAttribute("my-attr");'),"\n    ",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// somewhere"),"\nwindow",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"customElements",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"define"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"my-new-component"'),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," MyNewComponent",Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(s.b)("p",null,"Old browser not support (problematic polyfill). Some virtual DOM framework (e.g. React) might have ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://custom-elements-everywhere.com/#react"}),"issues")," fully supporting it."),Object(s.b)("p",null,"Shadow DOM can help isolate your JS/CSS!"),Object(s.b)("p",null,"Since it's in the same html page, communication is fine. Following modern framework's pattern (e.g. Redux), it's easy (think of parent as main page and children as your web component:"),Object(s.b)("p",null,Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"parent")," --immutable attribute--\x3e ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"children")," "),Object(s.b)("p",null,Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"children")," --event report--\x3e ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"parent")," "),Object(s.b)("p",null,"Again, for communication, using web component or not, please strictly follow e.g. Redux pattern."),Object(s.b)("p",null,"Occasionally, pub/sub etc. can be used for ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"long distance")," call 😺. "),Object(s.b)("h3",null,"App Shell/Meta Framework"),Object(s.b)("p",null,"As in PWA, Cached skeleton (routers and some common things). Keep it lean and simple. Author implemented a toy example to illustrate but actually this skeleton should also handle Meta, error/failure handling, memory/resource management, performance profiling and communication. Some common tasks like auth, polyfill, analytic & tag as well. Actually there are a wheel on github: ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/single-spa/single-spa"}),"single-spa"),". "),Object(s.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"Key idea is to lazily load each SPA and maintain them in the same page (soft transition to each routes)."))),Object(s.b)("p",null,"However, interactivity is issue with loading/slow page. Later author comes back to mixture of server side and client side."),Object(s.b)("h1",null,"Server Sider + Client Side"),Object(s.b)("p",null,"This is called universal rendering in book. Useful for case when first page load matters. ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://ara-framework.github.io/website/"}),"Ara Framework")," will be the wheel.\nPersonal feeling this universal rendering idea creates extra complexity and why would I entangle components like this instead of keeping route path boundary at first place. First loading page can be solved by many other better ways."),Object(s.b)("h1",null,"Frontend Arch Decision Tree"),Object(s.b)("p",null,"Also see ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://www.angulararchitects.io/aktuelles/a-software-architects-approach-towards/"}),"here"),"."),Object(s.b)("p",null,"Doc vs Content Spectrum:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.b)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"Doc            <----  ----\x3e         Content\nWeb Site            PWA               Web App\nSSR                                     CSR"))),Object(s.b)("h1",null,"Performance"),Object(s.b)("p",null,"Build theirs own metrics for teams and aligned together. Common big framework vendor code costs so shares centerilized big vendor code. Sharing cause problem of deploy lock when version updates, so tools like ",Object(s.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"webpack.DllReferencePlugin")," comes to play. "),Object(s.b)("h1",null,"Pattern Library"),Object(s.b)("p",null,"Some philosophy of design decision for centralized/localized library. "),Object(s.b)("h1",null,"Team Boundaries"),Object(s.b)("p",null,"Like the philosophy part, many similar discussion in sw engineering philosophy. Again I think combine autonomy with traditional sw team structure is the way to go. UX/frontend/application team does full autonomy for fast iteration while other like backend/service/infra team does domain/functional boundary. Of course communication cross-team is very important. Guidance, tech blueprint, are also good ways to help tech decision."),Object(s.b)("p",null,"There're also resources for such checklist:"),Object(s.b)("h1",null,"Migration"),Object(s.b)("p",null,"Some points discussed before but in great details."),Object(s.b)("div",{id:"nowait"}),Object(s.b)("h1",null,Object(s.b)("a",Object.assign({parentName:"h1"},{href:"https://webpack.js.org/concepts/module-federation/"}),"Webpack Federation")),Object(s.b)("p",null,Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://indepth.dev/posts/1173/webpack-5-module-federation-a-game-changer-in-javascript-architecture"}),"This")," shows how to practically start a micro frontend project e.g. as in this repo: ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/mizx/mfe-webpack-demo"}),"https://github.com/mizx/mfe-webpack-demo"),"."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-2020-07-31-micro-frontend-mdx-4b26c6f22f1643c4195d.js.map