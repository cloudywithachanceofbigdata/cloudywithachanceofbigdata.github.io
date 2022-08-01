"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[89923],{63022:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return f}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(59943),l=["components"],s={slug:"enumerating-all-roles-for-a-user-in-snowflake",title:"Enumerating all roles for a user in Snowflake",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/snowflake.png",tags:["javascript","rbac","roles","snowflake","sql","stored-procedure","tail-call-recursion","tailcall"],keywords:["javascript","rbac","roles","snowflake","sql","stored-procedure","tail-call-recursion","tailcall"]},c=void 0,u={permalink:"/enumerating-all-roles-for-a-user-in-snowflake",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2021-03-23-enumerating-all-roles-for-a-user-in-snowflake/index.md",source:"@site/blog/2021-03-23-enumerating-all-roles-for-a-user-in-snowflake/index.md",title:"Enumerating all roles for a user in Snowflake",description:"Snowflake",date:"2021-03-23T00:00:00.000Z",formattedDate:"March 23, 2021",tags:[{label:"javascript",permalink:"/tags/javascript"},{label:"rbac",permalink:"/tags/rbac"},{label:"roles",permalink:"/tags/roles"},{label:"snowflake",permalink:"/tags/snowflake"},{label:"sql",permalink:"/tags/sql"},{label:"stored-procedure",permalink:"/tags/stored-procedure"},{label:"tail-call-recursion",permalink:"/tags/tail-call-recursion"},{label:"tailcall",permalink:"/tags/tailcall"}],readingTime:1.005,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"enumerating-all-roles-for-a-user-in-snowflake",title:"Enumerating all roles for a user in Snowflake",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/snowflake.png",tags:["javascript","rbac","roles","snowflake","sql","stored-procedure","tail-call-recursion","tailcall"],keywords:["javascript","rbac","roles","snowflake","sql","stored-procedure","tail-call-recursion","tailcall"]},prevItem:{title:"Okta Admin Command Line Interface",permalink:"/okta-admin-command-line-interface"},nextItem:{title:"EventArc: The state of eventing in Google Cloud",permalink:"/eventarc-the-state-of-eventing-in-google-cloud"}},p={authorsImageUrls:[void 0]},f=[],d={toc:f};function m(e){var t=e.components,s=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Snowflake",src:n(11431).Z,width:"82",height:"75"})),(0,o.kt)("p",null,"Snowflake allows roles to be assigned to other roles, so when a user is assigned to a role, they may inherit the ability to use countless other roles."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Challenge:")," recursively enumerate all roles for a given user"),(0,o.kt)("p",null,"One solution would be to create a complex query on the ",(0,o.kt)("inlineCode",{parentName:"p"},'\u201cSNOWFLAKE"."ACCOUNT_USAGE"."GRANTS_TO_ROLES"')," object."),(0,o.kt)("p",null,"An easier solution is to use a stored procedure to recurse through grants for a given user and return an ",(0,o.kt)("inlineCode",{parentName:"p"},"ARRAY")," of roles for that user."),(0,o.kt)("p",null,"This is a good programming exercise in tail call recursion (sort of) in JavaScript. Here is the code:"),(0,o.kt)(i.Z,{id:"9b9985dbf8163ade22b71f2ccf20cb51",mdxType:"Gist"}),(0,o.kt)("p",null,"To call the stored proc, execute:"),(0,o.kt)(i.Z,{id:"fbbfaa3b67af828e4d905411567cd031",mdxType:"Gist"}),(0,o.kt)("p",null,"One drawback of stored procedures in Snowflake is that they can only have scalar or array return types and cannot be used directly in a SQL query, however you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"table(result_scan(last_query_id()))")," trick to get around this, as shown below where we will pivot the ",(0,o.kt)("inlineCode",{parentName:"p"},"ARRAY")," into a record set with the array elements as rows:"),(0,o.kt)(i.Z,{id:"6a7e8bc552b87ab1e039f22bacf1b65f",mdxType:"Gist"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IMPORTANT")),(0,o.kt)("p",null,"This query ",(0,o.kt)("strong",{parentName:"p"},"must")," be the next statement run immediately after the ",(0,o.kt)("inlineCode",{parentName:"p"},"CALL")," statement and cannot be run again until you run another ",(0,o.kt)("inlineCode",{parentName:"p"},"CALL")," statement."),(0,o.kt)("p",null,"More adventures with Snowflake soon!"))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59943:function(e,t,n){var r=n(67294);n(45697);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,r=this.iframeNode,a=r.document;r.contentDocument?a=r.contentDocument:r.contentWindow&&(a=r.contentWindow.document);var o='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";a.open(),a.writeln(o),a.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,a=t.file;return r.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:a?"gist-"+n+"-"+a:"gist-"+n})},t}(r.PureComponent);t.Z=i},11431:function(e,t){t.Z="data:image/png;base64,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"}}]);