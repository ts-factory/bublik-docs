"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[2389],{5986:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"publish/attachments","title":"Log Attachments","description":"- Log Attachments","source":"@site/docs/04-publish/01-attachments.md","sourceDirName":"04-publish","slug":"/publish/attachments","permalink":"/bublik/docs/publish/attachments","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Log Attachments"},"sidebar":"defaultSidebar","previous":{"title":"Publish","permalink":"/bublik/docs/publish/"},"next":{"title":"Schedule","permalink":"/bublik/docs/schedule/"}}');var s=t(5105),l=t(5136);const r={title:"Log Attachments"},a="Log Attachments",c={},o=[{value:"Directory structure",id:"directory-structure",level:2},{value:"Attachments description",id:"attachments-description",level:3},{value:"Formal description",id:"formal-description",level:4},{value:"Fields Description",id:"fields-description",level:4},{value:"Example Configuration",id:"example-configuration",level:4},{value:"Path Resolution",id:"path-resolution",level:3},{value:"Current Limitations",id:"current-limitations",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"log-attachments",children:"Log Attachments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#log-attachments",children:"Log Attachments"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#directory-structure",children:"Directory structure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#attachments-description",children:"Attachments description"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#formal-description",children:"Formal description"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#fields-description",children:"Fields Description"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#example-configuration",children:"Example Configuration"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#path-resolution",children:"Path Resolution"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#current-limitations",children:"Current Limitations"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'Artefact is an arbitrary "item" associated with the test result. This page describes the canonical way of publishing artefacts.'}),"\n",(0,s.jsx)(n.p,{children:"Bublik displays test attachments through a dropdown menu on both the log page and\nlog preview. This feature enables easy access to additional test-related files\nand resources."}),"\n",(0,s.jsx)(n.h2,{id:"directory-structure",children:"Directory structure"}),"\n",(0,s.jsx)(n.p,{children:"In the session folder one should create:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"attachments/"})," folder which will contain all attachments,"]}),"\n",(0,s.jsxs)(n.li,{children:["For each result one should create ",(0,s.jsx)(n.code,{children:"attachments/node_<id>/"})," folder which in turn\nwill contain description for attachments associated with the result."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ID"})," must be similar to the one used for ",(0,s.jsx)(n.code,{children:"node_<id>.html"})," or ",(0,s.jsx)(n.code,{children:"node_<id>.json"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To enable attachments in your logs, you need to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create an ",(0,s.jsx)(n.code,{children:"attachments.json"})," file and place it at ",(0,s.jsx)(n.code,{children:"/attachments/node_<id>/attachments.json"})," in your log structure","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Example full path: ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"<bublik_url>/logs/dpdk-ethdev-ts/2025/03/03/balin-x710-p0-cbs-speed-stack-03:00:37/attachments/node_id2/attachments.json"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"attachments-description",children:"Attachments description"}),"\n",(0,s.jsx)(n.p,{children:'Key idea is that we have a "source" of the artifact: path or URI. And a way for\nUI to present it.'}),"\n",(0,s.jsx)(n.p,{children:"This implies that it can be:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["a file in the results artifact folder, say ",(0,s.jsx)(n.code,{children:".txt"})," that will be displayed in\nraw format (or just downloaded)"]}),"\n",(0,s.jsxs)(n.li,{children:["same ",(0,s.jsx)(n.code,{children:".txt"})," file that will be processed by UI,"]}),"\n",(0,s.jsx)(n.li,{children:"a file that will be on a completely different server,"}),"\n",(0,s.jsx)(n.li,{children:"(in the future) a meta-file that will be returned as a result of a REST API\ncall."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"formal-description",children:"Formal description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"attachments.json"})," file must conform to the following schema: ",(0,s.jsx)(n.a,{href:"https://github.com/okt-limonikas/bublik-log-viewer/blob/main/internal/command/schemas/artifact.json",children:"URL"})]}),"\n",(0,s.jsx)(n.h4,{id:"fields-description",children:"Fields Description"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"version"}),": Schema version"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"attachments"}),": Array of artifact objects with the following properties:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"}),': Type of the artifact (currently supports "text")']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"view_type"}),': How the artifact should be displayed (currently supports "inline")']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": Display name for the artifact"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"description"}),": Detailed description of the artifact"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"download_enabled"}),": Boolean flag to enable/disable download option"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"path"}),": Relative path to the artifact file (use this or ",(0,s.jsx)(n.code,{children:"uri"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"uri"}),": Absolute URL to the artifact file (use this or ",(0,s.jsx)(n.code,{children:"path"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-configuration",children:"Example Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Here's an example of a valid ",(0,s.jsx)(n.code,{children:"attachments.json"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "version": 1,\n  "attachments": [\n    {\n      "type": "text",\n      "view_type": "inline",\n      "name": "Relative attachments",\n      "description": "Relative attachments",\n      "download_enabled": false,\n      "path": "./relative.txt"\n    },\n    {\n      "type": "text",\n      "view_type": "inline",\n      "name": "Relative up folder",\n      "description": "Relative up folder",\n      "download_enabled": false,\n      "path": "../relative.txt"\n    },\n    {\n      "type": "text",\n      "view_type": "inline",\n      "name": "Absolute attachments",\n      "description": "Absolute attachments",\n      "download_enabled": true,\n      "uri": "<bublik_url>/logs/dpdk-ethdev-ts/2025/03/03/balin-x710-p0-cbs-speed-stack-03:00:37/json/node_id2/absolute.txt"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"path-resolution",children:"Path Resolution"}),"\n",(0,s.jsx)(n.p,{children:"Attachments support both relative and absolute paths:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Relative paths (using ",(0,s.jsx)(n.code,{children:"path"}),"):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"./file.txt"})," - File in the current directory"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"../file.txt"})," - File in the parent directory"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Absolute paths (using ",(0,s.jsx)(n.code,{children:"uri"}),"):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Must be a complete URL to the resource"}),"\n",(0,s.jsxs)(n.li,{children:["Example: ",(0,s.jsx)(n.code,{children:"http://your-server.com/path/to/file.txt"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"current-limitations",children:"Current Limitations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Only text-type attachments are currently supported"}),"\n",(0,s.jsx)(n.li,{children:"Attachments can only be viewed inline in the browser"}),"\n",(0,s.jsx)(n.li,{children:"Future updates will add support for more artifact types and viewing options"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5136:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(8101);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);