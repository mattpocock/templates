"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8425],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,y=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4991:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return l},toc:function(){return u},default:function(){return f}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],c={title:"Sentry",sidebar_position:7},p=void 0,s={unversionedId:"setup/sentry",id:"setup/sentry",title:"Sentry",description:"The project comes included with error reporting to Sentry and a pipeline job to upload sourcemaps and create releases.",source:"@site/fastapi/setup/sentry.mdx",sourceDirName:"setup",slug:"/setup/sentry",permalink:"/fastapi/setup/sentry",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/fastapi/setup/sentry.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Sentry",sidebar_position:7},sidebar:"python",previous:{title:"GitLab Repository",permalink:"/fastapi/setup/gitlab"},next:{title:"Testing",permalink:"/fastapi/topics/testing"}},l={},u=[{value:"Create Project",id:"create-project",level:2}],d={toc:u};function f(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The project comes included with error reporting to Sentry and a pipeline job to upload sourcemaps and create releases.\nTo set this up, we'll need to create a project in Sentry and retrieve the project DSN."),(0,o.kt)("h2",{id:"create-project"},"Create Project"),(0,o.kt)("p",null,"Head over to the ",(0,o.kt)("a",{parentName:"p",href:"https://sentry.intility.no/organizations/intility/projects/new/"},"Create a new Project page in Sentry"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Sentry Platform Select",src:n(4944).Z,width:"848",height:"277"}),"\nUnder platform, select ",(0,o.kt)("inlineCode",{parentName:"p"},"ASGI")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Sentry New Project Name",src:n(4028).Z,width:"762",height:"156"}),(0,o.kt)("br",{parentName:"p"}),"\n","For the project name, use the project slug from GitLab.\nSelect a fitting team, or create a new one, and hit Create."),(0,o.kt)("p",null,"You'll be taken to a Configure ASGI page.\nIn the code examples, copy the DSN value passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"sentry_sdk.init"),", and add it to your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file under ",(0,o.kt)("inlineCode",{parentName:"p"},"SENTRY_DSN"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env" {6}',title:'".env"',"{6}":!0},"# Basics\nSECRET_KEY=\nENVIRONMENT=dev\n\n# Sentry\nSENTRY_DSN=\n\n# Authentication\nTENANT_ID=9b5ff18e-53c0-45a2-8bc2-9c0c8f60b2c6\nAPP_CLIENT_ID=\nOPENAPI_CLIENT_ID=\n\n# Databases, cache etc.\nREDIS_PASSWORD=\n# Only needed if you selected SQLModel\nPOSTGRES_PASSWORD=\n\n")))}f.isMDXComponent=!0},4944:function(e,t,n){t.Z=n.p+"assets/images/sentry_asgi-ea432fd3e39e24cfb1f2d5d14a5df654.png"},4028:function(e,t,n){t.Z=n.p+"assets/images/sentry-new-name-dotnet-9e5a6f7b53a2d7e68c394d8c011e3ebc.png"}}]);