(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{KNYz:function(e,t,n){"use strict";n.r(t),n.d(t,"projectQuery",(function(){return p}));var r=n("q1tI"),a=n.n(r),l=n("7vrA"),i=n("3Z9Z"),o=n("JI6e"),c=n("Wbzz"),m=n("tBDR"),s=n("IP2g"),u=n("wHSu"),d=n("8tEE"),f=function(e){return a.a.createElement(c.StaticQuery,{query:"436119164",render:function(t){var n,r="";if(e.filename){var l=t.files.edges.find((function(t){return t.node.base.includes(e.filename)}));l&&(r=l.node.publicURL)}else r=e.url;return a.a.createElement("a",{href:r,title:e.desc},a.a.createElement(s.a,Object.assign({},e,{icon:(n=e.icon,"zip"==n?u.c:"pdf"==n?u.e:"code"==n?u.d:"link"==n?u.j:"github"==n||"github"==n?d.c:u.b)})))}})},g=n("Bl7J"),p="3927247233";t.default=function(e){var t=e.data.allMdx.edges,n=["cloud-sky","green-sky","yellow-sky","pink-sky"],r=0;return a.a.createElement(g.a,{icon:"project"},"Here's the place I put all my personal projects, research or non-research, big or small, from recent to ancient time...",a.a.createElement(l.a,{fluid:!0},t.filter((function(e){return!!e.node.frontmatter.date&&"project"===e.node.frontmatter.category&&e.node.frontmatter.resources})).map((function(e){var t=e.node.frontmatter.resources,l=e.node.frontmatter,c=l.title.toString(),s=l&&l.titleImage?l.titleImage.relativePath:null;t.forEach((function(e){!function(e){for(var t in e)null!==e[t]&&void 0!==e[t]||delete e[t]}(e)}));var u=l.fullHeight?null:"9rem";return a.a.createElement(i.a,{className:n[r++%4],style:{padding:"1rem",marginTop:"1rem",marginBottom:"1rem"}},a.a.createElement(o.a,{md:"4",style:{}},a.a.createElement("div",{style:{width:"100%",height:u,marginLeft:"auto",marginRight:"auto",marginTop:"0",overflow:"hidden"}},a.a.createElement(m.a,{filename:s}))),a.a.createElement(o.a,null,a.a.createElement(o.a,{style:{border:"none",borderRadius:"0"}},a.a.createElement("div",{style:{fontSize:"x-large",overflow:"hidden",marginBottom:"0"}},c),a.a.createElement("div",{style:{fontWeight:200,fontSize:"medium",overflow:"hidden"}},e.node.excerpt.split("\n")[0]),a.a.createElement("div",{className:"links"},t.map((function(e){return a.a.createElement(a.a.Fragment,null,Object.keys(e).map((function(t){var n=e[t].res?e[t].res.split("/").pop():"#",r=e[t].res,l=e[t].desc;return"none"!=t&&"link"!=t&&"github"!=t||(n=null),a.a.createElement(f,{style:{margin:"0.5rem"},filename:n,url:r,icon:t,desc:l})})))}))),a.a.createElement("small",{style:{color:"#bbb"}},l.date))))}))))}}}]);
//# sourceMappingURL=component---src-pages-project-js-ee10aba6ea62638efe20.js.map