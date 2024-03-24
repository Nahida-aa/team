"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[633],{71425:function(t,e,r){function i({top:t,left:e,right:r,bottom:i}){return{x:{min:e,max:r},y:{min:t,max:i}}}function n({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function s(t,e){if(!e)return t;let r=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:r.y,left:r.x,bottom:i.y,right:i.x}}r.d(e,{d7:function(){return s},i8:function(){return i},z2:function(){return n}})},13092:function(t,e,r){r.d(e,{D2:function(){return m},YY:function(){return u},am:function(){return p},o2:function(){return l},q2:function(){return s}});var i=r(76800),n=r(16308);function s(t,e,r){return r+e*(t-r)}function a(t,e,r,i,n){return void 0!==n&&(t=i+n*(t-i)),i+r*(t-i)+e}function o(t,e=0,r=1,i,n){t.min=a(t.min,e,r,i,n),t.max=a(t.max,e,r,i,n)}function l(t,{x:e,y:r}){o(t.x,e.translate,e.scale,e.originPoint),o(t.y,r.translate,r.scale,r.originPoint)}function u(t,e,r,i=!1){let s,a;let o=r.length;if(o){e.x=e.y=1;for(let u=0;u<o;u++){a=(s=r[u]).projectionDelta;let o=s.instance;(!o||!o.style||"contents"!==o.style.display)&&(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&m(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(e.x*=a.x.scale,e.y*=a.y.scale,l(t,a)),i&&(0,n.ud)(s.latestValues)&&m(t,s.latestValues))}e.x=h(e.x),e.y=h(e.y)}}function h(t){return Number.isInteger(t)?t:t>1.0000000000001||t<.999999999999?t:1}function p(t,e){t.min=t.min+e,t.max=t.max+e}function c(t,e,[r,n,s]){let a=void 0!==e[s]?e[s]:.5,l=(0,i.t)(t.min,t.max,a);o(t,e[r],e[n],l,e.scale)}let d=["x","scaleX","originX"],f=["y","scaleY","originY"];function m(t,e){c(t.x,e,d),c(t.y,e,f)}},63277:function(t,e,r){r.d(e,{dO:function(){return a},wc:function(){return n}});let i=()=>({translate:0,scale:1,origin:0,originPoint:0}),n=()=>({x:i(),y:i()}),s=()=>({min:0,max:0}),a=()=>({x:s(),y:s()})},16308:function(t,e,r){function i(t){return void 0===t||1===t}function n({scale:t,scaleX:e,scaleY:r}){return!i(t)||!i(e)||!i(r)}function s(t){return n(t)||a(t)||t.z||t.rotate||t.rotateX||t.rotateY}function a(t){var e,r;return(e=t.x)&&"0%"!==e||(r=t.y)&&"0%"!==r}r.d(e,{D_:function(){return a},Lj:function(){return n},ud:function(){return s}})},35802:function(t,e,r){r.d(e,{J:function(){return s},z:function(){return a}});var i=r(71425),n=r(13092);function s(t,e){return(0,i.i8)((0,i.d7)(t.getBoundingClientRect(),e))}function a(t,e,r){let i=s(t,r),{scroll:a}=e;return a&&((0,n.am)(i.x,a.offset.x),(0,n.am)(i.y,a.offset.y)),i}},3512:function(t,e,r){r.d(e,{J:function(){return $}});var i=r(95542),n=r(81017),s=r(76645),a=r(4083);let o=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function l(t,e,r=1){(0,n.k)(r<=4,`Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);let[i,u]=function(t){let e=o.exec(t);if(!e)return[,];let[,r,i]=e;return[r,i]}(t);if(!i)return;let h=window.getComputedStyle(e).getPropertyValue(i);if(h){let t=h.trim();return(0,s.P)(t)?parseFloat(t):t}return(0,a.t)(u)?l(u,e,r+1):u}var u=r(92447),h=r(21384),p=r(2138),c=r(68825),d=r(11679),f=r(53368);let m=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),g=t=>m.has(t),v=t=>Object.keys(t).some(g),V=t=>t===d.Rx||t===f.px,y=(t,e)=>parseFloat(t.split(", ")[e]),x=(t,e)=>(r,{transform:i})=>{if("none"===i||!i)return 0;let n=i.match(/^matrix3d\((.+)\)$/);if(n)return y(n[1],e);{let e=i.match(/^matrix\((.+)\)$/);return e?y(e[1],t):0}},b=new Set(["x","y","z"]),C=h._.filter(t=>!b.has(t)),S={width:({x:t},{paddingLeft:e="0",paddingRight:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),height:({y:t},{paddingTop:e="0",paddingBottom:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:x(4,13),y:x(5,14)};S.translateX=S.x,S.translateY=S.y;let w=(t,e,r)=>{let i=e.measureViewportBox(),n=e.current,s=getComputedStyle(n),{display:a}=s,o={};"none"===a&&e.setStaticValue("display",t.display||"block"),r.forEach(t=>{o[t]=S[t](i,s)}),e.render();let l=e.measureViewportBox();return r.forEach(r=>{let i=e.getValue(r);i&&i.jump(o[r]),t[r]=S[r](l,s)}),t},F=(t,e,r={},i={})=>{e={...e},i={...i};let s=Object.keys(e).filter(g),a=[],o=!1,l=[];if(s.forEach(s=>{let h;let c=t.getValue(s);if(!t.hasValue(s))return;let d=r[s],m=(0,p.C)(d),g=e[s];if((0,u.C)(g)){let t=g.length,e=null===g[0]?1:0;d=g[e],m=(0,p.C)(d);for(let r=e;r<t&&null!==g[r];r++)h?(0,n.k)((0,p.C)(g[r])===h,"All keyframes must be of the same type"):(h=(0,p.C)(g[r]),(0,n.k)(h===m||V(m)&&V(h),"Keyframes must be of the same dimension as the current value"))}else h=(0,p.C)(g);if(m!==h){if(V(m)&&V(h)){let t=c.get();"string"==typeof t&&c.set(parseFloat(t)),"string"==typeof g?e[s]=parseFloat(g):Array.isArray(g)&&h===f.px&&(e[s]=g.map(parseFloat))}else(null==m?void 0:m.transform)&&(null==h?void 0:h.transform)&&(0===d||0===g)?0===d?c.set(h.transform(d)):e[s]=m.transform(g):(o||(a=function(t){let e=[];return C.forEach(r=>{let i=t.getValue(r);void 0!==i&&(e.push([r,i.get()]),i.set(r.startsWith("scale")?1:0))}),e.length&&t.render(),e}(t),o=!0),l.push(s),i[s]=void 0!==i[s]?i[s]:e[s],c.jump(g))}}),!l.length)return{target:e,transitionEnd:i};{let r=l.indexOf("height")>=0?window.pageYOffset:null,n=w(e,t,l);return a.length&&a.forEach(([e,r])=>{t.getValue(e).set(r)}),t.render(),c.j&&null!==r&&window.scrollTo({top:r}),{target:n,transitionEnd:i}}},M=(t,e,r,i)=>{var n,s;let o=function(t,{...e},r){let i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:r};for(let n in r&&(r={...r}),t.values.forEach(t=>{let e=t.get();if(!(0,a.t)(e))return;let r=l(e,i);r&&t.set(r)}),e){let t=e[n];if(!(0,a.t)(t))continue;let s=l(t,i);s&&(e[n]=s,r||(r={}),void 0===r[n]&&(r[n]=t))}return{target:e,transitionEnd:r}}(t,e,i);return e=o.target,i=o.transitionEnd,n=e,s=i,v(n)?F(t,n,r,s):{target:n,transitionEnd:s}};var P=r(63277),T=r(77254);let j={current:null},A={current:!1};var B=r(74154),E=r(41368),k=r(46666),N=r(51914),I=r(39238),R=r(86623),L=r(67213),O=r(36604),G=r(32423),U=r(28503),X=r(34029);let Y=Object.keys(O.A),D=Y.length,_=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],z=G.V.length;class J{constructor({parent:t,props:e,presenceContext:r,reducedMotionConfig:i,visualState:n},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>X.Wi.render(this.render,!1,!0);let{latestValues:a,renderState:o}=n;this.latestValues=a,this.baseTarget={...a},this.initialValues=e.initial?{...a}:{},this.renderState=o,this.parent=t,this.props=e,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=(0,I.G)(e),this.isVariantNode=(0,I.M)(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);let{willChange:l,...u}=this.scrapeMotionValuesFromProps(e,{});for(let t in u){let e=u[t];void 0!==a[t]&&(0,N.i)(e)&&(e.set(a[t],!1),(0,k.L)(l)&&l.add(t))}}scrapeMotionValuesFromProps(t,e){return{}}mount(t){this.current=t,U.R.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,e)=>this.bindToMotionValue(e,t)),A.current||function(){if(A.current=!0,c.j){if(window.matchMedia){let t=window.matchMedia("(prefers-reduced-motion)"),e=()=>j.current=t.matches;t.addListener(e),e()}else j.current=!1}}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||j.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){for(let t in U.R.delete(this.current),this.projection&&this.projection.unmount(),(0,X.Pn)(this.notifyUpdate),(0,X.Pn)(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this),this.events)this.events[t].clear();for(let t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,e){let r=h.G.has(t),i=e.on("change",e=>{this.latestValues[t]=e,this.props.onUpdate&&X.Wi.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),n=e.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),n()})}sortNodePosition(t){return this.current&&this.sortInstanceNodePosition&&this.type===t.type?this.sortInstanceNodePosition(this.current,t.current):0}loadFeatures({children:t,...e},r,i,n){let s,a;for(let t=0;t<D;t++){let r=Y[t],{isEnabled:i,Feature:n,ProjectionNode:o,MeasureLayout:l}=O.A[r];o&&(s=o),i(e)&&(!this.features[r]&&n&&(this.features[r]=new n(this)),l&&(a=l))}if(("html"===this.type||"svg"===this.type)&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);let{layoutId:t,layout:r,drag:i,dragConstraints:a,layoutScroll:o,layoutRoot:l}=e;this.projection.setOptions({layoutId:t,layout:r,alwaysMeasureLayout:!!i||a&&(0,T.I)(a),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"==typeof r?r:"both",initialPromotionConfig:n,layoutScroll:o,layoutRoot:l})}return a}updateFeatures(){for(let t in this.features){let e=this.features[t];e.isMounted?e.update():(e.mount(),e.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):(0,P.dO)()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}makeTargetAnimatable(t,e=!0){return this.makeTargetAnimatableFromInstance(t,e)}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let e=0;e<_.length;e++){let r=_[e];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);let i=t["on"+r];i&&(this.propEventSubscriptions[r]=this.on(r,i))}this.prevMotionValues=function(t,e,r){let{willChange:i}=e;for(let n in e){let s=e[n],a=r[n];if((0,N.i)(s))t.addValue(n,s),(0,k.L)(i)&&i.add(n);else if((0,N.i)(a))t.addValue(n,(0,E.BX)(s,{owner:t})),(0,k.L)(i)&&i.remove(n);else if(a!==s){if(t.hasValue(n)){let e=t.getValue(n);e.hasAnimated||e.set(s)}else{let e=t.getStaticValue(n);t.addValue(n,(0,E.BX)(void 0!==e?e:s,{owner:t}))}}}for(let i in r)void 0===e[i]&&t.removeValue(i);return e}(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){let t=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(t.initial=this.props.initial),t}let e={};for(let t=0;t<z;t++){let r=G.V[t],i=this.props[r];((0,R.$)(i)||!1===i)&&(e[r]=i)}return e}addVariantChild(t){let e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){e!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,e)),this.values.set(t,e),this.latestValues[t]=e.get()}removeValue(t){this.values.delete(t);let e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return void 0===r&&void 0!==e&&(r=(0,E.BX)(e,{owner:this}),this.addValue(t,r)),r}readValue(t){var e;return void 0===this.latestValues[t]&&this.current?null!==(e=this.getBaseTargetFromProps(this.props,t))&&void 0!==e?e:this.readValueFromInstance(this.current,t,this.options):this.latestValues[t]}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){var e;let{initial:r}=this.props,i="string"==typeof r||"object"==typeof r?null===(e=(0,L.o)(this.props,r))||void 0===e?void 0:e[t]:void 0;if(r&&void 0!==i)return i;let n=this.getBaseTargetFromProps(this.props,t);return void 0===n||(0,N.i)(n)?void 0!==this.initialValues[t]&&void 0===i?void 0:this.baseTarget[t]:n}on(t,e){return this.events[t]||(this.events[t]=new B.L),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}}class $ extends J{sortInstanceNodePosition(t,e){return 2&t.compareDocumentPosition(e)?1:-1}getBaseTargetFromProps(t,e){return t.style?t.style[e]:void 0}removeValueFromRenderState(t,{vars:e,style:r}){delete e[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:e,...r},n){let s=(0,i.P$)(r,t||{},this);if(n){(0,i.GJ)(this,r,s);let t=M(this,r,s,e);e=t.transitionEnd,r=t.target}return{transition:t,transitionEnd:e,...r}}}},72417:function(t,e,r){r.d(e,{W:function(){return c}});var i=r(40105),n=r(4083),s=r(21384),a=r(96834),o=r(16935),l=r(5225),u=r(35802),h=r(3512),p=r(51914);class c extends h.J{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,e){if(s.G.has(e)){let t=(0,l.A)(e);return t&&t.default||0}{let r=window.getComputedStyle(t),i=((0,n.f)(e)?r.getPropertyValue(e):r[e])||0;return"string"==typeof i?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:e}){return(0,u.J)(t,e)}build(t,e,r,n){(0,i.r)(t,e,r,n.transformTemplate)}scrapeMotionValuesFromProps(t,e){return(0,a.U)(t,e)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:t}=this.props;(0,p.i)(t)&&(this.childSubscription=t.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}renderInstance(t,e,r,i){(0,o.N)(t,e,r,i)}}},28503:function(t,e,r){r.d(e,{R:function(){return i}});let i=new WeakMap},80349:function(t,e,r){r.d(e,{e:function(){return d}});var i=r(88822),n=r(3512),s=r(35970),a=r(38708),o=r(16866),l=r(21384),u=r(38655),h=r(5225),p=r(63277),c=r(91712);class d extends n.J{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(l.G.has(e)){let t=(0,h.A)(e);return t&&t.default||0}return e=o.s.has(e)?e:(0,a.D)(e),t.getAttribute(e)}measureInstanceViewportBox(){return(0,p.dO)()}scrapeMotionValuesFromProps(t,e){return(0,i.U)(t,e)}build(t,e,r,i){(0,s.i)(t,e,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,e,r,i){(0,u.K)(t,e,r,i)}mount(t){this.isSVGTag=(0,c.a)(t.tagName),super.mount(t)}}}}]);