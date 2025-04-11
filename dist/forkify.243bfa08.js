var e,t,r,n,o,a,s,c,u,l,d,h,f,p,g,v=globalThis,m={},y={},b=function(e){return e&&e.Math===Math&&e};y=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof v&&v)||b("object"==typeof y&&y)||function(){return this}()||Function("return this")();var _={},w={};_=!(w=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var k={},E={};E=!w(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var S=Function.prototype.call;k=E?S.bind(S):function(){return S.apply(S,arguments)};var $={}.propertyIsEnumerable,L=Object.getOwnPropertyDescriptor;r=L&&!$.call({1:2},1)?function(e){var t=L(this,e);return!!t&&t.enumerable}:$;var O={};O=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var P={},j={},M={},T=Function.prototype,x=T.call,I=E&&T.bind.bind(x,x),R={},A=(M=E?I:function(e){return function(){return x.apply(e,arguments)}})({}.toString),N=M("".slice);R=function(e){return N(A(e),8,-1)};var H=Object,q=M("".split);j=w(function(){return!H("z").propertyIsEnumerable(0)})?function(e){return"String"===R(e)?q(e,""):H(e)}:H;var F={},C={};C=function(e){return null==e};var D=TypeError;F=function(e){if(C(e))throw new D("Can't call method on "+e);return e},P=function(e){return j(F(e))};var W={},U={},B={},G={},z="object"==typeof document&&document.all;G=void 0===z&&void 0!==z?function(e){return"function"==typeof e||e===z}:function(e){return"function"==typeof e},B=function(e){return"object"==typeof e?null!==e:G(e)};var Y={},V={};V=function(e,t){var r;return arguments.length<2?(r=y[e],G(r)?r:void 0):y[e]&&y[e][t]};var J={};J=M({}.isPrototypeOf);var K={},Q={},X={},Z={},ee=y.navigator,et=ee&&ee.userAgent;Z=et?String(et):"";var er=y.process,en=y.Deno,ei=er&&er.versions||en&&en.version,eo=ei&&ei.v8;eo&&(o=(n=eo.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&Z&&(!(n=Z.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=Z.match(/Chrome\/(\d+)/))&&(o=+n[1]),X=o;var ea=y.String;K=(Q=!!Object.getOwnPropertySymbols&&!w(function(){var e=Symbol("symbol detection");return!ea(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&X&&X<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var es=Object;Y=K?function(e){return"symbol"==typeof e}:function(e){var t=V("Symbol");return G(t)&&J(t.prototype,es(e))};var ec={},eu={},el={},ed=String;el=function(e){try{return ed(e)}catch(e){return"Object"}};var eh=TypeError;eu=function(e){if(G(e))return e;throw new eh(el(e)+" is not a function")},ec=function(e,t){var r=e[t];return C(r)?void 0:eu(r)};var ef={},ep=TypeError;ef=function(e,t){var r,n;if("string"===t&&G(r=e.toString)&&!B(n=k(r,e))||G(r=e.valueOf)&&!B(n=k(r,e))||"string"!==t&&G(r=e.toString)&&!B(n=k(r,e)))return n;throw new ep("Can't convert object to primitive value")};var eg={},ev={},em={},ey={};ey=!1;var eb={},e_=Object.defineProperty;eb=function(e,t){try{e_(y,e,{value:t,configurable:!0,writable:!0})}catch(r){y[e]=t}return t};var ew="__core-js_shared__",ek=em=y[ew]||eb(ew,{});(ek.versions||(ek.versions=[])).push({version:"3.39.0",mode:ey?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ev=function(e,t){return em[e]||(em[e]=t||{})};var eE={},eS={},e$=Object;eS=function(e){return e$(F(e))};var eL=M({}.hasOwnProperty);eE=Object.hasOwn||function(e,t){return eL(eS(e),t)};var eO={},eP=0,ej=Math.random(),eM=M(1..toString);eO=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eM(++eP+ej,36)};var eT=y.Symbol,ex=ev("wks"),eI=K?eT.for||eT:eT&&eT.withoutSetter||eO,eR=TypeError,eA=function(e){return eE(ex,e)||(ex[e]=Q&&eE(eT,e)?eT[e]:eI("Symbol."+e)),ex[e]}("toPrimitive");U=function(e,t){if(!B(e)||Y(e))return e;var r,n=ec(e,eA);if(n){if(void 0===t&&(t="default"),r=k(n,e,t),!B(r)||Y(r))return r;throw new eR("Can't convert object to primitive value")}return void 0===t&&(t="number"),ef(e,t)},W=function(e){var t=U(e,"string");return Y(t)?t:t+""};var eN={},eH={},eq=y.document,eF=B(eq)&&B(eq.createElement);eH=function(e){return eF?eq.createElement(e):{}},eN=!_&&!w(function(){return 7!==Object.defineProperty(eH("div"),"a",{get:function(){return 7}}).a});var eC=Object.getOwnPropertyDescriptor;t=_?eC:function(e,t){if(e=P(e),t=W(t),eN)try{return eC(e,t)}catch(e){}if(eE(e,t))return O(!k(r,e,t),e[t])};var eD={},eW={};eW=_&&w(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eU={},eB=String,eG=TypeError;eU=function(e){if(B(e))return e;throw new eG(eB(e)+" is not an object")};var ez=TypeError,eY=Object.defineProperty,eV=Object.getOwnPropertyDescriptor,eJ="enumerable",eK="configurable",eQ="writable";a=_?eW?function(e,t,r){if(eU(e),t=W(t),eU(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eQ in r&&!r[eQ]){var n=eV(e,t);n&&n[eQ]&&(e[t]=r.value,r={configurable:eK in r?r[eK]:n[eK],enumerable:eJ in r?r[eJ]:n[eJ],writable:!1})}return eY(e,t,r)}:eY:function(e,t,r){if(eU(e),t=W(t),eU(r),eN)try{return eY(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new ez("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eD=_?function(e,t,r){return a(e,t,O(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0={},e1=Function.prototype,e2=_&&Object.getOwnPropertyDescriptor,e9=eE(e1,"name"),e4=e9&&(!_||_&&e2(e1,"name").configurable),e3={},e5=M(Function.toString);G(em.inspectSource)||(em.inspectSource=function(e){return e5(e)}),e3=em.inspectSource;var e7={},e8={},e6=y.WeakMap;e8=G(e6)&&/native code/.test(String(e6));var te={},tt=ev("keys");te=function(e){return tt[e]||(tt[e]=eO(e))};var tr={};tr={};var tn="Object already initialized",ti=y.TypeError,to=y.WeakMap;if(e8||em.state){var ta=em.state||(em.state=new to);ta.get=ta.get,ta.has=ta.has,ta.set=ta.set,s=function(e,t){if(ta.has(e))throw new ti(tn);return t.facade=e,ta.set(e,t),t},c=function(e){return ta.get(e)||{}},u=function(e){return ta.has(e)}}else{var ts=te("state");tr[ts]=!0,s=function(e,t){if(eE(e,ts))throw new ti(tn);return t.facade=e,eD(e,ts,t),t},c=function(e){return eE(e,ts)?e[ts]:{}},u=function(e){return eE(e,ts)}}var tc=(e7={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!B(t)||(r=c(t)).type!==e)throw new ti("Incompatible receiver, "+e+" required");return r}}}).enforce,tu=e7.get,tl=String,td=Object.defineProperty,th=M("".slice),tf=M("".replace),tp=M([].join),tg=_&&!w(function(){return 8!==td(function(){},"length",{value:8}).length}),tv=String(String).split("String"),tm=eZ=function(e,t,r){"Symbol("===th(tl(t),0,7)&&(t="["+tf(tl(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eE(e,"name")||e4&&e.name!==t)&&(_?td(e,"name",{value:t,configurable:!0}):e.name=t),tg&&r&&eE(r,"arity")&&e.length!==r.arity&&td(e,"length",{value:r.arity});try{r&&eE(r,"constructor")&&r.constructor?_&&td(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tc(e);return eE(n,"source")||(n.source=tp(tv,"string"==typeof t?t:"")),e};Function.prototype.toString=tm(function(){return G(this)&&tu(this).source||e3(this)},"toString"),eX=function(e,t,r,n){n||(n={});var o=n.enumerable,s=void 0!==n.name?n.name:t;if(G(r)&&eZ(r,s,n),n.global)o?e[t]=r:eb(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var ty={},tb={},t_={},tw={},tk={},tE={},tS={},t$=Math.ceil,tL=Math.floor;tS=Math.trunc||function(e){var t=+e;return(t>0?tL:t$)(t)},tE=function(e){var t=+e;return t!=t||0===t?0:tS(t)};var tO=Math.max,tP=Math.min;tk=function(e,t){var r=tE(e);return r<0?tO(r+t,0):tP(r,t)};var tj={},tM={},tT=Math.min;tM=function(e){var t=tE(e);return t>0?tT(t,0x1fffffffffffff):0},tj=function(e){return tM(e.length)};var tx=function(e){return function(t,r,n){var o,a=P(t),s=tj(a);if(0===s)return!e&&-1;var c=tk(n,s);if(e&&r!=r){for(;s>c;)if((o=a[c++])!=o)return!0}else for(;s>c;c++)if((e||c in a)&&a[c]===r)return e||c||0;return!e&&-1}},tI={includes:tx(!0),indexOf:tx(!1)}.indexOf,tR=M([].push);t_=function(e,t){var r,n=P(e),o=0,a=[];for(r in n)!eE(tr,r)&&eE(n,r)&&tR(a,r);for(;t.length>o;)eE(n,r=t[o++])&&(~tI(a,r)||tR(a,r));return a};var tA={},tN=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return t_(e,tN)},d=Object.getOwnPropertySymbols;var tH=M([].concat);tb=V("Reflect","ownKeys")||function(e){var t=l(eU(e));return d?tH(t,d(e)):t},ty=function(e,r,n){for(var o=tb(r),s=0;s<o.length;s++){var c=o[s];eE(e,c)||n&&eE(n,c)||a(e,c,t(r,c))}};var tq={},tF=/#|\.prototype\./,tC=function(e,t){var r=tW[tD(e)];return r===tB||r!==tU&&(G(t)?w(t):!!t)},tD=tC.normalize=function(e){return String(e).replace(tF,".").toLowerCase()},tW=tC.data={},tU=tC.NATIVE="N",tB=tC.POLYFILL="P";tq=tC,m=function(e,r){var n,o,a,s,c,u=e.target,l=e.global,d=e.stat;if(n=l?y:d?y[u]||eb(u,{}):y[u]&&y[u].prototype)for(o in r){if(s=r[o],a=e.dontCallGetSet?(c=t(n,o))&&c.value:n[o],!tq(l?o:u+(d?".":"#")+o,e.forced)&&void 0!==a){if(typeof s==typeof a)continue;ty(s,a)}(e.sham||a&&a.sham)&&eD(s,"sham",!0),eX(n,o,s,e)}};var tG={},tz={},tY=Function.prototype,tV=tY.apply,tJ=tY.call;tz="object"==typeof Reflect&&Reflect.apply||(E?tJ.bind(tV):function(){return tJ.apply(tV,arguments)});var tK={},tQ={},tX=(tQ=function(e){if("Function"===R(e))return M(e)})(tQ.bind);tK=function(e,t){return eu(e),void 0===t?e:E?tX(e,t):function(){return e.apply(t,arguments)}};var tZ={};tZ=V("document","documentElement");var t0={};t0=M([].slice);var t1={},t2=TypeError;t1=function(e,t){if(e<t)throw new t2("Not enough arguments");return e};var t9={};t9=/(?:ipad|iphone|ipod).*applewebkit/i.test(Z);var t4={},t3={},t5=function(e){return Z.slice(0,e.length)===e};t4="NODE"===(t3=t5("Bun/")?"BUN":t5("Cloudflare-Workers")?"CLOUDFLARE":t5("Deno/")?"DENO":t5("Node.js/")?"NODE":y.Bun&&"string"==typeof Bun.version?"BUN":y.Deno&&"object"==typeof Deno.version?"DENO":"process"===R(y.process)?"NODE":y.window&&y.document?"BROWSER":"REST");var t7=y.setImmediate,t8=y.clearImmediate,t6=y.process,re=y.Dispatch,rt=y.Function,rr=y.MessageChannel,rn=y.String,ri=0,ro={},ra="onreadystatechange";w(function(){h=y.location});var rs=function(e){if(eE(ro,e)){var t=ro[e];delete ro[e],t()}},rc=function(e){return function(){rs(e)}},ru=function(e){rs(e.data)},rl=function(e){y.postMessage(rn(e),h.protocol+"//"+h.host)};t7&&t8||(t7=function(e){t1(arguments.length,1);var t=G(e)?e:rt(e),r=t0(arguments,1);return ro[++ri]=function(){tz(t,void 0,r)},f(ri),ri},t8=function(e){delete ro[e]},t4?f=function(e){t6.nextTick(rc(e))}:re&&re.now?f=function(e){re.now(rc(e))}:rr&&!t9?(g=(p=new rr).port2,p.port1.onmessage=ru,f=tK(g.postMessage,g)):y.addEventListener&&G(y.postMessage)&&!y.importScripts&&h&&"file:"!==h.protocol&&!w(rl)?(f=rl,y.addEventListener("message",ru,!1)):f=ra in eH("script")?function(e){tZ.appendChild(eH("script"))[ra]=function(){tZ.removeChild(this),rs(e)}}:function(e){setTimeout(rc(e),0)});var rd=(tG={set:t7,clear:t8}).clear;m({global:!0,bind:!0,enumerable:!0,forced:y.clearImmediate!==rd},{clearImmediate:rd});var rh=tG.set,rf={},rp=y.Function,rg=/MSIE .\./.test(Z)||"BUN"===t3&&((e=y.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rf=function(e,t){var r=t?2:1;return rg?function(n,o){var a=t1(arguments.length,1)>r,s=G(n)?n:rp(n),c=a?t0(arguments,r):[],u=a?function(){tz(s,this,c)}:s;return t?e(u,o):e(u)}:e};var rv=y.setImmediate?rf(rh,!1):rh;m({global:!0,bind:!0,enumerable:!0,forced:y.setImmediate!==rv},{setImmediate:rv});var rm=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function d(e,r,n,a){var s,c,u,l,d=Object.create((r&&r.prototype instanceof m?r:m).prototype);return o(d,"_invoke",{value:(s=e,c=n,u=new P(a||[]),l=f,function(e,r){if(l===p)throw Error("Generator is already running");if(l===g){if("throw"===e)throw r;return{value:t,done:!0}}for(u.method=e,u.arg=r;;){var n=u.delegate;if(n){var o=function e(r,n){var o=n.method,a=r.iterator[o];if(a===t)return(n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?v:("return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),v);var s=h(a,r.iterator,n.arg);if("throw"===s.type)return n.method="throw",n.arg=s.arg,n.delegate=null,v;var c=s.arg;return c?c.done?(n[r.resultName]=c.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(n,u);if(o){if(o===v)continue;return o}}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if(l===f)throw l=g,u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);l=p;var a=h(s,c,u);if("normal"===a.type){if(l=u.done?g:"suspendedYield",a.arg===v)continue;return{value:a.arg,done:u.done}}"throw"===a.type&&(l=g,u.method="throw",u.arg=a.arg)}})}),d}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=d;var f="suspendedStart",p="executing",g="completed",v={};function m(){}function y(){}function b(){}var _={};l(_,s,function(){return this});var w=Object.getPrototypeOf,k=w&&w(w(j([])));k&&k!==r&&n.call(k,s)&&(_=k);var E=b.prototype=m.prototype=Object.create(_);function S(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function $(e,t){var r;o(this,"_invoke",{value:function(o,a){function s(){return new t(function(r,s){!function r(o,a,s,c){var u=h(e[o],e,a);if("throw"===u.type)c(u.arg);else{var l=u.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then(function(e){r("next",e,s,c)},function(e){r("throw",e,s,c)}):t.resolve(d).then(function(e){l.value=e,s(l)},function(e){return r("throw",e,s,c)})}}(o,a,r,s)})}return r=r?r.then(s,s):s()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(e){if(null!=e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return y.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:y,configurable:!0}),y.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,u,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},S($.prototype),l($.prototype,c,function(){return this}),e.AsyncIterator=$,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var s=new $(d(t,r,n,o),a);return e.isGeneratorFunction(r)?s:s.next().then(function(e){return e.done?e.value:s.next()})},S(E),l(E,u,"Generator"),l(E,s,function(){return this}),l(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],c=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var u=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(u&&l){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);else if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else if(l){if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return(s.type=e,s.arg=t,a)?(this.method="next",this.next=a.finallyLoc,v):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rm}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rm:Function("r","regeneratorRuntime = r")(rm)}const ry="https://forkify-api.herokuapp.com/api/v2/recipes/",rb="c4edf8fc-a204-4216-bc47-48202d64bb4f",r_=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),o=await n.json();if(!n.ok)throw Error(`${o.message} (${n.status})`);return o}catch(e){throw e}},rw={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rk=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rE=async function(e){try{let t=await r_(`${ry}${e}?key=${rb}`);rw.recipe=rk(t),rw.bookmarks.some(t=>t.id===e)?rw.recipe.bookmarked=!0:rw.recipe.bookmarked=!1,console.log(rw.recipe)}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rS=async function(e){try{rw.search.query=e;let t=await r_(`${ry}?search=${e}&key=${rb}`);rw.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rw.search.page=1}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},r$=function(e=rw.search.page){rw.search.page=e;let t=(e-1)*rw.search.resultsPerPage,r=e*rw.search.resultsPerPage;return rw.search.results.slice(t,r)},rL=function(e){rw.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rw.recipe.servings}),rw.recipe.servings=e},rO=function(){localStorage.setItem("bookmarks",JSON.stringify(rw.bookmarks))},rP=function(e){rw.bookmarks.push(e),e.id===rw.recipe.id&&(rw.recipe.bookmarked=!0),rO()},rj=function(e){let t=rw.bookmarks.findIndex(t=>t.id===e);rw.bookmarks.splice(t,1),e===rw.recipe.id&&(rw.recipe.bookmarked=!1),rO()},rM=localStorage.getItem("bookmarks");rM&&(rw.bookmarks=JSON.parse(rM));const rT=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[r,n,o]=t;return{quantity:r?+r:null,unit:n,description:o}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t};console.log(r);let n=await r_(`${ry}?key=${rb}`,r);rw.recipe=rk(n),rP(rw.recipe)}catch(e){throw e}};class rx{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
    <div class="spinner">
            <svg>
              <use href="${{}}#icon-loader"></use>
            </svg>
          </div>
          `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
    <div class="error">
            <div>
              <svg>
                <use href="${{}}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
    <div class="message">
            <div>
              <svg>
                <use href="${{}}#icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var rI={};function rR(e,t,r,n,o){var a,s,c,u;let l=[2,3,5];if(!0===o)for(i=3;i*i<=e;i+=2)e%i==0&&l.push(i);let d=0,h=e,f=t;for(;d<=l.length;)h%l[d]==0&&f%l[d]==0?(l[d],h/=l[d],f/=l[d]):d++;return a=f,s=h,c=r,u=n,1===a&&1===s?(c=`${u}${(parseInt(c)+1).toString()}`,`${c}`):0===s?`${u}${c}`:"0"==c?`${u}${s}/${a}`:`${u}${c} ${s}/${a}`}rI=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),o=n.split("."),a=o[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?o[1].slice(0,o[1].length-1):o[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let s=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!s||!(r.length>2)){var c,u,l;return c=r,u=a,l=t,rR(parseInt(c,10),Math.pow(10,c.length),u,l,!1)}if(patternSequence=s[0].split("").reverse().join(""),(endPattern=s[1].split("").reverse().join("")).length>1){let e=endPattern.split(""),t=1;for(i=0;i<e.length;i++)t/=e[0]/e[i];1===t&&(endPattern=e[0])}return endPattern.length>1&&endPattern.length%2==0&&(endPattern=parseInt(endPattern.slice(0,endPattern.length/2),10)-parseInt(endPattern.slice(endPattern.length/2,endPattern.length),10)==0?endPattern.slice(0,endPattern.length/2):endPattern),function(e,t,r,n,o){let a=e.length-r.length>=1?e.length-r.length:1,s=Math.pow(10,a),c=parseFloat(`0.${e}`),u=Math.pow(10,t.length);return rR(Math.round((c*u-c)*Math.pow(10,a)),(u-1)*s,n,o,!0)}(r,endPattern,patternSequence,a,t)};class rA extends rx{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${{}}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${{}}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
              <svg>
                <use href="${{}}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
              <svg>
                <use href="${{}}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${{}}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${{}}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${{}}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}_generateMarkupIngredient(e){var t;return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${{}}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?((t=rI)&&t.__esModule?t.default:t)(e.quantity).toString():""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>
          ${e.description}
        </div>
      </li>
    `}}var rN=new rA;class rH{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rq=new rH,rF=new class extends rx{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
    <li class="preview">
            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                </div>
                <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                    <svg>
                      <use href="${{}}#icon-user"></use>
                    </svg>
                </div>
            </a>
          </li>
          
        `}};class rC extends rx{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>rF.render(e,!1)).join("")}}var rD=new rC;class rW extends rx{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;console.log(n),e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?(console.log(e),`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
        <span>Page ${e+1}</span>
        <svg class="search__icon">
              <use href="${{}}#icon-arrow-right"></use>
            </svg>
          </button>
          `):e===t&&t>1?`
    <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${{}}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
    `:e<t?(console.log("Hello"),`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
        <span>Page ${e-1}</span>
        <svg class="search__icon">
              <use href="${{}}#icon-arrow-left"></use>
            </svg>
          </button>
          <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${{}}#icon-arrow-right"></use>
            </svg>
          </button>
          `):""}}var rU=new rW;class rB extends rx{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rF.render(e,!1)).join("")}}var rG=new rB;class rz extends rx{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rY=new rz,rV={};const rJ=new URL(import.meta.resolve("7IPPd")).href;var rK={};const rQ=new URL(import.meta.resolve("geFUy")).href;var rX=new class{constructor(){this.cardsfirstRow=document.querySelector("#firstCardRow"),this.cardssecondRow=document.querySelector("#secondCardRow"),console.log(this.cardssecondRow),this.cards=[]}_generateMarkup(e=[]){let t=e.slice(0,2),r=e.slice(2,4);console.log(r),this.cardsfirstRow.innerHTML="",this.cardssecondRow.innerHTML="";let n=t.map(e=>`<div class="card">
              <div>
                <svg>
                  <use href="${{}}#${e.icon}"></use>
                </svg>
              </div>
              <h2 class="card__header">${e.title}</h2>
              <p> ${e.description}
              </p>
            </div>
            `).join(""),o=r.map(e=>`<div class="card">
              <div>
                <svg>
                  <use href="/public/icons.svg#${e.icon}"></use>
                </svg>
              </div>
              <h2 class="card__header">${e.title}</h2>
              <p> ${e.description}
              </p>
            </div>
            `).join("");return this.cardsfirstRow.innerHTML=n,this.cardssecondRow.innerHTML=o,this.cardsfirstRow.innerHTML+this.cardssecondRow.innerHTML}clearCards(){this.cardsContainer.innerHTML=""}};const rZ=[{icon:"icon-search",title:"SEARCH OVER 1,000,000 RECIPES",description:`
                Bookmark them, add recipes to your weekly meal planner and
                select what ingredients you need to buy. They will be waiting
                for you in your shopping list!`},{icon:"icon-clock",title:"TAILORED FOR AFRICANS",description:`Search for hundreds of Nigerian recipes ranging from the
                sumptuous egusi soup to the much acclaimed jollof rice. We have
                it all!`},{icon:"icon-edit",title:"ADD YOUR FAVORITE RECIPES",description:`Give us an URL of your favorite recipe on the Internet, an URL
                of its image and some more details. We will keep your dearest
                recipes safe and handy!`},{icon:"icon-check",title:"WEEKLY MEAL PLANNER & SHOPPING LIST",description:`Plan your meals for the next week every Monday and decide on the
                ingredients to purchase based on a certain recipe. View all in
                your shopping list!`}];rX._generateMarkup(rZ);const r0=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rN.renderSpinner(),rD.update(r$()),rG.update(rw.bookmarks),await rE(e),rN.render(rw.recipe)}catch(e){console.log(e),rN.renderError(),console.error(e)}},r1=async function(){try{let e=rq.getQuery();if(!e)return;rD.renderSpinner(),await rS(e),console.log(rw.search.results),rD.render(r$()),rU.render(rw.search)}catch(e){console.log(e)}},r2=async function(e){try{rY.renderSpinner(),await rT(e),console.log(rw.recipe),rN.render(rw.recipe),rY.renderMessage(),rG.render(rw.bookmarks),window.history.pushState(null,"",`#${rw.recipe.id}`),setTimeout(function(){rY.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5",e),rY.renderError(e.message)}};new class e{constructor(e){this.toggle=document.querySelector(e),this.body=document.body,this.icon=document.querySelector("i"),this.image=document.querySelector(".header__logo"),this.init()}init(){let e=localStorage.getItem("theme")||"light";this.body.setAttribute("data-theme",e),this.toggle.checked="dark"===e,"dark"===e?(this.icon.classList.add("i__left","fa-sun"),this.icon.classList.remove("i__right","fa-moon"),this.image.src=rQ):(this.icon.classList.add("i__right","fa-moon"),this.icon.classList.remove("i__left","fa-sun"),this.image.src=rJ),console.log(this.icon.classList),this.toggle.addEventListener("change",this.handleToggle.bind(this))}handleToggle(){let e=this.toggle.checked?"dark":"light";this.icon&&("dark"===e?(this.icon.classList.add("i__left","fa-sun"),this.icon.classList.remove("i__right","fa-moon"),this.image.src=rQ):(this.icon.classList.add("i__right","fa-moon"),this.icon.classList.remove("i__left","fa-sun"),this.image.src=rJ)),console.log(this.icon.classList),this.body.setAttribute("data-theme",e),localStorage.setItem("theme",e)}}("#themeToggle"),r1(),document.querySelectorAll('use[href="[ICONS_PATH]"]').forEach(e=>{let t=e.getAttribute("href").split("#")[1];e.setAttribute("href",`${{}}#${t}`)}),rG.addHandlerRender(function(){rG.render(rw.bookmarks)}),rN.addHandlerRender(r0),rN.addHandlerUpdateServings(function(e){rL(e),rN.update(rw.recipe)}),rN.addHandlerAddBookmark(function(){rw.recipe.bookmarked?rj(rw.recipe.id):rP(rw.recipe),rN.update(rw.recipe),rG.render(rw.bookmarks)}),rq.addHandlerSearch(r1),rU.addHandlerClick(function(e){rD.render(r$(e)),rU.render(rw.search)}),rY.addHandlerUpload(r2);
//# sourceMappingURL=forkify.243bfa08.js.map
