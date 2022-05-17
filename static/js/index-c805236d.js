import{l as e,m as t,q as r,t as n,j as o,v as s,x as i,u as l,y as a,z as c,A as d,F as u,B as m,C as p}from"./@vue-8a26d03b.js";import{u as f,a as v,c as h}from"./@vueuse-63afb139.js";import{N as g}from"./nprogress-6de85f3e.js";import{c as b,a as y}from"./vue-router-df01ba83.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var x=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r};const w={},_={absolute:"","bottom-5":"","left-0":"","right-0":"","text-center":"","select-none":"",op30:"",fw300:"","text-sm":""},A=[r("a",{target:"_blank",href:"https://creativecommons.org/licenses/by-nc-sa/4.0/","color-inherit":""},"CC BY-NC-SA 4.0",-1),n(" 2022-PRESENT © Allen ")];var E=x(w,[["render",function(r,n){return e(),t("div",_,A)}]]);const j=f();function k(){j.value=!j.value}const C={"i-ri-moon-line":""},L={"i-ri-sun-line":""},S=o({setup:n=>(n,o)=>(e(),t("div",{"select-none":"","cursor-pointer":"",op70:"",title:"Toggle Color Scheme",onClick:o[0]||(o[0]=(...e)=>l(k)&&l(k)(...e))},[s(r("div",C,null,512),[[i,l(j)]]),s(r("div",L,null,512),[[i,!l(j)]])]))});const N={},P=e=>(c("data-v-7dd02946"),e=e(),d(),e),F={"z-40":""},O=P((()=>r("div",{absolute:"","lg:fixed":"","m-6":""},"Allen's Blog",-1))),$={class:"nav"},q=P((()=>r("div",{class:"spacer"},null,-1))),B={class:"right"},I=P((()=>r("a",{href:"https://juejin.cn/user/1918010476469400",target:"_blank",title:"掘金","lt-md:hidden":""}," 掘金 ",-1))),T=P((()=>r("a",{href:"https://github.com/Allen-1998",target:"_blank",title:"GitHub","lt-md:hidden":""},[r("div",{"i-uil-github-alt":""})],-1)));var z=x(N,[["render",function(n,o){const s=S;return e(),t("header",F,[O,r("nav",$,[q,r("div",B,[I,T,a(s)])])])}],["__scopeId","data-v-7dd02946"]]);const D={"w-full":"","box-border":"","px-7":"","py-10":""},R=o({setup:n=>(v({meta:[{property:"og:title",content:"Allen"},{property:"og:image",content:"https://avatars.githubusercontent.com/u/73213399?v=4"},{name:"description",content:"Allen's Portfolio"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"@allen1998___"}]}),(n,o)=>{const s=z,i=m("router-view"),l=E;return e(),t(u,null,[a(s),r("main",D,[a(i),a(l)])],64)})}),G={},H={},K={"h-full":"",flex:"","flex-col":"","justify-center":"","items-center":"","all:transition-400":""},M=[r("div",{"text-5xl":"",fw100:"",mb7:""},"About me.",-1),r("div",{op70:"","text-lg":"",fw300:"",m1:""},"生命不息 前进不止",-1),r("div",{op70:"","text-lg":"",fw300:"",m1:""},"想做一些还没做过的东西",-1),r("div",{op70:"","text-lg":"",fw300:"",m1:""},"探索更多有趣的事物",-1),r("div",{op70:"","text-lg":"",fw300:"",m1:""},"... ...",-1),r("div",{op70:"","text-lg":"",fw300:"",m1:""},"还有每天睡到自然醒 XD",-1),r("div",{"text-lg":"",op70:"",fw300:"",m1:"",flex:"","items-center":""},"很高兴认识你",-1),r("div",{m2:"","i-twemoji:face-blowing-a-kiss":""},null,-1)];const U=[{name:"index",path:"/",component:x(H,[["render",function(r,n){return e(),t("div",K,M)}]]),props:!0},{name:"notFound",path:"/notfound",component:()=>{return e=()=>import("./notFound-5a97d706.js"),(t=["static/js/notFound-5a97d706.js","static/js/@vue-8a26d03b.js","static/js/@vueuse-63afb139.js","static/js/nprogress-6de85f3e.js","static/css/nprogress-18a10d8a.css","static/js/vue-router-df01ba83.js"])&&0!==t.length?Promise.all(t.map((e=>{if((e=`./${e}`)in G)return;G[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((t,r)=>{n.addEventListener("load",t),n.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())):e();var e,t},props:!0}];U.push({path:"/:catchAll(.*)",redirect:"/notFound"});const V=b({history:y(),routes:U});V.beforeEach(((e,t,r)=>{g.start(),r()})),V.afterEach((()=>{g.done()}));const W=p(R),X=h();W.use(X).use(V),W.mount("#app");export{x as _};