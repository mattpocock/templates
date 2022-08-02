"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9025],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=u(n),d=o,f=g["".concat(c,".").concat(d)]||g[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4190:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return g}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=n(8517),l=["components"],c={title:"Configuration",sidebar_position:1},u=void 0,s={unversionedId:"topics/configuration",id:"topics/configuration",title:"Configuration",description:"Every feature exposes configuration through the standard dotnet core configuration infrastructure. This lets you, as the developer,",source:"@site/dotnet/topics/configuration.mdx",sourceDirName:"topics",slug:"/topics/configuration",permalink:"/dotnet/topics/configuration",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/dotnet/topics/configuration.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Configuration",sidebar_position:1},sidebar:"cra",previous:{title:"Deploy",permalink:"/dotnet/setup/deploy"},next:{title:"Logging",permalink:"/dotnet/topics/logging"}},p={},g=[{value:"Azure AD Authentication",id:"azure-ad-authentication",level:2},{value:"Swagger",id:"swagger",level:2},{value:"Logging",id:"logging",level:2}],d={toc:g};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Every feature exposes configuration through the standard dotnet core configuration infrastructure. This lets you, as the developer,\nto decide how to provide those configurations. Usually through the ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.Development.json")," on your local\nmachine or through environment variables or secrets in CI or production environments."),(0,i.kt)("p",null,"Read more about available configuration providers in the official dotnet documentation."),(0,i.kt)(a.Z,{title:"Configuration in ASP.NET Core",subtitle:"~62 minutes to read",url:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-5.0",width:"305px",mdxType:"MsDocsCard"}),(0,i.kt)("h2",{id:"azure-ad-authentication"},"Azure AD Authentication"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u26a0\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"TODO"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"App Registrations"),(0,i.kt)("li",{parentName:"ul"},"The relationship between SPA App, Resource App "),(0,i.kt)("li",{parentName:"ul"},"How to configure them properly")),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "AzureAd": {\n    // azure identity platform instance (should not be changed)\n    "Instance": "https://login.microsoftonline.com/",\n    // primary domain of your tenant\n    "Domain": "intility.onmicrosoft.com",\n    // tenant / directory id\n    "TenantId": "9b5ff18e-53c0-45a2-8bc2-9c0c8f60b2c6",\n    // client id of your azure appReg\n    "ClientId": "11111111-1111-1111-11111111111111111"\n  }\n}\n\n')),(0,i.kt)("h2",{id:"swagger"},"Swagger"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u26a0\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"TODO"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Swagger authentication"),(0,i.kt)("li",{parentName:"ul"},"Swagger versioning relationship with API versioning")),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Swagger": {\n    // Name of the service in Swagger definition and UI\n    "AppName": "Company.WebApplication1 Swagger",\n\n    // The client id to authenticate with. This should be an\n    // app registration with delegated permission to the API registration\n    "ClientId": "22222222-2222-2222-22222222222222222"\n  }\n}\n')),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("p",null,"Logging is provided by the external package ",(0,i.kt)("inlineCode",{parentName:"p"},"Intility.Logging.AspNetCore")," in conjunction with logger sink extensions. The goal with the external package is to enable\ncontinuous development of logging support centrally, as the infrastructure changes over time, alleviating you of this burden."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For more information about logging configurations visit the ",(0,i.kt)("a",{parentName:"p",href:"./Logging"},"Logging")," section.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Serilog": {\n    "MinimumLevel": {\n      "Default": "Information",\n      "Override": {\n        "System": "Warning",\n        "Microsoft": "Warning",\n        "Microsoft.Hosting.Lifetime": "Information"\n      }\n    },\n    "Properties": {\n      "Application": "MyService"\n    }\n  }\n}\n')))}f.isMDXComponent=!0},8517:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294);function o(e){var t=e.width,n=e.height;return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,viewBox:"0 57 200 100",preserveAspectRatio:"xMidYMin slice"},r.createElement("g",{"data-name":"MS-symbol"},r.createElement("g",{"clip-path":"url(#a)"},r.createElement("path",{d:"M106.214 106.214H71.996V71.996h34.218z",fill:"#f25022"}),r.createElement("path",{d:"M143.993 106.214h-34.218V71.996h34.218z",fill:"#7fba00"}),r.createElement("path",{d:"M106.214 143.993H71.996v-34.218h34.218z",fill:"#00a4ef"}),r.createElement("path",{d:"M143.993 143.993h-34.218v-34.218h34.218z",fill:"#ffb900"}))))}function i(e){var t=e.children,n=e.url,i=e.title,a=e.subtitle,l=e.width;return r.createElement("a",{style:{width:l||"100%",color:"var(--ifm-font-color-base)",textDecoration:"none",display:"flex",alignItems:"center",border:"solid 1px var(--ifm-color-secondary-dark)",padding:"5px",boxShadow:"0px 0px 8px rgba(0,0,0,.1)",borderRadius:"2px"},href:n},r.createElement(o,{width:"50",height:"50"}),r.createElement("span",{style:{display:"flex",flexDirection:"column",margin:"0 0 0 15px"}},r.createElement("span",{style:{lineHeight:"1.1em"}},i),r.createElement("span",{style:{fontSize:".8em"}},a)),t)}}}]);