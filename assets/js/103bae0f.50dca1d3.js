(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{376:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=a,m=u["".concat(r,".").concat(b)]||u[b]||d[b]||o;return t?i.a.createElement(m,c(c({ref:n},p),{},{components:t})):i.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<o;p++)r[p]=t[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var a=t(3),i=t(7),o=(t(0),t(376)),r=["components"],c={id:"policy-packages",title:"Policy packages",sidebar_label:"Policy packages"},l={unversionedId:"policy-packages",id:"policy-packages",isDocsHomePage:!1,title:"Policy packages",description:"Overview",source:"@site/../docs/policy-packages.md",sourceDirName:".",slug:"/policy-packages",permalink:"/documentation/policy-packages",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/policy-packages.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1643726337,formattedLastUpdatedAt:"2/1/2022",sidebar_label:"Policy packages",frontMatter:{id:"policy-packages",title:"Policy packages",sidebar_label:"Policy packages"},sidebar:"docs",previous:{title:"Component development leads",permalink:"/documentation/component_leads"},next:{title:"Notifications",permalink:"/documentation/notifications"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Creating a policy package",id:"creating-a-policy-package",children:[]}],s={toc:p};function u(e){var n=e.components,t=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Policy packages are separate Python packages that can be used to add\nexperiment-specific customisations to Rucio. They typically customise\nRucio's handling of permissions and schema as well as optionally adding\ntheir own algorithms for various purposes, such as lfn to pfn conversion\nand surl construction."),Object(o.b)("p",null,"Policy packages may be installed from a Python package repository such\nas ",Object(o.b)("a",{parentName:"p",href:"https://pypi.python.org/"},"PyPi")," or they may simply be installed in a\nlocal directory. In the latter case this directory will need to be added\nto the Rucio server's ",Object(o.b)("inlineCode",{parentName:"p"},"PYTHONPATH")," environment variable."),Object(o.b)("p",null,"The name of the policy package in use is specified by the ",Object(o.b)("inlineCode",{parentName:"p"},"package")," value\nin the ",Object(o.b)("inlineCode",{parentName:"p"},"policy")," section of the Rucio configuration file. Alternatively,\nthe package can be specified by the ",Object(o.b)("inlineCode",{parentName:"p"},"RUCIO_POLICY_PACKAGE")," environment\nvariable (if both are set, the environment variable takes priority). If\nno package is specified, a built in generic policy will be used. If a\npackage is specified but cannot be loaded, Rucio will exit with an error."),Object(o.b)("p",null,"Multi-VO Rucio installations can load a different policy package for each\nVO. In this case, the configuration parameter or environment variable name\nis suffixed with the VO name (for example, ",Object(o.b)("inlineCode",{parentName:"p"},"package-vo1")," or\n",Object(o.b)("inlineCode",{parentName:"p"},"RUCIO_POLICY_PACKAGE_VO1"),")."),Object(o.b)("h2",{id:"creating-a-policy-package"},"Creating a policy package"),Object(o.b)("p",null,"The structure of a policy package is very simple. It contains the\nfollowing:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a ",Object(o.b)("inlineCode",{parentName:"li"},"permission.py")," module implementing permission\ncustomisations."),Object(o.b)("li",{parentName:"ul"},"a ",Object(o.b)("inlineCode",{parentName:"li"},"schema.py")," module implementing schema customisations."),Object(o.b)("li",{parentName:"ul"},"an ",Object(o.b)("inlineCode",{parentName:"li"},"__init__.py")," file that can optionally return a dictionary of\nalgorithms provided by the package."),Object(o.b)("li",{parentName:"ul"},"It should also contain a SUPPORTED_VERSION field.")),Object(o.b)("p",null,"The easiest way to create the ",Object(o.b)("inlineCode",{parentName:"p"},"permission.py")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"schema.py")," modules is to modify the generic versions from\nthe Rucio codebase. These can be found in\n",Object(o.b)("inlineCode",{parentName:"p"},"lib/rucio/core/permission/generic.py")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"lib/rucio/common/schema/generic.py")," respectively."),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"has_permission")," function you may wish to default to\nthe generic permission checks if your experiment does not need specific\nfunctionality for a particular action, or so that new actions added to\nRucio will work without your policy package having to be updated. This\nfallback can be implemented with code similar to the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"import rucio.core.permission.generic\nif action not in perm:\n    return rucio.core.permission.generic.has_permission(issuer, action, kwargs)\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"__init__.py")," should include a\n",Object(o.b)("inlineCode",{parentName:"p"},"SUPPORTED_VERSION")," field indicating the version of Rucio\nthat your package was developed against. This may be checked by Rucio in\nthe event that the policy package interface changes in the future.\nExample:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'SUPPORTED_VERSION = "1.20.7"\n')),Object(o.b)("p",null,"It can also contain an optional function called ",Object(o.b)("inlineCode",{parentName:"p"},"get_algorithms"),' that\nreturns a dictionary of custom algorithms implemented within the package.\nIn fact, this structure should be a "dictionary of dictionaries" where\nthe outer dictionary contains algorithm types, and each inner\ndictionary contains all the algorithms provided by the package for that\ntype. Currently supported types are ',Object(o.b)("inlineCode",{parentName:"p"},"surl")," for SURL algorithms,\n",Object(o.b)("inlineCode",{parentName:"p"},"lfn2pfn")," for LFN2PFN algorithms, and ",Object(o.b)("inlineCode",{parentName:"p"},"scope")," for scope extraction\nalgorithms."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"def get_algorithms():\n    return { 'surl':\n             { 'voname_surl': construct_surl_voname },\n         'lfn2pfn':\n         { 'voname_lfn2pfn': lfn2pfn_voname },\n         'scope':\n         { 'voname_extract_scope': extract_scope_voname } }\n")),Object(o.b)("p",null,"In all cases the names used to register the functions must be prefixed\nwith the name of the virtual organisation that owns the policy package,\nto avoid naming conflicts on multi-VO Rucio installations."))}u.isMDXComponent=!0}}]);