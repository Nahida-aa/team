(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3774],{15660:function(e,t,n){"use strict";n.r(t),n.d(t,{ErrorBoundary:function(){return i}});var r=n(71590),a=n(68396),l=n(58704);let s=()=>(0,r.jsxs)("div",{className:"flex w-full flex-col py-6 center",children:["Something went wrong. Please contract to"," ",(0,r.jsx)("a",{href:"mailto:i@innei.in",className:"shiro-link--underline",children:"i@innei.in"}),".",(0,r.jsx)(l.Sn,{onClick:()=>{window.location.reload()},children:"Reload Page"})]}),i=e=>{let{children:t}=e;return(0,r.jsx)(a.SV,{FallbackComponent:s,onError:e=>{console.error(e)},children:t})}},74352:function(e,t,n){"use strict";n.r(t),n.d(t,{HydrationEndDetector:function(){return i},isHydrationEnded:function(){return c}});var r=n(63488),a=n(36183),l=n(86990);let s=(0,a.atom)(!1),i=()=>((0,r.useEffect)(()=>{setTimeout(()=>{l.e.set(s,!0)},2e3)},[]),null),c=()=>l.e.get(s)},30132:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});var r=n(71590);let a=e=>{let{text:t}=e;return(0,r.jsx)("div",{className:"flex h-[100px] items-center justify-center text-lg font-medium",children:t||"您当前所在地区暂不支持此功能"})}},16266:function(e,t,n){"use strict";n.d(t,{k:function(){return l}});var r=n(71590),a=n(31721);function l(e){let{className:t}=e;return(0,r.jsx)("i",{className:(0,a.Z)("icon-[mingcute--send-plane-line]",t)})}},2226:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var r=n(71590);function a(e){return(0,r.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("path",{d:"M11 15H7C4.79086 15 3 16.7909 3 19C3 20.1046 3.89543 21 5 21H15M16.8744 13C16.2164 13.4935 15.6221 14.066 15.1049 14.7043C15.035 14.7906 15 14.8953 15 15M16.8744 17C16.2164 16.5065 15.6221 15.934 15.1049 15.2957C15.035 15.2094 15 15.1047 15 15M15 15H21M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}},41031:function(e,t,n){"use strict";n.r(t),n.d(t,{CommentBoxRoot:function(){return el}});var r=n(71590),a=n(63488),l=n(3838),s=n(62719),i=n(15660),c=n(34320),o=n(29318),u=n(31721),d=n(55874),m=n(31463),x=n(62741),h=n(15786),f=n(4711),g=n(55322),p=n(36183),j=n(16266),v=n(21104),y=n(29494),b=n(86990),w=n(58168),N=n(13774),k=n(85640),C=n(95669),M=n(20311);let z=()=>{let e=(0,C.dy)(),t=(0,C.wA)();return(0,r.jsxs)("span",{className:(0,u.Z)("font-mono text-[10px]",e?"text-red-500":"text-zinc-500"),children:[t.length,"/",k.l]})},Y=()=>{let e=(0,s.DH)(),t=(0,C.ql)(),n=(0,p.useAtomValue)((0,C.Qv)().isWhisper),a=(0,C.QM)();return e||t?null:(0,r.jsxs)("label",{className:"label mx-2 flex items-center",children:[(0,r.jsx)("input",{className:"checkbox-accent checkbox checkbox-sm mr-2",checked:n,type:"checkbox",onChange:e=>{a("isWhisper",e.target.checked)}}),(0,r.jsx)("span",{className:"label-text text-sm",children:"悄悄话"})]})},L=()=>{let e=(0,s.DH)(),t=(0,p.useAtomValue)((0,C.Qv)().syncToRecently),n=(0,C.QM)(),a=(0,C.ql)();return!e||a?null:(0,r.jsxs)("label",{className:"label mx-2 flex items-center",children:[(0,r.jsx)("input",{className:"checkbox-accent checkbox checkbox-sm mr-2",checked:t,type:"checkbox",onChange:e=>{n("syncToRecently",e.target.checked)}}),(0,r.jsx)("span",{className:"label-text text-sm",children:"同步到碎碎念"})]})},D=e=>{let{className:t}=e,n=(0,C.Mq)();return(0,r.jsxs)("footer",{className:(0,o.Y2)("mt-3 flex h-5 w-full min-w-0 items-center justify-between",t),children:[(0,r.jsxs)("span",{className:(0,u.Z)("flex-1 select-none text-[10px] text-zinc-500 transition-opacity"),children:[(0,r.jsxs)("span",{className:"hidden md:inline",children:["支持 ",(0,r.jsx)("b",{children:"Markdown"})," 与"," ",(0,r.jsx)(v.g,{href:"https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",children:"GFM"})]}),(0,r.jsx)(M.y,{})]}),(0,r.jsx)(h.M,{children:n&&(0,r.jsxs)(f.m.aside,{initial:{opacity:0,scale:.96,y:8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.98,y:8},className:"flex select-none items-center gap-2.5",children:[(0,r.jsx)(z,{}),(0,r.jsx)(Y,{}),(0,r.jsx)(L,{}),(0,r.jsx)(H,{})]},"send-button-wrapper")})]})},H=()=>{let e=(0,C.cb)(),{text:t,author:n,mail:a,url:l,source:i,avatar:c,isWhisper:o,syncToRecently:u}=(0,C.Qv)(),{afterSubmit:d}=(0,C.ce)(),h=(0,s.DH)(),p=(0,m.useQueryClient)(),v=(0,C.ql)(),k=(0,C.ST)(),M=(0,C.Gq)(),z=e=>(null==M||M(e),e),{mutate:Y,isPending:L}=(0,x.useMutation)({mutationFn:async e=>{let r=b.e.get(t),s=b.e.get(n),d=b.e.get(a),m=b.e.get(c),x=b.e.get(i),f={text:r,author:s,mail:d,avatar:m,source:x,url:b.e.get(l)};if(h&&delete f.avatar,Object.keys(f).forEach(e=>{""===f[e]&&delete f[e]}),v)return h?y.x1.comment.proxy.master.reply(e).post({data:{text:r,source:x}}).then(z):y.x1.comment.reply(e,f).then(z);let g=b.e.get(o),p=b.e.get(u);return h?y.x1.comment.proxy.master.comment(e).post({data:{text:r,source:x}}).then(async t=>(p&&y.x1.recently.proxy.post({data:{content:r,ref:e}}).then(()=>{w.A.success("已同步到碎碎念")}),t)).then(z):(f.isWhispers=g,y.x1.comment.comment(e,f).then(z))},mutationKey:[e,"comment"],onError(e){w.A.error((0,y.xN)(e))},onSuccess(n){null==d||d();let r=(0,N.buildQueryKey)(k);w.A.success(h?"发表成功啦~":v?"感谢你的回复！":"感谢你的评论！"),b.e.set(t,""),p.setQueryData(r,t=>t?v?(0,g.Uy)(t,t=>{let r=(e,t,n)=>{if(e.id===t)return e.children||(e.children=[]),e.children.push({...n,new:!0}),!0;if(e.children){for(let a of e.children)if(r(a,t,n))return!0;return!1}},a={...n,new:!0};for(let n of t.pages)for(let t of n.data)if(r(t,e,a))break}):(0,g.Uy)(t,e=>{e.pages[0].data.unshift({...n,new:!0})}):t)}});return(0,r.jsxs)(f.m.button,{className:"flex appearance-none items-center space-x-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",whileHover:{scale:1.05},whileTap:{scale:.95},type:"button",disabled:L,onClick:()=>{Y(e)},children:[(0,r.jsx)(j.k,{className:"size-5 text-zinc-800 dark:text-zinc-200"}),(0,r.jsx)(f.m.span,{className:"text-sm",layout:"size",children:L?"送信...":"送信"})]})},S=()=>{let e="bg-gray-200/50 dark:bg-zinc-800/50";return(0,r.jsxs)("div",{className:"flex animate-pulse gap-4",children:[(0,r.jsx)("div",{className:(0,u.Z)("size-12 self-end overflow-hidden rounded-full",e)}),(0,r.jsx)("div",{className:(0,u.Z)("h-[150px] w-full rounded-lg",e)})]})};var E=n(8585),F=n(27422),A=n(18278),V=n(16985),I=n(10471),P=n(98177);let _=(0,F.default)(()=>Promise.all([n.e(7282),n.e(8527)]).then(n.bind(n,15601)).then(e=>e.EmojiPicker),{loadableGenerated:{webpack:()=>[15601]}}),R=e=>{let{className:t}=e,n=(0,I._)(()=>(0,k.c)()),l=(0,C.QM)(),s=(0,C.wA)(),i=(0,a.useRef)(null),c=(0,a.useCallback)(e=>{if(!i.current)return;let t=i.current,n=t.selectionStart,r=t.selectionEnd;t.value="".concat(t.value.substring(0,n)," ").concat(e," ").concat(t.value.substring(r,t.value.length)),l("text",t.value),requestAnimationFrame(()=>{let r=n+e.length+2;t.selectionStart=r,t.selectionEnd=r,t.focus()})},[]);return(0,a.useEffect)(()=>{let e=i.current;e&&s!==e.value&&(e.value=s)},[s]),(0,E.L)(()=>{if("#comment"!==location.hash)return;let e=i.current;e&&(e.selectionStart=e.selectionEnd=e.value.length,e.focus(),e.scrollIntoView({behavior:"smooth",block:"center"}))},[]),(0,r.jsx)(V.Kx,{wrapperClassName:t,ref:i,defaultValue:s,onChange:e=>l("text",e.target.value),placeholder:n,children:(0,r.jsx)(M.gZ,{children:(0,r.jsx)(A.r,{trigger:"click",TriggerComponent:Z,headless:!0,children:(0,r.jsx)(_,{onEmojiSelect:c})})})})},Z=()=>(0,r.jsxs)("button",{className:"ml-0 inline-flex size-5 translate-y-1 text-base center md:ml-4",onClick:P.PF,children:[(0,r.jsx)("i",{className:"icon-[mingcute--emoji-2-line]"}),(0,r.jsx)("span",{className:"sr-only",children:"表情"})]}),B=()=>{let{user:e}=(0,d.aF)(),t=(0,C.QM)(),n=e?e.fullName||e.lastName||e.firstName||"Anonymous":"";return((0,a.useEffect)(()=>{var r,a;if(!e)return;t("author",n),t("avatar",e.imageUrl),t("mail",(null===(r=e.primaryEmailAddress)||void 0===r?void 0:r.emailAddress)||"");let l=null===(a=e.primaryEmailAddress)||void 0===a?void 0:a.verification.strategy;l&&t("source",l)},[n,t,e]),e)?(0,r.jsxs)("div",{className:"flex space-x-4",children:[(0,r.jsx)("div",{className:(0,u.Z)("mb-2 shrink-0 select-none self-end overflow-hidden rounded-full",'dark:ring-zinc-800" bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800',"ml-[2px] backface-hidden"),children:(0,r.jsx)("img",{className:"rounded-full object-cover",src:e.imageUrl,alt:"".concat(n,"'s avatar"),width:48,height:48})}),(0,r.jsx)("div",{className:"relative h-[150px] w-full rounded-lg bg-gray-200/50 dark:bg-zinc-800/50",children:(0,r.jsx)(R,{className:"pb-5"})}),(0,r.jsx)(D,{className:"absolute bottom-0 left-12 right-0 mb-2 ml-4 w-auto px-4"})]}):(0,r.jsx)(S,{})};var q=n(52282),T=n(67221),Q=n(13205);let G=()=>(0,s.DH)()?(0,r.jsx)(J,{}):(0,r.jsx)(O,{}),U="relative h-[150px] w-full rounded-lg bg-gray-200/50 dark:bg-zinc-800/50",W={author:"昵称",mail:"邮箱",url:"网址"},K=e=>{let{fieldKey:t,required:n}=e,[a,l]=(0,p.useAtom)((0,C.Qv)()[t]);return(0,r.jsx)(T.yt,{type:"text",value:a,onChange:e=>l(e.target.value),required:n,placeholder:W[t]+(n?" *":""),className:"border-0 bg-gray-200/50 dark:bg-zinc-800/50"})},O=()=>(0,r.jsxs)(T.l0,{className:"flex flex-col space-y-4 px-2 pt-2",showErrorMessage:!1,children:[(0,r.jsxs)("div",{className:"flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0",children:[(0,r.jsx)(K,{fieldKey:"author",required:!0}),(0,r.jsx)(K,{fieldKey:"mail",required:!0}),(0,r.jsx)(K,{fieldKey:"url"})]}),(0,r.jsx)("div",{className:U,children:(0,r.jsx)(R,{className:"pb-8"})}),(0,r.jsx)(D,{className:"absolute bottom-4 left-0 right-4 mb-2 ml-4 w-auto px-4"})]}),J=()=>{let e=(0,Q.useAggregationSelector)(e=>e.user);return(0,r.jsxs)("div",{className:"flex space-x-4",children:[(0,r.jsx)("div",{className:(0,u.Z)("mb-2 shrink-0 select-none self-end overflow-hidden rounded-full",'dark:ring-zinc-800" bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800',"ml-[2px] backface-hidden"),children:(0,r.jsx)(q.default,{className:"rounded-full object-cover",src:e.avatar,alt:"".concat(e.name||e.username,"'s avatar"),width:48,height:48})}),(0,r.jsx)("div",{className:U,children:(0,r.jsx)(R,{className:"pb-5"})}),(0,r.jsx)(D,{className:"absolute bottom-0 left-12 right-0 mb-2 ml-4 w-auto px-4"})]})};var $=n(97270),X=n(2226),ee=n(58704),et=n(96859),en=n(4348);function er(){let e=(0,$.usePathname)(),{dismissAll:t}=(0,et.Vu)();return(0,r.jsxs)("div",{className:"flex h-[150px] w-full space-x-4 rounded-lg bg-gray-100/80 center dark:bg-zinc-900/80",children:[(0,r.jsx)(ee.Sn,{variant:"secondary",type:"button",onClick:()=>{(0,C.Nv)(C.fF.legacy)},children:"免登录评论"}),(0,r.jsx)(d.$d,{mode:"modal",redirectUrl:(0,en.Y4)(e).href,children:(0,r.jsxs)(ee.Sn,{onClick:()=>{t()},variant:"primary",type:"button",children:[(0,r.jsx)(X.V,{className:"mr-1 size-5"}),"登录后才可以留言噢"]})})]})}let ea=()=>{let e=(0,C.GF)(),t="转换到".concat(e===C.fF.legacy?"新":"旧","版评论"),n=(0,C.Mq)(),l=!!(0,d.aF)(),i=(0,a.useRef)(function(){let e=(0,C.GF)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("i",{className:(0,u.Z)(e===C.fF.legacy?"icon-[mingcute--user-4-line]":"icon-[material-symbols--dynamic-form-outline]")}),(0,r.jsx)("span",{className:"sr-only",children:t})]})}).current;return(0,s.DH)()?null:(0,r.jsx)(ee.EM,{className:(0,u.Z)("absolute left-0 top-0 z-10 rounded-full text-sm","size-6 border border-slate-200 dark:border-neutral-800","bg-slate-100 dark:bg-neutral-900","flex cursor-pointer center","text-base-content/50","opacity-0 transition-opacity duration-200 group-[:hover]:opacity-100",e===C.fF.legacy&&"bottom-0 top-auto",n||l&&e===C.fF["with-auth"]&&"invisible opacity-0"),onClick:()=>{(0,C.Nv)(e===C.fF.legacy?C.fF["with-auth"]:C.fF.legacy)},children:(0,r.jsx)(A.r,{TriggerComponent:i,children:t})})},el=e=>{let{refId:t,className:n,afterSubmit:l,initialValue:c}=e,u=(0,C.GF)(),d=(0,s.DH)();return(0,a.useEffect)(()=>{d&&(0,C.Nv)(C.fF.legacy)},[d]),(0,r.jsx)(i.ErrorBoundary,{children:(0,r.jsx)(M.Se,{refId:t,afterSubmit:l,initialValue:c,children:(0,r.jsxs)("div",{className:(0,o.Y2)("group relative w-full min-w-0",n),"data-hide-print":!0,children:[(0,r.jsx)(ea,{}),(0,r.jsx)("div",{className:"relative w-full",children:u===C.fF.legacy?(0,r.jsx)(es,{}):(0,r.jsx)(ei,{})})]})})})},es=()=>(0,r.jsx)(c.c,{children:(0,r.jsx)(G,{})}),ei=()=>(0,r.jsxs)(c.c,{children:[(0,r.jsx)(l.SignedOut,{children:(0,r.jsx)(er,{})}),(0,r.jsx)(l.SignedIn,{children:(0,r.jsx)(B,{})})]})},85640:function(e,t,n){"use strict";n.d(t,{c:function(){return l},l:function(){return s}});var r=n(191);let a=["在这里说点什么呢。","小可爱，你想说点什么呢？","或许此地可以留下足迹","你的留言是我前进的动力！","说点什么吧，我会好好听的。","来一发评论，送你一个小星星！","你的评论会让我更加努力哦！","留下你的足迹，让我知道你来过。","我在这里等你的留言呢！","你的评论是我最大的动力！","来一发评论，让我知道你的想法吧！"],l=()=>(0,r.UP)(a),s=500},95669:function(e,t,n){"use strict";n.d(t,{GF:function(){return C},Gq:function(){return x},Mq:function(){return b},Nv:function(){return M},QM:function(){return N},Qv:function(){return g},ST:function(){return m},Zu:function(){return v},cb:function(){return f},ce:function(){return p},dy:function(){return w},fF:function(){return a},j2:function(){return y},ql:function(){return d},wA:function(){return h}});var r,a,l=n(63488),s=n(36183),i=n(35588),c=n(86990),o=n(85640),u=n(20311);let d=()=>(0,l.useContext)(u.YE),m=()=>{let e=(0,s.useAtomValue)((0,l.useContext)(u.Iy).refId);return(0,l.useContext)(u.Ap)||e},x=()=>(0,l.useContext)(u.ql),h=()=>(0,s.useAtomValue)((0,l.useContext)(u.Iy).text),f=()=>(0,s.useAtomValue)((0,l.useContext)(u.Iy).refId),g=()=>(0,l.useContext)(u.Iy),p=()=>(0,l.useContext)(u.zG),j=(0,s.atom)(null),v=()=>(0,s.useAtomValue)(j),y=e=>c.e.set(j,e),b=()=>(0,s.useAtomValue)((0,i.selectAtom)((0,l.useContext)(u.Iy).text,(0,l.useCallback)(e=>e.length>0,[]))),w=()=>(0,s.useAtomValue)((0,i.selectAtom)((0,l.useContext)(u.Iy).text,(0,l.useCallback)(e=>e.length>o.l,[]))),N=()=>{let e=(0,l.useContext)(u.Iy);return(0,l.useCallback)((t,n)=>{let r=e[t];if(!r)throw Error("atom ".concat(t," not found"));c.e.set(r,n)},[e])};(r=a||(a={}))[r.legacy=0]="legacy",r[r["with-auth"]=1]="with-auth";let k=(0,i.atomWithStorage)("comment-mode",1),C=()=>(0,s.useAtomValue)(k),M=e=>c.e.set(k,e)},20311:function(e,t,n){"use strict";n.d(t,{Ap:function(){return g},Iy:function(){return m},Se:function(){return h},Xf:function(){return u},YE:function(){return f},d_:function(){return j},gZ:function(){return v},ql:function(){return p},y:function(){return y},zG:function(){return x}});var r=n(71590),a=n(63488),l=n(36183),s=n(35588),i=n(80521),c=n(86990),o=n(95669);let u="comment-",d=()=>({refId:(0,l.atom)(""),text:(0,l.atom)(""),author:(0,s.atomWithStorage)("".concat(u,"author"),""),mail:(0,s.atomWithStorage)("".concat(u,"mail"),""),url:(0,s.atomWithStorage)("".concat(u,"url"),""),avatar:(0,l.atom)(""),source:(0,l.atom)(""),isWhisper:(0,s.atomWithStorage)("".concat(u,"is-whisper"),!1),syncToRecently:(0,s.atomWithStorage)("".concat(u,"sync-to-recently"),!0)}),m=(0,a.createContext)(null),x=(0,a.createContext)(null),h=e=>{let{refId:t,children:n,afterSubmit:s,initialValue:o}=e,u=(0,a.useMemo)(()=>({...d(),refId:(0,l.atom)(t)}),[t]);return(0,i.q)(()=>{o&&c.e.set(u.text,o)}),(0,r.jsx)(m.Provider,{value:u,children:(0,r.jsx)(x.Provider,{value:(0,a.useMemo)(()=>({afterSubmit:s}),[s]),children:n})},t)},f=(0,a.createContext)(!1),g=(0,a.createContext)(""),p=(0,a.createContext)(null),j=e=>{let{isReply:t,originalRefId:n,onCompleted:a,children:l}=e;return(0,r.jsx)(g.Provider,{value:n,children:(0,r.jsx)(f.Provider,{value:t,children:(0,r.jsx)(p.Provider,{value:a||null,children:l})})})},v=(0,a.memo)(e=>{let{children:t}=e;return(0,a.useEffect)(()=>((0,o.j2)(t),()=>{(0,o.j2)(null)}),[t]),null}),y=(0,a.memo)(()=>(0,o.Zu)());y.displayName="CommentBoxSlotProvider",v.displayName="CommentBoxSlotPortal"},65609:function(e,t,n){"use strict";n.d(t,{u:function(){return s}});var r=n(71590),a=n(47867);let l=["footnote","footnoteReference","image","htmlComment","htmlSelfClosing","htmlBlock"],s=e=>{let{children:t}=e;return(0,r.jsx)(a.UG,{disabledTypes:l,disableParsingRawHTML:!0,forceBlock:!0,value:t})}},35938:function(e,t,n){"use strict";n.d(t,{G:function(){return d},b:function(){return u}});var r=n(71590),a=n(31463),l=n(55322),s=n(29494),i=n(38654),c=n(95669),o=n(13774);let u=e=>{let{comment:t}=e,n=(0,a.useQueryClient)(),u=(0,c.cb)();return(0,r.jsx)(i.Np,{pin:!!t.pin,onPinChange:async e=>{n.setQueryData((0,o.buildQueryKey)(u),n=>(0,l.Uy)(n,n=>{if(!n)return n;let r=null;return n.pages.forEach(e=>e.data.forEach(e=>{t.id===e.id&&(r=e)})),r&&(r.pin=e),n})),await s.x1.comment.proxy(t.id).patch({data:{pin:e}})}})};function d(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.88em",height:"1em",viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8 10.5L9 14H5l1-3.5L5.25 9h3.5L8 10.5zM10 6H4L2 7h10l-2-1zM9 2L7 3L5 2L4 5h6L9 2zm4.03 7.75L10 9l1 2l-2 3h3.22c.45 0 .86-.31.97-.75l.56-2.28c.14-.53-.19-1.08-.72-1.22zM4 9l-3.03.75c-.53.14-.86.69-.72 1.22l.56 2.28c.11.44.52.75.97.75H5l-2-3l1-2z",fill:"currentColor"})})}},42524:function(e,t,n){"use strict";n.r(t),n.d(t,{CommentAreaRootLazy:function(){return u}});var r=n(71590),a=n(15660),l=n(90462),s=n(41031),i=n(13774),c=n(11781);let o=e=>{let{allowComment:t,refId:n}=e;return t||void 0===t?(0,r.jsxs)("div",{className:"relative mt-12",children:[(0,r.jsx)(s.CommentBoxRoot,{refId:n}),(0,r.jsx)("div",{className:"h-12"}),(0,r.jsx)(l.Z,{placeholder:(0,r.jsx)(c.w,{}),triggerOnce:!0,children:(0,r.jsx)(i.Comments,{refId:n})})]}):(0,r.jsx)("p",{className:"mt-[7.1rem] text-center text-xl font-medium",children:"评论已关闭"})},u=e=>(0,r.jsx)(a.ErrorBoundary,{children:(0,r.jsx)(o,{...e})})},11781:function(e,t,n){"use strict";n.d(t,{w:function(){return l}});var r=n(71590);let a=()=>(0,r.jsxs)("li",{className:"relative animate-pulse list-none",children:[(0,r.jsxs)("div",{className:"group flex w-full items-stretch gap-2",children:[(0,r.jsx)("div",{className:"flex w-9 shrink-0 items-end",children:(0,r.jsx)("div",{className:"size-9 rounded-full bg-gray-300 dark:bg-neutral-600"})}),(0,r.jsxs)("div",{className:"flex w-full min-w-0 flex-1 flex-col items-start",children:[(0,r.jsx)("span",{className:"relative mb-2 flex w-full min-w-0 items-center justify-center gap-2",children:(0,r.jsxs)("span",{className:"flex grow items-center gap-2",children:[(0,r.jsx)("span",{className:"ml-2 h-4 w-20 bg-gray-300 dark:bg-neutral-600"}),(0,r.jsxs)("span",{className:"flex select-none items-center space-x-2",children:[(0,r.jsx)("span",{className:"inline-flex h-4 w-20 bg-gray-300 text-[0.71rem] font-medium opacity-40 dark:bg-neutral-600"}),(0,r.jsx)("span",{className:"h-4 w-20 bg-gray-300 text-[0.71rem] opacity-30 dark:bg-neutral-600"})]})]})}),(0,r.jsxs)("div",{className:"relative flex w-full flex-col gap-2",children:[(0,r.jsx)("div",{className:"relative ml-2 inline-block h-4 w-[calc(100%-3rem)] rounded-xl bg-gray-300 px-2 py-1 dark:bg-neutral-600"}),(0,r.jsx)("div",{className:"relative ml-2 inline-block h-4 w-[120px] rounded-xl bg-gray-300 px-2 py-1 dark:bg-neutral-600"})]})]})]}),(0,r.jsx)("span",{className:"sr-only",children:"Loading..."})]}),l=()=>(0,r.jsxs)("div",{className:"flex min-h-[400px] flex-col space-y-4",children:[(0,r.jsx)(a,{}),(0,r.jsx)(a,{}),(0,r.jsx)(a,{}),(0,r.jsx)(a,{})]})},13774:function(e,t,n){"use strict";n.r(t),n.d(t,{Comments:function(){return A},buildQueryKey:function(){return F}});var r=n(71590),a=n(57550),l=n(63488),s=n(15660),i=n(30132),c=n(19999),o=n(29494),u=n(40752),d=n(17664),m=n(31721),x=n(4711),h=n(36183),f=n(7085),g=n(23324),p=n(97093),j=n(82314),v=n(86990),y=n(82724),b=n.n(y),w=n(65609),N=n(35938),k=n(34320),C=n(71001),M=n(95669),z=n(20311);let Y=e=>{let{commentId:t}=e,[n,a]=(0,l.useState)(!1),s=(0,M.cb)(),i=(0,l.useCallback)(()=>{a(!1)},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{"aria-label":"回复",className:(0,m.Z)("absolute bottom-0 right-0 translate-x-2/3 translate-y-1/4 text-xs","aspect-square rounded-full","box-content flex size-6 p-[2px] center","border border-slate-200 bg-zinc-100 dark:border-neutral-700 dark:bg-gray-800","invisible cursor-pointer opacity-0","group-[:hover]:visible group-[:hover]:opacity-70"),onClick:()=>{a(e=>!e)},children:(0,r.jsx)("i",{className:"icon-[mingcute--comment-line]"})}),(0,r.jsx)(S,{children:(0,r.jsx)(z.d_,{isReply:!0,originalRefId:s,onCompleted:i,children:(0,r.jsx)(k.c,{duration:.2,children:n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"h-6"}),(0,r.jsx)(C.lt,{refId:t}),(0,r.jsx)("div",{className:"h-6"})]})})})})]})},L=(0,l.memo)(function e(t){var n;let{comment:a,className:s}=t,i=(0,l.useMemo)(()=>(0,h.atom)(null),[]);if("string"==typeof a)return null;let{id:c,avatar:o,author:u,text:d,key:v,location:y,isWhispers:k,url:C,source:M}=a,z="string"==typeof a.parent?a.parent:null===(n=a.parent)||void 0===n?void 0:n.id,L=C?(0,r.jsx)("a",{href:C,className:"ml-2 max-w-full shrink-0 break-all",target:"_blank",rel:"noreferrer",children:u}):(0,r.jsx)("span",{className:"ml-2 max-w-full shrink-0 break-all",children:u});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(D.Provider,{value:i,children:[(0,r.jsx)(x.m.li,{initial:!a.new||{opacity:0,scale:.93,y:20},transition:j.t0,animate:a.new?{opacity:1,y:0,scale:1}:void 0,"data-comment-id":c,"data-parent-id":z,className:(0,m.Z)("relative my-2",s),children:(0,r.jsxs)("div",{className:"group flex w-full items-stretch gap-4",children:[(0,r.jsxs)("div",{className:"relative flex w-9 shrink-0 self-end",children:[(0,r.jsx)(f.q,{shadow:!1,imageUrl:o,alt:"".concat(u,"'s avatar"),className:"size-9 select-none rounded-full bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-800",width:24,height:24}),M&&!!(0,p.L)(M)&&(0,r.jsx)("div",{className:"absolute -right-1.5 bottom-1 flex size-3.5 rounded-full bg-white ring-[1.5px] ring-zinc-200 center dark:bg-zinc-800 dark:ring-black",children:(0,r.jsx)(p.C,{strategy:M,className:"size-3"})})]}),(0,r.jsxs)("div",{className:(0,m.Z)("flex flex-1 flex-col","w-full min-w-0 items-start"),children:[(0,r.jsxs)("span",{className:(0,m.Z)("flex items-center gap-2 font-semibold text-zinc-800 dark:text-zinc-200","relative mb-2 w-full min-w-0 justify-center"),children:[(0,r.jsxs)("span",{className:"flex grow flex-wrap items-center gap-2",children:[L,(0,r.jsxs)("span",{className:"flex min-w-0 shrink select-none flex-wrap items-center space-x-2 self-end",children:[(0,r.jsx)("span",{className:"inline-flex shrink-0 text-[0.71rem] font-medium opacity-40",children:(0,r.jsx)(g.i,{date:a.created})}),(0,r.jsx)("span",{className:"break-all text-[0.71rem] opacity-30",children:v}),!!y&&(0,r.jsxs)("span",{className:"min-w-0 max-w-full truncate break-all text-[0.71rem] opacity-35",children:["来自：",y]}),!!k&&(0,r.jsx)(N.G,{})]})]}),(0,r.jsx)("span",{className:"shrink-0",children:(0,r.jsx)(N.b,{comment:a})})]}),(0,r.jsxs)("div",{className:(0,m.Z)(b().comment__message,"relative inline-block rounded-xl px-2 py-1 text-zinc-800 dark:text-zinc-200","rounded-bl-sm bg-zinc-600/5 dark:bg-zinc-500/20","max-w-[calc(100%-3rem)]"),children:[(0,r.jsx)(w.u,{children:d}),(0,r.jsx)(Y,{commentId:a.id})]})]})]})}),(0,r.jsx)(H,{})]}),a.children&&a.children.length>0&&(0,r.jsx)("ul",{className:"my-2 space-y-2",children:a.children.map(t=>(0,r.jsx)(e,{comment:t,className:"ml-9"},t.id))})]})}),D=(0,l.createContext)((0,h.atom)(null)),H=()=>{let e=(0,l.useRef)(null),t=(0,l.useContext)(D);return(0,l.useLayoutEffect)(()=>(v.e.set(t,e.current),()=>{v.e.set(t,null)}),[t]),(0,r.jsx)("div",{ref:e})},S=e=>{let t=(0,h.useAtomValue)((0,l.useContext)(D));return t?(0,d.createPortal)(e.children,t):null};var E=n(11781);let F=e=>["comments",e],A=e=>{let{refId:t}=e,n=(0,l.useMemo)(()=>F(t),[t]),{data:d,isLoading:m,fetchNextPage:x,hasNextPage:h}=(0,a.useInfiniteQuery)({queryKey:n,queryFn:async e=>{let{queryKey:t,pageParam:n}=e,[,r]=t;return(await o.x1.comment.getByRefId(r,{page:n})).$serialized},meta:{persist:!1},getNextPageParam:e=>e.pagination.hasNextPage?e.pagination.currentPage+1:void 0,getPreviousPageParam:e=>e.pagination.currentPage-1,initialPageParam:1});return m?(0,r.jsx)(E.w,{}):d&&d.pages.length&&d.pages[0].data.length?(0,r.jsxs)(s.ErrorBoundary,{children:[(0,r.jsx)("ul",{className:"min-h-[400px] list-none space-y-4",children:null==d?void 0:d.pages.map((e,n)=>(0,r.jsx)(c.BottomToUpSoftScaleTransitionView,{children:e.data.map(e=>(0,r.jsx)(V,{comment:e,refId:t},e.id))},n))}),h&&(0,r.jsx)(u.d,{onLoading:x,children:(0,r.jsx)(E.w,{})})]}):(0,r.jsx)("div",{className:"flex min-h-[400px] center",children:(0,r.jsx)(i.W,{text:"这里还没有评论呢"})})},V=(0,l.memo)(function(e){let{comment:t,refId:n}=e;return(0,r.jsx)(z.Se,{refId:n,children:(0,r.jsx)(L,{comment:t})})})},71001:function(e,t,n){"use strict";n.d(t,{dS:function(){return s},lt:function(){return i}});var r=n(63488),a=n(27422),l=n(50407);n(42524);let s=(0,a.default)(()=>Promise.resolve().then(n.bind(n,13774)).then(e=>e.Comments),{loadableGenerated:{webpack:()=>[13774]},ssr:!1}),i=(0,a.default)(()=>n.e(9347).then(n.bind(n,59347)).then(e=>e.CommentBoxRoot),{loadableGenerated:{webpack:()=>[59347]},ssr:!1,loading:()=>(0,r.createElement)(l.g,{useDefaultLoadingText:!0})})},40752:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var r=n(71590),a=n(7038),l=n(50407);let s=e=>{let{onLoading:t,children:n,className:s}=e,{ref:i}=(0,a.YD)({rootMargin:"1px",onChange(e){e&&t()}});return(0,r.jsx)("div",{className:s,ref:i,children:null!=n?n:(0,r.jsx)(l.g,{})})}},38654:function(e,t,n){"use strict";n.d(t,{wt:function(){return m},Np:function(){return d}});var r=n(71590),a=n(62719),l=n(58704),s=n(63488),i=n(59908);let c=(0,n(62559).b)({from:{opacity:.001},to:{opacity:1}}),o=e=>{let{currentState:t,regularIcon:n,solidIcon:a}=e,l={solid:a,regular:n},[o,u]=(0,s.useState)(l[t]),d=(0,i.E)();return(0,s.useEffect)(()=>{d.start({opacity:.001}).then(()=>{u(l[t]),requestAnimationFrame(()=>{d.start({opacity:1})})})},[t]),(0,r.jsx)(c,{initial:!0,animate:d,transition:{duration:.2},children:o},t)};var u=n(29318);let d=e=>{let{className:t,pin:n,onPinChange:s}=e,i=(0,a.DH)(),c=async e=>{e.preventDefault(),e.stopPropagation(),s(!n)};return(0,r.jsx)(l.EM,{"aria-label":"Pin this post",className:(0,u.Y2)("absolute bottom-0 right-0 top-[4px] z-10 -m-5 box-content hidden size-5 items-center p-5",i&&"inline-flex cursor-pointer opacity-50 transition-opacity hover:opacity-100",!i&&n&&"pointer-events-none",n&&"!inline-flex text-uk-red-light opacity-100",t),onClick:c,children:(0,r.jsx)(o,{currentState:n?"solid":"regular",regularIcon:(0,r.jsx)(x,{}),solidIcon:(0,r.jsx)(m,{})})})};function m(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"m232 107.3l-58.5 58.5c4.5 12.7 6.4 33.9-13.2 60a16.3 16.3 0 0 1-11.7 6.4h-1.1a16.1 16.1 0 0 1-11.3-4.7L88 179.3l-34.3 34.4a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4L76.7 168l-48.4-48.4a15.9 15.9 0 0 1 1.3-23.8C55 75.3 79.3 79.4 90 82.7L148.7 24a16.1 16.1 0 0 1 22.6 0L232 84.7a15.9 15.9 0 0 1 0 22.6Z"})})}function x(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M236.7 96a15.9 15.9 0 0 0-4.7-11.3L171.3 24a16.1 16.1 0 0 0-22.6 0L90 82.7c-10.7-3.3-35-7.4-60.4 13.1a15.9 15.9 0 0 0-1.3 23.8L76.7 168l-34.4 34.3a8.1 8.1 0 0 0 0 11.4a8.2 8.2 0 0 0 11.4 0L88 179.3l48.2 48.2a16.1 16.1 0 0 0 11.3 4.7h1.1a16.3 16.3 0 0 0 11.7-6.4c19.6-26.1 17.7-47.3 13.2-60l58.5-58.5a15.9 15.9 0 0 0 4.7-11.3Zm-78.4 62.3a8.2 8.2 0 0 0-1.5 9.3c9.5 18.9-1.8 38.6-9.3 48.6L39.6 108.3C51.7 98.5 63.3 96 72.1 96s15.9 2.9 16.3 3.2a8.2 8.2 0 0 0 9.3-1.5L160 35.3L220.7 96Z"})})}},7085:function(e,t,n){"use strict";n.d(t,{q:function(){return o}});var r=n(71590),a=n(63488),l=n(69709),s=n(42111),i=n(29318),c=n(3869);let o=e=>{let{shadow:t=!0,lazy:n=!0,wrapperProps:o={},size:u,imageUrl:d,text:m,url:x,randomColor:h,radius:f,...g}=e,p=(0,a.useRef)(null),[j,v]=(0,a.useState)(!n),[y,b]=(0,a.useState)(!1),{className:w,...N}=o,k=(0,a.useMemo)(()=>(m||d)&&h&&(0,s.Jm)((0,s.QM)(m||d)),[m,d,h]),C=(0,l.F)()?null==k?void 0:k.dark.background:null==k?void 0:k.light.background;return(0,r.jsx)("div",{className:(0,i.Y2)("box-border backface-hidden",t&&"shadow-sm",w),ref:p,style:{...u?{height:"".concat(u||80,"px"),width:"".concat(u||80,"px")}:void 0,...C?{backgroundColor:C}:void 0,...f?{borderRadius:"full"===f?"100%":"".concat(f,"px")}:void 0},...N,children:(0,a.createElement)(x?"a":"div",{className:"relative inline-block h-full w-full",...x?{href:x,target:"_blank",rel:"noreferrer"}:{}},d&&!y?(0,r.jsx)("div",{className:(0,i.Y2)("size-full bg-cover bg-center bg-no-repeat transition-opacity duration-300",w),children:(0,r.jsx)("img",{src:d,style:{opacity:j?1:0,...f?{borderRadius:"full"===f?"100%":"".concat(f,"px")}:void 0},height:u,width:u,onLoad:()=>v(!0),onError:()=>b(!0),loading:n?"lazy":"eager",...g,className:(0,i.Y2)("aspect-square duration-200",g.className)})}):m?(0,r.jsx)("div",{className:"relative flex size-full grow select-none items-center justify-center",children:(0,r.jsx)(c.I,{scale:.5,text:m})}):null)})}},47867:function(e,t,n){"use strict";n.d(t,{UG:function(){return r.U},ri:function(){return r.r}});var r=n(84455);n(66959)},23324:function(e,t,n){"use strict";n.d(t,{i:function(){return c}});var r=n(71590),a=n(63488),l=n(87313),s=n.n(l),i=n(95156);let c=e=>{let[t,n]=(0,a.useState)((0,i.eM)(e.date)),{displayAbsoluteTimeAfterDay:l=29}=e;return(0,a.useEffect)(()=>{n((0,i.eM)(e.date));let t=setInterval(()=>{n((0,i.eM)(e.date))},1e3);return Math.abs(s()(e.date).diff(new Date,"d"))>l&&(t=clearInterval(t),n((0,i.sG)(e.date,"YY 年 M 月 D 日"))),()=>{t=clearInterval(t)}},[e.date,l]),(0,r.jsx)(r.Fragment,{children:t})}},3869:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var r=n(71590),a=n(63488);let l=(0,a.memo)(e=>{let t=(0,a.useRef)(null),[n,l]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let n;if(!t.current)return;let r=t.current,a=r.parentElement;return a&&(n=new ResizeObserver(()=>{let{width:t}=a.getBoundingClientRect();r.style.fontSize="".concat(t/e.text.length*e.scale,"px"),l(!0)})).observe(a),()=>{n&&n.disconnect()}},[e.scale]),(0,r.jsx)("span",{ref:t,className:n?"":"invisible",children:e.text})});l.displayName="FlexText"},19999:function(e,t,n){"use strict";n.r(t),n.d(t,{BottomToUpSoftScaleTransitionView:function(){return a}});var r=n(82314);let a=(0,n(62559).b)({from:{opacity:1e-5,scale:.96,y:10},to:{y:0,scale:1,opacity:1},preset:r.t0})},62559:function(e,t,n){"use strict";n.d(t,{b:function(){return c}});var r=n(71590),a=n(63488),l=n(4711),s=n(74352),i=n(82314);let c=e=>{let{from:t,to:n,initial:c,preset:o}=e,u=(0,a.forwardRef)((e,u)=>{let{timeout:d={},duration:m=.5,animation:x={},as:h="div",delay:f=0,lcpOptimization:g=!1,...p}=e,{enter:j=f,exit:v=f}=d,y=l.m[h],[b]=(0,a.useState)(s.isHydrationEnded),w={initial:c||t,animate:{...n,transition:{duration:m,...o||i.Q0,...x.enter,delay:j/1e3}},transition:{duration:m},exit:{...t,transition:{duration:m,...x.exit,delay:v/1e3}}};return g&&!b&&(w.initial=n,delete w.animate),(0,r.jsx)(y,{ref:u,...w,...p,children:e.children})});u.displayName="forwardRef(TransitionView)";let d=(0,a.memo)(u);return d.displayName="MemoedTransitionView",d}},97093:function(e,t,n){"use strict";n.d(t,{C:function(){return u},L:function(){return d}});var r=n(71590);function a(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{className:"fill-black dark:fill-white",d:"M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25z"})})}function l(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256",...e,children:[(0,r.jsx)("path",{fill:"#1877F2",d:"M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"}),(0,r.jsx)("path",{fill:"#FFF",d:"m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"})]})}var s=n(88956);function i(e){return(0,r.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,r.jsx)("path",{d:"M14.3392 7.95965C14.3392 7.49715 14.3017 7.03215 14.2217 6.57715H7.8042V9.19715H11.4792C11.3267 10.0421 10.8367 10.7896 10.1192 11.2646V12.9646H12.3117C13.5992 11.7796 14.3392 10.0296 14.3392 7.95965Z",fill:"#4285F4"}),(0,r.jsx)("path",{d:"M7.80412 14.6074C9.63912 14.6074 11.1866 14.0049 12.3141 12.9649L10.1216 11.2649C9.51162 11.6799 8.72412 11.9149 7.80662 11.9149C6.03162 11.9149 4.52662 10.7174 3.98662 9.10742H1.72412V10.8599C2.87912 13.1574 5.23162 14.6074 7.80412 14.6074Z",fill:"#34A853"}),(0,r.jsx)("path",{d:"M3.98375 9.1075C3.69875 8.2625 3.69875 7.3475 3.98375 6.5025V4.75H1.72375C0.75875 6.6725 0.75875 8.9375 1.72375 10.86L3.98375 9.1075Z",fill:"#FBBC04"}),(0,r.jsx)("path",{d:"M7.80412 3.69296C8.77412 3.67796 9.71162 4.04296 10.4141 4.71296L12.3566 2.77046C11.1266 1.61546 9.49412 0.980458 7.80412 1.00046C5.23162 1.00046 2.87912 2.45046 1.72412 4.75046L3.98412 6.50296C4.52162 4.89046 6.02912 3.69296 7.80412 3.69296Z",fill:"#EA4335"})]})}function c(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256",...e,children:[(0,r.jsx)("path",{fill:"#F1511B",d:"M121.666 121.666H0V0h121.666z"}),(0,r.jsx)("path",{fill:"#80CC28",d:"M256 121.666H134.335V0H256z"}),(0,r.jsx)("path",{fill:"#00ADEF",d:"M121.663 256.002H0V134.336h121.663z"}),(0,r.jsx)("path",{fill:"#FBBC09",d:"M256 256.002H134.335V134.336H256z"})]})}var o=n(60789);let u=e=>{let{strategy:t,className:n}=e,a=d(t);return t&&a?(0,r.jsx)(a,{className:n}):null},d=e=>{switch(e){case"from_oauth_github":return s.i;case"from_oauth_google":return i;case"from_oauth_apple":return a;case"from_oauth_microsoft":return c;case"from_oauth_facebook":return l;case"from_oauth_twitter":return o.Z;default:return null}}},95156:function(e,t,n){"use strict";n.d(t,{IW:function(){return f},T8:function(){return g},ZC:function(){return p},eM:function(){return m},fJ:function(){return h},sG:function(){return d},vz:function(){return x}});var r,a,l=n(87313),s=n.n(l);n(6248);var i=n(5261),c=n.n(i),o=n(38139),u=n.n(o);s().extend(c()),s().extend(u()),s().locale("zh-cn"),(r=a||(a={}))[r["MMM DD YYYY"]=0]="MMM DD YYYY",r[r["HH:mm"]=1]="HH:mm",r[r.LLLL=2]="LLLL",r[r["H:mm:ss A"]=3]="H:mm:ss A",r[r["YYYY-MM-DD"]=4]="YYYY-MM-DD",r[r["YYYY-MM-DD dddd"]=5]="YYYY-MM-DD dddd",r[r["YYYY-MM-DD ddd"]=6]="YYYY-MM-DD ddd",r[r["MM-DD ddd"]=7]="MM-DD ddd",r[r["YYYY 年 M 月 D 日 dddd"]=8]="YYYY 年 M 月 D 日 dddd";let d=(e,t)=>s()(e).format(t),m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;if(!e)return"";let n=+t-+(e=new Date(e));if(n<6e4){let e=Math.ceil(n/1e3);return e<=0?"刚刚":"".concat(e," 秒前")}return n<36e5?"".concat(Math.round(n/6e4)," 分钟前"):n<864e5?"".concat(Math.round(n/36e5)," 小时前"):n<2592e6?"".concat(Math.round(n/864e5)," 天前"):n<31536e6?"".concat(Math.round(n/2592e6)," 个月前"):"".concat(Math.round(n/31536e6)," 年前")},x=()=>{let e=new Date,t=new Date(e.getFullYear(),0,0);return Math.floor((e.getTime()-t.getTime())/864e5)};function h(e){var t;return(t=null!=e?e:new Date().getFullYear())%400==0||t%100!=0&&t%4==0?366:365}let f=()=>{let e=new Date;return e.getSeconds()+60*(e.getMinutes()+60*e.getHours())},g=86400;function p(e){let t=Math.floor(e/86400),n=Math.floor((e-=86400*t)/3600),r=Math.floor((e-=3600*n)/60),a="";return t>0&&(a+="".concat(t," 天 ")),n>0&&(a+="".concat(n," 小时 ")),r>0&&(a+="".concat(r," 分钟")),a.trim()}},4348:function(e,t,n){"use strict";n.d(t,{J8:function(){return s},M4:function(){return c},P1:function(){return i},Y4:function(){return l}});var r=n(76877),a=n(13205);function l(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.r8?new URL(t,"http://localhost:2323"):new URL(t,null===(e=(0,a.getAggregationData)())||void 0===e?void 0:e.url.webUrl)}function s(e){return o(e.title)&&o(e.slug)&&!o(e.order)}function i(e){return o(e.title)&&o(e.slug)&&o(e.order)}function c(e){return o(e.title)&&o(e.nid)}function o(e){return null!=e}l.build=function(e){return s(e)?e.category?"/posts/".concat(e.category.slug,"/").concat(encodeURIComponent(e.slug)):(console.error("PostModel.category is missing!!!!!"),"#"):i(e)?"/".concat(e.slug):c(e)?"/notes/".concat(e.nid):"/"}},82724:function(e){e.exports={comment__message:"Comment_comment__message__vO6iH"}}}]);