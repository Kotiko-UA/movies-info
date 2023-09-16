/*! For license information please see 168.5948f616.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{922:function(t,r,e){e.r(r),e.d(r,{default:function(){return S}});var n,o,i,a,c,u,s,l,f,h,p=e(861),d=e(439),v=e(242),y=e(791),g=e(689),m=e(168),w=e(87),x=e(867),b=(0,x.default)(w.rU)(n||(n=(0,m.Z)(["\n  display: block;\n  padding: 8px 16px;\n  font-size: 16px;\n  color: orange;\n  font-weight: 700;\n"]))),L=x.default.div(o||(o=(0,m.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 4px 15px;\n"]))),j=x.default.div(i||(i=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),E=x.default.h1(a||(a=(0,m.Z)(["\n  color: blue;\n  margin-bottom: 14px;\n"]))),Z=x.default.span(c||(c=(0,m.Z)(["\n  margin-right: auto;\n  margin-bottom: 14px;\n  padding: 20px;\n  display: block;\n  font-size: 32px;\n  font-weight: 700;\n  color: orange;\n"]))),_=x.default.h2(u||(u=(0,m.Z)(["\n  font-size: 20px;\n  color: blue;\n"]))),O=x.default.p(s||(s=(0,m.Z)(["\n  color: #0089ff;\n"]))),k=x.default.div(l||(l=(0,m.Z)(["\n  font-size: 20px;\n  color: red;\n"]))),G=x.default.ul(f||(f=(0,m.Z)(["\n  padding: 8px 16px;\n  display: flex;\n  gap: 24px;\n"]))),N=(0,x.default)(w.OL)(h||(h=(0,m.Z)(["\n  font-size: 20px;\n  color: blue;\n  &.active {\n    color: orange;\n  }\n  &:hover {\n    color: orange;\n  }\n"]))),I=e(184);function P(){P=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof y?r:y,a=Object.create(i.prototype),c=new G(n||[]);return o(a,"_invoke",{value:Z(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var h="suspendedStart",p="executing",d="completed",v={};function y(){}function g(){}function m(){}var w={};s(w,a,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(N([])));b&&b!==e&&n.call(b,a)&&(w=b);var L=m.prototype=y.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function Z(r,e,n){var o=h;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function _(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,_(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return g.prototype=m,o(L,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=s(m,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},j(E.prototype),s(E.prototype,c,(function(){return this})),r.AsyncIterator=E,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(L),s(L,u,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=N,G.prototype={constructor:G,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:N(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),v}},r}var S=function(){var t,r,e=(0,g.UO)().movieId,n=(0,y.useState)(null),o=(0,d.Z)(n,2),i=o[0],a=o[1],c=(0,y.useState)(!0),u=(0,d.Z)(c,2),s=u[0],l=u[1],f=(0,g.TH)(),h=null!==i&&void 0!==i&&i.poster_path?"https://image.tmdb.org/t/p/w500".concat(i.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";return(0,y.useEffect)((function(){var t;e&&function(){(t=t||(0,p.Z)(P().mark((function t(){var r;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,v.Pg)(e);case 3:r=t.sent,a(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),l(!1);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}()}),[e]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(b,{to:null!==(t=null===f||void 0===f||null===(r=f.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/",children:"Go back"}),i&&(0,I.jsxs)(L,{children:[(0,I.jsx)("img",{width:300,height:450,src:h,alt:"poster"}),(0,I.jsxs)(j,{children:[(0,I.jsx)(E,{children:i.title||i.name}),(0,I.jsx)(Z,{children:i.vote_average}),(0,I.jsx)(_,{children:"Overwiew"}),(0,I.jsx)(O,{children:i.overview}),(0,I.jsx)(_,{children:"Genres"}),(0,I.jsx)(O,{children:i.genres&&i.genres.map((function(t){return t.name})).join(", ")})]})]}),i&&(0,I.jsxs)(G,{children:[(0,I.jsx)("li",{children:(0,I.jsx)(N,{to:"/movies/".concat(e,"/cast"),children:"Cast"})}),(0,I.jsx)("li",{children:(0,I.jsx)(N,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]}),!s&&(0,I.jsx)(k,{children:"Wow, something happened, press 'Go back' and try another movie!"}),(0,I.jsx)(y.Suspense,{fallback:(0,I.jsx)("div",{children:"Loading..."}),children:(0,I.jsx)(g.j3,{})})]})}},242:function(t,r,e){e.d(r,{Pg:function(){return h},Pt:function(){return v},rj:function(){return f},tx:function(){return d},zv:function(){return p}});var n,o,i,a,c,u=e(861),s=e(243);function l(){l=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:_(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",d="executing",v="completed",y={};function g(){}function m(){}function w(){}var x={};s(x,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(I([])));L&&L!==e&&n.call(L,a)&&(x=L);var j=w.prototype=g.prototype=Object.create(x);function E(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function Z(t,r){function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function _(r,e,n){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=h(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=h(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function I(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(j,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=s(w,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},E(Z.prototype),s(Z.prototype,c,(function(){return this})),r.AsyncIterator=Z,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new Z(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(j),s(j,u,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=I,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:I(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}s.Z.defaults.baseURL="https://api.themoviedb.org/3/";s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWNjZGY4ODIzZjQxMWIxZmU3YzgzZDVhYWFiNWVjMiIsInN1YiI6IjY1MDQ0NGM2ZmZjOWRlMGVkZWQ1ZDA0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-1bOyX5jplIjl0Aftwpu8qNZo3aCSMsHeVRvJDduVjA";var f=function(){return(n=n||(0,u.Z)(l().mark((function t(){var r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("trending/all/day");case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)},h=function(t){return(o=o||(0,u.Z)(l().mark((function t(r){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(r));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)},p=function(t){return(i=i||(0,u.Z)(l().mark((function t(r){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(r,"/credits"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)},d=function(t){return(a=a||(0,u.Z)(l().mark((function t(r){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(r,"/reviews"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)},v=function(t){return(c=c||(0,u.Z)(l().mark((function t(r){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("search/movie?query=".concat(r));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=168.5948f616.chunk.js.map