"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[1841],{27917:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=(n(59943),["components"]),i={slug:"loading-parquet-files-into-snowflake",title:"Loading Parquet Files into Snowflake",authors:["jeffreyaven"],draft:!1,image:"/img/blog/parquet-to-snowflake.png",tags:["snowflake","parquet","python","spark","pyspark","bigquery"],keywords:["snowflake","parquet","python","spark","pyspark","bigquery"],description:"This article demonstrates how to automate and streamline the ingestion of Parquet formatted files into Snowflake."},s=void 0,p={permalink:"/loading-parquet-files-into-snowflake",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2022-07-30-loading-parquet-files-into-snowflake/index.md",source:"@site/blog/2022-07-30-loading-parquet-files-into-snowflake/index.md",title:"Loading Parquet Files into Snowflake",description:"This article demonstrates how to automate and streamline the ingestion of Parquet formatted files into Snowflake.",date:"2022-07-30T00:00:00.000Z",formattedDate:"July 30, 2022",tags:[{label:"snowflake",permalink:"/tags/snowflake"},{label:"parquet",permalink:"/tags/parquet"},{label:"python",permalink:"/tags/python"},{label:"spark",permalink:"/tags/spark"},{label:"pyspark",permalink:"/tags/pyspark"},{label:"bigquery",permalink:"/tags/bigquery"}],readingTime:6.23,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"loading-parquet-files-into-snowflake",title:"Loading Parquet Files into Snowflake",authors:["jeffreyaven"],draft:!1,image:"/img/blog/parquet-to-snowflake.png",tags:["snowflake","parquet","python","spark","pyspark","bigquery"],keywords:["snowflake","parquet","python","spark","pyspark","bigquery"],description:"This article demonstrates how to automate and streamline the ingestion of Parquet formatted files into Snowflake."},nextItem:{title:"Analyze Developer Activity with StackQL, Jupyter and BigQuery",permalink:"/analyze-developer-activity-with-stackql-jupyter-bigquery"}},u={authorsImageUrls:[void 0]},d=[{value:"Background",id:"background",level:2},{value:"Streamlined Ingestion for Parquet Files into Snowflake",id:"streamlined-ingestion-for-parquet-files-into-snowflake",level:2},{value:"Generate Table DDL",id:"generate-table-ddl",level:3},{value:"Generate Named Stage DDL",id:"generate-named-stage-ddl",level:3},{value:"Generate <code>COPY</code> commands",id:"generate-copy-commands",level:3},{value:"Load your data",id:"load-your-data",level:3}],f={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Loading Parquet format files into BigQuery is straightforward, you just need to specify the file location (local, Google Cloud Storage, Drive, Amazon S3 or Azure Blob storage) and thats pretty much it, BigQuery works the rest out from there.  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bq load \\\n--location=australia-southeast2 \\\n--project_id=parquet-demo \\\n--source_format=PARQUET \\\nparquet_test.dim_calendar \\\n.\\Calendar.gzip\n")),(0,l.kt)("p",null,"In Snowflake, however, it is not as simple, I'll share my approach to automating this here.  "),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Parquet is a self-describing, column-oriented storage format commonly used in distributed systems for input and output.  Data in Parquet files is serialised for optimised consumption from Parquet client libraries and packages such as ",(0,l.kt)("inlineCode",{parentName:"p"},"pandas"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pyarrow"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"fastparquet"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"dask"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"pyspark"),".")),(0,l.kt)("h2",{id:"background"},"Background"),(0,l.kt)("p",null,"Data in a Parquet file is stored in a single column for a self-contained dataset.  If you were to ingest this into Snowflake without knowing the schema you could do something like this...   "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE OR REPLACE TABLE PARQUET_TEST.PUBLIC.DIM_CALENDAR (\n  Data variant\n);\n\nCOPY INTO PARQUET_TEST.PUBLIC.DIM_CALENDAR \n(\n  Data\n) FROM (\nSELECT\n*\nFROM\n@PARQUET_TEST.PUBLIC.DIM_CALENDAR_STAGE)\n  file_format = (TYPE = parquet);\n")),(0,l.kt)("p",null,"You would end up with something like...   "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Row")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Data")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{"CalMonthOfYearNo": 6, "CalYear": 2020, ... }'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{"CalMonthOfYearNo": 6, "CalYear": 2020, ... }'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"...")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"..."))))),(0,l.kt)("p",null,"You could then have a second stage of processing to convert this into a normal relational structure.  "),(0,l.kt)("p",null,"Or you could do this in one step, with a little prep work ahead of time.  In my scenario I was given several parquet files from a client for a one-off load into Snowflake, several files for a fact table and multiple single files representing different dimension tables.  "),(0,l.kt)("h2",{id:"streamlined-ingestion-for-parquet-files-into-snowflake"},"Streamlined Ingestion for Parquet Files into Snowflake"),(0,l.kt)("p",null,"To collapse the formatting and uploading of Parquet files into a materialized table into one step, we need to do a couple of things:  "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create the target table with the correct schema (column names and data types); and"),(0,l.kt)("li",{parentName:"ol"},"perform a projection in our ",(0,l.kt)("inlineCode",{parentName:"li"},"COPY")," command from the single column containing all of the data (represented by ",(0,l.kt)("inlineCode",{parentName:"li"},"$1")," in Snowflake) into columns defined in step 1")),(0,l.kt)("p",null,"Since this is technically a transformation and only named stages are supported for ",(0,l.kt)("inlineCode",{parentName:"p"},"COPY")," transformations, we need to create a stage for the copy.  In my case there is a pre-existing Storage Integration in place that can be used by the stage.  "),(0,l.kt)("h3",{id:"generate-table-ddl"},"Generate Table DDL"),(0,l.kt)("p",null,"To automate the generation of the DDL to create the table and stage and the ",(0,l.kt)("inlineCode",{parentName:"p"},"COPY")," command, I used Python and Spark (which has first class support for Parquet files).  Parquet datatypes are largely the same as Snowflake, but if we needed to, we could create a map and modify the target types during the DDL generation.  "),(0,l.kt)("p",null,"First copy specimen Parquet formatted files to a local directory, the script we are creating can then iterate through the parquet files and generate all of the commands we will need saved to a ",(0,l.kt)("inlineCode",{parentName:"p"},".sql")," file.  "),(0,l.kt)("p",null,"With some setup information provided (not shown for brevity), we will first go through each file in the directory, capture metadata along with the schema (column name and data type) as shown here:  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"for file in files:\n    tableMap = {}\n    table = file.stem\n    spark = launch_spark_session()\n    parquetFile = spark.read.parquet(\"%s/%s\" %(BASE_DIR, file))\n    data_types = parquetFile.dtypes\n    stop_spark_session(spark)\n    tableMap['name'] = table\n    tableMap['file'] = file\n    tableMap['data_types'] = data_types\n    allTables.append(tableMap)\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"allTables")," list looks something like this...  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"[{'name': 'Calendar', 'file': PosixPath('data/dim/Calendar.gzip'), 'data_types': [('Time_ID', 'bigint'), ('CalYear', 'bigint'), ('CalMonthOfYearNo', 'bigint'), ('FinYear', 'bigint'), ('FinWeekOfYearNo', 'bigint')]}, ... ]\n")),(0,l.kt)("p",null,"Next we generate the ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement using the ",(0,l.kt)("inlineCode",{parentName:"p"},"allTables")," list:  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# create output file for all sql\nwith open(\'all_tables.sql\', \'w\') as f:\n    for table in allTables:\n        print("processing %s..." % table[\'name\'])\n        f.write("/*** Create %s Table***/" % table[\'name\'].upper())\n        sql = """\nCREATE OR REPLACE TABLE %s.%s.%s (\n""" % (database, schema, table[\'name\'].upper())\n        for column in table[\'data_types\']:\n            sql += "  %s %s,\\n" % (column[0], column[1])\n        sql = sql[:-2] + "\\n);"\n        f.write(sql)\n        f.write("\\n\\n")\n')),(0,l.kt)("h3",{id:"generate-named-stage-ddl"},"Generate Named Stage DDL"),(0,l.kt)("p",null,"Then we generate the stage in S3 from which the files will be loaded:  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"        f.write(\"/*** Create %s Stage***/\" % table['name'].upper())\n        sql = \"\"\"\nCREATE OR REPLACE STAGE %s.%s.%s_STAGE \n  url='%s/%s'\n  storage_integration = %s\n  encryption=(type='AWS_SSE_KMS' kms_key_id = '%s');\n\"\"\" % (database, schema, table['name'].upper(), s3_prefix, table['file'], storage_int, kms_key_id)\n        f.write(sql)\n        f.write(\"\\n\\n\")\n")),(0,l.kt)("h3",{id:"generate-copy-commands"},"Generate ",(0,l.kt)("inlineCode",{parentName:"h3"},"COPY")," commands"),(0,l.kt)("p",null,"Then we generate the ",(0,l.kt)("inlineCode",{parentName:"p"},"COPY")," commands...  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'        f.write("/*** Copying Data into %s ***/" % table[\'name\'].upper())\n        sql = """\nCOPY INTO %s.%s.%s \n(\\n""" % (database, schema, table[\'name\'].upper())\n        for column in table[\'data_types\']:\n            sql += "  %s,\\n" % column[0]\n        sql = sql[:-2] + "\\n)"\n        sql += " FROM (\\nSELECT\\n"\n        for column in table[\'data_types\']:\n            sql += "  $1:%s::%s,\\n" % (column[0], column[1])\n        sql = sql[:-2] + "\\nFROM\\n"\n        sql += "@%s.%s.%s_STAGE)\\n" % (database, schema, table[\'name\'].upper()) \n        sql += "  file_format = (TYPE = parquet);"\n        f.write(sql)\n        f.write("\\n\\n")\n')),(0,l.kt)("p",null,"Since this is a one off load, we will go ahead and drop the stage we created as it is no longer needed (this step is optional).."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'        f.write("/*** Dropping stage for %s ***/" % table[\'name\'].upper())\n        sql = """\nDROP STAGE %s.%s.%s_STAGE; \n""" % (database, schema, table[\'name\'].upper())\n        f.write(sql)\n        f.write("\\n\\n")\n')),(0,l.kt)("p",null,"The resultant file created looks like this.."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"/*** Create CALENDAR Table***/\nCREATE OR REPLACE TABLE PARQUET_TEST.PUBLIC.DIM_CALENDAR (\n  Time_ID bigint,\n  CalYear bigint,\n  CalMonthOfYearNo bigint,\n  FinYear bigint,\n  FinWeekOfYearNo bigint\n);\n\n/*** Create DIM_CALENDAR Stage***/\nCREATE OR REPLACE STAGE PARQUET_TEST.PUBLIC.DIM_CALENDAR_STAGE \n  url='s3://my-bucket/data/dim/Calendar.gzip'\n  storage_integration = my_storage_int\n  encryption=(type='AWS_SSE_KMS' kms_key_id = '4f715ec9-ee8e-44ab-b35d-8daf36c05f19');\n\n/*** Copying Data into DIM_CALENDAR ***/\nCOPY INTO PARQUET_TEST.PUBLIC.DIM_CALENDAR \n(\n  Time_ID,\n  CalYear,\n  CalMonthOfYearNo,\n  FinYear,\n  FinWeekOfYearNo\n) FROM (\nSELECT\n  $1:Time_ID::bigint,\n  $1:CalYear::bigint,\n  $1:CalMonthOfYearNo::bigint,\n  $1:FinYear::bigint,\n  $1:FinWeekOfYearNo::bigint\nFROM\n@PARQUET_TEST.PUBLIC.DIM_CALENDAR_STAGE)\n  file_format = (TYPE = parquet);\n\n/*** Dropping stage for DIM_CALENDAR ***/\nDROP STAGE PARQUET_TEST.PUBLIC.DIM_CALENDAR_STAGE; \n")),(0,l.kt)("h3",{id:"load-your-data"},"Load your data"),(0,l.kt)("p",null,"You can then run this along with all of the other dimension and fact table DDL and COPY commands generated to perform the one-off load from parquet files. You can find the complete code below, enjoy!  "),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Complete Code"),(0,l.kt)("pre",null,"from pathlib import Path",(0,l.kt)("br",null),"from pyspark.sql import SparkSession"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'def launch_spark_session():\n    return SparkSession \\\n        .builder \\\n        .appName("Parquet DDL Generation") \\\n        .getOrCreate()\n\ndef stop_spark_session(spark):\n    spark.stop()\n\nallTables = []\ndatabase = "PARQUET_TEST" \nschema = "PUBLIC"\ns3_prefix = \'s3://my-bucket\'\nstorage_int = \'my_storage_int\'\nkms_key_id = \'4f715ec9-ee8e-44ab-b35d-8daf36c05f19\'\n\nBASE_DIR = Path(__file__).resolve().parent\ndirectory = \'data/dim\'\nfiles = Path(directory).glob(\'*.gzip\')\nfor file in files:\n    tableMap = {}\n    table = file.stem\n    spark = launch_spark_session()\n    parquetFile = spark.read.parquet("%s/%s" %(BASE_DIR, file))\n    data_types = parquetFile.dtypes\n    stop_spark_session(spark)\n    tableMap[\'name\'] = table\n    tableMap[\'file\'] = file\n    tableMap[\'data_types\'] = data_types\n    allTables.append(tableMap)\n\n# create output file for all sql\nwith open(\'all_tables.sql\', \'w\') as f:\n    for table in allTables:\n        print("processing %s..." % table[\'name\'])\n        f.write("/*** Create %s Table***/" % table[\'name\'].upper())\n        sql = """\nCREATE OR REPLACE TABLE %s.%s.%s (\n""" % (database, schema, table[\'name\'].upper())\n        for column in table[\'data_types\']:\n            sql += "  %s %s,\\n" % (column[0], column[1])\n        sql = sql[:-2] + "\\n);"\n        f.write(sql)\n        f.write("\\n\\n")\n        \n        f.write("/*** Create %s Stage***/" % table[\'name\'].upper())\n        sql = """\nCREATE OR REPLACE STAGE %s.%s.%s_STAGE \n  url=\'%s/%s\'\n  storage_integration = %s\n  encryption=(type=\'AWS_SSE_KMS\' kms_key_id = \'%s\');\n""" % (database, schema, table[\'name\'].upper(), s3_prefix, table[\'file\'], storage_int, kms_key_id)\n        f.write(sql)\n        f.write("\\n\\n")\n\n        f.write("/*** Copying Data into %s ***/" % table[\'name\'].upper())\n        sql = """\nCOPY INTO %s.%s.%s \n(\\n""" % (database, schema, table[\'name\'].upper())\n        for column in table[\'data_types\']:\n            sql += "  %s,\\n" % column[0]\n        sql = sql[:-2] + "\\n)"\n        sql += " FROM (\\nSELECT\\n"\n        for column in table[\'data_types\']:\n            sql += "  $1:%s::%s,\\n" % (column[0], column[1])\n        sql = sql[:-2] + "\\nFROM\\n"\n        sql += "@%s.%s.%s_STAGE)\\n" % (database, schema, table[\'name\'].upper()) \n        sql += "  file_format = (TYPE = parquet);"\n        f.write(sql)\n        f.write("\\n\\n")\n\n        f.write("/*** Dropping stage for %s ***/" % table[\'name\'].upper())\n        sql = """\nDROP STAGE %s.%s.%s_STAGE; \n""" % (database, schema, table[\'name\'].upper())\n        f.write(sql)\n        f.write("\\n\\n")\n'))))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(n),m=r,c=f["".concat(s,".").concat(m)]||f[m]||d[m]||l;return n?a.createElement(c,o(o({ref:t},u),{},{components:n})):a.createElement(c,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59943:function(e,t,n){var a=n(67294);n(45697);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var o=function(e){function t(){return r(this,t),l(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,r=a.document;a.contentDocument?r=a.contentDocument:a.contentWindow&&(r=a.contentWindow.document);var l='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";r.open(),r.writeln(l),r.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,r=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:r?"gist-"+n+"-"+r:"gist-"+n})},t}(a.PureComponent);t.Z=o}}]);