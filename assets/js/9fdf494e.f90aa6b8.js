"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[216],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),g=r,d=f["".concat(s,".").concat(g)]||f[g]||p[g]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(83117),r=n(67294),i=n(72389),o=n(30662),l=n(86010),s="tabItem_LplD";function c(e){var t,n,i,c=e.lazy,u=e.block,p=e.defaultValue,f=e.values,g=e.groupId,d=e.className,m=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:m.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===p?p:null!=(t=null!=p?p:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=m[0])?void 0:i.props.value;if(null!==w&&!h.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.UB)(),k=v.tabGroupChoices,y=v.setTabGroupChoices,x=(0,r.useState)(w),P=x[0],T=x[1],_=[],N=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var S=k[g];null!=S&&S!==P&&h.some((function(e){return e.value===S}))&&T(S)}var O=function(e){var t=e.currentTarget,n=_.indexOf(t),a=h[n].value;a!==P&&(N(t),T(a),null!=g&&y(g,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=_.indexOf(e.currentTarget)+1;n=_[a]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;n=_[r]||_[_.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},d)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return _.push(e)},onKeyDown:D,onFocus:O,onClick:O},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(m.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function u(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},76207:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return g}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(9877),l=n(58215),s=["components"],c={slug:"scaling-up-prefect-with-gitstorage",title:"Scaling up Prefect with GitStorage",authors:["chrisottinger"],draft:!1,image:"/img/blog/scaling-up-prefect-with-gitstorage-featured-image.png",tags:["prefect","gitlab","docker","etl"],keywords:["prefect","gitlab","docker","etl"]},u=void 0,p={permalink:"/scaling-up-prefect-with-gitstorage",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2022-02-28-scaling-up-prefect-with-gitstorage/index.md",source:"@site/blog/2022-02-28-scaling-up-prefect-with-gitstorage/index.md",title:"Scaling up Prefect with GitStorage",description:"Prefect.io is a python based Data Engineering toolbox for building and",date:"2022-02-28T00:00:00.000Z",formattedDate:"February 28, 2022",tags:[{label:"prefect",permalink:"/tags/prefect"},{label:"gitlab",permalink:"/tags/gitlab"},{label:"docker",permalink:"/tags/docker"},{label:"etl",permalink:"/tags/etl"}],readingTime:6.12,truncated:!1,authors:[{name:"Chris Ottinger",title:"Senior Technologist",url:"https://github.com/datwiz",imageURL:"http://0.gravatar.com/avatar/f9af9c3fae755ac170c5798c53c5267d?s=80",key:"chrisottinger"}],frontMatter:{slug:"scaling-up-prefect-with-gitstorage",title:"Scaling up Prefect with GitStorage",authors:["chrisottinger"],draft:!1,image:"/img/blog/scaling-up-prefect-with-gitstorage-featured-image.png",tags:["prefect","gitlab","docker","etl"],keywords:["prefect","gitlab","docker","etl"]},prevItem:{title:"Cloudy with a Chance of Big Data has Moved",permalink:"/cloudy-with-a-chance-of-big-data-has-moved"},nextItem:{title:"Implementing a Serverless SFTP Gateway using the AWS Transfer Family",permalink:"/implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family"}},f={authorsImageUrls:[void 0]},g=[{value:"Out of the box - Prefect DockerStorage",id:"out-of-the-box---prefect-dockerstorage",level:2},{value:"Prefect Git Storage",id:"prefect-git-storage",level:2},{value:"Pushing the flow code",id:"pushing-the-flow-code",level:3},{value:"Registering the flow",id:"registering-the-flow",level:3},{value:"Next Steps - Run Config",id:"next-steps---run-config",level:2}],d={toc:g};function m(e){var t=e.components,c=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://prefect.io"},"Prefect.io")," is a python based Data Engineering toolbox for building and\noperating Data Pipelines.  Out of the box, Prefect provides an initial workflow for managing data\npipelines that results in a container image per data pipeline job."),(0,i.kt)("p",null,"The one-to-one relationship between data pipeline jobs and container images enables data engineers to\ncraft pipelines that are loosely coupled and don't require a shared runtime environment configuration.\nHowever, as the number of data pipeline jobs grow the default container per job approach starts to\nintroduce workflow bottlenecks and lifecycle management overheads.  For example, in order\nto update software components used by flows, such as upgrading the version of Prefect, all the data\npipeline job images have to be rebuilt and redeployed.  Additionally the container image per job workflow\nintroduces a wait time for data engineers to re-build data pipeline container images and test flows\ncentrally on Prefect Server or Prefect Cloud environment."),(0,i.kt)("p",null,"Fortunately, Prefect comes to its own rescue with the ability to open up the box, exposing the flexibility\nin the underlying framework."),(0,i.kt)("h2",{id:"out-of-the-box---prefect-dockerstorage"},"Out of the box - Prefect DockerStorage"),(0,i.kt)("p",null,"Out of the box, Prefect provides a simple workflow for defining and deploying data pipelines as container images.\nAfter getting a first data pipeline running in a local environment, the attention turns to scaling up development\nand deploying flows into a managed environment, using either the Prefect Cloud service or a Prefect Server."),(0,i.kt)("p",null,"Combining Prefect Cloud or Prefect Server with Kubernetes provides a flexible and scalable platform\nsolution for moving data pipelines into production.  There are a number of options for packaging\ndata pipeline flow code for execution on kubernetes clusters.  The Docker Storage option provides\nthe workflow for bundling the data pipeline job code into container images, enabling a common\ncontrolled execution environment and well understood distribution mechanism.  The data pipeline runs as\na pod using the flow container image."),(0,i.kt)("p",null,"Prefect Docker Storage workflow steps for building and deploying data pipeline flows include:"),(0,i.kt)(o.Z,{defaultValue:"steps",values:[{label:"Steps",value:"steps"},{label:"PlantUML",value:"plantuml"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"steps",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(43824).Z},(0,i.kt)("img",{alt:"Workflow Steps",src:n(85544).Z,width:"253",height:"435"}))," ")),(0,i.kt)(l.Z,{value:"plantuml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'@startuml "docker-storage-workflow"\n(*) --\x3e "package flow code\ninto a container image" \n--\x3e "register Prefect flow\nusing image reference"\n--\x3e "push image to container registry"\n--\x3e "run flow in Prefect Server or Cloud\n(new image pulled from registry)"\n--\x3e (*)\n@enduml\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"packaging a flow (python code) as a serialised/pickled object into a container image"),(0,i.kt)("li",{parentName:"ul"},"registering the flow using the container image name"),(0,i.kt)("li",{parentName:"ul"},"pushing the container image to a container repository accessible from the kubernetes cluster"),(0,i.kt)("li",{parentName:"ul"},"running the flow by running an instance of the named container image as a kubernetes pod")),(0,i.kt)("p",null,"This is relatively simple immutable workflow.  Each data pipeline flow version is effectively a unique and\nself contained 'point-in-time' container image.  This initial workflow can also be extended to package\nmultiple related flows into a single container image, reducing the number of resulting container images.\nBut, as the number of data pipeline jobs grow, there issues of container image explosion and data engineering\nproductivity remain."),(0,i.kt)("p",null,"Using Prefect GitStorage for flows addresses both container image proliferation as well as development\nbottlenecks."),(0,i.kt)("h2",{id:"prefect-git-storage"},"Prefect Git Storage"),(0,i.kt)("p",null,"Prefect ",(0,i.kt)("a",{parentName:"p",href:"https://docs.prefect.io/orchestration/flow_config/storage.html#git"},"Git Storage")," provides a workflow for developing and deploying data pipelines directly from git repositories,\nsuch as Gitlab or Github.  The data pipeline code (python) is pulled from the git repository on each invocation\nwith the ability to reference git branches and git tags.  This approach enables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"reducing the number of container images to the number of different runtime configurations to be supported."),(0,i.kt)("li",{parentName:"ul"},"improving the data engineering development cycle time by removing the need to build and push container images\non each code change."),(0,i.kt)("li",{parentName:"ul"},"when combined with kubernetes Prefect Run Configs and Job templates, enables selection of specific runtime environment images")),(0,i.kt)("p",null,"Note that the GitStorage option does required access from the runtime kubernetes cluster to the central git storage\nservice, e.g. gitlab, github, etc."),(0,i.kt)("p",null,"Prefect Git Storage workflow steps for 'building' and deploying data pipeline flows include:"),(0,i.kt)(o.Z,{defaultValue:"steps",values:[{label:"Steps",value:"steps"},{label:"PlantUML",value:"plantuml"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"steps",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(41113).Z},(0,i.kt)("img",{alt:"Workflow Steps",src:n(51159).Z,width:"253",height:"361"}))," ")),(0,i.kt)(l.Z,{value:"plantuml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'@startuml "git-storage-workflow"\n(*) --\x3e "push commited flow code\nchanges to git service"\n--\x3e "register PrefectFlow\nusing branch or tag reference"\n--\x3e "run flow in Prefect Server or Cloud\n(code pulled from git service)"\n--\x3e (*)\n@enduml\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pushing the committed code to the central git service"),(0,i.kt)("li",{parentName:"ul"},"registering the flow using the git repository url and branch or tag reference"),(0,i.kt)("li",{parentName:"ul"},"running the flow by pulling the reference code from the git service in a kubernetes pod")),(0,i.kt)("p",null,"The container image build and push steps are removed from the developer feedback cycle time.\nDepending on network bandwidth and image build times, this can save remove 5 to 10 minutes from each deployment iteration."),(0,i.kt)("h3",{id:"pushing-the-flow-code"},"Pushing the flow code"),(0,i.kt)("p",null,"Once a set of changes to the data pipeline code has been committed, push to the central git service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git commit\n$ git push\n")),(0,i.kt)("h3",{id:"registering-the-flow"},"Registering the flow"),(0,i.kt)("p",null,"The flow can be registered with Prefect using either a branch (HEAD or latest) or tag reference.  Assuming\na workflow with feature branches:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"feature branches: register the flow code using the feature branch.  This enables the latest version (HEAD)\nof the pushed flow code to be used for execution.  It also enables skipping re-registration of the flow on new\nchanges as the HEAD of the branch is pulled on each flow run"),(0,i.kt)("li",{parentName:"ul"},"main line branches: register pinned versions of the flow using git tags.  This enables the use of a\nspecific version of the flow code to be pulled on each flow run, regardless of future changes.")),(0,i.kt)("p",null,"Determining the which reference to use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# using gitpython module to work with repo info\nfrom git import Repo\n\n# presidence for identifing where to find the flow code\n# BUILD_TAG => GIT_BRANCH => active_branch\nbuild_tag = branch_name = None\nbuild_tag = os.getenv("BUILD_TAG", "")\nif build_tag == "":\n  branch_name = os.getenv("GIT_BRANCH", "")\n  if branch_name == "":\n    branch_name = str(Repo(os.getcwd()).active_branch)\n')),(0,i.kt)("p",null,"Configuring Prefect Git storage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from prefect.storage import Git\nimport my_flows.hello_flow as flow # assuming flow is defined in ./my_flows/flow.py\n\n# example using Gitlab\n# either branch_name or tag must be empty string \"\" or None\nstorage = Git(\n    repo_host=git_hostname,\n    repo=repo_path,\n    flow_path=f\"{flow.__name__.replace('.','/')}.py\",\n    flow_name=flow.flow.name,\n    branch_name=branch_name,\n    tag=build_tag,\n    git_token_secret_name=git_token_secret_name,\n    git_token_username=git_token_username\n)\n\nstorage.add_flow(flow.flow)\nflow.flow.storage = storage\n\nflow.flow.regsiter(build=False)\n")),(0,i.kt)("p",null,"Once registered, the flow storage details can be viewed in the Prefect Server or Prefect Cloud UI.  In this example, Prefect will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"HEAD")," version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch on each flow run."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(68092).Z},(0,i.kt)("img",{alt:"hello flow storage details",src:n(42160).Z,width:"678",height:"339"}))),(0,i.kt)("h2",{id:"next-steps---run-config"},"Next Steps - Run Config"),(0,i.kt)("p",null,"With Prefect Git Storage the runtime configuration and environment management is decoupled from the\ndata pipeline development workflow.  Unlike with Docker Storage, with Git Storage, the runtime\nexecution environment and data pipeline development workflows are defined and managed separately.\nAs an added benefit, the developer feedback loop cycle time is also reduced."),(0,i.kt)("p",null,"With the data engineering workflow addressed, the next step in scaling out the Prefect solution\nturns to configuration and lifecycle management of the runtime environment for data pipelines.\nPrefect Run Configs and Job templates provide the tools retaining the flexibility on container\nimage based runtime environments with improved manageability."))}m.isMDXComponent=!0},68092:function(e,t,n){t.Z=n.p+"assets/files/flow-storage-details-e2be96914a590e405cacb47ffc0eceaa.png"},43824:function(e,t,n){t.Z=n.p+"assets/files/image1-3eb8a74efcfb6b3a329f69dd9b89ca34.png"},41113:function(e,t,n){t.Z=n.p+"assets/files/image2-d57463bea4147ef77047e87d3b7a49a7.png"},42160:function(e,t,n){t.Z=n.p+"assets/images/flow-storage-details-e2be96914a590e405cacb47ffc0eceaa.png"},85544:function(e,t,n){t.Z=n.p+"assets/images/image1-3eb8a74efcfb6b3a329f69dd9b89ca34.png"},51159:function(e,t,n){t.Z=n.p+"assets/images/image2-d57463bea4147ef77047e87d3b7a49a7.png"}}]);