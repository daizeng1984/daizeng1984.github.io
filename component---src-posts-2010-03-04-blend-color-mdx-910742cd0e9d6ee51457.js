(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"8hLB":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=(a("Wbzz"),a("Bl7J"));t.a=function(e){return l.a.createElement(r.a,Object.assign({},e,{icon:"post"}))}},o1Lh:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),r=a("8hLB"),o={},s={_frontmatter:o},c=r.a;function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This function should be redesigned to be e.g. taking lambda or programmable 😆..."),Object(l.b)("h1",null,"Preword"),Object(l.b)("p",null,"To understand blend func or op in graphics API, the best place to go is this ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://www.andersriggelsen.dk/glblendfunc.php"}),"website"),"."),Object(l.b)("h1",null,"Blend Color"),Object(l.b)("p",null,"I think these things should be move into the effect file."),Object(l.b)("p",null,"RenderTargetBlend(SetRenderState)"),Object(l.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(l.b)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"resultcolor = ((Srcblend)*Scrcolor) BlendOp ((Destblend)*Destcolor)\n\nalphacolor = (SrcblendAlpha*Scralpha) AlphaOp (DestblendAlpha*Destalpha)"))),Object(l.b)("p",null,"Carefully design your render parameter, you can set a constant blend factor. When D3DRS_SEPARATEALPHABLENDENABLE is set to FALSE (which is the default condition), the render target blending factors and operations applied to alpha are the same as those defined for blending color channels. Be sure to enable D3DRS_ALPHABLEND to tell the pipeline that alpha blending is needed."),Object(l.b)("p",null,"TextureBlend(SetTextureStageState)"),Object(l.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(l.b)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"resultofStage = BlendOp(colorarg1,colorarg2,…..)\n\nresultalphaofStage = AlphaBlendOp(alphaarg1,alphaarg2,…..)"))),Object(l.b)("p",null,"Notice that if you don’t care about your vertex color when using texture in Fixed Function, dx will give you a random results."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-2010-03-04-blend-color-mdx-910742cd0e9d6ee51457.js.map