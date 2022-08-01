"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[43689],{30433:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),o=n(34334),r="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},65559:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(83117),o=n(67294),r=n(34334),l=n(5730),i=n(20636),s=n(76602),c=n(63735),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,l=e.lazy,p=e.block,f=e.defaultValue,m=e.values,g=e.groupId,h=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(w,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===f?f:null!=(t=null!=f?f:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==b&&!w.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.U)(),S=v.tabGroupChoices,A=v.setTabGroupChoices,_=(0,o.useState)(b),C=_[0],N=_[1],T=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var E=S[g];null!=E&&E!==C&&w.some((function(e){return e.value===E}))&&N(E)}var x=function(e){var t=e.currentTarget,n=T.indexOf(t),a=w[n].value;a!==C&&(I(t),N(a),null!=g&&A(g,String(a)))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,o=T.indexOf(e.currentTarget)+1;n=null!=(a=T[o])?a:T[0];break;case"ArrowLeft":var r,l=T.indexOf(e.currentTarget)-1;n=null!=(r=T[l])?r:T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},h)},w.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:x,onClick:x},l,{className:(0,r.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function f(e){var t=(0,l.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},52044:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),l=n(65559),i=n(30433),s=n(59943),c=["components"],u={slug:"automating-snowflake-role-based-storage-integration-for-aws",title:"Automating Snowflake Role Based Storage Integration for AWS",authors:["jeffreyaven"],draft:!1,image:"/img/blog/snowflake-storage-integration-aws-image.png",tags:["aws","snowflake","snowpipe","powershell","snowsql","infrastructureascode","iac","cloudautomation"],keywords:["aws","snowflake","snowpipe","powershell","snowsql","infrastructureascode","iac","cloudautomation"],description:"Automate the creation of a Storage Integration in Snowflake which allows a Snowflake External Stage to access objects in your AWS S3 bucket."},d=void 0,p={permalink:"/automating-snowflake-role-based-storage-integration-for-aws",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2021-12-18-automating-snowflake-role-based-storage-integration-for-aws/index.md",source:"@site/blog/2021-12-18-automating-snowflake-role-based-storage-integration-for-aws/index.md",title:"Automating Snowflake Role Based Storage Integration for AWS",description:"Automate the creation of a Storage Integration in Snowflake which allows a Snowflake External Stage to access objects in your AWS S3 bucket.",date:"2021-12-18T00:00:00.000Z",formattedDate:"December 18, 2021",tags:[{label:"aws",permalink:"/tags/aws"},{label:"snowflake",permalink:"/tags/snowflake"},{label:"snowpipe",permalink:"/tags/snowpipe"},{label:"powershell",permalink:"/tags/powershell"},{label:"snowsql",permalink:"/tags/snowsql"},{label:"infrastructureascode",permalink:"/tags/infrastructureascode"},{label:"iac",permalink:"/tags/iac"},{label:"cloudautomation",permalink:"/tags/cloudautomation"}],readingTime:4.085,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"automating-snowflake-role-based-storage-integration-for-aws",title:"Automating Snowflake Role Based Storage Integration for AWS",authors:["jeffreyaven"],draft:!1,image:"/img/blog/snowflake-storage-integration-aws-image.png",tags:["aws","snowflake","snowpipe","powershell","snowsql","infrastructureascode","iac","cloudautomation"],keywords:["aws","snowflake","snowpipe","powershell","snowsql","infrastructureascode","iac","cloudautomation"],description:"Automate the creation of a Storage Integration in Snowflake which allows a Snowflake External Stage to access objects in your AWS S3 bucket."},prevItem:{title:"Converting to local time in AWS Lambda using Node.js",permalink:"/converting-to-local-time-in-aws-lambda-using-nodejs"},nextItem:{title:"Simplifying Large CloudFormation Templates using Jsonnet",permalink:"/simplifying-large-cloudformation-templates-using-jsonnet"}},f={authorsImageUrls:[void 0]},m=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:2},{value:"The Code",id:"the-code",level:2},{value:"Create Policy Documents",id:"create-policy-documents",level:3},{value:"Create Snowflake Access Policy",id:"create-snowflake-access-policy",level:3},{value:"Create Snowflake IAM Role",id:"create-snowflake-iam-role",level:3},{value:"Attach S3 Access Policy to the Role",id:"attach-s3-access-policy-to-the-role",level:3},{value:"Create Storage Integration in Snowflake",id:"create-storage-integration-in-snowflake",level:3},{value:"Get <code>STORAGE_AWS_IAM_USER_ARN</code> and <code>STORAGE_AWS_EXTERNAL_ID</code>",id:"get-storage_aws_iam_user_arn-and-storage_aws_external_id",level:3},{value:"Update Snowflake Access Policy",id:"update-snowflake-access-policy",level:3},{value:"Test the Storage Integration",id:"test-the-storage-integration",level:3},{value:"Complete Code",id:"complete-code",level:3}],g={toc:m};function h(e){var t=e.components,u=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I have used the instructions ",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/data-load-snowpipe-auto-s3.html"},"here")," to configure Snowpipe for several projects.  "),(0,r.kt)("p",null,"Although it is accurate, it is entirely click-ops oriented.  I like to automate (and script) everything, so I have created a fully automated implementation using PowerShell, the ",(0,r.kt)("inlineCode",{parentName:"p"},"aws")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"snowsql")," CLIs.  "),(0,r.kt)("p",null,"The challenge is that you need to go back and forth between AWS and Snowflake, exchanging information from each platform with the other.  "),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"A Role Based Storage Integration in Snowflake allows a user (an AWS user arn) in your Snowflake account to use a role in your AWS account, which in turns enables access to S3 and KMS resources used by Snowflake for an external stage.  "),(0,r.kt)("p",null,"The following diagram explains this (along with the PlantUML code used to create the diagram..):  "),(0,r.kt)(l.Z,{defaultValue:"overview",values:[{label:"Overview",value:"overview"},{label:"PlantUML",value:"plantuml"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"overview",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(28383).Z},(0,r.kt)("img",{alt:"Snowflake S3 Storage Integration",src:n(30266).Z,width:"966",height:"468"}))," ")),(0,r.kt)(i.Z,{value:"plantuml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plantuml"},'@startuml\n\nskinparam rectangle<<boundary>> {\n    Shadowing false\n    StereotypeFontSize 0\n    FontColor #444444\n    BorderColor #444444\n    BorderStyle dashed\n}\n\nskinparam defaultTextAlignment center\n\n!$imgroot = "https://github.com/avensolutions/plantuml-cloud-image-library/raw/main/images"\n\n!unquoted procedure $AwsIam($alias, $label, $techn, $descr="", $stereo="AWS IAM")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/SecurityIdentityCompliance/Iam.png>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $AwsS3($alias, $label, $techn, $descr="", $stereo="AWS S3")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/Storage/S3.png>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Snowflake($alias, $label, $techn, $descr="", $stereo="Snowflake")\n    rectangle "==$label\\n\\n<img:$imgroot/snowflake/snowflakeDB.png{scale=0.70}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\nrectangle "Snowflake" <<boundary>> {\n    $AwsIam(user, Snowflake IAM User, AWS IAM User)\n    $Snowflake(int, Storage Integration, Storage Integration)\n    $Snowflake(stage, External Stage, Stage)\n}\n\nrectangle "AWS" <<boundary>> {\n    $AwsS3(bucket, Stage Bucket, AWS S3 Bucket)\n    $AwsIam(role, Snowflake Access Role, IAM Role)\n    $AwsIam(policy, Snowflake Access Policy, IAM Policy)\n}\n\nstage -UP-> int : uses\nint -RIGHT-> user : uses\nuser -RIGHT-> role : uses\npolicy -UP-> role : attached to\nrole -RIGHT-> bucket : allows access to\n\n@enduml\n')))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Some prerequisites (removed for brevity):  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"set the following variables in your script:  ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$accountid")," \u2013 your AWS account ID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$bucketname")," \u2013 the bucket you are letting Snowflake use as an External Stage"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$bucketarn")," \u2013 used in policy statements (you could easily derive this from the bucket name)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$kmskeyarn")," \u2013 assuming you are used customer managed encryption keys, your Snowflake storage integration will need to use these to decrypt data in the stage"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$prefix")," \u2013 if you want to set up granular access (on a key/path basis)")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Configure Snowflake access credentials using environment variables or using the ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.snowsql/config")," file (you should definitely use the ",(0,r.kt)("inlineCode",{parentName:"li"},"SNOWSQL_PWD")," env var for your password however)"),(0,r.kt)("li",{parentName:"ol"},"Configure access to AWS using ",(0,r.kt)("inlineCode",{parentName:"li"},"aws configure"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The actions performed in both AWS and Snowflake required privileged access on both platforms.")),(0,r.kt)("h2",{id:"the-code"},"The Code"),(0,r.kt)("p",null,"I have broken this into steps, the complete code is included at the end of the article.  "),(0,r.kt)("h3",{id:"create-policy-documents"},"Create Policy Documents"),(0,r.kt)("p",null,"You will need to create the policy documents to allow the role you will create to access objects in the target S3 bucket, you will also need an initial \u201cAssume Role\u201d policy document which will be used to create the role and then updated with information you will get from Snowflake later.  "),(0,r.kt)(s.Z,{id:"73d507126c114e6ee7398226cf004f55",mdxType:"Gist"}),(0,r.kt)("h3",{id:"create-snowflake-access-policy"},"Create Snowflake Access Policy"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"snowflake_policy_doc.json")," policy document created in the previous step to create a managed policy, you will need the ",(0,r.kt)("inlineCode",{parentName:"p"},"arn")," returned in a subsequent statement.  "),(0,r.kt)(s.Z,{id:"65be4f7c104f92fa3dbf9342813b3fd2",mdxType:"Gist"}),(0,r.kt)("h3",{id:"create-snowflake-iam-role"},"Create Snowflake IAM Role"),(0,r.kt)("p",null,"Use the initial ",(0,r.kt)("inlineCode",{parentName:"p"},"assume_role_policy_doc.json")," created to create a new Snowflake access role, you will need the ",(0,r.kt)("inlineCode",{parentName:"p"},"arn")," for this resource when you configure the Storage Integration in Snowflake.  "),(0,r.kt)(s.Z,{id:"e1bdd5316fe7cb106de1edcff77d8e2b",mdxType:"Gist"}),(0,r.kt)("h3",{id:"attach-s3-access-policy-to-the-role"},"Attach S3 Access Policy to the Role"),(0,r.kt)("p",null,"Now you will attach the ",(0,r.kt)("inlineCode",{parentName:"p"},"snowflake-access-policy")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"snowflake-access-role")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"$policyarn")," captured from the policy creation statement.  "),(0,r.kt)(s.Z,{id:"d2d54b43e379a26bd264a4c97939250c",mdxType:"Gist"}),(0,r.kt)("h3",{id:"create-storage-integration-in-snowflake"},"Create Storage Integration in Snowflake"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"snowsql")," CLI to create a Storage Integration in Snowflake supplying the ",(0,r.kt)("inlineCode",{parentName:"p"},"$rolearn")," captured from the role creation statement.  "),(0,r.kt)(s.Z,{id:"8e4617227bcd68be74c2a5d694c85f91",mdxType:"Gist"}),(0,r.kt)("h3",{id:"get-storage_aws_iam_user_arn-and-storage_aws_external_id"},"Get ",(0,r.kt)("inlineCode",{parentName:"h3"},"STORAGE_AWS_IAM_USER_ARN")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"STORAGE_AWS_EXTERNAL_ID")),(0,r.kt)("p",null,"You will need the ",(0,r.kt)("inlineCode",{parentName:"p"},"STORAGE_AWS_IAM_USER_ARN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"STORAGE_AWS_EXTERNAL_ID")," values for the storage integration you created in the previous statement, these will be used to updated the assume role policy in your ",(0,r.kt)("inlineCode",{parentName:"p"},"snowflake-access-role"),".  "),(0,r.kt)(s.Z,{id:"14dbf570030cad1a46d88d2e87006c8e",mdxType:"Gist"}),(0,r.kt)("h3",{id:"update-snowflake-access-policy"},"Update Snowflake Access Policy"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"STORAGE_AWS_IAM_USER_ARN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"STORAGE_AWS_EXTERNAL_ID")," values retrieved in the previous statements, you will update the ",(0,r.kt)("inlineCode",{parentName:"p"},"assume-role-policy")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"snowflake-access-role"),".  "),(0,r.kt)(s.Z,{id:"944c39205e142de9a76266f7f3cd260b",mdxType:"Gist"}),(0,r.kt)("h3",{id:"test-the-storage-integration"},"Test the Storage Integration"),(0,r.kt)("p",null,"To test the connectivity between your Snowflake account and your AWS external stage using the Storage Integartion just created, create a stage as shown here:  "),(0,r.kt)(s.Z,{id:"99c24e8c80c6556fe381cf64c841f739",mdxType:"Gist"}),(0,r.kt)("p",null,"Now list objects in the stage (assuming there are any).  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"list @my_stage;\n")),(0,r.kt)("p",null,"This should just work!  You can use your storage integration to create different stages for different paths in your External Stage bucket and use both of these objects to create Snowpipes for automated ingestion.  Enjoy!  "),(0,r.kt)("h3",{id:"complete-code"},"Complete Code"),(0,r.kt)("p",null,"The complete code for this example is shown here:  "),(0,r.kt)(s.Z,{id:"5f4cba25f4eac380d63f5829c56d0306",mdxType:"Gist"}))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},28383:function(e,t,n){t.Z=n.p+"assets/files/snowflake-aws-storage-integration-73b391aee0770e6c9f9f8c3ac06d5d8a.png"},59943:function(e,t,n){var a=n(67294);n(45697);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,o=a.document;a.contentDocument?o=a.contentDocument:a.contentWindow&&(o=a.contentWindow.document);var r='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";o.open(),o.writeln(r),o.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,o=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:o?"gist-"+n+"-"+o:"gist-"+n})},t}(a.PureComponent);t.Z=l},30266:function(e,t,n){t.Z=n.p+"assets/images/snowflake-aws-storage-integration-73b391aee0770e6c9f9f8c3ac06d5d8a.png"}}]);