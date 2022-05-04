"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[4555],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?i.createElement(g,n(n({ref:t},u),{},{components:a})):i.createElement(g,n({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,n[1]=l;for(var c=2;c<o;c++)n[c]=a[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},474:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var i=a(83117),r=a(80102),o=(a(67294),a(3905)),n=["components"],l={slug:"cloud-bigtable-primer-part-ii-row-key-selection-and-schema-design",title:"Cloud Bigtable Primer Part II \u2013 Row Key Selection and Schema Design",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/cbt-featured-image.png",tags:["bigtable","cloud-bigtable","gcp","google-cloud-platform","googlecloudplatform","nosql"],keywords:["bigtable","cloud-bigtable","gcp","google-cloud-platform","googlecloudplatform","nosql"]},s=void 0,c={permalink:"/cloud-bigtable-primer-part-ii-row-key-selection-and-schema-design",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2020-09-13-cloud-bigtable-primer-part-ii-row-key-selection-and-schema-design/index.md",source:"@site/blog/2020-09-13-cloud-bigtable-primer-part-ii-row-key-selection-and-schema-design/index.md",title:"Cloud Bigtable Primer Part II \u2013 Row Key Selection and Schema Design",description:"This is a follow up to the original Cloud Bigtable primer where we discussed the basics of Cloud Bigtable:",date:"2020-09-13T00:00:00.000Z",formattedDate:"September 13, 2020",tags:[{label:"bigtable",permalink:"/tags/bigtable"},{label:"cloud-bigtable",permalink:"/tags/cloud-bigtable"},{label:"gcp",permalink:"/tags/gcp"},{label:"google-cloud-platform",permalink:"/tags/google-cloud-platform"},{label:"googlecloudplatform",permalink:"/tags/googlecloudplatform"},{label:"nosql",permalink:"/tags/nosql"}],readingTime:3.355,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"cloud-bigtable-primer-part-ii-row-key-selection-and-schema-design",title:"Cloud Bigtable Primer Part II \u2013 Row Key Selection and Schema Design",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/cbt-featured-image.png",tags:["bigtable","cloud-bigtable","gcp","google-cloud-platform","googlecloudplatform","nosql"],keywords:["bigtable","cloud-bigtable","gcp","google-cloud-platform","googlecloudplatform","nosql"]},prevItem:{title:"Multi Cloud Diagramming with PlantUML",permalink:"/multi-cloud-diagramming-with-plantuml"},nextItem:{title:"GCP Templates for C4 Diagrams using PlantUML",permalink:"/gcp-templates-for-c4-diagrams-using-plantuml"}},u={authorsImageUrls:[void 0]},d=[{value:"Quick Review",id:"quick-review",level:2},{value:"Row Key Selection",id:"row-key-selection",level:2},{value:"Selection Considerations",id:"selection-considerations",level:3},{value:"Row Key Performance",id:"row-key-performance",level:3},{value:"Using Reverse Timestamps",id:"using-reverse-timestamps",level:3},{value:"Schema Design Tips",id:"schema-design-tips",level:3},{value:"Use the Key Visualizer to profile performance",id:"use-the-key-visualizer-to-profile-performance",level:3},{value:"Summary",id:"summary",level:3}],p={toc:d};function m(e){var t=e.components,l=(0,r.Z)(e,n);return(0,o.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is a follow up to the original Cloud Bigtable primer where we discussed the basics of Cloud Bigtable:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloudywithachanceofbigdata.com/cloud-bigtable-primer-part-i/"},(0,o.kt)("strong",{parentName:"a"},"Cloud Bigtable Primer - Part I"))),(0,o.kt)("p",null,"In this article we will cover schema design and row key selection in Bigtable \u2013 arguably the most critical design decision to make when employing Bigtable in a cloud data architecture."),(0,o.kt)("h2",{id:"quick-review"},"Quick Review"),(0,o.kt)("p",null,"Recall from the previous post where the Bigtable data model was introduced that tables in Bigtable are comprised of rows and columns - much like a table in any other RDBMS. Every row is uniquely identified by a rowkey \u2013 again akin to a primary key in a table in an RDBMS. But this is where the similarities end."),(0,o.kt)("p",null,"Unlike a table in an RDBMS, columns only ever exist when they are inserted, and ",(0,o.kt)("inlineCode",{parentName:"p"},"NULLs")," are not stored. See the illustration below:"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(17633).Z},(0,o.kt)("img",{src:a(53145).Z,width:"1024",height:"297"}))),(0,o.kt)("h2",{id:"row-key-selection"},"Row Key Selection"),(0,o.kt)("p",null,"Data in Bigtable is distributed by row keys. Row keys are physically stored in tablets in lexographic order. Recall that row keys are your ONLY indexes to data in Bigtable."),(0,o.kt)("h3",{id:"selection-considerations"},"Selection Considerations"),(0,o.kt)("p",null,"As row keys are your only indexes to retrieve or update rows in Bigtable, row key design must take the access patterns for the data to be stored and served via Bigtable into consideration, specifically the following must be considered when designing a Bigtable application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Search patterns (returning data for a specific entity)"),(0,o.kt)("li",{parentName:"ul"},"Scan patterns (returning batches of data)")),(0,o.kt)("p",null,"Queries that use the row key, a row prefix, or a row range are the most efficient. Queries that do not include a row key will typically scan GB or TB of data and would not be suitable for operational use cases."),(0,o.kt)("h3",{id:"row-key-performance"},"Row Key Performance"),(0,o.kt)("p",null,"Row key performance will be biased towards your specific access patterns and application functional requirements. For example if you are performing sequential reads or scan operations then sequential keys will perform the best, however their write performance will not be optimal. Conversely, random keys (such as a ",(0,o.kt)("inlineCode",{parentName:"p"},"uuid"),") will perform best for writes but poor for scan or sequential read operations."),(0,o.kt)("p",null,"Adding salts to keys (or additional data), similar to the use of salts in cryptography as well as promoting other field keys to be part of a composite row key can help achieve a \u201cGoldilocks\u201d scenario for both reads and writes, see the diagram below:"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(15489).Z},(0,o.kt)("img",{src:a(4390).Z,width:"684",height:"551"}))),(0,o.kt)("h3",{id:"using-reverse-timestamps"},"Using Reverse Timestamps"),(0,o.kt)("p",null,"Use reverse timestamps when your most common query is for the latest values. Typically you would append the reverse timestamp to the key, this will ensure that the same related records are grouped together, for instance if you are storing events for a customer using the customer id along with an appended reverse timestamp (for example ",(0,o.kt)("inlineCode",{parentName:"p"},"<customer_id>#<reverse_ts>"),") would allow you to quickly serve the latest events for a customer in descending order as within each group (",(0,o.kt)("inlineCode",{parentName:"p"},"customer_id"),"), rows will be sorted so most recent insert will be located at the top.",(0,o.kt)("br",{parentName:"p"}),"\n","A reverse timestamp can be generalised as:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Long.MAX_VALUE - System.currentTimeMillis()")),(0,o.kt)("h3",{id:"schema-design-tips"},"Schema Design Tips"),(0,o.kt)("p",null,"Some general tips for good schema design using Bigtable are summarised below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Group related data for more efficient reads using column families"),(0,o.kt)("li",{parentName:"ul"},"Distribute data evenly for more efficient writes"),(0,o.kt)("li",{parentName:"ul"},"Place identical values in the adjoining rows for more efficient compression using row keys")),(0,o.kt)("p",null,"Following these tips will give you the best possible performance using Bigtable."),(0,o.kt)("h3",{id:"use-the-key-visualizer-to-profile-performance"},"Use the Key Visualizer to profile performance"),(0,o.kt)("p",null,"Google provides a neat tool to visualize your row key distribution in Cloud Bigtable. You need to have at least 30 GB of data in your table to enable this feature."),(0,o.kt)("p",null,"The Key Visualizer is shown here:"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(82227).Z},(0,o.kt)("img",{alt:"Bigtable Key Visualizer",src:a(88289).Z,width:"733",height:"403"}))),(0,o.kt)("p",null,"The Key Visualizer will help you find and prevent hotspots, find rows with too much data and show if your key schema is balanced."),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Bigtable is one of the original and best (massively) distributed NoSQL platforms available. Schema and moreover row key design play a massive part in ensuring low latency and query performance. Go forth and conquer with Cloud Bigtable!"))}m.isMDXComponent=!0},17633:function(e,t,a){t.Z=a.p+"assets/files/bigtable-data-model-0e76eb10501530b624d8be2abe3a46df.png"},82227:function(e,t,a){t.Z=a.p+"assets/files/image-d2e2037eaf05cfcfebc613b7821d624d.png"},15489:function(e,t,a){t.Z=a.p+"assets/files/keys-418e33748532e78f24865d6aad4c8ac4.png"},53145:function(e,t,a){t.Z=a.p+"assets/images/bigtable-data-model-0e76eb10501530b624d8be2abe3a46df.png"},88289:function(e,t,a){t.Z=a.p+"assets/images/image-d2e2037eaf05cfcfebc613b7821d624d.png"},4390:function(e,t,a){t.Z=a.p+"assets/images/keys-418e33748532e78f24865d6aad4c8ac4.png"}}]);