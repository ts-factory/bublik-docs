"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[8794],{4219:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"deployment/frontend/build-docs","title":"Build Documentation","description":"- Prerequisites","source":"@site/docs/02-deployment/05-frontend/02-build-docs.md","sourceDirName":"02-deployment/05-frontend","slug":"/deployment/frontend/build-docs","permalink":"/bublik/docs/deployment/frontend/build-docs","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Build Documentation"},"sidebar":"defaultSidebar","previous":{"title":"Build UI","permalink":"/bublik/docs/deployment/frontend/build-ui"},"next":{"title":"Configuration","permalink":"/bublik/docs/configuration/"}}');var l=i(5105),r=i(5136);const t={title:"Build Documentation"},d="Build Documentation",o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Verify Installation",id:"verify-installation",level:2},{value:"Local Development",id:"local-development",level:2},{value:"Build",id:"build",level:2},{value:"Parameter Descriptions",id:"parameter-descriptions",level:3},{value:"Example Command",id:"example-command",level:2}];function a(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"build-documentation",children:"Build Documentation"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#prerequisites",children:"Prerequisites"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#verify-installation",children:"Verify Installation"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#local-development",children:"Local Development"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#build",children:"Build"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#parameter-descriptions",children:"Parameter Descriptions"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsx)(n.p,{children:"Before starting, ensure your environment is properly set up:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Install Node.js"}),(0,l.jsx)(n.br,{}),"\n","Use tools like ",(0,l.jsx)(n.a,{href:"https://github.com/Schniz/fnm",children:"fnm"})," or ",(0,l.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",children:"nvm"})," for Node.js version management."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Install pnpm"}),(0,l.jsx)(n.br,{}),"\n","Follow the instructions at ",(0,l.jsx)(n.a,{href:"https://pnpm.io/",children:"pnpm.io"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"verify-installation",children:"Verify Installation"}),"\n",(0,l.jsx)(n.p,{children:"Run the following commands to confirm the setup:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Check Node.js Version"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.code,{children:"node -v"}),(0,l.jsx)(n.br,{}),"\n","Ensure the installed Node.js version matches the one in ",(0,l.jsx)(n.code,{children:".nvmrc"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Check pnpm Version"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.code,{children:"pnpm -v"}),(0,l.jsx)(n.br,{}),"\n","Verify that pnpm is installed and accessible."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"local-development",children:"Local Development"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"pnpm install"})," - to install dependencies"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"pnpm start"})," - to start development server"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server."}),"\n",(0,l.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"pnpm install"})," - to install dependencies for building"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:'BASE_URL="/prefix/docs/" URL="http://localhost" pnpm build'})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"parameter-descriptions",children:"Parameter Descriptions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"BASE_URL"})}),(0,l.jsx)(n.br,{}),"\n","Specifies the base path for the application (e.g., ",(0,l.jsx)(n.code,{children:"/prefix/v2"}),")."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Ensure the path starts with a ",(0,l.jsx)(n.code,{children:"/"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Do not include a trailing ",(0,l.jsx)(n.code,{children:"/"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"URL"})}),(0,l.jsx)(n.br,{}),"\n","The directory where static files will be output.\nThis command generates static content into the ",(0,l.jsx)(n.code,{children:"build"})," directory and can be served using any static contents hosting service."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"example-command",children:"Example Command"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'BASE_URL="/prefix/docs/" URL="http://example.com" pnpm build\n'})}),"\n",(0,l.jsxs)(n.p,{children:["For documentation hosted at ",(0,l.jsx)(n.code,{children:"http://example.com/prefix/docs"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},5136:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>d});var s=i(8101);const l={},r=s.createContext(l);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);