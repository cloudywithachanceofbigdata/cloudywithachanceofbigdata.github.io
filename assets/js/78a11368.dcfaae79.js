"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[145],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(g,s(s({ref:t},u),{},{components:r})):a.createElement(g,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29524:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),s=["components"],i={slug:"from-wordpress-to-jamstack",title:"From Wordpress to Jamstack",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/AzureStaticWebApp.png",tags:["wordpress","jamstack","web development","github pages","docusaurus"],keywords:["wordpress","jamstack","web development","github pages","docusaurus"]},l=void 0,c={permalink:"/from-wordpress-to-jamstack",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2021-09-26-from-wordpress-to-jamstack/index.md",source:"@site/blog/2021-09-26-from-wordpress-to-jamstack/index.md",title:"From Wordpress to Jamstack",description:"I started this blog a few years back to chronicle my journeys through building cloud data platforms, along the way I gathered some friends to share their experiences as well.  The easiest platform to start this blog on was Wordpress.  This worked, but wasnt really aligned with the way myself and my collegues worked,and didnt really align with the types of things we were writing about in blog articles or embracing as general principles... e.g. 'everything-as-code', 'gitops', etc.",date:"2021-09-26T00:00:00.000Z",formattedDate:"September 26, 2021",tags:[{label:"wordpress",permalink:"/tags/wordpress"},{label:"jamstack",permalink:"/tags/jamstack"},{label:"web development",permalink:"/tags/web-development"},{label:"github pages",permalink:"/tags/github-pages"},{label:"docusaurus",permalink:"/tags/docusaurus"}],readingTime:1.7,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],nextItem:{title:"Using Jsonnet to Configure Multiple Environments",permalink:"/using-jsonnet-to-configure-multiple-environments"}},u={authorsImageUrls:[void 0]},p=[],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"I started this blog a few years back to chronicle my journeys through building cloud data platforms, along the way I gathered some friends to share their experiences as well.  The easiest platform to start this blog on was Wordpress.  This worked, but wasnt really aligned with the way myself and my collegues worked,and didnt really align with the types of things we were writing about in blog articles or embracing as general principles... e.g. 'everything-as-code', 'gitops', etc.  "),(0,n.kt)("p",null,"Enter Static Site Generators and Jamstack architecture.  Not only does a Jamstack, SSG architecture for a blog site (or docs site or any other site), allow you to manage every aspect of your web property as code, but as a static site has several other benefits inlcuding increased performance, easier distribution (using CDNs), better security (no origin server required), all this as well as being SEO friendly (and optimised in many cases).  "),(0,n.kt)("p",null,"But moving the site from Wordpress to a SSG must be an onerous task.. wrong.  "),(0,n.kt)("p",null,"I moved this blog over a weekend which was quite simple in the end, here are the steps:  "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Export your Wordpress site (Tools->Export), make sure to select ",(0,n.kt)("em",{parentName:"p"},"All Content"),".  ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lonekorean/wordpress-export-to-markdown"},"wordpress-export-to-markdown")," to convert your posts to a basic Markdown format with frontmatter, does a pretty good job")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose and deploy a Static Site Generator (I chose ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),", but there are several other alternatives available such as VuePress, Jekyll, etc)  ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Drop your Markdown docs into your SSG content (blogs) directory (converted in step 2)  ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will probably need to do some fine tuning as some things may not export cleanly, but 99% of the content will be fine  ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Deploy your new blog site, I am using GitHub Pages, but you could use anything similar - Netlify, Vercel, Digital Ocean, Azure Static Web Apps, etc or implement your own custom CI routine to build your project and push it to an object storage bucket configured to serve a static web site (such as Google Cloud Storage and AWS S3)  "))),(0,n.kt)("p",null,"Thats it!"))}m.isMDXComponent=!0}}]);