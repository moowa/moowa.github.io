"use strict";(self.webpackChunkknowtes=self.webpackChunkknowtes||[]).push([[4252],{5788:(e,a,t)=>{t.d(a,{Iu:()=>p,yg:()=>d});var n=t(1504);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),m=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=m(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(t),u=r,d=c["".concat(s,".").concat(u)]||c[u]||y[u]||l;return t?n.createElement(d,o(o({ref:a},p),{},{components:t})):n.createElement(d,o({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=t[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6428:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=t(5072),r=(t(1504),t(5788));const l={sidebar_position:9,sidebar_label:"Database Management \ud83d\uddc3\ufe0f",tags:["Database Management","python","sql"]},o="Database Management \ud83d\uddc3\ufe0f",i={unversionedId:"knowtes/database_management",id:"knowtes/database_management",title:"Database Management \ud83d\uddc3\ufe0f",description:"SQL",source:"@site/docs/knowtes/database_management.md",sourceDirName:"knowtes",slug:"/knowtes/database_management",permalink:"/docs/knowtes/database_management",draft:!1,tags:[{label:"Database Management",permalink:"/docs/tags/database-management"},{label:"python",permalink:"/docs/tags/python"},{label:"sql",permalink:"/docs/tags/sql"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"Database Management \ud83d\uddc3\ufe0f",tags:["Database Management","python","sql"]},sidebar:"tutorialSidebar",previous:{title:"Data Analytics \ud83d\udcc8",permalink:"/docs/knowtes/data_analytics"},next:{title:"Workflow Management \ud83d\udcc6",permalink:"/docs/knowtes/workflow_management"}},s={},m=[{value:"SQL",id:"sql",level:2},{value:"Python Libraries",id:"python-libraries",level:2},{value:"Database Management and Development Tool",id:"database-management-and-development-tool",level:2}],p={toc:m},c="wrapper";function y(e){let{components:a,...t}=e;return(0,r.yg)(c,(0,n.c)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"database-management-\ufe0f"},"Database Management \ud83d\uddc3\ufe0f"),(0,r.yg)("h2",{id:"sql"},"SQL"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"./sqlite"},"sqlite")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"./mysql"},"mysql")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"./sqlserver"},"SQL Server"))),(0,r.yg)("h2",{id:"python-libraries"},"Python Libraries"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"./sqlalchemy"},"sqlAlchemy")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://sqlmodel.tiangolo.com/"},"SQLModel"),"\u2197\ufe0f - Python library for interacting with SQL Databases"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"./alembic"},"Alembic")," - Python library for database migration"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.pydantic.dev/latest/"},"Pydantic"),"\u2197\ufe0f - Python library for data validation")),(0,r.yg)("h2",{id:"database-management-and-development-tool"},"Database Management and Development Tool"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure-data-studio/what-is-azure-data-studio"},"Azure Data Studio"),"\u2197\ufe0f")))}y.isMDXComponent=!0}}]);