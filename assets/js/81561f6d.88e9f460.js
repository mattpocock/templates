"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9791],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7824:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],l={title:"Installation",sidebar_position:1},p=void 0,s={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"Prerequisites",source:"@site/fastapi/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/fastapi/getting-started/installation",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/fastapi/getting-started/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1},sidebar:"python",previous:{title:"Introduction",permalink:"/fastapi/"},next:{title:"Project Overview",permalink:"/fastapi/getting-started/project-overview"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Intility <code>Cruft</code>",id:"intility-cruft",level:3},{value:"Create FastAPI App",id:"create-fastapi-app",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Some experience with Python"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://python.org/"},"Python3.9+")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://python-poetry.org/docs/#installation"},"Poetry")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," and ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker Compose")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com/download/"},"Git"))),(0,a.kt)("h3",{id:"intility-cruft"},"Intility ",(0,a.kt)("inlineCode",{parentName:"h3"},"Cruft")),(0,a.kt)("p",null,"You'll need ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cruft/cruft"},"cruft")," in order to use this template."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python -m pip install cruft\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"cruft")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"cruft is a templating language built on top of cookiecutter, which uses jinja templates."))),(0,a.kt)("h2",{id:"create-fastapi-app"},"Create FastAPI App"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"cruft")," to start your project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'python -m cruft create https://github.com/Intility/templates.git --directory="fastapi"\n')),(0,a.kt)("p",null,"A few questions you will be prompted, here with a more verbose description:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"full_name"),": Required for ",(0,a.kt)("inlineCode",{parentName:"li"},"pyproject.toml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"email"),": Required for ",(0,a.kt)("inlineCode",{parentName:"li"},"pyproject.toml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"project_name"),": The folder name, and required for ",(0,a.kt)("inlineCode",{parentName:"li"},"pyproject.toml"),". Keep it short and simple!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"description"),": Required for ",(0,a.kt)("inlineCode",{parentName:"li"},"pyproject.toml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mypy"),": ",(0,a.kt)("strong",{parentName:"li"},"Strict")," type checking. This is for advanced users but highly recommended to implement at some point in your project. This will configure ",(0,a.kt)("inlineCode",{parentName:"li"},"pre-commit"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sqlmodel"),": An ORM for ",(0,a.kt)("inlineCode",{parentName:"li"},"FastAPI"),". Select ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," if you need a database. This will create example APIs,\ninstall ",(0,a.kt)("inlineCode",{parentName:"li"},"alembic")," for migrations, add ",(0,a.kt)("inlineCode",{parentName:"li"},"postgres")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose")," file etc.")),(0,a.kt)("p",null,"You'll now have a new folder, matching your ",(0,a.kt)("inlineCode",{parentName:"p"},"project_name"),"."))}d.isMDXComponent=!0}}]);