"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=s(n),u=l,m=k["".concat(d,".").concat(u)]||k[u]||c[u]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[k]="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>k});var a=n(87462),l=n(63366),o=(n(67294),n(3905)),r=["components"],i={title:"DIDClient"},d=void 0,s={unversionedId:"client_api/didclient",id:"client_api/didclient",title:"DIDClient",description:"list\\_dids",source:"@site/../docs/client_api/didclient.md",sourceDirName:"client_api",slug:"/client_api/didclient",permalink:"/documentation/client_api/didclient",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/didclient.md",tags:[],version:"current",frontMatter:{title:"DIDClient"},sidebar:"docs",previous:{title:"CredentialClient",permalink:"/documentation/client_api/credentialclient"},next:{title:"DiracClient",permalink:"/documentation/client_api/diracclient"}},p={},k=[{value:"list_dids",id:"list_dids",level:2},{value:"list_dids_extended",id:"list_dids_extended",level:2},{value:"add_did",id:"add_did",level:2},{value:"add_dids",id:"add_dids",level:2},{value:"add_dataset",id:"add_dataset",level:2},{value:"add_datasets",id:"add_datasets",level:2},{value:"add_container",id:"add_container",level:2},{value:"add_containers",id:"add_containers",level:2},{value:"attach_dids",id:"attach_dids",level:2},{value:"detach_dids",id:"detach_dids",level:2},{value:"attach_dids_to_dids",id:"attach_dids_to_dids",level:2},{value:"add_files_to_datasets",id:"add_files_to_datasets",level:2},{value:"add_datasets_to_containers",id:"add_datasets_to_containers",level:2},{value:"add_containers_to_containers",id:"add_containers_to_containers",level:2},{value:"add_files_to_dataset",id:"add_files_to_dataset",level:2},{value:"add_files_to_archive",id:"add_files_to_archive",level:2},{value:"add_datasets_to_container",id:"add_datasets_to_container",level:2},{value:"add_containers_to_container",id:"add_containers_to_container",level:2},{value:"list_content",id:"list_content",level:2},{value:"list_content_history",id:"list_content_history",level:2},{value:"list_files",id:"list_files",level:2},{value:"get_did",id:"get_did",level:2},{value:"get_metadata",id:"get_metadata",level:2},{value:"get_metadata_bulk",id:"get_metadata_bulk",level:2},{value:"set_metadata",id:"set_metadata",level:2},{value:"set_metadata_bulk",id:"set_metadata_bulk",level:2},{value:"set_dids_metadata_bulk",id:"set_dids_metadata_bulk",level:2},{value:"set_status",id:"set_status",level:2},{value:"close",id:"close",level:2},{value:"delete_metadata",id:"delete_metadata",level:2},{value:"list_did_rules",id:"list_did_rules",level:2},{value:"list_associated_rules_for_file",id:"list_associated_rules_for_file",level:2},{value:"get_dataset_by_guid",id:"get_dataset_by_guid",level:2},{value:"scope_list",id:"scope_list",level:2},{value:"list_parent_dids",id:"list_parent_dids",level:2},{value:"create_did_sample",id:"create_did_sample",level:2},{value:"resurrect",id:"resurrect",level:2},{value:"add_temporary_dids",id:"add_temporary_dids",level:2},{value:"list_archive_content",id:"list_archive_content",level:2}],c={toc:k},u="wrapper";function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"list_dids"},"list","_","dids"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"List all data identifiers in a scope which match a given pattern."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"filters"),": A nested dictionary of key/value pairs like ","[{'key1': 'value1', 'key2.lte': 'value2'}, {'key3.gte, 'value3'}]",".\nKeypairs in the same dictionary are AND'ed together, dictionaries are OR'ed together. Keys should be suffixed\nlike \\<key",">",".\\<operation",">",", e.g. key1 ",">","= value1 is equivalent to {'key1.gte': value}, where \\<operation",">"," belongs to one\nof the set {'lte', 'gte', 'gt', 'lt', 'ne' or ''}. Equivalence doesn't require an operator."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"did_type"),": The type of the did: 'all'(container, dataset or file)|'collection'(dataset or container)|'dataset'|'container'|'file'"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"long"),": Long format option to display more information for each DID."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recursive"),": Recursively list DIDs content.")))))),(0,o.kt)("h2",{id:"list_dids_extended"},"list","_","dids","_","extended"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"List all data identifiers in a scope which match a given pattern."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"filters"),": A nested dictionary of key/value pairs like ","[{'key1': 'value1', 'key2.lte': 'value2'}, {'key3.gte, 'value3'}]",".\nKeypairs in the same dictionary are AND'ed together, dictionaries are OR'ed together. Keys should be suffixed\nlike \\<key",">",".\\<operation",">",", e.g. key1 ",">","= value1 is equivalent to {'key1.gte': value}, where \\<operation",">"," belongs to one\nof the set {'lte', 'gte', 'gt', 'lt', 'ne' or ''}. Equivalence doesn't require an operator."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"did_type"),": The type of the did: 'all'(container, dataset or file)|'collection'(dataset or container)|'dataset'|'container'|'file'"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"long"),": Long format option to display more information for each DID."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recursive"),": Recursively list DIDs content.")))))),(0,o.kt)("h2",{id:"add_did"},"add","_","did"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Add data identifier for a dataset or container."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The data identifier name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"statuses"),": Dictionary with statuses, e.g.g {'monotonic':True}."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"lifetime"),": DID's lifetime (in seconds)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dids"),": The content."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rse"),": The RSE name when registering replicas.")))))),(0,o.kt)("h2",{id:"add_dids"},"add","_","dids"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Bulk add datasets/containers."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null))),(0,o.kt)("h2",{id:"add_dataset"},"add","_","dataset"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Add data identifier for a dataset."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The data identifier name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"statuses"),": Dictionary with statuses, e.g.g {'monotonic':True}."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"lifetime"),": DID's lifetime (in seconds)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"files"),": The content."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rse"),": The RSE name when registering replicas.")))))),(0,o.kt)("h2",{id:"add_datasets"},"add","_","datasets"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Bulk add datasets."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dsns"),": A list of datasets.")))))),(0,o.kt)("h2",{id:"add_container"},"add","_","container"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Add data identifier for a container."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The data identifier name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"statuses"),": Dictionary with statuses, e.g.g {'monotonic':True}."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"meta"),": Meta-data associated with the data identifier is represented using key/value pairs in a dictionary."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rules"),": Replication rules associated with the data identifier. A list of dictionaries, e.g., ","[{'copies': 2, 'rse_expression': 'TIERS1'}, ]","."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"lifetime"),": DID's lifetime (in seconds).")))))),(0,o.kt)("h2",{id:"add_containers"},"add","_","containers"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Bulk add containers."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cnts"),": A list of containers.")))))),(0,o.kt)("h2",{id:"attach_dids"},"attach","_","dids"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Attach data identifier."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The data identifier name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dids"),": The content."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rse"),": The RSE name when registering replicas.")))))),(0,o.kt)("h2",{id:"detach_dids"},"detach","_","dids"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Detach data identifier"),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The data identifier name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dids"),": The content.")))))),(0,o.kt)("h2",{id:"attach_dids_to_dids"},"attach","_","dids","_","to","_","dids"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Add dids to dids."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"attachments"),": The attachments.\nattachments is: ","[attachment, attachment, ...]","\nattachment is: {'scope': scope, 'name': name, 'dids': dids}\ndids is: ","[{'scope': scope, 'name': name}, ...]","\n:param ignore_duplicate: If True, ignore duplicate entries.")))))),(0,o.kt)("h2",{id:"add_files_to_datasets"},"add","_","files","_","to","_","datasets"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Add files to datasets."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"attachments"),": The attachments.\nattachments is: ","[attachment, attachment, ...]","\nattachment is: {'scope': scope, 'name': name, 'dids': dids}\ndids is: ","[{'scope': scope, 'name': name}, ...]"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ignore_duplicate"),": If True, ignore duplicate entries.")))))),(0,o.kt)("h2",{id:"add_datasets_to_containers"},"add","_","datasets","_","to","_","containers"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Add datasets_to_containers."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"attachments"),": The attachments.\nattachments is: ","[attachment, attachment, ...]","\nattachment is: {'scope': scope, 'name': name, 'dids': dids}\ndids is: ","[{'scope': scope, 'name': name}, ...]")))))),(0,o.kt)("h2",{id:"add_containers_to_containers"},"add","_","containers","_","to","_","containers"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Add containers_to_containers."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"attachments"),": The attachments.\nattachments is: ","[attachment, attachment, ...]","\nattachment is: {'scope': scope, 'name': name, 'dids': dids}\ndids is: ","[{'scope': scope, 'name': name}, ...]")))))),(0,o.kt)("h2",{id:"add_files_to_dataset"},"add","_","files","_","to","_","dataset"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Add files to datasets."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The dataset name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"files"),": The content."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rse"),": The RSE name when registering replicas.")))))),(0,o.kt)("h2",{id:"add_files_to_archive"},"add","_","files","_","to","_","archive"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Add files to archive."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The dataset name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"files"),": The content.")))))),(0,o.kt)("h2",{id:"add_datasets_to_container"},"add","_","datasets","_","to","_","container"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Add datasets to container."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The dataset name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dsns"),": The content.")))))),(0,o.kt)("h2",{id:"add_containers_to_container"},"add","_","containers","_","to","_","container"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Add containers to container."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The dataset name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dsns"),": The content.")))))),(0,o.kt)("h2",{id:"list_content"},"list","_","content"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"List data identifier contents."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The data identifier name.")))))),(0,o.kt)("h2",{id:"list_content_history"},"list","_","content","_","history"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"List data identifier contents history."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The data identifier name.")))))),(0,o.kt)("h2",{id:"list_files"},"list","_","files"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"List data identifier file contents."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The data identifier name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"long"),": A boolean to choose if GUID is returned or not.")))))),(0,o.kt)("h2",{id:"get_did"},"get","_","did"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Retrieve a single data identifier."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The data identifier name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dynamic_depth"),": The DID type as string ('FILE'/'DATASET') at which to stop the dynamic\nlength/bytes calculation. If not set, the size will not be computed dynamically."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dynamic"),": (Deprecated) same as dynamic_depth = 'FILE'")))))),(0,o.kt)("h2",{id:"get_metadata"},"get","_","metadata"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Get data identifier metadata"),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The data identifier name.")))))),(0,o.kt)("h2",{id:"get_metadata_bulk"},"get","_","metadata","_","bulk"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Bulk get data identifier metadata"),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"inherit"),": A boolean. If set to true, the metadata of the parent are concatenated."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dids"),": A list of dids.")))))),(0,o.kt)("h2",{id:"set_metadata"},"set","_","metadata"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Set data identifier metadata"),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The data identifier name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"key"),": the key."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"value"),": the value."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recursive"),": Option to propagate the metadata change to content.")))))),(0,o.kt)("h2",{id:"set_metadata_bulk"},"set","_","metadata","_","bulk"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Set data identifier metadata in bulk."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The data identifier name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"meta")," (",(0,o.kt)("inlineCode",{parentName:"p"},"dict"),"): the metadata key-values."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recursive"),": Option to propagate the metadata change to content.")))))),(0,o.kt)("h2",{id:"set_dids_metadata_bulk"},"set","_","dids","_","metadata","_","bulk"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Set metadata to a list of data identifiers."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dids"),": A list of dids including metadata, i.e. [","['scope': scope1, 'name': name1, 'meta': {key1: value1, key2: value2}]"," ."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recursive"),": Option to propagate the metadata update to content.")))))),(0,o.kt)("h2",{id:"set_status"},"set","_","status"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Set data identifier status"),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The data identifier name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kwargs"),": Keyword arguments of the form status_name=value.")))))),(0,o.kt)("h2",{id:"close"},"close"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"close dataset/container"),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The dataset/container name.")))))),(0,o.kt)("h2",{id:"delete_metadata"},"delete","_","metadata"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Delete data identifier metadata"),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The data identifier."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"key"),": the key.")))))),(0,o.kt)("h2",{id:"list_did_rules"},"list","_","did","_","rules"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"List the associated rules of a data identifier."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The data identifier name.")))))),(0,o.kt)("h2",{id:"list_associated_rules_for_file"},"list","_","associated","_","rules","_","for","_","file"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"List the associated rules a file is affected from.."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The file name.")))))),(0,o.kt)("h2",{id:"get_dataset_by_guid"},"get","_","dataset","_","by","_","guid"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Get the parent datasets for a given GUID."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"guid"),": The GUID."))),(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,"  A did")))))),(0,o.kt)("h2",{id:"scope_list"},"scope","_","list"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"List data identifiers in a scope."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The data identifier name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recursive"),": boolean, True or False.")))))),(0,o.kt)("h2",{id:"list_parent_dids"},"list","_","parent","_","dids"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"List parent dataset/containers of a did."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The name.")))))),(0,o.kt)("h2",{id:"create_did_sample"},"create","_","did","_","sample"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Create a sample from an input collection."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"input_scope"),": The scope of the input DID."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"input_name"),": The name of the input DID."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"output_scope"),": The scope of the output dataset."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"output_name"),": The name of the output dataset."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"account"),": The account."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nbfiles"),": The number of files to register in the output dataset.")))))),(0,o.kt)("h2",{id:"resurrect"},"resurrect"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Resurrect a list of dids."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dids"),": A list of dids ","[{'scope': scope, 'name': name}, ...]")))))),(0,o.kt)("h2",{id:"add_temporary_dids"},"add","_","temporary","_","dids"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Bulk add temporary data identifiers."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dids"),": A list of dids.")))))),(0,o.kt)("h2",{id:"list_archive_content"},"list","_","archive","_","content"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"List archive contents."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"scope"),": The scope name."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The data identifier name.")))))))}m.isMDXComponent=!0}}]);