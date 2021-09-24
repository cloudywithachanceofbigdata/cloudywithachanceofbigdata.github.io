"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[3062],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65444:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return f}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=n(59943),i=["components"],l={slug:"multi-stage-etl-framework-using-spark-sql",title:"Multi Stage ETL Framework using Spark SQL",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,description:"A simple configuration driven Spark SQL ETL framework",image:"images/spark-sql-etl-framework.png",tags:["etl","spark","sql"],keywords:["etl","spark","sql"]},c=void 0,p={permalink:"/multi-stage-etl-framework-using-spark-sql",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2019-01-09-multi-stage-etl-framework-using-spark-sql/index.md",source:"@site/blog/2019-01-09-multi-stage-etl-framework-using-spark-sql/index.md",title:"Multi Stage ETL Framework using Spark SQL",description:"A simple configuration driven Spark SQL ETL framework",date:"2019-01-09T00:00:00.000Z",formattedDate:"January 9, 2019",tags:[{label:"etl",permalink:"/tags/etl"},{label:"spark",permalink:"/tags/spark"},{label:"sql",permalink:"/tags/sql"}],readingTime:2.21,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],prevItem:{title:"Infrastructure Automation using AWS Lambda",permalink:"/infrastructure-automation-using-aws-lambda"},nextItem:{title:"The Cost of Future Change",permalink:"/cost-of-future-change"}},u={authorsImageUrls:[void 0]},m=[{value:"Sources",id:"sources",children:[]},{value:"Transforms",id:"transforms",children:[]},{value:"Targets",id:"targets",children:[]},{value:"Process SQL Statements",id:"process-sql-statements",children:[]}],d={toc:m};function f(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Most traditional data warehouse or datamart ETL routines consist of multi stage SQL transformations, often a series of CTAS (",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE TABLE AS SELECT"),") statements usually creating transient or temporary tables \u2013 such as volatile tables in Teradata or Common Table Expressions (CTE\u2019s)."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Spark Training Courses")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/data-transformation-and-analysis-using-apache-spark/"},"Data Transformation and Analysis Using Apache Spark"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/stream-and-event-processing-using-apache-spark/"},"Stream and Event Processing using Apache Spark"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/advanced-analytics-using-apache-spark/"},"Advanced Analytics Using Apache Spark")))),(0,o.kt)("p",null,"The initial challenge when moving from a SQL/MPP based ETL framework platformed on Oracle, Teradata, SQL Server, etc to a Spark based ETL framework is what to do with this\u2026"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Multi Stage SQL Based ETL",src:n(72220).Z})),(0,o.kt)("p",null,"One approach is to use the lightweight, configuration driven, multi stage Spark SQL based ETL framework described in this post."),(0,o.kt)("p",null,"This framework is driven from a YAML configuration document. YAML was preferred over JSON as a document format as it allows for multi-line statements (SQL statements), as well as comments - which are very useful as SQL can sometimes be undecipherable even for the person that wrote it."),(0,o.kt)("p",null,"The YAML config document has three main sections: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"sources")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"transforms"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"targets")),"."),(0,o.kt)("h3",{id:"sources"},"Sources"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"sources"))," section is used to configure the input data source(s) including optional column and row filters. In this case the data sources are tables available in the Spark catalog (for instance the AWS Glue Catalog or a Hive Metastore), this could easily be extended to read from other datasources using the Spark DataFrameReader API."),(0,o.kt)(s.Z,{id:"eaf03229466718ee125e0a6d23370f1b",mdxType:"Gist"}),(0,o.kt)("h3",{id:"transforms"},"Transforms"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"transforms"))," section contains the multiple SQL statements to be run in sequence where each statement creates a temporary view using objects created by preceding statements."),(0,o.kt)(s.Z,{id:"89ad7ac6b036e5f22b2d3dec43b1fe44",mdxType:"Gist"}),(0,o.kt)("h3",{id:"targets"},"Targets"),(0,o.kt)("p",null,"Finally the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"targets"))," section writes out the final object or objects to a specified destination (S3, HDFS, etc)."),(0,o.kt)(s.Z,{id:"5af780dd6b6e5ddd79a4cac8a59e6a69",mdxType:"Gist"}),(0,o.kt)("h3",{id:"process-sql-statements"},"Process SQL Statements"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"process_sql_statements.py"))," script that is used to execute the framework is very simple (30 lines of code not including comments, etc). It loads the sources into Spark Dataframes and then creates temporary views to reference these datasets in the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"transforms"))," section, then sequentially executes the SQL statements in the list of transforms. Lastly the script writes out the final view or views to the desired destination \u2013 in this case parquet files stored in S3 were used as the target."),(0,o.kt)("p",null,"You could implement an object naming convention such as prefixing object names with ",(0,o.kt)("inlineCode",{parentName:"p"},"sv_"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"iv_"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fv_")," (for source view, intermediate view and final view respectively) if this helps you differentiate between the different objects."),(0,o.kt)("p",null,"To use this framework you would simply use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"spark-submit"))," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spark-submit process_sql_statements.py config.yml\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Full source code can be found at: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/avensolutions/spark-sql-etl-framework"},(0,o.kt)("strong",{parentName:"a"},"https://github.com/avensolutions/spark-sql-etl-framework"))))))}f.isMDXComponent=!0},59943:function(e,t,n){var a=n(67294);n(45697);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,r=a.document;a.contentDocument?r=a.contentDocument:a.contentWindow&&(r=a.contentWindow.document);var o='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";r.open(),r.writeln(o),r.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,r=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:r?"gist-"+n+"-"+r:"gist-"+n})},t}(a.PureComponent);t.Z=s},72220:function(e,t,n){t.Z=n.p+"assets/images/multi-stage-sql-1b6298de71ac35e0ecde3af82a831be6.png"}}]);