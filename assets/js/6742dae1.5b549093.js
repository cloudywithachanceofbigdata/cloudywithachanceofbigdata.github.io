"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[4419],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94500:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=n(59943),s=["components"],l={slug:"s3-object-notifications-using-lambda-and-ses",title:"S3 Object Notifications using Lambda and SES",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,description:"Simple pattern for formatted emails from S3 object notifications using AWS Lambda and SES, built with Terraform and Python",image:"images/s3-object-notifications-using-Lambda-and-SES-with-Terraform.png",tags:["aws","boto3","lambda","python","s3","ses","terraform"],keywords:["aws","boto3","lambda","python","s3","ses","terraform"]},c=void 0,u={permalink:"/s3-object-notifications-using-lambda-and-ses",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2019-01-18-s3-object-notifications-using-lambda-and-ses/index.md",source:"@site/blog/2019-01-18-s3-object-notifications-using-lambda-and-ses/index.md",title:"S3 Object Notifications using Lambda and SES",description:"Simple pattern for formatted emails from S3 object notifications using AWS Lambda and SES, built with Terraform and Python",date:"2019-01-18T00:00:00.000Z",formattedDate:"January 18, 2019",tags:[{label:"aws",permalink:"/tags/aws"},{label:"boto3",permalink:"/tags/boto-3"},{label:"lambda",permalink:"/tags/lambda"},{label:"python",permalink:"/tags/python"},{label:"s3",permalink:"/tags/s-3"},{label:"ses",permalink:"/tags/ses"},{label:"terraform",permalink:"/tags/terraform"}],readingTime:2.01,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"s3-object-notifications-using-lambda-and-ses",title:"S3 Object Notifications using Lambda and SES",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,description:"Simple pattern for formatted emails from S3 object notifications using AWS Lambda and SES, built with Terraform and Python",image:"images/s3-object-notifications-using-Lambda-and-SES-with-Terraform.png",tags:["aws","boto3","lambda","python","s3","ses","terraform"],keywords:["aws","boto3","lambda","python","s3","ses","terraform"]},prevItem:{title:"When Life Gives you Undrinkable Wine \u2013 Make Cognac\u2026",permalink:"/when-life-gives-you-undrinkable-wine-make-cognac"},nextItem:{title:"Infrastructure Automation using AWS Lambda",permalink:"/infrastructure-automation-using-aws-lambda"}},d={authorsImageUrls:[void 0]},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Deployment",id:"deployment",children:[],level:2}],f={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Following on from the previous post in the Really Simple Terraform series ",(0,i.kt)("a",{parentName:"p",href:"https://cloudywithachanceofbigdata.com/really-simple-terraform-infrastructure-automation-using-aws-lambda/"},"simple-lambda-ec2-scheduler"),", where we used Terraform to deploy a Lambda function including the packaging of the Python function into a ZIP archive and creation of all supporting objects (roles, policies, permissions, etc) \u2013 in this post we will take things a step further by using templating to update parameters in the Lambda function code before the packaging and creation of the Lambda function."),(0,i.kt)("p",null,"S3 event notifications can be published directly to an SNS topic which you could create an email subscription, this is quite straightforward. However the email notifications you get look something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Email Notification sent via an SNS Topic Subscription",src:n(36742).Z,width:"1056",height:"593"})),(0,i.kt)("p",null,"There is very little you can do about this."),(0,i.kt)("p",null,"However if you take a slightly different approach by triggering a Lambda function to send an email via SES you have much more control over content and formatting. Using this approach you could get an email notification that looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Email Notification sent using Lambda and SES",src:n(5808).Z,width:"643",height:"714"})),(0,i.kt)("p",null,"Much easier on the eye!"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"You will need verified AWS SES (Simple Email Service) email addresses for the sender and recipient\u2019s addresses used for your object notification emails. This can be done via the console as shown here:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SES Email Address Verification",src:n(10672).Z,width:"1126",height:"801"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note that SES is not available in every AWS region, pick one that is generally closest to your particular reason (but it really doesn't matter for this purpose).")),(0,i.kt)("h2",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"The Terraform module creates an IAM Role and associated policy for the Lambda function as shown here:"),(0,i.kt)(r.Z,{id:"023fab404c0df759d6d1d4bdb02ab4e8",mdxType:"Gist"}),(0,i.kt)("p",null,"Variables in the module are substituted into the function code template, the rendered template file is then packaged as a ZIP archive to be uploaded as the Lambda function source as shown here:"),(0,i.kt)(r.Z,{id:"7d72d8c67114a9df0af1528a3b754d9e",mdxType:"Gist"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"As in the previous post, I will reiterate that although Terraform is technically not a build tool, it can be used for simple build operations such as this.")),(0,i.kt)("p",null,"The Lambda function is deployed using the following code:"),(0,i.kt)(r.Z,{id:"5e7f2a238e8e0270cd55def40a389903",mdxType:"Gist"}),(0,i.kt)("p",null,"Finally the S3 object notification events are configured as shown here:"),(0,i.kt)(r.Z,{id:"e7de65f20c79e0efb115024597864a75",mdxType:"Gist"}),(0,i.kt)("p",null,"Use the following commands to run this example (I have created a default credentials profile, but you could supply your API credentials directly, use STS, etc):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd simple-notifications-with-lambda-and-ses\nterraform init\nterraform apply\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Full source code can be found at: ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/avensolutions/simple-notifications-with-lambda-and-ses"},(0,i.kt)("strong",{parentName:"a"},"https://github.com/avensolutions/simple-notifications-with-lambda-and-ses"))))))}m.isMDXComponent=!0},59943:function(e,t,n){var a=n(67294);n(45697);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var r=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,o=a.document;a.contentDocument?o=a.contentDocument:a.contentWindow&&(o=a.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";o.open(),o.writeln(i),o.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,o=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:o?"gist-"+n+"-"+o:"gist-"+n})},t}(a.PureComponent);t.Z=r},5808:function(e,t,n){t.Z=n.p+"assets/images/ses-object-notification-email-f2ec2abb7f361ac49d08d5b54ac369ad.png"},10672:function(e,t,n){t.Z=n.p+"assets/images/ses-verify-67af4f0a0493eddb21c1500407857016.png"},36742:function(e,t,n){t.Z=n.p+"assets/images/sns-object-notification-email-173693c0618474107c4e13e72ea5e805.png"}}]);