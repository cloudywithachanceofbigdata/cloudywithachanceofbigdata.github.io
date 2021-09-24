"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[1263],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?o.createElement(g,r(r({ref:t},u),{},{components:n})):o.createElement(g,r({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31737:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return d},default:function(){return g}});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),r=n(59943),c=["components"],s={slug:"automated-gcs-object-scanning-using-dlp-with-notifications-using-slack",title:"Automated GCS Object Scanning Using DLP with Notifications Using Slack",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/Slack-GCS-DLP-Image-e1591007165488.png",tags:["cloud-dlp","cloud-functions","cloud-storage","dlp","gcp","gcs","google-cloud-platform","googlecloudplatform","python","slack","terraform"],keywords:["cloud-dlp","cloud-functions","cloud-storage","dlp","gcp","gcs","google-cloud-platform","googlecloudplatform","python","slack","terraform"]},l=void 0,u={permalink:"/automated-gcs-object-scanning-using-dlp-with-notifications-using-slack",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2020-06-01-automated-gcs-object-scanning-using-dlp-with-notifications-using-slack/index.md",source:"@site/blog/2020-06-01-automated-gcs-object-scanning-using-dlp-with-notifications-using-slack/index.md",title:"Automated GCS Object Scanning Using DLP with Notifications Using Slack",description:"This is a follow up to a previous blog, Google Cloud Storage Object Notifications using Slack in which we used Slack to notify us of new objects being uploaded to GCS.",date:"2020-06-01T00:00:00.000Z",formattedDate:"June 1, 2020",tags:[{label:"cloud-dlp",permalink:"/tags/cloud-dlp"},{label:"cloud-functions",permalink:"/tags/cloud-functions"},{label:"cloud-storage",permalink:"/tags/cloud-storage"},{label:"dlp",permalink:"/tags/dlp"},{label:"gcp",permalink:"/tags/gcp"},{label:"gcs",permalink:"/tags/gcs"},{label:"google-cloud-platform",permalink:"/tags/google-cloud-platform"},{label:"googlecloudplatform",permalink:"/tags/googlecloudplatform"},{label:"python",permalink:"/tags/python"},{label:"slack",permalink:"/tags/slack"},{label:"terraform",permalink:"/tags/terraform"}],readingTime:2.16,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],prevItem:{title:"Cloud Bigtable Primer - Part I",permalink:"/cloud-bigtable-primer-part-i"},nextItem:{title:"JSON Wrangling with Go",permalink:"/json-wrangling-with-go"}},p={authorsImageUrls:[void 0]},d=[{value:"The Code",id:"the-code",children:[]}],f={toc:d};function g(e){var t=e.components,s=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is a follow up to a previous blog, ",(0,a.kt)("a",{parentName:"p",href:"https://cloudywithachanceofbigdata.com/google-cloud-storage-object-notifications-using-slack/"},(0,a.kt)("strong",{parentName:"a"},"Google Cloud Storage Object Notifications using Slack"))," in which we used Slack to notify us of new objects being uploaded to GCS."),(0,a.kt)("p",null,"In this article we will take things a step further, where uploading an object to a GCS bucket will trigger a DLP inspection of the object and if any preconfigured info types (such as credit card numbers or API credentials) are present in the object, a Slack notification will be generated."),(0,a.kt)("p",null,"As DLP scans are \u201cjobs\u201d, meaning they run asynchronously, we will need to trigger scans and inspect results using two separate Cloud Functions (one for triggering a scan ","[",(0,a.kt)("inlineCode",{parentName:"p"},"gcs-dlp-scan-trigger"),"]"," and one for inspecting the results of the scan ","[",(0,a.kt)("inlineCode",{parentName:"p"},"gcs-dlp-evaluate-results"),"]",") and a Cloud PubSub topic ","[",(0,a.kt)("inlineCode",{parentName:"p"},"dlp-scan-topic"),"]"," which is used to hold the reference to the DLP job."),(0,a.kt)("p",null,"The process is described using the sequence diagram below:"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(3254).Z},(0,a.kt)("img",{src:n(57235).Z}))),(0,a.kt)("h2",{id:"the-code"},"The Code"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"gcs-dlp-scan-trigger")," Cloud Function fires when a new object is created in a specified GCS bucket. This function configures the DLP scan to be executed, including the DLP info types (for instance ",(0,a.kt)("inlineCode",{parentName:"p"},"CREDIT_CARD_NUMBER"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"EMAIL_ADDRESS"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ETHNIC_GROUP"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PHONE_NUMBER"),", etc) a and likelihood of that info type existing (for instance ",(0,a.kt)("inlineCode",{parentName:"p"},"LIKELY"),"). DLP scans determine the probability of an info type occurring in the data, they do not scan every object in its entirety as this would be too expensive."),(0,a.kt)("p",null,"The primary function executed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"gcs-dlp-scan-trigger")," Cloud Function is named ",(0,a.kt)("inlineCode",{parentName:"p"},"inspect_gcs_file"),". This function configures and submits the DLP job, supplying a PubSub topic to which the DLP Job Name will be written, the code for the ",(0,a.kt)("inlineCode",{parentName:"p"},"inspect_gcs_file")," is shown here:"),(0,a.kt)(r.Z,{id:"913a4457f43bc7b80e4405dd01f7b64d",mdxType:"Gist"}),(0,a.kt)("p",null,"At this stage the DLP job is created an running asynchronously, the next Cloud Function, ",(0,a.kt)("inlineCode",{parentName:"p"},"gcs-dlp-evaluate-results"),", fires when a message is sent to the PubSub topic defined in the DLP job. The ",(0,a.kt)("inlineCode",{parentName:"p"},"gcs-dlp-evaluate-results")," reads the DLP Job Name from the PubSub topic, connects to the DLP service and queries the job status, when the job is complete, this function checks the results of the scan, if the ",(0,a.kt)("inlineCode",{parentName:"p"},"min_likliehood")," threshold is met for any of the specified info types, a Slack message is generated. The code for the main method in the ",(0,a.kt)("inlineCode",{parentName:"p"},"gcs-dlp-evaluate-results")," function is shown here:"),(0,a.kt)(r.Z,{id:"ab377f6c3e448ae7c623d057239e05ed",mdxType:"Gist"}),(0,a.kt)("p",null,"Finally, a Slack webhook is used to send the message to a specified Slack channel in a workspace, this is done using the ",(0,a.kt)("inlineCode",{parentName:"p"},"send_slack_notification")," function shown here:"),(0,a.kt)(r.Z,{id:"15d9e7c0922c26b680bed81abfcbadff",mdxType:"Gist"}),(0,a.kt)("p",null,"An example Slack message is shown here:"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(88881).Z},(0,a.kt)("img",{alt:"Slack Notification for Sensitive Data Detected in a Newly Created GCS Object",src:n(50564).Z}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Full source code can be found at: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gamma-data/automated-gcs-object-scanning-using-dlp-with-notifications-using-slack"},"https://github.com/gamma-data/automated-gcs-object-scanning-using-dlp-with-notifications-using-slack"))))}g.isMDXComponent=!0},3254:function(e,t,n){t.Z=n.p+"assets/files/dlp-notifications-using-slack-d58f8548ccf305103d24c181be50ecda.png"},88881:function(e,t,n){t.Z=n.p+"assets/files/gcs-dlp-results-slack-notification-b8be26df34031f7e12c152c85781f4b4.png"},59943:function(e,t,n){var o=n(67294);n(45697);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var r=function(e){function t(){return i(this,t),a(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,o=this.iframeNode,i=o.document;o.contentDocument?i=o.contentDocument:o.contentWindow&&(i=o.contentWindow.document);var a='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";i.open(),i.writeln(a),i.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,i=t.file;return o.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:i?"gist-"+n+"-"+i:"gist-"+n})},t}(o.PureComponent);t.Z=r},57235:function(e,t,n){t.Z=n.p+"assets/images/dlp-notifications-using-slack-d58f8548ccf305103d24c181be50ecda.png"},50564:function(e,t,n){t.Z=n.p+"assets/images/gcs-dlp-results-slack-notification-b8be26df34031f7e12c152c85781f4b4.png"}}]);