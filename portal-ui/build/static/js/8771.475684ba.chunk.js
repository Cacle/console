"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[8771],{64163:function(e,n,t){var i=t(1413),s=t(72791),l=t(61889),c=t(11135),r=t(25787),a=t(23814),o=t(80184);n.Z=(0,r.Z)((function(e){return(0,c.Z)((0,i.Z)({},a.xx))}))((function(e){var n=e.classes,t=e.label,i=void 0===t?"":t,c=e.content,r=e.multiLine,a=void 0!==r&&r;return(0,o.jsx)(s.Fragment,{children:(0,o.jsxs)(l.ZP,{className:n.prefinedContainer,children:[""!==i&&(0,o.jsx)(l.ZP,{item:!0,xs:12,className:n.predefinedTitle,children:i}),(0,o.jsx)(l.ZP,{item:!0,xs:12,className:n.predefinedList,children:(0,o.jsx)(l.ZP,{item:!0,xs:12,className:a?n.innerContentMultiline:n.innerContent,children:c})})]})})}))},39134:function(e,n,t){t.r(n);var i=t(29439),s=t(1413),l=t(72791),c=t(60364),r=t(26181),a=t.n(r),o=t(11135),u=t(25787),d=t(36151),Z=t(40986),x=t(61889),p=t(23814),m=t(42649),f=t(56028),h=t(81207),j=t(58400),v=t(64163),b=t(80184),y={setModalErrorSnackMessage:m.zb},P=(0,c.$j)(null,y);n.default=(0,u.Z)((function(e){return(0,o.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},p.oO),p.bK),{},{tableBlock:(0,s.Z)((0,s.Z)({},p.VX.tableBlock),{},{marginTop:15}),buttonContainer:{textAlign:"right",marginTop:".9rem"}}))}))(P((function(e){var n=e.classes,t=e.closeModalAndRefresh,s=e.selectedUser,c=e.selectedGroup,r=e.setModalErrorSnackMessage,o=e.open,u=(0,l.useState)(!1),p=(0,i.Z)(u,2),m=p[0],y=p[1],P=(0,l.useState)([]),k=(0,i.Z)(P,2),C=k[0],g=k[1],S=(0,l.useState)([]),N=(0,i.Z)(S,2),M=N[0],T=N[1];(0,l.useEffect)((function(){if(o){if(null!==c)return void(c&&h.Z.invoke("GET","/api/v1/group?name=".concat(encodeURI(c))).then((function(e){var n=a()(e,"policy","");g(n.split(",")),T(n.split(","))})).catch((function(e){r(e),y(!1)})));var e=a()(s,"policy",[]);g(e),T(e)}}),[o,c,s]);var E=a()(s,"accessKey","");return(0,b.jsxs)(f.Z,{onClose:function(){t()},modalOpen:o,title:"Set Policies",children:[(0,b.jsxs)(x.ZP,{container:!0,children:[(0,b.jsx)(x.ZP,{item:!0,xs:12,children:(0,b.jsx)(v.Z,{label:"Selected ".concat(null!==c?"Group":"User"),content:null!==c?c:E})}),(0,b.jsx)(x.ZP,{item:!0,xs:12,children:(0,b.jsx)(v.Z,{label:"Current Policy",content:C.join(", ")})}),(0,b.jsx)(x.ZP,{item:!0,xs:12,children:(0,b.jsx)("div",{className:n.tableBlock,children:(0,b.jsx)(j.Z,{selectedPolicy:M,setSelectedPolicy:T})})})]}),(0,b.jsxs)(x.ZP,{item:!0,xs:12,className:n.buttonContainer,children:[(0,b.jsx)(d.Z,{type:"button",variant:"outlined",color:"primary",className:n.spacerRight,onClick:function(){T(C)},children:"Reset"}),(0,b.jsx)(d.Z,{type:"button",variant:"contained",color:"primary",disabled:m,onClick:function(){var e="user",n=null;null!==c?(e="group",n=c):null!==s&&(n=s.accessKey),y(!0),h.Z.invoke("PUT","/api/v1/set-policy",{name:M,entityName:n,entityType:e}).then((function(){y(!1),t()})).catch((function(e){y(!1),r(e)}))},children:"Save"})]}),m&&(0,b.jsx)(x.ZP,{item:!0,xs:12,children:(0,b.jsx)(Z.Z,{})})]})})))}}]);
//# sourceMappingURL=8771.475684ba.chunk.js.map