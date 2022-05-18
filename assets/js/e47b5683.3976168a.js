"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[37157],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87603:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=n(59943),s=["components"],l={slug:"using-the-snowflake-sql-api-with-typescript",title:"Using the Snowflake SQL API with TypeScript",authors:["yunchengyang"],draft:!1,image:"/img/blog/snowflake-sql-api-featured-image.png",tags:["snowflake","sql","typescript","react","jamstack"],keywords:["snowflake","sql","typescript","react","jamstack"],description:"This article demonstrates how to use the Snowflake REST API to retrieve data for a web application using TypeScript"},p=void 0,c={permalink:"/using-the-snowflake-sql-api-with-typescript",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2022-05-19-using-the-snowflake-sql-api-with-typescript/index.md",source:"@site/blog/2022-05-19-using-the-snowflake-sql-api-with-typescript/index.md",title:"Using the Snowflake SQL API with TypeScript",description:"This article demonstrates how to use the Snowflake REST API to retrieve data for a web application using TypeScript",date:"2022-05-19T00:00:00.000Z",formattedDate:"May 19, 2022",tags:[{label:"snowflake",permalink:"/tags/snowflake"},{label:"sql",permalink:"/tags/sql"},{label:"typescript",permalink:"/tags/typescript"},{label:"react",permalink:"/tags/react"},{label:"jamstack",permalink:"/tags/jamstack"}],readingTime:2.045,truncated:!1,authors:[{name:"Yuncheng Yang",title:"Full Stack Engineer",url:"https://www.linkedin.com/in/yuncheng-fabio-yang/",imageURL:"https://en.gravatar.com/userimage/195643035/72fc562ee87d0c67847c8989d2808129.jpg?size=80",key:"yunchengyang"}],frontMatter:{slug:"using-the-snowflake-sql-api-with-typescript",title:"Using the Snowflake SQL API with TypeScript",authors:["yunchengyang"],draft:!1,image:"/img/blog/snowflake-sql-api-featured-image.png",tags:["snowflake","sql","typescript","react","jamstack"],keywords:["snowflake","sql","typescript","react","jamstack"],description:"This article demonstrates how to use the Snowflake REST API to retrieve data for a web application using TypeScript"},nextItem:{title:"Split a large Open API or Swagger Specification into smaller documents",permalink:"/split-a-large-swagger-openapi-specification-into-smaller-documents"}},u={authorsImageUrls:[void 0]},d=[{value:"Overview",id:"overview",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Authentication Methods",id:"authentication-methods",level:2},{value:"Generating the JWT",id:"generating-the-jwt",level:2},{value:"the Code",id:"the-code",level:3},{value:"Request Body",id:"request-body",level:2},{value:"Submitting the Request",id:"submitting-the-request",level:2},{value:"Response Handling",id:"response-handling",level:2},{value:"Parsing data",id:"parsing-data",level:3},{value:"Handling multiple partitions",id:"handling-multiple-partitions",level:3}],h={toc:d};function m(e){var t=e.components,l=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article demonstrates how to use the Snowflake REST API to retrieve data for a web application using TypeScript, in this case we are using keypair authentication with Snowflake.  "),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Snowflake\u2019s SQL API allows you to access snowflake objects using SQL via a REST API request, this allows for easy integration with your applications and deployment pipelines. You can use the API to execute most DDL and DML statements.  "),(0,r.kt)("p",null,"There are some limitations you need to be aware of however, for example interactions with stages (using PUT and GET aren\u2019t supported via the Snowflake API) or stored procedure operations (using CALL), you can read more on this ",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/developer-guide/sql-api/intro.html#limitations-of-the-sql-api"},"here"),".  "),(0,r.kt)("h2",{id:"endpoints"},"Endpoints"),(0,r.kt)("p",null,"There are three endpoints provided:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/v2/statements/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/v2/statement/<statementHandle>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/v2/statements/<statementHandle/cancel"))),(0,r.kt)("p",null,"We will be looking at the first two in this article.  "),(0,r.kt)("h2",{id:"authentication-methods"},"Authentication Methods"),(0,r.kt)("p",null,"There are two types of Authentication methods for the API, ",(0,r.kt)("strong",{parentName:"p"},"OAuth")," and ",(0,r.kt)("strong",{parentName:"p"},"Key Pair"),". For OAuth method, you can choose to use ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Snowflake-Authorization-Token-Type")," header, if this header is not present, Snowflake assumes that the token in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header is an OAuth token. For Key Pair method, the JWT token will be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header as ",(0,r.kt)("inlineCode",{parentName:"p"},"Bearer <your token>"),".  "),(0,r.kt)("p",null,"Let\u2019s walk through how to generate and use the JWT.  "),(0,r.kt)("h2",{id:"generating-the-jwt"},"Generating the JWT"),(0,r.kt)("p",null,"Here's whats needed:  "),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(88688).Z},(0,r.kt)("img",{alt:"Snowflake JWT",src:n(37667).Z,width:"2730",height:"1442"}))),(0,r.kt)("h3",{id:"the-code"},"the Code"),(0,r.kt)(o.Z,{id:"6fbe63cace2ad993ac06b324954b7daa",mdxType:"Gist"}),(0,r.kt)("h2",{id:"request-body"},"Request Body"),(0,r.kt)("p",null,"Now we need a request body:  "),(0,r.kt)(o.Z,{id:"ae0ebbedf51f232e7147e72f11007b68",mdxType:"Gist"}),(0,r.kt)("h2",{id:"submitting-the-request"},"Submitting the Request"),(0,r.kt)("p",null,"We will need to include the ",(0,r.kt)("strong",{parentName:"p"},"region")," and ",(0,r.kt)("strong",{parentName:"p"},"account identifier"),", for instance if your account identifier includes a region (e.g. xy12345.us-east2.aws.snowflakecomputing.com).  "),(0,r.kt)(o.Z,{id:"535123dda1536b5a48c6213470e83d6f",mdxType:"Gist"}),(0,r.kt)("h2",{id:"response-handling"},"Response Handling"),(0,r.kt)("p",null,"When making a ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query, there are three things worth noting:  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"rowType")," fields in the ",(0,r.kt)("inlineCode",{parentName:"li"},"resultSetMetaData")," represent the columns"),(0,r.kt)("li",{parentName:"ol"},"data without column names is in the format of ",(0,r.kt)("inlineCode",{parentName:"li"},"string[][]")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"partitionInfo")," is an array of object representing different partitions")),(0,r.kt)("p",null,"For more information see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/developer-guide/sql-api/handling-responses.html"},"Handling Responses from the SQL API - Snowflake Documentation"),".  "),(0,r.kt)("h3",{id:"parsing-data"},"Parsing data"),(0,r.kt)("p",null,"Here is a Typescript code snippet demonstrating parsing return data:  "),(0,r.kt)(o.Z,{id:"d397621879b063ea0761233984aafe69",mdxType:"Gist"}),(0,r.kt)("h3",{id:"handling-multiple-partitions"},"Handling multiple partitions"),(0,r.kt)("p",null,"Large result sets are paginated into ",(0,r.kt)("em",{parentName:"p"},"partitions"),", each partition is a set of rows."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that the pages (referred to as partitions) are ",(0,r.kt)("strong",{parentName:"p"},"NOT")," based on row count, instead they are based on the compressed batch size, so they will not be uniform in terms of the number of rows."))),(0,r.kt)("p",null,"To get a partition, send a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request with Url ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<accountIdentifier>.snowflakecomputing.com/api/v2/statements/?partition=<partitionId>"),".  "),(0,r.kt)(o.Z,{id:"7f2b0443a9ca5e8284b987a9e84ca301",mdxType:"Gist"}),(0,r.kt)("p",null,"Thanks!"))}m.isMDXComponent=!0},88688:function(e,t,n){t.Z=n.p+"assets/files/snowflake-jwt-d8c78351e349e02c9d6b86cbacc7fac1.png"},59943:function(e,t,n){var a=n(67294);n(45697);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var o=function(e){function t(){return i(this,t),r(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,i=a.document;a.contentDocument?i=a.contentDocument:a.contentWindow&&(i=a.contentWindow.document);var r='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";i.open(),i.writeln(r),i.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,i=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:i?"gist-"+n+"-"+i:"gist-"+n})},t}(a.PureComponent);t.Z=o},37667:function(e,t,n){t.Z=n.p+"assets/images/snowflake-jwt-d8c78351e349e02c9d6b86cbacc7fac1.png"}}]);