(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=(n(0),n(77));const i={title:"Vision"},o={unversionedId:"vision",id:"vision",isDocsHomePage:!1,title:"Vision",description:"With Wasp, we want to make developing web apps easy and enjoyable, for novices and experts in web development alike.",source:"@site/docs/vision.md",slug:"/vision",permalink:"/docs/vision",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/vision.md",version:"current",sidebar:"docs",previous:{title:"Contributing",permalink:"/docs/contributing"}},s=[],l={rightToc:s};function p({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"With Wasp, we want to make developing web apps easy and enjoyable, for novices and experts in web development alike."),Object(r.b)("p",null,"Ideal we are striving for is that programming in Wasp feels like describing an app using a human language - like writing a specification document where you describe primarily your requirements and as little implementation details as possible.\nCreating a new production-ready web app should be easy and deploying it to production should be straightforward."),Object(r.b)("p",null,"That is why we believe Wasp needs to be a programming language (DSL) and not a library - we want to capture all parts of the web app into one integrated system that is perfectly tailored just for that purpose.",Object(r.b)("br",{parentName:"p"}),"\n",'On the other hand, we believe that trying to capture every single detail in one language would not be reasonable.\nThere are solutions out there that work very well for the specific task they aim to solve (React for web components, CSS/HTML for design/markup, JS/TS for logic, ...) and we don\'t want to replace them with Wasp.\nInstead, we see Wasp as a declarative "glue" code uniting all these specific solutions and providing a higher-level notion of the web app above them.'),Object(r.b)("p",null,"Wasp is still early in its development and therefore far from where we imagine it will be in the future.\nThis is what we imagine:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Declarative, static language")," with simple basic rules and ",Object(r.b)("strong",{parentName:"li"},"that understands a lot of web app concepts"),' - "horizontal language". Supports multiple files/modules, libraries.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Integrates seamlessly with the most popular technologies")," for building specific, more complex parts of the web app (React, CSS, JS, ...).\nThey can be used inline (mixed with Wasp code) or provided via external files."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Has hatches (escape mechanisms) that allow you to customize your web app")," in all the right places, but remain hidden until you need them."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Entity (data model) is a first-class citizen")," - defined via custom Wasp syntax and it integrates very closely with the rest of the features, serving as one of the central concepts around which everything is built."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Out of the box")," support for CRUD UI based on the Entities, to get you quickly going, but also customizable to some level."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},'"Smart" operations (queries and actions)')," that in most cases automatically figure out when to update, and if not it is easy to define custom logic to compensate for that. User worries about client-server gap as little as possible."),Object(r.b)("li",{parentName:"ul"},"Support, directly in Wasp, for ",Object(r.b)("strong",{parentName:"li"},"declaratively defining simple components and operations"),"."),Object(r.b)("li",{parentName:"ul"},"Besides Wasp as a programming language, there will also be a ",Object(r.b)("strong",{parentName:"li"},"visual builder that generates/edits Wasp code"),", allowing non-developers to participate in development. Since Wasp is declarative, we imagine such builder to naturally follow from Wasp language."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Server side rendering, caching, packaging, security"),", ... -> all those are taken care of by Wasp.\nYou tell Wasp what you want, and Wasp figures out how to do it."),Object(r.b)("li",{parentName:"ul"},"As ",Object(r.b)("strong",{parentName:"li"},"simple deployment to production/staging")," as it gets."),Object(r.b)("li",{parentName:"ul"},"While it comes with the official implementation(s), ",Object(r.b)("strong",{parentName:"li"},"Wasp language will not be coupled with the single implementation"),".\nOthers can provide implementations that compile to different web app stacks.")))}p.isMDXComponent=!0},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(m,s(s({ref:t},p),{},{components:n})):r.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);