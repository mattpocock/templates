"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3069],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8905:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],p={title:"Without PyCharm (poetry)",sidebar_position:4},u=void 0,l={unversionedId:"setup/poetry",id:"setup/poetry",title:"Without PyCharm (poetry)",description:"Virtual environment",source:"@site/fastapi/setup/poetry.mdx",sourceDirName:"setup",slug:"/setup/poetry",permalink:"/fastapi/setup/poetry",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/fastapi/setup/poetry.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Without PyCharm (poetry)",sidebar_position:4},sidebar:"python",previous:{title:"Using PyCharm",permalink:"/fastapi/setup/pycharm"},next:{title:"Inspecting our OpenAPI docs",permalink:"/fastapi/setup/inspecting"}},s={},c=[{value:"Virtual environment",id:"virtual-environment",level:2},{value:"Creating a virtual environment",id:"creating-a-virtual-environment",level:3},{value:"Migrations",id:"migrations",level:3},{value:"Running the server",id:"running-the-server",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"virtual-environment"},"Virtual environment"),(0,o.kt)("p",null,"There are two options for creating your virtual environment, either manually through ",(0,o.kt)("inlineCode",{parentName:"p"},"poetry")," or PyCharm."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This section will cover how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"poetry"),". ",(0,o.kt)("a",{parentName:"p",href:"/fastapi/setup/pycharm"},"Head over to the previous page if you want to use ",(0,o.kt)("inlineCode",{parentName:"a"},"PyCharm")," instead."))),(0,o.kt)("h3",{id:"creating-a-virtual-environment"},"Creating a virtual environment"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Its easier to deal with poetry when the virtual environment is placed in your working directory.\nYou can ",(0,o.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/configuration/#virtualenvsin-project"},"configure poetry")," to do this by issuing this command:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"poetry config virtualenvs.in-project true\n"))),(0,o.kt)("p",null,"First create a virtual environment and install dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"poetry update\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," command both updates the ",(0,o.kt)("inlineCode",{parentName:"p"},"poetry.lock")," file and creates the virtual environment."),(0,o.kt)("p",null,"Activate your new virtual environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"poetry shell\n")),(0,o.kt)("h3",{id:"migrations"},"Migrations"),(0,o.kt)("p",null,"You can skip this section if you didn't select ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlmodel")," and have a database."),(0,o.kt)("p",null,"In order to configure the database tables to reflect your models, you must run migrations.\nIn this project, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"alembic")," to manage our migrations. Running migrations is done through the terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"alembic upgrade head\n")),(0,o.kt)("h3",{id:"running-the-server"},"Running the server"),(0,o.kt)("p",null,"With your virtual environment activated and docker-compose running, we can run our server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"poetry run uvicorn app.main:app --host localhost --port 8000 --reload\n")))}d.isMDXComponent=!0}}]);