"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[5443],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,g=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47510:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return d},default:function(){return h}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={slug:"eventarc-the-state-of-eventing-in-google-cloud",title:"EventArc: The state of eventing in Google Cloud",authors:["tomklimovski"],draft:!1,hide_table_of_contents:!0,image:"images/service-mesh-1.png",tags:["eventarc","google-cloud-platform","microservices"],keywords:["eventarc","google-cloud-platform","microservices"]},c=void 0,l={permalink:"/eventarc-the-state-of-eventing-in-google-cloud",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2021-02-28-eventarc-the-state-of-eventing-in-google-cloud/index.md",source:"@site/blog/2021-02-28-eventarc-the-state-of-eventing-in-google-cloud/index.md",title:"EventArc: The state of eventing in Google Cloud",description:"When defining event-driven architectures, it's always good to keep up with how the landscape is changing. How do you connect microservices in your architecture? Is Pub/Sub the end-game for all events? To dive a bit deeper, let's talk through the benefits of having a single\xa0orchestrator, or perhaps a choreographer is better?",date:"2021-02-28T00:00:00.000Z",formattedDate:"February 28, 2021",tags:[{label:"eventarc",permalink:"/tags/eventarc"},{label:"google-cloud-platform",permalink:"/tags/google-cloud-platform"},{label:"microservices",permalink:"/tags/microservices"}],readingTime:2.81,truncated:!1,authors:[{name:"Tom Klimovski",title:"Senior Cloud Engineer",url:"https://github.com/tomklimovskigamma",imageURL:"http://2.gravatar.com/avatar/58faa98ad68138dd1997f828f00a882e?s=80",key:"tomklimovski"}],prevItem:{title:"Enumerating all roles for a user in Snowflake",permalink:"/enumerating-all-roles-for-a-user-in-snowflake"},nextItem:{title:"Microservices Concepts: Orchestration versus Choreography",permalink:"/microservices-concepts-orchestration-versus-choreography"}},u={authorsImageUrls:[void 0]},d=[{value:"Orchestration versus choreography refresher",id:"orchestration-versus-choreography-refresher",children:[]},{value:"What is Eventarc?",id:"what-is-eventarc",children:[{value:"But how does it work?",id:"but-how-does-it-work",children:[]},{value:"Why do I need Eventarc? I have the Pub/Sub",id:"why-do-i-need-eventarc-i-have-the-pubsub",children:[]}]}],p={toc:d};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When defining event-driven architectures, it's always good to keep up with how the landscape is changing. How do you connect microservices in your architecture? Is Pub/Sub the end-game for all events? To dive a bit deeper, let's talk through the benefits of having a single\xa0",(0,a.kt)("em",{parentName:"p"},"orchestrator"),", or perhaps a choreographer is better?"),(0,a.kt)("h2",{id:"orchestration-versus-choreography-refresher"},"Orchestration versus choreography refresher"),(0,a.kt)("p",null,"My colleague ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/jeffreyaven/"},"@jeffreyaven")," did a recent post explaining this concept in simple terms, which is worth reviewing, see:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloudywithachanceofbigdata.com/microservices-concepts-orchestration-versus-choreography/"},(0,a.kt)("strong",{parentName:"a"},"Microservices Concepts: Orchestration versus Choreography"))),(0,a.kt)("p",null,"Should there really be a central orchestrator controlling all interactions between services.....or, should each service work independently and only interact through events?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Orchestration"),"\xa0is usually viewed as a domain-wide central service that defines the flow and control of communication between services. In this paradigm, in becomes easier to change and ultimately monitor policies across your org."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Choreography"),"\xa0has each service registering and emitting events as they need to. It doesn't direct or define the flow of communication, but using this method usually has a central broker passing around messages and allows services to be truly independent.")),(0,a.kt)("p",null,"Enter\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/workflows"},"Workflows"),", which is suited for centrally orchestrated services. Not only Google Cloud service such as Cloud Functions and Cloud Run, but also external services."),(0,a.kt)("p",null,"How about choreography?\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/pubsub"},"Pub/Sub"),"\xa0and\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/serverless/build-event-driven-applications-in-cloud-run"},"Eventarc"),"\xa0are both suited for this. We all know and love Pub/Sub,\xa0",(0,a.kt)("em",{parentName:"p"},"but how do I use EventArc?")),(0,a.kt)("h2",{id:"what-is-eventarc"},"What is Eventarc?"),(0,a.kt)("p",null,"Announced in October-2020, it was introduced as eventing functionality that enables you, the developer, to send events\xa0",(0,a.kt)("em",{parentName:"p"},"to"),"\xa0Cloud Run from more than 60 Google Cloud sources."),(0,a.kt)("h3",{id:"but-how-does-it-work"},"But how does it work?"),(0,a.kt)("p",null,"Eventing is done by reading those sweet sweet Audit Logs, from various sources, and sending them to Cloud Run services as events in\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cloudevents.io/"},"Cloud Events"),"\xa0format. Quick primer on Cloud Events: its a specification for describing event data in a common way. The specification is now under the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cncf.io/"},"Cloud Native Computing Foundation"),". Hooray! It can also read events from Pub/Sub topics for custom applications. Here's a diagram I graciously ripped from\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/topics/developers-practitioners/eventarc-unified-eventing-experience-google-cloud"},"Google Cloud Blog"),":"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(38242).Z},(0,a.kt)("img",{alt:"Eventarc",src:n(89124).Z}))),(0,a.kt)("h3",{id:"why-do-i-need-eventarc-i-have-the-pubsub"},"Why do I need Eventarc? I have the Pub/Sub"),(0,a.kt)("p",null,"Good question. Eventarc provides and easier path to receive events not only from Pub/Sub topics but from a number of Google Cloud sources with its Audit Log and Pub/Sub integration. Actually,\xa0",(0,a.kt)("em",{parentName:"p"},"any"),"\xa0service that has Audit Log integration can be an event source for Eventarc. Beyond easy integration, it provides consistency and structure to how events are generated, routed and consumed. Things like:"),(0,a.kt)("h4",{id:"triggers"},(0,a.kt)("strong",{parentName:"h4"},"Triggers")),(0,a.kt)("p",null,"They specify routing rules from events sources, to event sinks. Listen for new object creation in GCS and route that event to a service in Cloud Run by creating an Audit-Log-Trigger. Create triggers that also listen to Pub/Sub. Then list\xa0",(0,a.kt)("strong",{parentName:"p"},"all"),"\xa0triggers in one, central place in Eventarc:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"gcloud beta eventarc triggers list")),(0,a.kt)("h4",{id:"consistency-with-eventing-format-and-libraries"},(0,a.kt)("strong",{parentName:"h4"},"Consistency with eventing format and libraries")),(0,a.kt)("p",null,"Using the CloudEvent-compliant specification will allow for event data in a common way, increasing the movement towards the goal of consistency, accessibility and portability. Makes it easier for different languages to read the event and Google Events Libraries to parse fields."),(0,a.kt)("p",null,"This means that the long-term vision of Eventarc to be the\xa0",(0,a.kt)("strong",{parentName:"p"},"hub"),"\xa0of events, enabling a unified eventing story for Google Cloud and beyond."),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(83314).Z},(0,a.kt)("img",{alt:"Eventarc producers and consumers",src:n(37651).Z}))),(0,a.kt)("p",null,"In the future, you can excpect to forego Audit Log and read these events directly and send these out to even more sinks within GCP and any HTTP target."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This article written on inspiration from\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/topics/developers-practitioners/eventarc-unified-eventing-experience-google-cloud"},"https://cloud.google.com/blog/topics/developers-practitioners/eventarc-unified-eventing-experience-google-cloud"),". Thanks Mete Atamel!"))}h.isMDXComponent=!0},38242:function(e,t,n){t.Z=n.p+"assets/files/CloudEvents_fig1-4783f065699c51da51533f449993da71.png"},83314:function(e,t,n){t.Z=n.p+"assets/files/CloudEvents_fig2-5aa5db31489216065557e5f35995b461.png"},89124:function(e,t,n){t.Z=n.p+"assets/images/CloudEvents_fig1-4783f065699c51da51533f449993da71.png"},37651:function(e,t,n){t.Z=n.p+"assets/images/CloudEvents_fig2-5aa5db31489216065557e5f35995b461.png"}}]);