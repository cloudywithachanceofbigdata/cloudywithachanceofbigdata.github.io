"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[95734],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(a),d=o,f=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return a?n.createElement(f,r(r({ref:t},p),{},{components:a})):n.createElement(f,r({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},82575:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var n=a(83117),o=(a(67294),a(3905)),i=a(59943);const r={slug:"simple-cli-pkce-auth-using-okta",title:"Simple CLI Application to Login to Okta using PKCE",authors:["jeffreyaven"],draft:!1,image:"/img/blog/okta-pkce-cli-blog-image.png",tags:["okta","oauth2","cli","golang","pkce"],keywords:["okta","oauth2","cli","golang","pkce"],description:"Simple command line application to login to an Okta authorization server using a PKCE flow."},l=void 0,c={permalink:"/simple-cli-pkce-auth-using-okta",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2022-04-17-simple-cli-pkce-auth-using-okta/index.md",source:"@site/blog/2022-04-17-simple-cli-pkce-auth-using-okta/index.md",title:"Simple CLI Application to Login to Okta using PKCE",description:"Simple command line application to login to an Okta authorization server using a PKCE flow.",date:"2022-04-17T00:00:00.000Z",formattedDate:"April 17, 2022",tags:[{label:"okta",permalink:"/tags/okta"},{label:"oauth2",permalink:"/tags/oauth-2"},{label:"cli",permalink:"/tags/cli"},{label:"golang",permalink:"/tags/golang"},{label:"pkce",permalink:"/tags/pkce"}],readingTime:2.09,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"simple-cli-pkce-auth-using-okta",title:"Simple CLI Application to Login to Okta using PKCE",authors:["jeffreyaven"],draft:!1,image:"/img/blog/okta-pkce-cli-blog-image.png",tags:["okta","oauth2","cli","golang","pkce"],keywords:["okta","oauth2","cli","golang","pkce"],description:"Simple command line application to login to an Okta authorization server using a PKCE flow."},prevItem:{title:"Stream Processing with Spark Structured Streaming, Kafka and Snowflake using Python",permalink:"/stream-processing-with-spark-structured-streaming-kafka-and-snowflake-using-python"},nextItem:{title:"Scaling up Prefect with GitStorage",permalink:"/scaling-up-prefect-with-gitstorage"}},s={authorsImageUrls:[void 0]},p=[{value:"Example",id:"example",level:2},{value:"Overview",id:"overview",level:2},{value:"Steps",id:"steps",level:2},{value:"Generate a <code>code_challenge</code>",id:"generate-a-code_challenge",level:3},{value:"Build the <code>authorize</code> url",id:"build-the-authorize-url",level:3},{value:"Get the authorization code via redirect uri",id:"get-the-authorization-code-via-redirect-uri",level:3},{value:"Exchange the code for an access token",id:"exchange-the-code-for-an-access-token",level:3},{value:"(Optional) Get the user profile",id:"optional-get-the-user-profile",level:3},{value:"with inspiration from...",id:"with-inspiration-from",level:2}],u={toc:p};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article demonstrates a simple command line utility to login to an authorization server (Okta in this case) using a PKCE (Proof Key for Code Exchange) flow.  This is the preferred flow for public clients (such as Single Page Applications).  "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The code for this article is available on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stackql/okta-pkce-login"},(0,o.kt)("strong",{parentName:"a"},"GitHub")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(64791).Z},(0,o.kt)("img",{alt:"Okta PKCE cli login example",src:a(13058).Z,width:"982",height:"479"}))),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This application can be used to illustrate the authorization/authentication flow discussed in ",(0,o.kt)("a",{parentName:"p",href:"https://fullstackchronicles.io/simple-sso-with-an-external-idp-using-active-directory-and-okta"},"Simple SSO with an external IdP using Active Directory and Okta"),".  A flow which is pictured here:  "),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(11981).Z},(0,o.kt)("img",{alt:"PKCE Authorization t Okta using an AD IdP",src:a(26921).Z,width:"904",height:"738"}))),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("p",null,"The steps involved in the implementation of a PKCE login flow are as follows:"),(0,o.kt)("h3",{id:"generate-a-code_challenge"},"Generate a ",(0,o.kt)("inlineCode",{parentName:"h3"},"code_challenge")),(0,o.kt)("p",null,"To implement a PKCE flow, you first need to generate a ",(0,o.kt)("em",{parentName:"p"},"Code Verifier")," (which is a random value you create), the ",(0,o.kt)("em",{parentName:"p"},"Code Verifier")," is then hashed using a SHA256 algorithm.  The hash is then used as the ",(0,o.kt)("em",{parentName:"p"},"Code Challenge"),".  An example function to generate a code challenge is shown below:  "),(0,o.kt)(i.Z,{id:"9a2a162813d77b83821d821b6a4a390a",mdxType:"Gist"}),(0,o.kt)("p",null,"For more information see ",(0,o.kt)("a",{parentName:"p",href:"https://developer.okta.com/blog/2019/08/22/okta-authjs-pkce#:~:text=PKCE%20works%20by%20having%20the,is%20called%20the%20Code%20Challenge"},"Use PKCE to Make Your Apps More Secure"),". "),(0,o.kt)("h3",{id:"build-the-authorize-url"},"Build the ",(0,o.kt)("inlineCode",{parentName:"h3"},"authorize")," url"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"authorize")," url is used to initiate the authorization flow with the authorization server.  An example function to construct the ",(0,o.kt)("inlineCode",{parentName:"p"},"authorize")," url is shown below:  "),(0,o.kt)(i.Z,{id:"9e628b905a532e5bd59f022a4adca340",mdxType:"Gist"}),(0,o.kt)("h3",{id:"get-the-authorization-code-via-redirect-uri"},"Get the authorization code via redirect uri"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"redirecturi")," parameter supplied in the ",(0,o.kt)("inlineCode",{parentName:"p"},"authorize")," url is used to retrieve the authorization code from the authorization server.  In order to get this code using a front end flow, you need to define a handler that will get the authorization code, call the token endpoint, and close the HTTP server, as shown here:  "),(0,o.kt)(i.Z,{id:"617417bdcc54efcea9d37d27228f7f2a",mdxType:"Gist"}),(0,o.kt)("h3",{id:"exchange-the-code-for-an-access-token"},"Exchange the code for an access token"),(0,o.kt)("p",null,"The access token is what you ultimatly want, as this is the token that will be used to access protected resources.  An example function to exchange the authorization code for an access token is shown below:  "),(0,o.kt)(i.Z,{id:"0a990674d8bde2baffc0b0231f52ed52",mdxType:"Gist"}),(0,o.kt)("h3",{id:"optional-get-the-user-profile"},"(Optional) Get the user profile"),(0,o.kt)("p",null,"The access token can be used to get the user profile, this is done by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"userinfo")," endpoint using the token.  An example function to get the user profile is shown below:  "),(0,o.kt)(i.Z,{id:"f04e8b018417a73986d3696c58f735cb",mdxType:"Gist"}),(0,o.kt)("h2",{id:"with-inspiration-from"},"with inspiration from..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/ogazitt/f749dad9cca8d0ac6607f93a42adf322"},"Auth0 PKCE flow for a CLI built in golang")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://community.auth0.com/t/golang-sample-for-a-cli-obtaining-an-access-token-using-the-pkce-flow/40922"},"Golang sample for a CLI obtaining an access token using the PKCE flow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/oktadev/okta-node-cli-example"},"oktadev/okta-node-cli-example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs"},"Build a Command Line Application with Node.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.okta.com/docs/guides/implement-grant-type/authcodepkce/main/#about-the-authorization-code-grant-with-pkce"},"About the Authorization Code grant with PKCE"))))}h.isMDXComponent=!0},64791:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/okta-pkce-cli-login-984bdced01ccc0963b19556d1800450d.png"},11981:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/seqdiagram-405ae2f7d8f54f113c5190e8d5799117.png"},59943:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);a(45697);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}const r=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,a=e.file;return"https://gist.github.com/"+t+".js"+(a?"?file="+a:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,a=e.file,n=this.iframeNode,o=n.document;n.contentDocument?o=n.contentDocument:n.contentWindow&&(o=n.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(a?"gist-"+t+"-"+a:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";o.open(),o.writeln(i),o.close()},t.prototype.render=function(){var e=this,t=this.props,a=t.id,o=t.file;return n.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:o?"gist-"+a+"-"+o:"gist-"+a})},t}(n.PureComponent)},13058:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/okta-pkce-cli-login-984bdced01ccc0963b19556d1800450d.png"},26921:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/seqdiagram-405ae2f7d8f54f113c5190e8d5799117.png"}}]);