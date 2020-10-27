(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(2),r=n(6),i=(n(0),n(74)),o={title:"Vision"},s={unversionedId:"vision",id:"vision",isDocsHomePage:!1,title:"Vision",description:"With Wasp, we want to make web app development easy and enjoyable, both for novices in web development and for experts.",source:"@site/docs/vision.md",slug:"/vision",permalink:"/docs/vision",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/vision.md",version:"current",sidebar:"docs",previous:{title:"Contributing",permalink:"/docs/contributing"}},l=[],p={rightToc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"With Wasp, we want to make web app development easy and enjoyable, both for novices in web development and for experts."),Object(i.b)("p",null,"Ideal we are striving for is that programming in Wasp feels like describing an app in a human language, like writing a specification document where you describe only the most important implementation details, and the rest is taken care of by Wasp.",Object(i.b)("br",{parentName:"p"}),"\n","Creating new production-level web app should be easy, and deploying it to production should be straight-forward."),Object(i.b)("p",null,"That is why we believe Wasp needs to be a programming language (DSL) and not a library, because we want to capture all parts of the web app in one integrated system, that is perfectly tailored for just that purpose.",Object(i.b)("br",{parentName:"p"}),"\n",'On the other hand, we believe that trying to capture every single detail in one language would not be reasonable.\nThere are solutions out there that are working very well for the specific task they are aimed to solve (React for components, CSS/HTML for design/markup, JS/TS for logic, ...) and we don\'t want to replace them with Wasp.\nInstead, we see Wasp as a declarative "glue" code uniting all these specific solutions and providing a higher overview of the web app.'),Object(i.b)("p",null,"Wasp is yet early in development and therefore far from where we imagine it will be in the future.\nThis is what we imagine, though:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Declarative, static language that has simple basic rules but understands a lot of the web app concepts - "horizontal language". Supports multiple files/modules, libraries.'),Object(i.b)("li",{parentName:"ul"},"Integrates seamlessly with most popular technologies for building specific, more complex parts of the web app (React, CSS, JS, ...).\nThey can be used inline (mixed with Wasp code) or provided via external files."),Object(i.b)("li",{parentName:"ul"},"Has hooks (escape mechanisms) that allow you to customize your web app on all the right places, but hidden until you need them."),Object(i.b)("li",{parentName:"ul"},"Entity is a first-class citizen, defined via custom Wasp syntax, and it integrates very closely with the rest of the features, serving as one of the central concepts around which everything is built."),Object(i.b)("li",{parentName:"ul"},"Out of the box support for CRUD UI based on the Entities, to get you quickly going, but also customizable to some level."),Object(i.b)("li",{parentName:"ul"},'"Smart" operations (queries and actions) that in most cases automatically figure out when to update, and if not, it is easy to define custom logic to compensate for that. User worries about client-server gap as little as possible.'),Object(i.b)("li",{parentName:"ul"},"Support, directly in Wasp, for declaratively defining simple components and operations."),Object(i.b)("li",{parentName:"ul"},"Besides Wasp as a programming language, there will also be a visual builder that generates/edits Wasp code, allowing non-developers to participate in development. Since Wasp is declarative, we imagine such builder to naturally follow from Wasp language."),Object(i.b)("li",{parentName:"ul"},"Server side rendering, caching, packaging, security, ... -> all those are taken care of by Wasp.\nYou tell Wasp what you want, and Wasp figures out how to do it."),Object(i.b)("li",{parentName:"ul"},"As simple deployment to production/staging as it gets."),Object(i.b)("li",{parentName:"ul"},"While it comes with the official implementation(s), Wasp language will not be coupled with the single implementation.\nOthers can provide implementations that compile to different web app stacks.")))}c.isMDXComponent=!0},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(m,s(s({ref:t},p),{},{components:n})):r.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);