import{b as e,o as r,e as o,f as t,g as n}from"./@vue-c17ac894.js";import{N as s}from"./nprogress-6de85f3e.js";import{c,a as i}from"./vue-router-69560144.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();var a=(e,r)=>{const o=e.__vccOpts||e;for(const[t,n]of r)o[t]=n;return o};var u=a({},[["render",function(t,n){const s=e("router-view");return r(),o(s)}]]);var f=a({},[["render",function(e,o){return r(),t("div",null,"404")}]]);const l=[{path:"/",name:"Home",component:a({},[["render",function(e,o){return r(),t("div",null,"About me.")}]])},{path:"/:pathMatch(.*)*",name:"NotFound",component:f}],d=c({history:i(),routes:l});d.beforeEach(((e,r,o)=>{s.start(),o()})),d.afterEach((()=>{s.done()}));const m=n(u);m.use(d),m.mount("#app");
