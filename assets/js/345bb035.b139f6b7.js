"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[74412],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7894:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(83117),r=(a(67294),a(3905)),i=a(34259),o=a(18679),s=a(59943);const l={slug:"implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family",title:"Implementing a Serverless SFTP Gateway using the AWS Transfer Family",authors:["jeffreyaven"],draft:!1,image:"/img/blog/aws-transfer-for-sftp.png",tags:["aws","aws transfer family","serverless","snowflake","snowpipe","sftp","managed file transfer"],keywords:["aws","aws transfer family","serverless","snowflake","snowpipe","sftp","managed file transfer"],description:"An example implementation of an SFTP gateway using the AWS Transfer Family service, to store client data in an encrypted S3 bucket."},p=void 0,c={permalink:"/implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2022-02-23-implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family/index.md",source:"@site/blog/2022-02-23-implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family/index.md",title:"Implementing a Serverless SFTP Gateway using the AWS Transfer Family",description:"An example implementation of an SFTP gateway using the AWS Transfer Family service, to store client data in an encrypted S3 bucket.",date:"2022-02-23T00:00:00.000Z",formattedDate:"February 23, 2022",tags:[{label:"aws",permalink:"/tags/aws"},{label:"aws transfer family",permalink:"/tags/aws-transfer-family"},{label:"serverless",permalink:"/tags/serverless"},{label:"snowflake",permalink:"/tags/snowflake"},{label:"snowpipe",permalink:"/tags/snowpipe"},{label:"sftp",permalink:"/tags/sftp"},{label:"managed file transfer",permalink:"/tags/managed-file-transfer"}],readingTime:5.935,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family",title:"Implementing a Serverless SFTP Gateway using the AWS Transfer Family",authors:["jeffreyaven"],draft:!1,image:"/img/blog/aws-transfer-for-sftp.png",tags:["aws","aws transfer family","serverless","snowflake","snowpipe","sftp","managed file transfer"],keywords:["aws","aws transfer family","serverless","snowflake","snowpipe","sftp","managed file transfer"],description:"An example implementation of an SFTP gateway using the AWS Transfer Family service, to store client data in an encrypted S3 bucket."},prevItem:{title:"Scaling up Prefect with GitStorage",permalink:"/scaling-up-prefect-with-gitstorage"},nextItem:{title:"Simple SSO with an external IdP using Active Directory and Okta",permalink:"/simple-sso-with-an-external-idp-using-active-directory-and-okta"}},u={authorsImageUrls:[void 0]},d=[{value:"Architecture",id:"architecture",level:2},{value:"Setup",id:"setup",level:2},{value:"Setup the Service",id:"setup-the-service",level:2},{value:"Create the S3 Bucket",id:"create-the-s3-bucket",level:2},{value:"Create a Customer Managed KMS Key",id:"create-a-customer-managed-kms-key",level:2},{value:"User Directory Mappings",id:"user-directory-mappings",level:2},{value:"Create a Scoped Down Policy",id:"create-a-scoped-down-policy",level:3},{value:"Create a user",id:"create-a-user",level:3},{value:"Create a Route 53 CNAME record",id:"create-a-route-53-cname-record",level:2},{value:"Create some shared Tags",id:"create-some-shared-tags",level:2},{value:"Pull it all together!",id:"pull-it-all-together",level:2}],m={toc:d};function f(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When you want the SFTP service without the SFTP Server.  ")),(0,r.kt)("p",null,"In implementing data platforms with external data providers, it is common to use a managed file transfer platform or an SFTP gateway as an entry point for providers to supply data to your system.  "),(0,r.kt)("p",null,"Often in past implementations this would involve deploying a sever (typically a Linux VM) and provisioning and configuring an SFTP service.  If you wanted the data sent by clients to be copied to another storage medium (such as S3 or EFS) you would need to roll your own code or subscribe to a marketplace offering to do so.  "),(0,r.kt)("p",null,"I recently trialled the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/transfer/index.html"},"AWS Transfer Family SFTP gateway")," offering from AWS and sharing my adventures here.  "),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"In this reference architecture, we are deploying an SFTP service which uses a path in an S3 bucket as a user\u2019s home directory.  Objects in the bucket are encrypted with a customer managed KMS key.  The SFTP server front end address is mapped to a vanity URL using Route53.  The bucket and path are integrated with a ",(0,r.kt)("inlineCode",{parentName:"p"},"STORAGE INTEGRATION"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"STAGE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PIPE")," definition in Snowflake.  The Snowflake bits are covered in more detail in this blog: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"automating-snowflake-role-based-storage-integration-for-aws"},"Automating Snowflake Role Based Storage Integration for AWS")),".  This article just details the AWS Transfer Family SFTP setup."),(0,r.kt)(i.Z,{defaultValue:"architecture",values:[{label:"Architecture",value:"architecture"},{label:"PlantUML",value:"plantuml"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"architecture",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(51425).Z},(0,r.kt)("img",{alt:"AWS Transfer SFTP Architecture",src:a(71261).Z,width:"1014",height:"725"}))," ")),(0,r.kt)(o.Z,{value:"plantuml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@startuml\n\nskinparam rectangle<<boundary>> {\n    Shadowing false\n    StereotypeFontSize 0\n    FontColor #444444\n    BorderColor #444444\n    BorderStyle dashed\n}\n\nskinparam defaultTextAlignment center\n\n!$imgroot = "https://github.com/avensolutions/plantuml-cloud-image-library/raw/main/images"\n\n!unquoted procedure $AwsS3($alias, $label, $techn, $descr="", $stereo="AWS S3")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/Storage/S3.png>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Kms($alias, $label, $techn, $descr="", $stereo="AWS KMS")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/SecurityIdentityCompliance/kms.png{scale=0.80}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Route53($alias, $label, $techn, $descr="", $stereo="AWS Route53")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/Networking/route53.png{scale=0.80}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $AwsTransferFamily($alias, $label, $techn, $descr="", $stereo="AWS Transfer Family")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/MigrationTransfer/TransferFamily.png>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Data($alias, $label, $techn, $descr="", $stereo="Data")\n    rectangle "==$label\\n\\n<img:$imgroot/general/documents.png>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Snowpipe($alias, $label, $techn, $descr="", $stereo="Snowpipe")\n    rectangle "==$label\\n\\n<img:$imgroot/snowflake/snowpipe.png{scale=0.60}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $SnowflakeDb($alias, $label, $techn, $descr="", $stereo="Snowflake DB")\n    rectangle "==$label\\n\\n<img:$imgroot/snowflake/snowflakeDB.png{scale=0.70}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n$Data(supplier, Data Supplier, External Client)\n\nrectangle "AWS Environment" <<boundary>> {\n    $AwsTransferFamily(sftpgw, SFTP/FTPS Gateway, AWS Transfer Family)\n    $AwsS3(s3staging, Staging Bucket, AWS S3 Bucket)\n    $Kms(kms, KMS Key, Customer Managed Key)\n    $Route53(r53, CNAME Record, Route53 Record)\n}\n\nrectangle "Snowflake Environment" <<boundary>> {\n    $Snowpipe(snowpipe, Snowpipe, Snowpipe)\n    $SnowflakeDb(db, Snowflake DB, Snowflake DB)\n}\n\nr53 -[hidden]D- sftpgw\nsupplier -> r53 : resolves name\nr53 -> supplier : gets address\nsupplier -RIGHT-> sftpgw : SFTP\nsftpgw -DOWN-> kms : uses\nsftpgw -RIGHT-> s3staging: writes to\ns3staging -RIGHT-> snowpipe: writes to\nsnowpipe -DOWN-> kms: uses\nsnowpipe -RIGHT-> db: writes to\n\n@enduml\n')))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"The steps to set up this pattern are detailed below.  "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This example uses the Jsonnet/CloudFormation pattern described in this article: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"simplifying-large-cloudformation-templates-using-jsonnet"},"Simplifying Large CloudFormation Templates using Jsonnet")),".  This is a useful pattern for breaking up a monolithic CloudFormation template at design time to more manageable resource scoped documents, then pre-processing these in a CI routine (GitLab CI, GitHub Actions, etc) to create a complete template.")),(0,r.kt)("h2",{id:"setup-the-service"},"Setup the Service"),(0,r.kt)("p",null,"To setup the SFTP transfer service use the ",(0,r.kt)("inlineCode",{parentName:"p"},"AWS::Transfer::Server")," resource type as shown below:  "),(0,r.kt)(s.Z,{id:"c8b4ce8ab478715753aab73d478f4fcd",mdxType:"Gist"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"tags")," shown to display the custom hostname (used as a vanity url) in the Transfer UI in the AWS console.")),(0,r.kt)("h2",{id:"create-the-s3-bucket"},"Create the S3 Bucket"),(0,r.kt)("p",null,"Create a bucket which will be used to store incoming files sent via SFTP.  "),(0,r.kt)(s.Z,{id:"82eb106bc13f1a888f823cc71a7ff933",mdxType:"Gist"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This example logs to a logging bucket, not shown for brevity.")),(0,r.kt)("h2",{id:"create-a-customer-managed-kms-key"},"Create a Customer Managed KMS Key"),(0,r.kt)("p",null,"Create a customer managed KMS key which will be used to encrypt data stored in the S3 bucket created in the previous step.  "),(0,r.kt)(s.Z,{id:"2c563411442c4541584815389de8a3b5",mdxType:"Gist"}),(0,r.kt)("h1",{id:"create-an-iam-role-to-access-the-bucket"},"Create an IAM role to access the bucket"),(0,r.kt)("p",null,"Create an IAM role which will be assumed by the AWS Transfer Service to read and write to the S3 staging bucket.  "),(0,r.kt)(s.Z,{id:"57e23a5c99c22f5550e99b086db5f9f1",mdxType:"Gist"}),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"You must assign permissions to use the KMS key created previously, failure to do so will result in errors such as:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"remote readdir(): Permission denied\n"))),(0,r.kt)("h2",{id:"user-directory-mappings"},"User Directory Mappings"),(0,r.kt)("p",null,"An SFTP users home directory is mapped to a path in your S3 bucket.  It is recommended to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOGICAL")," ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeDirectoryType"),".  This will prevent SFTP users from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"seeing or being able to access other users home directories"),(0,r.kt)("li",{parentName:"ul"},"seeing the bucket name or paths in the bucket above their home directory")),(0,r.kt)("p",null,"There are some trade offs for this which can make deployment a little more challenging but we will cover off the steps from here."),(0,r.kt)("h3",{id:"create-a-scoped-down-policy"},"Create a Scoped Down Policy"),(0,r.kt)("p",null,'A "scoped down" policy prevents users from seeing or accessing objects in other users home directories.  This is a text file that will be sourced as a string into the ',(0,r.kt)("inlineCode",{parentName:"p"},"Policy")," parameter of each SFTP user you create."),(0,r.kt)(s.Z,{id:"5e876bbf95b1b36355fa8af868572a26",mdxType:"Gist"}),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOGICAL")," ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeDirectoryType")," you don't have access to variables which represent the bucket, so this needs to be hard coded in the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.txt")," document.  "),(0,r.kt)("p",{parentName:"admonition"},"Also if you are using a customer managed KMS key to encrypt the data in the bucket (which you should be), you need to add permissions to the key - which again cannot be represented by a variable.  "),(0,r.kt)("p",{parentName:"admonition"},"Failure to do so will result in errors when trying to ",(0,r.kt)("inlineCode",{parentName:"p"},"ls"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"put"),", etc into the user's home directory such as:  "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"Couldn't read directory: Permission denied\nCouldn't close file: Permission denied\n")),(0,r.kt)("p",{parentName:"admonition"},"Since these properties are unlikely to change for the lifetime of your service this should not be an issue.  ")),(0,r.kt)("h3",{id:"create-a-user"},"Create a user"),(0,r.kt)("p",null,"Users are identified by a username and an SSH key, providing the public key to the server.  A sample user is shown here:  "),(0,r.kt)(s.Z,{id:"1b946b07374b78e0aca380317729bfa9",mdxType:"Gist"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"As discussed previously, it is recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"LOGICAL")," home directory mappings, which prevents users from seeing information about the bucket or other directories on the SFTP server (including other users directories).")),(0,r.kt)("h2",{id:"create-a-route-53-cname-record"},"Create a Route 53 CNAME record"),(0,r.kt)("p",null,"Ideally you want to use a vanity url for users to access your SFTP service, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"sftp.yourcompany.com"),".  This can be accomplished by using a Route 53 CNAME record as shown here:  "),(0,r.kt)(s.Z,{id:"0098851edc8d60b45534f6b1134be8cd",mdxType:"Gist"}),(0,r.kt)("h2",{id:"create-some-shared-tags"},"Create some shared Tags"),(0,r.kt)("p",null,"You would have noticed a shared ",(0,r.kt)("inlineCode",{parentName:"p"},"Tags")," definition in many of the ",(0,r.kt)("inlineCode",{parentName:"p"},"libsonnet")," files shown, an example ",(0,r.kt)("inlineCode",{parentName:"p"},"Tags")," source file is shown here:  "),(0,r.kt)(s.Z,{id:"8323d49f1045d2cd8c874d5a00e82a5e",mdxType:"Gist"}),(0,r.kt)("h2",{id:"pull-it-all-together"},"Pull it all together!"),(0,r.kt)("p",null,"Now that we have all of the input files, lets pull them all together in a ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonnet")," file, which will be preprocessed in a CI process to create a template we can deploy with AWS CloudFormation.  "),(0,r.kt)(s.Z,{id:"f56065c075af9cc33853b0624f6ef636",mdxType:"Gist"}),(0,r.kt)("p",null,"Your customers would now connect to your service using they private key which corresponds to the public key they supplied to you in one of the previous steps, for example:    "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sftp -i mysftpkey jeffrey_aven@sftp.yourdomain.com\n")),(0,r.kt)("p",null,"Add more users and enjoy!"))}f.isMDXComponent=!0},18679:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(34334);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(83117),r=a(67294),i=a(34334),o=a(51048),s=a(33609),l=a(1943),p=a(72957);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:m,groupId:f,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,s.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:v}=(0,l.U)(),[S,T]=(0,r.useState)(k),$=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=f){const e=w[f];null!=e&&e!==S&&y.some((t=>t.value===e))&&T(e)}const N=e=>{const t=e.currentTarget,a=$.indexOf(t),n=y[a].value;n!==S&&(C(t),T(n),null!=f&&v(f,String(n)))},A=e=>{var t;let a=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const t=$.indexOf(e.currentTarget)+1;a=$[t]??$[0];break}case"ArrowLeft":{const t=$.indexOf(e.currentTarget)-1;a=$[t]??$[$.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},h)},y.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>$.push(e),onKeyDown:A,onClick:N},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":S===t})}),a??t)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},51425:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/aws-transfer-sftp-architecture-7964e0e7ee271b7c690605e7cfa8a72d.png"},59943:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294);a(45697);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}const o=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,a=e.file;return"https://gist.github.com/"+t+".js"+(a?"?file="+a:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,a=e.file,n=this.iframeNode,r=n.document;n.contentDocument?r=n.contentDocument:n.contentWindow&&(r=n.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(a?"gist-"+t+"-"+a:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";r.open(),r.writeln(i),r.close()},t.prototype.render=function(){var e=this,t=this.props,a=t.id,r=t.file;return n.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:r?"gist-"+a+"-"+r:"gist-"+a})},t}(n.PureComponent)},71261:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-transfer-sftp-architecture-7964e0e7ee271b7c690605e7cfa8a72d.png"}}]);