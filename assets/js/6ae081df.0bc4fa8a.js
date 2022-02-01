(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(376)),c=["components"],l={title:"1.25.0rc2",sidebar_label:"1.25.0rc2"},o={unversionedId:"release-notes/1.25.0rc2",id:"release-notes/1.25.0rc2",isDocsHomePage:!1,title:"1.25.0rc2",description:"Release Candidate",source:"@site/../docs/release-notes/1.25.0rc2.md",sourceDirName:"release-notes",slug:"/release-notes/1.25.0rc2",permalink:"/documentation/release-notes/1.25.0rc2",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.25.0rc2.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1643726337,formattedLastUpdatedAt:"2/1/2022",sidebar_label:"1.25.0rc2",frontMatter:{title:"1.25.0rc2",sidebar_label:"1.25.0rc2"}},s=[{value:"Release Candidate",id:"release-candidate",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"Important changes",id:"important-changes",children:[]},{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Bugs",id:"bugs-2",children:[]}]}],u={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"release-candidate"},"Release Candidate"),Object(i.b)("p",null,"This is a release candidate! Only to be used in testing environments!"),Object(i.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(i.b)("p",null,"This feature release requires a database schema upgrade. Please consult the ",Object(i.b)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about upgrading your database schema."),Object(i.b)("p",null,"The following changes are necessary and are covered by the ",Object(i.b)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Ading new column and indices to ",Object(i.b)("inlineCode",{parentName:"li"},"requests")," and ",Object(i.b)("inlineCode",{parentName:"li"},"requests_history")," tables. (Alembic revision ",Object(i.b)("inlineCode",{parentName:"li"},"f85a2962b021"),")")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"transfertool")," column to ",Object(i.b)("inlineCode",{parentName:"li"},"requests")," table"),Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"transfertool")," column to ",Object(i.b)("inlineCode",{parentName:"li"},"requests_history")," table"),Object(i.b)("li",{parentName:"ul"},"Adding new ",Object(i.b)("inlineCode",{parentName:"li"},"REQUESTS_TYP_STA_TRA_ACT_IDX")," index to ",Object(i.b)("inlineCode",{parentName:"li"},"requests")," table")),Object(i.b)("h2",{id:"important-changes"},"Important changes"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"This release removed the deprecated ",Object(i.b)("inlineCode",{parentName:"li"},"reaper1")," daemon, which now has been fully replaced by the ",Object(i.b)("inlineCode",{parentName:"li"},"reaper2"),"daemon.")),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Deletion: Deprecate reaper1 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4213"},"#4213")),Object(i.b)("li",{parentName:"ul"},"Release management: urllib3 dependency upgrade ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4163"},"#4163")),Object(i.b)("li",{parentName:"ul"},"Transfers: Stronger integration of Globus Online transfer tool ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4216"},"#4216"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"REST & API: Flask dynamic endpoint loading ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4043"},"#4043")),Object(i.b)("li",{parentName:"ul"},"Testing: Functional download/upload tests with xrootd containers ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2311"},"#2311"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Configuration: set doesn't work properly if '.' is provided as a value ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3283"},"#3283")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: imp / importlib incompatibility ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4361"},"#4361"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: replica client: expose signature_lifetime ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3972"},"#3972")),Object(i.b)("li",{parentName:"ul"},"Clients: new logger in client broke pilot compatibility ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4359"},"#4359"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"bugs-2"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: Account quota cannot be changed if it's not set at all ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4080"},"#4080"))))}b.isMDXComponent=!0},376:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,m=b["".concat(c,".").concat(p)]||b[p]||d[p]||i;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);