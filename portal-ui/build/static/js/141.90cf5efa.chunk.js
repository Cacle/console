(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[141],{436:function(e,s,c){"use strict";var t=c(6),j=c(4),b=c(3),n=c(2),r=(c(11),c(7)),i=c(24),x=c(364),m=c(93),a=c(8),o=c(12);var O=n.createContext(),d=c(14),l=c(70),h=c(94);function u(e){return Object(l.a)("MuiGrid",e)}var I=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],p=Object(h.a)("MuiGrid",["root","container","item","zeroMinWidth"].concat(Object(d.a)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),Object(d.a)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),Object(d.a)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),Object(d.a)(I.map((function(e){return"grid-xs-".concat(e)}))),Object(d.a)(I.map((function(e){return"grid-sm-".concat(e)}))),Object(d.a)(I.map((function(e){return"grid-md-".concat(e)}))),Object(d.a)(I.map((function(e){return"grid-lg-".concat(e)}))),Object(d.a)(I.map((function(e){return"grid-xl-".concat(e)}))))),g=c(0),f=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function v(e){var s=parseFloat(e);return"".concat(s).concat(String(e).replace(String(s),"")||"px")}var w=Object(a.a)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,s){var c=e.ownerState,t=c.container,j=c.direction,b=c.item,n=c.lg,r=c.md,i=c.sm,x=c.spacing,m=c.wrap,a=c.xl,o=c.xs,O=c.zeroMinWidth;return[s.root,t&&s.container,b&&s.item,O&&s.zeroMinWidth,t&&0!==x&&s["spacing-xs-".concat(String(x))],"row"!==j&&s["direction-xs-".concat(String(j))],"wrap"!==m&&s["wrap-xs-".concat(String(m))],!1!==o&&s["grid-xs-".concat(String(o))],!1!==i&&s["grid-sm-".concat(String(i))],!1!==r&&s["grid-md-".concat(String(r))],!1!==n&&s["grid-lg-".concat(String(n))],!1!==a&&s["grid-xl-".concat(String(a))]]}})((function(e){var s=e.ownerState;return Object(b.a)({boxSizing:"border-box"},s.container&&{display:"flex",flexWrap:"wrap",width:"100%"},s.item&&{margin:0},s.zeroMinWidth&&{minWidth:0},"nowrap"===s.wrap&&{flexWrap:"nowrap"},"reverse"===s.wrap&&{flexWrap:"wrap-reverse"})}),(function(e){var s=e.theme,c=e.ownerState;return Object(i.b)({theme:s},c.direction,(function(e){var s={flexDirection:e};return 0===e.indexOf("column")&&(s["& > .".concat(p.item)]={maxWidth:"none"}),s}))}),(function(e){var s=e.theme,c=e.ownerState,j=c.container,b=c.rowSpacing,n={};return j&&0!==b&&(n=Object(i.b)({theme:s},b,(function(e){var c=s.spacing(e);return"0px"!==c?Object(t.a)({marginTop:"-".concat(v(c))},"& > .".concat(p.item),{paddingTop:v(c)}):{}}))),n}),(function(e){var s=e.theme,c=e.ownerState,j=c.container,b=c.columnSpacing,n={};return j&&0!==b&&(n=Object(i.b)({theme:s},b,(function(e){var c=s.spacing(e);return"0px"!==c?Object(t.a)({width:"calc(100% + ".concat(v(c),")"),marginLeft:"-".concat(v(c))},"& > .".concat(p.item),{paddingLeft:v(c)}):{}}))),n}),(function(e){var s=e.theme,c=e.ownerState;return s.breakpoints.keys.reduce((function(e,t){return function(e,s,c,t){var j=t[c];if(j){var n={};if(!0===j)n={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===j)n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var r=Object(i.d)({values:t.columns,base:s.breakpoints.values}),x="".concat(Math.round(j/r[c]*1e8)/1e6,"%"),m={};if(t.container&&t.item&&0!==t.columnSpacing){var a=s.spacing(t.columnSpacing);if("0px"!==a){var o="calc(".concat(x," + ").concat(v(a),")");m={flexBasis:o,maxWidth:o}}}n=Object(b.a)({flexBasis:x,flexGrow:0,maxWidth:x},m)}0===s.breakpoints.values[c]?Object.assign(e,n):e[s.breakpoints.up(c)]=n}}(e,s,t,c),e}),{})})),S=n.forwardRef((function(e,s){var c,t=Object(o.a)({props:e,name:"MuiGrid"}),i=Object(x.a)(t),a=i.className,d=i.columns,l=void 0===d?12:d,h=i.columnSpacing,I=i.component,p=void 0===I?"div":I,v=i.container,S=void 0!==v&&v,F=i.direction,W=void 0===F?"row":F,M=i.item,k=void 0!==M&&M,L=i.lg,C=void 0!==L&&L,B=i.md,A=void 0!==B&&B,z=i.rowSpacing,T=i.sm,D=void 0!==T&&T,N=i.spacing,R=void 0===N?0:N,G=i.wrap,P=void 0===G?"wrap":G,U=i.xl,y=void 0!==U&&U,H=i.xs,J=void 0!==H&&H,E=i.zeroMinWidth,V=void 0!==E&&E,X=Object(j.a)(i,f),q=z||R,K=h||R,Q=n.useContext(O)||l,Y=Object(b.a)({},i,{columns:Q,container:S,direction:W,item:k,lg:C,md:A,sm:D,rowSpacing:q,columnSpacing:K,wrap:P,xl:y,xs:J,zeroMinWidth:V}),Z=function(e){var s=e.classes,c=e.container,t=e.direction,j=e.item,b=e.lg,n=e.md,r=e.sm,i=e.spacing,x=e.wrap,a=e.xl,o=e.xs,O={root:["root",c&&"container",j&&"item",e.zeroMinWidth&&"zeroMinWidth",c&&0!==i&&"spacing-xs-".concat(String(i)),"row"!==t&&"direction-xs-".concat(String(t)),"wrap"!==x&&"wrap-xs-".concat(String(x)),!1!==o&&"grid-xs-".concat(String(o)),!1!==r&&"grid-sm-".concat(String(r)),!1!==n&&"grid-md-".concat(String(n)),!1!==b&&"grid-lg-".concat(String(b)),!1!==a&&"grid-xl-".concat(String(a))]};return Object(m.a)(O,u,s)}(Y);return c=Object(g.jsx)(w,Object(b.a)({ownerState:Y,className:Object(r.a)(Z.root,a),as:p,ref:s},X)),12!==Q?Object(g.jsx)(O.Provider,{value:Q,children:c}):c}));s.a=S},937:function(e,s,c){"use strict";c.r(s);var t=c(1),j=(c(2),c(120)),b=c(300),n=c(310),r=c(436),i=c(22),x=c(141),m=c(158),a=c(0);s.default=Object(n.a)((function(e){return Object(b.a)(Object(t.a)(Object(t.a)({},Object(j.f)(e.spacing(4))),{},{root:{fontSize:12,wordWrap:"break-word"}}))}))((function(e){var s=e.classes;return Object(a.jsx)("div",{className:s.container,children:Object(a.jsxs)(r.a,{container:!0,spacing:4,textAlign:"center",className:s.root,children:[Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.a,{})," ",Object(a.jsx)("br",{}),"AccountIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.b,{})," ",Object(a.jsx)("br",{}),"AddFolderIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.c,{})," ",Object(a.jsx)("br",{}),"AddIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.d,{})," ",Object(a.jsx)("br",{}),"AllBucketsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.e,{})," ",Object(a.jsx)("br",{}),"ArrowIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.f,{})," ",Object(a.jsx)("br",{}),"ArrowRightIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.g,{})," ",Object(a.jsx)("br",{}),"BackSettingsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.h,{})," ",Object(a.jsx)("br",{}),"BucketsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.i,{})," ",Object(a.jsx)("br",{}),"CalendarIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.j,{})," ",Object(a.jsx)("br",{}),"CircleIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.k,{})," ",Object(a.jsx)("br",{}),"ClustersIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.l,{})," ",Object(a.jsx)("br",{}),"CollapseIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.m,{})," ",Object(a.jsx)("br",{}),"ComputerLineIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.n,{})," ",Object(a.jsx)("br",{}),"ConfigurationsListIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.o,{})," ",Object(a.jsx)("br",{}),"ConsoleIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.p,{})," ",Object(a.jsx)("br",{}),"ConsoleLogo"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.q,{})," ",Object(a.jsx)("br",{}),"CopyIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.r,{})," ",Object(a.jsx)("br",{}),"CreateIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.s,{})," ",Object(a.jsx)("br",{}),"DashboardIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.t,{})," ",Object(a.jsx)("br",{}),"DeleteIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.u,{})," ",Object(a.jsx)("br",{}),"DiagnosticsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.v,{})," ",Object(a.jsx)("br",{}),"DocumentationIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.w,{})," ",Object(a.jsx)("br",{}),"DownloadIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.x,{})," ",Object(a.jsx)("br",{}),"DownloadStatIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.y,{})," ",Object(a.jsx)("br",{}),"DrivesIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.z,{})," ",Object(a.jsx)("br",{}),"EditIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.A,{})," ",Object(a.jsx)("br",{}),"EgressIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.B,{})," ",Object(a.jsx)("br",{}),"FileBookIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.C,{})," ",Object(a.jsx)("br",{}),"FileCloudIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.D,{})," ",Object(a.jsx)("br",{}),"FileCodeIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.E,{})," ",Object(a.jsx)("br",{}),"FileConfigIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.F,{})," ",Object(a.jsx)("br",{}),"FileDbIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.G,{})," ",Object(a.jsx)("br",{}),"FileFontIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.H,{})," ",Object(a.jsx)("br",{}),"FileImageIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.I,{})," ",Object(a.jsx)("br",{}),"FileLinkIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.J,{})," ",Object(a.jsx)("br",{}),"FileLockIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.K,{})," ",Object(a.jsx)("br",{}),"FileMissingIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.L,{})," ",Object(a.jsx)("br",{}),"FileMusicIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.M,{})," ",Object(a.jsx)("br",{}),"FilePdfIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.N,{})," ",Object(a.jsx)("br",{}),"FilePptIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.O,{})," ",Object(a.jsx)("br",{}),"FileTxtIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.P,{})," ",Object(a.jsx)("br",{}),"FileVideoIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Q,{})," ",Object(a.jsx)("br",{}),"FileWorldIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.R,{})," ",Object(a.jsx)("br",{}),"FileXlsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.S,{})," ",Object(a.jsx)("br",{}),"FileZipIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.T,{})," ",Object(a.jsx)("br",{}),"FolderIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.U,{})," ",Object(a.jsx)("br",{}),"GroupsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.V,{})," ",Object(a.jsx)("br",{}),"HealIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.W,{})," ",Object(a.jsx)("br",{}),"HelpIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.X,{})," ",Object(a.jsx)("br",{}),"HistoryIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Y,{})," ",Object(a.jsx)("br",{}),"IAMPoliciesIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(m.a,{})," ",Object(a.jsx)("br",{}),"JSONIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.ab,{})," ",Object(a.jsx)("br",{}),"LambdaBalloonIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.bb,{})," ",Object(a.jsx)("br",{}),"LambdaIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.cb,{})," ",Object(a.jsx)("br",{}),"LambdaNotificationsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.db,{})," ",Object(a.jsx)("br",{}),"LicenseIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.eb,{})," ",Object(a.jsx)("br",{}),"LockIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.fb,{})," ",Object(a.jsx)("br",{}),"LogoutIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.gb,{})," ",Object(a.jsx)("br",{}),"LogsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.hb,{})," ",Object(a.jsx)("br",{}),"MirroringIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.ib,{})," ",Object(a.jsx)("br",{}),"MultipleBucketsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.jb,{})," ",Object(a.jsx)("br",{}),"NewAccountIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.kb,{})," ",Object(a.jsx)("br",{}),"NextArrowIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.lb,{})," ",Object(a.jsx)("br",{}),"ObjectBrowser1Icon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.mb,{})," ",Object(a.jsx)("br",{}),"ObjectBrowserFolderIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.nb,{})," ",Object(a.jsx)("br",{}),"ObjectBrowserIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.ob,{})," ",Object(a.jsx)("br",{}),"ObjectManagerIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.pb,{})," ",Object(a.jsx)("br",{}),"OpenListIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.qb,{})," ",Object(a.jsx)("br",{}),"OperatorLogo"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.rb,{})," ",Object(a.jsx)("br",{}),"PermissionIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.sb,{})," ",Object(a.jsx)("br",{}),"PreviewIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.tb,{})," ",Object(a.jsx)("br",{}),"PrometheusIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.ub,{})," ",Object(a.jsx)("br",{}),"RecoverIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.vb,{})," ",Object(a.jsx)("br",{}),"RedoIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.wb,{})," ",Object(a.jsx)("br",{}),"RefreshIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.xb,{})," ",Object(a.jsx)("br",{}),"RemoveIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.yb,{})," ",Object(a.jsx)("br",{}),"ReportedUsageIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.zb,{})," ",Object(a.jsx)("br",{}),"SearchIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Ab,{})," ",Object(a.jsx)("br",{}),"SelectMultipleIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Bb,{})," ",Object(a.jsx)("br",{}),"ServersIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Cb,{})," ",Object(a.jsx)("br",{}),"ServiceAccountIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Db,{})," ",Object(a.jsx)("br",{}),"ServiceAccountsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Eb,{})," ",Object(a.jsx)("br",{}),"SettingsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Fb,{})," ",Object(a.jsx)("br",{}),"ShareIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Gb,{})," ",Object(a.jsx)("br",{}),"SpeedtestIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Hb,{})," ",Object(a.jsx)("br",{}),"StorageIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Ib,{})," ",Object(a.jsx)("br",{}),"SyncIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Jb,{})," ",Object(a.jsx)("br",{}),"TenantsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Kb,{})," ",Object(a.jsx)("br",{}),"TenantsOutlineIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Lb,{})," ",Object(a.jsx)("br",{}),"TiersIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Mb,{})," ",Object(a.jsx)("br",{}),"ToolsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Nb,{})," ",Object(a.jsx)("br",{}),"TotalObjectsIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Ob,{})," ",Object(a.jsx)("br",{}),"TraceIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Pb,{})," ",Object(a.jsx)("br",{}),"TrashIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Qb,{})," ",Object(a.jsx)("br",{}),"UploadFile"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Rb,{})," ",Object(a.jsx)("br",{}),"UploadFolderIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Sb,{})," ",Object(a.jsx)("br",{}),"UploadIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Tb,{})," ",Object(a.jsx)("br",{}),"UploadStatIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Ub,{})," ",Object(a.jsx)("br",{}),"UptimeIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Vb,{})," ",Object(a.jsx)("br",{}),"UsersIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Wb,{})," ",Object(a.jsx)("br",{}),"VersionIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(x.a,{})," ",Object(a.jsx)("br",{}),"WarnIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Xb,{})," ",Object(a.jsx)("br",{}),"WarpIcon"]}),Object(a.jsxs)(r.a,{item:!0,xs:3,sm:2,md:1,children:[Object(a.jsx)(i.Yb,{})," ",Object(a.jsx)("br",{}),"WatchIcon"]})]})})}))}}]);
//# sourceMappingURL=141.90cf5efa.chunk.js.map