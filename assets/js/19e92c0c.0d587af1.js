"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[1230],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},45385:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return f}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=a(59943),s=["components"],u={slug:"infrastructure-automation-using-aws-lambda",title:"Infrastructure Automation using AWS Lambda",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,description:"Simple pattern for automating EC2 tasks using AWS Lambda and Terraform",image:"images/automate-infrastructure-tasks-using-lambda-with-terraform.png",tags:["aws","automation","boto3","cloudwatch","ec2","lambda","python","scheduled-tasks","terraform"],keywords:["aws","automation","boto3","cloudwatch","ec2","lambda","python","scheduled-tasks","terraform"]},l=void 0,c={permalink:"/infrastructure-automation-using-aws-lambda",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2019-01-15-infrastructure-automation-using-aws-lambda/index.md",source:"@site/blog/2019-01-15-infrastructure-automation-using-aws-lambda/index.md",title:"Infrastructure Automation using AWS Lambda",description:"Simple pattern for automating EC2 tasks using AWS Lambda and Terraform",date:"2019-01-15T00:00:00.000Z",formattedDate:"January 15, 2019",tags:[{label:"aws",permalink:"/tags/aws"},{label:"automation",permalink:"/tags/automation"},{label:"boto3",permalink:"/tags/boto-3"},{label:"cloudwatch",permalink:"/tags/cloudwatch"},{label:"ec2",permalink:"/tags/ec-2"},{label:"lambda",permalink:"/tags/lambda"},{label:"python",permalink:"/tags/python"},{label:"scheduled-tasks",permalink:"/tags/scheduled-tasks"},{label:"terraform",permalink:"/tags/terraform"}],readingTime:1.96,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"infrastructure-automation-using-aws-lambda",title:"Infrastructure Automation using AWS Lambda",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,description:"Simple pattern for automating EC2 tasks using AWS Lambda and Terraform",image:"images/automate-infrastructure-tasks-using-lambda-with-terraform.png",tags:["aws","automation","boto3","cloudwatch","ec2","lambda","python","scheduled-tasks","terraform"],keywords:["aws","automation","boto3","cloudwatch","ec2","lambda","python","scheduled-tasks","terraform"]},prevItem:{title:"S3 Object Notifications using Lambda and SES",permalink:"/s3-object-notifications-using-lambda-and-ses"},nextItem:{title:"Multi Stage ETL Framework using Spark SQL",permalink:"/multi-stage-etl-framework-using-spark-sql"}},p={authorsImageUrls:[void 0]},d=[],m={toc:d};function f(e){var t=e.components,u=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are many other blog posts and examples available for either scheduling infrastructure tasks such as the starting or stopping of EC2 instances; or deploying a Lambda function using Terraform. However, I have found many of the other examples to be unnecessarily complicated, so I have put together a very simple example doing both."),(0,o.kt)("p",null,"The function itself could be easily adapted to take other actions including interacting with other AWS services using the boto3 library (the Python AWS SDK). The data payload could be modified to pass different data to the function as well."),(0,o.kt)("p",null,"The script only requires input variables for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"schedule","_","expression"))," (cron schedule based upon GMT for triggering the function \u2013 could also be expressed as a rate, e.g. ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"rate(5 minutes))"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"environment"))," (value passed to the function on each invocation). In this example the Input data is the value for the \u201cEnvironment\u201d key for an EC2 instance tag \u2013 a user defined tag to associate the instance to a particular environment (e.g. Dev, Test. Prod). The key could be changed as required, for instance if you wanted to stop instances based upon their given name or part thereof you could change the tag key to be \u201cName\u201d."),(0,o.kt)("p",null,"When triggered, the function will stop all running EC2 instances with the given Environment tag."),(0,o.kt)("p",null,"The Terraform script creates:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an IAM Role and associated policy for the Lambda Function"),(0,o.kt)("li",{parentName:"ul"},"the Lambda function"),(0,o.kt)("li",{parentName:"ul"},"a Cloudwatch event rule and trigger")),(0,o.kt)("p",null,"The IAM role and policies required for the Lambda function are deployed as shown here:"),(0,o.kt)(i.Z,{id:"6b8ed7c149a60e823361ee282615b826",mdxType:"Gist"}),(0,o.kt)("p",null,"The function source code is packaged into a ZIP archive and deployed using Terraform as follows:"),(0,o.kt)(i.Z,{id:"ca6a26a62302ff809eae028bbfb28b41",mdxType:"Gist"}),(0,o.kt)("p",null,"Admittedly Terraform is an infrastructure automation tool and not a build/packaging tool (such as Jenkins, etc), but in this case the packaging only involves zipping up the function source code, so Terraform can be used as a \u2018one stop shop\u2019 to keep things simple."),(0,o.kt)("p",null,"The Cloudwatch schedule trigger is deployed as follows:"),(0,o.kt)(i.Z,{id:"7920fda821eb4f03d8ba942da572180c",mdxType:"Gist"}),(0,o.kt)("p",null,"Use the following commands to run this example (I have created a default credentials profile, but you could supply your API credentials directly, use STS, etc):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd simple-lambda-ec2-scheduler\nterraform init\nterraform apply\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Terraform output",src:a(10138).Z,width:"1042",height:"683"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Full source code can be found at: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/avensolutions/simple-lambda-ec2-scheduler"},(0,o.kt)("strong",{parentName:"a"},"https://github.com/avensolutions/simple-lambda-ec2-scheduler"))))),(0,o.kt)("p",null,"Stay tuned for more simple Terraform deployment recipes in coming posts\u2026"))}f.isMDXComponent=!0},59943:function(e,t,a){var n=a(67294);a(45697);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,a=e.file;return"https://gist.github.com/"+t+".js"+(a?"?file="+a:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,a=e.file,n=this.iframeNode,r=n.document;n.contentDocument?r=n.contentDocument:n.contentWindow&&(r=n.contentWindow.document);var o='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(a?"gist-"+t+"-"+a:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";r.open(),r.writeln(o),r.close()},t.prototype.render=function(){var e=this,t=this.props,a=t.id,r=t.file;return n.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:r?"gist-"+a+"-"+r:"gist-"+a})},t}(n.PureComponent);t.Z=i},10138:function(e,t,a){t.Z=a.p+"assets/images/terraform-screenshot-2f677526d3d3dc10870393e11e6e85b8.png"}}]);