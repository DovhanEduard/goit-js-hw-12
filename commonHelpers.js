import{a as w,i as p,S as g}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function y(i,t,r){return(await w("https://pixabay.com/api/",{params:{key:"44440808-4b688fa5899148ccacb476dd1",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:r}})).data}function L({webformatURL:i,largeImageURL:t,tags:r,likes:a,views:e,comments:s,downloads:o}){return`<li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image" src="${i}" alt="${r}" />
        </a>
        <ul class="statistic">
        <li class="statistic-item">
          <p class="statistic-text">Likes<span class="statistic-item-span">${a}</span></p>
        </li>
        <li class="statistic-item">
          <p class="statistic-text">Views<span class="statistic-item-span">${e}</span></p>
        </li>
        <li class="statistic-item">
          <p class="statistic-text">Comments<span class="statistic-item-span">${s}</span></p>
        </li>
        <li class="statistic-item">
          <p class="statistic-text">Downloads<span class="statistic-item-span">${o}</span></p>
        </li></ul>
      </li>`}const d=document.querySelector(".gallery"),v=document.querySelector(".form"),b=document.querySelector(".loader"),c=document.querySelector(".js-button");let l=1,u=15,n,m="",h=!1;v.addEventListener("submit",S);c.addEventListener("click",P);async function S(i){i.preventDefault(),d.innerHTML="",c.classList.add("btn-hidden"),n=i.target.elements.imgType.value.trim(),n!==m&&(m=n,l=1),q();try{const t=await y(n,l,u);if(t.hits.length===0||n==="")throw new Error;const r=Math.ceil(t.totalHits/u),a=l===r;a&&(c.classList.add("btn-hidden"),f(),p.error({color:"white",position:"topRight",message:"We're sorry, but you've reached the end of search results."}));let e=new g(".gallery a",{captionsData:"alt",captionDelay:250});const s=t.hits.map(L).join("");d.innerHTML=s,l++,h=d.hasChildNodes(),h&&!a&&c.classList.remove("btn-hidden"),e.refresh()}catch(t){p.show({title:t,color:"red",message:"Sorry, there are no images matching your search query. Please try again!"})}f()}async function P(i){try{const t=await y(n,l,u),r=t.hits.map(L).join("");let a=new g(".gallery a",{captionsData:"alt",captionDelay:250});d.insertAdjacentHTML("beforeend",r),a.refresh();const s=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:s,left:0,behavior:"smooth"});const o=Math.ceil(t.totalHits/u);if(l===o)return c.classList.add("btn-hidden"),p.error({color:"white",position:"topRight",message:"We're sorry, but you've reached the end of search results."});l++}catch(t){p.show({title:t,color:"red",message:`${t}`})}}function q(){b.classList.remove("hidden")}function f(){b.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
