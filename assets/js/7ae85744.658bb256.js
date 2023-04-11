"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"transfers-overview",title:"Transfers Overview"},l=void 0,p={unversionedId:"transfers-overview",id:"transfers-overview",title:"Transfers Overview",description:"Rucio has a set of daemons in charge of transfers between rucio storage elements",source:"@site/../docs/transfers_overview.md",sourceDirName:".",slug:"/transfers-overview",permalink:"/documentation/transfers-overview",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/transfers_overview.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1680536801,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{id:"transfers-overview",title:"Transfers Overview"},sidebar:"docs",previous:{title:"Configuration parameters",permalink:"/documentation/configuration_parameters"},next:{title:"Transfers Preparer",permalink:"/documentation/transfers-preparer"}},c={},u=[{value:"Daemon overview",id:"daemon-overview",level:2}],m={toc:u},d="wrapper";function f(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)(d,(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rucio has a set of daemons in charge of transfers between rucio storage elements\n(RSE). Historically, these daemons were grouped under the name of ",(0,o.kt)("inlineCode",{parentName:"p"},"conveyor"),",\nso a big part of the documentation and source code still uses this naming\nwhen referring to the transfer machinery."),(0,o.kt)("p",null,"Rucio doesn't execute the actual physical data movement between storage\nelements. It relies on external tools for this scope. Currently, rucio supports\n",(0,o.kt)("a",{parentName:"p",href:"https://fts3-docs.web.cern.ch/fts3-docs/docs/overview.html"},"fts3")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://www.globus.org/data-transfer"},"globus"),'. Rucio builds on top of these\n"TransferTools" and provides additional services like recovery from a transfer\nfailure by using another copy from another storage element, multi-hopping\nusing multiple transfertools (or multiple instances of the same transfertool\ntype) and others.'),(0,o.kt)("h2",{id:"daemon-overview"},"Daemon overview"),(0,o.kt)("p",null,"The following transfer-related daemons exist in rucio, presented in the order\nthey intervene in a transfer lifecycle:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"preparer"),": a strongly recommended optional daemon which is required for\nmany advanced usages, like multiple transfertools together.\nIt is also required to be able to use throttler. If active, performs part\nof the source selection and path computation work instead of the submitter.\nFor all new rucio installation, it is recommended to run this daemon and\nactivate it by setting the ",(0,o.kt)("inlineCode",{parentName:"li"},"conveyor/use_preparer = True")," configuration\noption."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"throttler"),": an optional daemon which can throttle request submissions\nto/from an RSE"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"submitter"),", ",(0,o.kt)("strong",{parentName:"li"},"stager"),": perform source selection, path computation and the\nactual submission of transfers to the external transfertool. Stager is a\nspecialized submitter for issuing stagein operations to tape archives."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"receiver"),": optional daemons which listens for events published into a\nqueueing system (activemq) by the external transfertool and reacts to those\nevents to mark transfers as successful or failed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"poller"),": regularly polls the external transfertool for the status of\npending transfers and marks them as successful/failed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"finisher"),": acts on successful or failed transfers. For example, by\nre-scheduling a new attempt.")),(0,o.kt)("p",null,"The minimal list of daemons needed for transfer execution is:\n",(0,o.kt)("inlineCode",{parentName:"p"},"submitter"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"poller")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"finisher"),"."),(0,o.kt)("h1",{id:"lifecycle-of-transfer-requests"},"Lifecycle of transfer requests"),(0,o.kt)("p",null,"There is no user-facing way to schedule a transfer. All transfer requests are\ncreated internally by rucio as result of rule evaluations. The lifetime of a\nrucio transfer is thus strongly bound to the rule which created it.\nHereafter is a simple example which gives the intuition of how rucio proceeds\nwith a replication/transfer of a file as part of a rule."),(0,o.kt)("p",null,"In the rest of this example we'll assume the following 4 rucio storage\nelements:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510   5    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502      \u2502\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502      \u2502\n\u2502 RSE1 \u2502        \u2502 RSE2 \u2502\n\u2502      \u2502    \u250c\u2500\u2500\u25ba\u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n   \u25b2        \u2502\n   \u2502100     \u25023\n   \u25bc        \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502      \u2502\u25c4\u2500\u2500\u2500\u2518   \u2502      \u2502\n\u2502 RSE3 \u2502        \u2502 RSE4 \u2502\n\u2502      \u2502\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518   2    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"The numbers on the arrows represent the administrative cost which is set\nby the rucio administrator. Cost is unidirectional, but, in this example,\nwe assume that the cost was configured identical in both directions.\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rucio-admin rse add-distance --distance 5 --ranking 5 RSE1 RSE2\nrucio-admin rse add-distance --distance 5 --ranking 5 RSE2 RSE1\n")),(0,o.kt)("p",null,"Assume a certain dataset ",(0,o.kt)("inlineCode",{parentName:"p"},"someScope:dsName"),", which has two files\n",(0,o.kt)("inlineCode",{parentName:"p"},"someScope:file1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"someScope:file2"),", and both files are located on ",(0,o.kt)("inlineCode",{parentName:"p"},"RSE1"),"."),(0,o.kt)("p",null,"The destination of the transfer will be decided on the rule evaluation phase,\nFor example the user adds a rule to ensure that rucio maintains two copies\nfor each of the files on any of the RSEs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rucio add-rule someScope:dsName 2 '*'\n")),(0,o.kt)("p",null,"The rule evaluation mechanism detects that a copy is already available\non RSE1, but one additional copy is needed to respect the rule requirements of\n2 copies. It will thus create a transfer request to one of the other 3 rses.\nAs of time of writing, the selection of the destination is random as\nlong as it respects the RSE expression. Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," matches any RSE.\nFor the seek of the example, lets assume that RSE4 was selected."),(0,o.kt)("p",null,"The rule evaluation mechanism will then create two transfer requests, which\nwill be picked by the transfer machinery. Depending on the configuration value\n",(0,o.kt)("inlineCode",{parentName:"p"},"conveyor/use_preparer"),", the transfer will be either handled by the ",(0,o.kt)("inlineCode",{parentName:"p"},"preparer"),"\nor by the ",(0,o.kt)("inlineCode",{parentName:"p"},"submitter")," directly. "),(0,o.kt)("p",null,"At this stage, the transfer machinery finds all the possible sources. It\nfilters out the ones which don't match different rule criterias (for example:\nsource RSE expression) and administrative constraints (for example:\nskip blocklisted RSEs). It then computes the paths. In the previous example,\nthe path ",(0,o.kt)("inlineCode",{parentName:"p"},"RSE1 -> RSE2 -> RSE3 -> RSE4")," will be picked due to cost constraints.\nNote that it's possible to make rucio prefer shorter parts by setting the RSE\nattribute ",(0,o.kt)("inlineCode",{parentName:"p"},"hop_penalty"),", or the global configuration value with the same name."),(0,o.kt)("p",null,"The path will be then submitted to the transfertool either in its integrity,\nif transfertool supports multi-hopping, or in multiple iterations."),(0,o.kt)("p",null,"The final steps are for the ",(0,o.kt)("inlineCode",{parentName:"p"},"reciver")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"poller")," to monitor the transfer's\ncompletion in transfertool and ",(0,o.kt)("inlineCode",{parentName:"p"},"finisher")," to mark the transfers as completed.\nWe only described here a simple case, when the transfer is successful on the\nfirst try. In case of errors, multiple transitions are possible between\ndifferent daemons. Check the following request state transition diagram\nfor a more detailed view:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Request State Transition Chart",src:n(35547).Z,width:"3164",height:"7090"})))}f.isMDXComponent=!0},35547:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/request_state_transition_chart-adf4afba4ad2e53208df41f90a719725.svg"}}]);