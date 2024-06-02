"use strict";(self.webpackChunkknowtes=self.webpackChunkknowtes||[]).push([[362],{7747:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=r(4848),s=r(8453);const l={tags:["workflow management","airflow"],sidebar_class_name:"hidden"},a="Apache Airflow",o={id:"knowtes/airflow",title:"Apache Airflow",description:"- running airflow in docker\u2197\ufe0f",source:"@site/docs/knowtes/airflow.md",sourceDirName:"knowtes",slug:"/knowtes/airflow",permalink:"/docs/knowtes/airflow",draft:!1,unlisted:!1,tags:[{inline:!0,label:"workflow management",permalink:"/docs/tags/workflow-management"},{inline:!0,label:"airflow",permalink:"/docs/tags/airflow"}],version:"current",frontMatter:{tags:["workflow management","airflow"],sidebar_class_name:"hidden"},sidebar:"tutorialSidebar",previous:{title:"Testing Frameworks \ud83e\uddea",permalink:"/docs/knowtes/testing_frameworks"},next:{title:"Alembic",permalink:"/docs/knowtes/alembic"}},t={},c=[{value:"Emailer",id:"emailer",level:2},{value:"Postgres Operator",id:"postgres-operator",level:2},{value:"API",id:"api",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"apache-airflow",children:"Apache Airflow"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://airflow.apache.org/docs/apache-airflow/stable/start/docker.html",children:"running airflow in docker"}),"\u2197\ufe0f"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"emailer",children:"Emailer"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://towardsdatascience.com/automating-emails-in-apache-airflow-a-how-to-guide-1d2330a29d1e",children:"automating emails"}),"\u2197\ufe0f"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://hevodata.com/learn/airflow-emailoperator/",children:"sending emails"}),"\u2197\ufe0f"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["set these environment variables for ",(0,i.jsx)(n.code,{children:"x-airflow-common"})," service in ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," for emailer:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AIRFLOW__EMAIL__EMAIL_BACKEND: 'airflow.utils.email.send_email_smtp'"}),"\n",(0,i.jsx)(n.li,{children:'AIRFLOW__EMAIL__FROM_EMAIL: ""'}),"\n",(0,i.jsx)(n.li,{children:'AIRFLOW__SMTP__SMTP_HOST: ""'}),"\n",(0,i.jsx)(n.li,{children:'AIRFLOW__SMTP__SMTP_MAIL_FROM: ""'}),"\n",(0,i.jsx)(n.li,{children:'AIRFLOW__SMTP__SMTP_USER: ""'}),"\n",(0,i.jsx)(n.li,{children:"AIRFLOW__SMTP__SMTP_PASSWORD: ''"}),"\n",(0,i.jsx)(n.li,{children:"AIRFLOW__SMTP__SMTP_PORT: 25"}),"\n",(0,i.jsx)(n.li,{children:"AIRFLOW__SMTP__SMTP_SSL: 'false'"}),"\n",(0,i.jsx)(n.li,{children:"AIRFLOW__SMTP__SMTP_STARTTLS: 'true'"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"postgres-operator",children:"Postgres Operator"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://marclamberti.com/blog/postgres-operator-airflow/",children:"All you need to know"}),"\u2197\ufe0f"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://sorokin.engineer/posts/en/apache_airflow_sqlalchemy_operator.html",children:"How to use SQLAlchemy in Apache Airflow DAG"}),"\u2197\ufe0f"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://betterdatascience.com/apache-airflow-postgres-database/",children:"Apache airflow postgres database"}),"\u2197\ufe0f"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Example API call ",(0,i.jsx)(n.code,{children:"http://pds-itop2.lan:8080/api/v1/dags/tutorial"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var i=r(6540);const s={},l=i.createContext(s);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);