"use strict";(self.webpackChunkbublik_release=self.webpackChunkbublik_release||[]).push([[7643],{4890:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});a(8101);var s=a(3526),r=a(7619),n=a(4774),l=a(930),i=a(1255),o=a(5792),c=a(4156),d=a(4093),m=a(7921),g=a(5789),u=a(5105);function h(e){const t=(0,g.kJ)(e);return(0,u.jsx)(m.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function x(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.A)(),{blogDescription:s,blogTitle:l,permalink:i}=t,o="/"===i?a:l;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n.be,{title:o,description:s}),(0,u.jsx)(c.A,{tag:"blog_posts_list"})]})}function p(e){const{metadata:t,items:a,sidebar:s}=e;return(0,u.jsxs)(i.A,{sidebar:s,children:[(0,u.jsx)(d.A,{items:a}),(0,u.jsx)(o.A,{metadata:t})]})}function j(e){return(0,u.jsxs)(n.e3,{className:(0,s.A)(l.G.wrapper.blogPages,l.G.page.blogListPage),children:[(0,u.jsx)(x,{...e}),(0,u.jsx)(h,{...e}),(0,u.jsx)(p,{...e})]})}},5792:(e,t,a)=>{a.d(t,{A:()=>l});a(8101);var s=a(7233),r=a(8513),n=a(5105);function l(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,n.jsx)(r.A,{permalink:a,title:(0,n.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,n.jsx)(r.A,{permalink:l,title:(0,n.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},8167:(e,t,a)=>{a.d(t,{A:()=>C});a(8101);var s=a(3526),r=a(5789),n=a(5105);function l(e){let{children:t,className:a}=e;return(0,n.jsx)("article",{className:a,children:t})}var i=a(3659);const o={title:"title_zFLx"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=(0,r.e7)(),{permalink:c,title:d}=a,m=l?"h1":"h2";return(0,n.jsx)(m,{className:(0,s.A)(o.title,t),children:l?d:(0,n.jsx)(i.A,{to:c,children:d})})}var d=a(7233),m=a(6780),g=a(5811);const u={container:"container_WMYK"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,m.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,n.jsx)(n.Fragment,{children:a(t)})}function x(e){let{date:t,formattedDate:a}=e;return(0,n.jsx)("time",{dateTime:t,children:a})}function p(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,r.e7)(),{date:l,readingTime:i}=a,o=(0,g.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,n.jsxs)("div",{className:(0,s.A)(u.container,"margin-vert--md",t),children:[(0,n.jsx)(x,{date:l,formattedDate:(c=l,o.format(new Date(c)))}),void 0!==i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{}),(0,n.jsx)(h,{readingTime:i})]})]});var c}var b=a(9859);const A={authorCol:"authorCol_KX8w",imageOnlyAuthorRow:"imageOnlyAuthorRow_ZtBu",imageOnlyAuthorCol:"imageOnlyAuthorCol_b9gq"};function f(e){let{className:t}=e;const{metadata:{authors:a},assets:l}=(0,r.e7)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,n.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",i?A.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,n.jsx)("div",{className:(0,s.A)(!i&&(o?"col col--12":"col col--6"),i?A.imageOnlyAuthorCol:A.authorCol),children:(0,n.jsx)(b.A,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(c,{}),(0,n.jsx)(j,{}),(0,n.jsx)(f,{})]})}var N=a(9296),T=a(7974);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:l}=(0,r.e7)();return(0,n.jsx)("div",{id:l?N.LU:void 0,className:(0,s.A)("markdown",a),children:(0,n.jsx)(T.A,{children:t})})}var k=a(930),y=a(166),P=a(3495);function U(){return(0,n.jsx)("b",{children:(0,n.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function R(e){const{blogPostTitle:t,...a}=e;return(0,n.jsx)(i.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,n.jsx)(U,{})})}function _(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:a,title:l,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,g=a.length>0;if(!(g||m||i))return null;if(t){const e=!!(i||d||c);return(0,n.jsxs)("footer",{className:"docusaurus-mt-lg",children:[g&&(0,n.jsx)("div",{className:(0,s.A)("row","margin-top--sm",k.G.blog.blogFooterEditMetaRow),children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(P.A,{tags:a})})}),e&&(0,n.jsx)(y.A,{className:(0,s.A)("margin-top--sm",k.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,n.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[g&&(0,n.jsx)("div",{className:(0,s.A)("col",{"col--9":m}),children:(0,n.jsx)(P.A,{tags:a})}),m&&(0,n.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":g}),children:(0,n.jsx)(R,{blogPostTitle:l,to:e.permalink})})]})}function C(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsxs)(l,{className:(0,s.A)(i,a),children:[(0,n.jsx)(v,{}),(0,n.jsx)(w,{children:t}),(0,n.jsx)(_,{})]})}},4093:(e,t,a)=>{a.d(t,{A:()=>l});a(8101);var s=a(5789),r=a(8167),n=a(5105);function l(e){let{items:t,component:a=r.A}=e;return(0,n.jsx)(n.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,n.jsx)(s.in,{content:t,children:(0,n.jsx)(a,{children:(0,n.jsx)(t,{})})},t.metadata.permalink)}))})}}}]);