"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[34659],{30433:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(34334),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65559:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(83117),r=n(67294),i=n(34334),o=n(5730),s=n(20636),l=n(76602),u=n(63735),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,f=e.values,h=e.groupId,g=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.U)(),S=v.tabGroupChoices,T=v.setTabGroupChoices,$=(0,r.useState)(w),C=$[0],N=$[1],A=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var x=S[h];null!=x&&x!==C&&b.some((function(e){return e.value===x}))&&N(x)}var F=function(e){var t=e.currentTarget,n=A.indexOf(t),a=b[n].value;a!==C&&(P(t),N(a),null!=h&&T(h,String(a)))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=A.indexOf(e.currentTarget)+1;n=null!=(a=A[r])?a:A[0];break;case"ArrowLeft":var i,o=A.indexOf(e.currentTarget)-1;n=null!=(i=A[o])?i:A[A.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},g)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return A.push(e)},onKeyDown:O,onFocus:F,onClick:F},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(y.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},71649:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(65559),s=n(30433),l=n(59943),u=["components"],c={slug:"implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family",title:"Implementing a Serverless SFTP Gateway using the AWS Transfer Family",authors:["jeffreyaven"],draft:!1,image:"/img/blog/aws-transfer-for-sftp.png",tags:["aws","aws transfer family","serverless","snowflake","snowpipe","sftp","managed file transfer"],keywords:["aws","aws transfer family","serverless","snowflake","snowpipe","sftp","managed file transfer"],description:"An example implementation of an SFTP gateway using the AWS Transfer Family service, to store client data in an encrypted S3 bucket."},p=void 0,d={permalink:"/implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2022-02-23-implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family/index.md",source:"@site/blog/2022-02-23-implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family/index.md",title:"Implementing a Serverless SFTP Gateway using the AWS Transfer Family",description:"An example implementation of an SFTP gateway using the AWS Transfer Family service, to store client data in an encrypted S3 bucket.",date:"2022-02-23T00:00:00.000Z",formattedDate:"February 23, 2022",tags:[{label:"aws",permalink:"/tags/aws"},{label:"aws transfer family",permalink:"/tags/aws-transfer-family"},{label:"serverless",permalink:"/tags/serverless"},{label:"snowflake",permalink:"/tags/snowflake"},{label:"snowpipe",permalink:"/tags/snowpipe"},{label:"sftp",permalink:"/tags/sftp"},{label:"managed file transfer",permalink:"/tags/managed-file-transfer"}],readingTime:5.935,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family",title:"Implementing a Serverless SFTP Gateway using the AWS Transfer Family",authors:["jeffreyaven"],draft:!1,image:"/img/blog/aws-transfer-for-sftp.png",tags:["aws","aws transfer family","serverless","snowflake","snowpipe","sftp","managed file transfer"],keywords:["aws","aws transfer family","serverless","snowflake","snowpipe","sftp","managed file transfer"],description:"An example implementation of an SFTP gateway using the AWS Transfer Family service, to store client data in an encrypted S3 bucket."},prevItem:{title:"Scaling up Prefect with GitStorage",permalink:"/scaling-up-prefect-with-gitstorage"},nextItem:{title:"Simple SSO with an external IdP using Active Directory and Okta",permalink:"/simple-sso-with-an-external-idp-using-active-directory-and-okta"}},m={authorsImageUrls:[void 0]},f=[{value:"Architecture",id:"architecture",level:2},{value:"Setup",id:"setup",level:2},{value:"Setup the Service",id:"setup-the-service",level:2},{value:"Create the S3 Bucket",id:"create-the-s3-bucket",level:2},{value:"Create a Customer Managed KMS Key",id:"create-a-customer-managed-kms-key",level:2},{value:"User Directory Mappings",id:"user-directory-mappings",level:2},{value:"Create a Scoped Down Policy",id:"create-a-scoped-down-policy",level:3},{value:"Create a user",id:"create-a-user",level:3},{value:"Create a Route 53 CNAME record",id:"create-a-route-53-cname-record",level:2},{value:"Create some shared Tags",id:"create-some-shared-tags",level:2},{value:"Pull it all together!",id:"pull-it-all-together",level:2}],h={toc:f};function g(e){var t=e.components,c=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When you want the SFTP service without the SFTP Server.  ")),(0,i.kt)("p",null,"In implementing data platforms with external data providers, it is common to use a managed file transfer platform or an SFTP gateway as an entry point for providers to supply data to your system.  "),(0,i.kt)("p",null,"Often in past implementations this would involve deploying a sever (typically a Linux VM) and provisioning and configuring an SFTP service.  If you wanted the data sent by clients to be copied to another storage medium (such as S3 or EFS) you would need to roll your own code or subscribe to a marketplace offering to do so.  "),(0,i.kt)("p",null,"I recently trialled the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/transfer/index.html"},"AWS Transfer Family SFTP gateway")," offering from AWS and sharing my adventures here.  "),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"In this reference architecture, we are deploying an SFTP service which uses a path in an S3 bucket as a user\u2019s home directory.  Objects in the bucket are encrypted with a customer managed KMS key.  The SFTP server front end address is mapped to a vanity URL using Route53.  The bucket and path are integrated with a ",(0,i.kt)("inlineCode",{parentName:"p"},"STORAGE INTEGRATION"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"STAGE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PIPE")," definition in Snowflake.  The Snowflake bits are covered in more detail in this blog: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"automating-snowflake-role-based-storage-integration-for-aws"},"Automating Snowflake Role Based Storage Integration for AWS")),".  This article just details the AWS Transfer Family SFTP setup."),(0,i.kt)(o.Z,{defaultValue:"architecture",values:[{label:"Architecture",value:"architecture"},{label:"PlantUML",value:"plantuml"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"architecture",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(51425).Z},(0,i.kt)("img",{alt:"AWS Transfer SFTP Architecture",src:n(71261).Z,width:"1014",height:"725"}))," ")),(0,i.kt)(s.Z,{value:"plantuml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'@startuml\n\nskinparam rectangle<<boundary>> {\n    Shadowing false\n    StereotypeFontSize 0\n    FontColor #444444\n    BorderColor #444444\n    BorderStyle dashed\n}\n\nskinparam defaultTextAlignment center\n\n!$imgroot = "https://github.com/avensolutions/plantuml-cloud-image-library/raw/main/images"\n\n!unquoted procedure $AwsS3($alias, $label, $techn, $descr="", $stereo="AWS S3")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/Storage/S3.png>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Kms($alias, $label, $techn, $descr="", $stereo="AWS KMS")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/SecurityIdentityCompliance/kms.png{scale=0.80}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Route53($alias, $label, $techn, $descr="", $stereo="AWS Route53")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/Networking/route53.png{scale=0.80}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $AwsTransferFamily($alias, $label, $techn, $descr="", $stereo="AWS Transfer Family")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/MigrationTransfer/TransferFamily.png>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Data($alias, $label, $techn, $descr="", $stereo="Data")\n    rectangle "==$label\\n\\n<img:$imgroot/general/documents.png>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Snowpipe($alias, $label, $techn, $descr="", $stereo="Snowpipe")\n    rectangle "==$label\\n\\n<img:$imgroot/snowflake/snowpipe.png{scale=0.60}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $SnowflakeDb($alias, $label, $techn, $descr="", $stereo="Snowflake DB")\n    rectangle "==$label\\n\\n<img:$imgroot/snowflake/snowflakeDB.png{scale=0.70}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n$Data(supplier, Data Supplier, External Client)\n\nrectangle "AWS Environment" <<boundary>> {\n    $AwsTransferFamily(sftpgw, SFTP/FTPS Gateway, AWS Transfer Family)\n    $AwsS3(s3staging, Staging Bucket, AWS S3 Bucket)\n    $Kms(kms, KMS Key, Customer Managed Key)\n    $Route53(r53, CNAME Record, Route53 Record)\n}\n\nrectangle "Snowflake Environment" <<boundary>> {\n    $Snowpipe(snowpipe, Snowpipe, Snowpipe)\n    $SnowflakeDb(db, Snowflake DB, Snowflake DB)\n}\n\nr53 -[hidden]D- sftpgw\nsupplier -> r53 : resolves name\nr53 -> supplier : gets address\nsupplier -RIGHT-> sftpgw : SFTP\nsftpgw -DOWN-> kms : uses\nsftpgw -RIGHT-> s3staging: writes to\ns3staging -RIGHT-> snowpipe: writes to\nsnowpipe -DOWN-> kms: uses\nsnowpipe -RIGHT-> db: writes to\n\n@enduml\n')))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"The steps to set up this pattern are detailed below.  "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This example uses the Jsonnet/CloudFormation pattern described in this article: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"simplifying-large-cloudformation-templates-using-jsonnet"},"Simplifying Large CloudFormation Templates using Jsonnet")),".  This is a useful pattern for breaking up a monolithic CloudFormation template at design time to more manageable resource scoped documents, then pre-processing these in a CI routine (GitLab CI, GitHub Actions, etc) to create a complete template.")),(0,i.kt)("h2",{id:"setup-the-service"},"Setup the Service"),(0,i.kt)("p",null,"To setup the SFTP transfer service use the ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS::Transfer::Server")," resource type as shown below:  "),(0,i.kt)(l.Z,{id:"c8b4ce8ab478715753aab73d478f4fcd",mdxType:"Gist"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"tags")," shown to display the custom hostname (used as a vanity url) in the Transfer UI in the AWS console.")),(0,i.kt)("h2",{id:"create-the-s3-bucket"},"Create the S3 Bucket"),(0,i.kt)("p",null,"Create a bucket which will be used to store incoming files sent via SFTP.  "),(0,i.kt)(l.Z,{id:"82eb106bc13f1a888f823cc71a7ff933",mdxType:"Gist"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This example logs to a logging bucket, not shown for brevity.")),(0,i.kt)("h2",{id:"create-a-customer-managed-kms-key"},"Create a Customer Managed KMS Key"),(0,i.kt)("p",null,"Create a customer managed KMS key which will be used to encrypt data stored in the S3 bucket created in the previous step.  "),(0,i.kt)(l.Z,{id:"2c563411442c4541584815389de8a3b5",mdxType:"Gist"}),(0,i.kt)("h1",{id:"create-an-iam-role-to-access-the-bucket"},"Create an IAM role to access the bucket"),(0,i.kt)("p",null,"Create an IAM role which will be assumed by the AWS Transfer Service to read and write to the S3 staging bucket.  "),(0,i.kt)(l.Z,{id:"57e23a5c99c22f5550e99b086db5f9f1",mdxType:"Gist"}),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"You must assign permissions to use the KMS key created previously, failure to do so will result in errors such as:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"remote readdir(): Permission denied\n"))),(0,i.kt)("h2",{id:"user-directory-mappings"},"User Directory Mappings"),(0,i.kt)("p",null,"An SFTP users home directory is mapped to a path in your S3 bucket.  It is recommended to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"LOGICAL")," ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeDirectoryType"),".  This will prevent SFTP users from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"seeing or being able to access other users home directories"),(0,i.kt)("li",{parentName:"ul"},"seeing the bucket name or paths in the bucket above their home directory")),(0,i.kt)("p",null,"There are some trade offs for this which can make deployment a little more challenging but we will cover off the steps from here."),(0,i.kt)("h3",{id:"create-a-scoped-down-policy"},"Create a Scoped Down Policy"),(0,i.kt)("p",null,'A "scoped down" policy prevents users from seeing or accessing objects in other users home directories.  This is a text file that will be sourced as a string into the ',(0,i.kt)("inlineCode",{parentName:"p"},"Policy")," parameter of each SFTP user you create."),(0,i.kt)(l.Z,{id:"5e876bbf95b1b36355fa8af868572a26",mdxType:"Gist"}),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"LOGICAL")," ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeDirectoryType")," you don't have access to variables which represent the bucket, so this needs to be hard coded in the ",(0,i.kt)("inlineCode",{parentName:"p"},"policy.txt")," document.  "),(0,i.kt)("p",{parentName:"admonition"},"Also if you are using a customer managed KMS key to encrypt the data in the bucket (which you should be), you need to add permissions to the key - which again cannot be represented by a variable.  "),(0,i.kt)("p",{parentName:"admonition"},"Failure to do so will result in errors when trying to ",(0,i.kt)("inlineCode",{parentName:"p"},"ls"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"put"),", etc into the user's home directory such as:  "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"Couldn't read directory: Permission denied\nCouldn't close file: Permission denied\n")),(0,i.kt)("p",{parentName:"admonition"},"Since these properties are unlikely to change for the lifetime of your service this should not be an issue.  ")),(0,i.kt)("h3",{id:"create-a-user"},"Create a user"),(0,i.kt)("p",null,"Users are identified by a username and an SSH key, providing the public key to the server.  A sample user is shown here:  "),(0,i.kt)(l.Z,{id:"1b946b07374b78e0aca380317729bfa9",mdxType:"Gist"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"As discussed previously, it is recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"LOGICAL")," home directory mappings, which prevents users from seeing information about the bucket or other directories on the SFTP server (including other users directories).")),(0,i.kt)("h2",{id:"create-a-route-53-cname-record"},"Create a Route 53 CNAME record"),(0,i.kt)("p",null,"Ideally you want to use a vanity url for users to access your SFTP service, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"sftp.yourcompany.com"),".  This can be accomplished by using a Route 53 CNAME record as shown here:  "),(0,i.kt)(l.Z,{id:"0098851edc8d60b45534f6b1134be8cd",mdxType:"Gist"}),(0,i.kt)("h2",{id:"create-some-shared-tags"},"Create some shared Tags"),(0,i.kt)("p",null,"You would have noticed a shared ",(0,i.kt)("inlineCode",{parentName:"p"},"Tags")," definition in many of the ",(0,i.kt)("inlineCode",{parentName:"p"},"libsonnet")," files shown, an example ",(0,i.kt)("inlineCode",{parentName:"p"},"Tags")," source file is shown here:  "),(0,i.kt)(l.Z,{id:"8323d49f1045d2cd8c874d5a00e82a5e",mdxType:"Gist"}),(0,i.kt)("h2",{id:"pull-it-all-together"},"Pull it all together!"),(0,i.kt)("p",null,"Now that we have all of the input files, lets pull them all together in a ",(0,i.kt)("inlineCode",{parentName:"p"},"jsonnet")," file, which will be preprocessed in a CI process to create a template we can deploy with AWS CloudFormation.  "),(0,i.kt)(l.Z,{id:"f56065c075af9cc33853b0624f6ef636",mdxType:"Gist"}),(0,i.kt)("p",null,"Your customers would now connect to your service using they private key which corresponds to the public key they supplied to you in one of the previous steps, for example:    "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sftp -i mysftpkey jeffrey_aven@sftp.yourdomain.com\n")),(0,i.kt)("p",null,"Add more users and enjoy!"))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51425:function(e,t,n){t.Z=n.p+"assets/files/aws-transfer-sftp-architecture-7964e0e7ee271b7c690605e7cfa8a72d.png"},59943:function(e,t,n){var a=n(67294);n(45697);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var o=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,r=a.document;a.contentDocument?r=a.contentDocument:a.contentWindow&&(r=a.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";r.open(),r.writeln(i),r.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,r=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:r?"gist-"+n+"-"+r:"gist-"+n})},t}(a.PureComponent);t.Z=o},71261:function(e,t,n){t.Z=n.p+"assets/images/aws-transfer-sftp-architecture-7964e0e7ee271b7c690605e7cfa8a72d.png"}}]);