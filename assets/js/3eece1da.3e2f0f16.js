"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6770],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=i,f=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},43177:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={title:"1.29.1"},l=void 0,c={unversionedId:"release-notes/1.29.1",id:"release-notes/1.29.1",title:"1.29.1",description:"General",source:"@site/../docs/release-notes/1.29.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.29.1",permalink:"/documentation/release-notes/1.29.1",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.29.1.md",tags:[],version:"current",frontMatter:{title:"1.29.1"}},u={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}],m={toc:p},h="wrapper";function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)(h,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"general"},"General"),(0,o.kt)("h3",{id:"enhancements"},"Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Monitoring & Logging: allow to follow one thread in logs ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5730"},"#5730")),(0,o.kt)("li",{parentName:"ul"},"Recovery: Restructure minos code ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5615"},"#5615"))),(0,o.kt)("h3",{id:"bugs"},"Bugs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Core & Internals: exception in attach_collections_to_containers ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5713"},"#5713")),(0,o.kt)("li",{parentName:"ul"},"Core & Internals: config_get_list incorrectly handles empty strings ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5720"},"#5720")),(0,o.kt)("li",{parentName:"ul"},"Core & Internals: Exception while trying to update RSE availability ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5744"},"#5744")),(0,o.kt)("li",{parentName:"ul"},"Database: temp tables cannot be used with read-only user ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5716"},"#5716")),(0,o.kt)("li",{parentName:"ul"},"Deletion: Undertaker is crashing when jumbo datasets are deleted ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5734"},"#5734")),(0,o.kt)("li",{parentName:"ul"},"Monitoring & Logging: dark-reaper not exposing the prometheus metrics port ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5574"},"#5574")),(0,o.kt)("li",{parentName:"ul"},"Monitoring & Logging: fix prometheus timer recording ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5688"},"#5688")),(0,o.kt)("li",{parentName:"ul"},"Rules: generate_email_for_rule_ok_notification silent fails if exception is raised ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5681"},"#5681")),(0,o.kt)("li",{parentName:"ul"},"Transfers: race condition between poller and cleaner ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5429"},"#5429")),(0,o.kt)("li",{parentName:"ul"},"Transfers: finisher doesn't handle correctly destination RSE protocol change ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5497"},"#5497"))))}f.isMDXComponent=!0}}]);