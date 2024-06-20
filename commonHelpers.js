import{a as L,S as w,i as d}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function h(i,t,a){return(await L("https://pixabay.com/api/",{params:{key:"44440808-4b688fa5899148ccacb476dd1",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:a}})).data}function g({webformatURL:i,largeImageURL:t,tags:a,likes:r,views:e,comments:s,downloads:n}){return`<li class="gallery-item">
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
          <p class="statistic-text">Downloads<span class="statistic-item-span">${n}</span></p>
        </li></ul>
      </li>`}const l=document.querySelector(".gallery"),b=document.querySelector(".form"),y=document.querySelector(".loader"),m=document.querySelector(".js-button");let c=1,u=115,o,p="",f=!1;b.addEventListener("submit",v);m.addEventListener("click",S);async function v(i){i.preventDefault(),l.innerHTML="",m.classList.add("btn-hidden"),o=i.target.elements.imgType.value.trim(),o!==p&&(p=o,c=1),q();try{const t=await h(o,c,u);if(t.hits.length===0||o==="")throw new Error;let a=new w(".gallery a",{captionsData:"alt",captionDelay:250});const r=t.hits.map(g).join("");l.innerHTML=r,c++,a.refresh()}catch(t){d.show({title:t,color:"red",message:"Sorry, there are no images matching your search query. Please try again!"})}f=l.hasChildNodes(),f&&m.classList.remove("btn-hidden"),$()}async function S(i){try{const t=await h(o,c,u),a=t.hits.map(g).join(""),r=Math.ceil(t.totalHits/u);if(c>r)return d.error({color:"white",position:"topRight",message:"We're sorry, but you've reached the end of search results."});l.insertAdjacentHTML("beforeend",a);const s=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:s,left:0,behavior:"smooth"}),c++}catch(t){d.show({title:t,color:"red",message:`${t}`})}}function q(){y.classList.remove("hidden")}function $(){y.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
