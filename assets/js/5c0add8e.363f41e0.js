"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[68015],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294);function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(83117),o=n(67294),r=n(72389),l=n(30662),i=n(86010),s="tabItem_LplD";function c(e){var t,n,r,c=e.lazy,u=e.block,d=e.defaultValue,p=e.values,f=e.groupId,m=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==w&&!h.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),v=y.tabGroupChoices,b=y.setTabGroupChoices,S=(0,o.useState)(w),A=S[0],N=S[1],C=[],_=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var T=v[f];null!=T&&T!==A&&h.some((function(e){return e.value===T}))&&N(T)}var I=function(e){var t=e.currentTarget,n=C.indexOf(t),a=h[n].value;a!==A&&(_(t),N(a),null!=f&&b(f,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var o=C.indexOf(e.currentTarget)-1;n=C[o]||C[C.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},m)},h.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return C.push(e)},onKeyDown:E,onFocus:I,onClick:I},r,{className:(0,i.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":A===t})}),null!=n?n:t)}))),c?(0,o.cloneElement)(g.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function u(e){var t=(0,r.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},72987:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),l=n(9877),i=n(58215),s=n(59943),c=["components"],u={slug:"automating-snowflake-role-based-storage-integration-for-aws",title:"Automating Snowflake Role Based Storage Integration for AWS",authors:["jeffreyaven"],draft:!1,image:"/img/blog/snowflake-storage-integration-aws-image.png",tags:["aws","snowflake","snowpipe","powershell","snowsql","infrastructureascode","iac","cloudautomation"],keywords:["aws","snowflake","snowpipe","powershell","snowsql","infrastructureascode","iac","cloudautomation"],description:"Automate the creation of a Storage Integration in Snowflake which allows a Snowflake External Stage to access objects in your AWS S3 bucket."},d=void 0,p={permalink:"/automating-snowflake-role-based-storage-integration-for-aws",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2021-12-18-automating-snowflake-role-based-storage-integration-for-aws/index.md",source:"@site/blog/2021-12-18-automating-snowflake-role-based-storage-integration-for-aws/index.md",title:"Automating Snowflake Role Based Storage Integration for AWS",description:"Automate the creation of a Storage Integration in Snowflake which allows a Snowflake External Stage to access objects in your AWS S3 bucket.",date:"2021-12-18T00:00:00.000Z",formattedDate:"December 18, 2021",tags:[{label:"aws",permalink:"/tags/aws"},{label:"snowflake",permalink:"/tags/snowflake"},{label:"snowpipe",permalink:"/tags/snowpipe"},{label:"powershell",permalink:"/tags/powershell"},{label:"snowsql",permalink:"/tags/snowsql"},{label:"infrastructureascode",permalink:"/tags/infrastructureascode"},{label:"iac",permalink:"/tags/iac"},{label:"cloudautomation",permalink:"/tags/cloudautomation"}],readingTime:4.085,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"automating-snowflake-role-based-storage-integration-for-aws",title:"Automating Snowflake Role Based Storage Integration for AWS",authors:["jeffreyaven"],draft:!1,image:"/img/blog/snowflake-storage-integration-aws-image.png",tags:["aws","snowflake","snowpipe","powershell","snowsql","infrastructureascode","iac","cloudautomation"],keywords:["aws","snowflake","snowpipe","powershell","snowsql","infrastructureascode","iac","cloudautomation"],description:"Automate the creation of a Storage Integration in Snowflake which allows a Snowflake External Stage to access objects in your AWS S3 bucket."},prevItem:{title:"Converting to local time in AWS Lambda using Node.js",permalink:"/converting-to-local-time-in-aws-lambda-using-nodejs"},nextItem:{title:"Simplifying Large CloudFormation Templates using Jsonnet",permalink:"/simplifying-large-cloudformation-templates-using-jsonnet"}},f={authorsImageUrls:[void 0]},m=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:2},{value:"The Code",id:"the-code",level:2},{value:"Create Policy Documents",id:"create-policy-documents",level:3},{value:"Create Snowflake Access Policy",id:"create-snowflake-access-policy",level:3},{value:"Create Snowflake IAM Role",id:"create-snowflake-iam-role",level:3},{value:"Attach S3 Access Policy to the Role",id:"attach-s3-access-policy-to-the-role",level:3},{value:"Create Storage Integration in Snowflake",id:"create-storage-integration-in-snowflake",level:3},{value:"Get <code>STORAGE_AWS_IAM_USER_ARN</code> and <code>STORAGE_AWS_EXTERNAL_ID</code>",id:"get-storage_aws_iam_user_arn-and-storage_aws_external_id",level:3},{value:"Update Snowflake Access Policy",id:"update-snowflake-access-policy",level:3},{value:"Test the Storage Integration",id:"test-the-storage-integration",level:3},{value:"Complete Code",id:"complete-code",level:3}],g={toc:m};function h(e){var t=e.components,u=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I have used the instructions ",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/data-load-snowpipe-auto-s3.html"},"here")," to configure Snowpipe for several projects.  "),(0,r.kt)("p",null,"Although it is accurate, it is entirely click-ops oriented.  I like to automate (and script) everything, so I have created a fully automated implementation using PowerShell, the ",(0,r.kt)("inlineCode",{parentName:"p"},"aws")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"snowsql")," CLIs.  "),(0,r.kt)("p",null,"The challenge is that you need to go back and forth between AWS and Snowflake, exchanging information from each platform with the other.  "),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"A Role Based Storage Integration in Snowflake allows a user (an AWS user arn) in your Snowflake account to use a role in your AWS account, which in turns enables access to S3 and KMS resources used by Snowflake for an external stage.  "),(0,r.kt)("p",null,"The following diagram explains this (along with the PlantUML code used to create the diagram..):  "),(0,r.kt)(l.Z,{defaultValue:"overview",values:[{label:"Overview",value:"overview"},{label:"PlantUML",value:"plantuml"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"overview",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(28383).Z},(0,r.kt)("img",{alt:"Snowflake S3 Storage Integration",src:n(30266).Z,width:"966",height:"468"}))," ")),(0,r.kt)(i.Z,{value:"plantuml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plantuml"},'@startuml\n\nskinparam rectangle<<boundary>> {\n    Shadowing false\n    StereotypeFontSize 0\n    FontColor #444444\n    BorderColor #444444\n    BorderStyle dashed\n}\n\nskinparam defaultTextAlignment center\n\n!$imgroot = "https://github.com/avensolutions/plantuml-cloud-image-library/raw/main/images"\n\n!unquoted procedure $AwsIam($alias, $label, $techn, $descr="", $stereo="AWS IAM")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/SecurityIdentityCompliance/Iam.png>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $AwsS3($alias, $label, $techn, $descr="", $stereo="AWS S3")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/Storage/S3.png>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Snowflake($alias, $label, $techn, $descr="", $stereo="Snowflake")\n    rectangle "==$label\\n\\n<img:$imgroot/snowflake/snowflakeDB.png{scale=0.70}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\nrectangle "Snowflake" <<boundary>> {\n    $AwsIam(user, Snowflake IAM User, AWS IAM User)\n    $Snowflake(int, Storage Integration, Storage Integration)\n    $Snowflake(stage, External Stage, Stage)\n}\n\nrectangle "AWS" <<boundary>> {\n    $AwsS3(bucket, Stage Bucket, AWS S3 Bucket)\n    $AwsIam(role, Snowflake Access Role, IAM Role)\n    $AwsIam(policy, Snowflake Access Policy, IAM Policy)\n}\n\nstage -UP-> int : uses\nint -RIGHT-> user : uses\nuser -RIGHT-> role : uses\npolicy -UP-> role : attached to\nrole -RIGHT-> bucket : allows access to\n\n@enduml\n')))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Some prerequisites (removed for brevity):  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"set the following variables in your script:  ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$accountid")," \u2013 your AWS account ID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$bucketname")," \u2013 the bucket you are letting Snowflake use as an External Stage"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$bucketarn")," \u2013 used in policy statements (you could easily derive this from the bucket name)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$kmskeyarn")," \u2013 assuming you are used customer managed encryption keys, your Snowflake storage integration will need to use these to decrypt data in the stage"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$prefix")," \u2013 if you want to set up granular access (on a key/path basis)")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Configure Snowflake access credentials using environment variables or using the ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.snowsql/config")," file (you should definitely use the ",(0,r.kt)("inlineCode",{parentName:"li"},"SNOWSQL_PWD")," env var for your password however)"),(0,r.kt)("li",{parentName:"ol"},"Configure access to AWS using ",(0,r.kt)("inlineCode",{parentName:"li"},"aws configure"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The actions performed in both AWS and Snowflake required privileged access on both platforms."))),(0,r.kt)("h2",{id:"the-code"},"The Code"),(0,r.kt)("p",null,"I have broken this into steps, the complete code is included at the end of the article.  "),(0,r.kt)("h3",{id:"create-policy-documents"},"Create Policy Documents"),(0,r.kt)("p",null,"You will need to create the policy documents to allow the role you will create to access objects in the target S3 bucket, you will also need an initial \u201cAssume Role\u201d policy document which will be used to create the role and then updated with information you will get from Snowflake later.  "),(0,r.kt)(s.Z,{id:"73d507126c114e6ee7398226cf004f55",mdxType:"Gist"}),(0,r.kt)("h3",{id:"create-snowflake-access-policy"},"Create Snowflake Access Policy"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"snowflake_policy_doc.json")," policy document created in the previous step to create a managed policy, you will need the ",(0,r.kt)("inlineCode",{parentName:"p"},"arn")," returned in a subsequent statement.  "),(0,r.kt)(s.Z,{id:"65be4f7c104f92fa3dbf9342813b3fd2",mdxType:"Gist"}),(0,r.kt)("h3",{id:"create-snowflake-iam-role"},"Create Snowflake IAM Role"),(0,r.kt)("p",null,"Use the initial ",(0,r.kt)("inlineCode",{parentName:"p"},"assume_role_policy_doc.json")," created to create a new Snowflake access role, you will need the ",(0,r.kt)("inlineCode",{parentName:"p"},"arn")," for this resource when you configure the Storage Integration in Snowflake.  "),(0,r.kt)(s.Z,{id:"e1bdd5316fe7cb106de1edcff77d8e2b",mdxType:"Gist"}),(0,r.kt)("h3",{id:"attach-s3-access-policy-to-the-role"},"Attach S3 Access Policy to the Role"),(0,r.kt)("p",null,"Now you will attach the ",(0,r.kt)("inlineCode",{parentName:"p"},"snowflake-access-policy")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"snowflake-access-role")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"$policyarn")," captured from the policy creation statement.  "),(0,r.kt)(s.Z,{id:"d2d54b43e379a26bd264a4c97939250c",mdxType:"Gist"}),(0,r.kt)("h3",{id:"create-storage-integration-in-snowflake"},"Create Storage Integration in Snowflake"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"snowsql")," CLI to create a Storage Integration in Snowflake supplying the ",(0,r.kt)("inlineCode",{parentName:"p"},"$rolearn")," captured from the role creation statement.  "),(0,r.kt)(s.Z,{id:"8e4617227bcd68be74c2a5d694c85f91",mdxType:"Gist"}),(0,r.kt)("h3",{id:"get-storage_aws_iam_user_arn-and-storage_aws_external_id"},"Get ",(0,r.kt)("inlineCode",{parentName:"h3"},"STORAGE_AWS_IAM_USER_ARN")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"STORAGE_AWS_EXTERNAL_ID")),(0,r.kt)("p",null,"You will need the ",(0,r.kt)("inlineCode",{parentName:"p"},"STORAGE_AWS_IAM_USER_ARN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"STORAGE_AWS_EXTERNAL_ID")," values for the storage integration you created in the previous statement, these will be used to updated the assume role policy in your ",(0,r.kt)("inlineCode",{parentName:"p"},"snowflake-access-role"),".  "),(0,r.kt)(s.Z,{id:"14dbf570030cad1a46d88d2e87006c8e",mdxType:"Gist"}),(0,r.kt)("h3",{id:"update-snowflake-access-policy"},"Update Snowflake Access Policy"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"STORAGE_AWS_IAM_USER_ARN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"STORAGE_AWS_EXTERNAL_ID")," values retrieved in the previous statements, you will update the ",(0,r.kt)("inlineCode",{parentName:"p"},"assume-role-policy")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"snowflake-access-role"),".  "),(0,r.kt)(s.Z,{id:"944c39205e142de9a76266f7f3cd260b",mdxType:"Gist"}),(0,r.kt)("h3",{id:"test-the-storage-integration"},"Test the Storage Integration"),(0,r.kt)("p",null,"To test the connectivity between your Snowflake account and your AWS external stage using the Storage Integartion just created, create a stage as shown here:  "),(0,r.kt)(s.Z,{id:"99c24e8c80c6556fe381cf64c841f739",mdxType:"Gist"}),(0,r.kt)("p",null,"Now list objects in the stage (assuming there are any).  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"list @my_stage;\n")),(0,r.kt)("p",null,"This should just work!  You can use your storage integration to create different stages for different paths in your External Stage bucket and use both of these objects to create Snowpipes for automated ingestion.  Enjoy!  "),(0,r.kt)("h3",{id:"complete-code"},"Complete Code"),(0,r.kt)("p",null,"The complete code for this example is shown here:  "),(0,r.kt)(s.Z,{id:"5f4cba25f4eac380d63f5829c56d0306",mdxType:"Gist"}))}h.isMDXComponent=!0},28383:function(e,t,n){t.Z=n.p+"assets/files/snowflake-aws-storage-integration-73b391aee0770e6c9f9f8c3ac06d5d8a.png"},59943:function(e,t,n){var a=n(67294);n(45697);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,o=a.document;a.contentDocument?o=a.contentDocument:a.contentWindow&&(o=a.contentWindow.document);var r='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";o.open(),o.writeln(r),o.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,o=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:o?"gist-"+n+"-"+o:"gist-"+n})},t}(a.PureComponent);t.Z=l},30266:function(e,t,n){t.Z=n.p+"assets/images/snowflake-aws-storage-integration-73b391aee0770e6c9f9f8c3ac06d5d8a.png"}}]);