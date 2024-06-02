"use strict";(self.webpackChunkknowtes=self.webpackChunkknowtes||[]).push([[1738],{4607:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>t});var r=i(4848),o=i(8453);const s={tags:["virtualization","docker"],sidebar_class_name:"hidden"},c="Docker",l={id:"knowtes/docker",title:"Docker",description:"Installation",source:"@site/docs/knowtes/docker.md",sourceDirName:"knowtes",slug:"/knowtes/docker",permalink:"/docs/knowtes/docker",draft:!1,unlisted:!1,tags:[{inline:!0,label:"virtualization",permalink:"/docs/tags/virtualization"},{inline:!0,label:"docker",permalink:"/docs/tags/docker"}],version:"current",frontMatter:{tags:["virtualization","docker"],sidebar_class_name:"hidden"},sidebar:"tutorialSidebar",previous:{title:"Conda",permalink:"/docs/knowtes/conda"},next:{title:"FastAPI",permalink:"/docs/knowtes/fastapi"}},d={},t=[{value:"Installation",id:"installation",level:2},{value:"Docker Commands",id:"docker-commands",level:2},{value:"accessing another docker container",id:"accessing-another-docker-container",level:2},{value:"reclaiming disk space",id:"reclaiming-disk-space",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"docker",children:"Docker"}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Followed instructions from ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/docker-for-windows/install/",children:"Docker for Windows Installation"}),"\u2197\ufe0f"]}),"\n",(0,r.jsx)(n.li,{children:"Created Docker Hub account and downloaded from there"}),"\n",(0,r.jsx)(n.li,{children:"Ran Docker Desktop Installer.exe"}),"\n",(0,r.jsx)(n.li,{children:"Needed to restart PC and enable Hyper-V"}),"\n",(0,r.jsxs)(n.li,{children:["To test if installation is good, run PowerShell and do ",(0,r.jsx)(n.code,{children:"docker --version"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"docker-commands",children:"Docker Commands"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To pull an existing image from Docker hub and run container: ",(0,r.jsx)(n.code,{children:"docker run hello-world"})]}),"\n",(0,r.jsxs)(n.li,{children:["To list all images: ",(0,r.jsx)(n.code,{children:"docker image ls"})]}),"\n",(0,r.jsxs)(n.li,{children:["To list running containers: ",(0,r.jsx)(n.code,{children:"docker container ls"})]}),"\n",(0,r.jsxs)(n.li,{children:["To list all containers ever: ",(0,r.jsx)(n.code,{children:"docker container ls --all"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"docker run --interactive --tty ubuntu bash"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"docker run --detach --publish 80:80 --name webserver nginx"})}),"\n",(0,r.jsxs)(n.li,{children:["To stop running container: ",(0,r.jsx)(n.code,{children:"docker container stop <containername>"})]}),"\n",(0,r.jsxs)(n.li,{children:["To remove container: ",(0,r.jsx)(n.code,{children:"docker container rm <containername>"})]}),"\n",(0,r.jsxs)(n.li,{children:["To remove image by force: ",(0,r.jsx)(n.code,{children:"docker image rmi --force <imagename>"})]}),"\n",(0,r.jsxs)(n.li,{children:["To build image: ",(0,r.jsx)(n.code,{children:"docker image build -t <username>/<imagename> ."})]}),"\n",(0,r.jsxs)(n.li,{children:["To build container: ",(0,r.jsx)(n.code,{children:"docker container run <username>/<imagename>"})]}),"\n",(0,r.jsxs)(n.li,{children:["To push Docker image to Docker Hub:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker login\ndocker push <username>/<imagename>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["To use volume: ",(0,r.jsx)(n.code,{children:"docker run -d -p <port_mapping> --name=<container_name> -v <directory_in_host>:<directory_in_container> <image>"})]}),"\n",(0,r.jsxs)(n.li,{children:["To run and build docker-compose file: ",(0,r.jsx)(n.code,{children:"docker-compose up --build"})]}),"\n",(0,r.jsxs)(n.li,{children:["To destroy: ",(0,r.jsx)(n.code,{children:"docker-compose down"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"accessing-another-docker-container",children:"accessing another docker container"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/63152977/flask-docker-equests-exceptions-connectionerror-httpconnectionpoolhost-loca",children:"host.docker.internal"}),"\u2197\ufe0f\n-",(0,r.jsx)(n.a,{href:"https://github.com/pfernandom/rabbitmq-golang-client",children:"example"}),"\u2197\ufe0f"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"reclaiming-disk-space",children:"reclaiming disk space"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.hanselman.com/blog/shrink-your-wsl2-virtual-disks-and-docker-images-and-reclaim-disk-space",children:"shrink WSL2 virtual disks and docker images"}),"\u2197\ufe0f"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>l});var r=i(6540);const o={},s=r.createContext(o);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);