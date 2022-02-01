(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{353:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),r=(n(0),n(376)),c=["components"],l={title:"1.20.0rc1",sidebar_label:"1.20.0rc1"},s={unversionedId:"release-notes/1.20.0rc1",id:"release-notes/1.20.0rc1",isDocsHomePage:!1,title:"1.20.0rc1",description:"Release Candidate",source:"@site/../docs/release-notes/1.20.0rc1.md",sourceDirName:"release-notes",slug:"/release-notes/1.20.0rc1",permalink:"/documentation/release-notes/1.20.0rc1",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.20.0rc1.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1643726337,formattedLastUpdatedAt:"2/1/2022",sidebar_label:"1.20.0rc1",frontMatter:{title:"1.20.0rc1",sidebar_label:"1.20.0rc1"}},o=[{value:"Release Candidate",id:"release-candidate",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Features",id:"features-1",children:[]},{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]}],b={toc:o};function u(e){var t=e.components,n=Object(i.a)(e,c);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"release-candidate"},"Release Candidate"),Object(r.b)("p",null,"This is a release candidate! Only to be used in testing environments!"),Object(r.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(r.b)("p",null,"This feature release requires a database schema upgrade. Please consult the ",Object(r.b)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about upgrading your database schema."),Object(r.b)("p",null,"The following changes are necessary and are covered by the ",Object(r.b)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Changing size of ",Object(r.b)("inlineCode",{parentName:"p"},"extended_attributes")," column in ",Object(r.b)("inlineCode",{parentName:"p"},"rse_protocols")," table (Alembic revision ",Object(r.b)("inlineCode",{parentName:"p"},"8523998e2e76"),")")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Adding ",Object(r.b)("inlineCode",{parentName:"p"},"comments")," column to ",Object(r.b)("inlineCode",{parentName:"p"},"subscriptions_history")," table (Alembic revision ",Object(r.b)("inlineCode",{parentName:"p"},"b8caac94d7f0"),")")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Removal of replica state ",Object(r.b)("inlineCode",{parentName:"p"},"SOURCE (S)")," since it is not used (Alembic revision ",Object(r.b)("inlineCode",{parentName:"p"},"b7d287de34fd"),")"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Adapting ",Object(r.b)("inlineCode",{parentName:"li"},"REPLICAS_STATE_CHK")," constraint in ",Object(r.b)("inlineCode",{parentName:"li"},"replicas")," table"),Object(r.b)("li",{parentName:"ul"},"Adapting ",Object(r.b)("inlineCode",{parentName:"li"},"COLLECTION_REPLICAS_STATE_CHK")," constraint in ",Object(r.b)("inlineCode",{parentName:"li"},"collection_replicas")," table"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Adding new column to ",Object(r.b)("inlineCode",{parentName:"p"},"heartbeats")," table (Alembic revision ",Object(r.b)("inlineCode",{parentName:"p"},"cebad904c4dd"),")"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Adding ",Object(r.b)("inlineCode",{parentName:"li"},"payload")," column"),Object(r.b)("li",{parentName:"ul"},"Dropping ",Object(r.b)("inlineCode",{parentName:"li"},"HEARTBEATS_UPDATED_AT")," index"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Adding ",Object(r.b)("inlineCode",{parentName:"p"},"volume")," column to ",Object(r.b)("inlineCode",{parentName:"p"},"rse_transfer_limits")," table (Alembic revision ",Object(r.b)("inlineCode",{parentName:"p"},"2cbee484dcf9"),")"))),Object(r.b)("p",null,"The following change is only executed on PostgreSQL databases:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Changing all ENUM column types to varchar and adding the respective constraint checks (Alembic revision ",Object(r.b)("inlineCode",{parentName:"li"},"f1b14a8c2ac1"),")")),Object(r.b)("h2",{id:"general"},"General"),Object(r.b)("h3",{id:"features"},"Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Core & Internals: Size of the "extended_attributes" field of the "rse_protocols" table ',Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1543"},"#1543")),Object(r.b)("li",{parentName:"ul"},"Core & Internals: Bring S3 and Swift signature support in line with rest of code ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1787"},"#1787")),Object(r.b)("li",{parentName:"ul"},"Core & Internals: Changing sql-alchemy enginge to create PostgreSQL check_constraints instead of ENUMS ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2436"},"#2436")),Object(r.b)("li",{parentName:"ul"},"Core & Internals: Include payload functionality in heartbeats ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2443"},"#2443")),Object(r.b)("li",{parentName:"ul"},"Deletion: Use signed URLs when deleting from object stores ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2411"},"#2411")),Object(r.b)("li",{parentName:"ul"},"Recovery: Automatic recovery of suspicious files that have more than one replica ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/403"},"#403")),Object(r.b)("li",{parentName:"ul"},"Release management: Alembic script for comments column in subscription_history table needed ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2238"},"#2238")),Object(r.b)("li",{parentName:"ul"},"Release management: Security vulnerability with Jinja2 CVE-2019-10906 ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2493"},"#2493")),Object(r.b)("li",{parentName:"ul"},"Release management: Security vulnerability with SQLAlchemy CVE-2019-7164 ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2494"},"#2494")),Object(r.b)("li",{parentName:"ul"},"Transfers: Throttler mechanic to release transfers based on a strategy (FIFO) ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2220"},"#2220"))),Object(r.b)("h3",{id:"enhancements"},"Enhancements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Core & Internals: ReplicaState.SOURCE is not used and should be removed ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1874"},"#1874")),Object(r.b)("li",{parentName:"ul"},"Core & Internals: Upgrade of CHECK_CONSTRAINT of replicas table missing in alembic revision b96a1c7e1cc4 ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2166"},"#2166")),Object(r.b)("li",{parentName:"ul"},"Dataset deletion: Pause dids in the undertaker which raise nowait errors ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2355"},"#2355")),Object(r.b)("li",{parentName:"ul"},"Probes & Alarms: Migrate Nagios probes to a separate repository ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1638"},"#1638")),Object(r.b)("li",{parentName:"ul"},"Recovery: Optimize the update of the final states in the necromancer ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2601"},"#2601")),Object(r.b)("li",{parentName:"ul"},"Release management: Adress security in pycrpyto ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1475"},"#1475")),Object(r.b)("li",{parentName:"ul"},"Release management: Dependency upgrade for 1.20.0 ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2460"},"#2460")),Object(r.b)("li",{parentName:"ul"},"Release management: Security vulnerability with urllib3 CVE-2019-11324 ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2501"},"#2501"))),Object(r.b)("h3",{id:"bugs"},"Bugs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Infrastructure: wrong configuration docker dev ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2576"},"#2576")),Object(r.b)("li",{parentName:"ul"},"Infrastructure: double requirement definition ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2579"},"#2579")),Object(r.b)("li",{parentName:"ul"},"Rebalancing: File size not returned in decomission mode ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2591"},"#2591")),Object(r.b)("li",{parentName:"ul"},"Testing: Test error with python3.6.3 ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2154"},"#2154")),Object(r.b)("li",{parentName:"ul"},"Testing: Fix Python 3.6 syntax test ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2496"},"#2496")),Object(r.b)("li",{parentName:"ul"},"Testing: wrong python version in python3 travis test ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2541"},"#2541"))),Object(r.b)("h2",{id:"clients"},"Clients"),Object(r.b)("h3",{id:"features-1"},"Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Clients: Implement pcaches into clients. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2039"},"#2039"))),Object(r.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Clients: Client: expose replicalocks to client ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2112"},"#2112"))),Object(r.b)("h3",{id:"bugs-1"},"Bugs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Clients: Compiling issues with Python 3 (3.6.8) and hash sum calculation ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2480"},"#2480"))))}u.isMDXComponent=!0},376:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),b=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?i.a.createElement(d,l(l({ref:t},o),{},{components:n})):i.a.createElement(d,l({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<r;o++)c[o]=n[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);