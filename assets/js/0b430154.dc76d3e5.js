"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[1156],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=o,f=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8600:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=n(59943),l=["components"],c={slug:"simple-cli-pkce-auth-using-okta",title:"Simple CLI Application to Login to Okta using PKCE",authors:["jeffreyaven"],draft:!1,image:"/img/blog/okta-pkce-cli-blog-image.png",tags:["okta","oauth2","cli","golang","pkce"],keywords:["okta","oauth2","cli","golang","pkce"],description:"Simple command line application to login to an Okta authorization server using a PKCE flow."},s=void 0,p={permalink:"/simple-cli-pkce-auth-using-okta",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2022-04-17-simple-cli-pkce-auth-using-okta/index.md",source:"@site/blog/2022-04-17-simple-cli-pkce-auth-using-okta/index.md",title:"Simple CLI Application to Login to Okta using PKCE",description:"Simple command line application to login to an Okta authorization server using a PKCE flow.",date:"2022-04-17T00:00:00.000Z",formattedDate:"April 17, 2022",tags:[{label:"okta",permalink:"/tags/okta"},{label:"oauth2",permalink:"/tags/oauth-2"},{label:"cli",permalink:"/tags/cli"},{label:"golang",permalink:"/tags/golang"},{label:"pkce",permalink:"/tags/pkce"}],readingTime:2.09,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"simple-cli-pkce-auth-using-okta",title:"Simple CLI Application to Login to Okta using PKCE",authors:["jeffreyaven"],draft:!1,image:"/img/blog/okta-pkce-cli-blog-image.png",tags:["okta","oauth2","cli","golang","pkce"],keywords:["okta","oauth2","cli","golang","pkce"],description:"Simple command line application to login to an Okta authorization server using a PKCE flow."},prevItem:{title:"Stream Processing with Spark Structured Streaming, Kafka and Snowflake using Python",permalink:"/stream-processing-with-spark-structured-streaming-kafka-and-snowflake-using-python"},nextItem:{title:"Cloudy with a Chance of Big Data has Moved",permalink:"/cloudy-with-a-chance-of-big-data-has-moved"}},u={authorsImageUrls:[void 0]},h=[{value:"Example",id:"example",level:2},{value:"Overview",id:"overview",level:2},{value:"Steps",id:"steps",level:2},{value:"Generate a <code>code_challenge</code>",id:"generate-a-code_challenge",level:3},{value:"Build the <code>authorize</code> url",id:"build-the-authorize-url",level:3},{value:"Get the authorization code via redirect uri",id:"get-the-authorization-code-via-redirect-uri",level:3},{value:"Exchange the code for an access token",id:"exchange-the-code-for-an-access-token",level:3},{value:"(Optional) Get the user profile",id:"optional-get-the-user-profile",level:3},{value:"with inspiration from...",id:"with-inspiration-from",level:2}],d={toc:h};function f(e){var t=e.components,c=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article demonstrates a simple command line utility to login to an authorization server (Okta in this case) using a PKCE (Proof Key for Code Exchange) flow.  This is the preferred flow for public clients (such as Single Page Applications).  "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The code for this article is available on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stackql/okta-pkce-login"},(0,i.kt)("strong",{parentName:"a"},"GitHub")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(64791).Z},(0,i.kt)("img",{alt:"Okta PKCE cli login example",src:n(13058).Z,width:"982",height:"479"}))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This application can be used to illustrate the authorization/authentication flow discussed in ",(0,i.kt)("a",{parentName:"p",href:"https://fullstackchronicles.io/simple-sso-with-an-external-idp-using-active-directory-and-okta"},"Simple SSO with an external IdP using Active Directory and Okta"),".  A flow which is pictured here:  "),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(11981).Z},(0,i.kt)("img",{alt:"PKCE Authorization t Okta using an AD IdP",src:n(26921).Z,width:"904",height:"738"}))),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("p",null,"The steps involved in the implementation of a PKCE login flow are as follows:"),(0,i.kt)("h3",{id:"generate-a-code_challenge"},"Generate a ",(0,i.kt)("inlineCode",{parentName:"h3"},"code_challenge")),(0,i.kt)("p",null,"To implement a PKCE flow, you first need to generate a ",(0,i.kt)("em",{parentName:"p"},"Code Verifier")," (which is a random value you create), the ",(0,i.kt)("em",{parentName:"p"},"Code Verifier")," is then hashed using a SHA256 algorithm.  The hash is then used as the ",(0,i.kt)("em",{parentName:"p"},"Code Challenge"),".  An example function to generate a code challenge is shown below:  "),(0,i.kt)(r.Z,{id:"9a2a162813d77b83821d821b6a4a390a",mdxType:"Gist"}),(0,i.kt)("p",null,"For more information see ",(0,i.kt)("a",{parentName:"p",href:"https://developer.okta.com/blog/2019/08/22/okta-authjs-pkce#:~:text=PKCE%20works%20by%20having%20the,is%20called%20the%20Code%20Challenge"},"Use PKCE to Make Your Apps More Secure"),". "),(0,i.kt)("h3",{id:"build-the-authorize-url"},"Build the ",(0,i.kt)("inlineCode",{parentName:"h3"},"authorize")," url"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"authorize")," url is used to initiate the authorization flow with the authorization server.  An example function to construct the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorize")," url is shown below:  "),(0,i.kt)(r.Z,{id:"9e628b905a532e5bd59f022a4adca340",mdxType:"Gist"}),(0,i.kt)("h3",{id:"get-the-authorization-code-via-redirect-uri"},"Get the authorization code via redirect uri"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"redirecturi")," parameter supplied in the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorize")," url is used to retrieve the authorization code from the authorization server.  In order to get this code using a front end flow, you need to define a handler that will get the authorization code, call the token endpoint, and close the HTTP server, as shown here:  "),(0,i.kt)(r.Z,{id:"617417bdcc54efcea9d37d27228f7f2a",mdxType:"Gist"}),(0,i.kt)("h3",{id:"exchange-the-code-for-an-access-token"},"Exchange the code for an access token"),(0,i.kt)("p",null,"The access token is what you ultimatly want, as this is the token that will be used to access protected resources.  An example function to exchange the authorization code for an access token is shown below:  "),(0,i.kt)(r.Z,{id:"0a990674d8bde2baffc0b0231f52ed52",mdxType:"Gist"}),(0,i.kt)("h3",{id:"optional-get-the-user-profile"},"(Optional) Get the user profile"),(0,i.kt)("p",null,"The access token can be used to get the user profile, this is done by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"userinfo")," endpoint using the token.  An example function to get the user profile is shown below:  "),(0,i.kt)(r.Z,{id:"f04e8b018417a73986d3696c58f735cb",mdxType:"Gist"}),(0,i.kt)("h2",{id:"with-inspiration-from"},"with inspiration from..."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/ogazitt/f749dad9cca8d0ac6607f93a42adf322"},"Auth0 PKCE flow for a CLI built in golang")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://community.auth0.com/t/golang-sample-for-a-cli-obtaining-an-access-token-using-the-pkce-flow/40922"},"Golang sample for a CLI obtaining an access token using the PKCE flow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/oktadev/okta-node-cli-example"},"oktadev/okta-node-cli-example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs"},"Build a Command Line Application with Node.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.okta.com/docs/guides/implement-grant-type/authcodepkce/main/#about-the-authorization-code-grant-with-pkce"},"About the Authorization Code grant with PKCE"))))}f.isMDXComponent=!0},64791:function(e,t,n){t.Z=n.p+"assets/files/okta-pkce-cli-login-984bdced01ccc0963b19556d1800450d.png"},11981:function(e,t,n){t.Z=n.p+"assets/files/seqdiagram-405ae2f7d8f54f113c5190e8d5799117.png"},59943:function(e,t,n){var a=n(67294);n(45697);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var r=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,o=a.document;a.contentDocument?o=a.contentDocument:a.contentWindow&&(o=a.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";o.open(),o.writeln(i),o.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,o=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:o?"gist-"+n+"-"+o:"gist-"+n})},t}(a.PureComponent);t.Z=r},13058:function(e,t,n){t.Z=n.p+"assets/images/okta-pkce-cli-login-984bdced01ccc0963b19556d1800450d.png"},26921:function(e,t,n){t.Z=n.p+"assets/images/seqdiagram-405ae2f7d8f54f113c5190e8d5799117.png"}}]);