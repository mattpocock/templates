"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7065],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),y=c(n),f=i,d=y["".concat(s,".").concat(f)]||y[f]||l[f]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},6690:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return l},default:function(){return f}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],p={title:"Project Overview",sidebar_position:2},s=void 0,c={unversionedId:"getting-started/project-overview",id:"getting-started/project-overview",title:"Project Overview",description:"Depending on which template you chose,",source:"@site/fastapi/getting-started/project-overview.mdx",sourceDirName:"getting-started",slug:"/getting-started/project-overview",permalink:"/fastapi/getting-started/project-overview",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/fastapi/getting-started/project-overview.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Project Overview",sidebar_position:2},sidebar:"python",previous:{title:"Installation",permalink:"/fastapi/getting-started/installation"},next:{title:"Included Dependencies",permalink:"/fastapi/getting-started/included-dependencies"}},u={},l=[],y={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Depending on which template you chose,\nyour project structure will look more or less like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 alembic.ini                                 # Configuration for your migrations\n\u251c\u2500\u2500 app  # This is where your FastAPI lives\n\u2502     \u251c\u2500\u2500 api  # APIs and routes\n\u2502     \u2502     \u251c\u2500\u2500 api_v1\n\u2502     \u2502     \u2502     \u251c\u2500\u2500 api.py                    # API routes\n\u2502     \u2502     \u2502     \u251c\u2500\u2500 endpoints                 # Yor API endpoints\n\u2502     \u2502     \u2502     \u2502     \u251c\u2500\u2500 __init__.py\n\u2502     \u2502     \u2502     \u2502     \u251c\u2500\u2500 cars.py             # Example database API\n\u2502     \u2502     \u2502     \u2502     \u2514\u2500\u2500 views.py            # Example API with authentication\n\u2502     \u2502     \u2502     \u2514\u2500\u2500 __init__.py\n\u2502     \u2502     \u251c\u2500\u2500 __init__.py\n\u2502     \u2502     \u251c\u2500\u2500 dependencies.py                 # Dependencies for your application\n\u2502     \u2502     \u2514\u2500\u2500 security.py                     # Security for your application, such as Azure AD auth\n\u2502     \u251c\u2500\u2500 core\n\u2502     \u2502     \u251c\u2500\u2500 __init__.py\n\u2502     \u2502     \u251c\u2500\u2500 db.py                           # Database engine is configured here\n\u2502     \u2502     \u2514\u2500\u2500 config.py                       # All your application settings\n\u2502     \u251c\u2500\u2500 __init__.py\n\u2502     \u251c\u2500\u2500 main.py                               # FastAPI is configured here. This is where everything is put together.\n\u2502     \u251c\u2500\u2500 models                                # Database models\n\u2502     \u2502     \u251c\u2500\u2500 __init__.py\n\u2502     \u2502     \u2514\u2500\u2500 cars.py\n\u2502     \u2514\u2500\u2500 schemas                               # Pydantic models\n\u2502         \u251c\u2500\u2500 __init__.py\n\u2502         \u2514\u2500\u2500 hello_world.py\n\u251c\u2500\u2500 ci\n\u2502     \u2514\u2500\u2500 docker\n\u2502         \u2514\u2500\u2500 fastapi\n\u2502             \u251c\u2500\u2500 Dockerfile\n\u2502             \u251c\u2500\u2500 entrypoint_dev.sh\n\u2502             \u251c\u2500\u2500 entrypoint.sh\n\u2502             \u2514\u2500\u2500 gunicorn.conf.py\n\u251c\u2500\u2500 docker-compose.yaml\n\u251c\u2500\u2500 migrations                                  # Autogenerated migrations are put here\n\u2502     \u251c\u2500\u2500 __init__.py\n\u2502     \u251c\u2500\u2500 alembic_functions.py\n\u2502     \u251c\u2500\u2500 env.py\n\u2502     \u251c\u2500\u2500 README\n\u2502     \u251c\u2500\u2500 script.py.mako\n\u2502     \u2514\u2500\u2500 versions\n\u2502         \u251c\u2500\u2500 __init__.py\n\u2502         \u2514\u2500\u2500 d8ba1a4996fa_init.py              # This is the first migration file\n\u251c\u2500\u2500 mypy.ini                                    # mypy configuration files\n\u251c\u2500\u2500 poetry.lock                                 # Autogenerated file for poetry\n\u251c\u2500\u2500 pyproject.toml                              # Your poetry configuration\n\u251c\u2500\u2500 pytest.ini                                  # Settings for all your tests\n\u2514\u2500\u2500 tests                                       # All tests are put here\n    \u251c\u2500\u2500 __init__.py\n    \u251c\u2500\u2500 api\n    \u2502     \u251c\u2500\u2500 __init__.py\n    \u2502     \u251c\u2500\u2500 auth_utils.py\n    \u2502     \u251c\u2500\u2500 conftest.py\n    \u2502     \u251c\u2500\u2500 test_api_with_auth.py\n    \u2502     \u2514\u2500\u2500 test_cars_api.py\n    \u251c\u2500\u2500 conftest.py\n    \u251c\u2500\u2500 models\n    \u2502     \u251c\u2500\u2500 __init__.py\n    \u2502     \u2514\u2500\u2500 test_cars.py\n    \u2514\u2500\u2500 README.md\n")))}f.isMDXComponent=!0}}]);