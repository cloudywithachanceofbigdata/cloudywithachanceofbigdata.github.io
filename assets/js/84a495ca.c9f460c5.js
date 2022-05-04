"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[6447],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,p=m["".concat(l,".").concat(f)]||m[f]||d[f]||i;return n?a.createElement(p,o(o({ref:t},c),{},{components:n})):a.createElement(p,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(83117),r=n(67294),i=n(72389),o=n(30662),s=n(86010),l="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,c=e.block,d=e.defaultValue,m=e.values,f=e.groupId,p=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var D=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=g[0])?void 0:i.props.value;if(null!==D&&!h.some((function(e){return e.value===D})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+D+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,o.UB)(),b=T.tabGroupChoices,y=T.setTabGroupChoices,w=(0,r.useState)(D),k=w[0],S=w[1],O=[],j=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=b[f];null!=E&&E!==k&&h.some((function(e){return e.value===E}))&&S(E)}var N=function(e){var t=e.currentTarget,n=O.indexOf(t),a=h[n].value;a!==k&&(j(t),S(a),null!=f&&y(f,a))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},p)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:function(e){return O.push(e)},onKeyDown:A,onFocus:N,onClick:N},i,{className:(0,s.Z)("tabs__item",l,null==i?void 0:i.className,{"tabs__item--active":k===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(g.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}function c(e){var t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},32276:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return f}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(9877),s=n(58215),l=["components"],u={slug:"converting-to-local-time-in-aws-lambda-using-nodejs",title:"Converting to local time in AWS Lambda using Node.js",authors:["jeffreyaven"],draft:!1,tags:["aws","lambda","nodejs","javascript"],keywords:["aws","lambda","nodejs","javascript"],description:"A simple pattern for converting dates in AWS Lambda using a Node.js runtime from GMT/UTC (the default) to a local time observing daylight savings time."},c=void 0,d={permalink:"/converting-to-local-time-in-aws-lambda-using-nodejs",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2022-01-29-converting-to-local-time-in-aws-lambda-using-nodejs/index.md",source:"@site/blog/2022-01-29-converting-to-local-time-in-aws-lambda-using-nodejs/index.md",title:"Converting to local time in AWS Lambda using Node.js",description:"A simple pattern for converting dates in AWS Lambda using a Node.js runtime from GMT/UTC (the default) to a local time observing daylight savings time.",date:"2022-01-29T00:00:00.000Z",formattedDate:"January 29, 2022",tags:[{label:"aws",permalink:"/tags/aws"},{label:"lambda",permalink:"/tags/lambda"},{label:"nodejs",permalink:"/tags/nodejs"},{label:"javascript",permalink:"/tags/javascript"}],readingTime:4.62,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"converting-to-local-time-in-aws-lambda-using-nodejs",title:"Converting to local time in AWS Lambda using Node.js",authors:["jeffreyaven"],draft:!1,tags:["aws","lambda","nodejs","javascript"],keywords:["aws","lambda","nodejs","javascript"],description:"A simple pattern for converting dates in AWS Lambda using a Node.js runtime from GMT/UTC (the default) to a local time observing daylight savings time."},prevItem:{title:"Simple SSO with an external IdP using Active Directory and Okta",permalink:"/simple-sso-with-an-external-idp-using-active-directory-and-okta"},nextItem:{title:"Automating Snowflake Role Based Storage Integration for AWS",permalink:"/automating-snowflake-role-based-storage-integration-for-aws"}},m={authorsImageUrls:[void 0]},f=[{value:"Background",id:"background",level:2},{value:"Solution",id:"solution",level:2},{value:"Breaking it down",id:"breaking-it-down",level:3},{value:"Tests",id:"tests",level:3}],p={toc:f};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"AWS Lambda instances will return UTC/GMT time for any date time object created using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Date.now()")," function in JavaScript as shown here:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"let now = new Date();\nconst tzOffset = now.getTimezoneOffset();\nconsole.log(`Default Timezone Offset: ${tzOffset}`);\n// results in ...\n// Default Timezone Offset: 0\n")),(0,i.kt)("p",null,"Moreover, Lambda instances are stateless and have no concept of local time.  This can make dealing with dates more challenging.  "),(0,i.kt)("p",null,"This is compounded for localities which have legislated Daylight Savings Time during part of the year.  "),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"A simple (vanilla JavaScript - no third party libraries or external API calls) to adjust the time to local time adjusted for Daylight Savings Time is provided here:  "),(0,i.kt)(o.Z,{defaultValue:"commented",values:[{label:"Commented",value:"commented"},{label:"Uncommented",value:"uncommented"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"commented",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function getGmtDstTransitionDate(year, month, transitionDay, hour){\n    const firstDayOfTheMonth = new Date(year, month, 1);\n    let transitionDate = new Date(firstDayOfTheMonth);\n    // find the first transition day of the month if the first day of the month is not a transition day\n    if (firstDayOfTheMonth.getDay() !== transitionDay) {\n        transitionDate = new Date(firstDayOfTheMonth.setDate(firstDayOfTheMonth.getDate() + (transitionDay - firstDayOfTheMonth.getDay())));\n    };\n    // return the transition date and time\n    return new Date(transitionDate.getTime() + (hour * 60 * 60000));\n};\n\nfunction getLocalDateTime(date) {\n    // default to GMT+11 for AEDT\n    let offsetInHours = 11;\n    // if month is between April and October check further, if not return AEDT offset\n    // remeber getMonth is zero based!\n    if (date.getMonth() >= 3 && date.getMonth() <= 9) {\n        // DST starts at 0200 on the First Sunday in October, which is 1600 (16) on the First Saturday (6) in October (9) GMT\n        const dstStartDate = getGmtDstTransitionDate(date.getFullYear(), 9, 6, 16);\n        // DST ends at 0300 on the First Sunday in April, which is 1600 (16) on the First Saturday (6) in April (3) GMT\n        const dstEndDate = getGmtDstTransitionDate(date.getFullYear(), 3, 6, 16);\n        if (date >= dstEndDate && date < dstStartDate) {\n            offsetInHours = 10;\n        };\n    };\n    // return the date and time in local time\n    return new Date(date.getTime() + (offsetInHours * 60 * 60000));\n}\n\n// get current timestamp\nlet now = new Date();\nconsole.log(`UTC Date: ${now}`);\nnow = getLocalDateTime(now);\nconsole.log(`Local toLocaleString: ${now.toLocaleString()}`);\n"))),(0,i.kt)(s.Z,{value:"uncommented",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function getGmtDstTransitionDate(year, month, transitionDay, hour){\n    const firstDayOfTheMonth = new Date(year, month, 1);\n    let transitionDate = new Date(firstDayOfTheMonth);\n    if (firstDayOfTheMonth.getDay() !== transitionDay) {\n        transitionDate = new Date(firstDayOfTheMonth.setDate(firstDayOfTheMonth.getDate() + (transitionDay - firstDayOfTheMonth.getDay())));\n    };\n    return new Date(transitionDate.getTime() + (hour * 60 * 60000));\n};\n\nfunction getLocalDateTime(date) {\n    let offsetInHours = 11;\n    if (date.getMonth() >= 3 && date.getMonth() <= 9) {\n        const dstStartDate = getGmtDstTransitionDate(date.getFullYear(), 9, 6, 16);\n        const dstEndDate = getGmtDstTransitionDate(date.getFullYear(), 3, 6, 16);\n        if (date >= dstEndDate && date < dstStartDate) {\n            offsetInHours = 10;\n        };\n    };\n    return new Date(date.getTime() + (offsetInHours * 60 * 60000));\n}\n\nlet now = new Date();\nconsole.log(`UTC Date: ${now}`);\nnow = getLocalDateTime(now);\nconsole.log(`Local toLocaleString: ${now.toLocaleString()}`);\n")))),(0,i.kt)("h3",{id:"breaking-it-down"},"Breaking it down"),(0,i.kt)("p",null,"This solution is comprised of two functions for DRY purposes.  "),(0,i.kt)("p",null,"The main function ",(0,i.kt)("inlineCode",{parentName:"p"},"getLocalDateTime")," takes a date object representing the current time in UTC and returns a date object representing the local (DST adjusted) time.  "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getLocalDateTime")," function sets a default DST adjusted offset in hours (11 in the case of AEDT), if the month is between April and October the ",(0,i.kt)("inlineCode",{parentName:"p"},"getGmtDstTransitionDate")," is used to determine the exact boundaries between Standard Time and Daylight Savings Time.  "),(0,i.kt)("p",null,"In the case of AEST/AEDT this is the first Sunday in October at 0200 to enter Daylight Savings Time and the first Sunday in April at 0300 to end Daylight Savings Time (both dates and times are adjusted to their equivalent GMT times) and return to Standard Time (10 hours in the cases of AEST).  "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"offsetInHours")," variable and the arguments for ",(0,i.kt)("inlineCode",{parentName:"p"},"getGmtDstTransitionDate")," can be easily modified for other timezones.  "),(0,i.kt)("h3",{id:"tests"},"Tests"),(0,i.kt)("p",null,"Some simple tests to run to check if the code is working correctly, to help with this I have set up the following unit test function:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function unitTest(inputDate, expOutputDate, testCase) {\n    if (getLocalDateTime(inputDate).toUTCString() === expOutputDate.toUTCString()) {\n        console.log(`TEST PASSED ${testCase}`)\n    } else {\n        console.log(`TEST FAILED ${testCase} : input date in GMT ${inputDate} should equal ${expOutputDate}`)\n    };\n};\n")),(0,i.kt)("p",null,"first create dates representing the beginning of Daylight Savings Time (immediately before the beginning, at the beginning and immediately after the beginning):  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'unitTest(new Date(2022, 9, 1, 15, 59, 59, 999), new Date(2022, 9, 2, 1, 59, 59, 999), "one ms before dst start");\n// returns...\n// ...  INFO    TEST PASSED one ms before dst start\nunitTest(new Date(2022, 9, 1, 16, 0, 0, 0), new Date(2022, 9, 2, 3, 0, 0, 0), "dst start");\n// returns...\n// ...  INFO    TEST PASSED dst start    \nunitTest(new Date(2022, 9, 1, 16, 0, 0, 1), new Date(2022, 9, 2, 3, 0, 0, 1), "one ms after dst start");\n// returns...\n// ...  INFO    TEST PASSED one ms after dst start\n')),(0,i.kt)("p",null,"next create dates similar tests representing the end of Daylight Savings Time (or beginning of Standard Time):  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'unitTest(new Date(2022, 3, 2, 15, 59, 59, 999), new Date(2022, 3, 3, 2, 59, 59, 999), "one ms before dst end");\n// returns...\n// ...  INFO    TEST PASSED one ms before dst end    \nunitTest(new Date(2022, 3, 2, 16, 0, 0, 0), new Date(2022, 3, 3, 2, 0, 0, 0), "dst end");\n// returns...\n// ...  INFO    TEST PASSED dst end    \nunitTest(new Date(2022, 3, 2, 16, 0, 0, 1), new Date(2022, 3, 3, 2, 0, 0, 1), "one ms after dst end");\n// returns...\n// ...  INFO    TEST PASSED one ms after dst end\n')),(0,i.kt)("p",null,"Enjoy"))}g.isMDXComponent=!0}}]);