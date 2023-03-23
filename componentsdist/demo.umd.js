!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vui=e():t.vui=e()}(self,(function(){return function(){"use strict";var t={68:function(t,e){e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[t,r]of e)n[t]=r;return n}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,n),s.exports}n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return function(){function t(t,e){const n=Object.create(null),r=t.split(",");for(let t=0;t<r.length;t++)n[r[t]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}function e(t){if(v(t)){const n={};for(let r=0;r<t.length;r++){const o=t[r],s=m(o)?i(o):e(o);if(s)for(const t in s)n[t]=s[t]}return n}return m(t)||x(t)?t:void 0}n.r(r),n.d(r,{default:function(){return Ke}});const o=/;(?![^(]*\))/g,s=/:([^]+)/,c=/\/\*.*?\*\//gs;function i(t){const e={};return t.replace(c,"").split(o).forEach((t=>{if(t){const n=t.split(s);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function l(t){let e="";if(m(t))e=t;else if(v(t))for(let n=0;n<t.length;n++){const r=l(t[n]);r&&(e+=r+" ")}else if(x(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const u={},a=[],f=()=>{},p=/^on[^a-z]/,h=t=>p.test(t),d=Object.assign,_=Object.prototype.hasOwnProperty,g=(t,e)=>_.call(t,e),v=Array.isArray,y=t=>"[object Map]"===O(t),b=t=>"function"==typeof t,m=t=>"string"==typeof t,w=t=>"symbol"==typeof t,x=t=>null!==t&&"object"==typeof t,S=Object.prototype.toString,O=t=>S.call(t),j=t=>m(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,k=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},R=/-(\w)/g,C=(k((t=>t.replace(R,((t,e)=>e?e.toUpperCase():"")))),/\B([A-Z])/g),P=(k((t=>t.replace(C,"-$1").toLowerCase())),k((t=>t.charAt(0).toUpperCase()+t.slice(1)))),F=(k((t=>t?`on${P(t)}`:"")),(t,e)=>!Object.is(t,e));const E=t=>{const e=new Set(t);return e.w=0,e.n=0,e},M=t=>(t.w&T)>0,$=t=>(t.n&T)>0,I=new WeakMap;let A,N=0,T=1;const W=Symbol(""),U=Symbol("");class z{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,function(t,e){e&&e.active&&e.effects.push(t)}(this,n)}run(){if(!this.active)return this.fn();let t=A,e=B;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=A,A=this,B=!0,T=1<<++N,N<=30?(({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=T})(this):V(this),this.fn()}finally{N<=30&&(t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const o=e[r];M(o)&&!$(o)?o.delete(t):e[n++]=o,o.w&=~T,o.n&=~T}e.length=n}})(this),T=1<<--N,A=this.parent,B=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){A===this?this.deferStop=!0:this.active&&(V(this),this.onStop&&this.onStop(),this.active=!1)}}function V(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let B=!0;const H=[];function Z(){H.push(B),B=!1}function K(){const t=H.pop();B=void 0===t||t}function L(t,e,n){if(B&&A){let e=I.get(t);e||I.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=E()),function(t,e){let n=!1;N<=30?$(t)||(t.n|=T,n=!M(t)):n=!t.has(A),n&&(t.add(A),A.deps.push(t))}(r)}}function D(t,e,n,r,o,s){const c=I.get(t);if(!c)return;let i=[];if("clear"===e)i=[...c.values()];else if("length"===n&&v(t)){const t=(t=>{const e=parseFloat(t);return isNaN(e)?t:e})(r);c.forEach(((e,n)=>{("length"===n||n>=t)&&i.push(e)}))}else switch(void 0!==n&&i.push(c.get(n)),e){case"add":v(t)?j(n)&&i.push(c.get("length")):(i.push(c.get(W)),y(t)&&i.push(c.get(U)));break;case"delete":v(t)||(i.push(c.get(W)),y(t)&&i.push(c.get(U)));break;case"set":y(t)&&i.push(c.get(W))}if(1===i.length)i[0]&&q(i[0]);else{const t=[];for(const e of i)e&&t.push(...e);q(E(t))}}function q(t,e){const n=v(t)?t:[...t];for(const t of n)t.computed&&G(t);for(const t of n)t.computed||G(t)}function G(t,e){(t!==A||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const J=t("__proto__,__v_isRef,__isVue"),Q=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(w)),X=nt(),Y=nt(!0),tt=et();function et(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Tt(this);for(let t=0,e=this.length;t<e;t++)L(n,0,t+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Tt)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){Z();const n=Tt(this)[e].apply(this,t);return K(),n}})),t}function nt(t=!1,e=!1){return function(n,r,o){if("__v_isReactive"===r)return!t;if("__v_isReadonly"===r)return t;if("__v_isShallow"===r)return e;if("__v_raw"===r&&o===(t?e?Pt:Ct:e?Rt:kt).get(n))return n;const s=v(n);if(!t&&s&&g(tt,r))return Reflect.get(tt,r,o);const c=Reflect.get(n,r,o);return(w(r)?Q.has(r):J(r))?c:(t||L(n,0,r),e?c:Vt(c)?s&&j(r)?c:c.value:x(c)?t?Et(c):Ft(c):c)}}function rt(t=!1){return function(e,n,r,o){let s=e[n];if(It(s)&&Vt(s)&&!Vt(r))return!1;if(!t&&(At(r)||It(r)||(s=Tt(s),r=Tt(r)),!v(e)&&Vt(s)&&!Vt(r)))return s.value=r,!0;const c=v(e)&&j(n)?Number(n)<e.length:g(e,n),i=Reflect.set(e,n,r,o);return e===Tt(o)&&(c?F(r,s)&&D(e,"set",n,r):D(e,"add",n,r)),i}}const ot={get:X,set:rt(),deleteProperty:function(t,e){const n=g(t,e),r=(t[e],Reflect.deleteProperty(t,e));return r&&n&&D(t,"delete",e,void 0),r},has:function(t,e){const n=Reflect.has(t,e);return w(e)&&Q.has(e)||L(t,0,e),n},ownKeys:function(t){return L(t,0,v(t)?"length":W),Reflect.ownKeys(t)}},st={get:Y,set(t,e){return!0},deleteProperty(t,e){return!0}},ct=t=>t,it=t=>Reflect.getPrototypeOf(t);function lt(t,e,n=!1,r=!1){const o=Tt(t=t.__v_raw),s=Tt(e);n||(e!==s&&L(o,0,e),L(o,0,s));const{has:c}=it(o),i=r?ct:n?zt:Ut;return c.call(o,e)?i(t.get(e)):c.call(o,s)?i(t.get(s)):void(t!==o&&t.get(e))}function ut(t,e=!1){const n=this.__v_raw,r=Tt(n),o=Tt(t);return e||(t!==o&&L(r,0,t),L(r,0,o)),t===o?n.has(t):n.has(t)||n.has(o)}function at(t,e=!1){return t=t.__v_raw,!e&&L(Tt(t),0,W),Reflect.get(t,"size",t)}function ft(t){t=Tt(t);const e=Tt(this);return it(e).has.call(e,t)||(e.add(t),D(e,"add",t,t)),this}function pt(t,e){e=Tt(e);const n=Tt(this),{has:r,get:o}=it(n);let s=r.call(n,t);s||(t=Tt(t),s=r.call(n,t));const c=o.call(n,t);return n.set(t,e),s?F(e,c)&&D(n,"set",t,e):D(n,"add",t,e),this}function ht(t){const e=Tt(this),{has:n,get:r}=it(e);let o=n.call(e,t);o||(t=Tt(t),o=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return o&&D(e,"delete",t,void 0),s}function dt(){const t=Tt(this),e=0!==t.size,n=t.clear();return e&&D(t,"clear",void 0,void 0),n}function _t(t,e){return function(n,r){const o=this,s=o.__v_raw,c=Tt(s),i=e?ct:t?zt:Ut;return!t&&L(c,0,W),s.forEach(((t,e)=>n.call(r,i(t),i(e),o)))}}function gt(t,e,n){return function(...r){const o=this.__v_raw,s=Tt(o),c=y(s),i="entries"===t||t===Symbol.iterator&&c,l="keys"===t&&c,u=o[t](...r),a=n?ct:e?zt:Ut;return!e&&L(s,0,l?U:W),{next(){const{value:t,done:e}=u.next();return e?{value:t,done:e}:{value:i?[a(t[0]),a(t[1])]:a(t),done:e}},[Symbol.iterator](){return this}}}}function vt(t){return function(...e){return"delete"!==t&&this}}function yt(){const t={get(t){return lt(this,t)},get size(){return at(this)},has:ut,add:ft,set:pt,delete:ht,clear:dt,forEach:_t(!1,!1)},e={get(t){return lt(this,t,!1,!0)},get size(){return at(this)},has:ut,add:ft,set:pt,delete:ht,clear:dt,forEach:_t(!1,!0)},n={get(t){return lt(this,t,!0)},get size(){return at(this,!0)},has(t){return ut.call(this,t,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:_t(!0,!1)},r={get(t){return lt(this,t,!0,!0)},get size(){return at(this,!0)},has(t){return ut.call(this,t,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:_t(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((o=>{t[o]=gt(o,!1,!1),n[o]=gt(o,!0,!1),e[o]=gt(o,!1,!0),r[o]=gt(o,!0,!0)})),[t,n,e,r]}const[bt,mt,wt,xt]=yt();function St(t,e){const n=e?t?xt:wt:t?mt:bt;return(e,r,o)=>"__v_isReactive"===r?!t:"__v_isReadonly"===r?t:"__v_raw"===r?e:Reflect.get(g(n,r)&&r in e?n:e,r,o)}const Ot={get:St(!1,!1)},jt={get:St(!0,!1)},kt=new WeakMap,Rt=new WeakMap,Ct=new WeakMap,Pt=new WeakMap;function Ft(t){return It(t)?t:Mt(t,!1,ot,Ot,kt)}function Et(t){return Mt(t,!0,st,jt,Ct)}function Mt(t,e,n,r,o){if(!x(t))return t;if(t.__v_raw&&(!e||!t.__v_isReactive))return t;const s=o.get(t);if(s)return s;const c=(i=t).__v_skip||!Object.isExtensible(i)?0:function(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((t=>O(t).slice(8,-1))(i));var i;if(0===c)return t;const l=new Proxy(t,2===c?r:n);return o.set(t,l),l}function $t(t){return It(t)?$t(t.__v_raw):!(!t||!t.__v_isReactive)}function It(t){return!(!t||!t.__v_isReadonly)}function At(t){return!(!t||!t.__v_isShallow)}function Nt(t){return $t(t)||It(t)}function Tt(t){const e=t&&t.__v_raw;return e?Tt(e):t}function Wt(t){return((t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})})(t,"__v_skip",!0),t}const Ut=t=>x(t)?Ft(t):t,zt=t=>x(t)?Et(t):t;function Vt(t){return!(!t||!0!==t.__v_isRef)}const Bt={get:(t,e,n)=>{return Vt(r=Reflect.get(t,e,n))?r.value:r;var r},set:(t,e,n,r)=>{const o=t[e];return Vt(o)&&!Vt(n)?(o.value=n,!0):Reflect.set(t,e,n,r)}};function Ht(t,e,n,r){let o;try{o=r?t(...r):t()}catch(t){Kt(t,e,n)}return o}function Zt(t,e,n,r){if(b(t)){const s=Ht(t,e,n,r);return s&&(x(o=s)&&b(o.then)&&b(o.catch))&&s.catch((t=>{Kt(t,e,n)})),s}var o;const s=[];for(let o=0;o<t.length;o++)s.push(Zt(t[o],e,n,r));return s}function Kt(t,e,n,r=!0){if(e&&e.vnode,e){let r=e.parent;const o=e.proxy,s=n;for(;r;){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,s))return;r=r.parent}const c=e.appContext.config.errorHandler;if(c)return void Ht(c,null,10,[t,o,s])}!function(t,e,n,r=!0){console.error(t)}(t,0,0,r)}let Lt=!1,Dt=!1;const qt=[];let Gt=0;const Jt=[];let Qt=null,Xt=0;const Yt=Promise.resolve();let te=null;function ee(t){const e=te||Yt;return t?e.then(this?t.bind(this):t):e}function ne(t){qt.length&&qt.includes(t,Lt&&t.allowRecurse?Gt+1:Gt)||(null==t.id?qt.push(t):qt.splice(function(t){let e=Gt+1,n=qt.length;for(;e<n;){const r=e+n>>>1;oe(qt[r])<t?e=r+1:n=r}return e}(t.id),0,t),re())}function re(){Lt||Dt||(Dt=!0,te=Yt.then(ce))}const oe=t=>null==t.id?1/0:t.id,se=(t,e)=>{const n=oe(t)-oe(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ce(t){Dt=!1,Lt=!0,qt.sort(se);try{for(Gt=0;Gt<qt.length;Gt++){const t=qt[Gt];t&&!1!==t.active&&Ht(t,null,14)}}finally{Gt=0,qt.length=0,function(t){if(Jt.length){const t=[...new Set(Jt)];if(Jt.length=0,Qt)return void Qt.push(...t);for(Qt=t,Qt.sort(((t,e)=>oe(t)-oe(e))),Xt=0;Xt<Qt.length;Xt++)Qt[Xt]();Qt=null,Xt=0}}(),Lt=!1,te=null,(qt.length||Jt.length)&&ce(t)}}new Set,new Map;let ie=null;const le={};function ue(t,e,{immediate:n,deep:r,flush:o,onTrack:s,onTrigger:c}=u){const i=Te;let l,a,p=!1,h=!1;if(Vt(t)?(l=()=>t.value,p=At(t)):$t(t)?(l=()=>t,r=!0):v(t)?(h=!0,p=t.some((t=>$t(t)||At(t))),l=()=>t.map((t=>Vt(t)?t.value:$t(t)?fe(t):b(t)?Ht(t,i,2):void 0))):l=b(t)?e?()=>Ht(t,i,2):()=>{if(!i||!i.isUnmounted)return a&&a(),Zt(t,i,3,[_])}:f,e&&r){const t=l;l=()=>fe(t())}let d,_=t=>{a=w.onStop=()=>{Ht(t,i,4)}};if(ze){if(_=f,e?n&&Zt(e,i,3,[l(),h?[]:void 0,_]):l(),"sync"!==o)return f;{const t=Be();d=t.__watcherHandles||(t.__watcherHandles=[])}}let g=h?new Array(t.length).fill(le):le;const y=()=>{if(w.active)if(e){const t=w.run();(r||p||(h?t.some(((t,e)=>F(t,g[e]))):F(t,g)))&&(a&&a(),Zt(e,i,3,[t,g===le?void 0:h&&g[0]===le?[]:g,_]),g=t)}else w.run()};let m;y.allowRecurse=!!e,"sync"===o?m=y:"post"===o?m=()=>xe(y,i&&i.suspense):(y.pre=!0,i&&(y.id=i.uid),m=()=>ne(y));const w=new z(l,m);e?n?y():g=w.run():"post"===o?xe(w.run.bind(w),i&&i.suspense):w.run();const x=()=>{w.stop(),i&&i.scope&&((t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)})(i.scope.effects,w)};return d&&d.push(x),x}function ae(t,e,n){const r=this.proxy,o=m(t)?t.includes(".")?function(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}(r,t):()=>r[t]:t.bind(r,r);let s;b(e)?s=e:(s=e.handler,n=e);const c=Te;We(this);const i=ue(o,s.bind(r),n);return c?We(c):Ue(),i}function fe(t,e){if(!x(t)||t.__v_skip)return t;if((e=e||new Set).has(t))return t;if(e.add(t),Vt(t))fe(t.value,e);else if(v(t))for(let n=0;n<t.length;n++)fe(t[n],e);else if("[object Set]"===O(t)||y(t))t.forEach((t=>{fe(t,e)}));else if((t=>"[object Object]"===O(t))(t))for(const n in t)fe(t[n],e);return t}Boolean,Boolean;RegExp,RegExp;const pe=t=>(e,n=Te)=>(!ze||"sp"===t)&&function(t,e,n=Te,r=!1){if(n){const o=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;Z(),We(n);const o=Zt(e,n,t,r);return Ue(),K(),o});return r?o.unshift(s):o.push(s),s}}(t,((...t)=>e(...t)),n);pe("bm"),pe("m"),pe("bu"),pe("u"),pe("bum");pe("um"),pe("sp"),pe("rtg"),pe("rtc");const he=Symbol(),de=t=>t?4&t.vnode.shapeFlag?function(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((e=Wt(t.exposed),$t(e)?e:new Proxy(e,Bt)),{get(e,n){return n in e?e[n]:n in _e?_e[n](t):void 0},has(t,e){return e in t||e in _e}}));var e}(t)||t.proxy:de(t.parent):null,_e=d(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>de(t.parent),$root:t=>de(t.root),$emit:t=>t.emit,$options:t=>__VUE_OPTIONS_API__?function(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:o,optionsCache:s,config:{optionMergeStrategies:c}}=t.appContext,i=s.get(e);let l;return i?l=i:o.length||n||r?(l={},o.length&&o.forEach((t=>ge(l,t,c,!0))),ge(l,e,c)):l=e,x(e)&&s.set(e,l),l}(t):t.type,$forceUpdate:t=>t.f||(t.f=()=>ne(t.update)),$nextTick:t=>t.n||(t.n=ee.bind(t.proxy)),$watch:t=>__VUE_OPTIONS_API__?ae.bind(t):f});function ge(t,e,n,r=!1){const{mixins:o,extends:s}=e;s&&ge(t,s,n,!0),o&&o.forEach((e=>ge(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=ve[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const ve={data:ye,props:we,emits:we,methods:we,computed:we,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:we,directives:we,watch:function(t,e){if(!t)return e;if(!e)return t;const n=d(Object.create(null),t);for(const r in e)n[r]=me(t[r],e[r]);return n},provide:ye,inject:function(t,e){return we(be(t),be(e))}};function ye(t,e){return e?t?function(){return d(b(t)?t.call(this,this):t,b(e)?e.call(this,this):e)}:e:t}function be(t){if(v(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function me(t,e){return t?[...new Set([].concat(t,e))]:e}function we(t,e){return t?d(d(Object.create(null),t),e):e}const xe=function(t,e){var n;e&&e.pendingBranch?v(t)?e.effects.push(...t):e.effects.push(t):(v(n=t)?Jt.push(...n):Qt&&Qt.includes(n,n.allowRecurse?Xt+1:Xt)||Jt.push(n),re())},Se=Symbol(void 0),Oe=Symbol(void 0),je=Symbol(void 0),ke=(Symbol(void 0),[]);let Re=null;function Ce(t){return t.dynamicChildren=Re||a,ke.pop(),Re=ke[ke.length-1]||null,Re&&Re.push(t),t}const Pe="__vInternal",Fe=({key:t})=>null!=t?t:null,Ee=({ref:t,ref_key:e,ref_for:n})=>null!=t?m(t)||Vt(t)||b(t)?{i:ie,r:t,k:e,f:!!n}:t:null;function Me(t,e=null,n=null,r=0,o=null,s=(t===Se?0:1),c=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fe(e),ref:e&&Ee(e),scopeId:null,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ie};return i?(Ne(l,n),128&s&&t.normalize(l)):n&&(l.shapeFlag|=m(n)?8:16),!c&&Re&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Re.push(l),l}const $e=function(t,n=null,r=null,o=0,s=null,c=!1){if(t&&t!==he||(t=je),i=t,i&&!0===i.__v_isVNode){const e=Ie(t,n,!0);return r&&Ne(e,r),!c&&Re&&(6&e.shapeFlag?Re[Re.indexOf(t)]=e:Re.push(e)),e.patchFlag|=-2,e}var i;if(function(t){return b(t)&&"__vccOpts"in t}(t)&&(t=t.__vccOpts),n){n=function(t){return t?Nt(t)||Pe in t?d({},t):t:null}(n);let{class:t,style:r}=n;t&&!m(t)&&(n.class=l(t)),x(r)&&(Nt(r)&&!v(r)&&(r=d({},r)),n.style=e(r))}return Me(t,n,r,o,s,m(t)?1:(t=>t.__isSuspense)(t)?128:(t=>t.__isTeleport)(t)?64:x(t)?4:b(t)?2:0,c,!0)};function Ie(t,n,r=!1){const{props:o,ref:s,patchFlag:c,children:i}=t,u=n?function(...t){const n={};for(let r=0;r<t.length;r++){const o=t[r];for(const t in o)if("class"===t)n.class!==o.class&&(n.class=l([n.class,o.class]));else if("style"===t)n.style=e([n.style,o.style]);else if(h(t)){const e=n[t],r=o[t];!r||e===r||v(e)&&e.includes(r)||(n[t]=e?[].concat(e,r):r)}else""!==t&&(n[t]=o[t])}return n}(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Fe(u),ref:n&&n.ref?r&&s?v(s)?s.concat(Ee(n)):[s,Ee(n)]:Ee(n):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==Se?-1===c?16:16|c:c,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ie(t.ssContent),ssFallback:t.ssFallback&&Ie(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Ae(t=" ",e=0){return $e(Oe,null,t,e)}function Ne(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if(v(e))n=16;else if("object"==typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),Ne(t,n()),n._c&&(n._d=!0)))}{n=32;const t=e._;!t&&!(Pe in e)&&(e._ctx=ie)}}else b(e)?(e={default:e,_ctx:ie},n=32):(e=String(e),64&r?(n=16,e=[Ae(e)]):n=8);t.children=e,t.shapeFlag|=n}Object.create(null),new WeakMap,new WeakMap,new WeakMap;let Te=null;const We=t=>{Te=t,t.scope.on()},Ue=()=>{Te&&Te.scope.off(),Te=null};let ze=!1;const Ve=Symbol(""),Be=()=>{{const t=function(t,e,n=!1){const r=Te||ie;if(r){const o=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&t in o)return o[t];if(arguments.length>1)return n&&b(e)?e.call(r.proxy):e}}(Ve);return t}};var He={name:"demo",computed:{}},Ze=(0,n(68).Z)(He,[["render",function(t,e,n,r,o,s){return function(t=!1){ke.push(Re=t?null:[])}(),Ce(Me("div",null,"这里是demo组件",undefined,undefined,undefined,!0))}]]);Ze.install=t=>{t.component(Ze.name,Ze)};var Ke=Ze}(),r}()}));