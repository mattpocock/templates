"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4016],{4326:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],c={title:"Sentry",sidebar_position:5},p=void 0,u={unversionedId:"setup/sentry",id:"setup/sentry",title:"Sentry",description:"The project comes included with error reporting to Sentry, and a pipeline job to upload sourcemaps and create releases.",source:"@site/dotnet/setup/sentry.mdx",sourceDirName:"setup",slug:"/setup/sentry",permalink:"/dotnet/setup/sentry",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/dotnet/setup/sentry.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Sentry",sidebar_position:5},sidebar:"cra",previous:{title:"SonarQube",permalink:"/dotnet/setup/sonarqube"},next:{title:"Deploy",permalink:"/dotnet/setup/deploy"}},s={},l=[{value:"Create Project",id:"create-project",level:2}],d={toc:l};function f(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The project comes included with error reporting to Sentry, and a pipeline job to upload sourcemaps and create releases.\nTo set this up, we'll need to create a project in Sentry and retrieve the project DSN."),(0,a.kt)("h2",{id:"create-project"},"Create Project"),(0,a.kt)("p",null,"Head over to the ",(0,a.kt)("a",{parentName:"p",href:"https://sentry.intility.no/organizations/intility/projects/new/"},"Create a new Project page in Sentry"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Sentry Platform Select",src:n(2225).Z,width:"732",height:"326"}),(0,a.kt)("br",{parentName:"p"}),"\n","Under platform, select .NET."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Sentry New Project Name",src:n(4028).Z,width:"762",height:"156"}),(0,a.kt)("br",{parentName:"p"}),"\n","For the project name, use the project slug from GitLab.\nSelect a fitting team, or create a new one, and hit Create."),(0,a.kt)("p",null,"You'll be taken to a Configure .NET page.\nIn the code examples, copy the DSN value passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"Sentry.Init"),", and ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/setup/gitlab#adding-cicd-variables"},"add it to GitLab CI/CD variables")," with the key ",(0,a.kt)("inlineCode",{parentName:"p"},"SENTRY_DSN"),"."))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,y=d["".concat(p,".").concat(f)]||d[f]||l[f]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2225:function(e,t,n){t.Z=n.p+"assets/images/sentry-new-dotnet-11f258a734ea171b38d68648eae2acd1.png"},4028:function(e,t,n){t.Z=n.p+"assets/images/sentry-new-name-dotnet-9e5a6f7b53a2d7e68c394d8c011e3ebc.png"}}]);