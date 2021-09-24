"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[312],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(g,r(r({ref:t},p),{},{components:a})):n.createElement(g,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97344:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.imageSrc,a=e.altText;return n.createElement("figure",null,n.createElement("a",{href:t},n.createElement("img",{src:t,alt:a})),n.createElement("figcaption",{className:"figure-caption"},a))}},50364:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return b},contentTitle:function(){return k},metadata:function(){return v},assets:function(){return w},toc:function(){return C},default:function(){return T}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=a(59943),l=a(97344),s=a(75794),c=a(24522),p=a(66414),d=a(83762),u=a(40657),m=a(28390),g=a(65971),h=a(79826),f=a(15891),y=["components"],b={slug:"google-cloud-sql-availability-for-postgresql-read-replicas",title:"Google Cloud SQL \u2013 Availability for PostgreSQL \u2013 Part II (Read Replicas)",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/cloudsql-featured-image.png",tags:["cloudsql","gcp","google-cloud-platform","googlecloudplatform","ha","highavailability","postgresql"],keywords:["cloudsql","gcp","google-cloud-platform","googlecloudplatform","ha","highavailability","postgresql"]},k=void 0,v={permalink:"/google-cloud-sql-availability-for-postgresql-read-replicas",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2020-01-24-google-cloud-sql-availability-for-postgresql-read-replicas/index.md",source:"@site/blog/2020-01-24-google-cloud-sql-availability-for-postgresql-read-replicas/index.md",title:"Google Cloud SQL \u2013 Availability for PostgreSQL \u2013 Part II (Read Replicas)",description:"In this post we will look at read replicas as an additional method to achieve multi zone availability for Cloud SQL, which gives us - in turn - the ability to offload (potentially expensive) IO operations such as user created backups or read operations without adding load to the master instance.",date:"2020-01-24T00:00:00.000Z",formattedDate:"January 24, 2020",tags:[{label:"cloudsql",permalink:"/tags/cloudsql"},{label:"gcp",permalink:"/tags/gcp"},{label:"google-cloud-platform",permalink:"/tags/google-cloud-platform"},{label:"googlecloudplatform",permalink:"/tags/googlecloudplatform"},{label:"ha",permalink:"/tags/ha"},{label:"highavailability",permalink:"/tags/highavailability"},{label:"postgresql",permalink:"/tags/postgresql"}],readingTime:4.125,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],prevItem:{title:"Query Cloud SQL through Big Query",permalink:"/query-cloud-sql-through-big-query"},nextItem:{title:"Introducing Service Mesh Part II",permalink:"/introducing-service-mesh-part-ii"}},w={authorsImageUrls:[void 0]},C=[{value:"Deploying Read Replica(s)",id:"deploying-read-replicas",children:[]},{value:"Read Replicas in Action",id:"read-replicas-in-action",children:[]},{value:"Some Points to Note about Cloud SQL Read Replicas",id:"some-points-to-note-about-cloud-sql-read-replicas",children:[]},{value:"Promoting a Read Replica",id:"promoting-a-read-replica",children:[]}],N={toc:C};function T(e){var t=e.components,a=(0,o.Z)(e,y);return(0,i.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this post we will look at read replicas as an additional method to achieve multi zone availability for Cloud SQL, which gives us - in turn - the ability to offload (potentially expensive) IO operations such as user created backups or read operations without adding load to the master instance."),(0,i.kt)("p",null,"In the previous post in this series we looked at Regional availability for PostgreSQL HA using Cloud SQL:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cloudywithachanceofbigdata.com/google-cloud-sql-ha-backup-and-recovery-replication-failover-and-security-for-postgresql-part-i/"},(0,i.kt)("strong",{parentName:"a"},"Google Cloud SQL \u2013 Availability, Replication, Failover for PostgreSQL \u2013 Part I"))),(0,i.kt)("p",null,"Recall that this option was simple to implement and worked relatively seamlessly and transparently with respect to zonal failover."),(0,i.kt)("p",null,"Now let's look at read replicas in Cloud SQL as an additional measure for availability."),(0,i.kt)("h2",{id:"deploying-read-replicas"},"Deploying Read Replica(s)"),(0,i.kt)("p",null,"Deploying read replicas is slightly more involved than simple regional (high) availability, as you will need to define each replica or replicas as a separate Cloud SQL instance which is a slave to the primary instance (the master instance)."),(0,i.kt)("p",null,"An example using Terraform is provided here, starting by creating the master instance:"),(0,i.kt)(r.Z,{id:"34371a3c7edab140e70208cd7710c25a",mdxType:"Gist"}),(0,i.kt)("p",null,"Next you would specify one or more read replicas (typically in a zone other than the zone the master is in):"),(0,i.kt)(r.Z,{id:"980f2d6461db0613b4090413041b5ec5",mdxType:"Gist"}),(0,i.kt)("p",null,"Note that several of the options supplied are omitted when creating a read replica database instance, such as the backup and maintenance options - as these operations cannot be performed on a read replica as we will see later."),(0,i.kt)(l.Z,{imageSrc:s.Z,altText:"Cloud SQL Instances - showing master and replica",mdxType:"ImageWithCaption"}),(0,i.kt)(l.Z,{imageSrc:c.Z,altText:"Cloud SQL Master Instance",mdxType:"ImageWithCaption"}),(0,i.kt)("p",null,"Voila! You have just set up a master instance (the primary instance your application and/or users will connect to) along with a read replica in a different zone which will be asynchronously updated as changes occur on the master instance."),(0,i.kt)("h2",{id:"read-replicas-in-action"},"Read Replicas in Action"),(0,i.kt)("p",null,"Now that we have created a read replica, lets see it in action. After connecting to the read replica (like you would any other instance), attempt to access a table that has ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"not"))," been created on the master as shown here:"),(0,i.kt)(l.Z,{imageSrc:p.Z,altText:"SELECT operation from the replica instance",mdxType:"ImageWithCaption"}),(0,i.kt)("p",null,"Now create the table and insert some data on the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"master"))," instance:"),(0,i.kt)(l.Z,{imageSrc:d.Z,altText:"Create a table and insert a record on the master instance",mdxType:"ImageWithCaption"}),(0,i.kt)("p",null,"Now try the select operation on the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"replica"))," instance:"),(0,i.kt)(l.Z,{imageSrc:u.Z,altText:"SELECT operation from the replica instance (after changes have been made on the master)",mdxType:"ImageWithCaption"}),(0,i.kt)("p",null,"It works!"),(0,i.kt)("h2",{id:"some-points-to-note-about-cloud-sql-read-replicas"},"Some Points to Note about Cloud SQL Read Replicas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users connect to a read replica as a normal database connection (as shown above)"),(0,i.kt)("li",{parentName:"ul"},"Google managed backups (using the console or ",(0,i.kt)("inlineCode",{parentName:"li"},"gcloud sql backups create ..")," ) can ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"NOT"))," be performed against replica instances"),(0,i.kt)("li",{parentName:"ul"},"Read replicas can be used to offload IO intensive operations from the the master instance - such as user managed backup operations (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"pg_dump"),")")),(0,i.kt)(l.Z,{imageSrc:m.Z,altText:"pg_dump operation against a replica instance",mdxType:"ImageWithCaption"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BE CAREFUL")," Despite their name, read replicas are ",(0,i.kt)("strong",{parentName:"li"},"NOT")," read only, updates can be made which will NOT propagate back to the master instance - you could get yourself in an awful mess if you allow users to perform ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"UPDATE"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"DROP")," operations against replica instances.")),(0,i.kt)("h2",{id:"promoting-a-read-replica"},"Promoting a Read Replica"),(0,i.kt)("p",null,"If required a read replica can be promoted to a standalone Cloud SQL instance, which is another DR option. Keep in mind however as the read replica is updated in an asynchronous manner, promotion of a read replica may result in a loss of data (hopefully not much but a loss nonetheless). Your application RPO will dictate if this is acceptable or not."),(0,i.kt)("p",null,"Promotion of a read replica is reasonably straightforward as demonstrated here using the console:"),(0,i.kt)(l.Z,{imageSrc:g.Z,altText:"Promoting a read replica using the console",mdxType:"ImageWithCaption"}),(0,i.kt)("p",null,"You can also use the following ",(0,i.kt)("inlineCode",{parentName:"p"},"gcloud")," command:"),(0,i.kt)("p",null," gcloud sql instances promote-replica  <replica","_","instance","_","name>"),(0,i.kt)("p",null,"Once you click on the ",(0,i.kt)("em",{parentName:"p"},"Promote Replica")," button you will see the following warning:"),(0,i.kt)(l.Z,{imageSrc:h.Z,altText:"",mdxType:"ImageWithCaption"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Promoting a read replica using the console")),(0,i.kt)("p",null,"This simply states that once you promote the replica instance your instance will become an independent instance with no further relationship with the master instance. Once accepted and the promotion process is complete, you can see that you now have two independent Cloud SQL instances (as advertised!):"),(0,i.kt)(l.Z,{imageSrc:f.Z,altText:"Promoted Cloud SQL instance",mdxType:"ImageWithCaption"}),(0,i.kt)("p",null,"Some of the options you would normally configure with a master instance would need to be configured on the promoted replica instance - such as high availability, maintenance and scheduled backups - but in the event of a zonal failure you would be back up and running with virtually no data loss!"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Full source code for this article is available at: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gamma-data/cloud-sql-postgres-availability-tutorial"},"https://github.com/gamma-data/cloud-sql-postgres-availability-tutorial"))))}T.isMDXComponent=!0},59943:function(e,t,a){var n=a(67294);a(45697);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var r=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,a=e.file;return"https://gist.github.com/"+t+".js"+(a?"?file="+a:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,a=e.file,n=this.iframeNode,o=n.document;n.contentDocument?o=n.contentDocument:n.contentWindow&&(o=n.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(a?"gist-"+t+"-"+a:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";o.open(),o.writeln(i),o.close()},t.prototype.render=function(){var e=this,t=this.props,a=t.id,o=t.file;return n.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:o?"gist-"+a+"-"+o:"gist-"+a})},t}(n.PureComponent);t.Z=r},75794:function(e,t,a){t.Z=a.p+"assets/images/cloud-sql-postgres-read-replicas-1-212da608bf5ba2aa73198627a0cfe3e1.png"},24522:function(e,t,a){t.Z=a.p+"assets/images/cloud-sql-postgres-read-replicas-2-ec13f6b5f93493f369db3f4c11987507.png"},66414:function(e,t,a){t.Z=a.p+"assets/images/cloud-sql-postgres-read-replicas-3-8d16fdd58297948424c733b59cb58ff5.png"},83762:function(e,t,a){t.Z=a.p+"assets/images/cloud-sql-postgres-read-replicas-4-c207e904d4880b5f799bcfdabf7de36a.png"},40657:function(e,t,a){t.Z=a.p+"assets/images/cloud-sql-postgres-read-replicas-5-a9412ef5afba9855221998e5551cb19e.png"},28390:function(e,t,a){t.Z=a.p+"assets/images/cloud-sql-postgres-read-replicas-6-c367a62c5d3e480fa25ea4d0ea2669cf.png"},65971:function(e,t,a){t.Z=a.p+"assets/images/cloud-sql-postgres-read-replicas-7-a4ec8a31ed6601a9e7253ce408893a90.png"},79826:function(e,t,a){t.Z=a.p+"assets/images/cloud-sql-postgres-read-replicas-8-310006339cb5a3d3c491dfb00fc86c88.png"},15891:function(e,t,a){t.Z=a.p+"assets/images/cloud-sql-postgres-read-replicas-9-5cbdcea2c489b064bbbc1bad3617fbce.png"}}]);