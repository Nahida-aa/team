"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6370],{12887:function(e,t,n){n.d(t,{F:function(){return u},f:function(){return c}});var r=n(63488);let i=["light","dark"],s="(prefers-color-scheme: dark)",o="undefined"==typeof window,a=(0,r.createContext)(void 0),l={setTheme:e=>{},themes:[]},u=()=>{var e;return null!==(e=(0,r.useContext)(a))&&void 0!==e?e:l},c=e=>(0,r.useContext)(a)?r.createElement(r.Fragment,null,e.children):r.createElement(h,e),d=["light","dark"],h=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:o=!0,storageKey:l="theme",themes:u=d,defaultTheme:c=n?"system":"light",attribute:h="data-theme",value:b,children:v,nonce:g})=>{let[E,S]=(0,r.useState)(()=>m(l,c)),[M,_]=(0,r.useState)(()=>m(l)),C=b?Object.values(b):u,O=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=y());let s=b?b[r]:r,a=t?p():null,l=document.documentElement;if("class"===h?(l.classList.remove(...C),s&&l.classList.add(s)):s?l.setAttribute(h,s):l.removeAttribute(h),o){let e=i.includes(c)?c:null,t=i.includes(r)?r:e;l.style.colorScheme=t}null==a||a()},[]),w=(0,r.useCallback)(e=>{S(e);try{localStorage.setItem(l,e)}catch(e){}},[e]),L=(0,r.useCallback)(t=>{_(y(t)),"system"===E&&n&&!e&&O("system")},[E,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(s);return e.addListener(L),L(e),()=>e.removeListener(L)},[L]),(0,r.useEffect)(()=>{let e=e=>{e.key===l&&w(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[w]),(0,r.useEffect)(()=>{O(null!=e?e:E)},[e,E]);let x=(0,r.useMemo)(()=>({theme:E,setTheme:w,forcedTheme:e,resolvedTheme:"system"===E?M:E,themes:n?[...u,"system"]:u,systemTheme:n?M:void 0}),[E,w,e,M,n,u]);return r.createElement(a.Provider,{value:x},r.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:o,storageKey:l,themes:u,defaultTheme:c,attribute:h,value:b,children:v,attrs:C,nonce:g}),v)},f=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:o,enableColorScheme:a,defaultTheme:l,value:u,attrs:c,nonce:d})=>{let h="system"===l,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,m=a?i.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,r=!0)=>{let s=u?u[e]:e,o=t?e+"|| ''":`'${s}'`,l="";return a&&r&&!t&&i.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===n?l+=t||s?`c.add(${o})`:"null":s&&(l+=`d[s](n,${o})`),l},y=e?`!function(){${f}${p(e)}}()`:o?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${h})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${p(u?"x[e]":"e",!0)}}${h?"":"else{"+p(l,!1,!1)+"}"}${m}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${p(u?"x[e]":"e",!0)}}else{${p(l,!1,!1)};}${m}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:y}})},()=>!0),m=(e,t)=>{let n;if(!o){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")},81641:function(e,t,n){n.d(t,{default:function(){return i.a}});var r=n(12638),i=n.n(r)},19010:function(e,t){let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return s},default:function(){return o}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function i(e){let{type:t,props:n}=e,i=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let s=r[e]||e.toLowerCase();"script"===t&&("async"===s||"defer"===s||"noModule"===s)?i[s]=!!n[e]:i.setAttribute(s,n[e])}let{children:s,dangerouslySetInnerHTML:o}=n;return o?i.innerHTML=o.__html||"":s&&(i.textContent="string"==typeof s?s:Array.isArray(s)?s.join(""):""),i}function s(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function o(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,i="";if(r){let{children:e}=r.props;i="string"==typeof e?e:Array.isArray(e)?e.join(""):""}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),o=Number(r.content),a=[];for(let t=0,n=r.previousElementSibling;t<o;t++,n=(null==n?void 0:n.previousElementSibling)||null){var l;(null==n?void 0:null==(l=n.tagName)?void 0:l.toLowerCase())===e&&a.push(n)}let u=t.map(i).filter(e=>{for(let t=0,n=a.length;t<n;t++)if(s(a[t],e))return a.splice(t,1),!1;return!0});a.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(o-a.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},12638:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return y},initScriptLoader:function(){return b},default:function(){return g}});let r=n(7838),i=n(5776),s=n(71590),o=r._(n(17664)),a=i._(n(63488)),l=n(85184),u=n(19010),c=n(12537),d=new Map,h=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],m=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},p=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:i=null,dangerouslySetInnerHTML:s,children:o="",strategy:a="afterInteractive",onError:l,stylesheets:c}=e,p=n||t;if(p&&h.has(p))return;if(d.has(t)){h.add(p),d.get(t).then(r,l);return}let y=()=>{i&&i(),h.add(p)},b=document.createElement("script"),v=new Promise((e,t)=>{b.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),b.addEventListener("error",function(e){t(e)})}).catch(function(e){l&&l(e)});for(let[n,r]of(s?(b.innerHTML=s.__html||"",y()):o?(b.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",y()):t&&(b.src=t,d.set(t,v)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();b.setAttribute(e,r)}"worker"===a&&b.setAttribute("type","text/partytown"),b.setAttribute("data-nscript",a),c&&m(c),document.body.appendChild(b)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>p(e))}):p(e)}function b(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");h.add(t)})}function v(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:i=null,strategy:u="afterInteractive",onError:d,stylesheets:f,...m}=e,{updateScripts:y,scripts:b,getIsSsr:v,appDir:g,nonce:E}=(0,a.useContext)(l.HeadManagerContext),S=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;S.current||(i&&e&&h.has(e)&&i(),S.current=!0)},[i,t,n]);let M=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!M.current&&("afterInteractive"===u?p(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>p(e))})),M.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(y?(b[u]=(b[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:i,onError:d,...m}]),y(b)):v&&v()?h.add(t||n):v&&!v()&&p(e)),g){if(f&&f.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(o.default.preload(n,m.integrity?{as:"script",integrity:m.integrity}:{as:"script"}),(0,s.jsx)("script",{nonce:E,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...m,id:t}])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),(0,s.jsx)("script",{nonce:E,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m,id:t}])+")"}}));"afterInteractive"===u&&n&&o.default.preload(n,m.integrity?{as:"script",integrity:m.integrity}:{as:"script"})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let g=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},62741:function(e,t,n){n.r(t),n.d(t,{useMutation:function(){return d}});var r=n(63488),i=n(41148),s=n(15058),o=n(18639),a=n(69646),l=class extends o.l{#e;#t=void 0;#n;#r;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),(0,a.VS)(this.options,t)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#n,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,a.Ym)(t.mutationKey)!==(0,a.Ym)(this.options.mutationKey)?this.reset():this.#n?.state.status==="pending"&&this.#n.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#n?.removeObserver(this)}onMutationUpdate(e){this.#i(),this.#s(e)}getCurrentResult(){return this.#t}reset(){this.#n?.removeObserver(this),this.#n=void 0,this.#i(),this.#s()}mutate(e,t){return this.#r=t,this.#n?.removeObserver(this),this.#n=this.#e.getMutationCache().build(this.#e,this.options),this.#n.addObserver(this),this.#n.execute(e)}#i(){let e=this.#n?.state??(0,i.R)();this.#t={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#s(e){s.V.batch(()=>{if(this.#r&&this.hasListeners()){let t=this.#t.variables,n=this.#t.context;e?.type==="success"?(this.#r.onSuccess?.(e.data,t,n),this.#r.onSettled?.(e.data,null,t,n)):e?.type==="error"&&(this.#r.onError?.(e.error,t,n),this.#r.onSettled?.(void 0,e.error,t,n))}this.listeners.forEach(e=>{e(this.#t)})})}},u=n(31463),c=n(39669);function d(e,t){let n=(0,u.useQueryClient)(t),[i]=r.useState(()=>new l(n,e));r.useEffect(()=>{i.setOptions(e)},[i,e]);let o=r.useSyncExternalStore(r.useCallback(e=>i.subscribe(s.V.batchCalls(e)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),a=r.useCallback((e,t)=>{i.mutate(e,t).catch(c.Z)},[i]);if(o.error&&(0,c.L)(i.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:a,mutateAsync:o.mutate}}}}]);