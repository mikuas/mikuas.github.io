import{o as ja,a as Pa,i as za}from"./lifecycle.Dy7ve5tN.js";import{a2 as $a,a8 as Ia,aB as Ra,aC as Wa,k as Na,u as qa,aD as Ya,ak as ze,aE as Oa,q as Ka,aF as ht,c as it,f as tt,a as N,p as Ua,b as Ha,s as l,m as F,aq as K,g as t,d as vt,h as v,e as i,r,n as Xa,t as Pt}from"./template.DsU3k-P_.js";import{a as Ga,s as V}from"./render.YytcREps.js";import{i as z}from"./if.DLQ6_Nhc.js";import{e as Va,i as Ja}from"./each.CAKQKmA_.js";import{a as q,s as nt,c as De}from"./props.BSKucjJB.js";import{e as h}from"./utils.Dogt5-nj.js";import{b as Se}from"./this.BiHWx9U5.js";import{I as f}from"./Icon.D8KcrlaJ.js";import{m as xt}from"./config.7OfNXQak.js";import{I as Qa}from"./zh_TW.Da9O402A.js";import{i as Za}from"./translation._gmS6559.js";const tr=()=>performance.now(),J={tick:c=>requestAnimationFrame(c),now:()=>tr(),tasks:new Set};function $e(){const c=J.now();J.tasks.forEach(n=>{n.c(c)||(J.tasks.delete(n),n.f())}),J.tasks.size!==0&&J.tick($e)}function er(c){let n;return J.tasks.size===0&&J.tick($e),{promise:new Promise(w=>{J.tasks.add(n={c,f:w})}),abort(){J.tasks.delete(n)}}}function zt(c,n){ze(()=>{c.dispatchEvent(new CustomEvent(n))})}function ar(c){if(c==="float")return"cssFloat";if(c==="offset")return"cssOffset";if(c.startsWith("--"))return c;const n=c.split("-");return n.length===1?n[0]:n[0]+n.slice(1).map(w=>w[0].toUpperCase()+w.slice(1)).join("")}function je(c){const n={},w=c.split(";");for(const k of w){const[T,C]=k.split(":");if(!T||C===void 0)break;const $=ar(T.trim());n[$]=C.trim()}return n}const rr=c=>c;function ir(c,n,w,k){var T=(c&Ya)!==0,C="both",$,x=n.inert,B=n.style.overflow,d,b;function P(){return ze(()=>$??=w()(n,k?.()??{},{direction:C}))}var E={is_global:T,in(){n.inert=x,zt(n,"introstart"),d=ae(n,P(),b,1,()=>{zt(n,"introend"),d?.abort(),d=$=void 0,n.style.overflow=B})},out(S){n.inert=!0,zt(n,"outrostart"),b=ae(n,P(),d,0,()=>{zt(n,"outroend"),S?.()})},stop:()=>{d?.abort(),b?.abort()}},M=$a;if((M.transitions??=[]).push(E),Ga){var D=T;if(!D){for(var u=M.parent;u&&(u.f&Ia)!==0;)for(;(u=u.parent)&&(u.f&Ra)===0;);D=!u||(u.f&Wa)!==0}D&&Na(()=>{qa(()=>E.in())})}}function ae(c,n,w,k,T){var C=k===1;if(Oa(n)){var $,x=!1;return Ka(()=>{if(!x){var S=n({direction:C?"in":"out"});$=ae(c,S,w,k,T)}}),{abort:()=>{x=!0,$?.abort()},deactivate:()=>$.deactivate(),reset:()=>$.reset(),t:()=>$.t()}}if(w?.deactivate(),!n?.duration)return T(),{abort:ht,deactivate:ht,reset:ht,t:()=>k};const{delay:B=0,css:d,tick:b,easing:P=rr}=n;var E=[];if(C&&w===void 0&&(b&&b(0,1),d)){var M=je(d(0,1));E.push(M,M)}var D=()=>1-k,u=c.animate(E,{duration:B,fill:"forwards"});return u.onfinish=()=>{u.cancel();var S=w?.t()??1-k;w?.abort();var g=k-S,et=n.duration*Math.abs(g),at=[];if(et>0){var I=!1;if(d)for(var p=Math.ceil(et/16.666666666666668),y=0;y<=p;y+=1){var a=S+g*P(y/p),Q=je(d(a,1-a));at.push(Q),I||=Q.overflow==="hidden"}I&&(c.style.overflow="hidden"),D=()=>{var U=u.currentTime;return S+g*P(U/et)},b&&er(()=>{if(u.playState!=="running")return!1;var U=D();return b(U,1-U),!0})}u=c.animate(at,{duration:et,fill:"forwards"}),u.onfinish=()=>{D=()=>k,b?.(k,1-k),T()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=ht)},deactivate:()=>{T=ht},reset:()=>{k===0&&b?.(1,0)},t:()=>D()}}function Pe(c){return function(...n){var w=n[0];return w.stopPropagation(),c?.apply(this,n)}}function nr(c){const n=c-1;return n*n*n+1}function sr(c,{delay:n=0,duration:w=400,easing:k=nr,axis:T="y"}={}){const C=getComputedStyle(c),$=+C.opacity,x=T==="y"?"height":"width",B=parseFloat(C[x]),d=T==="y"?["top","bottom"]:["left","right"],b=d.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),P=parseFloat(C[`padding${b[0]}`]),E=parseFloat(C[`padding${b[1]}`]),M=parseFloat(C[`margin${b[0]}`]),D=parseFloat(C[`margin${b[1]}`]),u=parseFloat(C[`border${b[0]}Width`]),S=parseFloat(C[`border${b[1]}Width`]);return{delay:n,duration:w,easing:k,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*$};${x}: ${g*B}px;padding-${d[0]}: ${g*P}px;padding-${d[1]}: ${g*E}px;margin-${d[0]}: ${g*M}px;margin-${d[1]}: ${g*D}px;border-${d[0]}-width: ${g*u}px;border-${d[1]}-width: ${g*S}px;min-${x}: 0`}}var or=vt('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),lr=vt('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),ur=vt('<span class="text-sm text-[var(--content-meta)]"></span>'),cr=vt('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),dr=vt('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),vr=vt(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function Fr(c,n){Ha(n,!1);let w=xt.mode??"meting",k=xt.meting_api??"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",T=xt.id??"14164869977",C=xt.server??"netease",$=xt.type??"playlist",x=F(!1),B=F(!1),d=F(!1),b=F(!1),P=F(0),E=F(0),M=F(.7),D=F(!1),u=F(!1),S=F(!1),g=F(0),et=F(""),at=F(!1),I=F({title:"示例歌曲",artist:"示例艺术家",cover:"/favicon/favicon-light-192.png",url:"",duration:0}),p=F([]),y=F(0),a=F(),Q=F(),U=F();const Ie=[{id:1,title:"ひとり上手",artist:"Kaya",cover:"assets/music/cover/hitori.jpg",url:"assets/music/url/hitori.mp3",duration:240},{id:2,title:"眩耀夜行",artist:"スリーズブーケ",cover:"assets/music/cover/xryx.jpg",url:"assets/music/url/xryx.mp3",duration:180},{id:3,title:"春雷の頃",artist:"22/7",cover:"assets/music/cover/cl.jpg",url:"assets/music/url/cl.mp3",duration:200}];async function Re(){if(!k||!T)return;l(u,!0);const s=k.replace(":server",C).replace(":type",$).replace(":id",T).replace(":auth","").replace(":r",Date.now().toString());try{const j=await fetch(s);if(!j.ok)throw new Error("meting api error");const H=await j.json();l(p,H.map(W=>{let ft=W.name??W.title??"未知歌曲",Ft=W.artist??W.author??"未知艺术家",R=W.duration??0;return R>1e4&&(R=Math.floor(R/1e3)),(!Number.isFinite(R)||R<=0)&&(R=0),{id:W.id,title:ft,artist:Ft,cover:W.pic??"",url:W.url??"",duration:R}})),t(p).length>0&&It(t(p)[0]),l(u,!1)}catch{Et("Meting 歌单获取失败"),l(u,!1)}}function We(){!t(a)||!t(I).url||(t(x)?t(a).pause():t(a).play())}function yt(){l(B,!t(B)),t(B)&&(l(b,!1),l(d,!1))}function _t(){l(d,!t(d)),t(d)&&(l(B,!1),l(b,!1))}function re(){l(b,!t(b))}function Ne(){l(S,!t(S))}function qe(){l(g,(t(g)+1)%3)}function Ye(){if(t(p).length<=1)return;const s=t(y)>0?t(y)-1:t(p).length-1;wt(s)}function $t(){if(t(p).length<=1)return;let s;if(t(S))do s=Math.floor(Math.random()*t(p).length);while(s===t(y)&&t(p).length>1);else s=t(y)<t(p).length-1?t(y)+1:0;wt(s)}function wt(s){if(s<0||s>=t(p).length)return;const j=t(x);l(y,s),t(a)&&t(a).pause(),It(t(p)[t(y)]),(j||!t(x))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function kt(s){return s.startsWith("http://")||s.startsWith("https://")||s.startsWith("/")?s:`/${s}`}function It(s){!s||!t(a)||(l(I,{...s}),s.url?(l(u,!0),t(a).pause(),K(a,t(a).currentTime=0),l(P,0),l(E,s.duration??0),t(a).removeEventListener("loadeddata",ie),t(a).removeEventListener("error",ne),t(a).removeEventListener("loadstart",se),t(a).addEventListener("loadeddata",ie,{once:!0}),t(a).addEventListener("error",ne,{once:!0}),t(a).addEventListener("loadstart",se,{once:!0}),K(a,t(a).src=kt(s.url)),t(a).load()):l(u,!1))}function ie(){l(u,!1),t(a)?.duration&&t(a).duration>1&&(l(E,Math.floor(t(a).duration)),t(p)[t(y)]&&K(p,t(p)[t(y)].duration=t(E)),K(I,t(I).duration=t(E)))}function ne(s){l(u,!1),Et(`无法播放 "${t(I).title}"，正在尝试下一首...`),t(p).length>1?setTimeout(()=>$t(),1e3):Et("播放列表中没有可用的歌曲")}function se(){}function Et(s){l(et,s),l(at,!0),setTimeout(()=>{l(at,!1)},3e3)}function Oe(){l(at,!1)}function Ke(s){if(!t(a)||!t(Q))return;const j=t(Q).getBoundingClientRect(),W=(s.clientX-j.left)/j.width*t(E);K(a,t(a).currentTime=W),l(P,W)}function Ue(s){if(!t(a)||!t(U))return;const j=t(U).getBoundingClientRect(),H=Math.max(0,Math.min(1,(s.clientX-j.left)/j.width));l(M,H),K(a,t(a).volume=t(M)),l(D,t(M)===0)}function oe(){t(a)&&(l(D,!t(D)),K(a,t(a).muted=t(D)))}function le(s){if(!Number.isFinite(s)||s<0)return"0:00";const j=Math.floor(s/60),H=Math.floor(s%60);return`${j}:${H.toString().padStart(2,"0")}`}function He(){t(a)&&(t(a).addEventListener("play",()=>{l(x,!0)}),t(a).addEventListener("pause",()=>{l(x,!1)}),t(a).addEventListener("timeupdate",()=>{l(P,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(g)===1?(K(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(g)===2||t(y)<t(p).length-1||t(S)?$t():l(x,!1)}),t(a).addEventListener("error",s=>{l(u,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}ja(()=>{l(a,new Audio),K(a,t(a).volume=t(M)),He(),w==="meting"?Re():(l(p,[...Ie]),t(p).length>0?It(t(p)[0]):Et("本地播放列表为空"))}),Pa(()=>{t(a)&&(t(a).pause(),K(a,t(a).src=""))}),za();var ue=it(),Xe=tt(ue);{var Ge=s=>{var j=vr(),H=tt(j);{var W=e=>{var m=or(),_=i(m),A=i(_);f(A,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var L=v(A,2),o=i(L,!0);r(L);var X=v(L,2),ct=i(X);f(ct,{icon:"material-symbols:close",class:"text-lg"}),r(X),r(_),r(m),Pt(()=>V(o,t(et))),h("click",X,Oe),N(e,m)};z(H,e=>{t(at)&&e(W)})}var ft=v(H,2);let Ft;var R=i(ft);let ce;var Ve=i(R);{var Je=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},Qe=e=>{var m=it(),_=tt(m);{var A=o=>{var X=lr();N(o,X)},L=o=>{f(o,{icon:"material-symbols:music-note",class:"text-white text-lg"})};z(_,o=>{t(x)?o(A):o(L,!1)},!0)}N(e,m)};z(Ve,e=>{t(u)?e(Je):e(Qe,!1)})}r(R);var st=v(R,2);let de;var ve=i(st),Rt=i(ve),Wt=i(Rt);let fe;var pe=v(Wt,2),Ze=i(pe);{var ta=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},ea=e=>{var m=it(),_=tt(m);{var A=o=>{f(o,{icon:"material-symbols:pause",class:"text-white text-xl"})},L=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};z(_,o=>{t(x)?o(A):o(L,!1)},!0)}N(e,m)};z(Ze,e=>{t(u)?e(ta):e(ea,!1)})}r(pe),r(Rt);var Nt=v(Rt,2),qt=i(Nt),aa=i(qt,!0);r(qt);var me=v(qt,2),ra=i(me,!0);r(me),r(Nt);var be=v(Nt,2),Ct=i(be),ia=i(Ct);f(ia,{icon:"material-symbols:visibility-off",class:"text-lg"}),r(Ct);var Yt=v(Ct,2),na=i(Yt);f(na,{icon:"material-symbols:expand-less",class:"text-lg"}),r(Yt),r(be),r(ve),r(st);var At=v(st,2);let ge;var Ot=i(At),Kt=i(Ot),he=i(Kt);let xe;r(Kt);var Ut=v(Kt,2),Ht=i(Ut),sa=i(Ht,!0);r(Ht);var Xt=v(Ht,2),oa=i(Xt,!0);r(Xt);var ye=v(Xt,2),la=i(ye);r(ye),r(Ut);var _e=v(Ut,2),Bt=i(_e),ua=i(Bt);f(ua,{icon:"material-symbols:visibility-off",class:"text-lg"}),r(Bt);var Gt=v(Bt,2),ca=i(Gt);f(ca,{icon:"material-symbols:expand-more",class:"text-lg"}),r(Gt),r(_e),r(Ot);var Vt=v(Ot,2),ot=i(Vt),da=i(ot);r(ot),Se(ot,e=>l(Q,e),()=>t(Q)),r(Vt);var Jt=v(Vt,2),lt=i(Jt);let we;var va=i(lt);f(va,{icon:"material-symbols:shuffle",class:"text-lg"}),r(lt);var pt=v(lt,2),fa=i(pt);f(fa,{icon:"material-symbols:skip-previous",class:"text-xl"}),r(pt);var ut=v(pt,2);let ke;var pa=i(ut);{var ma=e=>{f(e,{icon:"eos-icons:loading",class:"text-xl"})},ba=e=>{var m=it(),_=tt(m);{var A=o=>{f(o,{icon:"material-symbols:pause",class:"text-xl"})},L=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-xl"})};z(_,o=>{t(x)?o(A):o(L,!1)},!0)}N(e,m)};z(pa,e=>{t(u)?e(ma):e(ba,!1)})}r(ut);var mt=v(ut,2),ga=i(mt);f(ga,{icon:"material-symbols:skip-next",class:"text-xl"}),r(mt);var Lt=v(mt,2);let Ee;var ha=i(Lt);{var xa=e=>{f(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},ya=e=>{var m=it(),_=tt(m);{var A=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg"})},L=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};z(_,o=>{t(g)===2?o(A):o(L,!1)},!0)}N(e,m)};z(ha,e=>{t(g)===1?e(xa):e(ya,!1)})}r(Lt),r(Jt);var Fe=v(Jt,2),Tt=i(Fe),_a=i(Tt);{var wa=e=>{f(e,{icon:"material-symbols:volume-off",class:"text-lg"})},ka=e=>{var m=it(),_=tt(m);{var A=o=>{f(o,{icon:"material-symbols:volume-down",class:"text-lg"})},L=o=>{f(o,{icon:"material-symbols:volume-up",class:"text-lg"})};z(_,o=>{t(M)<.5?o(A):o(L,!1)},!0)}N(e,m)};z(_a,e=>{t(D)||t(M)===0?e(wa):e(ka,!1)})}r(Tt);var rt=v(Tt,2),Ea=i(rt);r(rt),Se(rt,e=>l(U,e),()=>t(U));var Mt=v(rt,2);let Ce;var Fa=i(Mt);f(Fa,{icon:"material-symbols:queue-music",class:"text-lg"}),r(Mt),r(Fe),r(At);var Ca=v(At,2);{var Aa=e=>{var m=dr(),_=i(m),A=i(_),L=i(A,!0);r(A);var o=v(A,2),X=i(o);f(X,{icon:"material-symbols:close",class:"text-lg"}),r(o),r(_);var ct=v(_,2);Va(ct,5,()=>t(p),Ja,(bt,Z,Y)=>{var G=cr();let Dt;var gt=i(G),Ba=i(gt);{var La=O=>{f(O,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Ta=O=>{var jt=it(),te=tt(jt);{var ee=dt=>{f(dt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Sa=dt=>{var Me=ur();Me.textContent=Y+1,N(dt,Me)};z(te,dt=>{Y===t(y)?dt(ee):dt(Sa,!1)},!0)}N(O,jt)};z(Ba,O=>{Y===t(y)&&t(x)?O(La):O(Ta,!1)})}r(gt);var Qt=v(gt,2),Ae=i(Qt);r(Qt);var Be=v(Qt,2),St=i(Be);let Le;var Ma=i(St,!0);r(St);var Zt=v(St,2);let Te;var Da=i(Zt,!0);r(Zt),r(Be),r(G),Pt((O,jt,te,ee)=>{Dt=q(G,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,Dt,O),nt(G,"aria-label",`播放 ${t(Z).title??""} - ${t(Z).artist??""}`),nt(Ae,"src",jt),nt(Ae,"alt",t(Z).title),Le=q(St,1,"font-medium truncate",null,Le,te),V(Ma,t(Z).title),Te=q(Zt,1,"text-sm text-[var(--content-meta)] truncate",null,Te,ee),V(Da,t(Z).artist)},[()=>({"bg-[var(--btn-plain-bg)]":Y===t(y),"text-[var(--primary)]":Y===t(y)}),()=>kt(t(Z).cover),()=>({"text-[var(--primary)]":Y===t(y),"text-90":Y!==t(y)}),()=>({"text-[var(--primary)]":Y===t(y)})]),h("click",G,()=>wt(Y)),h("keydown",G,O=>{(O.key==="Enter"||O.key===" ")&&(O.preventDefault(),wt(Y))}),N(bt,G)}),r(ct),r(m),Pt(bt=>V(L,bt),[()=>Za(Qa.playlist)]),h("click",o,re),ir(3,m,()=>sr,()=>({duration:300,axis:"y"})),N(e,m)};z(Ca,e=>{t(b)&&e(Aa)})}r(ft),Xa(2),Pt((e,m,_,A,L,o,X,ct,bt,Z,Y,G,Dt,gt)=>{Ft=q(ft,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,Ft,e),ce=q(R,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,ce,m),de=q(st,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,de,_),nt(Wt,"src",A),fe=q(Wt,1,"w-full h-full object-cover transition-transform duration-300",null,fe,L),V(aa,t(I).title),V(ra,t(I).artist),ge=q(At,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,ge,o),nt(he,"src",X),xe=q(he,1,"w-full h-full object-cover transition-transform duration-300",null,xe,ct),V(sa,t(I).title),V(oa,t(I).artist),V(la,`${bt??""} / ${Z??""}`),nt(ot,"aria-valuenow",t(E)>0?t(P)/t(E)*100:0),De(da,`width: ${t(E)>0?t(P)/t(E)*100:0}%`),we=q(lt,1,"w-10 h-10 rounded-lg",null,we,Y),lt.disabled=t(p).length<=1,pt.disabled=t(p).length<=1,ke=q(ut,1,"btn-regular w-12 h-12 rounded-full",null,ke,G),ut.disabled=t(u),mt.disabled=t(p).length<=1,Ee=q(Lt,1,"w-10 h-10 rounded-lg",null,Ee,Dt),nt(rt,"aria-valuenow",t(M)*100),De(Ea,`width: ${t(M)*100}%`),Ce=q(Mt,1,"btn-plain w-8 h-8 rounded-lg",null,Ce,gt)},[()=>({expanded:t(B),"hidden-mode":t(d)}),()=>({"opacity-0":!t(d),"scale-0":!t(d),"pointer-events-none":!t(d)}),()=>({"opacity-0":t(B)||t(d),"scale-95":t(B)||t(d),"pointer-events-none":t(B)||t(d)}),()=>kt(t(I).cover),()=>({spinning:t(x)&&!t(u),"animate-pulse":t(u)}),()=>({"opacity-0":!t(B),"scale-95":!t(B),"pointer-events-none":!t(B)}),()=>kt(t(I).cover),()=>({spinning:t(x)&&!t(u),"animate-pulse":t(u)}),()=>le(t(P)),()=>le(t(E)),()=>({"btn-regular":t(S),"btn-plain":!t(S)}),()=>({"opacity-50":t(u)}),()=>({"btn-regular":t(g)>0,"btn-plain":t(g)===0}),()=>({"text-[var(--primary)]":t(b)})]),h("click",R,_t),h("keydown",R,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),_t())}),h("click",Ct,Pe(_t)),h("click",Yt,Pe(yt)),h("click",st,yt),h("keydown",st,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),yt())}),h("click",Bt,_t),h("click",Gt,yt),h("click",ot,Ke),h("keydown",ot,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(Q).getBoundingClientRect();const _=.5*t(E);t(a)&&(K(a,t(a).currentTime=_),l(P,_))}}),h("click",lt,Ne),h("click",pt,Ye),h("click",ut,We),h("click",mt,$t),h("click",Lt,qe),h("click",Tt,oe),h("click",rt,Ue),h("keydown",rt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&oe())}),h("click",Mt,re),N(s,j)};z(Xe,s=>{s(Ge)})}N(c,ue),Ua()}export{Fr as default};
