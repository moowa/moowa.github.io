"use strict";(self.webpackChunkknowtes=self.webpackChunkknowtes||[]).push([[894],{693:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(4848),i=t(8453);const o={tags:["itop","api"],sidebar_class_name:"hidden"},r="Accessing iTop via Rest API",a={id:"knowtes/itop/rest_api",title:"Accessing iTop via Rest API",description:"- In python, do",source:"@site/docs/knowtes/itop/rest_api.md",sourceDirName:"knowtes/itop",slug:"/knowtes/itop/rest_api",permalink:"/docs/knowtes/itop/rest_api",draft:!1,unlisted:!1,tags:[{inline:!0,label:"itop",permalink:"/docs/tags/itop"},{inline:!0,label:"api",permalink:"/docs/tags/api"}],version:"current",frontMatter:{tags:["itop","api"],sidebar_class_name:"hidden"},sidebar:"tutorialSidebar",previous:{title:"ITOP Installation and Upgrade Notes",permalink:"/docs/knowtes/itop/installation"},next:{title:"Latex",permalink:"/docs/knowtes/latex"}},c={},d=[];function l(e){const n={code:"code",h1:"h1",header:"header",li:"li",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"accessing-itop-via-rest-api",children:"Accessing iTop via Rest API"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In python, do"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"import requests\nd = {'auth_user': <username>,\n'auth_pwd': <password>,\n'version': '1.3',\n'json_data': '{\"operation\": \"list_operations\"}'\n}\nr = requests.post('<url>/webservices/rest.php', data = d)\nr.json()\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Note: json_data is a stringified dictionary ('","') or use ",(0,s.jsx)(n.code,{children:"json.dumps(<dictionary>)"})]}),"\n",(0,s.jsx)(n.li,{children:"Other examples of json_data:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n   "operation": "core/get",\n   "class": "Person",\n   "key": "SELECT Person WHERE email LIKE \'%.com\'",\n   "output_fields": "friendlyname, email"\n}\n\n{\n   "operation": "core/get",\n   "class": "Person",\n   "key": 1,\n   "output_fields": "*"\n}\n\n{\n    "operation": "core/get", \n    "class": "Incident", \n    "key": \n    {\n        "friendlyname": "I-029616"\n        }, \n    "output_fields": "*"\n}\n\n{\n    "operation": "core/get", \n    "class": "Incident", \n    "key":"SELECT Incident WHERE id > 29605", \n    "output_fields": "start_date, title, description"\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);