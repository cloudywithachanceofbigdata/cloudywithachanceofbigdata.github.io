"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[76041],{16876:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.imageSrc,a=e.altText;return n.createElement("figure",null,n.createElement("a",{href:t},n.createElement("img",{src:t,alt:a})),n.createElement("figcaption",{className:"figure-caption"},a))}},67325:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),o=a(16876),l=a(23670),s=["components"],d={slug:"introducing-the-metadata-hub-mdh",title:"Introducing the Metadata Hub (MDH)",authors:["tomklimovski"],draft:!1,hide_table_of_contents:!0,image:"/img/fullstackchronicles-cover-image.png",tags:["gcp","google-cloud-platform","metadata"],keywords:["gcp","google-cloud-platform","metadata"]},c=void 0,u={permalink:"/introducing-the-metadata-hub-mdh",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2021-06-15-introducing-the-metadata-hub-mdh/index.md",source:"@site/blog/2021-06-15-introducing-the-metadata-hub-mdh/index.md",title:"Introducing the Metadata Hub (MDH)",description:"Metadata Hub (MDH) is intended to be the source of truth for metadata around the Company\u2019s platform. It has the ability to load metadata configuration from yaml, and serve that information up via API. It will also be the store of information for pipeline information while ingesting files into the platform.",date:"2021-06-15T00:00:00.000Z",formattedDate:"June 15, 2021",tags:[{label:"gcp",permalink:"/tags/gcp"},{label:"google-cloud-platform",permalink:"/tags/google-cloud-platform"},{label:"metadata",permalink:"/tags/metadata"}],readingTime:9.37,hasTruncateMarker:!1,authors:[{name:"Tom Klimovski",title:"Senior Cloud Engineer",url:"https://github.com/tomklimovskigamma",imageURL:"http://2.gravatar.com/avatar/58faa98ad68138dd1997f828f00a882e?s=80",key:"tomklimovski"}],frontMatter:{slug:"introducing-the-metadata-hub-mdh",title:"Introducing the Metadata Hub (MDH)",authors:["tomklimovski"],draft:!1,hide_table_of_contents:!0,image:"/img/fullstackchronicles-cover-image.png",tags:["gcp","google-cloud-platform","metadata"],keywords:["gcp","google-cloud-platform","metadata"]},prevItem:{title:"Azure Static Web App Review",permalink:"/azure-static-web-app-review"},nextItem:{title:"Masking Private Keys in CI/CD Pipelines in GitLab",permalink:"/masking-private-keys-in-ci-cd-pipelines-in-gitlab"}},p={authorsImageUrls:[void 0]},m=[{value:"Key philosophies:",id:"key-philosophies",level:2},{value:"Paths",id:"paths",level:3},{value:"Datastore Primer",id:"datastore-primer",level:3},{value:"Entity Group",id:"entity-group",level:3}],h={toc:m};function g(e){var t=e.components,d=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Metadata Hub (MDH) is intended to be the source of truth for metadata around the Company\u2019s platform. It has the ability to load metadata configuration from yaml, and serve that information up via API. It will also be the store of information for pipeline information while ingesting files into the platform."),(0,r.kt)("h2",{id:"key-philosophies"},"Key philosophies:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Config-Driven"),". Anyone who has been authorized to do so, should be able to add another \u2018table-info.yaml\u2019 in to MDH without the need to update any code in the system")),(0,r.kt)("p",null,"Here\u2019s how table information makes its way into MDH:  "),(0,r.kt)(o.Z,{imageSrc:l.Z,altText:"Metadata Hub",mdxType:"ImageWithCaption"}),(0,r.kt)("h3",{id:"paths"},"Paths"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/tables"),(0,r.kt)("td",{parentName:"tr",align:null},"get:"),(0,r.kt)("td",{parentName:"tr",align:null},"summary: All tables in MDH"),(0,r.kt)("td",{parentName:"tr",align:null},"description: get the title of all tables that exist in MDH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"post:"),(0,r.kt)("td",{parentName:"tr",align:null},"summary: Creates a new table in MDH"),(0,r.kt)("td",{parentName:"tr",align:null},"description: Creates a new table in MDH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/tables/{id}"),(0,r.kt)("td",{parentName:"tr",align:null},"get"),(0,r.kt)("td",{parentName:"tr",align:null},"summary: Obtain information about specific table"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/tables/{id}/columns"),(0,r.kt)("td",{parentName:"tr",align:null},"get"),(0,r.kt)("td",{parentName:"tr",align:null},"summary: All columns for a particular table"),(0,r.kt)("td",{parentName:"tr",align:null},"description: Obtain information on columns for a particular table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/run"),(0,r.kt)("td",{parentName:"tr",align:null},"get"),(0,r.kt)("td",{parentName:"tr",align:null},"summary: All information about a particular end-to-end batch run of file ingestion"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"post"),(0,r.kt)("td",{parentName:"tr",align:null},"summary: Update metadata on a batch load"),(0,r.kt)("td",{parentName:"tr",align:null},"description: Update metadata on a batch load")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/calendar"),(0,r.kt)("td",{parentName:"tr",align:null},"get"),(0,r.kt)("td",{parentName:"tr",align:null},"summary: Use this to save on calculation of business days."),(0,r.kt)("td",{parentName:"tr",align:null},"description: This base response gives you today's date in a string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/calendar/previousBusinessDay"),(0,r.kt)("td",{parentName:"tr",align:null},"get"),(0,r.kt)("td",{parentName:"tr",align:null},"summary: Will return a string of the previous business day"),(0,r.kt)("td",{parentName:"tr",align:null},"description: Will return a string of the previous business day, based on the date on when it's called")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/calendar/nextBusinessDay"),(0,r.kt)("td",{parentName:"tr",align:null},"get"),(0,r.kt)("td",{parentName:"tr",align:null},"summary: Will return a string of the next business day"),(0,r.kt)("td",{parentName:"tr",align:null},"description: Will return a string of the next business day, based on the date on when it's called")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h1",{id:"yaml-to-datastore---entitykind-design"},"Yaml to Datastore - Entity/Kind design"),(0,r.kt)("h3",{id:"datastore-primer"},"Datastore Primer"),(0,r.kt)("p",null,"Before we jump right into Entity Groups in Datastore, it is important to first go over the basics and establish a common vocabulary. Datastore holds entities, which are objects, that can contain various key/value pairs, called properties. Each entity must contain a unique identifier, known as a key. When creating an entity, a user can choose to specify a custom key or let Datastore create a key. If a user decides to specify a custom key, it will contain two fields: a kind, which represents a category such as \u2018Toy\u2019 or \u2018Marital Status\u2019, and a name, which is the identifying value. If a user decides to only specify a kind when creating a key, and does not specify a unique identifier, Datastore automatically generates an ID behind the scenes. Below is an example of a Python3 script which illustrates this identifier concept."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from google.cloud import datastore\n\nclient = datastore.Client()\n#Custom key- specify my kind=item and a unique_id of broker\ncustom_key_entry = datastore.Entity(client.key("table","broker"))\nclient.put(custom_key_entry)\n\n#Only specify kind=item, let datastore generate unique_id\ndatastore_gen_key_entry = datastore.Entity(client.key("table"))\nclient.put(datastore_gen_key_entry)\n')),(0,r.kt)("p",null,"In your GCP Console under Datastore, you will then see your two entities of kind \u201ctable\u201d. One will contain your custom key and one will contain the automatically generated key."),(0,r.kt)("p",null,"Ancestors and Entity Groups"),(0,r.kt)("p",null,"For highly related or hierarchical data, Datastore allows entities to be stored in a parent/child relationship. This is known as an entity group or ancestor/descendent relationship."),(0,r.kt)("h3",{id:"entity-group"},"Entity Group"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(15186).Z},(0,r.kt)("img",{alt:"erd",src:a(50328).Z,width:"2910",height:"1526"}))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This is an example of an entity group with kinds of types: table, column, and classification. The \u2018Grandparent\u2019 in this relationship is the \u2018table\u2019. In order to configure this, one must first create the table entity. Then, a user can create a column, and specify that the parent is a table key. In order to create the grandchild, a user then creates a classification and sets its parent to be a column key. To further add customizable attributes, a user can specify additional key-value pairs such as pii and data_type. These key-value pairs are stored as properties. We model this diagram in Datastore in our working example below.")),(0,r.kt)("p",null,"One can create entity groups by setting the \u2018parent\u2019 parameter while creating an entity key for a child. This command adds the parent key to be part of the child entity key. The child\u2019s key is represented as a tuple (\u2018parent_key\u2019, \u2018child_key\u2019), such that the parents\u2019 key is the prefix of the key, which is followed by its own unique identifier. For example, follow the diagram above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'table_key = datastore_client.key("table","broker")\ncolumn_key = datastore_client.key("column","broker_legal_name", parent=table_key)\n')),(0,r.kt)("p",null,"Printing the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"table_key")," will display: ",(0,r.kt)("inlineCode",{parentName:"p"},'("table", "broker","column", "broker_legal_name")')),(0,r.kt)("p",null,"Datastore also supports chaining of parents, which can lead to very large keys for descendants with a long lineage of ancestors. Additionally, parents can have multiple children (representing a one-to-many relationship). However, there is no native support for entities to have multiple parents (representing a many-to-many relationship). Once you have configured this ancestral hierarchy, it is easy to retrieve all descendants for a given parent. You can do this by querying on the parent key by using the \u2018ancestor\u2019 parameter. For example, given the entity table_key created above, I can query for all of the tables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'columns: my_query = client.query(kind="table", ancestor = column_key) .\n')),(0,r.kt)("h1",{id:"a-full-working-example-for-mdh"},"A Full Working Example for MDH"),(0,r.kt)("p",null,"As per our Key Philosophies - ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Config-Driven"))," - anyone should be able to add a new ",(0,r.kt)("inlineCode",{parentName:"p"},"table")," to be processed and landed in a target-table somewhere within MDH with our yaml syntax. Below is a full working python3 example of the table/column/classification hierarchical model described above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from google.cloud import datastore\n\ndatastore_client = datastore.Client()\n\n# Entities with kinds- table, column, classification\nmy_entities = [\n{"kind": "table", "table_id": "broker", "table_type": "snapshot",\n    "notes": "describes mortgage brokers"},\n{"kind": "column", "column_id": "broker_legal_name", "table_id": "broker",\n    "data_type": "string", "size": 20, "nullable": 1},\n{"kind": "column", "column_id": "broker_short_code", "table_id": "broker",\n    "data_type": "string", "size": 3, "nullable": 1},\n{"kind": "classification", "classification_id":"classif_id_REQ_01",\n    "restriction_level": "public", "pii": 0, "if": "greater than 90 days",\n    "column_id": "broker_legal_name", "table_id": "broker"},\n{"kind": "classification", "classification_id":"classif_id_REQ_03",\n    "restriction_level": "restricted", "pii": 0, "if": "less than 90 days",\n    "column_id": "broker_legal_name", "table_id": "broker"},\n{"kind": "classification", "classification_id":"classif_id_REQ_214",\n    "restriction_level": "public", "pii": 0, "column_id": "broker_short_code",\n    "table_id": "broker"},\n]\n\n\n# traverse my_entities, set parents and add those to datastore\nfor entity in my_entities:\n    kind = entity[\'kind\']\n    parent_key = None\n    if kind == "column":\n        parent_key = datastore_client.key("table", entity["table_id"])\n    elif kind == "classification":\n        parent_key = datastore_client.key("table", entity["table_id"],\n                                          "column", entity["column_id"])\n\n    key = datastore_client.key(kind, entity[kind+"_id"],\n        parent=parent_key)\n    datastore_entry = datastore.Entity(key)\n    datastore_entry.update(entity)\n\n    print("Saving: {}".format(entity))\n\n    datastore_client.put(datastore_entry)\n')),(0,r.kt)("p",null,"The code above assumes that you\u2019ve set yourself up with a working Service Account or authorised yourself in, and that your GCP project has been set."),(0,r.kt)("p",null,"Now let\u2019s do some digging around our newly minted Datastore model. Let\u2019s grab the column \u2018broker_legal_name\u2019"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'query1 = datastore_client.query(kind="column")\nquery1.add_filter("column_id", "=", "broker_legal_name")\n')),(0,r.kt)("p",null,"Now that we have the column entity, let\u2019s locate it\u2019s parent id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'column = list(query1.fetch())[0]\nprint("This column belongs to: " +str(column.key.parent.id_or_name))\n')),(0,r.kt)("p",null,"Further to this, we can also get all data classification elements attributed to a single column using the ancestor clause query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'query2 = datastore_client.query(kind="classification", ancestor=column.key)\nfor classification in list(query2.fetch()):\n    print(classification.key)\n    print(classification["restriction_level"])\n')),(0,r.kt)("p",null,"For more complex queries, Datastore has the concept of indexes being set, usually via it\u2019s index.yaml configuration. The following is an example of an ",(0,r.kt)("inlineCode",{parentName:"p"},"index.yaml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"indexes:\n  - kind: Cat\n    ancestor: no\n    properties:\n      - name: name\n      - name: age\n        direction: desc\n\n  - kind: Cat\n    properties:\n      - name: name\n        direction: asc\n      - name: whiskers\n        direction: desc\n\n  - kind: Store\n    ancestor: yes\n    properties:\n      - name: business\n        direction: asc\n      - name: owner\n        direction: asc\n")),(0,r.kt)("p",null,"Indexes are important when attempting to add filters on more than one particular attribute within a Datastore entity. For example, the following code will fail:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Adding a \'>\' filter will cause this to fail. Sidenote; it will work\n# without an index if you add another \'=\' filter.\nquery2 = datastore_client.query(kind="classification", ancestor=column.key)\nquery2.add_filter("pii", ">", 0)\nfor classification in list(query2.fetch()):\n        print(classification.key)\n        print(classification["classification_id"])\n')),(0,r.kt)("p",null,"To rectify this issue, you need to create an index.yaml that looks like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"indexes:\n  - kind: classification\n    ancestor: yes\n    properties:\n      - name: pii\n")),(0,r.kt)("p",null,"You would usually upload the yaml file using the gcloud commands:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gcloud datastore indexes create path/to/index.yaml.")),(0,r.kt)("p",null,"However, let\u2019s do this programmatically."),(0,r.kt)("p",null,"The official pypi package for google-cloud-datastore can be found here: ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/google-cloud-datastore/"},"https://pypi.org/project/google-cloud-datastore/"),". At the time of writing, Firestore in Datastore-mode will be the way forward, as per the release note from January 31, 2019."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cloud Firestore is now Generally Available. Cloud Firestore is the new version of Cloud Datastore and includes a backwards-compatible Datastore mode.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you intend to use the Cloud Datastore API in a new project, use Cloud Firestore in Datastore mode. Existing Cloud Datastore databases will be automatically upgraded to Cloud Firestore in Datastore mode.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Except where noted, the Cloud Datastore documentation now describes behavior for Cloud Firestore in Datastore mode.")),(0,r.kt)("p",null,"We\u2019ve purposefully created MDH in Datastore to show you how it was done originally, and we\u2019ll be migrating the Datastore code to Firestore in an upcoming post."),(0,r.kt)("p",null,"Creating and deleting indexes within Datastore will need to be done through the REST API via googleapiclient.discovery, as this function doesn\u2019t exist via the google-cloud-datastore API. Working with the discovery api client can be a bit daunting for a first-time user, so here\u2019s the code to add an index on Datastore:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import os\nfrom google.oauth2 import service_account\nfrom googleapiclient.discovery import build\nfrom google.cloud import datastore\n\n\nSCOPES = ['https://www.googleapis.com/auth/cloud-platform']\n\nSERVICE_ACCOUNT_FILE = os.getenv('GOOGLE_APPLICATION_CREDENTIALS')\nPROJECT_ID = os.getenv(\"PROJECT_ID\")\n\ncredentials = service_account\n             .Credentials\n         .from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)\n\ndatastore_api = build('datastore', 'v1', credentials=credentials)\n\nbody = {\n    'ancestor': 'ALL_ANCESTORS',\n    'kind': 'classification',\n    'properties': [{\n        'name': 'pii',\n        'direction': 'DESCENDING'\n    }]\n}\n\nresponse = datastore_api.projects()\n           .indexes()\n           .create(projectId=PROJECT_ID, body=body)\n           .execute()\n")),(0,r.kt)("p",null,'How did we craft this API request? We can use the Google API Discovery Service to build client libraries, IDE plugins, and other tools that interact with Google APIs. The Discovery API provides a list of Google APIs and a machine-readable "Discovery Document" for each API. Features of the Discovery API:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A directory of supported APIs schemas based on JSON Schema."),(0,r.kt)("li",{parentName:"ul"},'A machine-readable "Discovery Document" for each of the supported APIs. Each document contains:'),(0,r.kt)("li",{parentName:"ul"},"A list of API methods and available parameters for each method."),(0,r.kt)("li",{parentName:"ul"},"A list of available OAuth 2.0 scopes."),(0,r.kt)("li",{parentName:"ul"},"Inline documentation of methods, parameters, and available parameter values.")),(0,r.kt)("p",null,"Navigating to the API reference page for Datastore and going to the \u2018Datastore Admin\u2019 API page, we can see references to the Indexes and RESTful endpoints we can hit for those Indexes. Therefore, looking at the link for the Discovery document for Datastore:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://datastore.googleapis.com/$discovery/rest?version=v1"},"https://datastore.googleapis.com/$discovery/rest?version=v1"))),(0,r.kt)("p",null,"From this, we can build out our instantiation for the google api discovery object build('datastore', 'v1', credentials=credentials)"),(0,r.kt)("p",null,"With respect to building out the body aspect of the request, I\u2019ve found crafting that part within the \u2018Try this API\u2019 section of ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cloud.google.com/datastore/docs/reference/admin/rest/v1/projects.indexes/create")," pretty valuable."),(0,r.kt)("p",null,"With this code, your index should show up in your Datastore console! You can also retrieve them within gcloud with gcloud datastore indexes list if you\u2019d like to verify the indexes outside our python code. So there you have it: a working example of entity groups, ancestors, indexes and Metadata within Datastore. Have fun coding!"))}g.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=i,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},15186:function(e,t,a){t.Z=a.p+"assets/files/erd-cce67b2304769e80a2dffce456462194.png"},23670:function(e,t,a){t.Z=a.p+"assets/images/mdhoverview-f1928d2566e120de80d74538c4e8a0bc.png"},50328:function(e,t,a){t.Z=a.p+"assets/images/erd-cce67b2304769e80a2dffce456462194.png"}}]);