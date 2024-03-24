"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8030],{59260:function(t,e,r){r.d(e,{z:function(){return o}});var s=r(69646),i=r(15058),n=r(27561),u=r(18639),h=r(75243),o=class extends u.l{constructor(t,e){super(),this.options=e,this.#t=t,this.#e=null,this.bindMethods(),this.setOptions(e)}#t;#r=void 0;#s=void 0;#i=void 0;#n;#u;#e;#h;#o;#a;#c;#l;#d;#f=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#r.addObserver(this),a(this.#r,this.options)?this.#p():this.updateResult(),this.#y())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return c(this.#r,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return c(this.#r,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#R(),this.#v(),this.#r.removeObserver(this)}setOptions(t,e){let r=this.options,i=this.#r;if(this.options=this.#t.defaultQueryOptions(t),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.#b(),this.#r.setOptions(this.options),r._defaulted&&!(0,s.VS)(this.options,r)&&this.#t.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#r,observer:this});let n=this.hasListeners();n&&l(this.#r,i,this.options,r)&&this.#p(),this.updateResult(e),n&&(this.#r!==i||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.#Q();let u=this.#m();n&&(this.#r!==i||this.options.enabled!==r.enabled||u!==this.#d)&&this.#O(u)}getOptimisticResult(t){let e=this.#t.getQueryCache().build(this.#t,t),r=this.createResult(e,t);return(0,s.VS)(this.getCurrentResult(),r)||(this.#i=r,this.#u=this.options,this.#n=this.#r.state),r}getCurrentResult(){return this.#i}trackResult(t,e){let r={};return Object.keys(t).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(s),e?.(s),t[s])})}),r}trackProp(t){this.#f.add(t)}getCurrentQuery(){return this.#r}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){let e=this.#t.defaultQueryOptions(t),r=this.#t.getQueryCache().build(this.#t,e);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,e))}fetch(t){return this.#p({...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#i))}#p(t){this.#b();let e=this.#r.fetch(this.options,t);return t?.throwOnError||(e=e.catch(s.ZT)),e}#Q(){if(this.#R(),s.sk||this.#i.isStale||!(0,s.PN)(this.options.staleTime))return;let t=(0,s.Kp)(this.#i.dataUpdatedAt,this.options.staleTime);this.#c=setTimeout(()=>{this.#i.isStale||this.updateResult()},t+1)}#m(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#r):this.options.refetchInterval)??!1}#O(t){this.#v(),this.#d=t,!s.sk&&!1!==this.options.enabled&&(0,s.PN)(this.#d)&&0!==this.#d&&(this.#l=setInterval(()=>{(this.options.refetchIntervalInBackground||n.j.isFocused())&&this.#p()},this.#d))}#y(){this.#Q(),this.#O(this.#m())}#R(){this.#c&&(clearTimeout(this.#c),this.#c=void 0)}#v(){this.#l&&(clearInterval(this.#l),this.#l=void 0)}createResult(t,e){let r;let i=this.#r,n=this.options,u=this.#i,o=this.#n,c=this.#u,f=t!==i?t.state:this.#s,{state:p}=t,y={...p},R=!1;if(e._optimisticResults){let r=this.hasListeners(),s=!r&&a(t,e),u=r&&l(t,i,e,n);(s||u)&&(y={...y,...(0,h.z)(p.data,t.options)}),"isRestoring"===e._optimisticResults&&(y.fetchStatus="idle")}let{error:v,errorUpdatedAt:b,status:Q}=y;if(e.select&&void 0!==y.data){if(u&&y.data===o?.data&&e.select===this.#h)r=this.#o;else try{this.#h=e.select,r=e.select(y.data),r=(0,s.oE)(u?.data,r,e),this.#o=r,this.#e=null}catch(t){this.#e=t}}else r=y.data;if(void 0!==e.placeholderData&&void 0===r&&"pending"===Q){let t;if(u?.isPlaceholderData&&e.placeholderData===c?.placeholderData)t=u.data;else if(t="function"==typeof e.placeholderData?e.placeholderData(this.#a?.state.data,this.#a):e.placeholderData,e.select&&void 0!==t)try{t=e.select(t),this.#e=null}catch(t){this.#e=t}void 0!==t&&(Q="success",r=(0,s.oE)(u?.data,t,e),R=!0)}this.#e&&(v=this.#e,r=this.#o,b=Date.now(),Q="error");let m="fetching"===y.fetchStatus,O="pending"===Q,I="error"===Q,S=O&&m,g=void 0!==r;return{status:Q,fetchStatus:y.fetchStatus,isPending:O,isSuccess:"success"===Q,isError:I,isInitialLoading:S,isLoading:S,data:r,dataUpdatedAt:y.dataUpdatedAt,error:v,errorUpdatedAt:b,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>f.dataUpdateCount||y.errorUpdateCount>f.errorUpdateCount,isFetching:m,isRefetching:m&&!O,isLoadingError:I&&!g,isPaused:"paused"===y.fetchStatus,isPlaceholderData:R,isRefetchError:I&&g,isStale:d(t,e),refetch:this.refetch}}updateResult(t){let e=this.#i,r=this.createResult(this.#r,this.options);if(this.#n=this.#r.state,this.#u=this.options,void 0!==this.#n.data&&(this.#a=this.#r),(0,s.VS)(r,e))return;this.#i=r;let i={};t?.listeners!==!1&&(()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,r="function"==typeof t?t():t;if("all"===r||!r&&!this.#f.size)return!0;let s=new Set(r??this.#f);return this.options.throwOnError&&s.add("error"),Object.keys(this.#i).some(t=>this.#i[t]!==e[t]&&s.has(t))})()&&(i.listeners=!0),this.#I({...i,...t})}#b(){let t=this.#t.getQueryCache().build(this.#t,this.options);if(t===this.#r)return;let e=this.#r;this.#r=t,this.#s=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#y()}#I(t){i.V.batch(()=>{t.listeners&&this.listeners.forEach(t=>{t(this.#i)}),this.#t.getQueryCache().notify({query:this.#r,type:"observerResultsUpdated"})})}};function a(t,e){return!1!==e.enabled&&void 0===t.state.data&&!("error"===t.state.status&&!1===e.retryOnMount)||void 0!==t.state.data&&c(t,e,e.refetchOnMount)}function c(t,e,r){if(!1!==e.enabled){let s="function"==typeof r?r(t):r;return"always"===s||!1!==s&&d(t,e)}return!1}function l(t,e,r,s){return(t!==e||!1===s.enabled)&&(!r.suspense||"error"!==t.state.status)&&d(t,r)}function d(t,e){return!1!==e.enabled&&t.isStaleByTime(e.staleTime)}},41614:function(t,e,r){r.r(e),r.d(e,{QueryErrorResetBoundary:function(){return o},useQueryErrorResetBoundary:function(){return h}});var s=r(63488),i=r(71590);function n(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var u=s.createContext(n()),h=()=>s.useContext(u),o=t=>{let{children:e}=t,[r]=s.useState(()=>n());return(0,i.jsx)(u.Provider,{value:r,children:"function"==typeof e?e(r):e})}},85478:function(t,e,r){r.d(e,{JN:function(){return u},KJ:function(){return h},pf:function(){return n}});var s=r(63488),i=r(39669),n=(t,e)=>{(t.suspense||t.throwOnError)&&!e.isReset()&&(t.retryOnMount=!1)},u=t=>{s.useEffect(()=>{t.clearReset()},[t])},h=t=>{let{result:e,errorResetBoundary:r,throwOnError:s,query:n}=t;return e.isError&&!r.isReset()&&!e.isFetching&&n&&(0,i.L)(s,[e.error,n])}},61268:function(t,e,r){r.d(e,{Ct:function(){return s},Fb:function(){return i},SB:function(){return u},Z$:function(){return n},j8:function(){return h}});var s=(t,e)=>void 0===e.state.data,i=t=>{t.suspense&&"number"!=typeof t.staleTime&&(t.staleTime=1e3)},n=(t,e)=>t.isLoading&&t.isFetching&&!e,u=(t,e)=>t?.suspense&&e.isPending,h=(t,e,r)=>e.fetchOptimistic(t).catch(()=>{r.clearReset()})},24832:function(t,e,r){r.d(e,{r:function(){return c}});var s=r(63488),i=r(15058),n=r(41614),u=r(31463),h=r(33277),o=r(85478),a=r(61268);function c(t,e,r){let c=(0,u.useQueryClient)(r),l=(0,h.useIsRestoring)(),d=(0,n.useQueryErrorResetBoundary)(),f=c.defaultQueryOptions(t);f._optimisticResults=l?"isRestoring":"optimistic",(0,a.Fb)(f),(0,o.pf)(f,d),(0,o.JN)(d);let[p]=s.useState(()=>new e(c,f)),y=p.getOptimisticResult(f);if(s.useSyncExternalStore(s.useCallback(t=>{let e=l?()=>void 0:p.subscribe(i.V.batchCalls(t));return p.updateResult(),e},[p,l]),()=>p.getCurrentResult(),()=>p.getCurrentResult()),s.useEffect(()=>{p.setOptions(f,{listeners:!1})},[f,p]),(0,a.SB)(f,y))throw(0,a.j8)(f,p,d);if((0,o.KJ)({result:y,errorResetBoundary:d,throwOnError:f.throwOnError,query:c.getQueryCache().get(f.queryHash)}))throw y.error;return f.notifyOnChangeProps?y:p.trackResult(y)}},39669:function(t,e,r){function s(t,e){return"function"==typeof t?t(...e):!!t}function i(){}r.d(e,{L:function(){return s},Z:function(){return i}})}}]);