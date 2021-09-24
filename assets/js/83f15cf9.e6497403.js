"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[7159],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),f=i,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1508:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return d},toc:function(){return u},default:function(){return h}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=a(59943),s=["components"],l={slug:"great-expectations-for-your-data",title:"Great Expectations (for your data...)",authors:["tomklimovski"],draft:!1,hide_table_of_contents:!0,image:"images/great-expectations.png",tags:["data","data-quality","data-quality-management"],keywords:["data","data-quality","data-quality-management"]},c=void 0,p={permalink:"/great-expectations-for-your-data",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2020-11-27-great-expectations-for-your-data/index.md",source:"@site/blog/2020-11-27-great-expectations-for-your-data/index.md",title:"Great Expectations (for your data...)",description:"This article provides an introduction to the Great Expectations Python library for data quality management (https://github.com/great-expectations/great\\expectations).",date:"2020-11-27T00:00:00.000Z",formattedDate:"November 27, 2020",tags:[{label:"data",permalink:"/tags/data"},{label:"data-quality",permalink:"/tags/data-quality"},{label:"data-quality-management",permalink:"/tags/data-quality-management"}],readingTime:6.375,truncated:!1,authors:[{name:"Tom Klimovski",title:"Senior Cloud Engineer",url:"https://github.com/tomklimovskigamma",imageURL:"http://2.gravatar.com/avatar/58faa98ad68138dd1997f828f00a882e?s=80",key:"tomklimovski"}],prevItem:{title:"Using the Azure CLI to Create an API using a Function App within API Management",permalink:"/using-the-azure-cli-to-create-an-api-using-a-function-app-within-api-management"},nextItem:{title:"Multi Cloud Diagramming with PlantUML",permalink:"/multi-cloud-diagramming-with-plantuml"}},d={authorsImageUrls:[void 0]},u=[{value:"OK, enough talk, let&#39;s go!",id:"ok-enough-talk-lets-go",children:[]},{value:"Setting up a Database",id:"setting-up-a-database",children:[]},{value:"Running the test cases",id:"running-the-test-cases",children:[]},{value:"Supported Databases",id:"supported-databases",children:[]},{value:"Scheduling",id:"scheduling",children:[]},{value:"Production deployment",id:"production-deployment",children:[]},{value:"When not to use a data quality framework",id:"when-not-to-use-a-data-quality-framework",children:[]},{value:"In general",id:"in-general",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],f={toc:u};function h(e){var t=e.components,l=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article provides an introduction to the Great Expectations Python library for data quality management (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/great-expectations/great_expectations"},"https://github.com/great-expectations/great","_","expectations"),")."),(0,o.kt)("p",null,"So what are expectations when it comes to data (and data quality)..."),(0,o.kt)("p",null,"An expectation is a falsifiable, verifiable statement about data. Expectations provide a language to talk about data characteristics and data quality - humans to humans, humans to machines and machines to machines."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"great expectations")," project includes predefined, codified expectations such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"expect_column_to_exist \nexpect_table_row_count_to_be_between \nexpect_column_values_to_be_unique \nexpect_column_values_to_not_be_null \nexpect_column_values_to_be_between \nexpect_column_values_to_match_regex \nexpect_column_mean_to_be_between \nexpect_column_kl_divergence_to_be_less_than\n")),(0,o.kt)("p",null,"\u2026 and many more"),(0,o.kt)("p",null,"Expectations are both data tests and docs! Expectations can be presented in a machine-friendly JSON, for example:"),(0,o.kt)(r.Z,{id:"317fa68cc27e4e364ab238a93f6ed361",mdxType:"Gist"}),(0,o.kt)("p",null,"Great Expectations provides validation results of defined expectations, which can dramatically shorten your development cycle."),(0,o.kt)("p",null,"[",(0,o.kt)("img",{alt:"validation results in great expectations",src:a(92834).Z}),"](validation results in great expectations)"),(0,o.kt)("p",null,"Nearly 50 built in expectations allow you to express how you understand your data, and you can add custom expectations if you need a new one. A machine can test if a dataset conforms to the expectation."),(0,o.kt)("h2",{id:"ok-enough-talk-lets-go"},"OK, enough talk, let's go!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv virtualenv 3.8.2 ge38\npip install great-expectations\n")),(0,o.kt)("p",null,"tried with Python 3.7.2, but had issues with library ",(0,o.kt)("inlineCode",{parentName:"p"},"lgzm")," on my local machine"),(0,o.kt)("p",null,"once installed, run the following in the python repl shell:"),(0,o.kt)(r.Z,{id:"78211408899d5d0d4b1a088d039fe1d3",mdxType:"Gist"}),(0,o.kt)("p",null,"showing the data in the dataframe should give you the following:"),(0,o.kt)(r.Z,{id:"fbdeda83bfe9af7ceb33a36a3f4a29e0",mdxType:"Gist"}),(0,o.kt)("p",null,"as can be seen, a collection of random integers in each column for our initial testing. Let's pipe this data in to great-expectations..."),(0,o.kt)(r.Z,{id:"0bf00ff1bfad316f83f1b458aa2ad01b",mdxType:"Gist"}),(0,o.kt)("p",null,"yields the following output..."),(0,o.kt)(r.Z,{id:"83264e645d220ebb0f0a529a2a139be9",mdxType:"Gist"}),(0,o.kt)("p",null,"this shows that there are 0 unexpected items in the data we are testing. Great!"),(0,o.kt)("p",null,"Now let's have a look at a negative test. Since we've picked the values at random, there are bound to be duplicates. Let's test that:"),(0,o.kt)(r.Z,{id:"0a75fe9700677d0329d96da44c54dca5",mdxType:"Gist"}),(0,o.kt)("p",null,"yields..."),(0,o.kt)(r.Z,{id:"0c714a928064124ec15c9733d9e5ff29",mdxType:"Gist"}),(0,o.kt)("p",null,"The JSON schema has metadata information about the result, of note is the result section which is specific to our query, and shows the percentage that failed the expectation."),(0,o.kt)("p",null,"Let's progress to something more real-world, namely creating exceptions that are run on databases. Armed with our basic understanding of great-expectations, let's..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"set up a postgres database"),(0,o.kt)("li",{parentName:"ul"},"initiate a new Data Context within great-expectations"),(0,o.kt)("li",{parentName:"ul"},"write test-cases for the data"),(0,o.kt)("li",{parentName:"ul"},"group those test-cases and"),(0,o.kt)("li",{parentName:"ul"},"run it")),(0,o.kt)("h2",{id:"setting-up-a-database"},"Setting up a Database"),(0,o.kt)(r.Z,{id:"30dc4a230656f36c4c9b7b208b792329",mdxType:"Gist"}),(0,o.kt)("p",null,"if you don't have it installed,"),(0,o.kt)(r.Z,{id:"b127a57c499e63c003ac6c8bb4408768",mdxType:"Gist"}),(0,o.kt)("p",null,"wait 15 minutes for download the internet. Verify postgres running with\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),", then connect with"),(0,o.kt)(r.Z,{id:"d33c81448fcfddb608f79a69a75202a1",mdxType:"Gist"}),(0,o.kt)("p",null,"Create some data"),(0,o.kt)(r.Z,{id:"13069c3111039ac60281f291dc1e6bd8",mdxType:"Gist"}),(0,o.kt)("p",null,"Take data for a spin"),(0,o.kt)(r.Z,{id:"f62857c6dbaaaf1d784aa94c5914c9f5",mdxType:"Gist"}),(0,o.kt)("p",null,"should yield"),(0,o.kt)(r.Z,{id:"52e11ea7319f8344674999ec1b36ab0e",mdxType:"Gist"}),(0,o.kt)("p",null,"Now time for\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"great-expectations")),(0,o.kt)("p",null,"Great Expectations relies on the library\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"sqlalchemy"),"\xa0and\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"psycopg2"),"\xa0to connect to your data."),(0,o.kt)(r.Z,{id:"6bd28c03b4013f4301b1af2c74dcd947",mdxType:"Gist"}),(0,o.kt)("p",null,"once done, let's set up\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"great-expectations")),(0,o.kt)(r.Z,{id:"4210011daa1fb3c738875f917ebafbf3",mdxType:"Gist"}),(0,o.kt)("p",null,"should look like below:"),(0,o.kt)(r.Z,{id:"1f1a698cf6a6785598db1133212f30fe",mdxType:"Gist"}),(0,o.kt)("p",null,"let's set up a few other goodies while we're here"),(0,o.kt)(r.Z,{id:"51f684d6db8149950f28cc32afa2f461",mdxType:"Gist"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations! Great Expectations is now set up")),(0,o.kt)("p",null,"You should see a file structure as follows:"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(63166).Z},(0,o.kt)("img",{alt:"great expectations tree structure",src:a(71126).Z}))),(0,o.kt)("p",null,"If you didn't generate a suite during the set up based on ",(0,o.kt)("inlineCode",{parentName:"p"},"app.order"),", you can do so now with"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"great_expectations suite new")),(0,o.kt)("p",null,"when created, looking at\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"great_expectations/expectations/app/order/warning.json"),"\xa0should yield the following:"),(0,o.kt)(r.Z,{id:"24d105be1cacacbd89b9e4cbac6f4d21",mdxType:"Gist"}),(0,o.kt)("p",null,"as noted in the content section, this expectation config is created by the tool by looking at 1000 rows of the data. We also have access to the data-doc site which we can open in the browser at\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"great_expectations/uncommitted/data_docs/local_site/index.html")),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(97260).Z},(0,o.kt)("img",{alt:"great expectations index page",src:a(39697).Z}))),(0,o.kt)("p",null,"Clicking on\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"app.order.warning"),", you'll see the sample expectation shown in the UI"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(87630).Z},(0,o.kt)("img",{alt:"great expectations app order screen",src:a(78693).Z}))),(0,o.kt)("p",null,"Now, let's create our own\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"expectation"),"\xa0file and take it for a spin. We'll call this one\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"error"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(92936).Z},(0,o.kt)("img",{alt:"great expectations new suite",src:a(55158).Z}))),(0,o.kt)("p",null,"This should also start a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"jupyter notebook"),". If for some reason you need to start it back up again, you can do so with"),(0,o.kt)(r.Z,{id:"b4c9fed39b89d939127e4b381c49f274",mdxType:"Gist"}),(0,o.kt)("p",null,"Go ahead and hit\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"run"),"\xa0on your first cell."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(86934).Z},(0,o.kt)("img",{alt:"Editing a suite with Jupyter",src:a(27307).Z}))),(0,o.kt)("p",null,"Let's keep it simple and test the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"customer_order_id"),"\xa0column is in a set with the values below:"),(0,o.kt)(r.Z,{id:"fea43e4e566795213fc1c5bbcda317ad",mdxType:"Gist"}),(0,o.kt)("p",null,"using the following expectations function in your Table Expectation(s). You may need to click the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"+"),"\xa0sign in the toolbar to insert a new cell, as below:"),(0,o.kt)(r.Z,{id:"38be05ccb27c21da2b4213d6a63afd83",mdxType:"Gist"}),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(32721).Z},(0,o.kt)("img",{alt:"Adding table expectation",src:a(86938).Z}))),(0,o.kt)("p",null,"As we can see, appropriate json output that describes the output of our expectation. Go ahead and run the final cell, which will save our work and open a newly minted data documentation UI page, where you'll see the expectations you defined in human readable form."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(28026).Z},(0,o.kt)("img",{alt:"Saved suite",src:a(67107).Z}))),(0,o.kt)("h2",{id:"running-the-test-cases"},"Running the test cases"),(0,o.kt)("p",null,"In Great Expectations, running a set of expectations (test cases) is called a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"checkpoint"),". Let's create a new checkpoint called\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"first_checkpoint"),"\xa0for our\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"app.order.error"),"\xa0expectation as shown below:"),(0,o.kt)(r.Z,{id:"322483724633e8a4513c5d6ae67298ae",mdxType:"Gist"}),(0,o.kt)("p",null,"Let's take a look at our checkpoint definition."),(0,o.kt)(r.Z,{id:"08594ad6420d46fe60be41d9d949605c",mdxType:"Gist"}),(0,o.kt)(r.Z,{id:"9cdd4da31f9fdef1246092fa5b65e90c",mdxType:"Gist"}),(0,o.kt)("p",null,"Above you can see the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"validation_operator_name"),"\xa0which points to a definition in\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"great_expectations.yml"),", and the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"batches"),"\xa0where we defined the data source and what expectations to run against."),(0,o.kt)("p",null,"Let's have a look at\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"great_expectations.yml"),". We can see the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"action_list_operator"),"\xa0defined and all the actions it contains:"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(2525).Z},(0,o.kt)("img",{alt:"List operators",src:a(3815).Z}))),(0,o.kt)("p",null,"Let's run our checkpoint using"),(0,o.kt)(r.Z,{id:"050501513ee0f5fa13ab522ea7b9242e",mdxType:"Gist"}),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(61373).Z},(0,o.kt)("img",{alt:"Validate checkpoint",src:a(53744).Z}))),(0,o.kt)("p",null,"Okay cool, we've set up an expectation, a checkpoint and shown a successful status! But what does a failure look like? We can introduce a failure by logging in to postgres and inserting a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"customer_11"),"\xa0that we'll know will fail, as we've specific our expectation that\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"customer_id"),"\xa0should only have two values.."),(0,o.kt)(r.Z,{id:"5bce4ba20ab8bfae5910db5cd6cc66f4",mdxType:"Gist"}),(0,o.kt)("p",null,"Here are the commands to make that happen, as well as the command to re-run our checkpoint:"),(0,o.kt)(r.Z,{id:"4ad6f1753d65a4f099467bd9fd760067",mdxType:"Gist"}),(0,o.kt)(r.Z,{id:"fa94ded27b212e099177bee9d6a2cd36",mdxType:"Gist"}),(0,o.kt)("p",null,"Run checkpoint again, this time it should fail"),(0,o.kt)(r.Z,{id:"12fb3e62a5bbcd205ee84ff7445e2657",mdxType:"Gist"}),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(50798).Z},(0,o.kt)("img",{alt:"Failed checkpoint",src:a(28197).Z}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"As expected, it failed.")),(0,o.kt)("h2",{id:"supported-databases"},"Supported Databases"),(0,o.kt)("p",null,"In it's current implementation\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"version 0.12.9"),", the supported databases our of the box are:"),(0,o.kt)(r.Z,{id:"4816fb9a621d2d660f746b62ab54ba59",mdxType:"Gist"}),(0,o.kt)("p",null,"It's great to be BigQuery supported out of the box, but what about Google Spanner and Google BigTable? Short-answer; currently not supported. See tickets\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/googleapis/google-cloud-python/issues/3022"},"https://github.com/googleapis/google-cloud-python/issues/3022"),"."),(0,o.kt)("p",null,"With respect to BigTable, it may not be possible as SQLAlchemy can only manage SQL-based RDBSM-type systems, while BigTable (and HBase) are NoSQL non-relational systems."),(0,o.kt)("h2",{id:"scheduling"},"Scheduling"),(0,o.kt)("p",null,"Now that we have seen how to run tests on our data, we can run our checkpoints from bash or a python script(generated using great_expectations checkpoint script first_checkpoint). This lends itself to easy integration with scheduling tools like airflow, cron, prefect, etc."),(0,o.kt)("h2",{id:"production-deployment"},"Production deployment"),(0,o.kt)("p",null,"When deploying in production, you can store any sensitive information(credentials, validation results, etc) which are part of the uncommitted folder in cloud storage systems or databases or data stores depending on your infratructure setup. Great Expectations has a lot of options"),(0,o.kt)("h2",{id:"when-not-to-use-a-data-quality-framework"},"When not to use a data quality framework"),(0,o.kt)("p",null,"This tool is great and provides a lot of advanced data quality validation functions, but it adds another layer of complexity to your infrastructure that you will have to maintain and trouble shoot in case of errors. It would be wise to use it only when needed."),(0,o.kt)("h2",{id:"in-general"},"In general"),(0,o.kt)("p",null,"Do not use a data quality framework, if simple SQL based tests at post load time works for your use case. Do not use a data quality framework, if you only have a few (usually < 5) simple data pipelines."),(0,o.kt)("p",null,"Do use it when you have data that needs to be tested in an automated and a repeatable fashion. As shown in this article, Great Expectations has a number of options that can be toggled to suit your particular use-case."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Great Expectations shows a lot of promise, and it's an active project so expect to see features roll out frequently. It's been quite easy to use, but I'd like to see all it's features work in a locked-down enterprise environment."),(0,o.kt)("p",null,"Tom Klimovski",(0,o.kt)("br",{parentName:"p"}),"\n","Principal Consultant, Gamma Data",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"mailto:tom.klimovski@gammadata.io"},"tom.klimovski@gammadata.io")))}h.isMDXComponent=!0},32721:function(e,t,a){t.Z=a.p+"assets/files/add-table-expectation-6512aa26bc021be3ba9b53841686cc42.png"},50798:function(e,t,a){t.Z=a.p+"assets/files/failed-checkpoint-9b060fe10a72c97ae28a0e2ea11ff76e.png"},87630:function(e,t,a){t.Z=a.p+"assets/files/ge-app.order-screen-627a827e75a8c9079908c3d78ff40ff4.png"},2525:function(e,t,a){t.Z=a.p+"assets/files/ge_action_list_operator-6915235227abad5c1de8f90c65c039aa.png"},92936:function(e,t,a){t.Z=a.p+"assets/files/ge_suite_new-ce1fbc3a1ce68a91829faa2da0a12a9b.png"},63166:function(e,t,a){t.Z=a.p+"assets/files/ge_tree_structure-f4723cba7eb3bfd4504919b2f45f2b8f.png"},97260:function(e,t,a){t.Z=a.p+"assets/files/index-page-b171b0a598aad39f638405c0a644224a.png"},86934:function(e,t,a){t.Z=a.p+"assets/files/jupyter-edit-suite-3f4a6d5cb8e7078a22430b54b9ddce83.png"},28026:function(e,t,a){t.Z=a.p+"assets/files/saved-suite-c6cd9523f14fe9505ebb099b946f6b11.png"},61373:function(e,t,a){t.Z=a.p+"assets/files/validate-checkpoint-48062ec26f50cc84657b7accf4fe387d.png"},59943:function(e,t,a){var n=a(67294);a(45697);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var r=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,a=e.file;return"https://gist.github.com/"+t+".js"+(a?"?file="+a:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,a=e.file,n=this.iframeNode,i=n.document;n.contentDocument?i=n.contentDocument:n.contentWindow&&(i=n.contentWindow.document);var o='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(a?"gist-"+t+"-"+a:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";i.open(),i.writeln(o),i.close()},t.prototype.render=function(){var e=this,t=this.props,a=t.id,i=t.file;return n.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:i?"gist-"+a+"-"+i:"gist-"+a})},t}(n.PureComponent);t.Z=r},86938:function(e,t,a){t.Z=a.p+"assets/images/add-table-expectation-6512aa26bc021be3ba9b53841686cc42.png"},28197:function(e,t,a){t.Z=a.p+"assets/images/failed-checkpoint-9b060fe10a72c97ae28a0e2ea11ff76e.png"},78693:function(e,t,a){t.Z=a.p+"assets/images/ge-app.order-screen-627a827e75a8c9079908c3d78ff40ff4.png"},3815:function(e,t,a){t.Z=a.p+"assets/images/ge_action_list_operator-6915235227abad5c1de8f90c65c039aa.png"},55158:function(e,t,a){t.Z=a.p+"assets/images/ge_suite_new-ce1fbc3a1ce68a91829faa2da0a12a9b.png"},71126:function(e,t,a){t.Z=a.p+"assets/images/ge_tree_structure-f4723cba7eb3bfd4504919b2f45f2b8f.png"},39697:function(e,t,a){t.Z=a.p+"assets/images/index-page-b171b0a598aad39f638405c0a644224a.png"},27307:function(e,t,a){t.Z=a.p+"assets/images/jupyter-edit-suite-3f4a6d5cb8e7078a22430b54b9ddce83.png"},67107:function(e,t,a){t.Z=a.p+"assets/images/saved-suite-c6cd9523f14fe9505ebb099b946f6b11.png"},53744:function(e,t,a){t.Z=a.p+"assets/images/validate-checkpoint-48062ec26f50cc84657b7accf4fe387d.png"},92834:function(e,t,a){t.Z=a.p+"assets/images/validation_failed_unexpected_values-a2b73285ee54843380f035441f0c49e0.gif"}}]);