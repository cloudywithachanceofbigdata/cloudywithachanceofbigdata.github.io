"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[1739],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,d=c["".concat(l,".").concat(m)]||c[m]||k[m]||s;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},61848:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return k}});var n=a(83117),r=a(80102),s=(a(67294),a(3905)),o=["components"],i={slug:"stream-processing-with-spark-structured-streaming-kafka-and-snowflake-using-python",title:"Stream Processing with Spark Structured Streaming, Kafka and Snowflake using Python",authors:["jeffreyaven"],draft:!1,image:"/img/blog/kafka-spark-snowflake.png",tags:["snowflake","kafka","spark","sql","streaming"],keywords:["snowflake","kafka","spark","sql","streaming"],description:"Simple demonstration of stream processing with Spark Structured Streaming, Kafka and Snowflake using Python"},l=void 0,p={permalink:"/stream-processing-with-spark-structured-streaming-kafka-and-snowflake-using-python",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2022-04-28-stream-processing-with-spark-structured-streaming-kafka-and-snowflake-using-python/index.md",source:"@site/blog/2022-04-28-stream-processing-with-spark-structured-streaming-kafka-and-snowflake-using-python/index.md",title:"Stream Processing with Spark Structured Streaming, Kafka and Snowflake using Python",description:"Simple demonstration of stream processing with Spark Structured Streaming, Kafka and Snowflake using Python",date:"2022-04-28T00:00:00.000Z",formattedDate:"April 28, 2022",tags:[{label:"snowflake",permalink:"/tags/snowflake"},{label:"kafka",permalink:"/tags/kafka"},{label:"spark",permalink:"/tags/spark"},{label:"sql",permalink:"/tags/sql"},{label:"streaming",permalink:"/tags/streaming"}],readingTime:3.555,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"stream-processing-with-spark-structured-streaming-kafka-and-snowflake-using-python",title:"Stream Processing with Spark Structured Streaming, Kafka and Snowflake using Python",authors:["jeffreyaven"],draft:!1,image:"/img/blog/kafka-spark-snowflake.png",tags:["snowflake","kafka","spark","sql","streaming"],keywords:["snowflake","kafka","spark","sql","streaming"],description:"Simple demonstration of stream processing with Spark Structured Streaming, Kafka and Snowflake using Python"},prevItem:{title:"Split a large Open API or Swagger Specification into smaller documents",permalink:"/split-a-large-swagger-openapi-specification-into-smaller-documents"},nextItem:{title:"Simple CLI Application to Login to Okta using PKCE",permalink:"/simple-cli-pkce-auth-using-okta"}},u={authorsImageUrls:[void 0]},k=[{value:"Design",id:"design",level:2},{value:"Snowflake Setup",id:"snowflake-setup",level:2},{value:"The Code",id:"the-code",level:2},{value:"The Results",id:"the-results",level:2}],c={toc:k};function m(e){var t=e.components,i=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Structured Streaming in Spark provides a powerful framework for stream processing an analysis, such as streaming transformations, stateful streaming or sliding window operations.  "),(0,s.kt)("p",null,"Kafka is a common streaming source and sink for Spark Streaming and Structured Streaming operations.  However, there may be situations where a data warehouse (such as Snowflake) is a more appropriate target for streaming operations, especially where there is a reporting or long-term storage requirement on the data derived from the streaming source.  "),(0,s.kt)("p",null,"This article will demonstrate just how easy this is to implement using Python.  "),(0,s.kt)("h2",{id:"design"},"Design"),(0,s.kt)("p",null,"The following diagram illustrates the ingestion design for this example:  "),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:a(91286).Z},(0,s.kt)("img",{alt:"Spark Structured Streaming using Kafka and Snowflake",src:a(39930).Z,width:"948",height:"390"}))),(0,s.kt)("h2",{id:"snowflake-setup"},"Snowflake Setup"),(0,s.kt)("p",null,"Some prerequisites for Snowflake:  "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"You will need to create a user (or use an existing user), in either case the user will need to be identified by a private key.  You will need to generate a key pair as follows:  ")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"openssl genrsa 2048 | openssl pkcs8 -topk8 -inform PEM -out rsa_key.p8 -nocrypt\nopenssl rsa -in rsa_key.p8 -pubout -out rsa_key.pub\n")),(0,s.kt)("p",null,"copy the contents of the ",(0,s.kt)("inlineCode",{parentName:"p"},"rsa_key.pub")," file, remove the ",(0,s.kt)("inlineCode",{parentName:"p"},"-----BEGIN PUBLIC KEY-----")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"-----END PUBLIC KEY-----")," strings, then remove the line breaks to form one string, use this string as the ",(0,s.kt)("inlineCode",{parentName:"p"},"RSA_PUBLIC_KEY")," in a ",(0,s.kt)("inlineCode",{parentName:"p"},"CREATE USER")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"ALTER USER")," statement in Snowflake, like:  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER youruser SET RSA_PUBLIC_KEY='MIIBI...';\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Now setup the target database, schema and table you will use to write out your stream data (the schema for the table must match the schema for the Data Stream you will use the ",(0,s.kt)("inlineCode",{parentName:"li"},"DataStreamWriter")," to emit records to Snowflake  ")),(0,s.kt)("p",null,"The user you will be using (that you setup the key pair authentication for) will need to be assigned a default role to which the appropriate write permissions are granted to the target objects in Snowflake.  You will also need to designate a virtual warehouse (which your user must have ",(0,s.kt)("inlineCode",{parentName:"p"},"USAGE")," permissions to.  "),(0,s.kt)("h2",{id:"the-code"},"The Code"),(0,s.kt)("p",null,"Now that we have the objects and user setup in Snowflake, we can construct our Spark application.  "),(0,s.kt)("p",null,"First, you will need to start your Spark session (either using ",(0,s.kt)("inlineCode",{parentName:"p"},"pyspark")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"spark-submit"),") including the packages that Spark will need to connect to Kafka and to Snowflake.  "),(0,s.kt)("p",null,"The Snowflake packages include a JDBC driver and the Snowflake Connector for Spark, see ",(0,s.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/spark-connector.html"},"Snowflake Connector for Spark"),".  "),(0,s.kt)("p",null,"An example is shown here (package versions may vary depending upon the version of Spark you are using):  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pyspark \\\n--packages \\\nnet.snowflake:snowflake-jdbc:3.13.14,\\\nnet.snowflake:spark-snowflake_2.12:2.10.0-spark_3.1,\\\norg.apache.spark:spark-sql-kafka-0-10_2.12:3.2.1\n")),(0,s.kt)("p",null,"Now that we have a spark session with the necessary packages, lets go...  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'# import any required functions, set the checkpoint directory, and log level (optional)\nfrom pyspark.sql.functions import split\nspark.sparkContext.setLogLevel("ERROR")\nspark.conf.set("spark.sql.streaming.checkpointLocation", "file:///tmp")\n')),(0,s.kt)("p",null,"setup connection options for Snowflake by creating an ",(0,s.kt)("inlineCode",{parentName:"p"},"sfOptions")," dictionary  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'sfOptions = {\n      "sfURL" : sfUrl,\n      "sfUser" : "avensolutions",\n      "pem_private_key": private_key,\n      "sfDatabase" : "SPARK_SNOWFLAKE_DEMO",\n      "sfSchema" : "PUBLIC",\n      "sfWarehouse" : "COMPUTE_WH",\n      "streaming_stage" : "mystage"\n}\n')),(0,s.kt)("p",null,"set a variable for the Snowflake Spark connector  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'SNOWFLAKE_SOURCE_NAME = "net.snowflake.spark.snowflake"\n')),(0,s.kt)("p",null,"read messages from Kafka:    "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'lines = spark \\\n  .readStream \\\n  .format("kafka") \\\n  .option("kafka.bootstrap.servers", "kafkabroker:9092") \\\n  .option("subscribe", "weblogs") \\\n  .load()\n')),(0,s.kt)("p",null,"perform necessary transformations (the fields and data types in the resultant data structure must match the target table you created in Snowflake:  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'log_recs = lines.select(\n    split(lines.value.cast("string"), " ").alias("data")\n    )\n    \nlog_data = log_recs.selectExpr(\n  "CAST(data[0] as string) as date",\n  "CAST(data[1] as string) as time",\n  "CAST(data[2] as string) as c_ip",  \n  "CAST(data[3] as string) as cs_username",\n  "CAST(data[4] as string) as s_sitename",  \n  "CAST(data[5] as string) as s_computername",\n  "CAST(data[6] as string) as s_ip",    \n  "CAST(data[7] as int) as s_port",  \n  "CAST(data[8] as string) as cs_method",    \n  "CAST(data[9] as string) as cs_uri_stem",  \n  "CAST(data[10] as string) as cs_uri_query",  \n  "CAST(data[11] as int) as sc_status",\n  "CAST(data[12] as int) as time_taken",    \n  "CAST(data[13] as string) as cs_version",    \n  "CAST(data[14] as string) as cs_host",\n  "CAST(data[15] as string) as User_Agent",\n  "CAST(data[16] as string) as Referer",    \n)\n')),(0,s.kt)("p",null,"write to Snowflake!  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'query = log_data\\\n    .writeStream\\\n    .format(SNOWFLAKE_SOURCE_NAME) \\\n    .options(**sfOptions) \\\n    .option("dbtable", "WEB_LOGS") \\\n    .trigger(processingTime=\'30 seconds\') \\\n    .start()\n    \nquery.awaitTermination()\n')),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Note that I have included the ",(0,s.kt)("inlineCode",{parentName:"p"},"processingTime")," trigger of ",(0,s.kt)("inlineCode",{parentName:"p"},"30 seconds")," (this is akin to the ",(0,s.kt)("inlineCode",{parentName:"p"},"batchInterval")," in the DStream API), you should tune this to get a balance between batch sizes to ingest into Snowflake (which will benefit from larger batches) and latency."))),(0,s.kt)("h2",{id:"the-results"},"The Results"),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:a(40049).Z},(0,s.kt)("img",{alt:"Spark Structured Streaming into Snowflake",src:a(36838).Z,width:"1920",height:"1040"}))),(0,s.kt)("p",null,"Enjoy!"))}m.isMDXComponent=!0},40049:function(e,t,a){t.Z=a.p+"assets/files/snowflake-screenshot-97a035bab5f113d5139441dde516099d.png"},91286:function(e,t,a){t.Z=a.p+"assets/files/spark-streaming-kafka-snowflake-5b6babb75a8da1443183fabc68c704a1.png"},36838:function(e,t,a){t.Z=a.p+"assets/images/snowflake-screenshot-97a035bab5f113d5139441dde516099d.png"},39930:function(e,t,a){t.Z=a.p+"assets/images/spark-streaming-kafka-snowflake-5b6babb75a8da1443183fabc68c704a1.png"}}]);