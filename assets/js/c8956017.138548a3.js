"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[60442],{65867:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(59943),r=["components"],s={slug:"simplifying-large-cloudformation-templates-using-jsonnet",title:"Simplifying Large CloudFormation Templates using Jsonnet",authors:["jeffreyaven"],draft:!1,image:"/img/blog/cloudformation-jsonnet-featured-image.png",tags:["aws","awscloudformation","jsonnet","gitlab","gitlabci","infrastructureascode","iac","cloudautomation"],keywords:["aws","awscloudformation","jsonnet","gitlab","gitlabci","infrastructureascode","iac","cloudautomation"],description:"A simple pattern to break up large CloudFormation templates into smaller, more manageable modules using Jsonnet and GitLab CI."},c=void 0,u={permalink:"/simplifying-large-cloudformation-templates-using-jsonnet",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2021-11-21-simplifying-large-cloudformation-templates-using-jsonnet/index.md",source:"@site/blog/2021-11-21-simplifying-large-cloudformation-templates-using-jsonnet/index.md",title:"Simplifying Large CloudFormation Templates using Jsonnet",description:"A simple pattern to break up large CloudFormation templates into smaller, more manageable modules using Jsonnet and GitLab CI.",date:"2021-11-21T00:00:00.000Z",formattedDate:"November 21, 2021",tags:[{label:"aws",permalink:"/tags/aws"},{label:"awscloudformation",permalink:"/tags/awscloudformation"},{label:"jsonnet",permalink:"/tags/jsonnet"},{label:"gitlab",permalink:"/tags/gitlab"},{label:"gitlabci",permalink:"/tags/gitlabci"},{label:"infrastructureascode",permalink:"/tags/infrastructureascode"},{label:"iac",permalink:"/tags/iac"},{label:"cloudautomation",permalink:"/tags/cloudautomation"}],readingTime:2.47,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"simplifying-large-cloudformation-templates-using-jsonnet",title:"Simplifying Large CloudFormation Templates using Jsonnet",authors:["jeffreyaven"],draft:!1,image:"/img/blog/cloudformation-jsonnet-featured-image.png",tags:["aws","awscloudformation","jsonnet","gitlab","gitlabci","infrastructureascode","iac","cloudautomation"],keywords:["aws","awscloudformation","jsonnet","gitlab","gitlabci","infrastructureascode","iac","cloudautomation"],description:"A simple pattern to break up large CloudFormation templates into smaller, more manageable modules using Jsonnet and GitLab CI."},prevItem:{title:"Automating Snowflake Role Based Storage Integration for AWS",permalink:"/automating-snowflake-role-based-storage-integration-for-aws"},nextItem:{title:"Simplified AWS Deployments with CloudFormation and GitLab CI",permalink:"/aws-deployments-with-cloudformation-and-gitlab-ci"}},d={authorsImageUrls:[void 0]},p=[{value:"Advantages",id:"advantages",level:2},{value:"Process Overview",id:"process-overview",level:2},{value:"Code",id:"code",level:2},{value:"<code>template.jsonnet</code>",id:"templatejsonnet",level:3},{value:"<code>includes/tags.libsonnet</code>",id:"includestagslibsonnet",level:3},{value:"<code>includes/vpc.libsonnet</code>",id:"includesvpclibsonnet",level:3},{value:"<code>includes/s3loggingbucket.libsonnet</code>",id:"includess3loggingbucketlibsonnet",level:3},{value:"<code>includes/s3landingbucket.libsonnet</code>",id:"includess3landingbucketlibsonnet",level:3},{value:"Testing",id:"testing",level:2},{value:"Deployment",id:"deployment",level:2}],m={toc:p};function f(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"CloudFormation templates in large environments can grow beyond a manageable point.  This article provides one approach to breaking up CloudFormation templates into modules which can be imported and used to create a larger template to deploy a complex AWS stack \u2013 using Jsonnet.  "),(0,i.kt)("p",null,"Jsonnet is a json pre-processing and templating library which includes features including user defined and built-in functions, objects, and inheritance amongst others.  If you are not familiar with Jsonnet, here are some good resources to start with:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jsonnet.org/"},"Jsonnet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloudywithachanceofbigdata.com/using-jsonnet-to-configure-multiple-environments"},"Blog Article: Using Jsonnet to Configure Multiple Environments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.infraql.io/blog/using-the-jsonnet-map-function"},"Blog Article: Using the Jsonnet Map Function"))),(0,i.kt)("h2",{id:"advantages"},"Advantages"),(0,i.kt)("p",null,"Using Jsonnet you can use imports to break up large stacks into smaller files scoped for each resource.  This approach makes CloudFormation template easier to read and write and allows you to apply the DRY (Do Not Repeat Yourself) coding principle (not possible with native CloudFormation templates.  "),(0,i.kt)("p",null,"Additionally, although as the template fragments are in Jsonnet format, you can add annotations or comments to your code similar to YAML (not possible with a JSON template alone), although the rendered template is in legal CloudFormation Json format.  "),(0,i.kt)("h2",{id:"process-overview"},"Process Overview"),(0,i.kt)("p",null,"The process is summarised here: "),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(61082).Z},(0,i.kt)("img",{alt:"CloudFormation and Jsonnet",src:n(41232).Z,width:"919",height:"439"}))," "),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("p",null,"This example will deploy a stack with a VPC and an S3 bucket with logging.  The project directory structure would look like this:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"templates/\n\u251c\u2500 includes/\n\u2502  \u251c\u2500 vpc.libsonnet\n\u2502  \u251c\u2500 s3landingbucket.libsonnet\n\u2502  \u251c\u2500 s3loggingbucket.libsonnet\n\u2502  \u251c\u2500 tags.libsonnet\n\u251c\u2500 template.jsonnet\n")),(0,i.kt)("p",null,"Lets look at all of the constituent files:  "),(0,i.kt)("h3",{id:"templatejsonnet"},(0,i.kt)("inlineCode",{parentName:"h3"},"template.jsonnet")),(0,i.kt)("p",null,"This is the root document which will be processed by Jsonnet to render a legal CloudFormation JSON template.  It will import the other files in the includes directory.  "),(0,i.kt)(l.Z,{id:"8f2cc0c464de762f73b3f81c75a13832",mdxType:"Gist"}),(0,i.kt)("h3",{id:"includestagslibsonnet"},(0,i.kt)("inlineCode",{parentName:"h3"},"includes/tags.libsonnet")),(0,i.kt)("p",null,"This code module is used to generate re-usable tags for other resources (DRY).  "),(0,i.kt)(l.Z,{id:"82e21743e845355ba0ef7240f1f7327a",mdxType:"Gist"}),(0,i.kt)("h3",{id:"includesvpclibsonnet"},(0,i.kt)("inlineCode",{parentName:"h3"},"includes/vpc.libsonnet")),(0,i.kt)("p",null,"This code module defines a VPC resource to be created with CloudFormation.  "),(0,i.kt)(l.Z,{id:"e79189bbc1cfb8b72bd860c6381f6130",mdxType:"Gist"}),(0,i.kt)("h3",{id:"includess3loggingbucketlibsonnet"},(0,i.kt)("inlineCode",{parentName:"h3"},"includes/s3loggingbucket.libsonnet")),(0,i.kt)("p",null,"This code module defines an S3 bucket resource to be created in the stack which will be used for logging for other buckets.  "),(0,i.kt)(l.Z,{id:"187c97deca224617b064c4028ebbbee2",mdxType:"Gist"}),(0,i.kt)("h3",{id:"includess3landingbucketlibsonnet"},(0,i.kt)("inlineCode",{parentName:"h3"},"includes/s3landingbucket.libsonnet")),(0,i.kt)("p",null,"This code module defines an S3 landing bucket resource to be created in the stack.  "),(0,i.kt)(l.Z,{id:"c0dc5d868809f98ef672aca738bb1e5e",mdxType:"Gist"}),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"To test the pre-processing, you will need a Jsonnet binary/executable for your environment.  You can find Docker images which include this for you, or you could build it yourself.  "),(0,i.kt)("p",null,"Once you have a compiled binary, you can run the following to generate a rendered CloudFormation template.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"jsonnet template.jsonnet -o template.json\n")),(0,i.kt)("p",null,"You can validate this template using the AWS CLI as shown here:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"aws cloudformation validate-template --template-body file://template.json\n")),(0,i.kt)("h2",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"In a previous article, ",(0,i.kt)("a",{parentName:"p",href:"https://cloudywithachanceofbigdata.com/aws-deployments-with-cloudformation-and-gitlab-ci"},"Simplified AWS Deployments with CloudFormation and GitLab CI"),", I demonstrated an end-to-end deployment pipeline using GitLab CI.  Jsonnet pre-processing can be added to this pipeline as an initial \u2018preprocess\u2019 stage and job.  A snippet from the ",(0,i.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml")," file is included here:  "),(0,i.kt)(l.Z,{id:"14c4c2fdccb27884c69c31f7b3a17a99",mdxType:"Gist"}),(0,i.kt)("p",null,"Enjoy!"))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61082:function(e,t,n){t.Z=n.p+"assets/files/cloudformation-jsonnet-851900d3fb0edfa2930e846dd92c0b31.png"},59943:function(e,t,n){var o=n(67294);n(45697);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){return a(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,o=this.iframeNode,a=o.document;o.contentDocument?a=o.contentDocument:o.contentWindow&&(a=o.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";a.open(),a.writeln(i),a.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,a=t.file;return o.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:a?"gist-"+n+"-"+a:"gist-"+n})},t}(o.PureComponent);t.Z=l},41232:function(e,t,n){t.Z=n.p+"assets/images/cloudformation-jsonnet-851900d3fb0edfa2930e846dd92c0b31.png"}}]);