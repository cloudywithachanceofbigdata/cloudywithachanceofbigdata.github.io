"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[311],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return t?o.createElement(h,a(a({ref:n},u),{},{components:t})):o.createElement(h,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82744:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return f}});var o=t(83117),r=t(80102),i=(t(67294),t(3905)),a=["components"],s={slug:"ansible-tower-for-continuous-infrastructure",title:"Ansible Tower for Continuous Infrastructure",authors:["chrisottinger"],draft:!1,hide_table_of_contents:!0,tags:["ansible","ci-cd","continuous-infrastructure"],keywords:["ansible","ci-cd","continuous-infrastructure"]},l=void 0,c={permalink:"/ansible-tower-for-continuous-infrastructure",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2019-08-29-ansible-tower-for-continuous-infrastructure/index.md",source:"@site/blog/2019-08-29-ansible-tower-for-continuous-infrastructure/index.md",title:"Ansible Tower for Continuous Infrastructure",description:"As infrastructure and teams scale, effective and robust configuration management requires growing beyond manual processes and local conventions. Fortunately, Ansible Tower (or the upstream Open Source project Ansible AWX) provides a perfect platform for configuration management at scale.",date:"2019-08-29T00:00:00.000Z",formattedDate:"August 29, 2019",tags:[{label:"ansible",permalink:"/tags/ansible"},{label:"ci-cd",permalink:"/tags/ci-cd"},{label:"continuous-infrastructure",permalink:"/tags/continuous-infrastructure"}],readingTime:5.595,truncated:!1,authors:[{name:"Chris Ottinger",title:"Senior Technologist",url:"https://github.com/datwiz",imageURL:"http://0.gravatar.com/avatar/f9af9c3fae755ac170c5798c53c5267d?s=80",key:"chrisottinger"}],frontMatter:{slug:"ansible-tower-for-continuous-infrastructure",title:"Ansible Tower for Continuous Infrastructure",authors:["chrisottinger"],draft:!1,hide_table_of_contents:!0,tags:["ansible","ci-cd","continuous-infrastructure"],keywords:["ansible","ci-cd","continuous-infrastructure"]},prevItem:{title:"Map Reduce is Dead, Long Live Map Reduce",permalink:"/map-reduce-is-dead-long-live-map-reduce"},nextItem:{title:"Managing Secrets in CICD Pipelines",permalink:"/managing-secrets-in-cicd-pipelines"}},u={authorsImageUrls:[void 0]},p=[{value:"The Workflow Components",id:"the-workflow-components",children:[{value:"Playbook and Role Source Code",id:"playbook-and-role-source-code",children:[],level:3},{value:"Source Code Repositories",id:"source-code-repositories",children:[],level:3},{value:"Ansible Tower Server",id:"ansible-tower-server",children:[],level:3},{value:"&quot;Real&quot; Infrastructure",id:"real-infrastructure",children:[],level:3}],level:2},{value:"A note on Ansible Variables",id:"a-note-on-ansible-variables",children:[],level:2}],d={toc:p};function f(e){var n=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As infrastructure and teams scale, effective and robust configuration management requires growing beyond manual processes and local conventions. Fortunately, ",(0,i.kt)("a",{parentName:"p",href:"https://www.ansible.com/products/tower"},"Ansible Tower")," (or the upstream Open Source project ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ansible/awx"},"Ansible AWX"),") provides a perfect platform for configuration management at scale."),(0,i.kt)("p",null,"The\xa0",(0,i.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible-tower/index.html"},"Ansible Tower/AWX documentation"),"\xa0and tutorials provide comprehensive information about the individual components. \xa0However, assembling all the moving pieces into a whole working solution can involve some trial and error and reverse engineering in order to understand how the components relate to one another. \xa0Ansible Tower, like the core Ansible solution, offers flexibility in how features assembled to support different typed of workflows. The types of workflows can include once-off initial configurations, ad-hoc system maintenance, or continuous convergence."),(0,i.kt)("p",null,"Continuous convergence, also referred to as desired state, regularly re-applies the defined configuration to infrastructure. This tends to 'correct the drift' often encountered when only applying the configuration on infrastructure setup. For example, a continuous convergence approach to configuration management could apply the desired configuration on a recurring schedule of every 30 minutes. \xa0"),(0,i.kt)("p",null,"Some continuous convergence workflow characteristics can include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Idempotent Ansible roles. If there are no required configuration deviations, run will report 0 changes."),(0,i.kt)("li",{parentName:"ul"},"A source code repository per Ansible role, similar to the Ansible Galaxy approach,"),(0,i.kt)("li",{parentName:"ul"},"A source code repository for Ansible playbooks that include the individual Ansible roles,"),(0,i.kt)("li",{parentName:"ul"},"A host configured to provide one unique service function only,"),(0,i.kt)("li",{parentName:"ul"},"An Ansible playbook defined for each unique service function that gets applied to the host,"),(0,i.kt)("li",{parentName:"ul"},"Playbooks applied to each host on a repeating schedule.")),(0,i.kt)("p",null,"One way to achieve a continuous convergence workflow combines the Ansible Tower components according to the following conceptual model."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:t(69085).Z},(0,i.kt)("img",{src:t(79002).Z,width:"1257",height:"616"}))),(0,i.kt)("h2",{id:"the-workflow-components"},"The Workflow Components"),(0,i.kt)("h3",{id:"playbook-and-role-source-code"},"Playbook and Role Source Code"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ansible roles")," contain the individual tasks, handlers, and content\xa0with a role responsible for the installation and configuration of a particular software service."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ansible playbooks"),"\xa0configure a host for a particular service function in the environment acting as a wrapper for the individual role based configurations. \xa0All the roles expected to be applied to a host must be defined in the playbook."),(0,i.kt)("h3",{id:"source-code-repositories"},"Source Code Repositories"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Role git repositor"),"ies contain the versioned definition of a role, e.g. one git repository per individual role. \xa0The roles are pulled into the playbooks using the git reference and tags, which pegs the role version used within a playbook."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Project git repositories"),"\xa0group the individual playbooks into single collection, e.g. one git repository per set of playbooks. \xa0As with roles, specific versions of project repositories are also identified by version tags.\xa0"),(0,i.kt)("h3",{id:"ansible-tower-server"},"Ansible Tower Server"),(0,i.kt)("p",null,'Two foundational concepts in Ansible Tower are projects and inventories. Projects provide access to playbooks and roles. Inventories provide the connection to "real" infrastructure. \xa0Inventories and projects also provide authorisation scope for activities in Ansible Tower. For example, a given group can use the playbooks in Project X and apply jobs to hosts in Inventory Y.'),(0,i.kt)("p",null,"Each\xa0",(0,i.kt)("strong",{parentName:"p"},"Ansible Tower Project"),"\xa0is backed by a project git repository. \xa0Each repository contains the playbooks and included roles that can be applied by a given job. \xa0The Project is the glue between the Ansible configuration tasks and the plays that apply the configuration."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ansible Tower Inventories"),"\xa0are sets of hosts grouped for administration, similar to inventory sets used when applying playbooks manually. \xa0One option is to group hosts into Inventories by environment. \xa0For example, the hosts for development may be in one Inventory while the hosts for production may be in another Inventory. \xa0User authorisation controls are applied at the Inventory level."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ansible Tower\xa0Inventory Groups"),"\xa0define sub-sets of hosts within the larger Inventory. \xa0These subsets can then be used to limit the scope of a playbook job. \xa0One option is to group hosts within an Inventory by function. \xa0For example, the hosts for web servers may be in one Inventory Group and the hosts for databases may be in another Inventory Group. \xa0This enables one playbook to target one inventory group. \xa0Inventory groups effectively provide metadata labels for hosts in the Inventory."),(0,i.kt)("p",null,"An\xa0",(0,i.kt)("strong",{parentName:"p"},"Ansible Job Template"),"\xa0determines the configuration to be applied to hosts. \xa0The Job Template\xa0links a playbook from a project to an inventory. \xa0 The inventory scope can be optionally further limited by specifying inventory group limits. \xa0A Job Template can be invoked either on an ad-hoc basis or via a recurring schedule."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ansible Job Schedules"),"\xa0define the time and frequency at which the configuration specified in the Job Template is applied. \xa0Each Job Template can be associated with one or more Job Schedules. \xa0A schedule supports either once-off execution, for example during a defined change window, or regularly recurring execution. \xa0A job schedule that applies the desired state configuration with a frequency of 30 minutes provides an example of a job schedule used for a continuous convergence workflow."),(0,i.kt)("h3",{id:"real-infrastructure"},'"Real" Infrastructure'),(0,i.kt)("p",null,"An\xa0",(0,i.kt)("strong",{parentName:"p"},"Ansible Job Instance"),"\xa0defines a single invocation of an Ansible Job Template, both for scheduled and ad-hoc invocations of the job template. \xa0Outside of Ansible Tower, the Job Instance is the equivalent of executing the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"ansible-playbook"),"\xa0command using an inventory file."),(0,i.kt)("p",null,"A\xa0",(0,i.kt)("strong",{parentName:"p"},"Host"),"\xa0is the actual target infrastructure resources configured by the job instance, applying an ansible playbook of included roles."),(0,i.kt)("h2",{id:"a-note-on-ansible-variables"},"A note on Ansible Variables"),(0,i.kt)("p",null,"As with other features of Ansible and Ansible Tower, variables also offer flexibility in defining parameters and context when applying a configuration. \xa0In addition to declaring and defining variables in roles and playbooks, variable definitions can also be defined in Ansible Tower job templates, inventory and inventory groups, and individual hosts. \xa0Given the plethora of options for variable definition locations, without a set of conventions for managing variable values, debugging runtime issues with roles and playbooks can become difficult. \xa0E.g. which value defined at which location was used when applying the role?"),(0,i.kt)("p",null,"One example of variable definitions conventions could include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Variables shall be given default values in the role, .e.g. in the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"../defaults/main.yml"),"\xa0file."),(0,i.kt)("li",{parentName:"ul"},"If the variable must have a 'real' value supplied when applying the playbook, the variable shall be defined with an obvious placeholder value which will fail if not overridden."),(0,i.kt)("li",{parentName:"ul"},"Variables shall be described in the role\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"README.md"),"\xa0documentation"),(0,i.kt)("li",{parentName:"ul"},"Do not apply variables at the host inventory level as host inventory can be transient."),(0,i.kt)("li",{parentName:"ul"},"Variables that select specific capabilities within a role shall be defined at the Ansible Tower Inventory Group. \xa0For example, a role contains the configuration definition for both master and work nodes. \xa0The Inventory Group variables are used to indicate which hosts must have the master configuration and applied and which must have the worker configuration applied."),(0,i.kt)("li",{parentName:"ul"},"Variables that define the environment context for configuration shall be defined in the Ansible Tower Job Template.")),(0,i.kt)("p",null,"Following these conventions, each of the possible variable definition options serves a particular purpose. \xa0When an issue with variable definition does arise, the source is easily identified."))}f.isMDXComponent=!0},69085:function(e,n,t){n.Z=t.p+"assets/files/Ansible-AWX-Continuous-Convergence-f3d3ad2b3baa64932ac1276077ace883.png"},79002:function(e,n,t){n.Z=t.p+"assets/images/Ansible-AWX-Continuous-Convergence-f3d3ad2b3baa64932ac1276077ace883.png"}}]);