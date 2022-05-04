"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[4891],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78493:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=n(59943),l=["components"],s={slug:"json-wrangling-with-go",title:"JSON Wrangling with Go",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/json-go.png",tags:["golang","json"],keywords:["golang","json"]},c=void 0,d={permalink:"/json-wrangling-with-go",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2020-04-22-json-wrangling-with-go/index.md",source:"@site/blog/2020-04-22-json-wrangling-with-go/index.md",title:"JSON Wrangling with Go",description:"Golang is a fantastic language but at first glance it is a bit clumsy when it comes to JSON in contrast to other languages such as Python or Javascript. Having said that once you master the concepts involved with JSON wrangling using Go it is equally as functional \u2013 with added type safety and performance.",date:"2020-04-22T00:00:00.000Z",formattedDate:"April 22, 2020",tags:[{label:"golang",permalink:"/tags/golang"},{label:"json",permalink:"/tags/json"}],readingTime:4.105,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"json-wrangling-with-go",title:"JSON Wrangling with Go",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/json-go.png",tags:["golang","json"],keywords:["golang","json"]},prevItem:{title:"Automated GCS Object Scanning Using DLP with Notifications Using Slack",permalink:"/automated-gcs-object-scanning-using-dlp-with-notifications-using-slack"},nextItem:{title:"Forseti Terraform Validator: Enforcing resource policy compliance in your CI pipeline",permalink:"/forseti-terraform-validator-enforcing-resource-policy-compliance-in-your-ci-pipeline"}},p={authorsImageUrls:[void 0]},u=[{value:"The JSON package",id:"the-json-package",level:2},{value:"Reading the data\u2026",id:"reading-the-data",level:2},{value:"The interface\u2026",id:"the-interface",level:2},{value:"Validating\u2026",id:"validating",level:2},{value:"Unmarshalling\u2026",id:"unmarshalling",level:2},{value:"Checking the type of the object using reflection\u2026",id:"checking-the-type-of-the-object-using-reflection",level:2},{value:"The type switch\u2026",id:"the-type-switch",level:2},{value:"Finding the nested collection and recursing it\u2026",id:"finding-the-nested-collection-and-recursing-it",level:2},{value:"The output\u2026",id:"the-output",level:2},{value:"In summary\u2026",id:"in-summary",level:2}],h={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Golang is a fantastic language but at first glance it is a bit clumsy when it comes to JSON in contrast to other languages such as Python or Javascript. Having said that once you master the concepts involved with JSON wrangling using Go it is equally as functional \u2013 with added type safety and performance."),(0,o.kt)("p",null,"In this article we will build a program in Golang to parse a JSON file containing a collection held in a named key \u2013 without knowing the structure of this object, we will expose the schema for the object including data types and recurse the object for its values."),(0,o.kt)("p",null,"This example uses a great Go package called ",(0,o.kt)("inlineCode",{parentName:"p"},"tablewriter")," to render the output of these operations using a table style result set."),(0,o.kt)("p",null,"The program has ",(0,o.kt)("inlineCode",{parentName:"p"},"describe")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," verbs as operation types; describe shows the column names in the collection and their respective data types, select prints the keys and values as a tabular result set with column headers for the keys and rows containing their corresponding values."),(0,o.kt)("p",null,"Starting with this:"),(0,o.kt)(r.Z,{id:"cceeb5b667ccfe8a9e20437d3f1dde42",mdxType:"Gist"}),(0,o.kt)("p",null,"We will end up with this when performing a ",(0,o.kt)("inlineCode",{parentName:"p"},"describe")," operation:"),(0,o.kt)(r.Z,{id:"fbd04c220a70d439df3a14d4a4f48a3e",mdxType:"Gist"}),(0,o.kt)("p",null,"And this when performing a ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," operation:"),(0,o.kt)(r.Z,{id:"0b795b13b160cfbcd6796243c0fbb238",mdxType:"Gist"}),(0,o.kt)("p",null,"Now let\u2019s talk about how we got there\u2026"),(0,o.kt)("h2",{id:"the-json-package"},"The JSON package"),(0,o.kt)("p",null,"Support for JSON in Go is provided using the ",(0,o.kt)("inlineCode",{parentName:"p"},"encoding/json")," package, this needs to be imported in your program of course\u2026 You will also need to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"reflect")," package \u2013 more on this later. ",(0,o.kt)("inlineCode",{parentName:"p"},"io/ioutil")," is required to read the data from a file input, there are other packages included in the program that are removed for brevity:"),(0,o.kt)(r.Z,{id:"def7e02eac07ded8b80ff807cf023989",mdxType:"Gist"}),(0,o.kt)("h2",{id:"reading-the-data"},"Reading the data\u2026"),(0,o.kt)("p",null,"We will read the data from the JSON file into a variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"body"),", note that we are not attempting to deserialize the data at this point. This is also a good opportunity to handle any runtime or IO errors that occur here as well."),(0,o.kt)(r.Z,{id:"74a2c2c839a30ed8cc66d83d3ddde3b4",mdxType:"Gist"}),(0,o.kt)("h2",{id:"the-interface"},"The interface\u2026"),(0,o.kt)("p",null,"We will declare an empty interface called ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," which will be used to decode the json object (of which the structure is not known), we will also create an abstract interface called ",(0,o.kt)("inlineCode",{parentName:"p"},"colldata")," to hold the contents of the collection contained inside the JSON object that we are specifically looking for:"),(0,o.kt)(r.Z,{id:"32555f65af4be1fc2504f2d11e15aa19",mdxType:"Gist"}),(0,o.kt)("h2",{id:"validating"},"Validating\u2026"),(0,o.kt)("p",null,"Next we need to validate that the input is a valid JSON object, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"json.Valid(body)")," method to do this:"),(0,o.kt)(r.Z,{id:"c7afe41fcca4ba1e3ed009044cea76de",mdxType:"Gist"}),(0,o.kt)("h2",{id:"unmarshalling"},"Unmarshalling\u2026"),(0,o.kt)("p",null,"Now the interesting bits, we will deserialize the JSON object to the empty data interface we created earlier using the ",(0,o.kt)("inlineCode",{parentName:"p"},"json.Unmarshal()")," method:"),(0,o.kt)(r.Z,{id:"2579ec79be915fb89e91ea0977bfbff6",mdxType:"Gist"}),(0,o.kt)("p",null,"Note that this operation is another opportunity to catch unexpected errors and handle them accordingly."),(0,o.kt)("h2",{id:"checking-the-type-of-the-object-using-reflection"},"Checking the type of the object using reflection\u2026"),(0,o.kt)("p",null,"Now that we have serialized the JSON object into the data interface, there are several ways we can inspect the type of the object (which could be a map or an array). One such way is to use reflection. Reflection is the ability of a program to inspect itself at runtime. An example is shown here:"),(0,o.kt)(r.Z,{id:"1ccd077de0fdee8973e25ac79719cbf5",mdxType:"Gist"}),(0,o.kt)("p",null,"This instruction would produce the following output for our ",(0,o.kt)("inlineCode",{parentName:"p"},"zones.json")," file:"),(0,o.kt)(r.Z,{id:"04c1b3ae79e969e4be32ef7fa1c07736",mdxType:"Gist"}),(0,o.kt)("h2",{id:"the-type-switch"},"The type switch\u2026"),(0,o.kt)("p",null,"Another method to decode the type of the data object (and any objects nested as elements or keys within the data object), is to use the type switch, an example of a type switch function is shown here:"),(0,o.kt)(r.Z,{id:"2e7a3d62ec6f7c71a9c01bfa8d360e4e",mdxType:"Gist"}),(0,o.kt)("h2",{id:"finding-the-nested-collection-and-recursing-it"},"Finding the nested collection and recursing it\u2026"),(0,o.kt)("p",null,"The aim of the program is to find a collection (an array of maps) nested in a JSON object. The maps with each element of the array are unknown at runtime and are discovered through recursion."),(0,o.kt)("p",null,"If we are performing a describe operation, we only need to parse the first element of the collection to get the key names and the data type of the values (for which we will use the same ",(0,o.kt)("inlineCode",{parentName:"p"},"getObjectType")," function to perform a type switch."),(0,o.kt)("p",null,"If we are performing a select operation, we need to parse the first element to get the column names (the keys in the map) and then we need to recurse each element to get the values for each key."),(0,o.kt)("p",null,"If the element contains a key named id or name, we will place this at the beginning of the resultant record, as maps are unordered by definition."),(0,o.kt)("h2",{id:"the-output"},"The output\u2026"),(0,o.kt)("p",null,"As mentioned, we are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"tablewriter")," package to render the output of the collection as a pretty printed table in our terminal. As wrap around can get pretty ugly an additional ",(0,o.kt)("inlineCode",{parentName:"p"},"maxfieldlen")," argument is provided to truncate the values if needed."),(0,o.kt)("h2",{id:"in-summary"},"In summary\u2026"),(0,o.kt)("p",null,"Although it is a bit more involved than some other languages, once you get your head around processing JSON in Go, the possibilities are endless!"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Full source code can be found at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gamma-data/json-wrangling-with-golang"},"https://github.com/gamma-data/json-wrangling-with-golang"))))}f.isMDXComponent=!0},59943:function(e,t,n){var a=n(67294);n(45697);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var r=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,i=a.document;a.contentDocument?i=a.contentDocument:a.contentWindow&&(i=a.contentWindow.document);var o='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";i.open(),i.writeln(o),i.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,i=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:i?"gist-"+n+"-"+i:"gist-"+n})},t}(a.PureComponent);t.Z=r}}]);