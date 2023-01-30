"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[96842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(83117),i=(n(67294),n(3905));const r={slug:"create-and-use-custom-magic-commands-in-jupyter",title:"Create and use Custom Magic Commands in Jupyter",authors:["jeffreyaven"],draft:!1,image:"/img/blog/custom-jupyter-magic-featured-image.png",tags:["jupyter","magic","python","ipython","pandas","postgresql","sql","postgres"],keywords:["jupyter","magic","python","ipython","pandas","postgresql","sql","postgres"],description:"Quick example of creating and using a custom Jupyter magic command."},o=void 0,l={permalink:"/create-and-use-custom-magic-commands-in-jupyter",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/src/blog/2022-11-18-create-and-use-custom-magic-commands-in-jupyter/index.md",source:"@site/blog/2022-11-18-create-and-use-custom-magic-commands-in-jupyter/index.md",title:"Create and use Custom Magic Commands in Jupyter",description:"Quick example of creating and using a custom Jupyter magic command.",date:"2022-11-18T00:00:00.000Z",formattedDate:"November 18, 2022",tags:[{label:"jupyter",permalink:"/tags/jupyter"},{label:"magic",permalink:"/tags/magic"},{label:"python",permalink:"/tags/python"},{label:"ipython",permalink:"/tags/ipython"},{label:"pandas",permalink:"/tags/pandas"},{label:"postgresql",permalink:"/tags/postgresql"},{label:"sql",permalink:"/tags/sql"},{label:"postgres",permalink:"/tags/postgres"}],readingTime:2.785,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"create-and-use-custom-magic-commands-in-jupyter",title:"Create and use Custom Magic Commands in Jupyter",authors:["jeffreyaven"],draft:!1,image:"/img/blog/custom-jupyter-magic-featured-image.png",tags:["jupyter","magic","python","ipython","pandas","postgresql","sql","postgres"],keywords:["jupyter","magic","python","ipython","pandas","postgresql","sql","postgres"],description:"Quick example of creating and using a custom Jupyter magic command."},prevItem:{title:"AWS IAM vs Google IAM",permalink:"/aws-iam-vs-google-iam"},nextItem:{title:"Deno in 5 Minutes",permalink:"/deno-in-five-minutes"}},s={authorsImageUrls:[void 0]},c=[{value:"Create the extension module",id:"create-the-extension-module",level:2},{value:"Write the magic extension",id:"write-the-magic-extension",level:2},{value:"Create a Magic Class",id:"create-a-magic-class",level:3},{value:"Load and register the extension",id:"load-and-register-the-extension",level:3},{value:"Complete extension code",id:"complete-extension-code",level:3},{value:"Load the magic extension",id:"load-the-magic-extension",level:2},{value:"Use the magic function in a cell",id:"use-the-magic-function-in-a-cell",level:2},{value:"Use the magic function on a line",id:"use-the-magic-function-on-a-line",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We were looking to implement a variant of the ",(0,i.kt)("inlineCode",{parentName:"p"},"%sql")," magic command in Jupyter without using the default ",(0,i.kt)("inlineCode",{parentName:"p"},"sqlalchemy")," module (in our case, just using ",(0,i.kt)("inlineCode",{parentName:"p"},"psycopg2")," to connect to a local server - a StackQL postrges wire protocol server).  "),(0,i.kt)("h2",{id:"create-the-extension-module"},"Create the extension module"),(0,i.kt)("p",null,"We named our extension and cell magic command ",(0,i.kt)("inlineCode",{parentName:"p"},"stackql"),", so start by creating a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"stackql.py"),".  We made this file in a directory name ",(0,i.kt)("inlineCode",{parentName:"p"},"ext")," in the Jupyter working directory.    "),(0,i.kt)("h2",{id:"write-the-magic-extension"},"Write the magic extension"),(0,i.kt)("p",null,"Magic commands can be ",(0,i.kt)("strong",{parentName:"p"},"line-based")," or ",(0,i.kt)("strong",{parentName:"p"},"cell-based")," or ",(0,i.kt)("strong",{parentName:"p"},"line-or-cell-based"),"; in this example, we will use line-or-cell-based magic, meaning the decorator ",(0,i.kt)("inlineCode",{parentName:"p"},"%stackql")," will be used to evaluate a line of code and the ",(0,i.kt)("inlineCode",{parentName:"p"},"%%stackql")," decorator will be used to evaluate the entire contents of the cell it is used in.    "),(0,i.kt)("p",null,"The bare-bones class and function definitions required for this extension are described below:  "),(0,i.kt)("h3",{id:"create-a-magic-class"},"Create a Magic Class"),(0,i.kt)("p",null,"We will need to define a ",(0,i.kt)("strong",{parentName:"p"},"magics class"),", which we will use to define the magic commands.  The class name is arbitrary, but it must be a subclass of ",(0,i.kt)("inlineCode",{parentName:"p"},"IPython.core.magic.Magics"),".  An example is below:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from IPython.core.magic import (Magics, magics_class, line_cell_magic)\n\n@magics_class\nclass StackqlMagic(Magics):\n\n    @line_cell_magic\n    def stackql(self, line, cell=None):\n        if cell is None:\n            # do something with line\n        else:\n            # do something with cell\n        return results\n")),(0,i.kt)("h3",{id:"load-and-register-the-extension"},"Load and register the extension"),(0,i.kt)("p",null,"To register the magic functions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"StackqlMagic")," class we created above, use a function named ",(0,i.kt)("inlineCode",{parentName:"p"},"load_ipython_extension"),", like the following:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def load_ipython_extension(ipython):\n    ipython.register_magics(StackqlMagic)\n")),(0,i.kt)("h3",{id:"complete-extension-code"},"Complete extension code"),(0,i.kt)("p",null,"The complete code for our extension is shown here:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from __future__ import print_function\nimport pandas as pd\nimport psycopg2, json\nfrom psycopg2.extras import RealDictCursor\nfrom IPython.core.magic import (Magics, magics_class, line_cell_magic)\nfrom io import StringIO\nfrom string import Template\n\nconn = psycopg2.connect("dbname=stackql user=stackql host=localhost port=5444")\n\n@magics_class\nclass StackqlMagic(Magics):\n\n    def get_rendered_query(self, data):\n        t = Template(StringIO(data).read())\n        rendered = t.substitute(self.shell.user_ns)\n        return rendered\n\n    def run_query(self, query):\n        cur = conn.cursor(cursor_factory=RealDictCursor)\n        cur.execute(query)\n        rows = cur.fetchall()\n        cur.close()\n        return pd.read_json(json.dumps(rows))\n\n    @line_cell_magic\n    def stackql(self, line, cell=None):\n        if cell is None:\n            results = self.run_query(self.get_rendered_query(line))\n        else:\n            results = self.run_query(self.get_rendered_query(cell))\n        return results            \n\ndef load_ipython_extension(ipython):\n    ipython.register_magics(StackqlMagic)\n')),(0,i.kt)("h2",{id:"load-the-magic-extension"},"Load the magic extension"),(0,i.kt)("p",null,"To use our extension, we need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"%load_ext magic")," command referencing the extension we created.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%load_ext ext.stackql\n")),(0,i.kt)("p",null,"Note that since our extension was a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"stackql.py")," in a directory named ",(0,i.kt)("inlineCode",{parentName:"p"},"ext")," we reference it using ",(0,i.kt)("inlineCode",{parentName:"p"},"ext.stackql"),".   "),(0,i.kt)("h2",{id:"use-the-magic-function-in-a-cell"},"Use the magic function in a cell"),(0,i.kt)("p",null,"To use the magic function in a cell (operating on all contents of the cell), we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"%%")," decorator, like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%%stackql\nSHOW SERVICES IN azure\n")),(0,i.kt)("h2",{id:"use-the-magic-function-on-a-line"},"Use the magic function on a line"),(0,i.kt)("p",null,"To use the magic function on a line, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"%")," decorator, like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%stackql DESCRIBE aws.ec2.instances\n")),(0,i.kt)("admonition",{title:"Using Variable Expansion",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'In our example, we implemented variable expansion using the "batteries included" String templating capabilities in Python3.  This allows for variables to be set globally in our notebooks and then used in our queries.  For example, we can set a variable in a cell like:'),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"project = 'stackql-demo'\nzone = 'australia-southeast1-a'\n")),(0,i.kt)("p",{parentName:"admonition"},"Then use those variables in our queries like:  "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%%stackql\nSELECT status, count(*) as num_instances\nFROM google.compute.instances\nWHERE project = '$project' \nAND zone = '$zone'\nGROUP BY status\n"))),(0,i.kt)("p",null,"An example is shown here:  "),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(24328).Z},(0,i.kt)("img",{alt:"Using a Custom Jupyter Magic Command",src:n(56380).Z,width:"1920",height:"1040"}))),(0,i.kt)("p",null,"The complete code can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stackql/stackql-jupyter-demo"},(0,i.kt)("strong",{parentName:"a"},"stackql/stackql-jupyter-demo")),"."))}m.isMDXComponent=!0},24328:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/custom-jupyter-magic-command-6da8188974fc536fcf306c7e98aec312.png"},56380:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/custom-jupyter-magic-command-6da8188974fc536fcf306c7e98aec312.png"}}]);