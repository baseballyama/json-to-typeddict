var we=Object.defineProperty;var _e=(t,n,e)=>n in t?we(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var x=(t,n,e)=>_e(t,typeof n!="symbol"?n+"":n,e);import{n as dt,s as ve,o as Nt,t as be}from"./scheduler.D9qJB8QU.js";new URL("sveltekit-internal://");function ke(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function Ae(t){return t.split("%25").map(decodeURI).join("%25")}function Se(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function ht({href:t}){return t.split("#")[0]}function Ee(t,n,e,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return l=>(e(l),i[s](l));n();const c=Reflect.get(i,s);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];r&&o.push("hash");for(const i of o)Object.defineProperty(a,i,{get(){return n(),t[i]},enumerable:!0,configurable:!0});return a}const Re="/__data.json",Ie=".html__data.json";function Ue(t){return t.endsWith(".html")?t.replace(/\.html$/,Ie):t.replace(/\/$/,"")+Re}function Le(...t){let n=5381;for(const e of t)if(typeof e=="string"){let r=e.length;for(;r;)n=n*33^e.charCodeAt(--r)}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Te(t){const n=atob(t),e=new Uint8Array(n.length);for(let r=0;r<n.length;r++)e[r]=n.charCodeAt(r);return e.buffer}const Wt=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&G.delete(vt(t)),Wt(t,n));const G=new Map;function xe(t,n){const e=vt(t,n),r=document.querySelector(e);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&G.set(e,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Te(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,n)}function Pe(t,n,e){if(G.size>0){const r=vt(t,e),a=G.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(a.body,a.init);G.delete(r)}}return window.fetch(n,e)}function vt(t,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${Le(...a)}"]`}return r}const Ce=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Oe(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${$e(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return pt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return pt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=Ce.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return pt(c)}).join("")}).join("")}/?$`),params:n}}function Ne(t){return!/^\([^)]+\)$/.test(t)}function $e(t){return t.slice(1).split("/").filter(Ne)}function je(t,n,e){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||e[c.matcher](l)){r[c.name]=l;const d=n[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function pt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function De({nodes:t,server_loads:n,dictionary:e,matchers:r}){const a=new Set(n);return Object.entries(e).map(([s,[c,l,d]])=>{const{pattern:h,params:y}=Oe(s),u={id:s,exec:g=>{const f=h.exec(g);if(f)return je(f,y,r)},errors:[1,...d||[]].map(g=>t[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function Yt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function $t(t,n,e=JSON.stringify){const r=e(n);try{sessionStorage[t]=r}catch{}}const $=[];function bt(t,n=dt){let e;const r=new Set;function a(s){if(ve(t,s)&&(t=s,e)){const c=!$.length;for(const l of r)l[1](),$.push(l,t);if(c){for(let l=0;l<$.length;l+=2)$[l][0]($[l+1]);$.length=0}}}function o(s){a(s(t))}function i(s,c=dt){const l=[s,c];return r.add(l),r.size===1&&(e=n(a,o)||dt),s(t),()=>{r.delete(l),r.size===0&&e&&(e(),e=null)}}return{set:a,update:o,subscribe:i}}var Ht;const T=((Ht=globalThis.__sveltekit_9xgk7w)==null?void 0:Ht.base)??"/json-to-python";var Kt;const Fe=((Kt=globalThis.__sveltekit_9xgk7w)==null?void 0:Kt.assets)??T,Ve="1737538672215",zt="sveltekit:snapshot",Jt="sveltekit:scroll",Xt="sveltekit:states",Be="sveltekit:pageurl",D="sveltekit:history",K="sveltekit:navigation",X={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},J=location.origin;function Zt(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function kt(){return{x:pageXOffset,y:pageYOffset}}function j(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const jt={...X,"":X.hover};function Qt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function te(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Qt(t)}}function yt(t,n,e){let r;try{r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,o=!r||!!a||st(r,n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===J&&t.hasAttribute("download");return{url:r,external:o,target:a,download:i}}function Z(t){let n=null,e=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=j(s,"preload-code")),a===null&&(a=j(s,"preload-data")),n===null&&(n=j(s,"keepfocus")),e===null&&(e=j(s,"noscroll")),o===null&&(o=j(s,"reload")),i===null&&(i=j(s,"replacestate")),s=Qt(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:jt[r??"off"],preload_data:jt[a??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function Dt(t){const n=bt(t);let e=!0;function r(){e=!0,n.update(i=>i)}function a(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}const ee={v:()=>{}};function qe(){const{set:t,subscribe:n}=bt(!1);let e;async function r(){clearTimeout(e);try{const a=await fetch(`${Fe}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Ve;return i&&(t(!0),ee.v(),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:r}}function st(t,n,e){return t.origin!==J||!t.pathname.startsWith(n)?!0:e?!(t.pathname===n+"/"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===n):!1}function Ft(t){const n=Me(t),e=new ArrayBuffer(n.length),r=new DataView(e);for(let a=0;a<e.byteLength;a++)r.setUint8(a,n.charCodeAt(a));return e}const Ge="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Me(t){t.length%4===0&&(t=t.replace(/==?$/,""));let n="",e=0,r=0;for(let a=0;a<t.length;a++)e<<=6,e|=Ge.indexOf(t[a]),r+=6,r===24&&(n+=String.fromCharCode((e&16711680)>>16),n+=String.fromCharCode((e&65280)>>8),n+=String.fromCharCode(e&255),e=r=0);return r===12?(e>>=4,n+=String.fromCharCode(e)):r===18&&(e>>=2,n+=String.fromCharCode((e&65280)>>8),n+=String.fromCharCode(e&255)),n}const He=-1,Ke=-2,We=-3,Ye=-4,ze=-5,Je=-6;function Xe(t,n){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,r=Array(e.length);function a(o,i=!1){if(o===He)return;if(o===We)return NaN;if(o===Ye)return 1/0;if(o===ze)return-1/0;if(o===Je)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=e[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],f=Ft(g),p=new u(f);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=Ft(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==Ke&&(c[l]=a(d))}}else{const c={};r[o]=c;for(const l in s){const d=s[l];c[l]=a(d)}}return r[o]}return a(0)}const ne=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ne];const Ze=new Set([...ne]);[...Ze];function Qe(t){return t.filter(n=>n!=null)}class it{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class At{constructor(n,e){this.status=n,this.location=e}}class St extends Error{constructor(n,e,r){super(r),this.status=n,this.text=e}}const tn="x-sveltekit-invalidated",en="x-sveltekit-trailing-slash";function Q(t){return t instanceof it||t instanceof St?t.status:500}function nn(t){return t instanceof St?t.text:"Internal Error"}let I,W,gt;const rn=Nt.toString().includes("$$")||/function \w+\(\) \{\}/.test(Nt.toString());rn?(I={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},W={current:null},gt={current:!1}):(I=new class{constructor(){x(this,"data",$state.raw({}));x(this,"form",$state.raw(null));x(this,"error",$state.raw(null));x(this,"params",$state.raw({}));x(this,"route",$state.raw({id:null}));x(this,"state",$state.raw({}));x(this,"status",$state.raw(-1));x(this,"url",$state.raw(new URL("https://example.com")))}},W=new class{constructor(){x(this,"current",$state.raw(null))}},gt=new class{constructor(){x(this,"current",$state.raw(!1))}},ee.v=()=>gt.current=!0);function an(t){Object.assign(I,t)}const on=new Set(["icon","shortcut icon","apple-touch-icon"]),N=Yt(Jt)??{},Y=Yt(zt)??{},C={url:Dt({}),page:Dt({}),navigating:bt(null),updated:qe()};function Et(t){N[t]=kt()}function sn(t,n){let e=t+1;for(;N[e];)delete N[e],e+=1;for(e=n+1;Y[e];)delete Y[e],e+=1}function V(t){return location.href=t.href,new Promise(()=>{})}async function re(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(T||"/");t&&await t.update()}}function Vt(){}let ct,wt,tt,P,_t,k;const ae=[],et=[];let U=null;const oe=new Set,cn=new Set,M=new Set;let w={branch:[],error:null,url:null},Rt=!1,nt=!1,Bt=!0,z=!1,B=!1,se=!1,It=!1,ie,R,L,rt;const H=new Set;async function An(t,n,e){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),k=t,await((o=(a=t.hooks).init)==null?void 0:o.call(a)),ct=De(t),P=document.documentElement,_t=n,wt=t.nodes[0],tt=t.nodes[1],wt(),tt(),R=(i=history.state)==null?void 0:i[D],L=(s=history.state)==null?void 0:s[K],R||(R=L=Date.now(),history.replaceState({...history.state,[D]:R,[K]:L},""));const r=N[R];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),e?await mn(_t,e):pn(location.href,{replaceState:!0}),gn()}function ln(){ae.length=0,It=!1}function ce(t){et.some(n=>n==null?void 0:n.snapshot)&&(Y[t]=et.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function le(t){var n;(n=Y[t])==null||n.forEach((e,r)=>{var a,o;(o=(a=et[r])==null?void 0:a.snapshot)==null||o.restore(e)})}function qt(){Et(R),$t(Jt,N),ce(L),$t(zt,Y)}async function Ut(t,n,e,r){return q({type:"goto",url:Zt(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:r,accept:()=>{n.invalidateAll&&(It=!0)}})}async function fn(t){if(t.id!==(U==null?void 0:U.id)){const n={};H.add(n),U={id:t.id,token:n,promise:ue({...t,preload:n}).then(e=>(H.delete(n),e.type==="loaded"&&e.state.error&&(U=null),e))}}return U.promise}async function mt(t){const n=ct.find(e=>e.exec(de(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function fe(t,n,e){var o;w=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(I,t.props.page),ie=new k.root({target:n,props:{...t.props,stores:C,components:et},hydrate:e,sync:!1}),le(L);const a={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};M.forEach(i=>i(a)),nt=!0}function at({url:t,params:n,branch:e,status:r,error:a,route:o,form:i}){let s="never";if(T&&(t.pathname===T||t.pathname===T+"/"))s="always";else for(const u of e)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);t.pathname=ke(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:a,route:o},props:{constructors:Qe(e).map(u=>u.node.component),page:Pt(I)}};i!==void 0&&(c.props.form=i);let l={},d=!I,h=0;for(let u=0;u<Math.max(e.length,w.branch.length);u+=1){const g=e[u],f=w.branch[u];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(d=!0),g&&(l={...l,...g.data},d&&(c.props[`data_${h}`]=l),h+=1)}return(!w.url||t.href!==w.url.href||w.error!==a||i!==void 0&&i!==I.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:d?l:I.data}),c}async function Lt({loader:t,parent:n,url:e,params:r,route:a,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((d=l.universal)!=null&&d.load){let u=function(...f){for(const p of f){const{href:b}=new URL(p,e);c.dependencies.add(b)}};const g={route:new Proxy(a,{get:(f,p)=>(s&&(c.route=!0),f[p])}),params:new Proxy(r,{get:(f,p)=>(s&&c.params.add(p),f[p])}),data:(o==null?void 0:o.data)??null,url:Ee(e,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)},k.hash),async fetch(f,p){let b;f instanceof Request?(b=f.url,p={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...p}):b=f;const S=new URL(b,e);return s&&u(S.href),S.origin===e.origin&&(b=S.href.slice(e.origin.length)),nt?Pe(b,S.href,p):xe(b,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Gt(t,n,e,r,a,o){if(It)return!0;if(!a)return!1;if(a.parent&&t||a.route&&n||a.url&&e)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==w.params[i])return!0;for(const i of a.dependencies)if(ae.some(s=>s(new URL(i))))return!0;return!1}function Tt(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function un(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const r of e){const a=t.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&e.delete(r)}return e}function Mt({error:t,url:n,route:e,params:r}){return{type:"loaded",state:{error:t,url:n,route:e,params:r,branch:[]},props:{page:Pt(I),constructors:[]}}}async function ue({id:t,invalidating:n,url:e,params:r,route:a,preload:o}){if((U==null?void 0:U.id)===t)return H.delete(U.token),U.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=w.url?t!==ot(w.url):!1,y=w.route?a.id!==w.route.id:!1,u=un(w.url,e);let g=!1;const f=l.map((m,_)=>{var O;const A=w.branch[_],E=!!(m!=null&&m[0])&&((A==null?void 0:A.loader)!==m[1]||Gt(g,y,h,u,(O=A.server)==null?void 0:O.uses,r));return E&&(g=!0),E});if(f.some(Boolean)){try{d=await ge(e,f)}catch(m){const _=await F(m,{url:e,params:r,route:{id:t}});return H.has(o)?Mt({error:_,url:e,params:r,route:a}):lt({status:Q(m),error:_,url:e,route:a})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let b=!1;const S=l.map(async(m,_)=>{var ft;if(!m)return;const A=w.branch[_],E=p==null?void 0:p[_];if((!E||E.type==="skip")&&m[1]===(A==null?void 0:A.loader)&&!Gt(b,y,h,u,(ft=A.universal)==null?void 0:ft.uses,r))return A;if(b=!0,(E==null?void 0:E.type)==="error")throw E;return Lt({loader:m[1],url:e,params:r,route:a,parent:async()=>{var Ot;const Ct={};for(let ut=0;ut<_;ut+=1)Object.assign(Ct,(Ot=await S[ut])==null?void 0:Ot.data);return Ct},server_data_node:Tt(E===void 0&&m[0]?{type:"skip"}:E??null,m[0]?A==null?void 0:A.server:void 0)})});for(const m of S)m.catch(()=>{});const v=[];for(let m=0;m<l.length;m+=1)if(l[m])try{v.push(await S[m])}catch(_){if(_ instanceof At)return{type:"redirect",location:_.location};if(H.has(o))return Mt({error:await F(_,{params:r,url:e,route:{id:a.id}}),url:e,params:r,route:a});let A=Q(_),E;if(p!=null&&p.includes(_))A=_.status??A,E=_.error;else if(_ instanceof it)E=_.body;else{if(await C.updated.check())return await re(),await V(e);E=await F(_,{params:r,url:e,route:{id:a.id}})}const O=await dn(m,v,i);return O?at({url:e,params:r,branch:v.slice(0,O.idx).concat(O.node),status:A,error:E,route:a}):await pe(e,{id:a.id},E,A)}else v.push(void 0);return at({url:e,params:r,branch:v,status:200,error:null,route:a,form:n?void 0:null})}async function dn(t,n,e){for(;t--;)if(e[t]){let r=t;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function lt({status:t,error:n,url:e,route:r}){const a={};let o=null;if(k.server_loads[0]===0)try{const s=await ge(e,[!0]);if(s.type!=="data"||s.nodes[0]&&s.nodes[0].type!=="data")throw 0;o=s.nodes[0]??null}catch{(e.origin!==J||e.pathname!==location.pathname||Rt)&&await V(e)}try{const s=await Lt({loader:wt,url:e,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Tt(o)}),c={node:await tt(),loader:tt,universal:null,server:null,data:null};return at({url:e,params:a,branch:[s,c],status:t,error:n,route:null})}catch(s){if(s instanceof At)return Ut(new URL(s.location,location.href),{},0);throw s}}function xt(t,n){if(!t||st(t,T,k.hash))return;let e;try{if(e=k.hooks.reroute({url:new URL(t)})??t,typeof e=="string"){const a=new URL(t);k.hash?a.hash=e:a.pathname=e,e=a}}catch{return}const r=de(e);for(const a of ct){const o=a.exec(r);if(o)return{id:ot(t),invalidating:n,route:a,params:Se(o),url:t}}}function de(t){return Ae(k.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(T.length))||"/"}function ot(t){return(k.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function he({url:t,type:n,intent:e,delta:r}){let a=!1;const o=ye(w,e,t,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return z||oe.forEach(s=>s(i)),a?null:o}async function q({type:t,url:n,popped:e,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Vt,block:d=Vt}){const h=xt(n,!1),y=he({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!y){d();return}const u=R,g=L;l(),z=!0,nt&&C.navigating.set(W.current=y.navigation),rt=c;let f=h&&await ue(h);if(!f){if(st(n,T,k.hash))return await V(n);f=await pe(n,{id:null},await F(new St(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,rt!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await lt({status:500,error:await F(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Ut(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await C.updated.check()&&(await re(),await V(n));if(ln(),Et(u),ce(g),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=e?e.state:i,!e){const v=o?0:1,m={[D]:R+=v,[K]:L+=v,[Xt]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||sn(R,L)}if(U=null,f.props.page.state=i,nt){w=f.state,f.props.page&&(f.props.page.url=n);const v=(await Promise.all(Array.from(cn,m=>m(y.navigation)))).filter(m=>typeof m=="function");if(v.length>0){let m=function(){v.forEach(_=>{M.delete(_)})};v.push(m),v.forEach(_=>{M.add(_)})}ie.$set(f.props),an(f.props.page),se=!0}else fe(f,_t,!1);const{activeElement:p}=document;await be();const b=e?e.scroll:a?kt():null;if(Bt){const v=n.hash&&document.getElementById(decodeURIComponent(k.hash?n.hash.split("#")[2]??"":n.hash.slice(1)));b?scrollTo(b.x,b.y):v?v.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==p&&document.activeElement!==document.body;!r&&!S&&yn(),Bt=!0,f.props.page&&Object.assign(I,f.props.page),z=!1,t==="popstate"&&le(L),y.fulfil(void 0),M.forEach(v=>v(y.navigation)),C.navigating.set(W.current=null)}async function pe(t,n,e,r){return t.origin===J&&t.pathname===location.pathname&&!Rt?await lt({status:r,error:e,url:t,route:n}):await V(t)}function hn(){let t;P.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function n(o){o.defaultPrevented||r(o.composedPath()[0],1)}P.addEventListener("mousedown",n),P.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(mt(new URL(i.target.href)),e.unobserve(i.target))},{threshold:0});function r(o,i){const s=te(o,P);if(!s)return;const{url:c,external:l,download:d}=yt(s,T,k.hash);if(l||d)return;const h=Z(s),y=c&&ot(w.url)===ot(c);if(!h.reload&&!y)if(i<=h.preload_data){const u=xt(c,!1);u&&fn(u)}else i<=h.preload_code&&mt(c)}function a(){e.disconnect();for(const o of P.querySelectorAll("a")){const{url:i,external:s,download:c}=yt(o,T,k.hash);if(s||c)continue;const l=Z(o);l.reload||(l.preload_code===X.viewport&&e.observe(o),l.preload_code===X.eager&&mt(i))}}M.add(a),a()}function F(t,n){if(t instanceof it)return t.body;const e=Q(t),r=nn(t);return k.hooks.handleError({error:t,event:n,status:e,message:r})??{message:r}}function pn(t,n={}){return t=new URL(Zt(t)),t.origin!==J?Promise.reject(new Error("goto: invalid URL")):Ut(t,n,0)}function gn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let r=!1;if(qt(),!z){const a=ye(w,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};oe.forEach(i=>i(o))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&qt()}),(n=navigator.connection)!=null&&n.saveData||hn(),P.addEventListener("click",async e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=te(e.composedPath()[0],P);if(!r)return;const{url:a,external:o,target:i,download:s}=yt(r,T,k.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Z(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[d,h]=(k.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=d===ht(location);if(o||c.reload&&(!y||!h)){he({url:a,type:"link"})?z=!0:e.preventDefault();return}if(h!==void 0&&y){const[,u]=w.url.href.split("#");if(u===h){if(e.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(B=!0,Et(R),t(a),!c.replace_state)return;B=!1}e.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),q({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),P.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(st(s,T,!1))return;const c=e.target,l=Z(c);if(l.reload)return;e.preventDefault(),e.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),q({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[D]){const a=e.state[D];if(rt={},a===R)return;const o=N[a],i=e.state[Xt]??{},s=new URL(e.state[Be]??location.href),c=e.state[K],l=w.url?ht(location)===ht(w.url):!1;if(c===L&&(se||l)){i!==I.state&&(I.state=i),t(s),N[R]=kt(),o&&scrollTo(o.x,o.y),R=a;return}const h=a-R;await q({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{R=a,L=c},block:()=>{history.go(-h)},nav_token:rt})}else if(!B){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{B?(B=!1,history.replaceState({...history.state,[D]:++R,[K]:L},"",location.href)):k.hash&&w.url.hash===location.hash&&q({type:"goto",url:w.url})});for(const e of document.querySelectorAll("link"))on.has(e.rel)&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&C.navigating.set(W.current=null)});function t(e){w.url=I.url=e,C.page.set(Pt(I)),C.page.notify()}}async function mn(t,{status:n=200,error:e,node_ids:r,params:a,route:o,data:i,form:s}){Rt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=xt(c,!1)||{});let l,d=!0;try{const h=r.map(async(g,f)=>{const p=i[f];return p!=null&&p.uses&&(p.uses=me(p.uses)),Lt({loader:k.nodes[g],url:c,params:a,route:o,parent:async()=>{const b={};for(let S=0;S<f;S+=1)Object.assign(b,(await h[S]).data);return b},server_data_node:Tt(p)})}),y=await Promise.all(h),u=ct.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let f=0;f<g.length;f++)g[f]||y.splice(f,0,void 0)}l=at({url:c,params:a,branch:y,status:n,error:e,form:s,route:u??null})}catch(h){if(h instanceof At){await V(new URL(h.location,location.href));return}l=await lt({status:Q(h),error:await F(h,{url:c,params:a,route:o}),url:c,route:o}),t.textContent="",d=!1}l.props.page&&(l.props.page.state={}),fe(l,t,d)}async function ge(t,n){var a;const e=new URL(t);e.pathname=Ue(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(en,"1"),e.searchParams.append(tn,n.map(o=>o?"1":"0").join(""));const r=await Wt(e.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new it(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(y){return Xe(y,{...k.decoders,Promise:u=>new Promise((g,f)=>{i.set(u,{fulfil:g,reject:f})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const f=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=me(p.uses),p.data=l(p.data))}),o(f);else if(f.type==="chunk"){const{id:p,data:b,error:S}=f,v=i.get(p);i.delete(p),S?v.reject(l(S)):v.fulfil(l(b))}}}})}function me(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function yn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ye(t,n,e,r){var c,l;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:e},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}function Pt(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}export{An as a,C as s};