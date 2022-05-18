"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[67642],{3905:function(t,e,a){a.d(e,{Zo:function(){return g},kt:function(){return u}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),A=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},g=function(t){var e=A(t.components);return n.createElement(m.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,g=o(t,["components","mdxType","originalType","parentName"]),d=A(a),u=r,k=d["".concat(m,".").concat(u)]||d[u]||p[u]||l;return a?n.createElement(k,i(i({ref:e},g),{},{components:a})):n.createElement(k,i({ref:e},g))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var A=2;A<l;A++)i[A]=a[A];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78077:function(t,e,a){a.r(e),a.d(e,{assets:function(){return g},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return o},metadata:function(){return A},toc:function(){return p}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],o={slug:"ultimate-aws-to-gcp-thesaurus",title:"The Ultimate AWS to GCP Thesaurus",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!1,image:"images/aws-to-gcp-thesauraus.png",tags:["amazonwebservices","aws","gcp","googlecloudplatform"],keywords:["amazonwebservices","aws","gcp","googlecloudplatform"]},m=void 0,A={permalink:"/ultimate-aws-to-gcp-thesaurus",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2019-12-30-the-ultimate-aws-to-gcp-thesaurus/index.md",source:"@site/blog/2019-12-30-the-ultimate-aws-to-gcp-thesaurus/index.md",title:"The Ultimate AWS to GCP Thesaurus",description:"There are many posts available which map analogous services between the different cloud providers, but this post attempts to go a step further and map additional concepts, terms, and configuration options to be the definitive thesaurus for cloud practitioners familiar with AWS looking to fast track their familiarisation with GCP.",date:"2019-12-30T00:00:00.000Z",formattedDate:"December 30, 2019",tags:[{label:"amazonwebservices",permalink:"/tags/amazonwebservices"},{label:"aws",permalink:"/tags/aws"},{label:"gcp",permalink:"/tags/gcp"},{label:"googlecloudplatform",permalink:"/tags/googlecloudplatform"}],readingTime:4.305,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"ultimate-aws-to-gcp-thesaurus",title:"The Ultimate AWS to GCP Thesaurus",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!1,image:"images/aws-to-gcp-thesauraus.png",tags:["amazonwebservices","aws","gcp","googlecloudplatform"],keywords:["amazonwebservices","aws","gcp","googlecloudplatform"]},prevItem:{title:"Sick of hearing about Service Mesh? Here\u2019s what you need to know...",permalink:"/sick-of-hearing-about-service-mesh-heres-what-you-need-to-know"},nextItem:{title:"Google Cloud Storage Object Notifications using Slack",permalink:"/google-cloud-storage-object-notifications-using-slack"}},g={authorsImageUrls:[void 0]},p=[{value:" Compute",id:"-compute",level:2},{value:" Storage",id:"-storage",level:2},{value:" Database",id:"-database",level:2},{value:" Networking &amp; Content Delivery",id:"-networking--content-delivery",level:2},{value:" Security, Identity, &amp; Compliance",id:"-security-identity--compliance",level:2}],d={toc:p};function u(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"There are many posts available which map analogous services between the different cloud providers, but this post attempts to go a step further and map additional concepts, terms, and configuration options to be the definitive thesaurus for cloud practitioners familiar with AWS looking to fast track their familiarisation with GCP."),(0,l.kt)("p",null,"It should be noted that AWS and GCP are fundamentally different platforms, nowhere is this more apparent than in the way networking is implemented between the two providers, see: ",(0,l.kt)("a",{parentName:"p",href:"https://cloudywithachanceofbigdata.com/gcp-networking-for-aws-professionals/"},(0,l.kt)("strong",{parentName:"a"},"GCP Networking for AWS Professionals"))),(0,l.kt)("p",null,"This post is focused on the core infrastructure, networking and security services offered by the two major cloud providers, I will do a future post on higher level services such as the ML/AI offerings from the respective providers."),(0,l.kt)("p",null,"Furthermore this will be a living post which I will continue to update, I encourage comments from readers on additional mappings which I will incorporate into the post as well."),(0,l.kt)("p",null,"I have broken this down into sections based upon the layout of the AWS Console."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#compute"},(0,l.kt)("img",{src:a(43665).Z,width:"40",height:"40"})," ",(0,l.kt)("strong",{parentName:"a"},"Compute"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#storage"},(0,l.kt)("img",{src:a(85118).Z,width:"40",height:"40"})," ",(0,l.kt)("strong",{parentName:"a"},"Storage"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#database"},(0,l.kt)("img",{src:a(2697).Z,width:"40",height:"40"})," ",(0,l.kt)("strong",{parentName:"a"},"Database"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#networking"},(0,l.kt)("img",{src:a(48537).Z,width:"40",height:"40"})," ",(0,l.kt)("strong",{parentName:"a"},"Networking & Content Delivery"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#security"},(0,l.kt)("img",{src:a(95782).Z,width:"40",height:"40"})," ",(0,l.kt)("strong",{parentName:"a"},"Security, Identity, & Compliance")))),(0,l.kt)("a",{name:"compute"}),(0,l.kt)("h2",{id:"-compute"},(0,l.kt)("img",{src:a(43665).Z,width:"40",height:"40"})," Compute"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("img",{src:a(83487).Z,width:"84",height:"50"})),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("img",{src:a(64662).Z,width:"62",height:"50"})))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EC2 (Elastic Compute Cloud)"),(0,l.kt)("td",{parentName:"tr",align:null},"GCE (Google Compute Engine)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Availability Zone"),(0,l.kt)("td",{parentName:"tr",align:null},"Zone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Instance"),(0,l.kt)("td",{parentName:"tr",align:null},"VM Instance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Instance Family"),(0,l.kt)("td",{parentName:"tr",align:null},"Machine Family")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Instance Type"),(0,l.kt)("td",{parentName:"tr",align:null},"Machine Type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon Machine Image (AMI)"),(0,l.kt)("td",{parentName:"tr",align:null},"Image")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IAM Role (for an EC2 Instance)"),(0,l.kt)("td",{parentName:"tr",align:null},"Service Account")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Security Groups"),(0,l.kt)("td",{parentName:"tr",align:null},"VPC Firewall Rules (ALLOW)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tag"),(0,l.kt)("td",{parentName:"tr",align:null},"Label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Termination Protection"),(0,l.kt)("td",{parentName:"tr",align:null},"Deletion Protection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Reserved Instances"),(0,l.kt)("td",{parentName:"tr",align:null},"Committed Use Discounts")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Capacity Reservation"),(0,l.kt)("td",{parentName:"tr",align:null},"Reservation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User Data"),(0,l.kt)("td",{parentName:"tr",align:null},"Startup Script")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Spot Instances"),(0,l.kt)("td",{parentName:"tr",align:null},"Preemptible VMs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dedicated Instances"),(0,l.kt)("td",{parentName:"tr",align:null},"Sole Tenancy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EBS Volume"),(0,l.kt)("td",{parentName:"tr",align:null},"Persistent Disk")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Auto Scaling Group"),(0,l.kt)("td",{parentName:"tr",align:null},"Managed Instance Group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Launch Configuration"),(0,l.kt)("td",{parentName:"tr",align:null},"Instance Template")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ELB Listener"),(0,l.kt)("td",{parentName:"tr",align:null},"URL Map (Load Balancer)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ELB Target Group"),(0,l.kt)("td",{parentName:"tr",align:null},"Backend/ Instance Group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Instance Storage (ephemeral)"),(0,l.kt)("td",{parentName:"tr",align:null},"Local SSDs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EBS Snapshots"),(0,l.kt)("td",{parentName:"tr",align:null},"Snapshots")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Keypair"),(0,l.kt)("td",{parentName:"tr",align:null},"SSH Keys")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Elastic IP"),(0,l.kt)("td",{parentName:"tr",align:null},"External IP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lambda"),(0,l.kt)("td",{parentName:"tr",align:null},"Google Cloud Functions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Elastic Beanstalk"),(0,l.kt)("td",{parentName:"tr",align:null},"Google App Engine")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Elastic Container Registry (ECR)"),(0,l.kt)("td",{parentName:"tr",align:null},"Google Container Registry (GCR)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Elastic Container Service (ECS)"),(0,l.kt)("td",{parentName:"tr",align:null},"Google Kubernetes Engine (GKE)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Elastic Kubernetes Service (EKS)"),(0,l.kt)("td",{parentName:"tr",align:null},"Google Kubernetes Engine (GKE)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AWS Fargate"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud Run")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AWS Service Quotas"),(0,l.kt)("td",{parentName:"tr",align:null},"Allocation Quotas")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Account (within an Organisation)","\u2020"),(0,l.kt)("td",{parentName:"tr",align:null},"Project")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Region"),(0,l.kt)("td",{parentName:"tr",align:null},"Region")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AWS Cloud\u200bFormation"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud Deployment Manager")))),(0,l.kt)("a",{name:"storage"}),(0,l.kt)("h2",{id:"-storage"},(0,l.kt)("img",{src:a(85118).Z,width:"40",height:"40"})," Storage"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("img",{src:a(83487).Z,width:"84",height:"50"})),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("img",{src:a(64662).Z,width:"62",height:"50"})))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Simple Storage Service (S3)"),(0,l.kt)("td",{parentName:"tr",align:null},"Google Cloud Storage (GCS)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Standard Storage Class"),(0,l.kt)("td",{parentName:"tr",align:null},"Standard Storage Class")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Infrequent Access Storage Class"),(0,l.kt)("td",{parentName:"tr",align:null},"Nearline Storage Class")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon Glacier"),(0,l.kt)("td",{parentName:"tr",align:null},"Coldline Storage Class")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lifecycle Policy"),(0,l.kt)("td",{parentName:"tr",align:null},"Retention Policy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Labels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Snowball"),(0,l.kt)("td",{parentName:"tr",align:null},"Transfer Appliance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Requester Pays"),(0,l.kt)("td",{parentName:"tr",align:null},"Requester Pays")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Region"),(0,l.kt)("td",{parentName:"tr",align:null},"Location Type/Location")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Object Lock"),(0,l.kt)("td",{parentName:"tr",align:null},"Hold")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vault Lock (Glacier)"),(0,l.kt)("td",{parentName:"tr",align:null},"Bucket Lock")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Multi Part Upload"),(0,l.kt)("td",{parentName:"tr",align:null},"Parallel Composite Transfer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cross-Origin Resource Sharing (CORS)"),(0,l.kt)("td",{parentName:"tr",align:null},"Cross-Origin Resource Sharing (CORS)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Static Website Hosting"),(0,l.kt)("td",{parentName:"tr",align:null},"Bucket Website Configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"S3 Access Points"),(0,l.kt)("td",{parentName:"tr",align:null},"VPC Service Controls")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Object Notifications"),(0,l.kt)("td",{parentName:"tr",align:null},"Pub/Sub Notifications for Cloud Storage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Presigned URL"),(0,l.kt)("td",{parentName:"tr",align:null},"Signed URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transfer Acceleration"),(0,l.kt)("td",{parentName:"tr",align:null},"Storage Transfer Service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Elastic File System (EFS)"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud Filestore")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AWS DataSync"),(0,l.kt)("td",{parentName:"tr",align:null},"Transfer Service for on-premises data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ETag"),(0,l.kt)("td",{parentName:"tr",align:null},"ETag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"Bucket")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aws s3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gsutil"))))),(0,l.kt)("a",{name:"database"}),(0,l.kt)("h2",{id:"-database"},(0,l.kt)("img",{src:a(2697).Z,width:"40",height:"40"})," Database"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("img",{src:a(83487).Z,width:"84",height:"50"})),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("img",{src:a(64662).Z,width:"62",height:"50"})))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Relational Database Service (RDS)"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud SQL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DynamoDB"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud Datastore")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ElastiCache"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud Memorystore")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Table (DynamoDB)"),(0,l.kt)("td",{parentName:"tr",align:null},"Kind (Cloud Datastore)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Item (DynamoDB)"),(0,l.kt)("td",{parentName:"tr",align:null},"Entity (Cloud Datastore)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Partition Key (DynamoDB)"),(0,l.kt)("td",{parentName:"tr",align:null},"Key (Cloud Datastore)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Attributes (DynamoDB)"),(0,l.kt)("td",{parentName:"tr",align:null},"Properties (Cloud Datastore)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Local Secondary Index (DynamoDB)"),(0,l.kt)("td",{parentName:"tr",align:null},"Composite Index (Cloud Datastore)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Elastic Map Reduce (EMR)"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud DataProc")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Athena"),(0,l.kt)("td",{parentName:"tr",align:null},"Big Query")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AWS Glue"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud DataFlow")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Glue Catalog"),(0,l.kt)("td",{parentName:"tr",align:null},"Data Catalog")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon Simple Notification Service (SNS)"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud PubSub (push subscription)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon Kinesis"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud PubSub")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon Simple Queue Service (SQS)"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud PubSub (poll and pull mode)")))),(0,l.kt)("a",{name:"networking"}),(0,l.kt)("h2",{id:"-networking--content-delivery"},(0,l.kt)("img",{src:a(48537).Z,width:"40",height:"40"})," Networking & Content Delivery"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("img",{src:a(83487).Z,width:"84",height:"50"})),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("img",{src:a(64662).Z,width:"62",height:"50"})))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Virtual Private Cloud (VPC) (Regional)"),(0,l.kt)("td",{parentName:"tr",align:null},"VPC Network (Global or Regional)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Subnet (Zonal)"),(0,l.kt)("td",{parentName:"tr",align:null},"Subnet (Regional)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Route Tables"),(0,l.kt)("td",{parentName:"tr",align:null},"Routes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Network ACLs (NACLS)"),(0,l.kt)("td",{parentName:"tr",align:null},"VPC Firewall Rules (ALLOW or DENY)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CloudFront"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud CDN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Route 53"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud DNS/Google Domains")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Direct Connect"),(0,l.kt)("td",{parentName:"tr",align:null},"Dedicated (or Partner) Interconnect")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Virtual Private Network (VPN)"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud VPN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AWS PrivateLink"),(0,l.kt)("td",{parentName:"tr",align:null},"Google Private Access")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NAT Gateway"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud NAT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Elastic Load Balancer"),(0,l.kt)("td",{parentName:"tr",align:null},"Load Balancer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AWS WAF"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud Armour")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VPC Peering Connection"),(0,l.kt)("td",{parentName:"tr",align:null},"VPC Network Peering")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon API Gateway"),(0,l.kt)("td",{parentName:"tr",align:null},"Apigee API Gateway")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon API Gateway"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud Endpoints")))),(0,l.kt)("a",{name:"security"}),(0,l.kt)("h2",{id:"-security-identity--compliance"},(0,l.kt)("img",{src:a(95782).Z,width:"40",height:"40"})," Security, Identity, & Compliance"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("img",{src:a(83487).Z,width:"84",height:"50"})),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("img",{src:a(64662).Z,width:"62",height:"50"})))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Root Account"),(0,l.kt)("td",{parentName:"tr",align:null},"Super Admin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IAM User"),(0,l.kt)("td",{parentName:"tr",align:null},"Member")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IAM Policy"),(0,l.kt)("td",{parentName:"tr",align:null},"Role (Collection of Permissions)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IAM Policy Attachment"),(0,l.kt)("td",{parentName:"tr",align:null},"IAM Role Binding (or IAM Binding)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key Management Service (KMS)"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud KMS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CloudHSM"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud HSM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon Inspector (agent based)"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud Security Scanner (scan based)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AWS Security Hub"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud Security Command Center (SCC)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Secrets Manager"),(0,l.kt)("td",{parentName:"tr",align:null},"Secret Manager")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon Macie"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud Data Loss Prevention (DLP)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AWS WAF"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud Armour")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AWS Shield"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud Armour")))),(0,l.kt)("p",null,"\u2020 No direct equivalent, this is the closest equivalent"))}u.isMDXComponent=!0},83487:function(t,e){e.Z="data:image/png;base64,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"},43665:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAVFBMVEUAAACAgIBVVVVmZmZZWWZVWmNVWWZSWmNVXWRTW2NUWmRUW2VTW2RUXGNUW2RUXGVUW2VUW2RUW2RUW2RUW2RUW2RUXGRUW2RUW2RUW2RUW2T///8m/aZOAAAAGnRSTlMAAgMFFDY8PkJfhYaHiI+qtMLg5Obo6uv5/jprlmMAAAABYktHRBsCYNSkAAAAp0lEQVQ4y92U2w6CMBBEKyggKspF1Pn/D/VBKGWnuzGGpInzwENzEnZOunXuE8D6BtkabGGkO+UTtm9eMFNP4A3Px/WYOSUVej/fYeeMzNOCmhEI4Hsw5ir669/ANuqPQPJZK62FT++PWkufy7loLUvReSpwVUYDqbUF/mvrO4qQKzEorS/KmtKM+XkMsVG9uBvtTNq9Fv5kvE/2pz17wp+M95nqsX8DRM8xpWml3B0AAAAASUVORK5CYII="},2697:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAgVBMVEUAAABNZmZdXV1VVWZQYGBVVWNRXl5VWWVUXGRVXWRTWmVTWmVUW2VVXGNTXGNVXGVUW2RTWmNVXGRUWmVVW2RUW2NUXGRUWmRUW2NTW2RUWmRVW2VUW2RVW2RUW2RUXGNUW2RUW2VUW2RUW2RUW2RUW2RUW2RUW2RUW2RUW2T////mzGsFAAAAKXRSTlMACgsPEBITP0BCREdJS1BvcHF1d3h5eoKDhL2+v8HCw+7x8vP3+fr9/kFW+eoAAAABYktHRCpTvtSeAAAAqklEQVQ4y+2VRw7CMBBFH6H3FmpwCKR57n9BFiESIHkCEt7lb+zF8zR9jcGLJiYRpxKzqLmDFV2nihvbIuy40wXLohwCYGSrV7aXCIBUesDl7AT7cgNABOBq3CEroj74J9gsAOJmLv6IreX1An5Ro/mtax8DRzfFO9iaojXFC5hKVzfFQO4ARLLWM2+eS2oueRgoa2+Vy6y67kp9NvZYPxrFmRvLzNTPh/AAAUNTBbU39TMAAAAASUVORK5CYII="},64662:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAyCAYAAAAEA2g/AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATZSURBVHjaYmSgMXjtYmYPpByA2ACIFaA0OvgAxBeA+AGU3iC659RDWroLIIAYaejZBCAOAGIBMo0BBcICEKZFIAAEECMNPNwAjWFqAlAANFAzAAACiJFKHpaHOs6BxjlnAjQAPlJqEEAAMVLB0/lQB9ELgLJAANDzFykxBCCAGCnwMD/UwwkMAwMSgJ5fSK5mgABiosDTBwbQ0wwLlUMXhNTun0+ufoAAYqTA0wYD6GmGE2Im8IJvTbNjIqlmAAQQOTG+YRB5GpzkgTFfT6o5AAHESGJs9wOpgkHkaWQQAIz5jcSaBRBAjCR42h6axAejp2GtPwWg54mq6gACiIWEfL2AQrdvgOIL6FURNFANoIWlARmeZoC2EEFuDCTGMQABxEikx+uhLTKat7rQW39EehoZOABj/SAhRQABxEhkbD8go839AdrQOEhOaAHtjV+qFDThiLg5qfYeAHrckZAigAAiplQvwOdpZrnvcIwEQD0sBXI9DQKgxgnQ0wZQs0iKcWApb09IEUAAERPj96HdSQYmsZ8MrGpfGViAnmSR+4FV/f8fTAz//zFcYOL6B0riG9hc3lLUsQB6gpwUR7BuBwggRgKe9gc5nkX1KwO76QecniWU9EB5FhgABynwPDk1igC+Eh4ggPAmdVaNLw7cUU8ZuINfkOtpBmghdeDXHuH9QCxPjgHQwmoBGfbiBAABhNPjQEfGcwW8TKDAw9gccgFkLpn6SW04gdryOO0CCCAmHJ7uh4awAAN1AbiuBZpfT0asfyQx1gWgnu/HJgkQQEw4PE3rZmkDOZ6HNoBITinYPA8QQEzoyZuObXGQ5/3JKCgZyPQ8SrIHCCAmJE/L03kk5QKpHoEm9wfkDlsBPQ8vXAECiAmtaSlAR087AKs4csbOHlBSvsA4AAHEBI1tewbaDxRSw9MU1yywVh1AAMFivIECwx5Ak+wDOnn6AaVlC4gACCBGaN4m1bAP0PJgAXKTFGpWAwP2sTiqxjQ05kAFcQAZ2hUAAgjkcVKHhz9APXART+PHH63MoFnyhpbWpLbqCgACiInEECPoaRAAym9EinWa5mlgSb+QjCrYASCAmBhIGzicQMjTaJ6fQI+CDOj5iSRWjQYAAcRCanePFAcBPVxIxxJ7AQk1kwJAAJEyvPyA0r41jQFJjSGAACLJ44PY06DkTlKkAAQQKR43GMweR26OEgMAAogUjwsAqyn9Qex3klqeAAHERGISLhjEHiel9fkAIICYGEgbxUygYASFlskc1LdXIKW/ABBATGT0cRcMJs8DPZ1PRl/jAEAAkdtWZzj3W+BAzidDUAPlwJnwNR/p7Fl+aIszgcxepQJAADFC29brSWm63vrDw5DzyYDhy39WijygcCV7IBLJBmDVFwgQQLBSfQK9PT2AAOxXgABigjYtQePWG0aApzfAJhQBAogJrar6MIw9/QG5OgYIICakDsVDHAMIw8HT4KoYuVkLEEBMePrRw83TKMtEAAKICUtXciHM88PI0xjr4QACiAlHP3rh/T9cCbmfDD4M8TwdgM3TIAAQQDg7Keoejxd+/s9qwEDetM2Al96g3iS+VVAAAUTUGhiTlSGUjGjSswED8vAEYtbAAAQQSevcgAEAayo6QDsFDgPs8QcMiKmoDaQMRgAEGADHTLziPW4o6AAAAABJRU5ErkJggg=="},48537:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAACK1BMVEUAAAAAAACAgIBVVVVAQIBVVVVJSW1gYGBVVXFdXV1VVWpOYmJbW1tQYGBaWmlVVWNRXl5ZWWZVVWFRXWhZWWRVYGBSXGZYWGJVXmhYWGFVXmZSWmNYWGhVXWRXV2ZVXGNTWmdXXmVVXGJTWWZXXWRVW2FRXWNVW2ZVWmVSXGZVWmRTXWJSW2VSW2RSWmNVWWVUXGRSWmJVXWRTWmVVXGRUW2JTWmVVXGNTWmRTWWNTXGNVW2VTXGVVW2RUWmVTXGRVW2NTW2RVWmNUXGRTW2NVWmVUXGRTW2NUXGNTW2VVWmRUXGNVWmRUW2VTW2RUW2VTWmRVXGVTWmNVXGVUW2RVW2RUWmRUXGRUW2NTW2RUWmRUW2VTW2RUXGVUW2RTWmNUXGVTWmNUW2RTWmVUW2RUW2NTXGRTXGRUW2NTXGRTW2NUW2RUWmRTW2VUXGRUW2RUXGNTW2RUXGVUW2RUW2RUW2RVWmVUW2RUW2NVXGRUW2NUWmRVW2RUW2RUWmRVW2VUW2RUXGNVW2RUW2NUW2RVW2RUWmRUW2RTW2VVW2RUXGRUW2RVW2VUXGRUW2RTW2RVW2NVW2RTW2RUW2RUW2RTWmRUW2RTXGRUW2RUW2RTW2RUW2RUW2RUW2RUW2RUW2RUW2RUXGRUW2RUW2RUW2RUW2RUW2RUW2VUW2RUW2RUW2RUW2RUW2RUW2RVW2RUWmRUW2RUW2RUW2RUW2RUW2RUXGRUW2RUW2T////+WQQnAAAAt3RSTlMAAQIDBAYHCAkLDA0OEBESExQVFhcYGRobHR4fICEjJCUmJygpKiwtMDIzNDU4Pj9AQUJERUZHSEpNUFFTV1hZWlxdXl9gYWJkZWZnaWprbW5vcXJze3+Ag4SFhoqLjI2OkJGTlJWWmZqcn6ChoqSmp6iqq62ur7Cxsra6u7y9vsLDx8jJysvMzc3Oz9DR0tPT09bX2Nnb3ODh4uPk5efo6err7O7v8PHy8/T19vf3+Pn6+/z9/f4Rdgt0AAAAAWJLR0S4Tb8m9gAAAlRJREFUGBmFwQdDjAEAx+HfddknDaOUQkSRsioNq8hOVvamZJYIpZLRsGcZJ5yMlOM67//rebvWyY3n4R+pRxs+fv7cUb8njkDi6jXIVR6GX4mf9OHQsmlhYbFZZ5x6OQU/xrXrRjgDZrToJn7s1p0xDIl4r/TkwpwY/vdWi/CyT78luc6OZYRZslvwkiu1nbvqVI2Ff61UJd4mlBdaIf6NsvBmnX9cJ/GhWKUMSyj9ImkPPmSriiFbe2Q8qiyLxofdup0+in4bpfMz8OOipHcb6DO1S9vxa87eU6+kA5j2qpqALGtdRjLQqqUEcVBlwBdNJIj5egE4NZogxqsLeK14ghinLqBCxQSRoufACtnDCeykTgCWW7o9mUAKen8lYprWrs6j2QtTfJo3d32DVIxHZJWhQDoLGZS8v6ZpQHOHTB3NTf3aWi5tseFD0kM5JaceJBGItcSlpkQpsUmuEit+JTSqtyQUidCSXjUm8D9bWkYUm77qVSogAalt+rqJqMw0G8MsO7sk92OpchImCdOky9ITt/R9B0MKZdRc79bPXDwkPHJ/qvt6raECBnUoHxY4/0TjIeERY/SkwDrZGTBdrzFVKxtTbLEUS58cXcH0VjH0i9QnK1Cn5cCqb5K+5WHKVC0Q6lAEA57pcAj5xo8wmN2jiqIr6p4JhHcba7Ae0VMGLTbksEs7gGM6DZTqCKZdkt0hdxpD0u+71Z5vAeq1GFiiOkyWde1yt6bhzRaBxwVtBrboPP0ibfi2Wo6M0ZkO5RGE5Zr6XCWokKJ7PXe3hTDSX044BELj8dR3AAAAAElFTkSuQmCC"},95782:function(t,e){e.Z="data:image/png;base64,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"},85118:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAn1BMVEUAAACAgIBmZmZJSW1OYmJbW1taWmlRXWhVXmZTWmdSW2VTXWZTWWNVW2VUWmRUWmNUXGRTW2NTW2VVWmRTWmRUW2RTWmNUWmVUWmVUXGRUXGNUXGVVXGRUW2RVXGRUXGRUW2RUW2RUW2RUXGRTWmRUW2RUW2RUW2RUW2VUW2RUW2RUW2RUWmRUW2RVW2RUW2RUW2RUW2RUWmRUW2T///9nDNUkAAAAMnRSTlMAAgUHDQ4RFh4lNTdNUVJVYWJlaW5wcXd8fYiOsrO1vcLFxtHZ5+7w8fL19/j5+vv8/cnWIDMAAAABYktHRDSpsen9AAAA8ElEQVQ4y+2SVxOCMBCEUewdFXsvWLHt//9vEg+UkFxwfHafMpdvkt2btaxQ9ZGihqVR4QRVrsq1jsF8M+zHdXtoyC2mbjkx074JqL8A7TsGGlCKU3/NVFKAh3iOPc0UUgxr8SS10E4P6KZ7FB7muKSBfmQjLUxoRQWTYbSf6cKwIKNfwCAFrUKr4KpT4hsma1dlGpbQBCumYQnZOJtzyIEkMNd0KULonwMza9k/CxZwGsf9s2DWv9p0yuNg9LjEjDxOsDCCFS/y6FWMoFV0yKNTNK/n6z3+wZ9BH3YaRw1/94AXNeTTA17UkKgHvERDnvUIWGgOKx/VAAAAAElFTkSuQmCC"}}]);