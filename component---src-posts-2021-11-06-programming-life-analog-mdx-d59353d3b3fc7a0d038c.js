(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"8hLB":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),c=(n("Wbzz"),n("Bl7J"));t.a=function(e){return o.a.createElement(c.a,Object.assign({},e,{icon:"post"}))}},RvD2:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return r}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),c=n("8hLB"),i={},l={_frontmatter:i},s=c.a;function r(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(s,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Just a bit of funny thinking for basic programming design concept..."),Object(o.b)("h1",null,"Communication: Callback vs Message"),Object(o.b)("p",null,"Callback is mostly like using a pager: brutally you got paged everytime when client is trying to find you. It's efficient because it's simply a function call. Sometime, you are not ready! For example, early in the morning, you are basically naked and not initialized and callback comes... you throw Exception at them!"),Object(o.b)("p",null,"Therefore, you should just treat any callback as stateless handler. Machine with no soul... Do any job at any time by taking the resources ready and return the results."),Object(o.b)("p",null,"Some game engine is using callback to human (components) just because they are simply efficient and pager are ususally organized into batch by batch. For example, they set an order of expected call (life cycle) and ask every components to follow the rule. "),Object(o.b)("p",null,"A better way might be, if efficiency is not concerns, using message box to allow some autonomy of components, whom we call them actor. We assume each actor is nice human being and proactively doing their job. They can do at their own pace. The bad part is sometime you don't have control over their behavior. They can ignore your order/call. "),Object(o.b)("p",null,"Because of the quite decoupled design, actor design can handle complicate concurrency. With better communication tool (message system) and nice remote working device setup, you can actually achieve quite some efficiency by allowing them permanently remote. Actor framework is like this."),Object(o.b)("h1",null,"Resource Lock: mutex vs"),Object(o.b)("p",null,"Think of it as a portable restrooms:"),Object(o.b)("p",null,"Enter & lock it, use it, and flush it. Unlock and leave. So "),Object(o.b)("h1",null,"Exception handling"),Object(o.b)("h1",null,"Stateful vs Stateless"))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-2021-11-06-programming-life-analog-mdx-d59353d3b3fc7a0d038c.js.map