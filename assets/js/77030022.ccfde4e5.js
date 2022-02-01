(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{199:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(376)),o=["components"],c={title:"1.15.0 'Daredonkey'",sidebar_label:"1.15.0 'Daredonkey'"},s={unversionedId:"release-notes/1.15.0",id:"release-notes/1.15.0",isDocsHomePage:!1,title:"1.15.0 'Daredonkey'",description:"General",source:"@site/../docs/release-notes/1.15.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.15.0",permalink:"/documentation/release-notes/1.15.0",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.15.0.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1643726337,formattedLastUpdatedAt:"2/1/2022",sidebar_label:"1.15.0 'Daredonkey'",frontMatter:{title:"1.15.0 'Daredonkey'",sidebar_label:"1.15.0 'Daredonkey'"}},u=[{value:"General",id:"general",children:[{value:"Update Instructions",id:"update-instructions",children:[]},{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Features",id:"features-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"update-instructions"},"Update Instructions"),Object(i.b)("p",null,"This feature release requires a database schema update. Please consult the documentation about updating your database schema."),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: extend download/upload for cloud checksums ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/140"},"#140")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Pluggable LFN2PFN algorithms ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/570"},"#570"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Misleading warning in srm scheme  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/575"},"#575")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: better handling NoSectionError in db/sqla/session ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/641"},"#641")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: documentation: database versioning ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/749"},"#749")),Object(i.b)("li",{parentName:"ul"},"Documentation: Update concepts & terminology section of the documentation ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/566"},"#566")),Object(i.b)("li",{parentName:"ul"},"Documentation: Add auto-generated CLIs documentation for the daemons ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/718"},"#718")),Object(i.b)("li",{parentName:"ul"},"Documentation: documentation for Installing dev environment  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/725"},"#725")),Object(i.b)("li",{parentName:"ul"},"Documentation: Broken readthedocs compilation with No such file or directory  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/731"},"#731")),Object(i.b)("li",{parentName:"ul"},"Documentation: Format architecture section and add figure to the documentation ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/763"},"#763")),Object(i.b)("li",{parentName:"ul"},"Documentation: Fix broken rucio-admin CLI doc generation ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/769"},"#769")),Object(i.b)("li",{parentName:"ul"},"RSE Manager: Shuffle equal-weight protocols ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/697"},"#697")),Object(i.b)("li",{parentName:"ul"},"Release management: Possibility to make a pip install directly from git url ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/532"},"#532")),Object(i.b)("li",{parentName:"ul"},"Release management: core dependencies update ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/757"},"#757")),Object(i.b)("li",{parentName:"ul"},"Testing: provide docker compose file for demo containers ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/549"},"#549")),Object(i.b)("li",{parentName:"ul"},"Testing: pylint in travis wrongly test all files containing 'py' in the name ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/688"},"#688")),Object(i.b)("li",{parentName:"ul"},"Transfers: transfers: force S3 alternative authentication method ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/646"},"#646")),Object(i.b)("li",{parentName:"ul"},"Transfers: Improvements in finisher ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/678"},"#678")),Object(i.b)("li",{parentName:"ul"},"Transfers: Omit any mention of space tokens to FTS if not set ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/684"},"#684"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: custom rucio exceptions passing args and kwargs wrong to super ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/679"},"#679")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: DuplicateRule error creates index out of bound stacktrace ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/906"},"#906"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"features-1"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Import extra modules only if they are available ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/336"},"#336")),Object(i.b)("li",{parentName:"ul"},"Clients: Create download and upload capability in python clients ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/523"},"#523"))),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Declare all replicas of a file lost ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/42"},"#42"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication: webui cannot handle DNs with missing leading / ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/742"},"#742"))))}b.isMDXComponent=!0},376:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,h=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(h,c(c({ref:t},u),{},{components:r})):a.a.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);