"use strict";(self.webpackChunkknowtes=self.webpackChunkknowtes||[]).push([[3004],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(r),f=n,k=c["".concat(p,".").concat(f)]||c[f]||u[f]||l;return r?a.createElement(k,o(o({ref:t},m),{},{components:r})):a.createElement(k,o({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1840:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={tags:["workflow management","airflow"],sidebar_class_name:"hidden"},o="Apache Airflow",i={unversionedId:"knowtes/airflow",id:"knowtes/airflow",title:"Apache Airflow",description:"- running airflow in docker\u2197\ufe0f",source:"@site/docs/knowtes/airflow.md",sourceDirName:"knowtes",slug:"/knowtes/airflow",permalink:"/docs/knowtes/airflow",draft:!1,tags:[{label:"workflow management",permalink:"/docs/tags/workflow-management"},{label:"airflow",permalink:"/docs/tags/airflow"}],version:"current",frontMatter:{tags:["workflow management","airflow"],sidebar_class_name:"hidden"},sidebar:"tutorialSidebar",previous:{title:"Testing Frameworks \ud83e\uddea",permalink:"/docs/knowtes/testing_frameworks"},next:{title:"Alembic",permalink:"/docs/knowtes/alembic"}},p={},s=[{value:"Emailer",id:"emailer",level:2},{value:"Postgres Operator",id:"postgres-operator",level:2},{value:"API",id:"api",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"apache-airflow"},"Apache Airflow"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airflow.apache.org/docs/apache-airflow/stable/start/docker.html"},"running airflow in docker"),"\u2197\ufe0f")),(0,n.kt)("h2",{id:"emailer"},"Emailer"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://towardsdatascience.com/automating-emails-in-apache-airflow-a-how-to-guide-1d2330a29d1e"},"automating emails"),"\u2197\ufe0f"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hevodata.com/learn/airflow-emailoperator/"},"sending emails"),"\u2197\ufe0f"),(0,n.kt)("li",{parentName:"ul"},"set these environment variables for ",(0,n.kt)("inlineCode",{parentName:"li"},"x-airflow-common")," service in ",(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," for emailer:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"AIRFLOW",(0,n.kt)("strong",{parentName:"li"},"EMAIL"),"EMAIL_BACKEND: 'airflow.utils.email.send_email_smtp'"),(0,n.kt)("li",{parentName:"ul"},"AIRFLOW",(0,n.kt)("strong",{parentName:"li"},"EMAIL"),'FROM_EMAIL: ""'),(0,n.kt)("li",{parentName:"ul"},"AIRFLOW",(0,n.kt)("strong",{parentName:"li"},"SMTP"),'SMTP_HOST: ""'),(0,n.kt)("li",{parentName:"ul"},"AIRFLOW",(0,n.kt)("strong",{parentName:"li"},"SMTP"),'SMTP_MAIL_FROM: ""'),(0,n.kt)("li",{parentName:"ul"},"AIRFLOW",(0,n.kt)("strong",{parentName:"li"},"SMTP"),'SMTP_USER: ""'),(0,n.kt)("li",{parentName:"ul"},"AIRFLOW",(0,n.kt)("strong",{parentName:"li"},"SMTP"),"SMTP_PASSWORD: ''"),(0,n.kt)("li",{parentName:"ul"},"AIRFLOW",(0,n.kt)("strong",{parentName:"li"},"SMTP"),"SMTP_PORT: 25"),(0,n.kt)("li",{parentName:"ul"},"AIRFLOW",(0,n.kt)("strong",{parentName:"li"},"SMTP"),"SMTP_SSL: 'false'"),(0,n.kt)("li",{parentName:"ul"},"AIRFLOW",(0,n.kt)("strong",{parentName:"li"},"SMTP"),"SMTP_STARTTLS: 'true'")))),(0,n.kt)("h2",{id:"postgres-operator"},"Postgres Operator"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://marclamberti.com/blog/postgres-operator-airflow/"},"All you need to know"),"\u2197\ufe0f"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sorokin.engineer/posts/en/apache_airflow_sqlalchemy_operator.html"},"How to use SQLAlchemy in Apache Airflow DAG"),"\u2197\ufe0f"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://betterdatascience.com/apache-airflow-postgres-database/"},"Apache airflow postgres database"),"\u2197\ufe0f")),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Example API call ",(0,n.kt)("inlineCode",{parentName:"li"},"http://pds-itop2.lan:8080/api/v1/dags/tutorial"))))}u.isMDXComponent=!0}}]);