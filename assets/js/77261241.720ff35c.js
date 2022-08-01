"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[90234],{3834:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),l=a(59943),s=["components"],p={slug:"spark-in-the-google-cloud-platform-part-2",title:"Spark in the Google Cloud Platform Part 2",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/spark-gcp-featured-image.png",tags:["apache-spark","cloud-dataproc","dataproc","gcp","gke","google-cloud-platform","googlecloudplatform","kubernetes","spark"],keywords:["apache-spark","cloud-dataproc","dataproc","gcp","gke","google-cloud-platform","googlecloudplatform","kubernetes","spark"]},i=void 0,c={permalink:"/spark-in-the-google-cloud-platform-part-2",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2020-02-29-spark-in-the-google-cloud-platform-part-2/index.md",source:"@site/blog/2020-02-29-spark-in-the-google-cloud-platform-part-2/index.md",title:"Spark in the Google Cloud Platform Part 2",description:"Apache Spark in GCP",date:"2020-02-29T00:00:00.000Z",formattedDate:"February 29, 2020",tags:[{label:"apache-spark",permalink:"/tags/apache-spark"},{label:"cloud-dataproc",permalink:"/tags/cloud-dataproc"},{label:"dataproc",permalink:"/tags/dataproc"},{label:"gcp",permalink:"/tags/gcp"},{label:"gke",permalink:"/tags/gke"},{label:"google-cloud-platform",permalink:"/tags/google-cloud-platform"},{label:"googlecloudplatform",permalink:"/tags/googlecloudplatform"},{label:"kubernetes",permalink:"/tags/kubernetes"},{label:"spark",permalink:"/tags/spark"}],readingTime:5.015,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"spark-in-the-google-cloud-platform-part-2",title:"Spark in the Google Cloud Platform Part 2",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/spark-gcp-featured-image.png",tags:["apache-spark","cloud-dataproc","dataproc","gcp","gke","google-cloud-platform","googlecloudplatform","kubernetes","spark"],keywords:["apache-spark","cloud-dataproc","dataproc","gcp","gke","google-cloud-platform","googlecloudplatform","kubernetes","spark"]},prevItem:{title:"Creating a Site to Site VPN Connection Between GCP and Azure with Google Private Access",permalink:"/creating-a-site-to-site-vpn-connection-between-gcp-and-azure-with-google-private-access"},nextItem:{title:"Spark in the Google Cloud Platform Part 1",permalink:"/spark-in-the-google-cloud-platform-part-1"}},u={authorsImageUrls:[void 0]},d=[],k={toc:d};function m(e){var t=e.components,p=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},k,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Apache Spark in GCP",src:a(55677).Z,width:"213",height:"155"})),(0,o.kt)("p",null,"In the previous post in this series ",(0,o.kt)("a",{parentName:"p",href:"https://cloudywithachanceofbigdata.com/spark-in-the-google-cloud-platform-part-1/"},(0,o.kt)("strong",{parentName:"a"},"Spark in the Google Cloud Platform Part 1")),", we started to explore the various ways in which we could deploy Apache Spark applications in GCP. The first option we looked at was deploying Spark using Cloud DataProc, a managed Hadoop cluster with various ecosystem components included."),(0,o.kt)("admonition",{title:"Spark Training Courses",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/data-transformation-and-analysis-using-apache-spark/"},"Data Transformation and Analysis Using Apache Spark"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/stream-and-event-processing-using-apache-spark/"},"Stream and Event Processing using Apache Spark"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/advanced-analytics-using-apache-spark/"},"Advanced Analytics Using Apache Spark"))),(0,o.kt)("p",null,"In this post, we will look at another option for deploying Spark in GCP \u2013 ",(0,o.kt)("em",{parentName:"p"},"a Spark Standalone cluster running on GKE"),"."),(0,o.kt)("p",null,"Spark Standalone refers to the in-built cluster manager provided with each Spark release. Standalone can be a bit of a misnomer as it sounds like a single instance \u2013 which it is not, standalone simply refers to the fact that it is not dependent upon any other projects or components \u2013 such as Apache YARN, Mesos, etc."),(0,o.kt)("p",null,"A Spark Standalone cluster consists of a Master node or instance and one of more Worker nodes. The Master node serves as both a master and a cluster manager in the Spark runtime architecture."),(0,o.kt)("p",null,"The Master process is responsible for marshalling resource requests on behalf of applications and monitoring cluster resources."),(0,o.kt)("p",null,"The Worker nodes host one or many Executor instances which are responsible for carrying out tasks."),(0,o.kt)("p",null,"Deploying a Spark Standalone cluster on GKE is reasonably straightforward. In the example provided in this post we will set up a private network (VPC), create a GKE cluster, and deploy a Spark Master pod and two Spark Worker pods (in a real scenario you would typically have many Worker pods)."),(0,o.kt)("p",null,"Once the network and GKE cluster have been deployed, the first step is to create Docker images for both the Master and Workers."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," below can be used to create an image capable or running either the Worker or Master daemons:"),(0,o.kt)(l.Z,{id:"a2828409021205b3f6587c824c59928d",mdxType:"Gist"}),(0,o.kt)("p",null,"Note the shell scripts included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"spark-master")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"spark-worker"),". These will be used later on by K8S deployments to start the relative Master and Worker daemon processes in each of the pods."),(0,o.kt)("p",null,"Next, we will use Cloud Build to build an image using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," are store this in GCR (Google Container Registry), from the Cloud Build directory in our project we will run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gcloud builds submit --tag gcr.io/spark-demo-266309/spark-standalone\n")),(0,o.kt)("p",null,"Next, we will create Kubernetes deployments for our Master and Worker pods."),(0,o.kt)("p",null,"Firstly, we need to get cluster credentials for our GKE cluster named \u2018spark-cluster\u2019:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gcloud container clusters get-credentials spark-cluster --zone australia-southeast1-a --project spark-demo-266309\n")),(0,o.kt)("p",null,"Now from within the ",(0,o.kt)("inlineCode",{parentName:"p"},"k8s-deployments\\deploy")," folder of our project we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," command to deploy the Master pod, service and the Worker pods"),(0,o.kt)("p",null,"Starting with the Master deployment, this will deploy our Spark Standalone image into a container running the Master daemon process:"),(0,o.kt)(l.Z,{id:"31bca11627167e0cd963103e4c7f11d2",mdxType:"Gist"}),(0,o.kt)("p",null,"To deploy the Master, run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f spark-master-deployment.yaml\n")),(0,o.kt)("p",null,"The Master will expose a web UI on port 8080 and an RPC service on port 7077, we will need to deploy a K8S service for this, the YAML required to do this is shown here:"),(0,o.kt)(l.Z,{id:"a72d3c38d7a3f94e88c7affd28a3034b",mdxType:"Gist"}),(0,o.kt)("p",null,"To deploy the Master service, run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f spark-master-service.yaml\n")),(0,o.kt)("p",null,"Now that we have a Master pod and service up and running, we need to deploy our Workers which are preconfigured to communicate with the Master service."),(0,o.kt)("p",null,"The YAML required to deploy the two Worker pods is shown here:"),(0,o.kt)(l.Z,{id:"97ceb93ed35959c41d80fb8c025a7ba1",mdxType:"Gist"}),(0,o.kt)("p",null,"To deploy the Worker pods, run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f spark-worker-deployment.yaml\n")),(0,o.kt)("p",null,"You can now inspect the Spark processes running on your GKE cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get deployments\n")),(0,o.kt)("p",null,"Shows..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME           READY   UP-TO-DATE   AVAILABLE   AGE\n spark-master   1/1     1            1           7m45s\n spark-worker   2/2     2            2           9s\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get pods\n")),(0,o.kt)("p",null,"Shows..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME                            READY   STATUS    RESTARTS   AGE\n spark-master-f69d7d9bc-7jgmj    1/1     Running   0          8m\n spark-worker-55965f669c-rm59p   1/1     Running   0          24s\n spark-worker-55965f669c-wsb2f   1/1     Running   0          24s\n")),(0,o.kt)("p",null,"Next, as we need to expose the Web UI for the Master process we will create a ",(0,o.kt)("em",{parentName:"p"},"LoadBalancer")," resource. The YAML used to do this is provided here:"),(0,o.kt)(l.Z,{id:"56ee86f50f329f99679ff243bb00fb07",mdxType:"Gist"}),(0,o.kt)("p",null,"To deploy the LB, you would run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f spark-ui-lb.yaml\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," This is just an example, for simplicity we are creating an external ",(0,o.kt)("em",{parentName:"p"},"LoadBalancer")," with a public IP, this configuration is likely not be appropriate in most real scenarios, alternatives would include an internal ",(0,o.kt)("em",{parentName:"p"},"LoadBalancer"),", retraction of Authorized Networks, a jump host, SSH tunnelling or IAP."),(0,o.kt)("p",null,"Now you\u2019re up and running!"),(0,o.kt)("p",null,"You can access the Master web UI from the Google Console link shown here:"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(3173).Z},(0,o.kt)("img",{alt:"Accessing the Spark Master UI from the Google Cloud Console",src:a(47218).Z,width:"1070",height:"611"}))),(0,o.kt)("p",null,"The Spark Master UI should look like this:"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(28933).Z},(0,o.kt)("img",{alt:"Spark Master UI",src:a(45476).Z,width:"1070",height:"668"}))),(0,o.kt)("p",null,"Next we will exec into a Worker pod, get a shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl exec -it spark-worker-55965f669c-rm59p -- sh\n")),(0,o.kt)("p",null,"Now from within the shell environment of a Worker \u2013 which includes all of the Spark client libraries, we will submit a simple Spark application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spark-submit --class org.apache.spark.examples.SparkPi \\\n --master spark://10.11.250.98:7077 \\\n/opt/spark/examples/jars/spark-examples*.jar 10000\n")),(0,o.kt)("p",null,"You can see the results in the shell, as shown here:"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(2419).Z},(0,o.kt)("img",{alt:"Spark Pi Estimator Example",src:a(54300).Z,width:"1022",height:"932"}))),(0,o.kt)("p",null,"Additionally, as all of the container logs go to Stackdriver, you can view the application logs there as well:"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(72978).Z},(0,o.kt)("img",{alt:"Container Logs in StackDriver",src:a(31899).Z,width:"1070",height:"668"}))),(0,o.kt)("p",null,"This is a simple way to get a Spark cluster running, it is not without its downsides and shortcomings however, which include the limited security mechanisms available (SASL, network security, shared secrets)."),(0,o.kt)("p",null,"In the final post in this series we will look at Spark on Kubernetes, using Kubernetes as the Spark cluster manager and interacting with Spark using the Kubernetes API and control plane, see you then."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Full source code for this article is available at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gamma-data/spark-on-gcp"},"https://github.com/gamma-data/spark-on-gcp"))),(0,o.kt)("p",null,"The infrastructure coding for this example uses Powershell and Terraform, and is deployed as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"PS > .\\run.ps1 private-network apply <gcp-project> <region>\nPS > .\\run.ps1 gke apply <gcp-project> <region>\n")))}m.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(a),k=n,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||o;return a?r.createElement(m,l(l({ref:t},c),{},{components:a})):r.createElement(m,l({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},72978:function(e,t,a){t.Z=a.p+"assets/files/container-logs-in-stackdriver-350797a4dd5cceab0b4aa12445adeed4.png"},3173:function(e,t,a){t.Z=a.p+"assets/files/master-ui-link-c9d78a7032459c01291494b1c26e34ff.png"},2419:function(e,t,a){t.Z=a.p+"assets/files/spark-application-example-0f11e071394077ac8c678ed7d3e93791.png"},28933:function(e,t,a){t.Z=a.p+"assets/files/spark-master-ui-fa6eecc91847995dea15601166516004.png"},59943:function(e,t,a){var r=a(67294);a(45697);function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){return n(this,t),o(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,a=e.file;return"https://gist.github.com/"+t+".js"+(a?"?file="+a:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,a=e.file,r=this.iframeNode,n=r.document;r.contentDocument?n=r.contentDocument:r.contentWindow&&(n=r.contentWindow.document);var o='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(a?"gist-"+t+"-"+a:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";n.open(),n.writeln(o),n.close()},t.prototype.render=function(){var e=this,t=this.props,a=t.id,n=t.file;return r.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:n?"gist-"+a+"-"+n:"gist-"+a})},t}(r.PureComponent);t.Z=l},31899:function(e,t,a){t.Z=a.p+"assets/images/container-logs-in-stackdriver-350797a4dd5cceab0b4aa12445adeed4.png"},47218:function(e,t,a){t.Z=a.p+"assets/images/master-ui-link-c9d78a7032459c01291494b1c26e34ff.png"},54300:function(e,t,a){t.Z=a.p+"assets/images/spark-application-example-0f11e071394077ac8c678ed7d3e93791.png"},55677:function(e,t,a){t.Z=a.p+"assets/images/spark-gcp-featured-image-86e0bfd36db759253fff66591b594d8b.png"},45476:function(e,t,a){t.Z=a.p+"assets/images/spark-master-ui-fa6eecc91847995dea15601166516004.png"}}]);