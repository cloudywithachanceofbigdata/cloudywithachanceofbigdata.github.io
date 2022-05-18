"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[85939],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(o),f=a,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return o?n.createElement(g,r(r({ref:t},u),{},{components:o})):n.createElement(g,r({ref:t},u))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},97344:function(e,t,o){var n=o(67294);t.Z=function(e){var t=e.imageSrc,o=e.altText;return n.createElement("figure",null,n.createElement("a",{href:t},n.createElement("img",{src:t,alt:o})),n.createElement("figcaption",{className:"figure-caption"},o))}},20276:function(e,t,o){o.r(t),o.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return T},frontMatter:function(){return k},metadata:function(){return y},toc:function(){return w}});var n=o(83117),a=o(80102),i=(o(67294),o(3905)),r=o(59943),c=o(97344),l=o(27983),s=o(95266),u=o(90888),p=o(12646),d=o(14204),f=o(31745),g=o(72813),m=o(38645),h=["components"],k={slug:"google-cloud-storage-object-notifications-using-slack",title:"Google Cloud Storage Object Notifications using Slack",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/Slack-GCS-Image.png",tags:["gcp","googlecloudplatform","slack","terraform"],keywords:["gcp","googlecloudplatform","slack","terraform"]},b=void 0,y={permalink:"/google-cloud-storage-object-notifications-using-slack",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2019-11-09-google-cloud-storage-object-notifications-using-slack/index.md",source:"@site/blog/2019-11-09-google-cloud-storage-object-notifications-using-slack/index.md",title:"Google Cloud Storage Object Notifications using Slack",description:"This article describes the steps to integrate Slack with Google Cloud Functions to get notified about object events within a specified Google Cloud Storage bucket.",date:"2019-11-09T00:00:00.000Z",formattedDate:"November 9, 2019",tags:[{label:"gcp",permalink:"/tags/gcp"},{label:"googlecloudplatform",permalink:"/tags/googlecloudplatform"},{label:"slack",permalink:"/tags/slack"},{label:"terraform",permalink:"/tags/terraform"}],readingTime:2.755,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"google-cloud-storage-object-notifications-using-slack",title:"Google Cloud Storage Object Notifications using Slack",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/Slack-GCS-Image.png",tags:["gcp","googlecloudplatform","slack","terraform"],keywords:["gcp","googlecloudplatform","slack","terraform"]},prevItem:{title:"The Ultimate AWS to GCP Thesaurus",permalink:"/ultimate-aws-to-gcp-thesaurus"},nextItem:{title:"Map Reduce is Dead, Long Live Map Reduce",permalink:"/map-reduce-is-dead-long-live-map-reduce"}},v={authorsImageUrls:[void 0]},w=[],C={toc:w};function T(e){var t=e.components,k=(0,a.Z)(e,h);return(0,i.kt)("wrapper",(0,n.Z)({},C,k,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article describes the steps to integrate Slack with Google Cloud Functions to get notified about object events within a specified Google Cloud Storage bucket."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:o(814).Z},(0,i.kt)("img",{alt:"Google Cloud Storage Object Notifications using Slack",src:o(46370).Z,width:"560",height:"341"}))),(0,i.kt)("p",null,"Events could include the creation of new objects, as well as delete, archive or metadata operations performed on a given bucket."),(0,i.kt)("p",null,"This pattern could be easily extended to other event sources supported by Cloud Functions including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cloud Pub/Sub messages"),(0,i.kt)("li",{parentName:"ul"},"Cloud Firestore and Firebase events"),(0,i.kt)("li",{parentName:"ul"},"Stackdriver log entries")),(0,i.kt)("p",null,"More information can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/functions/docs/concepts/events-triggers"},"https://cloud.google.com/functions/docs/concepts/events-triggers"),"."),(0,i.kt)("p",null,"The prerequisite steps to configure Slack are provided here:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First you will need to create a Slack app (assuming you have already set up an account and a workspace). The following screenshots demonstrate this process:")),(0,i.kt)(c.Z,{imageSrc:l.Z,altText:"Create a Slack app",mdxType:"ImageWithCaption"}),(0,i.kt)(c.Z,{imageSrc:s.Z,altText:"Give the app a name and associate it with an existing Slack workspace",mdxType:"ImageWithCaption"}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Next you need to Enable and Activate Incoming Webhooks to your app and add this to your workspace. The following screenshots demonstrate this process:")),(0,i.kt)(c.Z,{imageSrc:u.Z,altText:"Enable Incoming Web Hooks for the app",mdxType:"ImageWithCaption"}),(0,i.kt)(c.Z,{imageSrc:p.Z,altText:"Activate incoming webhooks",mdxType:"ImageWithCaption"}),(0,i.kt)(c.Z,{imageSrc:d.Z,altText:"Add the webhook to your workspace",mdxType:"ImageWithCaption"}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Next you need to specify a channel for notifications generated from object events.")),(0,i.kt)(c.Z,{imageSrc:f.Z,altText:"Select a channel for the webhook",mdxType:"ImageWithCaption"}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Now you need to copy the Webhook url provided, you will use this later in your Cloud Function.")),(0,i.kt)(c.Z,{imageSrc:g.Z,altText:"Copy the webhook URL to the clipboard",mdxType:"ImageWithCaption"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Treat your webhook url as a secret, do not upload this to a public source code repository")),(0,i.kt)("p",null,"Next you need to create your Cloud Function, this example uses Python but you can use an alternative runtime including Node.js or Go."),(0,i.kt)("p",null,"This example templates the source code using the Terraform ",(0,i.kt)("inlineCode",{parentName:"p"},"template_file")," data source. The function source code is shown here:"),(0,i.kt)(r.Z,{id:"e248abd1af393e58de84e8776161c8cb",mdxType:"Gist"}),(0,i.kt)("p",null,"Within your Terraform code you need to render your Cloud Function code substituting the ",(0,i.kt)("inlineCode",{parentName:"p"},"slack_webhook_url")," for it's value which you will supply as a Terraform variable. The rendered template file is then placed in a local directory along with a ",(0,i.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file and zipped up. The resulting Zip archive is uploaded to a specified bucket where it will be sourced to create the Cloud Function."),(0,i.kt)(r.Z,{id:"e247d09d33a4aca9154de081f3063978",mdxType:"Gist"}),(0,i.kt)("p",null,"Now you need to create the Cloud Function, the following HCL snippet demonstrates this:"),(0,i.kt)(r.Z,{id:"87e2e83e5b2b800d685a8d239280ca13",mdxType:"Gist"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"event_trigger")," block in particular specifies which GCS bucket to watch and what events will trigger invocation of the function. Bucket events include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"google.storage.object.finalize")," ",(0,i.kt)("em",{parentName:"li"},"(the creation of a new object)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"google.storage.object.delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"google.storage.object.archive")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"google.storage.object.metadataUpdate"))),(0,i.kt)("p",null,"You could add additional logic to the Cloud Function code to look for specific object names or naming patterns, but keep in mind the function will fire upon every event matching the ",(0,i.kt)("inlineCode",{parentName:"p"},"event_type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," criteria."),(0,i.kt)("p",null,"To deploy the function, you would simply run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'terraform apply -var="slack_webhook_url=https://hooks.slack.com/services/XXXXXXXXX/XXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXXXX"\n')),(0,i.kt)("p",null,"Now once you upload a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"test-object.txt"),", voil\xe0!:"),(0,i.kt)(c.Z,{imageSrc:m.Z,altText:"Slack notification for a new object created",mdxType:"ImageWithCaption"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Full source code is available at: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gamma-data/gcs-object-notifications-using-slack"},"https://github.com/gamma-data/gcs-object-notifications-using-slack"))))}T.isMDXComponent=!0},814:function(e,t,o){t.Z=o.p+"assets/files/Slack-GCS-6de5cb5ede305869300f0f933537e240.png"},59943:function(e,t,o){var n=o(67294);o(45697);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var r=function(e){function t(){return a(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,o=e.file;return"https://gist.github.com/"+t+".js"+(o?"?file="+o:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,o=e.file,n=this.iframeNode,a=n.document;n.contentDocument?a=n.contentDocument:n.contentWindow&&(a=n.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(o?"gist-"+t+"-"+o:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";a.open(),a.writeln(i),a.close()},t.prototype.render=function(){var e=this,t=this.props,o=t.id,a=t.file;return n.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:a?"gist-"+o+"-"+a:"gist-"+o})},t}(n.PureComponent);t.Z=r},72813:function(e,t,o){t.Z=o.p+"assets/images/output-onlinepngtools-7bfe4ca076a72230bcf2aa722f6e61c0.png"},38645:function(e,t,o){t.Z=o.p+"assets/images/slack-notification-296ef71c70119965cb16d4fe536b1fbe.png"},27983:function(e,t,o){t.Z=o.p+"assets/images/slack-notifications-setup-1-4922d02dd437b80334c8b3b85d25a94b.png"},95266:function(e,t,o){t.Z=o.p+"assets/images/slack-notifications-setup-2-82f83d053fab9830256ca8ecaaa8f33a.png"},90888:function(e,t,o){t.Z=o.p+"assets/images/slack-notifications-setup-3-6dec01da96437a43cf7c4e4d948e0dd6.png"},12646:function(e,t,o){t.Z=o.p+"assets/images/slack-notifications-setup-4-95fc759fc0221afdffaa694b14245feb.png"},14204:function(e,t,o){t.Z=o.p+"assets/images/slack-notifications-setup-5-2b9b7c134f51bbd0393068a614b5469c.png"},31745:function(e,t,o){t.Z=o.p+"assets/images/slack-notifications-setup-6-3b3d2000288499a7cdb60c2cf7af04c5.png"},46370:function(e,t,o){t.Z=o.p+"assets/images/Slack-GCS-6de5cb5ede305869300f0f933537e240.png"}}]);