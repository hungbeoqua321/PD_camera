var Ye=Object.defineProperty;var et=(e,t,n)=>t in e?Ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var P=(e,t,n)=>(et(e,typeof t!="symbol"?t+"":t,n),n);import{g as Ne,u as ve,h as N,i as tt,j as nt,k as st,b as k,o as F,c as z,a as _,d as S,w as O,l as be,m as rt,n as B,e as j,q as ot}from"./index-0ce9cf90.js";import{i as Pe,d as it}from"./infoUser-a19122a9.js";const ee=(e="",t="blur",n="string",s=!0,r=!0)=>({message:"Please enter your "+e+".",trigger:t,type:n,whitespace:s,required:r}),ye=(e="",t="blur")=>({pattern:/^\d+$/,message:`${e} can only contain digits.`,trigger:t}),at="/assets/exit-1e88dc44.svg",ct="/assets/camera-on-bcbef651.svg",lt="/assets/camera-off-3207d96d.svg",Le="/assets/take-photo-b2059e92.svg",ut="/assets/camera-flip-66a20b77.svg";function ke(e,t){return function(){return e.apply(t,arguments)}}const{toString:ft}=Object.prototype,{getPrototypeOf:ue}=Object,K=(e=>t=>{const n=ft.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>K(t)===e),G=e=>t=>typeof t===e,{isArray:U}=Array,I=G("undefined");function dt(e){return e!==null&&!I(e)&&e.constructor!==null&&!I(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Fe=T("ArrayBuffer");function ht(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Fe(e.buffer),t}const mt=G("string"),x=G("function"),De=G("number"),X=e=>e!==null&&typeof e=="object",pt=e=>e===!0||e===!1,W=e=>{if(K(e)!=="object")return!1;const t=ue(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},bt=T("Date"),yt=T("File"),wt=T("Blob"),_t=T("FileList"),Et=e=>X(e)&&x(e.pipe),gt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||x(e.append)&&((t=K(e))==="formdata"||t==="object"&&x(e.toString)&&e.toString()==="[object FormData]"))},St=T("URLSearchParams"),Rt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let s,r;if(typeof e!="object"&&(e=[e]),U(e))for(s=0,r=e.length;s<r;s++)t.call(null,e[s],s,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(s=0;s<i;s++)l=o[s],t.call(null,e[l],l,e)}}function Ue(e,t){t=t.toLowerCase();const n=Object.keys(e);let s=n.length,r;for(;s-- >0;)if(r=n[s],t===r.toLowerCase())return r;return null}const Be=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Me=e=>!I(e)&&e!==Be;function oe(){const{caseless:e}=Me(this)&&this||{},t={},n=(s,r)=>{const o=e&&Ue(t,r)||r;W(t[o])&&W(s)?t[o]=oe(t[o],s):W(s)?t[o]=oe({},s):U(s)?t[o]=s.slice():t[o]=s};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&H(arguments[s],n);return t}const Ot=(e,t,n,{allOwnKeys:s}={})=>(H(t,(r,o)=>{n&&x(r)?e[o]=ke(r,n):e[o]=r},{allOwnKeys:s}),e),At=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),xt=(e,t,n,s)=>{e.prototype=Object.create(t.prototype,s),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ct=(e,t,n,s)=>{let r,o,i;const l={};if(t=t||{},e==null)return t;do{for(r=Object.getOwnPropertyNames(e),o=r.length;o-- >0;)i=r[o],(!s||s(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ue(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Tt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const s=e.indexOf(t,n);return s!==-1&&s===n},Nt=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!De(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},vt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ue(Uint8Array)),Pt=(e,t)=>{const s=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=s.next())&&!r.done;){const o=r.value;t.call(e,o[0],o[1])}},Lt=(e,t)=>{let n;const s=[];for(;(n=e.exec(t))!==null;)s.push(n);return s},kt=T("HTMLFormElement"),Ft=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),we=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Dt=T("RegExp"),je=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),s={};H(n,(r,o)=>{let i;(i=t(r,o,e))!==!1&&(s[o]=i||r)}),Object.defineProperties(e,s)},Ut=e=>{je(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=e[n];if(x(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Bt=(e,t)=>{const n={},s=r=>{r.forEach(o=>{n[o]=!0})};return U(e)?s(e):s(String(e).split(t)),n},Mt=()=>{},jt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),te="abcdefghijklmnopqrstuvwxyz",_e="0123456789",Ie={DIGIT:_e,ALPHA:te,ALPHA_DIGIT:te+te.toUpperCase()+_e},It=(e=16,t=Ie.ALPHA_DIGIT)=>{let n="";const{length:s}=t;for(;e--;)n+=t[Math.random()*s|0];return n};function Ht(e){return!!(e&&x(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const qt=e=>{const t=new Array(10),n=(s,r)=>{if(X(s)){if(t.indexOf(s)>=0)return;if(!("toJSON"in s)){t[r]=s;const o=U(s)?[]:{};return H(s,(i,l)=>{const d=n(i,r+1);!I(d)&&(o[l]=d)}),t[r]=void 0,o}}return s};return n(e,0)},zt=T("AsyncFunction"),Wt=e=>e&&(X(e)||x(e))&&x(e.then)&&x(e.catch),a={isArray:U,isArrayBuffer:Fe,isBuffer:dt,isFormData:gt,isArrayBufferView:ht,isString:mt,isNumber:De,isBoolean:pt,isObject:X,isPlainObject:W,isUndefined:I,isDate:bt,isFile:yt,isBlob:wt,isRegExp:Dt,isFunction:x,isStream:Et,isURLSearchParams:St,isTypedArray:vt,isFileList:_t,forEach:H,merge:oe,extend:Ot,trim:Rt,stripBOM:At,inherits:xt,toFlatObject:Ct,kindOf:K,kindOfTest:T,endsWith:Tt,toArray:Nt,forEachEntry:Pt,matchAll:Lt,isHTMLForm:kt,hasOwnProperty:we,hasOwnProp:we,reduceDescriptors:je,freezeMethods:Ut,toObjectSet:Bt,toCamelCase:Ft,noop:Mt,toFiniteNumber:jt,findKey:Ue,global:Be,isContextDefined:Me,ALPHABET:Ie,generateString:It,isSpecCompliantForm:Ht,toJSONObject:qt,isAsyncFn:zt,isThenable:Wt};function p(e,t,n,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r)}a.inherits(p,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const He=p.prototype,qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qe[e]={value:e}});Object.defineProperties(p,qe);Object.defineProperty(He,"isAxiosError",{value:!0});p.from=(e,t,n,s,r,o)=>{const i=Object.create(He);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),p.call(i,e.message,t,n,s,r),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const $t=null;function ie(e){return a.isPlainObject(e)||a.isArray(e)}function ze(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ee(e,t,n){return e?e.concat(t).map(function(r,o){return r=ze(r),!n&&o?"["+r+"]":r}).join(n?".":""):t}function Jt(e){return a.isArray(e)&&!e.some(ie)}const Vt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,y){return!a.isUndefined(y[m])});const s=n.metaTokens,r=n.visitor||c,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(r))throw new TypeError("visitor must be a function");function f(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!d&&a.isBlob(u))throw new p("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?d&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function c(u,m,y){let R=u;if(u&&!y&&typeof u=="object"){if(a.endsWith(m,"{}"))m=s?m:m.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&Jt(u)||(a.isFileList(u)||a.endsWith(m,"[]"))&&(R=a.toArray(u)))return m=ze(m),R.forEach(function(A,Y){!(a.isUndefined(A)||A===null)&&t.append(i===!0?Ee([m],Y,o):i===null?m:m+"[]",f(A))}),!1}return ie(u)?!0:(t.append(Ee(y,m,o),f(u)),!1)}const h=[],b=Object.assign(Vt,{defaultVisitor:c,convertValue:f,isVisitable:ie});function E(u,m){if(!a.isUndefined(u)){if(h.indexOf(u)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(u),a.forEach(u,function(R,g){(!(a.isUndefined(R)||R===null)&&r.call(t,R,a.isString(g)?g.trim():g,m,b))===!0&&E(R,m?m.concat(g):[g])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function ge(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(s){return t[s]})}function fe(e,t){this._pairs=[],e&&Q(e,this,t)}const We=fe.prototype;We.append=function(t,n){this._pairs.push([t,n])};We.toString=function(t){const n=t?function(s){return t.call(this,s,ge)}:ge;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function Kt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $e(e,t,n){if(!t)return e;const s=n&&n.encode||Kt,r=n&&n.serialize;let o;if(r?o=r(t,n):o=a.isURLSearchParams(t)?t.toString():new fe(t,n).toString(s),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Gt{constructor(){this.handlers=[]}use(t,n,s){return this.handlers.push({fulfilled:t,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(s){s!==null&&t(s)})}}const Se=Gt,Je={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Xt=typeof URLSearchParams<"u"?URLSearchParams:fe,Qt=typeof FormData<"u"?FormData:null,Zt=typeof Blob<"u"?Blob:null,Yt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),en=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),C={isBrowser:!0,classes:{URLSearchParams:Xt,FormData:Qt,Blob:Zt},isStandardBrowserEnv:Yt,isStandardBrowserWebWorkerEnv:en,protocols:["http","https","file","blob","url","data"]};function tn(e,t){return Q(e,new C.classes.URLSearchParams,Object.assign({visitor:function(n,s,r,o){return C.isNode&&a.isBuffer(n)?(this.append(s,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function nn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function sn(e){const t={},n=Object.keys(e);let s;const r=n.length;let o;for(s=0;s<r;s++)o=n[s],t[o]=e[o];return t}function Ve(e){function t(n,s,r,o){let i=n[o++];const l=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(r)?r.length:i,d?(a.hasOwnProp(r,i)?r[i]=[r[i],s]:r[i]=s,!l):((!r[i]||!a.isObject(r[i]))&&(r[i]=[]),t(n,s,r[i],o)&&a.isArray(r[i])&&(r[i]=sn(r[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(s,r)=>{t(nn(s),r,n,0)}),n}return null}function rn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(e)}const de={transitional:Je,adapter:["xhr","http"],transformRequest:[function(t,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return r&&r?JSON.stringify(Ve(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(s.indexOf("application/x-www-form-urlencoded")>-1)return tn(t,this.formSerializer).toString();if((l=a.isFileList(t))||s.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Q(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||r?(n.setContentType("application/json",!1),rn(t)):t}],transformResponse:[function(t){const n=this.transitional||de.transitional,s=n&&n.forcedJSONParsing,r=this.responseType==="json";if(t&&a.isString(t)&&(s&&!this.responseType||r)){const i=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?p.from(l,p.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:C.classes.FormData,Blob:C.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{de.headers[e]={}});const he=de,on=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),an=e=>{const t={};let n,s,r;return e&&e.split(`
`).forEach(function(i){r=i.indexOf(":"),n=i.substring(0,r).trim().toLowerCase(),s=i.substring(r+1).trim(),!(!n||t[n]&&on[n])&&(n==="set-cookie"?t[n]?t[n].push(s):t[n]=[s]:t[n]=t[n]?t[n]+", "+s:s)}),t},Re=Symbol("internals");function M(e){return e&&String(e).trim().toLowerCase()}function $(e){return e===!1||e==null?e:a.isArray(e)?e.map($):String(e)}function cn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(e);)t[s[1]]=s[2];return t}const ln=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ne(e,t,n,s,r){if(a.isFunction(s))return s.call(this,t,n);if(r&&(t=n),!!a.isString(t)){if(a.isString(s))return t.indexOf(s)!==-1;if(a.isRegExp(s))return s.test(t)}}function un(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,s)=>n.toUpperCase()+s)}function fn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(e,s+n,{value:function(r,o,i){return this[s].call(this,t,r,o,i)},configurable:!0})})}class Z{constructor(t){t&&this.set(t)}set(t,n,s){const r=this;function o(l,d,f){const c=M(d);if(!c)throw new Error("header name must be a non-empty string");const h=a.findKey(r,c);(!h||r[h]===void 0||f===!0||f===void 0&&r[h]!==!1)&&(r[h||d]=$(l))}const i=(l,d)=>a.forEach(l,(f,c)=>o(f,c,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!ln(t)?i(an(t),n):t!=null&&o(n,t,s),this}get(t,n){if(t=M(t),t){const s=a.findKey(this,t);if(s){const r=this[s];if(!n)return r;if(n===!0)return cn(r);if(a.isFunction(n))return n.call(this,r,s);if(a.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=M(t),t){const s=a.findKey(this,t);return!!(s&&this[s]!==void 0&&(!n||ne(this,this[s],s,n)))}return!1}delete(t,n){const s=this;let r=!1;function o(i){if(i=M(i),i){const l=a.findKey(s,i);l&&(!n||ne(s,s[l],l,n))&&(delete s[l],r=!0)}}return a.isArray(t)?t.forEach(o):o(t),r}clear(t){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const o=n[s];(!t||ne(this,this[o],o,t,!0))&&(delete this[o],r=!0)}return r}normalize(t){const n=this,s={};return a.forEach(this,(r,o)=>{const i=a.findKey(s,o);if(i){n[i]=$(r),delete n[o];return}const l=t?un(o):String(o).trim();l!==o&&delete n[o],n[l]=$(r),s[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=t&&a.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const s=new this(t);return n.forEach(r=>s.set(r)),s}static accessor(t){const s=(this[Re]=this[Re]={accessors:{}}).accessors,r=this.prototype;function o(i){const l=M(i);s[l]||(fn(r,i),s[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(Z.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(s){this[n]=s}}});a.freezeMethods(Z);const v=Z;function se(e,t){const n=this||he,s=t||n,r=v.from(s.headers);let o=s.data;return a.forEach(e,function(l){o=l.call(n,o,r.normalize(),t?t.status:void 0)}),r.normalize(),o}function Ke(e){return!!(e&&e.__CANCEL__)}function q(e,t,n){p.call(this,e??"canceled",p.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(q,p,{__CANCEL__:!0});function dn(e,t,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?e(n):t(new p("Request failed with status code "+n.status,[p.ERR_BAD_REQUEST,p.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const hn=C.isStandardBrowserEnv?function(){return{write:function(n,s,r,o,i,l){const d=[];d.push(n+"="+encodeURIComponent(s)),a.isNumber(r)&&d.push("expires="+new Date(r).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const s=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function mn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function pn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ge(e,t){return e&&!mn(t)?pn(e,t):t}const bn=C.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let s;function r(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=r(window.location.href),function(i){const l=a.isString(i)?r(i):i;return l.protocol===s.protocol&&l.host===s.host}}():function(){return function(){return!0}}();function yn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function wn(e,t){e=e||10;const n=new Array(e),s=new Array(e);let r=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),c=s[o];i||(i=f),n[r]=d,s[r]=f;let h=o,b=0;for(;h!==r;)b+=n[h++],h=h%e;if(r=(r+1)%e,r===o&&(o=(o+1)%e),f-i<t)return;const E=c&&f-c;return E?Math.round(b*1e3/E):void 0}}function Oe(e,t){let n=0;const s=wn(50,250);return r=>{const o=r.loaded,i=r.lengthComputable?r.total:void 0,l=o-n,d=s(l),f=o<=i;n=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&f?(i-o)/d:void 0,event:r};c[t?"download":"upload"]=!0,e(c)}}const _n=typeof XMLHttpRequest<"u",En=_n&&function(e){return new Promise(function(n,s){let r=e.data;const o=v.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let f;a.isFormData(r)&&(C.isStandardBrowserEnv||C.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?a.isString(f=o.getContentType())&&o.setContentType(f.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const u=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(u+":"+m))}const h=Ge(e.baseURL,e.url);c.open(e.method.toUpperCase(),$e(h,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function b(){if(!c)return;const u=v.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),y={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:u,config:e,request:c};dn(function(g){n(g),d()},function(g){s(g),d()},y),c=null}if("onloadend"in c?c.onloadend=b:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(b)},c.onabort=function(){c&&(s(new p("Request aborted",p.ECONNABORTED,e,c)),c=null)},c.onerror=function(){s(new p("Network Error",p.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||Je;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),s(new p(m,y.clarifyTimeoutError?p.ETIMEDOUT:p.ECONNABORTED,e,c)),c=null},C.isStandardBrowserEnv){const u=(e.withCredentials||bn(h))&&e.xsrfCookieName&&hn.read(e.xsrfCookieName);u&&o.set(e.xsrfHeaderName,u)}r===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(m,y){c.setRequestHeader(y,m)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Oe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Oe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=u=>{c&&(s(!u||u.type?new q(null,e,c):u),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const E=yn(h);if(E&&C.protocols.indexOf(E)===-1){s(new p("Unsupported protocol "+E+":",p.ERR_BAD_REQUEST,e));return}c.send(r||null)})},ae={http:$t,xhr:En};a.forEach(ae,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ae=e=>`- ${e}`,gn=e=>a.isFunction(e)||e===null||e===!1,Xe={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,s;const r={};for(let o=0;o<t;o++){n=e[o];let i;if(s=n,!gn(n)&&(s=ae[(i=String(n)).toLowerCase()],s===void 0))throw new p(`Unknown adapter '${i}'`);if(s)break;r[i||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ae).join(`
`):" "+Ae(o[0]):"as no adapter specified";throw new p("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return s},adapters:ae};function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new q(null,e)}function xe(e){return re(e),e.headers=v.from(e.headers),e.data=se.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Xe.getAdapter(e.adapter||he.adapter)(e).then(function(s){return re(e),s.data=se.call(e,e.transformResponse,s),s.headers=v.from(s.headers),s},function(s){return Ke(s)||(re(e),s&&s.response&&(s.response.data=se.call(e,e.transformResponse,s.response),s.response.headers=v.from(s.response.headers))),Promise.reject(s)})}const Ce=e=>e instanceof v?e.toJSON():e;function D(e,t){t=t||{};const n={};function s(f,c,h){return a.isPlainObject(f)&&a.isPlainObject(c)?a.merge.call({caseless:h},f,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function r(f,c,h){if(a.isUndefined(c)){if(!a.isUndefined(f))return s(void 0,f,h)}else return s(f,c,h)}function o(f,c){if(!a.isUndefined(c))return s(void 0,c)}function i(f,c){if(a.isUndefined(c)){if(!a.isUndefined(f))return s(void 0,f)}else return s(void 0,c)}function l(f,c,h){if(h in t)return s(f,c);if(h in e)return s(void 0,f)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(f,c)=>r(Ce(f),Ce(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const h=d[c]||r,b=h(e[c],t[c],c);a.isUndefined(b)&&h!==l||(n[c]=b)}),n}const Qe="1.5.1",me={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{me[e]=function(s){return typeof s===e||"a"+(t<1?"n ":" ")+e}});const Te={};me.transitional=function(t,n,s){function r(o,i){return"[Axios v"+Qe+"] Transitional option '"+o+"'"+i+(s?". "+s:"")}return(o,i,l)=>{if(t===!1)throw new p(r(i," has been removed"+(n?" in "+n:"")),p.ERR_DEPRECATED);return n&&!Te[i]&&(Te[i]=!0,console.warn(r(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function Sn(e,t,n){if(typeof e!="object")throw new p("options must be an object",p.ERR_BAD_OPTION_VALUE);const s=Object.keys(e);let r=s.length;for(;r-- >0;){const o=s[r],i=t[o];if(i){const l=e[o],d=l===void 0||i(l,o,e);if(d!==!0)throw new p("option "+o+" must be "+d,p.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new p("Unknown option "+o,p.ERR_BAD_OPTION)}}const ce={assertOptions:Sn,validators:me},L=ce.validators;class V{constructor(t){this.defaults=t,this.interceptors={request:new Se,response:new Se}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=D(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:o}=n;s!==void 0&&ce.assertOptions(s,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean)},!1),r!=null&&(a.isFunction(r)?n.paramsSerializer={serialize:r}:ce.assertOptions(r,{encode:L.function,serialize:L.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),n.headers=v.concat(i,o);const l=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(d=d&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const f=[];this.interceptors.response.forEach(function(m){f.push(m.fulfilled,m.rejected)});let c,h=0,b;if(!d){const u=[xe.bind(this),void 0];for(u.unshift.apply(u,l),u.push.apply(u,f),b=u.length,c=Promise.resolve(n);h<b;)c=c.then(u[h++],u[h++]);return c}b=l.length;let E=n;for(h=0;h<b;){const u=l[h++],m=l[h++];try{E=u(E)}catch(y){m.call(this,y);break}}try{c=xe.call(this,E)}catch(u){return Promise.reject(u)}for(h=0,b=f.length;h<b;)c=c.then(f[h++],f[h++]);return c}getUri(t){t=D(this.defaults,t);const n=Ge(t.baseURL,t.url);return $e(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){V.prototype[t]=function(n,s){return this.request(D(s||{},{method:t,url:n,data:(s||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(s){return function(o,i,l){return this.request(D(l||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}V.prototype[t]=n(),V.prototype[t+"Form"]=n(!0)});const J=V;class pe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const s=this;this.promise.then(r=>{if(!s._listeners)return;let o=s._listeners.length;for(;o-- >0;)s._listeners[o](r);s._listeners=null}),this.promise.then=r=>{let o;const i=new Promise(l=>{s.subscribe(l),o=l}).then(r);return i.cancel=function(){s.unsubscribe(o)},i},t(function(o,i,l){s.reason||(s.reason=new q(o,i,l),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new pe(function(r){t=r}),cancel:t}}}const Rn=pe;function On(e){return function(n){return e.apply(null,n)}}function An(e){return a.isObject(e)&&e.isAxiosError===!0}const le={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(le).forEach(([e,t])=>{le[t]=e});const xn=le;function Ze(e){const t=new J(e),n=ke(J.prototype.request,t);return a.extend(n,J.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(r){return Ze(D(e,r))},n}const w=Ze(he);w.Axios=J;w.CanceledError=q;w.CancelToken=Rn;w.isCancel=Ke;w.VERSION=Qe;w.toFormData=Q;w.AxiosError=p;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=On;w.isAxiosError=An;w.mergeConfig=D;w.AxiosHeaders=v;w.formToJSON=e=>Ve(a.isHTMLForm(e)?new FormData(e):e);w.getAdapter=Xe.getAdapter;w.HttpStatusCode=xn;w.default=w;const Cn=w;class Tn{constructor(t,n="user",s=null,r=null){P(this,"_webcamElement");P(this,"_facingMode");P(this,"_webcamList",[]);P(this,"_streamList",[]);P(this,"_selectedDeviceId","");P(this,"_canvasElement",null);P(this,"_snapSoundElement",null);this._webcamElement=t,this._webcamElement.width=this._webcamElement.width||640,this._webcamElement.height=this._webcamElement.height||360,this._facingMode=n,this._webcamList=[],this._streamList=[],this._selectedDeviceId="",this._canvasElement=s,this._snapSoundElement=r}get facingMode(){return this._facingMode}set facingMode(t){this._facingMode=t}get webcamList(){return this._webcamList}get webcamCount(){return this._webcamList.length}get selectedDeviceId(){return this._selectedDeviceId}getVideoInputs(t){return this._webcamList=[],t.forEach(n=>{n.kind==="videoinput"&&this._webcamList.push(n)}),this._webcamList.length==1&&(this._facingMode="user"),this._webcamList}getMediaConstraints(){var t={};this._selectedDeviceId==""?t.facingMode=this._facingMode:t.deviceId={exact:this._selectedDeviceId},t.width={exact:this._webcamElement.width},t.height={exact:this._webcamElement.height};var n={video:t,audio:!1};return n}selectCamera(){for(let t of this._webcamList)if(this._facingMode=="user"&&t.label.toLowerCase().includes("front")||this._facingMode=="enviroment"&&t.label.toLowerCase().includes("back")){this._selectedDeviceId=t.deviceId;break}}flip(){this._facingMode=this._facingMode=="user"?"enviroment":"user",this._webcamElement.style.transform="",this.selectCamera()}async start(t=!0){return new Promise((n,s)=>{this.stop(),navigator.mediaDevices.getUserMedia(this.getMediaConstraints()).then(r=>{this._streamList.push(r),this.info().then(()=>{this.selectCamera(),t?this.stream().then(()=>{n(this._facingMode)}).catch(o=>{s(o)}):n(this._selectedDeviceId)}).catch(o=>{s(o)})}).catch(r=>{s(r)})})}async info(){return new Promise((t,n)=>{navigator.mediaDevices.enumerateDevices().then(s=>{this.getVideoInputs(s),t(this._webcamList)}).catch(s=>{n(s)})})}async stream(){return new Promise((t,n)=>{navigator.mediaDevices.getUserMedia(this.getMediaConstraints()).then(s=>{this._streamList.push(s),this._webcamElement.srcObject=s,this._facingMode=="user"&&(this._webcamElement.style.transform="scale(-1,1)"),this._webcamElement.play(),t(this._facingMode)}).catch(s=>{console.log(s),n(s)})})}stop(){this._streamList.forEach(t=>{t.getTracks().forEach(n=>{n.stop()})})}snap(){if(this._canvasElement!=null){this._snapSoundElement!=null&&this._snapSoundElement.play(),this._canvasElement.height=this._webcamElement.scrollHeight,this._canvasElement.width=this._webcamElement.scrollWidth;let t=this._canvasElement.getContext("2d");return t&&(this._facingMode=="user"&&(t.translate(this._canvasElement.width,0),t.scale(-1,1)),t.clearRect(0,0,this._canvasElement.width,this._canvasElement.height),t.drawImage(this._webcamElement,0,0,this._canvasElement.width,this._canvasElement.height)),this._canvasElement.toDataURL("image/png")}else throw"canvas element is missing"}}const Nn={class:"bg-image flex flex-col items-center justify-center lg:h-screen",id:"webcam-app"},vn={class:"flex items-center justify-center"},Pn={class:"h-screen"},Ln={class:"absolute lg:top-5 lg:left-8 lg:px-28 top-5 left-5 z-50"},kn=_("img",{class:"icon-webcam",src:at,alt:"Exit"},null,-1),Fn={class:"control-group flex items-center absolute lg:bottom-5 z-50"},Dn={key:0,class:"icon-webcam",src:ct,alt:"camera-on"},Un={key:1,class:"icon-webcam",src:lt,alt:"camera-off"},Bn=_("img",{class:"icon-webcam",src:Le,alt:"camera"},null,-1),Mn=_("img",{class:"icon-webcam",src:Le,alt:"camera"},null,-1),jn=_("img",{class:"icon-webcam",src:ut,alt:"camera"},null,-1),In=Ne({__name:"Webcam",setup(e){const t=ve(),n=N(),s=N(),r=N(),o=N(),i=N(),l=N(!0),d=N(!1);let f;tt(()=>{n.value&&s.value&&r.value&&(f=new Tn(n.value,"user",s.value,r.value)),n.value.style.height=nt+"px",f.start(),f.stop()}),st(()=>{f.stop()});const c=()=>{f.flip(),f.start()},h=()=>{l.value?(f.stop(),l.value=!1):(f.start(),l.value=!0)},b=()=>{d.value=!0},E=async()=>{s.value.classList.remove("hidden"),n.value.classList.add("hidden"),f.stop();const R=new FormData;R.append("infoUser",JSON.stringify(Pe().infoUser)),R.append("imageUser",i.value),console.log(R),await Cn.post("https://bodyvisionmetrics.zocheck.com/image",R).then(g=>{if(g.status===200){const A=g.data.data;it().setDataMeasurement(A),t.push({name:"statistics"})}}).catch(g=>{console.log(g.message)})},u=()=>{b(),i.value=f.snap(),o.value.href=i.value,E()},m=()=>{s.value.classList.add("hidden"),n.value.classList.remove("hidden"),f.start()},y=()=>{s.value.classList.add("hidden"),n.value.classList.remove("hidden"),f.stop()};return(R,g)=>{const A=k("a-button"),Y=k("router-link");return F(),z("div",Nn,[_("a",{ref_key:"downloadElement",ref:o,href:"#",download:"user.png",target:"_blank"},null,512),_("div",vn,[_("div",Pn,[_("video",{ref_key:"webcamElement",ref:n,id:"webcam",autoplay:"",playsinline:""},null,512),_("canvas",{ref_key:"canvasElement",ref:s,id:"canvas",class:"hidden"},null,512),_("audio",{ref_key:"snapSoundElement",ref:r,src:"/snap.wav",preload:"auto"},null,512)])]),_("div",Ln,[S(Y,{to:{name:"home"}},{default:O(()=>[S(A,{class:"btn-webcam",type:"primary",onClick:y,title:"Exit"},{default:O(()=>[kn]),_:1})]),_:1})]),_("div",Fn,[S(A,{class:"btn-webcam",type:"primary",onClick:h,title:l.value?"Off Camera":"On Camera"},{default:O(()=>[l.value?(F(),z("img",Dn)):(F(),z("img",Un))]),_:1},8,["title"]),d.value?(F(),be(A,{key:0,class:"btn-webcam mx-10",type:"primary",onClick:m,title:"Resume camera"},{default:O(()=>[Bn]),_:1})):(F(),be(A,{key:1,class:"btn-webcam mx-10",type:"primary",onClick:u,title:"Take photo"},{default:O(()=>[Mn]),_:1})),S(A,{class:"btn-webcam",type:"primary",onClick:c,title:"Flip camera"},{default:O(()=>[jn]),_:1})])])}}});const Hn=_("label",{for:"info_form_Name",class:"font-medium inline-block my-1"},[j(" Name "),_("span",{class:"text-red-500"},"*")],-1),qn=_("label",{for:"info_form_Weight",class:"font-medium inline-block my-1"},[j(" Weight (kg)"),_("span",{class:"text-red-500"},"*")],-1),zn=_("label",{for:"info_form_Height",class:"font-medium inline-block my-1"},[j(" Height (cm)"),_("span",{class:"text-red-500"},"*")],-1),Wn={class:"flex items-center justify-end"},Kn=Ne({__name:"WebcamView",setup(e){const t=ve(),n=N(!0),s=rt({Name:"",Weight:"",Height:""}),r=N(),o=()=>{s.Name="",s.Weight="",s.Height="",r.value&&r.value.clearValidate()},i=()=>{t.push({name:"home"}),o(),console.log("Close Modal")},l=f=>{n.value=!1,Pe().setInfoUser(f),o()},d=f=>{ot.error("Info invalid",3),console.log("Failed:",f)};return(f,c)=>{const h=k("a-input"),b=k("a-form-item"),E=k("a-button"),u=k("a-form"),m=k("a-modal");return F(),z("div",null,[S(In),S(m,{open:n.value,"onUpdate:open":c[3]||(c[3]=y=>n.value=y),title:"Enter your height and weight",onCancel:i,maskClosable:!1,width:600,okButtonProps:{hidden:!0},cancelButtonProps:{hidden:!0},footer:null},{default:O(()=>[S(u,{ref_key:"formRef",ref:r,id:"info_form",name:"info_form",layout:"vertical",autocomplete:"off",onFinish:l,onFinishFailed:d,model:s},{default:O(()=>[S(b,{name:"Name",rules:[B(ee)("Name","blur","string",!1,!0)]},{default:O(()=>[Hn,S(h,{value:s.Name,"onUpdate:value":c[0]||(c[0]=y=>s.Name=y),placeholder:"Enter your name"},null,8,["value"])]),_:1},8,["rules"]),S(b,{name:"Weight",rules:[B(ee)("Weight","blur","string",!1,!0),B(ye)("Weight","blur")]},{default:O(()=>[qn,S(h,{value:s.Weight,"onUpdate:value":c[1]||(c[1]=y=>s.Weight=y),placeholder:"Enter your weight"},null,8,["value"])]),_:1},8,["rules"]),S(b,{name:"Height",rules:[B(ee)("Height","blur","string",!1,!0),B(ye)("Height","blur")]},{default:O(()=>[zn,S(h,{value:s.Height,"onUpdate:value":c[2]||(c[2]=y=>s.Height=y),placeholder:"Enter your height"},null,8,["value"])]),_:1},8,["rules"]),S(b,null,{default:O(()=>[_("div",Wn,[S(E,{type:"primary","html-type":"submit"},{default:O(()=>[j(" Confirm ")]),_:1}),S(E,{class:"ml-3",onClick:i},{default:O(()=>[j(" Cancel ")]),_:1})])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])])}}});export{Kn as default};