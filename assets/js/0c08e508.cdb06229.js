"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[88478],{7014:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],c={slug:"create-and-use-custom-magic-commands-in-jupyter",title:"Create and use Custom Magic Commands in Jupyter",authors:["jeffreyaven"],draft:!1,image:"/img/blog/custom-jupyter-magic-featured-image.png",tags:["jupyter","magic","python","pandas"],keywords:["jupyter","magic","python","pandas"],description:"Quick example of creating and using a custom Jupyter magic command."},l=void 0,s={permalink:"/create-and-use-custom-magic-commands-in-jupyter",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2022-11-18-create-and-use-custom-magic-commands-in-jupyter/index.md",source:"@site/blog/2022-11-18-create-and-use-custom-magic-commands-in-jupyter/index.md",title:"Create and use Custom Magic Commands in Jupyter",description:"Quick example of creating and using a custom Jupyter magic command.",date:"2022-11-18T00:00:00.000Z",formattedDate:"November 18, 2022",tags:[{label:"jupyter",permalink:"/tags/jupyter"},{label:"magic",permalink:"/tags/magic"},{label:"python",permalink:"/tags/python"},{label:"pandas",permalink:"/tags/pandas"}],readingTime:1.715,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"create-and-use-custom-magic-commands-in-jupyter",title:"Create and use Custom Magic Commands in Jupyter",authors:["jeffreyaven"],draft:!1,image:"/img/blog/custom-jupyter-magic-featured-image.png",tags:["jupyter","magic","python","pandas"],keywords:["jupyter","magic","python","pandas"],description:"Quick example of creating and using a custom Jupyter magic command."},nextItem:{title:"Deno in 5 Minutes",permalink:"/deno-in-five-minutes"}},u={authorsImageUrls:[void 0]},m=[{value:"Create the extension module",id:"create-the-extension-module",level:2},{value:"Write the magic extension",id:"write-the-magic-extension",level:2},{value:"Load and register the extension",id:"load-and-register-the-extension",level:3},{value:"Define the magic function",id:"define-the-magic-function",level:3},{value:"Complete extension code",id:"complete-extension-code",level:3},{value:"Load the magic extension",id:"load-the-magic-extension",level:2},{value:"Use the magic function",id:"use-the-magic-function",level:2}],p={toc:m};function d(e){var t=e.components,c=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We were looking to implement a variant of the ",(0,o.kt)("inlineCode",{parentName:"p"},"%sql")," magic command in Jupyter without using the default ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlalchemy")," module (in our case, just using ",(0,o.kt)("inlineCode",{parentName:"p"},"psycopg2")," to connect to a local server - a StackQL postrges wire protocol server).  "),(0,o.kt)("h2",{id:"create-the-extension-module"},"Create the extension module"),(0,o.kt)("p",null,"We named our extension and cell magic command ",(0,o.kt)("inlineCode",{parentName:"p"},"stackql"),", so start by creating a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"stackql.py"),".  We made this file in a directory name ",(0,o.kt)("inlineCode",{parentName:"p"},"ext")," in the Jupyter working directory.    "),(0,o.kt)("h2",{id:"write-the-magic-extension"},"Write the magic extension"),(0,o.kt)("p",null,"Magic commands can be ",(0,o.kt)("strong",{parentName:"p"},"line-based")," or ",(0,o.kt)("strong",{parentName:"p"},"cell-based"),"; in this example, we will use cell-based magic, meaning the decorator ",(0,o.kt)("inlineCode",{parentName:"p"},"%stackql")," will be used to evaluate the entire contents of the cell it is used in.    "),(0,o.kt)("p",null,"The bare-bones functions required for this extension are described below:  "),(0,o.kt)("h3",{id:"load-and-register-the-extension"},"Load and register the extension"),(0,o.kt)("p",null,"To register the magic function, use a function named ",(0,o.kt)("inlineCode",{parentName:"p"},"load_ipython_extension"),", like the following:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def load_ipython_extension(ipython):\n    ipython.register_magic_function(stackql, 'cell')\n")),(0,o.kt)("h3",{id:"define-the-magic-function"},"Define the magic function"),(0,o.kt)("p",null,"Now define the magic function which will be called and operate on the contents of the cell it is used in:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def stackql(line, cell):\n    # do something with the contents of the cell\n      # e.g using StringIO(cell)\n")),(0,o.kt)("h3",{id:"complete-extension-code"},"Complete extension code"),(0,o.kt)("p",null,"The complete code for our extension is shown here:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\nfrom io import StringIO\nimport psycopg2, json\nfrom psycopg2.extras import RealDictCursor\n\nconn = psycopg2.connect(\"dbname=stackql user=stackql host=localhost port=5444\")\n\ndef run_query(query):\n    cur = conn.cursor(cursor_factory=RealDictCursor)\n    cur.execute(query)\n    rows = cur.fetchall()\n    cur.close()\n    return json.dumps(rows)\n\ndef stackql(line, cell):\n    query = StringIO(cell)\n    return pd.read_json(run_query(query.read()))\n\ndef load_ipython_extension(ipython):\n    ipython.register_magic_function(stackql, 'cell')\n")),(0,o.kt)("h2",{id:"load-the-magic-extension"},"Load the magic extension"),(0,o.kt)("p",null,"To use our extension, we need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"%load_ext magic")," command referencing the extension we created.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"%load_ext ext.stackql\n")),(0,o.kt)("p",null,"Note that since our extension was a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"stackql.py")," in a directory named ",(0,o.kt)("inlineCode",{parentName:"p"},"ext")," we reference it using ",(0,o.kt)("inlineCode",{parentName:"p"},"ext.stackql"),".   "),(0,o.kt)("h2",{id:"use-the-magic-function"},"Use the magic function"),(0,o.kt)("p",null,"To use the magic function, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"%%")," decorator, like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"%%stackql\nSHOW SERVICES IN azure LIKE '%compute%'\n")),(0,o.kt)("p",null,"An example is shown here:  "),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(24328).Z},(0,o.kt)("img",{alt:"Using a Custom Jupyter Magic Command",src:n(56380).Z,width:"1920",height:"1040"}))),(0,o.kt)("p",null,"The complete code can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stackql/stackql-jupyter-demo"},(0,o.kt)("strong",{parentName:"a"},"stackql/stackql-jupyter-demo")),"."))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},24328:function(e,t,n){t.Z=n.p+"assets/files/custom-jupyter-magic-command-6da8188974fc536fcf306c7e98aec312.png"},56380:function(e,t,n){t.Z=n.p+"assets/images/custom-jupyter-magic-command-6da8188974fc536fcf306c7e98aec312.png"}}]);