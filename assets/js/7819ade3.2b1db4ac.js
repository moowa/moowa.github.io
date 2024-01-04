"use strict";(self.webpackChunkknowtes=self.webpackChunkknowtes||[]).push([[5683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={tags:["developer tools","re","regex","regular expressions"],sidebar_class_name:"hidden"},l="regex",o={unversionedId:"knowtes/re",id:"knowtes/re",title:"regex",description:"* \\w - word character: letter, number and underscore characters",source:"@site/docs/knowtes/re.md",sourceDirName:"knowtes",slug:"/knowtes/re",permalink:"/docs/knowtes/re",draft:!1,tags:[{label:"developer tools",permalink:"/docs/tags/developer-tools"},{label:"re",permalink:"/docs/tags/re"},{label:"regex",permalink:"/docs/tags/regex"},{label:"regular expressions",permalink:"/docs/tags/regular-expressions"}],version:"current",frontMatter:{tags:["developer tools","re","regex","regular expressions"],sidebar_class_name:"hidden"},sidebar:"tutorialSidebar",previous:{title:"PyeCharts",permalink:"/docs/knowtes/pyecharts"},next:{title:"sftp",permalink:"/docs/knowtes/sftp"}},p={},s=[],c={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"regex"},"regex"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\w")," - word character: letter, number and underscore characters"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\W")," - not word character"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\d")," - digits"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\D")," - not digits"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\s")," - whitespace"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\S")," - not whitespace"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".")," - any character except line breaks"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[abc]")," - character set"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[^abc]")," - negated character set"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[a-z]")," - range"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{1,3}")," - quantifier range"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\*")," - expression matches 0 or more"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\+")," - expression matches 1 or more"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"?")," - optional"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"( )")," - groups an expression"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\\\")," - escape character"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"^")," - select at line start"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$")," - select at line end"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(?=)")," - positive lookahead Ex. ",(0,a.kt)("inlineCode",{parentName:"li"},"\\d+(?=PM)")," to get 3 in 4 Aug 3 PM"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(!?)")," - negative lookahead (select characters other than those containing...) Ex.  ",(0,a.kt)("inlineCode",{parentName:"li"},"\\d+(!?PM)")," to get 4 in ",(0,a.kt)("inlineCode",{parentName:"li"},"4 Aug 3 PM")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(?<=)")," - positive lookbehind (select characters that are preceeded by ...) Ex. ",(0,a.kt)("inlineCode",{parentName:"li"},"(?<=\\$)\\d+")," to get 5 in ",(0,a.kt)("inlineCode",{parentName:"li"},"Product Code: 1064 Price: $5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(?<!<)")," - negative lookbehind (select characters other than those preceeded by ...)")),(0,a.kt)("h1",{id:"links-to-tutorials"},"Links to tutorials"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://regexlearn.com/learn/regex101"},"RegexLearn"),"\u2197\ufe0f")))}m.isMDXComponent=!0}}]);