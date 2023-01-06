"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7873],{45902:function(e,r,n){var t=n(1413),i=(n(72791),n(53767)),o=n(80184);r.Z=function(e){var r=e.label,n=void 0===r?null:r,a=e.value,l=void 0===a?"-":a,c=e.orientation,s=void 0===c?"column":c,d=e.stkProps,u=void 0===d?{}:d,p=e.lblProps,f=void 0===p?{}:p,h=e.valProps,x=void 0===h?{}:h;return(0,o.jsxs)(i.Z,(0,t.Z)((0,t.Z)({direction:{xs:"column",sm:s}},u),{},{children:[(0,o.jsx)("label",(0,t.Z)((0,t.Z)({style:{marginRight:5,fontWeight:600}},f),{},{children:n})),(0,o.jsx)("label",(0,t.Z)((0,t.Z)({style:{marginRight:5,fontWeight:500}},x),{},{children:l}))]}))}},37099:function(e,r,n){var t=n(72791),i=n(64554),o=n(56096),a=n(80184),l=function(e){var r=e.icon,n=e.description;return(0,a.jsxs)(i.Z,{sx:{display:"flex","& .min-icon":{marginRight:"10px",height:"23px",width:"23px",marginBottom:"10px"}},children:[r," ",(0,a.jsx)("div",{style:{fontSize:"14px",fontStyle:"italic",color:"#5E5E5E"},children:n})]})};r.Z=function(e){var r=e.helpText,n=e.docLink,c=e.docText,s=e.contents;return(0,a.jsxs)(i.Z,{sx:{flex:1,border:"1px solid #eaeaea",borderRadius:"2px",display:"flex",flexFlow:"column",padding:"20px"},children:[(0,a.jsxs)(i.Z,{sx:{fontSize:"16px",fontWeight:600,display:"flex",alignItems:"center",marginBottom:"16px",paddingBottom:"20px","& .min-icon":{height:"21px",width:"21px",marginRight:"15px"}},children:[(0,a.jsx)(o.M9A,{}),(0,a.jsx)("div",{children:r})]}),(0,a.jsxs)(i.Z,{sx:{fontSize:"14px",marginBottom:"15px"},children:[s.map((function(e){return(0,a.jsxs)(t.Fragment,{children:[e.icon&&(0,a.jsx)(i.Z,{sx:{paddingBottom:"20px"},children:(0,a.jsx)(l,{icon:e.icon,description:e.iconDescription})}),(0,a.jsx)(i.Z,{sx:{paddingBottom:"20px"},children:e.text})]})})),(0,a.jsx)(i.Z,{sx:{paddingBottom:"20px"},children:(0,a.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:c})})]})]})}},51270:function(e,r,n){var t=n(29439),i=(n(72791),n(51691)),o=n(9505),a=n(23508),l=n(56096),c=n(87995),s=n(25469),d=n(80184);r.Z=function(e){var r=e.closeDeleteModalAndRefresh,n=e.deleteOpen,u=e.idp,p=e.idpType,f=(0,s.TL)(),h=(0,o.Z)((function(e){r(!0),f((0,c.cN)(!0===e.restart))}),(function(e){return f((0,c.Ih)(e))})),x=(0,t.Z)(h,2),m=x[0],g=x[1];if(!u)return null;var b="_"===u?"Default":u;return(0,d.jsx)(a.Z,{title:"Delete ".concat(b),confirmText:"Delete",isOpen:n,titleIcon:(0,d.jsx)(l.NvT,{}),isLoading:m,onConfirm:function(){g("DELETE","/api/v1/idp/".concat(p,"/").concat(u))},onClose:function(){return r(!1)},confirmButtonProps:{disabled:m},confirmationContent:(0,d.jsxs)(i.Z,{children:["Are you sure you want to delete IDP ",(0,d.jsx)("b",{children:b})," ","configuration? ",(0,d.jsx)("br",{})]})})}},18476:function(e,r,n){var t=n(4942),i=n(74165),o=n(15861),a=n(29439),l=n(1413),c=n(72791),s=n(11135),d=n(25787),u=n(64554),p=n(61889),f=n(23814),h=n(56096),x=n(21435),m=n(75952),g=n(57689),b=n(25469),v=n(87995),y=n(9505),Z=n(81207),D=n(74794),j=n(32291),k=n(84669),C=n(14917),E=n(51270),w=n(37516),S=n(45902),I=n(80184);r.Z=(0,d.Z)((function(e){return(0,s.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)({},f.DF),{},{formFieldRow:(0,l.Z)({},f.DF.formFieldRow)},f.oO),{},{pageContainer:{height:"100%"},screenTitle:{border:0,paddingTop:0}},f.Bw),f.qg),{},{capitalize:{textTransform:"capitalize"}},f.bp),f.Si),(0,f.Bz)(e.spacing(4))))}))((function(e){var r=e.classes,n=e.formFields,s=e.endpoint,d=e.backLink,f=e.header,P=e.idpType,_=e.icon,q=e.helpBox,B=(0,b.TL)(),N=(0,g.s0)(),A=(0,g.UO)().idpName,L=(0,c.useState)(!0),R=(0,a.Z)(L,2),O=R[0],T=R[1],M=(0,c.useState)(!1),U=(0,a.Z)(M,2),z=U[0],F=U[1],G=(0,c.useState)({}),W=(0,a.Z)(G,2),$=W[0],H=W[1],K=(0,c.useState)({}),V=(0,a.Z)(K,2),Y=V[0],J=V[1],X=(0,c.useState)({}),Q=(0,a.Z)(X,2),ee=Q[0],re=Q[1],ne=(0,c.useState)(!1),te=(0,a.Z)(ne,2),ie=te[0],oe=te[1],ae=(0,c.useState)(!1),le=(0,a.Z)(ae,2),ce=le[0],se=le[1],de=(0,y.Z)((function(e){B((0,v.cN)(!0===e.restart))}),(function(e){return B((0,v.Ih)(e))})),ue=(0,a.Z)(de,2),pe=ue[0],fe=ue[1],he=(0,y.Z)((function(e){F(!z),B((0,v.cN)(!0===e.restart))}),(function(e){B((0,v.Ih)(e))})),xe=(0,a.Z)(he,2),me=xe[0],ge=xe[1],be=function(){ie&&ve(ee),oe(!ie)},ve=function(e){var r={};e.info&&e.info.forEach((function(e){"enable"===e.key&&F("on"===e.value),r[e.key]=e.value})),H(r)};(0,c.useEffect)((function(){T(!0)}),[]),(0,c.useEffect)((function(){O&&Z.Z.invoke("GET","".concat(s).concat(A)).then((function(e){e&&(re(e),ve(e),function(e){var r={};e.info&&e.info.forEach((function(e){r[e.key]=e.value})),J(r)}(e)),T(!1)})).catch((function(e){B((0,v.Ih)(e)),T(!1)}))}),[B,O,A,s]);var ye=function(){for(var e=0,r=Object.entries(n);e<r.length;e++){var t=(0,a.Z)(r[e],2),i=t[0];if(t[1].required&&(void 0===$[i]||null===$[i]||""===$[i]))return!1}return!0},Ze=function(){H({})},De=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:se(!1),r&&N(d);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),je=function(e,r){return"toggle"===r.type?(0,I.jsx)(w.Z,{indicatorLabels:["Enabled","Disabled"],checked:"on"===$[e],value:"is-field-enabled",id:"is-field-enabled",name:"is-field-enabled",label:r.label,tooltip:r.tooltip,onChange:function(r){return H((0,l.Z)((0,l.Z)({},$),{},(0,t.Z)({},e,r.target.checked?"on":"off")))},description:"",disabled:!ie}):(0,I.jsx)(x.Z,{id:e,required:r.required,name:e,label:r.label,tooltip:r.tooltip,error:r.hasError($[e],ie),value:$[e]?$[e]:"",onChange:function(r){return H((0,l.Z)((0,l.Z)({},$),{},(0,t.Z)({},e,r.target.value)))},placeholder:r.placeholder,disabled:!ie,type:r.type})};return(0,I.jsxs)(p.ZP,{item:!0,xs:12,children:[ce&&A&&(0,I.jsx)(E.Z,{deleteOpen:ce,idp:A,idpType:P,closeDeleteModalAndRefresh:De}),(0,I.jsx)(j.Z,{label:(0,I.jsx)(k.Z,{to:d,label:f})}),(0,I.jsx)(D.Z,{className:r.pageContainer,children:(0,I.jsxs)(u.Z,{children:[(0,I.jsx)(C.Z,{classes:{screenTitle:r.screenTitle},icon:_,title:"_"===A?"Default":A,actions:(0,I.jsxs)(c.Fragment,{children:["_"!==A&&(0,I.jsx)(m.zx,{id:"delete-idp-config",onClick:function(){se(!0)},label:"Delete Configuration",icon:(0,I.jsx)(h.XHJ,{}),variant:"secondary"}),!ie&&(0,I.jsx)(m.zx,{id:"edit",type:"button",variant:"callAction",icon:(0,I.jsx)(h.dY8,{}),onClick:be,label:"Edit"}),(0,I.jsx)(m.zx,{id:"is-configuration-enabled",onClick:function(){return function(e){var r="enable=".concat(e?"on":"off");ge("PUT","".concat(s).concat(A),{input:r})}(!z)},label:z?"Disable":"Enable",disabled:me}),(0,I.jsx)(m.zx,{id:"refresh-idp-config",onClick:function(){return T(!0)},label:"Refresh",icon:(0,I.jsx)(h.DuK,{})})]})}),ie?(0,I.jsxs)(u.Z,{sx:{display:"grid",padding:"25px",gap:"25px",gridTemplateColumns:{md:"2fr 1.2fr",xs:"1fr"},border:"1px solid #eaeaea"},children:[(0,I.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){!function(e){e.preventDefault();for(var r="",t=0,i=Object.keys(n);t<i.length;t++){var o=i[t];($[o]||$[o]!==Y[o])&&(r+="".concat(o,"=").concat($[o]," "))}fe("PUT","".concat(s).concat(A),{input:r}),oe(!1)}(e)},children:(0,I.jsx)(p.ZP,{container:!0,item:!0,spacing:"20",sx:{marginTop:1},children:(0,I.jsxs)(p.ZP,{xs:12,item:!0,className:r.fieldBox,children:[Object.entries(n).map((function(e){var n=(0,a.Z)(e,2),t=n[0],i=n[1];return(0,I.jsx)(p.ZP,{item:!0,xs:12,className:r.formFieldRow,children:je(t,i)},t)})),(0,I.jsx)(p.ZP,{item:!0,xs:12,textAlign:"right",children:(0,I.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",marginTop:"20px",gap:"15px"},children:[ie&&(0,I.jsx)(m.zx,{id:"clear",type:"button",variant:"regular",onClick:Ze,label:"Clear"}),ie&&(0,I.jsx)(m.zx,{id:"cancel",type:"button",variant:"regular",onClick:be,label:"Cancel"}),ie&&(0,I.jsx)(m.zx,{id:"save-key",type:"submit",variant:"callAction",color:"primary",disabled:O||pe||!ye(),label:"Save"})]})})]})})}),q]}):(0,I.jsx)(u.Z,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"2fr 1fr"},gridAutoFlow:{xs:"dense",sm:"row"},gap:3,padding:"15px",border:"1px solid #eaeaea"},children:Object.entries(n).map((function(e){var r=(0,a.Z)(e,2),n=r[0],t=r[1];return(0,I.jsx)(S.Z,{label:t.label,value:$[n]?$[n]:""},n)}))})]})})]})}))},79979:function(e,r,n){n.d(r,{DY:function(){return c},Si:function(){return a},f4:function(){return l},iR:function(){return s}});var t=n(50521),i=n(56096),o=n(80184),a=[{text:"MinIO supports using an Active Directory or LDAP (AD/LDAP) service for external management of user identities. Configuring an external IDentity Provider (IDP) enables Single-Sign On (SSO) workflows, where applications authenticate against the external IDP before accessing MinIO.",icon:(0,o.jsx)(t.Z,{}),iconDescription:"Create Configurations"},{text:"MinIO queries the configured Active Directory / LDAP server to verify the credentials specified by the application and optionally return a list of groups in which the user has membership. MinIO supports two modes (Lookup-Bind Mode and Username-Bind Mode) for performing these queries",icon:null,iconDescription:""},{text:"MinIO recommends using Lookup-Bind mode as the preferred method for verifying AD/LDAP credentials. Username-Bind mode is a legacy method retained for backwards compatibility only.",icon:null,iconDescription:""}],l=[{text:"MinIO supports using an OpenID Connect (OIDC) compatible IDentity Provider (IDP) such as Okta, KeyCloak, Dex, Google, or Facebook for external management of user identities.",icon:(0,o.jsx)(i.mBM,{}),iconDescription:"Create Configurations"},{text:"Configuring an external IDP enables Single-Sign On workflows, where applications authenticate against the external IDP before accessing MinIO.",icon:null,iconDescription:""}],c={config_url:{required:!0,hasError:function(e,r){return!e&&r?"Config URL is required":""},label:"Config URL",tooltip:"Config URL for identity provider configuration",placeholder:"https://identity-provider-url/.well-known/openid-configuration",type:"text"},client_id:{required:!0,hasError:function(e,r){return!e&&r?"Client ID is required":""},label:"Client ID",tooltip:"Identity provider Client ID",placeholder:"Enter Client ID",type:"text"},client_secret:{required:!0,hasError:function(e,r){return!e&&r?"Client Secret is required":""},label:"Client Secret",tooltip:"Identity provider Client Secret",placeholder:"Enter Client Secret",type:"password"},claim_name:{required:!1,label:"Claim Name",tooltip:"Claim from which MinIO will read the policy or role to use",placeholder:"Enter Claim Name",type:"text",hasError:function(e,r){return""}},display_name:{required:!1,label:"Display Name",tooltip:"",placeholder:"Enter Display Name",type:"text",hasError:function(e,r){return""}},claim_prefix:{required:!1,label:"Claim Prefix",tooltip:"",placeholder:"Enter Claim Prefix",type:"text",hasError:function(e,r){return""}},scopes:{required:!1,label:"Scopes",tooltip:"",placeholder:"openid,profile,email",type:"text",hasError:function(e,r){return""}},redirect_uri:{required:!1,label:"Redirect URI",tooltip:"",placeholder:"https://console-endpoint-url/oauth_callback",type:"text",hasError:function(e,r){return""}},role_policy:{required:!1,label:"Role Policy",tooltip:"",placeholder:"readonly",type:"text",hasError:function(e,r){return""}},claim_userinfo:{required:!1,label:"Claim User Info",tooltip:"",placeholder:"Claim User Info",type:"toggle",hasError:function(e,r){return""}},redirect_uri_dynamic:{required:!1,label:"Redirect URI Dynamic",tooltip:"",placeholder:"Redirect URI Dynamic",type:"toggle",hasError:function(e,r){return""}}},s={server_addr:{required:!0,hasError:function(e,r){return!e&&r?"Server Address is required":""},label:"Server Address",tooltip:'AD/LDAP server address e.g. "myldapserver.com:636"',placeholder:"myldapserver.com:636",type:"text"},lookup_bind_dn:{required:!0,hasError:function(e,r){return!e&&r?"Lookup Bind DN is required":""},label:"Lookup Bind DN",tooltip:"DN for LDAP read-only service account used to perform DN and group lookups",placeholder:"cn=admin,dc=min,dc=io",type:"text"},lookup_bind_password:{required:!0,hasError:function(e,r){return!e&&r?"Lookup Bind Password is required":""},label:"Lookup Bind Password",tooltip:"Password for LDAP read-only service account used to perform DN and group lookups",placeholder:"admin",type:"password"},user_dn_search_base_dn:{required:!0,hasError:function(e,r){return!e&&r?"User DN Search Base DN is required":""},label:"User DN Search Base",tooltip:"",placeholder:"DC=example,DC=net",type:"text"},user_dn_search_filter:{required:!0,hasError:function(e,r){return!e&&r?"User DN Search Filter is required":""},label:"User DN Search Filter",tooltip:"",placeholder:"(sAMAcountName=%s)",type:"text"},display_name:{required:!1,label:"Display Name",tooltip:"",placeholder:"Enter Display Name",type:"text",hasError:function(e,r){return""}},group_search_base_dn:{required:!1,hasError:function(e,r){return""},label:"Group Search Base DN",tooltip:"",placeholder:"ou=swengg,dc=min,dc=io",type:"text"},group_search_filter:{required:!1,hasError:function(e,r){return""},label:"Group Search Filter",tooltip:"",placeholder:"(&(objectclass=groupofnames)(member=%d))",type:"text"}}},50521:function(e,r,n){var t=n(64836);r.Z=void 0;var i=t(n(45649)),o=n(80184),a=(0,i.default)((0,o.jsx)("path",{d:"M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"}),"Login");r.Z=a},53767:function(e,r,n){var t=n(4942),i=n(63366),o=n(87462),a=n(72791),l=n(51184),c=n(45682),s=n(78519),d=n(82466),u=n(66934),p=n(31402),f=n(80184),h=["component","direction","spacing","divider","children"];function x(e,r){var n=a.Children.toArray(e).filter(Boolean);return n.reduce((function(e,t,i){return e.push(t),i<n.length-1&&e.push(a.cloneElement(r,{key:"separator-".concat(i)})),e}),[])}var m=(0,u.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,r){return[r.root]}})((function(e){var r=e.ownerState,n=e.theme,i=(0,o.Z)({display:"flex",flexDirection:"column"},(0,l.k9)({theme:n},(0,l.P$)({values:r.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(r.spacing){var a=(0,c.hB)(n),s=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof r.spacing&&null!=r.spacing[n]||"object"===typeof r.direction&&null!=r.direction[n])&&(e[n]=!0),e}),{}),u=(0,l.P$)({values:r.direction,base:s}),p=(0,l.P$)({values:r.spacing,base:s});"object"===typeof u&&Object.keys(u).forEach((function(e,r,n){if(!u[e]){var t=r>0?u[n[r-1]]:"column";u[e]=t}}));i=(0,d.Z)(i,(0,l.k9)({theme:n},p,(function(e,n){return{"& > :not(style) + :not(style)":(0,t.Z)({margin:0},"margin".concat((i=n?u[n]:r.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i])),(0,c.NA)(a,e))};var i})))}return i=(0,l.dt)(n.breakpoints,i)})),g=a.forwardRef((function(e,r){var n=(0,p.Z)({props:e,name:"MuiStack"}),t=(0,s.Z)(n),a=t.component,l=void 0===a?"div":a,c=t.direction,d=void 0===c?"column":c,u=t.spacing,g=void 0===u?0:u,b=t.divider,v=t.children,y=(0,i.Z)(t,h),Z={direction:d,spacing:g};return(0,f.jsx)(m,(0,o.Z)({as:l,ownerState:Z,ref:r},y,{children:b?x(v,b):v}))}));r.Z=g}}]);
//# sourceMappingURL=7873.0f0682a9.chunk.js.map