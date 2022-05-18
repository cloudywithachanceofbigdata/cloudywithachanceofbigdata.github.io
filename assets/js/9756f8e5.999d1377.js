"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[12128],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return o?a.createElement(f,i(i({ref:t},c),{},{components:o})):a.createElement(f,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<n;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},58124:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=o(83117),r=o(80102),n=(o(67294),o(3905)),i=["components"],l={slug:"forseti-terraform-validator-enforcing-resource-policy-compliance-in-your-ci-pipeline",title:"Forseti Terraform Validator: Enforcing resource policy compliance in your CI pipeline",authors:["danielhussey"],draft:!1,hide_table_of_contents:!0,image:"images/Forseti-Terraform-e1587291818418.png",tags:["devops","forseti","gcp","google-cloud-platform","googlecloudplatform","policyascode","terraform"],keywords:["devops","forseti","gcp","google-cloud-platform","googlecloudplatform","policyascode","terraform"]},s=void 0,p={permalink:"/forseti-terraform-validator-enforcing-resource-policy-compliance-in-your-ci-pipeline",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2020-04-18-forseti-terraform-validator-enforcing-resource-policy-compliance-in-your-ci-pipeline/index.md",source:"@site/blog/2020-04-18-forseti-terraform-validator-enforcing-resource-policy-compliance-in-your-ci-pipeline/index.md",title:"Forseti Terraform Validator: Enforcing resource policy compliance in your CI pipeline",description:"Terraform is a powerful tool for managing your Infrastructure as Code. Declare your resources once, define their variables per environment and sleep easy knowing your CI pipeline will take care of the rest.",date:"2020-04-18T00:00:00.000Z",formattedDate:"April 18, 2020",tags:[{label:"devops",permalink:"/tags/devops"},{label:"forseti",permalink:"/tags/forseti"},{label:"gcp",permalink:"/tags/gcp"},{label:"google-cloud-platform",permalink:"/tags/google-cloud-platform"},{label:"googlecloudplatform",permalink:"/tags/googlecloudplatform"},{label:"policyascode",permalink:"/tags/policyascode"},{label:"terraform",permalink:"/tags/terraform"}],readingTime:8.5,truncated:!1,authors:[{name:"Daniel Hussey",title:"Cloud Security Engineer",url:"https://www.linkedin.com/in/daniel-hussey/",imageURL:"http://2.gravatar.com/avatar/b0daeaf079c3665ee65a250adba487ee?s=80",key:"danielhussey"}],frontMatter:{slug:"forseti-terraform-validator-enforcing-resource-policy-compliance-in-your-ci-pipeline",title:"Forseti Terraform Validator: Enforcing resource policy compliance in your CI pipeline",authors:["danielhussey"],draft:!1,hide_table_of_contents:!0,image:"images/Forseti-Terraform-e1587291818418.png",tags:["devops","forseti","gcp","google-cloud-platform","googlecloudplatform","policyascode","terraform"],keywords:["devops","forseti","gcp","google-cloud-platform","googlecloudplatform","policyascode","terraform"]},prevItem:{title:"JSON Wrangling with Go",permalink:"/json-wrangling-with-go"},nextItem:{title:"Creating a Site to Site VPN Connection Between GCP and Azure with Google Private Access",permalink:"/creating-a-site-to-site-vpn-connection-between-gcp-and-azure-with-google-private-access"}},c={authorsImageUrls:[void 0]},u=[{value:"Enter Terraform Validator by Forseti",id:"enter-terraform-validator-by-forseti",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Policy Library",id:"policy-library",level:2},{value:"Concepts",id:"concepts",level:3},{value:"Set up your Policies",id:"set-up-your-policies",level:3},{value:"Create your Policy Library repository",id:"create-your-policy-library-repository",level:4},{value:"Customise sample constraints to fit your needs",id:"customise-sample-constraints-to-fit-your-needs",level:4},{value:"Policy review",id:"policy-review",level:4},{value:"Terraform Validator",id:"terraform-validator",level:2},{value:"Setup Terraform Validator",id:"setup-terraform-validator",level:3},{value:"Review your Terraform code",id:"review-your-terraform-code",level:3},{value:"Make the Terraform plan",id:"make-the-terraform-plan",level:3},{value:"Validate the non-compliant Terraform plan against your Constraints, for example",id:"validate-the-non-compliant-terraform-plan-against-your-constraints-for-example",level:3},{value:"Validate the compliant Terraform plan against your Constraints",id:"validate-the-compliant-terraform-plan-against-your-constraints",level:3},{value:"Wrap Up",id:"wrap-up",level:2}],d={toc:u};function m(e){var t=e.components,o=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Terraform is a powerful tool for managing your Infrastructure as Code. Declare your resources once, define their variables per environment and sleep easy knowing your CI pipeline will take care of the rest."),(0,n.kt)("p",null,"But\u2026 one night you wake up in a sweat. The details are fuzzy but you were browsing your favourite cloud provider\u2019s console - probably GCP ;) - and thought you saw a bucket had been created outside of your allowed locations! Maybe it even had risky access controls."),(0,n.kt)("p",null,"You go brush it off and try to fall back to sleep, but you can\u2019t quite push the thought from your mind that somewhere in all that Terraform code, someone ",(0,n.kt)("em",{parentName:"p"},"could")," be declaring resources in unapproved locations, and your CICD pipeline would do nothing to stop it. Oh the regulatory implications."),(0,n.kt)("h2",{id:"enter-terraform-validator-by-forseti"},"Enter Terraform Validator by Forseti"),(0,n.kt)("p",null,"Terraform Validator by Forseti allows you to declare your Policy as Code, check compliance of your Terraform plans against said Policy, and automatically fail violating plans in a CI step. All without setting up servers or agents."),(0,n.kt)("p",null,"You\u2019re going to learn how to enforce policy on GCP resources like BigQuery, IAM, networks, MySQL, Google Kubernetes Engine (GKE) and more. If you\u2019re particularly crafty, you may be able to go beyond GCP."),(0,n.kt)("p",null,"Forseti\u2019s suite of solutions are GCP focused and allow a wide range of live config validation, monitoring and more using the Policy Library we\u2019re going to set up. These additional capabilities require additional infrastructure. But we\u2019re going one step at a time, starting with enforcing policy during deployment."),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Let\u2019s assume you already have an established CICD pipeline that uses Terraform, or that you are content to validate your Terraform plans locally for now. In that case, we need just two things:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A Policy Library"),(0,n.kt)("li",{parentName:"ol"},"Terraform Validator")),(0,n.kt)("p",null,"It\u2019s that simple! No new servers, agents, firewall rules, extra service accounts or other nonsense. Just add Policy Library, the Validator tool and you can enforce policy on your Terraform deployments."),(0,n.kt)("p",null,"We\u2019re going to tinker with some existing GCP-focused sample policies (aka Constraints) that Forseti makes available. These samples cover a wide range of resources and use cases, so it is easy to adjust what\u2019s provided to define your own Constraints."),(0,n.kt)("h2",{id:"policy-library"},"Policy Library"),(0,n.kt)("p",null,"First let's open up some of Forseti's pre-defined constraints. We\u2019ll copy them into our own Git repository and adjust to create policies that match our needs. Repeatable and configurable - that\u2019s Policy as Code at work."),(0,n.kt)("h3",{id:"concepts"},"Concepts"),(0,n.kt)("p",null,"In the world of Forseti and in particular Terraform Validator, Policies are defined and understood via easy to read YAML files known as Constraints"),(0,n.kt)("p",null,"There is just enough information in a Constraint file for to make clear its purpose and effect, and by tinkering lightly with a pre-written Constraint you can achieve a lot without looking too deeply into the inner workings . But there\u2019s more happening than meets the eye."),(0,n.kt)("p",null,"Constraints are built on Templates - which are like forms with some extra bits waiting to be completed to make a Constraint. Except there\u2019s a lot more hidden away that\u2019s pretty cool if you want to understand it."),(0,n.kt)("p",null,"Think of a Template as a \u2018Class\u2019 in the OOP sense, and of a Constraint as an instantiated Template with all the key attributes defined."),(0,n.kt)("p",null,"E.g. A generic Template for policy on bucket locations and a Constraint to specify which locations are relevant in a given instance. Again, buckets and locations are just the basic example - the potential applications are far greater."),(0,n.kt)("p",null,"Now the real magic is that just like a \u2018Class\u2019, a Template contains logic that makes everything abstracted away in the Constraint possible. Templates contain inline Rego (ray-go), borrowed lovingly by Forseti from the Open Policy Agent (OPA) team."),(0,n.kt)("p",null,"Learn more about Rego and OPA ",(0,n.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/policy-language/"},"here")," to understand the relationship to our Terraform Validator."),(0,n.kt)("p",null,"But let\u2019s begin."),(0,n.kt)("h3",{id:"set-up-your-policies"},"Set up your Policies"),(0,n.kt)("h4",{id:"create-your-policy-library-repository"},"Create your Policy Library repository"),(0,n.kt)("p",null,"Create your Policy Library repository by cloning ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/forseti-security/policy-library"},"https://github.com/forseti-security/policy-library")," into your own VCS."),(0,n.kt)("p",null,"This repo contains templates and sample constraints which will form the basis of your policies. So get it into your Git environment and clone it to local for the next step."),(0,n.kt)("h4",{id:"customise-sample-constraints-to-fit-your-needs"},"Customise sample constraints to fit your needs"),(0,n.kt)("p",null,"As discussed in Concepts, Constraints are defined Templates, which make use of Rego policy language. Nice. So let\u2019s take a sample Constraint, put it in our Policy Library and set the values to what we need. It\u2019s that easy - no need to write new templates or learn Rego if your use case is covered."),(0,n.kt)("p",null,"In a new branch\u2026"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Copy the sample Constraint ",(0,n.kt)("inlineCode",{parentName:"li"},"storage_location.yaml")," to your Constraints folder.  ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ cp policy-library/samples/storage_location.yaml policy-library/policies/constraints/storage_location.yaml\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Replace the sample location (",(0,n.kt)("inlineCode",{parentName:"li"},"asia-southeast1"),") in ",(0,n.kt)("inlineCode",{parentName:"li"},"storage_location.yaml")," with ",(0,n.kt)("inlineCode",{parentName:"li"},"australia-southeast1"),".  ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'  spec:  \n    severity: high  \n    match:  \n      target: ["organization/*"]  \n    parameters:  \n      mode: "allowlist"  \n      locations:  \n      - australia-southeast1  \n      exemptions: []\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Push back to your repo - not Forseti\u2019s!  ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ git push https://github.com/<your-repository>/policy-library.git\n")),(0,n.kt)("h4",{id:"policy-review"},"Policy review"),(0,n.kt)("p",null,"There you go - you\u2019ve customised a sample Constraint. Now you have your own instance of version controlled Policy-as-Code and are ready to apply the power of OPA\u2019s Rego policy language that lies within the parent Template. Impressively easy right?"),(0,n.kt)("p",null,"That\u2019s a pretty simple example. You can browse the rest of Forseti\u2019s Policy Library to view other sample Constraints, Templates and the Rego logic that makes all of this work. These can be adjusted to cover all kinds of use cases across GCP resources."),(0,n.kt)("p",null,"I suggest working with and editing the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/forseti-security/policy-library/tree/master/samples"},"sample Constraints")," before making any changes to Templates."),(0,n.kt)("p",null,"If you were to write Rego and Templates from scratch, you might even be able to enforce Policy as Code against non-GCP Terraform code."),(0,n.kt)("h2",{id:"terraform-validator"},"Terraform Validator"),(0,n.kt)("p",null,"Now, let\u2019s set up the Terraform Validator tool and have it compare a sample piece of Terraform code against the Constraint we configured above. Keep in mind you\u2019ll want to translate what\u2019s done here into steps in your CICD pipeline."),(0,n.kt)("p",null,"Once the tool is in place, we really just run ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform plan")," and feed the output into Terraform Validator. The Validator compares it to our Constraints, runs all the abstracted logic we don\u2019t need to worry about and returns 0 or 2 when done for pass / fail respectively. Easy."),(0,n.kt)("p",null,"So using Terraform if I try to make a bucket in ",(0,n.kt)("inlineCode",{parentName:"p"},"australia-southeast1")," it should pass, if I try to make one in the US it should fail. Let\u2019s set up the tool, write some basic Terraform and see how we go."),(0,n.kt)("h3",{id:"setup-terraform-validator"},"Setup Terraform Validator"),(0,n.kt)("p",null,"Check for the latest version of ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform-validator")," from the official terraform-validator GCS bucket."),(0,n.kt)("p",null,"Very important when using tf version 0.12 or greater. This is the easy way - you can pull from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/terraform-validator"},"Terraform Validator Github")," and make it yourself too."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ gsutil ls -r gs://terraform-validator/releases\n")),(0,n.kt)("p",null,"Copy the latest version to the working dir"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ gsutil cp gs://terraform-validator/releases/2020-03-05/terraform-validator-linux-amd64 .\n")),(0,n.kt)("p",null,"Make it executable"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ chmod 755 terraform-validator-linux-amd64\n")),(0,n.kt)("p",null,"Ready to go!"),(0,n.kt)("h3",{id:"review-your-terraform-code"},"Review your Terraform code"),(0,n.kt)("p",null,"We\u2019re going to make a ridiculously simple piece of Terraform that tries to create one bucket in our project to keep things simple."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'# main.tf\n\nresource "google_storage_bucket" "tf-validator-demo-bucket" {\xa0\xa0\n  name\xa0 \xa0 \xa0 \xa0 \xa0 = "tf-validator-demo-bucket"\n\xa0\xa0location\xa0 \xa0 \xa0 = "US"\n\xa0\xa0force_destroy = true\n\n\xa0\xa0lifecycle_rule {\n\xa0\xa0\xa0\xa0condition {\n\xa0\xa0\xa0\xa0\xa0\xa0age = "3"\n\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0\xa0action {\n\xa0\xa0\xa0\xa0\xa0\xa0type = "Delete"\n\xa0\xa0\xa0\xa0}\n\xa0\xa0}\n}\n')),(0,n.kt)("p",null,"This is a pretty standard bit of Terraform for a GCS bucket, but made very simple with all the values defined directly in ",(0,n.kt)("inlineCode",{parentName:"p"},"main.tf"),". Note the location of the bucket - it violates our Constraint that was set to the ",(0,n.kt)("inlineCode",{parentName:"p"},"australia-southeast1")," region."),(0,n.kt)("h3",{id:"make-the-terraform-plan"},"Make the Terraform plan"),(0,n.kt)("p",null,"Warm up Terraform.",(0,n.kt)("br",{parentName:"p"}),"\n","Double check your Terraform code if there are any hiccups."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ terraform init\n")),(0,n.kt)("p",null,"Make the Terraform plan and store output to file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ terraform plan --out=terraform.tfplan\n")),(0,n.kt)("p",null,"Convert the plan to JSON"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ terraform show -json ./terraform.tfplan > ./terraform.tfplan.json\n")),(0,n.kt)("h3",{id:"validate-the-non-compliant-terraform-plan-against-your-constraints-for-example"},"Validate the non-compliant Terraform plan against your Constraints, for example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./terraform-validator-linux-amd64 validate ./tfplan.tfplan.json --policy-path=../repos/policy-library/\n")),(0,n.kt)("p",null,"TA-DA!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Found Violations:\n\nConstraint allow_some_storage_location on resource //storage.googleapis.com/tf-validator-demo-bucket: //storage.googleapis.com/tf-validator-demo-bucket is in a disallowed location.\n")),(0,n.kt)("h3",{id:"validate-the-compliant-terraform-plan-against-your-constraints"},"Validate the compliant Terraform plan against your Constraints"),(0,n.kt)("p",null,"Let\u2019s see what happens if we repeat the above, changing the location of our GCS bucket to ",(0,n.kt)("inlineCode",{parentName:"p"},"australia-southeast1"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./terraform-validator-linux-amd64 validate ./tfplan.tfplan.json --policy-path=../repos/policy-library/\n")),(0,n.kt)("p",null,"Results in.."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"No violations found.\n")),(0,n.kt)("p",null,"Success!!!"),(0,n.kt)("p",null,"Now all that\u2019s left to do for your Policy as Code CICD pipeline is to configure the rest of your Constraints and run this check before you go ahead and ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply"),". Be sure to make the ",(0,n.kt)("inlineCode",{parentName:"p"},"apply")," step dependent on the outcome of the Validator."),(0,n.kt)("h2",{id:"wrap-up"},"Wrap Up"),(0,n.kt)("p",null,"We\u2019ve looked at how to apply Policy as Code to validate our Infrastructure as Code. Sounds pretty modern and DevOpsy doesn\u2019t it."),(0,n.kt)("p",null,"To recap, we learned about Constraints, which are fully defined instances of Policy as Code. They\u2019re based on YAML Templates that refer to the OPA policy language Rego, but we didn\u2019t have to learn it :)"),(0,n.kt)("p",null,"We created our own version controlled Policy Library."),(0,n.kt)("p",null,"Using the above learning and some handy pre-existing samples, we wrote policies (Constraints) for GCP infrastructure, specifying a whitelist for locations in which GCS buckets could be deployed."),(0,n.kt)("p",null,"As mentioned there are ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/forseti-security/policy-library/tree/master/samples"},"dozens upon dozens of samples")," across BigQuery, IAM, networks, MySQL, Google Kubernetes Engine (GKE) and more to work with."),(0,n.kt)("p",null,"Of course, we stored these configured Constraints in our version-controlled Policy Library."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We looked at a simple set of Terraform code to define a GCS bucket, and stored the Terraform plan to a file before applying it."),(0,n.kt)("li",{parentName:"ul"},"We ran Forseti\u2019s Terraform Validator against the Terraform plan file, and had the Validator compare the plan to our Policy Library."),(0,n.kt)("li",{parentName:"ul"},"We saw that the results matched our expectations! Compliance with the location specified in our Constraint passed the Validator\u2019s checks, and non-compliance triggered a violation.")),(0,n.kt)("p",null,"Awesome. And the best part is that all this required no special permissions, no infrastructure for servers or agents and no networking."),(0,n.kt)("p",null,"All of that comes with the full Forseti suite of Inventory taking Config Validation of already deployed resources. We might get to that next time."),(0,n.kt)("p",null,"References:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/terraform-validator"},"https://github.com/GoogleCloudPlatform/terraform-validator")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/forseti-security/policy-library"},"https://github.com/forseti-security/policy-library")," ",(0,n.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/policy-language/"},"https://www.openpolicyagent.org/docs/latest/policy-language/")," ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/identity-security/using-forseti-config-validator-with-terraform-validator"},"https://cloud.google.com/blog/products/identity-security/using-forseti-config-validator-with-terraform-validator")," ",(0,n.kt)("a",{parentName:"p",href:"https://forsetisecurity.org/docs/latest/concepts/"},"https://forsetisecurity.org/docs/latest/concepts/")))}m.isMDXComponent=!0}}]);