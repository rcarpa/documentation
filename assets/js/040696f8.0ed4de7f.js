"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1893],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?i.createElement(h,r(r({ref:n},s),{},{components:t})):i.createElement(h,r({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=t(87462),a=t(63366),o=(t(67294),t(3905)),r=["components"],l={id:"policy_packages",title:"Policy Packages"},p=void 0,c={unversionedId:"policy_packages",id:"policy_packages",title:"Policy Packages",description:"Overview",source:"@site/../docs/policy_packages.md",sourceDirName:".",slug:"/policy_packages",permalink:"/documentation/policy_packages",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/policy_packages.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1680536801,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{id:"policy_packages",title:"Policy Packages"},sidebar:"docs",previous:{title:"Configure Rucio To Use Globus Online as a Transfer Tool",permalink:"/documentation/configure-rucio-globus"},next:{title:"S3 Storage Configuration",permalink:"/documentation/s3_rse_config"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Creating a policy package",id:"creating-a-policy-package",level:2},{value:"Deploying Policy Packages in containers",id:"deploying-policy-packages-in-containers",level:2},{value:"Installing the policy package",id:"installing-the-policy-package",level:3},{value:"Adding the policy package to the server&#39;s PYTHONPATH",id:"adding-the-policy-package-to-the-servers-pythonpath",level:3},{value:"Specifying the policy package in the configuration file",id:"specifying-the-policy-package-in-the-configuration-file",level:3}],u={toc:d},m="wrapper";function h(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)(m,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Policy packages are separate Python packages that can be used to add\nexperiment-specific customisations to Rucio. They typically customise\nRucio's handling of permissions and schema as well as optionally adding\ntheir own algorithms for various purposes, such as lfn to pfn conversion\nand surl construction."),(0,o.kt)("p",null,"Policy packages may be installed from a Python package repository such\nas ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.python.org/"},"PyPi")," or they may simply be installed in a\nlocal directory. In the latter case this directory will need to be added\nto the Rucio server's ",(0,o.kt)("inlineCode",{parentName:"p"},"PYTHONPATH")," environment variable."),(0,o.kt)("p",null,"The name of the policy package in use is specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"package")," value\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},"policy")," section of the Rucio configuration file. Alternatively,\nthe package can be specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"RUCIO_POLICY_PACKAGE")," environment\nvariable (if both are set, the environment variable takes priority). If\nno package is specified, a built in generic policy will be used. If a\npackage is specified but cannot be loaded, Rucio will exit with an error."),(0,o.kt)("p",null,"Multi-VO Rucio installations can load a different policy package for each\nVO. In this case, the configuration parameter or environment variable name\nis suffixed with the VO name (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"package-vo1")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"RUCIO_POLICY_PACKAGE_VO1"),")."),(0,o.kt)("h2",{id:"creating-a-policy-package"},"Creating a policy package"),(0,o.kt)("p",null,"The structure of a policy package is very simple. It contains the\nfollowing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"permission.py")," module implementing permission\ncustomisations."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"schema.py")," module implementing schema customisations."),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("inlineCode",{parentName:"li"},"__init__.py")," file that can optionally return a dictionary of\nalgorithms provided by the package."),(0,o.kt)("li",{parentName:"ul"},"It should also contain a SUPPORTED_VERSION field.")),(0,o.kt)("p",null,"The easiest way to create the ",(0,o.kt)("inlineCode",{parentName:"p"},"permission.py")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"schema.py")," modules is to modify the generic versions from\nthe Rucio codebase. These can be found in\n",(0,o.kt)("inlineCode",{parentName:"p"},"lib/rucio/core/permission/generic.py")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"lib/rucio/common/schema/generic.py")," respectively."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"has_permission")," function you may wish to default to\nthe generic permission checks if your experiment does not need specific\nfunctionality for a particular action, or so that new actions added to\nRucio will work without your policy package having to be updated. This\nfallback can be implemented with code similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import rucio.core.permission.generic\nif action not in perm:\n    return rucio.core.permission.generic.has_permission(issuer, action, kwargs)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"__init__.py")," should include a\n",(0,o.kt)("inlineCode",{parentName:"p"},"SUPPORTED_VERSION")," field indicating the major version of Rucio\nthat your package was developed against. This is checked by Rucio in\nthe event that the policy package interface changes in the future.\nExample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'SUPPORTED_VERSION = "1.30"\n')),(0,o.kt)("p",null,"It can also contain an optional function called ",(0,o.kt)("inlineCode",{parentName:"p"},"get_algorithms"),' that\nreturns a dictionary of custom algorithms implemented within the package.\nIn fact, this structure should be a "dictionary of dictionaries" where\nthe outer dictionary contains algorithm types, and each inner\ndictionary contains all the algorithms provided by the package for that\ntype. Currently supported types are ',(0,o.kt)("inlineCode",{parentName:"p"},"surl")," for SURL algorithms,\n",(0,o.kt)("inlineCode",{parentName:"p"},"lfn2pfn")," for LFN2PFN algorithms, and ",(0,o.kt)("inlineCode",{parentName:"p"},"scope")," for scope extraction\nalgorithms."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_algorithms():\n    return { 'surl':\n             { 'voname_surl': construct_surl_voname },\n         'lfn2pfn':\n         { 'voname_lfn2pfn': lfn2pfn_voname },\n         'scope':\n         { 'voname_extract_scope': extract_scope_voname } }\n")),(0,o.kt)("p",null,"In all cases the names used to register the functions must be prefixed\nwith the name of the virtual organisation that owns the policy package,\nto avoid naming conflicts on multi-VO Rucio installations."),(0,o.kt)("h2",{id:"deploying-policy-packages-in-containers"},"Deploying Policy Packages in containers"),(0,o.kt)("p",null,"It is now common to deploy Rucio using containers managed by software\nsuch as Docker and Kubernetes. This section of the documentation is\nintended to give guidance on how policy packages can be deployed in\nthis type of environment."),(0,o.kt)("p",null,"Broadly speaking, three things must happen in order for a policy\npackage to be deployed successfully:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The policy package code must be available to the Rucio server\n(and possibly other components such as daemons)."),(0,o.kt)("li",{parentName:"ol"},"The directory containing the policy package must be in the server's\n",(0,o.kt)("inlineCode",{parentName:"li"},"PYTHONPATH"),"."),(0,o.kt)("li",{parentName:"ol"},"The policy package name must be set in the Rucio configuration file,\nor using the ",(0,o.kt)("inlineCode",{parentName:"li"},"RUCIO_POLICY_PACKAGE")," environment variable.")),(0,o.kt)("h3",{id:"installing-the-policy-package"},"Installing the policy package"),(0,o.kt)("p",null,"There are a few possible ways to get the policy package code into the\ncontainer where the server runs. One way is to build a custom\nexperiment-specific container image based on the generic Rucio server\nimage, and to install the policy package at build time in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", either by directly copying the files in, or by installing\nit from some sort of repository. For experiments that already customise\nthe container image, this is likely to be the easiest option."),(0,o.kt)("p",null,"Alternatively, the standard Rucio container can be used and a volume\ncontaining the policy package files can be mounted at run time (using\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"-v")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--volume")," command line flag). When using Kubernetes, there\nis also a third possibility: use an\n",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"},"init container"),"\nto install the policy package onto a shared volume, which is then mounted\nby the server container when it starts up."),(0,o.kt)("h3",{id:"adding-the-policy-package-to-the-servers-pythonpath"},"Adding the policy package to the server's PYTHONPATH"),(0,o.kt)("p",null,"It is possible to set environment variables within the container when\nstarting it (using Docker's ",(0,o.kt)("inlineCode",{parentName:"p"},"-e")," command line flag). This can be used to\nset ",(0,o.kt)("inlineCode",{parentName:"p"},"PYTHONPATH"),", however this will replace the original value rather\nthan appending to it, so there is a risk of removing other important\nitems from the path. A safer option is to override Rucio's\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker-entrypoint.sh")," script and instead use a script that appends the\npolicy package's directory to ",(0,o.kt)("inlineCode",{parentName:"p"},"PYTHONPATH")," before starting the HTTP server.\nThis can be done either at build time in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", or at run time\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--entrypoint")," command line option."),(0,o.kt)("p",null,"When deploying using Kubernetes and Helm charts, it is possible to specify\nthe policy package directory in the ",(0,o.kt)("inlineCode",{parentName:"p"},"optional_config:")," section of\n",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml"),". This is then propagated to the container as an environment\nvariable, which can be added to ",(0,o.kt)("inlineCode",{parentName:"p"},"PYTHONPATH")," by the entry point script. For\nexample, include this in ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"optional_config:\n  policy_pkg_path: /opt/rucio/policy\n")),(0,o.kt)("p",null,"This will appear in the container's environment as a variable called\n",(0,o.kt)("inlineCode",{parentName:"p"},"POLICY_PKG_PATH"),", which can be added to ",(0,o.kt)("inlineCode",{parentName:"p"},"PYTHONPATH")," by the entry point\nscript before starting the server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'if [ ! -z "$POLICY_PKG_PATH" ]; then\n    export PYTHONPATH=${POLICY_PKG_PATH}:${PYTHONPATH:+:}${PYTHONPATH}\nfi\n')),(0,o.kt)("h3",{id:"specifying-the-policy-package-in-the-configuration-file"},"Specifying the policy package in the configuration file"),(0,o.kt)("p",null,"It is likely that most experiments are already customising the Rucio\nconfiguration file, in which case the policy package (",(0,o.kt)("inlineCode",{parentName:"p"},"package = name")," in\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"[policy]")," section) can simply be added to the existing customised file.\nAlternatively, the package name can be set in the ",(0,o.kt)("inlineCode",{parentName:"p"},"RUCIO_POLICY_PACKAGE"),"\nenvironment variable (see previous section for how to pass environment\nvariables into the server container)."),(0,o.kt)("p",null,"When deploying using Kubernetes and Helm charts, it is possible to specify\nconfiguration options in ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml"),". Values included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config:"),"\nsection of this file are automatically merged into ",(0,o.kt)("inlineCode",{parentName:"p"},"rucio.cfg")," by the\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker-entrypoint.sh")," script, so the policy package can be set as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  policy:\n    package: packagename\n")))}h.isMDXComponent=!0}}]);