"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[39138],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20034:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),s=["components"],l={slug:"recurse-javascript-object-to-get-values-for-a-given-key-the-easy-way",title:"Recurse JavaScript Object to Get Values for a Given Key the Easy Way",authors:["jeffreyaven"],draft:!1,image:"/img/fullstackchronicles-cover-image.png",tags:["nodejs","javascript","openapi","swagger"],keywords:["nodejs","javascript","openapi","swagger"]},i=void 0,c={permalink:"/recurse-javascript-object-to-get-values-for-a-given-key-the-easy-way",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2022-06-06-recurse-javascript-object-to-get-values-for-a-given-key-the-easy-way/index.md",source:"@site/blog/2022-06-06-recurse-javascript-object-to-get-values-for-a-given-key-the-easy-way/index.md",title:"Recurse JavaScript Object to Get Values for a Given Key the Easy Way",description:"I had a scenario where I needed to find values for a key in a complex JavaScript object which could be nested *n* levels deep.",date:"2022-06-06T00:00:00.000Z",formattedDate:"June 6, 2022",tags:[{label:"nodejs",permalink:"/tags/nodejs"},{label:"javascript",permalink:"/tags/javascript"},{label:"openapi",permalink:"/tags/openapi"},{label:"swagger",permalink:"/tags/swagger"}],readingTime:1.46,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"recurse-javascript-object-to-get-values-for-a-given-key-the-easy-way",title:"Recurse JavaScript Object to Get Values for a Given Key the Easy Way",authors:["jeffreyaven"],draft:!1,image:"/img/fullstackchronicles-cover-image.png",tags:["nodejs","javascript","openapi","swagger"],keywords:["nodejs","javascript","openapi","swagger"]},prevItem:{title:"Converting Google Discovery Docs to OpenAPI3 Specs",permalink:"/converting-google-discovery-docs-to-openapi3-specs"},nextItem:{title:"DataOps with Container Images and Multi-Stage Builds",permalink:"/dataops-with-container-images-and-multi-stage-builds"}},p={authorsImageUrls:[void 0]},u=[{value:"the Code",id:"the-code",level:2},{value:"Example",id:"example",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I had a scenario where I needed to find values for a key in a complex JavaScript object which could be nested ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"n"))," levels deep.  "),(0,o.kt)("p",null,"I found numerous approaches to doing this, most were overly complicated, so I thought I would share the most straightforward, concise process.  "),(0,o.kt)("h2",{id:"the-code"},"the Code"),(0,o.kt)("p",null,"You can do this in a straightforward function implementing the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},'"tail call recursion"'))," pattern to search for a key (",(0,o.kt)("inlineCode",{parentName:"p"},"key"),") from the root of an object (",(0,o.kt)("inlineCode",{parentName:"p"},"obj"),"), excluding any keys in ",(0,o.kt)("inlineCode",{parentName:"p"},"excludeKeys"),".  "),(0,o.kt)("p",null,"This will return a list of values for the given key, searching all levels in all branches of the object.   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'function getAllValuesForKey(obj, key, excludeKeys=[], values=[]) {\n    for (let k in obj) {\n        if (typeof obj[k] === "object") {\n            if(!excludeKeys.includes(k)){\n                getAllValuesForKey(obj[k], key, excludeKeys, values)\n            }\n        } else {\n            if (k === key){\n                values.push(obj[k]);\n            }\n        }\n    }\n    return values;\n}\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In parsing an OpenAPI or Swagger specification, I am looking for all of the schema ",(0,o.kt)("inlineCode",{parentName:"p"},"refs")," in a successful response body, for example:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"paths:\n    '/orgs/{org}/actions/permissions/selected-actions':\n        get:\n          ...\n          responses:\n            '200': '...'\n")),(0,o.kt)("p",null,"however these refs can present in various different ways depending upon the response type, such as:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"'200':\n    $ref: '#/components/responses/actions_runner_labels'\n")),(0,o.kt)("p",null,"or  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"'200':      \n    content:\n        application/json:\n          schema:\n            $ref: '#/components/schemas/runner'\n")),(0,o.kt)("p",null,"or  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"'200':\n  content:\n    application/json:\n      schema:\n        anyOf:\n          - $ref: '#/components/schemas/interaction-limit-response'\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"'200':\n  content:\n    application/json:\n      schema:\n        type: object\n        required:\n          - total_count\n          - runners\n        properties:\n          total_count:\n            type: integer\n          runners:\n            type: array\n            items:\n              $ref: '#/components/schemas/runner'\n")),(0,o.kt)("p",null,"To find all of the schema refs without knowing the response type or structure I used the above function as follows (excluding refs for ",(0,o.kt)("inlineCode",{parentName:"p"},"examples"),"):  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function getRespSchemaName(op){\n    for(let respCode in op.responses){\n        if(respCode.startsWith('2')){\n            return getAllValuesForKey(op.responses[respCode], \"$ref\", ['examples']);\n        }\n    }\n}\n")),(0,o.kt)("p",null,"You can find this implementation in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stackql/openapi-doc-util"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"openapi-doc-util")))," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@stackql/openapi-doc-util"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"@stackql/openapi-doc-util"))),".  "),(0,o.kt)("p",null,"simple!"))}f.isMDXComponent=!0}}]);