"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6103],{9360:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),l=a(1217),i=a(8665),o=a(8561),r=a(3117),s=a(5999),c=a(1750);var m=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(c.Z,(0,r.Z)({},a,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(c.Z,(0,r.Z)({},t,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))},u=a(4726),v=a(1575);var d=function(e){var t,a=e.content,r=e.sidebar,s=a.assets,c=a.metadata,d=c.title,g=c.description,p=c.nextItem,b=c.prevItem,f=c.date,_=c.tags,N=c.authors,h=c.frontMatter,E=h.hide_table_of_contents,k=h.keywords,C=h.toc_min_heading_level,Z=h.toc_max_heading_level,L=null!=(t=s.image)?t:h.image;return n.createElement(i.Z,{wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogPostPage,sidebar:r,toc:!E&&a.toc&&a.toc.length>0?n.createElement(v.Z,{toc:a.toc,minHeadingLevel:C,maxHeadingLevel:Z}):void 0},n.createElement(l.Z,{title:d,description:g,keywords:k,image:L},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:f}),N.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:N.map((function(e){return e.url})).filter(Boolean).join(",")}),_.length>0&&n.createElement("meta",{property:"article:tag",content:_.map((function(e){return e.label})).join(",")})),n.createElement(o.Z,{frontMatter:h,assets:s,metadata:c,isBlogPostPage:!0},n.createElement(a,null)),(p||b)&&n.createElement(m,{nextItem:p,prevItem:b}))}},1750:function(e,t,a){var n=a(7294),l=a(9960);t.Z=function(e){var t=e.permalink,a=e.title,i=e.subLabel;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},5002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(3117),l=a(102),i=a(7294),o=a(4726),r=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?i.createElement("ul",{className:l?void 0:a},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,v=e.linkActiveClassName,d=void 0===v?void 0:v,g=e.minHeadingLevel,p=e.maxHeadingLevel,b=(0,l.Z)(e,r),f=(0,o.LU)(),_=null!=g?g:f.tableOfContents.minHeadingLevel,N=null!=p?p:f.tableOfContents.maxHeadingLevel,h=(0,o.DA)({toc:t,minHeadingLevel:_,maxHeadingLevel:N}),E=(0,i.useMemo)((function(){if(u&&d)return{linkClassName:u,linkActiveClassName:d,minHeadingLevel:_,maxHeadingLevel:N}}),[u,d,_,N]);return(0,o.Si)(E),i.createElement(s,(0,n.Z)({toc:h,className:c,linkClassName:u},b))}},1575:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(3117),l=a(102),i=a(7294),o=a(6010),r=a(5002),s="tableOfContents_cNA8",c=["className"];var m=function(e){var t=e.className,a=(0,l.Z)(e,c);return i.createElement("div",{className:(0,o.Z)(s,"thin-scrollbar",t)},i.createElement(r.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);