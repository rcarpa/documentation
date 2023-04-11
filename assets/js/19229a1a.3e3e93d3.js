"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Setting up a Rucio development environment"},l=void 0,c={unversionedId:"developing",id:"developing",title:"Setting up a Rucio development environment",description:"Prerequisites",source:"@site/../docs/developing.md",sourceDirName:".",slug:"/developing",permalink:"/documentation/developing",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/developing.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1680536801,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{title:"Setting up a Rucio development environment"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Preparing the environment",id:"preparing-the-environment",level:2},{value:"Using the standard environment",id:"using-the-standard-environment",level:3},{value:"Using the environment including storage",id:"using-the-environment-including-storage",level:3},{value:"Using the environment including monitoring",id:"using-the-environment-including-monitoring",level:3},{value:"Development",id:"development",level:2},{value:"Development tricks",id:"development-tricks",level:2},{value:"Server changes",id:"server-changes",level:3},{value:"Database access",id:"database-access",level:3},{value:"Docker is eating my disk space",id:"docker-is-eating-my-disk-space",level:3},{value:"Where do I find the Dockerfile",id:"where-do-i-find-the-dockerfile",level:3},{value:"I need a Docker based on another branch (not rucio/master)",id:"i-need-a-docker-based-on-another-branch-not-ruciomaster",level:3},{value:"Start the daemons",id:"start-the-daemons",level:2}],h={toc:d},p="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)(p,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"We provide a containerised version of the Rucio development environment for a\nquick start. Our containers are ready-made for Docker, which means you need to\nhave a working Docker installation. To install Docker for your platform, please\nrefer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker installation guide"),", for\nexample, for CentOS ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/linux/docker-ce/centos/"},"follow these instructions for the Docker Community\nEdition"),". Please make\nsure that you install this recent Docker version especially if you are on\nCentOS, i.e. its default version is ancient and does not support some features\nwe rely on."),(0,r.kt)("p",null,"Start the Docker daemon with sudo systemctl start docker. You can confirm that\nDocker is running properly by executing (might need sudo):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run hello-world\n")),(0,r.kt)("p",null,"If successful, this will print an informational message telling you that you are\nready to go.  Now, also install the docker-compose helper tool with sudo yum\ninstall docker-compose (might need ",(0,r.kt)("a",{parentName:"p",href:"https://fedoraproject.org/wiki/EPEL"},"EPEL"),"\nenabled). You are now ready to install the Rucio development environment."),(0,r.kt)("h2",{id:"preparing-the-environment"},"Preparing the environment"),(0,r.kt)("p",null,"The first step is to check if SELinux is running. SELinux will block access to\nthe directories mounted inside the container, and so depending on you node might\nneed to be put in permissive mode with setenforce permissive."),(0,r.kt)("p",null,"The second step is to fork the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio"},"main Rucio repository on\nGitHub")," by clicking the yellow Fork Star button,\nand then clone your private forked Rucio repository to your\n~/dev/rucio. Afterwards add the main upstream repository as an additional remote\nto be able to submit pull requests later on:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/dev\ngit clone git@github.com:<your_username>/rucio.git\ncd rucio\ngit remote add upstream git@github.com:rucio/rucio.git\ngit fetch --all\n")),(0,r.kt)("p",null,"Now, ensure that the .git/config is proper, i.e., mentioning your full name and\nemail address, and create the .githubtoken file that contains a full access\ntoken from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"Github Account Settings"),"."),(0,r.kt)("p",null,"Next, startup the Rucio development environment with docker-compose. There are\nthree different types: a standard one to just run the unittests and do basic\ndevelopment, which includes just Rucio without any transfer capabilities. One\nslightly larger one, which includes the File Transfer Service (FTS) and three\nXrootD storage servers to develop upload/download and transfers\ncapabilities. And a third large one, which adds the full monitoring stack with\nLogstash, Elasticsearch, Kibana and Grafana."),(0,r.kt)("h3",{id:"using-the-standard-environment"},"Using the standard environment"),(0,r.kt)("p",null,"Run the containers using docker-compose (again might need sudo):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose --file etc/docker/dev/docker-compose.yml up -d\n")),(0,r.kt)("p",null,"And verify that it is running properly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,r.kt)("p",null,"This should show you a few running containers: the Rucio server, the PostgreSQL\ndatabase and the Graphite monitoring."),(0,r.kt)("p",null,"Finally, you can jump into the container with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it dev_rucio_1 /bin/bash\n")),(0,r.kt)("p",null,"To verify that everything is in order, you can now either run the full unit\ntests or only set up the database. Running the full testing suite takes ~10\nminutes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tools/run_tests_docker.sh\n")),(0,r.kt)("p",null,"Alternatively, you can bootstrap the test environment once with the -i option\nand then selectively or repeatedly run test case modules, test case groups, or\neven single test cases, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tools/run_tests_docker.sh -i\npytest -v --full-trace lib/rucio/tests/test_replica.py\npytest -v --full-trace lib/rucio/tests/test_replica.py:TestReplicaCore\npytest -v --full-trace lib/rucio/tests/test_replica.py:TestReplicaCore.test_delete_replicas_from_datasets\n")),(0,r.kt)("h3",{id:"using-the-environment-including-storage"},"Using the environment including storage"),(0,r.kt)("p",null,"Again run the containers using docker-compose:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose --file etc/docker/dev/docker-compose-storage.yml up -d\n")),(0,r.kt)("p",null,"This should show you a few more running containers: the Rucio server, the\nPostgreSQL database, FTS and its associated MySQL database, the Graphite\nmonitoring, and three XrootD storage servers."),(0,r.kt)("p",null,"With this container you can upload and download data to/from the storage and\nsubmit data transfers. To set this up, add the -r option to the setup."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tools/run_tests_docker.sh -ir\n")),(0,r.kt)("p",null,"This creates a few random files and uploads them, creates a few datasets and\ncontainers, and requests a replication rule for the container, which starts in\nstate REPLICATING. To demonstrate the transfer capability, the daemons can be\nrun in single-execution mode in order:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rucio rule-info<rule-id>\nrucio-conveyor-submitter \u2013run-once\nrucio-conveyor-poller \u2013run-once \u2013older-than 0\nrucio-conveyor-finisher \u2013run-once\nrucio rule-info <rule-id>\n")),(0,r.kt)("p",null,"On the second display of the rule, its state has cleared to OK."),(0,r.kt)("h3",{id:"using-the-environment-including-monitoring"},"Using the environment including monitoring"),(0,r.kt)("p",null,"Again run the containers using docker-compose:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose --file etc/docker/dev/docker-compose-storage-monit.yml up -d\n")),(0,r.kt)("p",null,"Now you will have the same containers as before plus a full monitoring stack\nwith Logstash, Elasticsearch, Kibana and Grafana."),(0,r.kt)("p",null,"To create some events and write them to Elasticsearch first run again the tests\nas before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tools/run_tests_docker.sh -ir\n")),(0,r.kt)("p",null,"Then you will have to run the transfer daemons (conveyor-"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"*\n")),(0,r.kt)("p",null,") and messaging daemon (hermes) to send the events to ActiveMQ. There a script\nfor that which repeats these daemons in single execution mode from the section\nin a loop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"run_daemons\n")),(0,r.kt)("p",null,"When all the daemons ran you will be able to find the events in Kibana. If you\nrun the docker environment on you local machine you can access Kibana at\n",(0,r.kt)("a",{parentName:"p",href:"http://localhost:5601"},"http://localhost:5601"),". The necessary index pattern will\nbe added automatically. There is also one dashboard available in Kibana. If it\nis running on remote machine you can SSH forward it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -L 5601:127.0.0.1:5601 <hostname>\n")),(0,r.kt)("p",null,"Additionally, there is also a Grafana server running with one simple\ndashboard. You can access it at\n",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),". The default credentials are\n\u201cadmin/admin\u201d. Also ActiveMQ web console can be accessed at\n",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8161"},"http://localhost:8161"),"."),(0,r.kt)("p",null,"If you would like to continously create some transfers and events there are\nscripts available for that. Open two different shells and in one run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"create_monit_data\n")),(0,r.kt)("p",null,"And in the other run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"run_daemons\n")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"The idea for containerised development is that you use your host machine to edit\nthe files, and test the changes within the container environment. On your host\nmachine, you should be able to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/dev/rucio\nemacs <file>\n")),(0,r.kt)("p",null,"To see your changes in action the recommended way is to jump twice into the\ncontainer in parallel. One terminal to follow the output of the Rucio server\nwith a shortcut to tail the logfiles (logshow), and one terminal to actually run\ninteractive commands:"),(0,r.kt)("p",null,"From your host, get a separate Terminal 1 (the Rucio \u201cserver log show\u201d):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it dev_rucio_1 /bin/bash\nlogshow\n")),(0,r.kt)("p",null,"Terminal 1 can now be left open, and then from your host go into a new Terminal\n2 (the \u201cinteractive\u201d terminal):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it dev_rucio_1 /bin/bash\nrucio whoami\n")),(0,r.kt)("p",null,"The command will output in Terminal 2, and at the same time the server debug\noutput will be shown in Terminal 1."),(0,r.kt)("p",null,"The same logshow is also available in the FTS container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it dev_fts_1 /bin/bash\nlogshow\n")),(0,r.kt)("h2",{id:"development-tricks"},"Development tricks"),(0,r.kt)("h3",{id:"server-changes"},"Server changes"),(0,r.kt)("p",null,"If you edit server-side files, e.g. in lib/rucio/web, and your changes are not\nshowing up then it is usually helpful to flush the memcache and force the\nwebserver to restart without having to restart the container. Inside the\ncontainer execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'flush_all' | nc localhost 11211 && httpd -k graceful\n")),(0,r.kt)("h3",{id:"database-access"},"Database access"),(0,r.kt)("p",null,"The default database is PostgreSQL, and docker-compose is configured to open its\nport to the host machine. Using your favourite SQL navigator, e.g.,\n",(0,r.kt)("a",{parentName:"p",href:"https://dbeaver.io"},"DBeaver"),", you can connect to the database using the default\naccess on localhost:5432 to database name rucio, schema name dev, with username\nrucio and password secret."),(0,r.kt)("h3",{id:"docker-is-eating-my-disk-space"},"Docker is eating my disk space"),(0,r.kt)("p",null,"You can reclaim this with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker system prune -f --volumes\n")),(0,r.kt)("h3",{id:"where-do-i-find-the-dockerfile"},"Where do I find the Dockerfile"),(0,r.kt)("p",null,"This container can be found on Dockerhub as rucio/rucio-dev, and the\ncorresponding ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rucio/containers/tree/master/dev"},"Dockerfile"),"\nis also available. It provides a Rucio environment which allows you to mount\nyour local code in the containers bin, lib, and tools directory. The container\nis set up to run against a PostgreSQL database with fsync and most durability\nfeatures for the WAL disabled to improve testing IO throughput. Tests and checks\ncan be run against the development code without having to rebuild the container."),(0,r.kt)("h3",{id:"i-need-a-docker-based-on-another-branch-not-ruciomaster"},"I need a Docker based on another branch (not rucio/master)"),(0,r.kt)("p",null,"In such case, you can download the Rucio container files and e.g. choose to\nmodify the dev container before build:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /opt\nsudo git clone https://github.com/rucio/containers\ncd ../containers/dev\n")),(0,r.kt)("p",null,"Change anything you need, e.g. the code branch cloned to your docker container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# from\nRUN git clone https://github.com/rucio/rucio.git /tmp/rucio\n# to e.g.:\nRUN git clone --single-branch --branch next https://github.com/rucio/rucio.git /tmp/rucio\n")),(0,r.kt)("h1",{id:"build-your-docker"},"build your docker"),(0,r.kt)("p",null,"sudo docker build -t rucio/rucio-dev ."),(0,r.kt)("p",null,"Compose as usual using docker-compose:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /opt/rucio\nsudo docker-compose --file etc/docker/dev/docker-compose.yml up -d\n")),(0,r.kt)("h2",{id:"start-the-daemons"},"Start the daemons"),(0,r.kt)("p",null,"Daemons are not running in the docker environment, but all daemons support\nsingle-execution mode with the \u2013run-once argument. Reset the system first with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tools/run_tests_docker.sh -ir\n")),(0,r.kt)("p",null,"Some files are created. Let\u2019s add them to a new dataset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rucio add-dataset test:mynewdataset\nrucio attach test:mynewdataset test:file1 test:file2 test:file3 test:file4\n")),(0,r.kt)("p",null,"If you run the command below, the files are not in the RSE XRD3, but only in\nXRD1 and 2.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"rucio list-file-replicas test:mynewdataset\n> +---------+--------+------------+-----------+---------------------------------+\n> | SCOPE   | NAME   | FILESIZE   | ADLER32   | RSE: REPLICA                    |\n> |---------+--------+------------+-----------+---------------------------------|\n> | test    | file1  | 10.486 MB  | 141a641e  | XRD1: root://xrd1:1094/../file1 |\n> | test    | file2  | 10.486 MB  | fdfa7eea  | XRD1: root://xrd1:1094/../file2 |\n> | test    | file3  | 10.486 MB  | c669167d  | XRD2: root://xrd2:1095/../file3 |\n> | test    | file4  | 10.486 MB  | 65786e49  | XRD2: root://xrd2:1095/../file4 |\n> +---------+--------+------------+-----------+---------------------------------+\n")),(0,r.kt)("p",null,"So let\u2019s add a new rule on our new dataset to oblige Rucio to create replicas\nalso on XRD3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rucio add-rule test:mynewdataset 1 XRD3\n> 1aadd685d891400dba050ad43e71fea9\n")),(0,r.kt)("p",null,"Now we can check the status of the rule. We will see there are 4 files in\nReplicating state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rucio rule-info 1aadd685d891400dba050ad43e71fea9|grep Locks\n> Locks OK/REPLICATING/STUCK: 0/4/0\n")),(0,r.kt)("p",null,"Now we can run the daemons. First the rule evaluation daemon (judge-evaluator)\nwill pick up our rule. Then the transfer submitter daemon (conveyor-submitter)\nwill send the newly created transfers requests to the FTS server. After that,\nthe transfer state check daemon (conveyor-poller) will retrieve from FTS the\ntransfer state information. Finally, the transfer sign-off daemon\n(conveyor-finisher) updates the internal state of the Rucio catalogue to reflect\nthe changes.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rucio-judge-evaluator --run-once\nrucio-conveyor-submitter --run-once\nrucio-conveyor-poller --run-once\nrucio-conveyor-finisher --run-once\n")),(0,r.kt)("p",null,"If we see the state of the rule now, we see the locks are OK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rucio rule-info 1aadd685d891400dba050ad43e71fea9|grep Locks\n> Locks OK/REPLICATING/STUCK: 4/0/0\n")),(0,r.kt)("p",null,"And if we look at the replicas of the dataset, we see the there are replicas of\nthe files also in XRD3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"rucio list-file-replicas test:mynewdataset\n> +---------+--------+------------+-----------+--------------------------------+\n> | SCOPE   | NAME   | FILESIZE   | ADLER32   | RSE: REPLICA                   |\n> |---------+--------+------------+-----------+--------------------------------|\n> | test    | file1  | 10.486 MB  | 141a641e  | XRD3: root://xrd3:1096/..file1 |\n> | test    | file1  | 10.486 MB  | 141a641e  | XRD1: root://xrd1:1094/..file1 |\n> | test    | file2  | 10.486 MB  | fdfa7eea  | XRD3: root://xrd3:1096/..file2 |\n> | test    | file2  | 10.486 MB  | fdfa7eea  | XRD1: root://xrd1:1094/..file2 |\n> | test    | file3  | 10.486 MB  | c669167d  | XRD2: root://xrd2:1095/..file3 |\n> | test    | file3  | 10.486 MB  | c669167d  | XRD3: root://xrd3:1096/..file3 |\n> | test    | file4  | 10.486 MB  | 65786e49  | XRD2: root://xrd2:1095/..file4 |\n> | test    | file4  | 10.486 MB  | 65786e49  | XRD3: root://xrd3:1096/..file4 |\n> +---------+--------+------------+-----------+--------------------------------+\n")))}m.isMDXComponent=!0}}]);