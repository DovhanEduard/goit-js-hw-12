import{a as w,S as h,i as d}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function y(i,t,a){return(await w("https://pixabay.com/api/",{params:{key:"44440808-4b688fa5899148ccacb476dd1",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:a}})).data}function g({webformatURL:i,largeImageURL:t,tags:a,likes:r,views:e,comments:s,downloads:o}){return`<li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image" src="${i}" alt="${a}" />
        </a>
        <ul class="statistic">
        <li class="statistic-item">
          <p class="statistic-text">Likes<span class="statistic-item-span">${r}</span></p>
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
      </li>`}const c=document.querySelector(".gallery"),b=document.querySelector(".form"),L=document.querySelector(".loader"),p=document.querySelector(".js-button");let n=1,m=15,l,u="",f=!1;b.addEventListener("submit",v);p.addEventListener("click",S);async function v(i){i.preventDefault(),c.innerHTML="",p.classList.add("btn-hidden"),l=i.target.elements.imgType.value.trim(),l!==u&&(u=l,n=1),q();try{const t=await y(l,n,m);if(t.hits.length===0||l==="")throw new Error;let a=new h(".gallery a",{captionsData:"alt",captionDelay:250});const r=t.hits.map(g).join("");c.innerHTML=r,n++,a.refresh()}catch(t){d.show({title:t,color:"red",message:"Sorry, there are no images matching your search query. Please try again!"})}f=c.hasChildNodes(),f&&p.classList.remove("btn-hidden"),$()}async function S(i){try{const t=await y(l,n,m),a=t.hits.map(g).join(""),r=Math.ceil(t.totalHits/m);if(n>r)return d.error({color:"white",position:"topRight",message:"We're sorry, but you've reached the end of search results."});let e=new h(".gallery a",{captionsData:"alt",captionDelay:250});c.insertAdjacentHTML("beforeend",a),e.refresh();const o=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:o,left:0,behavior:"smooth"}),n++}catch(t){d.show({title:t,color:"red",message:`${t}`})}}function q(){L.classList.remove("hidden")}function $(){L.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
