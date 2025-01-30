"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[8473],{7724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var r=n(9447),i=n(5105),s=n(5136);const a={title:"Release v0.3.2",authors:["okt-limonikas"],tags:["release"],slug:"release-v0.3.2"},l=void 0,o={authorsImageUrls:[void 0]},c=[{value:"Changelog",id:"changelog",level:2},{value:"Frontend",id:"frontend",level:3},{value:"\ud83d\udce6 Chores",id:"-chores",level:4},{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:4},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:4},{value:"Backend",id:"backend",level:3},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix-1",level:4},{value:"\ud83d\ude80 New Feature",id:"-new-feature-1",level:4},{value:"\ud83d\udce6 Chores",id:"-chores-1",level:4}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["We are happy to announce ",(0,i.jsx)(t.strong,{children:"Bublik v0.3.2"}),"."]}),"\n",(0,i.jsx)(t.p,{children:'In the latest release, we\'ve implemented several updates and improvements. We\'ve reordered buttons and links on run page. A new feature has been added to display aggregated values min/max in the logs. Bug fixes include modifying the log display to show only entries with aggr of "single" on the chart, sorting points by x-axis value on a chart in reports, making report configs and building charts in reports more flexible, making datasets for charts and tables optional in reports, and removing the "%" sign for values that are "-" or "na" in reports.'}),"\n",(0,i.jsx)(t.h2,{id:"changelog",children:"Changelog"}),"\n",(0,i.jsx)(t.h3,{id:"frontend",children:"Frontend"}),"\n",(0,i.jsx)(t.h4,{id:"-chores",children:"\ud83d\udce6 Chores"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"build:"})," upgraded pnpm setup action to latest version (",(0,i.jsx)(t.a,{href:"https://github.com/ts-factory/bublik-ui/commit/290ad7757b9f588412c24138a45fd2d38d695ae0",children:"290ad77"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"run:"})," [details] changed order of buttons and links (",(0,i.jsx)(t.a,{href:"https://github.com/ts-factory/bublik-ui/commit/fe9b0244ccf323f1278fac908e7bbe11f0724553",children:"fe9b024"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"-new-feature",children:"\ud83d\ude80 New Feature"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"log:"})," [mi] added display for aggregated values min/max (",(0,i.jsx)(t.a,{href:"https://github.com/ts-factory/bublik-ui/commit/f476678ca34370d6a39e2b84f099e84eb22fb138",children:"f476678"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"-bug-fix",children:"\ud83d\udc1b Bug Fix"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"log:"})," [mi] display only entries with ",(0,i.jsx)(t.code,{children:"aggr"}),' of "single" on chart (',(0,i.jsx)(t.a,{href:"https://github.com/ts-factory/bublik-ui/commit/e391d2aa6a78dfed7139e6d48783641eb8b6be84",children:"e391d2a"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"reports:"})," made datasets for chart/table optional (",(0,i.jsx)(t.a,{href:"https://github.com/ts-factory/bublik-ui/commit/ff7d724b37885c0f1fe00c2026c7dccf2f302027",children:"ff7d724"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"reports:"})," removed ",(0,i.jsx)(t.code,{children:"%"}),' for values that are "-" or "na" (',(0,i.jsx)(t.a,{href:"https://github.com/ts-factory/bublik-ui/commit/88e74167b337f2518bab036c2a0882d5cb9a9318",children:"88e7416"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"backend",children:"Backend"}),"\n",(0,i.jsx)(t.h4,{id:"-bug-fix-1",children:"\ud83d\udc1b Bug Fix"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"report:"})," fix incorrect measurement results order in datasets (",(0,i.jsx)(t.a,{href:"https://github.com/ts-factory/bublik/commit/2636d9ea9d54e41ebf0518867bbb83eea4f09019",children:"2636d9e"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"reports:"})," fix generation of record IDs (",(0,i.jsx)(t.a,{href:"https://github.com/ts-factory/bublik/commit/bba7bcf351c138a3494fd7dcaac2815272cac88f",children:"bba7bcf"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"-new-feature-1",children:"\ud83d\ude80 New Feature"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"report:"})," allow extra args in 'records_order' in config (",(0,i.jsx)(t.a,{href:"https://github.com/ts-factory/bublik/commit/0301ce1a5d98198508d1f44869451368bfeb278c",children:"0301ce1"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"report:"})," change handling of non-numeric values of x-axis arg (",(0,i.jsx)(t.a,{href:"https://github.com/ts-factory/bublik/commit/af65dac3645a9ef9ba195c127cba5187ae3393e5",children:"af65dac"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"-chores-1",children:"\ud83d\udce6 Chores"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"report:"})," make measurement units more readable (",(0,i.jsx)(t.a,{href:"https://github.com/ts-factory/bublik/commit/803c9a849756455ac2eb1ba1511e8c9b45492ee9",children:"803c9a8"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"cleanup:"})," apply linter to reports related code (",(0,i.jsx)(t.a,{href:"https://github.com/ts-factory/bublik/commit/840543cb6d2e9ccb75b9bcec179b11d56a4e98aa",children:"840543c"}),")"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5136:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(8101);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}},9447:e=>{e.exports=JSON.parse('{"permalink":"/bublik/docs/blog/release-v0.3.2","editUrl":"https://github.com/ts-factory/bublik-release/edit/main/blog/2024-07-04-release-v0.3.2/index.mdx","source":"@site/blog/2024-07-04-release-v0.3.2/index.mdx","title":"Release v0.3.2","description":"We are happy to announce Bublik v0.3.2.","date":"2024-07-04T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/bublik/docs/blog/tags/release"}],"readingTime":1.24,"hasTruncateMarker":true,"authors":[{"name":"Kostromin Danil","title":"Bublik UI Maintainer","url":"https://github.com/okt-limonikas","imageURL":"https://github.com/okt-limonikas.png","key":"okt-limonikas","page":null}],"frontMatter":{"title":"Release v0.3.2","authors":["okt-limonikas"],"tags":["release"],"slug":"release-v0.3.2"},"unlisted":false,"prevItem":{"title":"Release v0.3.3","permalink":"/bublik/docs/blog/release-v0.3.3"},"nextItem":{"title":"Release v0.3.1","permalink":"/bublik/docs/blog/release-v0.3.1"}}')}}]);