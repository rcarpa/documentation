(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{343:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,d=u["".concat(r,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),o=(n(0),n(343)),r={id:"policy-packages",title:"Policy packages",sidebar_label:"Policy packages"},c={unversionedId:"policy-packages",id:"policy-packages",isDocsHomePage:!1,title:"Policy packages",description:"Overview",source:"@site/../docs/policy-packages.md",sourceDirName:".",slug:"/policy-packages",permalink:"/documentation/policy-packages",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1620045826,formattedLastUpdatedAt:"5/3/2021",sidebar_label:"Policy packages",frontMatter:{id:"policy-packages",title:"Policy packages",sidebar_label:"Policy packages"},sidebar:"docs",previous:{title:"Contributing Guide",permalink:"/documentation/contributing"},next:{title:"Notifications",permalink:"/documentation/notifications"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Creating a policy package",id:"creating-a-policy-package",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Policy packages are separate Python packages that can be used to add\nexperiment-specific customisations to Rucio. They typically customise\nRucio's handling of permissions and schema as well as optionally adding\ntheir own algorithms for lfn to pfn conversion and surl construction."),Object(o.b)("p",null,"Policy packages may be installed from a Python package repository such\nas ",Object(o.b)("a",{parentName:"p",href:"https://pypi.python.org/"},"PyPi")," or they may simply be installed in a\nlocal directory. In the latter case this directory will need to be added\nto the Rucio server's ",Object(o.b)("inlineCode",{parentName:"p"},"PYTHONPATH")," environment variable."),Object(o.b)("p",null,"The name of the policy package in use is specified by the\npackage value in the policy section of\nthe Rucio configuration file. If no package is specified, a built in\ngeneric policy will be used. If a package is specified but\ncannot be loaded, Rucio will exit with an error."),Object(o.b)("h2",{id:"creating-a-policy-package"},"Creating a policy package"),Object(o.b)("p",null,"The structure of a policy package is very simple. It contains the\nfollowing:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a ",Object(o.b)("inlineCode",{parentName:"li"},"permission.py")," module implementing permission\ncustomisations."),Object(o.b)("li",{parentName:"ul"},"a ",Object(o.b)("inlineCode",{parentName:"li"},"schema.py")," module implementing schema customisations."),Object(o.b)("li",{parentName:"ul"},"an optional ",Object(o.b)("inlineCode",{parentName:"li"},"init.py")," file that registers lfn to\npfn and surl construction algorithms when the package is loaded. It\nshould also contain a SUPPORTED_VERSION field.")),Object(o.b)("p",null,"The easiest way to create the permission.py and\n",Object(o.b)("inlineCode",{parentName:"p"},"schema.py")," modules is to modify the generic versions from\nthe Rucio codebase. These can be found in\n",Object(o.b)("inlineCode",{parentName:"p"},"lib/rucio/core/permission/generic.py")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"lib/rucio/common/schema/generic.py")," respectively."),Object(o.b)("p",null,"In the has_permission function you may wish to default to\nthe generic permission checks if your experiment does not need specific\nfunctionality for a particular action, or so that new actions added to\nRucio will work without your policy package having to be updated. This\nfallback can be implemented with code similar to the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"import rucio.core.permission.generic\nif action not in perm:\n    return rucio.core.permission.generic.has_permission(issuer, action, kwargs)\n")),Object(o.b)("p",null,"init.py should include a\nSUPPORTED_VERSION field indicating the version of Rucio\nthat your package was developed against. This may be checked by Rucio in\nthe event that the policy package interface changes in the future.\nExample:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'SUPPORTED_VERSION = "1.20.7"\n')),Object(o.b)("p",null,"Custom surl construction algorithms can be registered in\n",Object(o.b)("inlineCode",{parentName:"p"},"init.py"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"from rucio.common.utils import register_surl_algorithm\nregister_surl_algorithm(construct_surl_special, 'voname_special')\n")),Object(o.b)("p",null,"So can custom lfn to pfn algorithms:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"from rucio.rse.protocols.protocol import RSEDeterministicTranslation\nRSEDeterministicTranslation.register(lfn2pfn_special, 'voname_special')\n")),Object(o.b)("p",null,"In both cases the name used to register the function must be prefixed\nwith the name of the virtual organisation that owns the policy package,\nto avoid naming conflicts on multi-VO Rucio installations."))}p.isMDXComponent=!0}}]);