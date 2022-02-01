(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{212:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(376)),i=["components"],c={id:"database",title:"Database Operations",sidebar_label:"Database Operations"},s={unversionedId:"database",id:"database",isDocsHomePage:!1,title:"Database Operations",description:"Supported databases",source:"@site/../docs/database.md",sourceDirName:".",slug:"/database",permalink:"/documentation/database",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/database.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1643726337,formattedLastUpdatedAt:"2/1/2022",sidebar_label:"Database Operations",frontMatter:{id:"database",title:"Database Operations",sidebar_label:"Database Operations"},sidebar:"docs",previous:{title:"Monitoring",permalink:"/documentation/monitoring"},next:{title:"Configuration parameters",permalink:"/documentation/configuration-parameters"}},l=[{value:"Supported databases",id:"supported-databases",children:[]},{value:"Upgrading and downgrading the database schema",id:"upgrading-and-downgrading-the-database-schema",children:[]},{value:"Creating a new version as a developer",id:"creating-a-new-version-as-a-developer",children:[]}],p={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"supported-databases"},"Supported databases"),Object(o.b)("p",null,"Rucio uses ",Object(o.b)("a",{parentName:"p",href:"https://www.sqlalchemy.org/"},"SQLAlchemy")," as the object-relational mapper between Python and SQL. Rucio is extensively tested against SQLite, MySQL/MariaDB, PostgreSQL, and Oracle and should work with them out of the box. The appropriate connection string has to be set in the ",Object(o.b)("inlineCode",{parentName:"p"},"etc/rucio.cfg"),", for example:"),Object(o.b)("p",null,"Oracle: ",Object(o.b)("inlineCode",{parentName:"p"},"oracle://rucio:rucio@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=10121))(ENABLE=BROKEN)(CONNECT_DATA=(SERVICE_NAME=localhost)))")),Object(o.b)("p",null,"MySQL/MariaDB: ",Object(o.b)("inlineCode",{parentName:"p"},"mysql+pymysql://rucio:rucio@localhost/rucio")),Object(o.b)("p",null,"PostgreSQL: ",Object(o.b)("inlineCode",{parentName:"p"},"postgresql://rucio:rucio@localhost:6601/rucio")),Object(o.b)("p",null,"SQLite: ",Object(o.b)("inlineCode",{parentName:"p"},"sqlite:////tmp/rucio.db")),Object(o.b)("p",null,"Please ensure correct UNIX permissions on the SQLite file, such that the web server process can read and write to it."),Object(o.b)("h2",{id:"upgrading-and-downgrading-the-database-schema"},"Upgrading and downgrading the database schema"),Object(o.b)("p",null,"Rucio uses ",Object(o.b)("a",{parentName:"p",href:"http://alembic.zzzcomputing.com/en/latest/"},"Alembic")," as a database migration tool, which works hand-in-hand with ",Object(o.b)("a",{parentName:"p",href:"https://www.sqlalchemy.org/"},"SQLAlchemy"),". Ensure that int ",Object(o.b)("inlineCode",{parentName:"p"},"etc/alembic.ini")," the database connection string is is set to the same database connection string as the ",Object(o.b)("inlineCode",{parentName:"p"},"etc/rucio.cfg")," and issue the following command to verify the changes to the upgrade of the schema:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"alembic upgrade head --sql")),Object(o.b)("p",null,"You can edit and then apply the SQL directly on your database. We do not advise running automatic upgrades/downgrades with alembic."),Object(o.b)("p",null,"Notabene, schema upgrades are reserved for feature releases and will not happen with patch releases."),Object(o.b)("h2",{id:"creating-a-new-version-as-a-developer"},"Creating a new version as a developer"),Object(o.b)("p",null,"If you want to create an upgrade path for the schema, you need to generate a schema upgrade+downgrade file:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"alembic revision -m 'schema change message'")),Object(o.b)("p",null,"This will output the name of the file that has been generated with two functions ",Object(o.b)("inlineCode",{parentName:"p"},"def upgrade()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"def downgrade()")," that need to be implemented. These should reflect the changes to the ",Object(o.b)("inlineCode",{parentName:"p"},"lib/rucio/db/sqla/models.py")," SQLAlchemy mapping."))}d.isMDXComponent=!0},376:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);