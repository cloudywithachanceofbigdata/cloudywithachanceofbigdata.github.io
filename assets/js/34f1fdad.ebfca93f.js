"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[3886],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60284:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={slug:"split-a-large-swagger-openapi-specification-into-smaller-documents",title:"Split a large Open API or Swagger Specification into smaller documents",authors:["jeffreyaven"],draft:!1,image:"/img/blog/split-up-large-openapi-docs.png",tags:["openapi","swagger","api","stackql"],keywords:["openapi","swagger","api","stackql"],description:"Simple utility to split a large Open API or Swagger specification into smaller documents."},s=void 0,p={permalink:"/split-a-large-swagger-openapi-specification-into-smaller-documents",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2022-05-02-split-a-large-swagger-openapi-specification-into-smaller-documents/index.md",source:"@site/blog/2022-05-02-split-a-large-swagger-openapi-specification-into-smaller-documents/index.md",title:"Split a large Open API or Swagger Specification into smaller documents",description:"Simple utility to split a large Open API or Swagger specification into smaller documents.",date:"2022-05-02T00:00:00.000Z",formattedDate:"May 2, 2022",tags:[{label:"openapi",permalink:"/tags/openapi"},{label:"swagger",permalink:"/tags/swagger"},{label:"api",permalink:"/tags/api"},{label:"stackql",permalink:"/tags/stackql"}],readingTime:1.32,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"split-a-large-swagger-openapi-specification-into-smaller-documents",title:"Split a large Open API or Swagger Specification into smaller documents",authors:["jeffreyaven"],draft:!1,image:"/img/blog/split-up-large-openapi-docs.png",tags:["openapi","swagger","api","stackql"],keywords:["openapi","swagger","api","stackql"],description:"Simple utility to split a large Open API or Swagger specification into smaller documents."},nextItem:{title:"Stream Processing with Spark Structured Streaming, Kafka and Snowflake using Python",permalink:"/stream-processing-with-spark-structured-streaming-kafka-and-snowflake-using-python"}},c={authorsImageUrls:[void 0]},u=[],m={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Open API specifications can get quite large, especially for providers with upwards of 500 routes or operations.  "),(0,i.kt)("p",null,"The challenge is to create standalone documents scoped by a service or path within the parent API specification and include only the components (schemas, responses, etc.) that pertain to operations included in the child document.  "),(0,i.kt)("p",null,"When I went looking for library or utility to do this, I couldn\u2019t find one... so I have developed one myself.  "),(0,i.kt)("p",null,"It's a simple command (nodejs based but can be run in a bash terminal or from the Windows command line) which requires a few options, including:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"provider name"))," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"github"),")"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"provider version"))," which is a version you set - allowing you to make minor modifications to the output documents (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"v0.1.0"),")"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"service discriminator"))," which is a JSONPath expression to identify a service name within each route in the parent file, this is used to assign operations to services in separate documents (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"'$[\"x-github\"].category'"),")"),(0,i.kt)("li",{parentName:"ul"},"an ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"output directory"))," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"./dev"),")")),(0,i.kt)("p",null,"and of course, the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"openapi spec document"))," you are splitting up."),(0,i.kt)("p",null,"an example is shown here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"openapi-doc-util split \\\n-n github \\\n-v v0.1.0 \\\n-s '$[\"x-github\"].category' \\\n-o ./dev \\\nref/github/api.github.com.yaml\n")),(0,i.kt)("p",null,"Help for the command is available using ",(0,i.kt)("inlineCode",{parentName:"p"},"openapi-doc-util split"),".  "),(0,i.kt)("p",null,"The net result is 59 self-contained, service scoped documents, containing only the components referenced by routes in the service document."),(0,i.kt)("p",null,"You can access this utility via ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@stackql/openapi-doc-util"},(0,i.kt)("strong",{parentName:"a"},"NPMJS"))," or via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stackql/openapi-doc-util"},(0,i.kt)("strong",{parentName:"a"},"GitHub")),".  "),(0,i.kt)("p",null,"Splitting up a large open API spec document, is the first stage in developing a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stackql/stackql"},(0,i.kt)("strong",{parentName:"a"},"StackQL"))," provider which we will discuss next time!"))}g.isMDXComponent=!0}}]);