"use strict";(self.webpackChunkknowtes=self.webpackChunkknowtes||[]).push([[2353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,d=u["".concat(i,".").concat(y)]||u[y]||m[y]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:6,sidebar_label:"Typescript",tags:["typescript","javascript"]},l="Typescript",p={unversionedId:"knowtes/typescript",id:"knowtes/typescript",title:"Typescript",description:"Documentation",source:"@site/docs/knowtes/typescript.md",sourceDirName:"knowtes",slug:"/knowtes/typescript",permalink:"/docs/knowtes/typescript",draft:!1,tags:[{label:"typescript",permalink:"/docs/tags/typescript"},{label:"javascript",permalink:"/docs/tags/javascript"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Typescript",tags:["typescript","javascript"]},sidebar:"tutorialSidebar",previous:{title:"Python \ud83d\udc0d",permalink:"/docs/knowtes/python"},next:{title:"Data Engineering",permalink:"/docs/knowtes/data_engineering"}},i={},s=[{value:"Documentation",id:"documentation",level:2},{value:"Examples",id:"examples",level:2},{value:"Javascript Books",id:"javascript-books",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typescript"},"Typescript"),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"},"Typescript in 5 Minutes"),"\u2197\ufe0f")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Casting in Typescript: ",(0,a.kt)("inlineCode",{parentName:"li"},"let result: RsItem = await response.json() as RsItem")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.tutorialspoint.com/typescript/typescript_array_foreach.htm"},"Typescript forEach"),"\u2197\ufe0f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n    let num = [7, 8, 9];\n    num.forEach(function (value) {\n        console.log(value);\n    }); \n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n    let num = [7, 8, 9];\n    num.forEach((value) => {\n        console.log(value);\n        // can add other statements\n    }); \n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n    let num = [7, 8, 9];\n    num.forEach((value) => console.log(value)); \n")),(0,a.kt)("p",null,"With index:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\n    let num = [7, 8, 9];\n    num.forEach((value, index) => console.log(value, index)); \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"typescript map"),"\u2197\ufe0f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const numbers = [1, 4, 9];\nconst roots = numbers.map((num) => Math.sqrt(num));\nconsole.log(`numbers: ${numbers}`); // numbers: 1,4,9\nconsole.log(`roots: ${roots}`); // roots: 1,2,3\n")),(0,a.kt)("h2",{id:"javascript-books"},"Javascript Books"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://exploringjs.com/impatient-js/toc.html"},"JavaScript for impatient programmers - ES2022 edition by\nDr. Axel Rauschmayer")),(0,a.kt)("li",{parentName:"ul"},"Modern JavaScript for the Impatient by Cay S. Horstmann - available at Oreilly")))}m.isMDXComponent=!0}}]);