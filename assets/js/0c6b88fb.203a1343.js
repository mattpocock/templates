"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8309],{803:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={title:"SQLmodel and migrations",sidebar_position:2},c=void 0,l={unversionedId:"topics/migrations",id:"topics/migrations",title:"SQLmodel and migrations",description:"If you selected SQLModel you should do the official tutorial before making changes.",source:"@site/fastapi/topics/migrations.mdx",sourceDirName:"topics",slug:"/topics/migrations",permalink:"/fastapi/topics/migrations",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/fastapi/topics/migrations.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"SQLmodel and migrations",sidebar_position:2},sidebar:"python",previous:{title:"Testing",permalink:"/fastapi/topics/testing"}},p={},u=[],f={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you selected ",(0,i.kt)("inlineCode",{parentName:"p"},"SQLModel")," you should do the ",(0,i.kt)("a",{parentName:"p",href:"https://sqlmodel.tiangolo.com/"},"official tutorial")," before making changes.\nWhen you create or change a SQLModel in Python, the database needs to be updated as well.\nWe do this by generating (and potentially manually edit) migration files. This project has been shipped with\n",(0,i.kt)("a",{parentName:"p",href:"https://alembic.sqlalchemy.org/en/latest/"},(0,i.kt)("inlineCode",{parentName:"a"},"alembic"))," based on the ",(0,i.kt)("a",{parentName:"p",href:"https://testdriven.io/blog/fastapi-sqlmodel/"},"testdriven.io tutorial"),"."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);