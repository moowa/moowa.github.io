"use strict";(self.webpackChunkknowtes=self.webpackChunkknowtes||[]).push([[7657],{8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var a=r(6540);const t={},o=a.createContext(t);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(o.Provider,{value:n},e.children)}},8512:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"knowtes/pyarrow","title":"PyArrow","description":"PyArrow\u2197\ufe0f is the Python API of Apache Arrow. Apache Arrow is a development platform for in-memory analytics.","source":"@site/docs/knowtes/pyarrow.md","sourceDirName":"knowtes","slug":"/knowtes/pyarrow","permalink":"/docs/knowtes/pyarrow","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"python","permalink":"/docs/tags/python"},{"inline":true,"label":"parsing","permalink":"/docs/tags/parsing"},{"inline":true,"label":"parquet","permalink":"/docs/tags/parquet"}],"version":"current","frontMatter":{"tags":["python","parsing","parquet"],"sidebar_class_name":"hidden"},"sidebar":"tutorialSidebar","previous":{"title":"Poetry","permalink":"/docs/knowtes/poetry"},"next":{"title":"PyeCharts","permalink":"/docs/knowtes/pyecharts"}}');var t=r(4848),o=r(8453);const s={tags:["python","parsing","parquet"],sidebar_class_name:"hidden"},i="PyArrow",p={},l=[{value:"Installing",id:"installing",level:3},{value:"Read parquet file and convert to pandas dataframe",id:"read-parquet-file-and-convert-to-pandas-dataframe",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"pyarrow",children:"PyArrow"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://arrow.apache.org/docs/python/index.html",children:"PyArrow"}),"\u2197\ufe0f is the Python API of Apache Arrow. Apache Arrow is a development platform for in-memory analytics."]}),"\n",(0,t.jsx)(n.h3,{id:"installing",children:"Installing"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"pip install pyarrow"})}),"\n",(0,t.jsx)(n.h3,{id:"read-parquet-file-and-convert-to-pandas-dataframe",children:"Read parquet file and convert to pandas dataframe"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import pyarrow.parquet as pq\nimport pandas as pd\n\n# read parquet file using pyarrow\npq_file = pq.read_table('filename.parquet')\n\n# convert to pandas dataframe\npq_df = pq_file.to_pandas()\n"})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);