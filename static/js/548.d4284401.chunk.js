/*! For license information please see 548.d4284401.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[548],{548:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(861),o=r(439),i=r(791),a=r(933),c=r(689),u=r(87),s={titleFilm:"MovieDetails_titleFilm__ZYepY",boxText:"MovieDetails_boxText__JPD3Z",textOverviev:"MovieDetails_textOverviev__PZ3Du",img:"MovieDetails_img__WDDjf",linkDetail:"MovieDetails_linkDetail__KX9aD",castBox:"MovieDetails_castBox__O+S82",goBack:"MovieDetails_goBack__14tEM"},l=r(184);function h(){h=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(D){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new j(o||[]);return n(a,"_invoke",{value:_(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(D){return{type:"throw",arg:D}}}t.wrap=s;var f={};function p(){}function v(){}function d(){}var y={};u(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==e&&r.call(m,i)&&(y=m);var w=d.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function _(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return v.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),u(w,c,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var f=function(){var t,e,r=(0,i.useState)(null),f=(0,o.Z)(r,2),p=f[0],v=f[1],d=c.TH,y=(0,c.UO)().id,g=(0,i.useRef)(null!==(t=null===(e=d.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/");return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(h().mark((function t(){var e;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,a.Y5)(y);case 3:e=t.sent,v(e.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error fetching movie details:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[y]),p?(0,l.jsxs)("div",{children:[(0,l.jsx)(u.rU,{className:s.goBack,to:g.current,children:"go back"}),(0,l.jsx)("h2",{className:s.titleFilm,children:p.title}),(0,l.jsx)("img",{className:s.img,src:"https://image.tmdb.org/t/p/w200".concat(p.poster_path),alt:p.overview}),(0,l.jsx)("div",{className:s.boxText,children:p.genres.map((function(t){return(0,l.jsx)("p",{className:s.text,children:t.name},t.id)}))}),(0,l.jsx)("p",{className:s.textOverviev,children:p.overview}),(0,l.jsxs)("div",{className:s.castBox,children:[(0,l.jsx)(u.rU,{className:s.linkDetail,to:"/movieDetails/".concat(y,"/cast"),children:"Cast"}),(0,l.jsx)(u.rU,{className:s.linkDetail,to:"/movieDetails/".concat(y,"/reviews"),children:"Reviews"})]}),(0,l.jsx)(c.j3,{})]}):(0,l.jsx)("div",{children:"Loading..."})}},933:function(t,e,r){r.d(e,{Hx:function(){return h},Y5:function(){return s},k1:function(){return c},vw:function(){return u},xc:function(){return l}});var n=r(861),o=r(243);function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(D){s=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new j(o||[]);return n(a,"_invoke",{value:_(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(D){return{type:"throw",arg:D}}}t.wrap=l;var f={};function p(){}function v(){}function d(){}var y={};s(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==e&&r.call(m,a)&&(y=m);var w=d.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,i,a,c){var u=h(t[n],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function _(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return v.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=s(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var a="ec45ef77891571da539171d6a0a07d2c",c=function(){var t=(0,n.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get(" https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0444\u0456\u043b\u044c\u043c\u0456\u0432:",t.t0),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&query=").concat(e));case 3:return r=t.sent,t.abrupt("return",r);case 7:return t.prev=7,t.t0=t.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0444\u0456\u043b\u044c\u043c\u0456\u0432:",t.t0),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a));case 3:return r=t.sent,t.abrupt("return",r);case 7:return t.prev=7,t.t0=t.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0444\u0456\u043b\u044c\u043c\u0456\u0432:",t.t0),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0444\u0456\u043b\u044c\u043c\u0456\u0432:",t.t0),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0444\u0456\u043b\u044c\u043c\u0456\u0432:",t.t0),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=548.d4284401.chunk.js.map