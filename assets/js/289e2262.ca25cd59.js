"use strict";(self.webpackChunkknowtes=self.webpackChunkknowtes||[]).push([[632],{5788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>y});var a=t(1504);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m=a.createContext({}),s=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(m.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=l,y=u["".concat(m,".").concat(d)]||u[d]||p[d]||r;return t?a.createElement(y,i(i({ref:n},c),{},{components:t})):a.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(5072),l=(t(1504),t(5788));const r={tags:["database","sql","mysql"],sidebar_class_name:"hidden"},i="MySQL",o={unversionedId:"knowtes/mysql",id:"knowtes/mysql",title:"MySQL",description:"Syntax",source:"@site/docs/knowtes/mysql.md",sourceDirName:"knowtes",slug:"/knowtes/mysql",permalink:"/docs/knowtes/mysql",draft:!1,tags:[{label:"database",permalink:"/docs/tags/database"},{label:"sql",permalink:"/docs/tags/sql"},{label:"mysql",permalink:"/docs/tags/mysql"}],version:"current",frontMatter:{tags:["database","sql","mysql"],sidebar_class_name:"hidden"},sidebar:"tutorialSidebar",previous:{title:"Mkdocs",permalink:"/docs/knowtes/mkdocs"},next:{title:"Others \ud83d\udd16",permalink:"/docs/knowtes/others"}},m={},s=[{value:"Syntax",id:"syntax",level:2},{value:"Commands",id:"commands",level:2}],c={toc:s},u="wrapper";function p(e){let{components:n,...t}=e;return(0,l.yg)(u,(0,a.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"mysql"},"MySQL"),(0,l.yg)("h2",{id:"syntax"},"Syntax"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Select: ",(0,l.yg)("inlineCode",{parentName:"li"},"SELECT column1, column2, ... FROM table_name WHERE condition1;")),(0,l.yg)("li",{parentName:"ul"},"Select with AND condition: ",(0,l.yg)("inlineCode",{parentName:"li"},"SELECT column1 FROM table_name WHERE condition1 AND condition2;")),(0,l.yg)("li",{parentName:"ul"},"Select with OR condition: ",(0,l.yg)("inlineCode",{parentName:"li"},"SELECT column1 FROM table_name WHERE condition1 OR condition2;")),(0,l.yg)("li",{parentName:"ul"},"Select with NOT: ",(0,l.yg)("inlineCode",{parentName:"li"},"SELECT column1 FROM table_name where NOT condition1;")),(0,l.yg)("li",{parentName:"ul"},"Order by ASC/DESC: ",(0,l.yg)("inlineCode",{parentName:"li"},"SELECT column1, column2, ... FROM table_name ORDER BY column1, column2, ... ASC|DESC;")),(0,l.yg)("li",{parentName:"ul"},"Null/Not Null: ",(0,l.yg)("inlineCode",{parentName:"li"},"SELECT column_names FROM table_name WHERE column_name IS|IS NOT NULL;")),(0,l.yg)("li",{parentName:"ul"},"Update: ",(0,l.yg)("inlineCode",{parentName:"li"},"UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;")),(0,l.yg)("li",{parentName:"ul"},"Delete: ",(0,l.yg)("inlineCode",{parentName:"li"},"DELETE FROM table_name WHERE condition;")),(0,l.yg)("li",{parentName:"ul"},"Having clause for use with aggregate functions: ",(0,l.yg)("inlineCode",{parentName:"li"},"SELECT column_name(s) FROM table_name WHERE condition GROUP BY column_name(s) HAVING condition ORDER BY column_name(s);"))),(0,l.yg)("h2",{id:"commands"},"Commands"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Quit: ",(0,l.yg)("inlineCode",{parentName:"li"},"\\q")),(0,l.yg)("li",{parentName:"ul"},"Example db loading\n",(0,l.yg)("inlineCode",{parentName:"li"},"date; gunzip < filename.sql.gz | mysql -u user database_name; date")),(0,l.yg)("li",{parentName:"ul"},"Example db dumping",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"mysqldump -u user database_name --tables table_name|gzip -9 > filename.sql.gz")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"mysqldump -u user -h localhost database_name | gzip -9 > filename.sql.gz")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"mysqldump --single-transaction --column-statistics=0 -u user -h host --ssl-mode=DISABLED -p database_name | gzip > db_`date +%F`.sql.gz")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"mysqldump --single-transaction -u user -h localhost database_name | gzip > db_`date +%F`.sql.gz"))))))}p.isMDXComponent=!0}}]);