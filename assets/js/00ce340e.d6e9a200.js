"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[29427],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},99780:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(83117),r=(a(67294),a(3905)),o=a(73992),i=a(18679),l=a(59943);const s={slug:"simple-sso-with-an-external-idp-using-active-directory-and-okta",title:"Simple SSO with an external IdP using Active Directory and Okta",authors:["jeffreyaven"],draft:!1,image:"/img/blog/okta-ad-sso-featured-image.png",tags:["okta","azure","active directory","azure active directory","sso","single sign on","identity"],keywords:["okta","azure","active directory","azure active directory","sso","single sign on","identity"],description:"A simple SSO pattern for authenticating and authorizing users from an external AD and to your application without requiring federation."},u=void 0,c={permalink:"/simple-sso-with-an-external-idp-using-active-directory-and-okta",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/src/blog/2022-02-04-simple-sso-with-an-external-idp-using-active-directory-and-okta/index.md",source:"@site/blog/2022-02-04-simple-sso-with-an-external-idp-using-active-directory-and-okta/index.md",title:"Simple SSO with an external IdP using Active Directory and Okta",description:"A simple SSO pattern for authenticating and authorizing users from an external AD and to your application without requiring federation.",date:"2022-02-04T00:00:00.000Z",formattedDate:"February 4, 2022",tags:[{label:"okta",permalink:"/tags/okta"},{label:"azure",permalink:"/tags/azure"},{label:"active directory",permalink:"/tags/active-directory"},{label:"azure active directory",permalink:"/tags/azure-active-directory"},{label:"sso",permalink:"/tags/sso"},{label:"single sign on",permalink:"/tags/single-sign-on"},{label:"identity",permalink:"/tags/identity"}],readingTime:3.48,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"simple-sso-with-an-external-idp-using-active-directory-and-okta",title:"Simple SSO with an external IdP using Active Directory and Okta",authors:["jeffreyaven"],draft:!1,image:"/img/blog/okta-ad-sso-featured-image.png",tags:["okta","azure","active directory","azure active directory","sso","single sign on","identity"],keywords:["okta","azure","active directory","azure active directory","sso","single sign on","identity"],description:"A simple SSO pattern for authenticating and authorizing users from an external AD and to your application without requiring federation."},prevItem:{title:"Implementing a Serverless SFTP Gateway using the AWS Transfer Family",permalink:"/implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family"},nextItem:{title:"Converting to local time in AWS Lambda using Node.js",permalink:"/converting-to-local-time-in-aws-lambda-using-nodejs"}},p={authorsImageUrls:[void 0]},d=[{value:"the Challenge",id:"the-challenge",level:2},{value:"the Solution",id:"the-solution",level:2},{value:"Setup and Configuration",id:"setup-and-configuration",level:2},{value:"Authorisation flow",id:"authorisation-flow",level:2},{value:"Next up",id:"next-up",level:2}],m={toc:d};function f(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article describes a simple SSO pattern for authenticating and authorizing users from an external AD and to your application without requiring federation.  "),(0,r.kt)("h2",{id:"the-challenge"},"the Challenge"),(0,r.kt)("p",null,"You need to authenticate external users to use your application, these users belong to an organization using Azure Active Directory with specific login policies (such as password strength and expiry, multi factor authentication, etc).  Your requirements (if you choose to accept them) are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You are required to provide SSO to these users using their home AD tenant and policies"),(0,r.kt)("li",{parentName:"ol"},"The solution does not include SAML based federation between directories (yours and theirs)"),(0,r.kt)("li",{parentName:"ol"},"The solution does not require any changes on the external AD tenant (no new AAD applications, client secrets, etc)")),(0,r.kt)("h2",{id:"the-solution"},"the Solution"),(0,r.kt)("p",null,"Using an IDAM/IDaaS platform (such as Okta in this case), along with an AAD application (in your AD tenant in your Azure subscription), you can create a local AD app using this magic property to accomplish all of the above requirements (requiring zero changes on the third-party AD).  "),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(3546).Z},(0,r.kt)("img",{alt:"Azure AD App Registration",src:a(20120).Z,width:"849",height:"900"}))," "),(0,r.kt)("p",null,"This is what it looks like using the ",(0,r.kt)("inlineCode",{parentName:"p"},"az")," cli:"),(0,r.kt)(l.Z,{id:"8b70fbe242da02ca844bf2fe53355743",mdxType:"Gist"}),(0,r.kt)("p",null,"the ",(0,r.kt)("inlineCode",{parentName:"p"},"--available-to-other-tenants")," property is Microsoft's way of allowing you to implicitly trust other AAD/Office 365 tenants, meaning the authentication request is passed to the target AD tenant from your application.  "),(0,r.kt)("p",null,"Here is a context diagram which explains the interactions in the context of a Jamstack application (using a library such as Auth.js).  "),(0,r.kt)(o.Z,{defaultValue:"overview",values:[{label:"Overview",value:"overview"},{label:"PlantUML",value:"plantuml"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"overview",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(98824).Z},(0,r.kt)("img",{alt:"Okta AD SSO Context Diagram",src:a(17416).Z,width:"662",height:"571"}))," ")),(0,r.kt)(i.Z,{value:"plantuml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plantuml"},'@startuml\n\n!define C4Puml https://raw.githubusercontent.com/RicardoNiepel/C4-PlantUML/master\n!includeurl C4Puml/C4_Context.puml\n!includeurl C4Puml/C4_Component.puml\n!includeurl C4Puml/C4_Container.puml\n\n\'left to right direction\n\n!define Rel_NoRank(e_from,e_to, e_label=" ") Rel_(e_from,e_to, e_label, "-[norank]->")\n\n!$imgroot = "https://github.com/avensolutions/plantuml-cloud-image-library/raw/main/images"\n\n!unquoted procedure $AzureActiveDirectory($alias, $label, $techn, $descr="", $stereo="Azure Active Directory")\n    rectangle "==$label\\n\\n<img:$imgroot/azure/AzureActiveDirectory.png{scale=0.75}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Okta($alias, $label, $techn, $descr="", $stereo="Okta")\n    rectangle "==$label\\n\\n<img:$imgroot/okta/okta.png{scale=1}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\nPerson(user, User\\n<i>UserAgent (Browser) )\nPerson(admin, Application Admin)\nnote right\nCreate users in the Okta org with the same email as the users email address in their AD (external AD)\nend note\nrectangle "Application Environment" <<boundary>> as app{\n    $AzureActiveDirectory(localad, Local AD Tenant, Azure Active Directory)\n    $Okta(okta, Local Okta Org, Okta)\n}\n$AzureActiveDirectory(otherad, Azure AD Tenant\\n<i>(External AD), Azure Active Directory)\n\nLay_D(user, okta)\nLay_R(okta, localad)\nLay_R(localad, otherad)\nLay_D(okta, admin)\n\nRel_U(okta, user, access code)\nRel_D(user, okta, authorize request)\nRel_R(okta, localad, routes to)\nRel_R(localad, otherad, forwards to)\nRel_U(admin, okta, creates users)\n\n@enduml\n')))),(0,r.kt)("h2",{id:"setup-and-configuration"},"Setup and Configuration"),(0,r.kt)("p",null,"The following flowchart explains the steps involved in setting this up.  The highlighted nodes are part of normal application lifecycle operations as users get created and deactivated.  "),(0,r.kt)(o.Z,{defaultValue:"flowchart",values:[{label:"Flowchart",value:"flowchart"},{label:"Mermaid",value:"mermaidCode"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"flowchart",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(50734).Z},(0,r.kt)("img",{alt:"Okta AD SSO Setup Flowchart",src:a(70602).Z,width:"749",height:"810"}))," ")),(0,r.kt)(i.Z,{value:"mermaidCode",mdxType:"TabItem"},(0,r.kt)("mermaid",{value:"flowchart TD;\n  subgraph Local Azure AD;\n    a1(1. Create AD App);\n  end;\n  subgraph Okta;\n    b1(2. Create IdP)--\x3eb2(3. Create Application);\n    b2--\x3eb3(4. Create IdP\\nRouting Rule\\nfor Application);\n    b3--\x3eb4(5. Create Group);\n    b4--\x3eb5(6. Assign Group\\nto Application);\n    b5--\x3ec1(7. Create User);\n    c1--\x3ec2(8. Add User to Group);\n    style c1 fill:#f9f,stroke:#333,stroke-width:4px;\n    style c2 fill:#f9f,stroke:#333,stroke-width:4px;\n  end;\n  subgraph Application;\n    d1(9. Configure ISSUER\\nand CLIENTID);\t\t\n  end;\n  a1--\x3eOkta;\n  b3--\x3eApplication;"}))),(0,r.kt)("h2",{id:"authorisation-flow"},"Authorisation flow"),(0,r.kt)("p",null,"The authorization flow for a public client (SPA) using PKCE (Proof Key for Code Exchange) is shown here:    "),(0,r.kt)(o.Z,{defaultValue:"sequence",values:[{label:"Sequence",value:"sequence"},{label:"Mermaid",value:"mermaidCode"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sequence",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(45218).Z},(0,r.kt)("img",{alt:"Okta AD SSO Authorization Flow",src:a(66549).Z,width:"1501",height:"785"})))),(0,r.kt)(i.Z,{value:"mermaidCode",mdxType:"TabItem"},(0,r.kt)("mermaid",{value:"sequenceDiagram;\n  %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#AACCFF', 'primaryBorderColor': '#999000', 'actorLineColor': '#000000' }}}%%;\n  participant user as User;\n  participant spa as User Agent (SPA);\n  participant be as Back End APIs;\n  participant okta as Okta;\n  participant msft as Microsoft Login;\n  user->>spa: ;\n  spa->>okta: local.okta.com/../authorize;\n  Note over spa,okta: includes client_id (okta), code_challenge (PKCE), redirect_uri (to app), response_type, scope\n  okta--\x3e>spa: 302 REDIRECT; \n  spa->>msft: login.microsoftonline.com/../authorize;\n  Note over spa,msft: includes client_id (msft app id), state, redirect_uri (to okta), response_type, scope\n  msft->>msft: authenticate;\n  msft--\x3e>okta: local.okta.com/../authorize/callback;\n  okta--\x3e>msft:  302 REDIRECT;\n  msft--\x3e>spa: app/callback?code=xxx;\n  spa->>okta: exchange code for an access token;\n  okta->>spa: token;\n  spa->>be: present token to access resources;"}))),(0,r.kt)("h2",{id:"next-up"},"Next up"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Code!"),"  Stay tuned..."))}f.isMDXComponent=!0},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(34334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>A});var n=a(83117),r=a(67294),o=a(34334),i=a(76775),l=a(75238),s=a(33609),u=a(92560);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:a,groupId:n}),[f,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=s??f;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var h=a(72957),g=a(51048);const b="tabList__CuJ",y="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,h.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=s[a].value;n!==i&&(c(t),l(n))},d=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function A(e){const t=(0,g.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},3546:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/azure-ad-app-registration-9857aa65a9e76e9710d04eb12cf875c2.png"},45218:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/okta-ad-sso-authorization-flow-760ab053c2fea594de308cd833cf8975.svg"},98824:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/okta-ad-sso-context-diagram-080a3ead154d3ab5f7a1ebb43259f3ed.png"},50734:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/okta-ad-sso-setup-flowchart-ae59463b7d2de2881cb11b6b9520f198.svg"},59943:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294);a(45697);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}const i=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,a=e.file;return"https://gist.github.com/"+t+".js"+(a?"?file="+a:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,a=e.file,n=this.iframeNode,r=n.document;n.contentDocument?r=n.contentDocument:n.contentWindow&&(r=n.contentWindow.document);var o='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(a?"gist-"+t+"-"+a:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";r.open(),r.writeln(o),r.close()},t.prototype.render=function(){var e=this,t=this.props,a=t.id,r=t.file;return n.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:r?"gist-"+a+"-"+r:"gist-"+a})},t}(n.PureComponent)},20120:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/azure-ad-app-registration-9857aa65a9e76e9710d04eb12cf875c2.png"},66549:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/okta-ad-sso-authorization-flow-760ab053c2fea594de308cd833cf8975.svg"},17416:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/okta-ad-sso-context-diagram-080a3ead154d3ab5f7a1ebb43259f3ed.png"},70602:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/okta-ad-sso-setup-flowchart-ae59463b7d2de2881cb11b6b9520f198.svg"}}]);