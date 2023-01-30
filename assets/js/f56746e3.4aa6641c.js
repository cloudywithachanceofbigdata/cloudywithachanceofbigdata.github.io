"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[2508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(83117),r=(n(67294),n(3905)),o=n(59943);const i={slug:"synthetic-cdc-data-generator",title:"Synthetic CDC Data Generator",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"/img/fullstackchronicles-cover-image.png",tags:["cdc","python","spark"],keywords:["cdc","python","spark"]},c=void 0,l={permalink:"/synthetic-cdc-data-generator",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/src/blog/2019-06-28-synthetic-cdc-data-generator/index.md",source:"@site/blog/2019-06-28-synthetic-cdc-data-generator/index.md",title:"Synthetic CDC Data Generator",description:"This is a simple routine to generate random data with a configurable number or records, key fields and non key fields to be used to create synthetic data for source change data capture (CDC) processing. The output includes an initial directory containing CSV files representing an initial data load, and an incremental directory containing CSV files representing incremental data.",date:"2019-06-28T00:00:00.000Z",formattedDate:"June 28, 2019",tags:[{label:"cdc",permalink:"/tags/cdc"},{label:"python",permalink:"/tags/python"},{label:"spark",permalink:"/tags/spark"}],readingTime:1.635,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"synthetic-cdc-data-generator",title:"Synthetic CDC Data Generator",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"/img/fullstackchronicles-cover-image.png",tags:["cdc","python","spark"],keywords:["cdc","python","spark"]},prevItem:{title:"Change Data Capture at Scale using Spark",permalink:"/change-data-capture-at-scale-using-spark"},nextItem:{title:"Scalable, Secure Application Load Balancing with VPC Native GKE and Istio",permalink:"/scalable-secure-application-load-balancing-with-vpc-native-gke-and-istio"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a simple routine to generate random data with a configurable number or records, key fields and non key fields to be used to create synthetic data for source change data capture (CDC) processing. The output includes an initial directory containing CSV files representing an initial data load, and an incremental directory containing CSV files representing incremental data."),(0,r.kt)("p",null,"Spark Training Courses from the AlphaZetta Academy"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/data-transformation-and-analysis-using-apache-spark/"},"Data Transformation and Analysis Using Apache Spark"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/stream-and-event-processing-using-apache-spark/"},"Stream and Event Processing using Apache Spark"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/advanced-analytics-using-apache-spark/"},"Advanced Analytics Using Apache Spark")),(0,r.kt)("p",null,"Arguments (by position) include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"no_init_recs")," : the number of initial records to generate"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"no_incr_recs")," : the number of incremental records on the second run - should be ",(0,r.kt)("inlineCode",{parentName:"li"},">= no_init_recs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"no_keys")," : number of key columns in the dataset \u2013 keys are generated as UUIDs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"no_nonkeys")," : number of non-key columns in the dataset \u2013 nonkey values are generated as random numbers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pct_del")," : percentage of initial records deleted on the second run - between 0.0 and 1.0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pct_upd")," : percentage of initial records updated on the second run - between 0.0 and 1.0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pct_unchanged")," : percentage of records unchanged on the second run - between 0.0 and 1.0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initial_output")," : folder for initial output in CSV format"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"incremental_output")," : folder for incremental output in CSV format")),(0,r.kt)("p",null,"NOTE : ",(0,r.kt)("inlineCode",{parentName:"p"},"pct_del")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"pct_upd")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"pct_unchanged")," must equal 1.0"),(0,r.kt)("p",null,"Example usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ spark-submit synthetic-cdc-data-generator.py 100000 100000 2 3 0.2 0.4 0.4 data/day1 data/day2\n")),(0,r.kt)("p",null,"Example output from the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"day1"))," run for the above configuration would look like this:"),(0,r.kt)(o.Z,{id:"befb034da2b4f25a1dbbc0e9b4b8eef6",mdxType:"Gist"}),(0,r.kt)("p",null,"Note that this routine can be run subsequent times producing different key and non key values each time, as the keys are UUIDs and the values are random numbers."),(0,r.kt)("p",null,"We will use this application to generate random input data to demonstrate CDC using Spark in a subsequent post, see you soon!"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Full source code can be found at: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/avensolutions/synthetic-cdc-data-generator"},"https://github.com/avensolutions/synthetic-cdc-data-generator"))))}d.isMDXComponent=!0},59943:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294);n(45697);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}const i=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,r=a.document;a.contentDocument?r=a.contentDocument:a.contentWindow&&(r=a.contentWindow.document);var o='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";r.open(),r.writeln(o),r.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,r=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:r?"gist-"+n+"-"+r:"gist-"+n})},t}(a.PureComponent)}}]);