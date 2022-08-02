"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5040],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),f=o,d=g["".concat(p,".").concat(f)]||g[f]||l[f]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},290:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={title:"Swagger",sidebar_label:"Swagger",slug:"/Topics/Swagger",sidebar_position:4},p=void 0,c={unversionedId:"topics/Swagger",id:"topics/Swagger",title:"Swagger",description:"One of the most important parts of an application is its documentation.",source:"@site/express/topics/Swagger.mdx",sourceDirName:"topics",slug:"/Topics/Swagger",permalink:"/express/Topics/Swagger",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/express/topics/Swagger.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Swagger",sidebar_label:"Swagger",slug:"/Topics/Swagger",sidebar_position:4},sidebar:"express",previous:{title:"HTTP Security",permalink:"/express/Topics/HTTP-Security"},next:{title:"Logging",permalink:"/express/Topics/Logging"}},u={},l=[],g={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One of the most important parts of an application is its documentation."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/"},"Swagger")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI Specification")," has become the de facto standard for API documentation.\nAt Intility there is a requirement for API documentation using Swagger."),(0,i.kt)("p",null,"Writing an OpenAPI documentation is a tedious task, both to write the first time as well as maintaining and updating.\nSo in this template we'll be using the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/express-jsdoc-swagger"},"express-jsdoc-swagger")," for autogenerating the OpenAPI documentation as well as hosting the Swagger page on our API."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There is currently an issue with the Authorization flow built into Swagger doc. There fore we will be hosting our own redirect logic. This can be seen in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/static")," folder")),(0,i.kt)("p",null,"The Swagger doc will be hosted at ",(0,i.kt)("inlineCode",{parentName:"p"},"<BASE_URL>/api-docs"),". This can be changed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"swaggerOptions")," object in ",(0,i.kt)("inlineCode",{parentName:"p"},"config/swagger.ts"),".\nThis might break the default redirection logic provided by us."),(0,i.kt)("p",null,"For an example on how to provide documentation for endpoints and interfaces. Have a look at the example routes and interfaces provided at ",(0,i.kt)("inlineCode",{parentName:"p"},"routes/")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"interfaces/"),"."),(0,i.kt)("p",null,"For more information and configuration options, head over to the ",(0,i.kt)("a",{parentName:"p",href:"https://brikev.github.io/express-jsdoc-swagger-docs/"},"Official Documentation")))}f.isMDXComponent=!0}}]);