"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5268],{5811:function(e,t,n){n.d(t,{B:function(){return i},l:function(){return o}});var r=n(47406),u=n(36183);let[,,i,,,o]=(0,r.g0)((0,u.atom)(!1))},33534:function(e,t,n){n.d(t,{DH:function(){return l},Y:function(){return c},g$:function(){return f}});var r=n(36183),u=n(33157),i=n(29494),o=n(86990),s=n(37465),a=n(86836);let l=()=>(0,r.useAtomValue)(s.GC),c=()=>(0,r.useAtomValue)(s.Mu),f=async()=>{(0,u.LP)()&&(await i.x1.user.proxy.login.put().then(e=>{o.e.set(s.GC,!0),(0,u.o4)(e.token)}),await (0,a.ev)())}},22003:function(e,t,n){n.d(t,{B0:function(){return i.B0},BD:function(){return r.B},NB:function(){return o.NB},PG:function(){return o.PG},eS:function(){return i.eS},ev:function(){return i.ev},iH:function(){return u.iH}}),n(8057);var r=n(5811),u=n(37465),i=n(86836),o=n(54592)},37465:function(e,t,n){n.d(t,{GC:function(){return d},Mu:function(){return f},iH:function(){return v},login:function(){return g}});var r=n(36183),u=n(33157),i=n(29494),o=n(86990),s=n(58168),a=n(13205),l=n(33534),c=n(86836);let f=(0,r.atom)(e=>{var t;return null===(t=e(a.aggregationDataAtom))||void 0===t?void 0:t.user}),d=(0,r.atom)(!1),g=async(e,t)=>{var n,r;if(e&&t){let n=await i.x1.user.login(e,t).catch(e=>{throw console.error(e),s.A.error("再试试哦"),e});if(n){let e=n.token;(0,u.o4)(e),o.e.set(d,!0),await (0,c.ev)(),(0,s.A)("欢迎回来，".concat(null===(r=o.e.get(f))||void 0===r?void 0:r.name),"success")}return!0}let a=(0,u.LP)();if(a){if(!await i.x1.user.checkTokenValid(a).then(e=>!!e.ok).catch(()=>((0,u.gy)(),!1))){(0,u.gy)();return}return await (0,l.g$)(),(0,s.A)("欢迎回来，".concat(null===(n=o.e.get(f))||void 0===n?void 0:n.name),"success"),!0}},v=()=>o.e.get(d)},54592:function(e,t,n){n.d(t,{Kf:function(){return a},NB:function(){return o},PG:function(){return s},lG:function(){return l}});var r=n(47406),u=n(36183),i=n(86990);let[,,o,,,s]=(0,r.g0)((0,u.atom)(0)),a=(0,u.atom)(!1),l=e=>{i.e.set(a,e)}},86836:function(e,t,n){n.d(t,{B0:function(){return c},_k:function(){return s},eS:function(){return f},ev:function(){return l}});var r=n(83404),u=n(36183),i=n(29494),o=n(86990);let s=(0,u.atom)(null),a=(0,u.atom)(null),l=async()=>{let{data:e}=await r.queryClient.fetchQuery({queryKey:["app.url"],queryFn:()=>i.x1.proxy.options.url.get()});return e.adminUrl&&o.e.set(s,e.adminUrl),o.e.set(a,e.webUrl),e},c=()=>o.e.get(a),f=e=>o.e.set(a,e)},8057:function(e,t,n){n.d(t,{q:function(){return r}});let r=(0,n(36183).atom)({sm:!1,md:!1,lg:!1,xl:!1,"2xl":!1,h:0,w:0})},33082:function(e,t,n){n.r(t),n.d(t,{ToastCard:function(){return a}});var r=n(71590),u=n(31721),i=n(4711),o=n(58704);let s={success:(0,r.jsx)("i",{className:"icon-[mingcute--check-fill] text-uk-green-light"}),error:(0,r.jsx)("i",{className:"icon-[mingcute--close-fill] text-uk-red-light"}),info:(0,r.jsx)("i",{className:"icon-[mingcute--information-fill] text-uk-blue-light"}),warning:(0,r.jsx)("i",{className:"icon-[mingcute--alert-fill] text-uk-orange-light"}),default:(0,r.jsx)("i",{className:"icon-[mingcute--information-fill] text-uk-blue-light"})},a=e=>{var t,n;let{iconElement:a,message:l,closeToast:c,onClick:f}=e,d=f?i.m.button:i.m.div;return(0,r.jsxs)(d,{layout:"position",className:(0,u.Z)("relative w-full overflow-hidden rounded-xl card-shadow","my-4 mr-4 px-4 py-5 pr-7","bg-zinc-50/90 backdrop-blur-sm dark:bg-neutral-900/90","border border-slate-100/80 dark:border-neutral-900/80","space-x-4","flex items-center","select-none","[&>i]:shrink-0","[&>svg]:shrink-0"),onClick:f,children:[null!=a?a:s[null!==(n=null===(t=e.toastProps)||void 0===t?void 0:t.type)&&void 0!==n?n:"default"],(0,r.jsx)("span",{className:"text-left",children:l}),(0,r.jsx)(o.EM,{"aria-label":"Close toast",className:"absolute inset-y-0 right-3 flex items-center text-sm text-base-content/40 duration-200 hover:text-base-content/80",onClick:e=>{e.stopPropagation(),null==c||c()},children:(0,r.jsx)("i",{className:"icon-[mingcute--close-fill] p-2"})})]})}},28523:function(e,t,n){n.d(t,{T:function(){return i},j:function(){return o}});var r=n(76877),u=n(69254);let i=r.r8?"https://api.arthals.ink/api/v2":r.S_&&u.env.NEXT_PUBLIC_CLIENT_API_URL?u.env.NEXT_PUBLIC_CLIENT_API_URL:"https://api.arthals.ink/api/v2",o="https://api.arthals.ink"},80521:function(e,t,n){n.d(t,{q:function(){return u}});var r=n(63488);let u=e=>{let t=(0,r.useRef)(!1);t.current||(t.current=!0,null==e||e())}},33157:function(e,t,n){n.d(t,{D2:function(){return f},LP:function(){return s},MO:function(){return g},gy:function(){return l},o4:function(){return a}});var r=n(87313),u=n.n(r),i=n(35080);let o="mx-token";function s(){let e=i.Z.get("__session");return i.Z.get(o)||e||null}function a(e){if("string"==typeof e)return i.Z.set(o,e,{expires:14})}function l(){return i.Z.remove(o)}let c="mx-like";function f(e){let t=d();if(t){if(g(e))return;i.Z.set(c,JSON.stringify(JSON.parse(t).concat(e)),{expires:v()})}else i.Z.set(c,JSON.stringify([e]),{expires:v()})}function d(){var e;return decodeURIComponent(null!==(e=i.Z.get(c))&&void 0!==e?e:"")}function g(e){let t=d();return!!t&&JSON.parse(t).includes(e)}function v(){return u()().add(1,"d").set("h",2).set("m",0).toDate()}},76877:function(e,t,n){n.d(t,{S_:function(){return r},r8:function(){return i},s$:function(){return u}});let r=!0,u=!1,i=!1},29494:function(e,t,n){n.d(t,{x1:function(){return d},xN:function(){return v}});var r=n(85997),u=n(96491),i=n(14756),o=n(22003),s=n(28523);n(45640);var a=n(33157),l=n(76877);let c="x-uuid",f=(0,r.x0)();l.S_&&!sessionStorage.getItem(c)&&sessionStorage.setItem(c,f);let d=(0,u.eI)(i.N)(s.T,{controllers:u.Mh}),g=i.N.default;g.defaults.timeout=8e3,g.interceptors.request.use(e=>{let t=(0,a.LP)();if(e.headers){var n,r,u;t&&(e.headers.Authorization="bearer ".concat(t)),e.headers["x-session-uuid"]=null!==(u=null===(r=globalThis)||void 0===r?void 0:null===(n=r.sessionStorage)||void 0===n?void 0:n.getItem(c))&&void 0!==u?u:f}return(0,o.iH)()&&(e.params={...e.params,ts:Date.now()}),l.r8&&l.s$&&console.log("[Request]: ".concat(e.url)),e});let v=e=>{var t,n;if(!(e instanceof u.Lu))return e.message;let r=e.raw,i=null===(n=r.response)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.message;return("string"==typeof i?i:Array.isArray(i)?i[0]:void 0)||r.message}},86990:function(e,t,n){n.d(t,{e:function(){return r}});let r=(0,n(9805).g)()},58168:function(e,t,n){n.d(t,{A:function(){return s}});var r=n(63488),u=n(73786),i=n(33082);let o={position:"bottom-right",autoClose:3e3,pauseOnHover:!0,hideProgressBar:!0,closeOnClick:!0,closeButton:!1},s=(e,t,n)=>{let{iconElement:s,onClick:a,...l}=n||{};return(0,u.toast)((0,r.createElement)(i.ToastCard,{message:e,iconElement:s,onClick:a}),{type:t,...o,...l})};["success","info","warn","error"].forEach(e=>{s[e]=(t,n)=>s(t,e,n)}),Object.assign(s,{dismiss:u.toast.dismiss})},13205:function(e,t,n){n.r(t),n.d(t,{AggregationProvider:function(){return d},aggregationDataAtom:function(){return c},getAggregationData:function(){return m},getAppConfig:function(){return h},useAggregationSelector:function(){return g},useAppConfigSelector:function(){return v}});var r=n(63488),u=n(36183),i=n(35588),o=n(22003),s=n(37465),a=n(80521),l=n(86990);let c=(0,u.atom)(null),f=(0,u.atom)(null),d=e=>{let{children:t,aggregationData:n,appConfig:u}=e;(0,a.q)(()=>{n&&(l.e.set(c,n),(0,o.eS)(n.url.webUrl))}),(0,a.q)(()=>{u&&l.e.set(f,u)}),(0,r.useEffect)(()=>{u&&l.e.set(f,u)},[u]),(0,r.useEffect)(()=>{n&&(l.e.set(c,n),(0,o.eS)(n.url.webUrl))},[n]);let i=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{!i.current&&(null==n?void 0:n.user)&&(i.current=!0,(0,s.login)().then(e=>{e&&setTimeout(()=>{(0,o.ev)()},1e3)}))},[null==n?void 0:n.user]),t},g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(0,u.useAtomValue)((0,i.selectAtom)(c,(0,r.useCallback)(t=>t?e(t):null,t)))},v=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(0,u.useAtomValue)((0,i.selectAtom)(f,(0,r.useCallback)(t=>t?e(t):null,t)))},m=()=>l.e.get(c),h=()=>l.e.get(f)},83404:function(e,t,n){n.r(t),n.d(t,{ReactQueryProvider:function(){return m},ReactQueryProviderForDashboard:function(){return p},getQueryClientForDashboard:function(){return h},queryClient:function(){return g}});var r=n(71590),u=n(51369),i=n(31463),o=n(7328),s=n(63488),a=n(32415),l=n(96491),c=n(9842);let f=n(76877).s$?void 0:(0,a.MT)("react-query","queries"),d=(0,c.S)({storage:{getItem:async e=>await (0,a.U2)(e,f),setItem:async(e,t)=>{await (0,a.t8)(e,t,f)},removeItem:async e=>{await (0,a.IV)(e,f)}}}),g=new u.S({defaultOptions:{queries:{staleTime:3e5,refetchOnWindowFocus:!1,refetchIntervalInBackground:!1}}}),v={persister:d,maxAge:6048e5,dehydrateOptions:{shouldDehydrateQuery:e=>{var t,n,r,u;let i="success"===e.state.status;return(null===(t=e.meta)||void 0===t?void 0:t.persist)!==!1&&!!i&&(!((null===(u=e.state)||void 0===u?void 0:null===(r=u.data)||void 0===r?void 0:null===(n=r.pages)||void 0===n?void 0:n.length)>1)||!!e.state.data&&!e.state.data.pages)}}},m=e=>{let{children:t}=e;return(0,r.jsx)(o.S,{client:g,persistOptions:v,children:t})},h=()=>new u.S({defaultOptions:{queries:{refetchOnWindowFocus:!0,refetchIntervalInBackground:!1,refetchOnMount:!0,retry:(e,t)=>(!(t instanceof l.Lu)||401!==t.status)&&e<3}}}),p=e=>{let{children:t}=e;return(0,r.jsx)(i.QueryClientProvider,{client:(0,s.useState)(h)[0],children:t})}},45640:function(e){e.exports={i8:"1.0.0"}}}]);