"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7893],{23688:function(t,e,r){function n(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==t&&void 0!==t&&this.setState(t)}function o(t){this.setState(function(e){var r=this.constructor.getDerivedStateFromProps(t,e);return null!==r&&void 0!==r?r:null}.bind(this))}function i(t,e){try{var r=this.props,n=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,n)}finally{this.props=r,this.state=n}}function a(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof t.getDerivedStateFromProps&&"function"!==typeof e.getSnapshotBeforeUpdate)return t;var r=null,a=null,l=null;if("function"===typeof e.componentWillMount?r="componentWillMount":"function"===typeof e.UNSAFE_componentWillMount&&(r="UNSAFE_componentWillMount"),"function"===typeof e.componentWillReceiveProps?a="componentWillReceiveProps":"function"===typeof e.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"===typeof e.componentWillUpdate?l="componentWillUpdate":"function"===typeof e.UNSAFE_componentWillUpdate&&(l="UNSAFE_componentWillUpdate"),null!==r||null!==a||null!==l){var c=t.displayName||t.name,s="function"===typeof t.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+c+" uses "+s+" but also contains the following legacy lifecycles:"+(null!==r?"\n  "+r:"")+(null!==a?"\n  "+a:"")+(null!==l?"\n  "+l:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof t.getDerivedStateFromProps&&(e.componentWillMount=n,e.componentWillReceiveProps=o),"function"===typeof e.getSnapshotBeforeUpdate){if("function"!==typeof e.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=i;var u=e.componentDidUpdate;e.componentDidUpdate=function(t,e,r){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:r;u.call(this,t,e,n)}}return t}r.r(e),r.d(e,{polyfill:function(){return a}}),n.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},82839:function(t,e,r){r.d(e,{q:function(){return P}});var n=r(74786),o=r.n(n),i=r(72791),a=r(70587),l=r(77612),c=["x1","y1","x2","y2","key"];function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},u.apply(this,arguments)}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){w(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,O(n.key),n)}}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=b(t);if(e){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g(this,r)}}function g(t,e){if(e&&("object"===s(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}function w(t,e,r){return(e=O(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===s(e)?e:String(e)}var P=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(f,t);var e,r,n,s=v(f);function f(){return y(this,f),s.apply(this,arguments)}return e=f,n=[{key:"renderLineItem",value:function(t,e){var r;if(i.isValidElement(t))r=i.cloneElement(t,e);else if(o()(t))r=t(e);else{var n=e.x1,a=e.y1,s=e.x2,f=e.y2,h=e.key,y=p(e,c);r=i.createElement("line",u({},(0,l.L6)(y),{x1:n,y1:a,x2:s,y2:f,fill:"none",key:h}))}return r}}],(r=[{key:"renderHorizontal",value:function(t){var e=this,r=this.props,n=r.x,o=r.width,a=r.horizontal;if(!t||!t.length)return null;var l=t.map((function(t,r){var i=h(h({},e.props),{},{x1:n,y1:t,x2:n+o,y2:t,key:"line-".concat(r),index:r});return f.renderLineItem(a,i)}));return i.createElement("g",{className:"recharts-cartesian-grid-horizontal"},l)}},{key:"renderVertical",value:function(t){var e=this,r=this.props,n=r.y,o=r.height,a=r.vertical;if(!t||!t.length)return null;var l=t.map((function(t,r){var i=h(h({},e.props),{},{x1:t,y1:n,x2:t,y2:n+o,key:"line-".concat(r),index:r});return f.renderLineItem(a,i)}));return i.createElement("g",{className:"recharts-cartesian-grid-vertical"},l)}},{key:"renderVerticalStripes",value:function(t){var e=this.props.verticalFill;if(!e||!e.length)return null;var r=this.props,n=r.fillOpacity,o=r.x,a=r.y,l=r.width,c=r.height,s=t.map((function(t){return Math.round(t+o-o)})).sort((function(t,e){return t-e}));o!==s[0]&&s.unshift(0);var u=s.map((function(t,r){var u=s[r+1]?s[r+1]-t:o+l-t;if(u<=0)return null;var p=r%e.length;return i.createElement("rect",{key:"react-".concat(r),x:t,y:a,width:u,height:c,stroke:"none",fill:e[p],fillOpacity:n,className:"recharts-cartesian-grid-bg"})}));return i.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},u)}},{key:"renderHorizontalStripes",value:function(t){var e=this.props.horizontalFill;if(!e||!e.length)return null;var r=this.props,n=r.fillOpacity,o=r.x,a=r.y,l=r.width,c=r.height,s=t.map((function(t){return Math.round(t+a-a)})).sort((function(t,e){return t-e}));a!==s[0]&&s.unshift(0);var u=s.map((function(t,r){var u=s[r+1]?s[r+1]-t:a+c-t;if(u<=0)return null;var p=r%e.length;return i.createElement("rect",{key:"react-".concat(r),y:t,x:o,height:u,width:l,stroke:"none",fill:e[p],fillOpacity:n,className:"recharts-cartesian-grid-bg"})}));return i.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},u)}},{key:"renderBackground",value:function(){var t=this.props.fill;if(!t||"none"===t)return null;var e=this.props,r=e.fillOpacity,n=e.x,o=e.y,a=e.width,l=e.height;return i.createElement("rect",{x:n,y:o,width:a,height:l,stroke:"none",fill:t,fillOpacity:r,className:"recharts-cartesian-grid-bg"})}},{key:"render",value:function(){var t=this.props,e=t.x,r=t.y,n=t.width,l=t.height,c=t.horizontal,s=t.vertical,u=t.horizontalCoordinatesGenerator,p=t.verticalCoordinatesGenerator,f=t.xAxis,h=t.yAxis,y=t.offset,d=t.chartWidth,m=t.chartHeight;if(!(0,a.hj)(n)||n<=0||!(0,a.hj)(l)||l<=0||!(0,a.hj)(e)||e!==+e||!(0,a.hj)(r)||r!==+r)return null;var v=this.props,g=v.horizontalPoints,b=v.verticalPoints;return g&&g.length||!o()(u)||(g=u({yAxis:h,width:d,height:m,offset:y})),b&&b.length||!o()(p)||(b=p({xAxis:f,width:d,height:m,offset:y})),i.createElement("g",{className:"recharts-cartesian-grid"},this.renderBackground(),c&&this.renderHorizontal(g),s&&this.renderVertical(b),c&&this.renderHorizontalStripes(g),s&&this.renderVerticalStripes(b))}}])&&d(e.prototype,r),n&&d(e,n),Object.defineProperty(e,"prototype",{writable:!1}),f}(i.PureComponent);w(P,"displayName","CartesianGrid"),w(P,"defaultProps",{horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]})},90466:function(t,e,r){r.d(e,{K:function(){return n}});var n=function(){return null};n.displayName="XAxis",n.defaultProps={allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",domain:[0,"auto"],padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0}},12891:function(t,e,r){r.d(e,{B:function(){return n}});var n=function(){return null};n.displayName="YAxis",n.defaultProps={allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",domain:[0,"auto"],padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1}}}]);
//# sourceMappingURL=7893.86a6a64a.chunk.js.map