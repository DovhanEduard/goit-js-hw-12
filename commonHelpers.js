import{a as b,i as u,S as f}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function g(i,t,a){return(await b("https://pixabay.com/api/",{params:{key:"44440808-4b688fa5899148ccacb476dd1",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:a}})).data}function y({webformatURL:i,largeImageURL:t,tags:a,likes:r,views:e,comments:s,downloads:o}){return`<li class="gallery-item">
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
      </li>`}const d=document.querySelector(".gallery"),w=document.querySelector(".form"),L=document.querySelector(".loader"),c=document.querySelector(".js-button");let l=1,p=15,n,m="",h=!1;w.addEventListener("submit",v);c.addEventListener("click",S);async function v(i){i.preventDefault(),d.innerHTML="",c.classList.add("btn-hidden"),n=i.target.elements.imgType.value.trim(),n!==m&&(m=n,l=1),q();try{const t=await g(n,l,p);if(t.hits.length===0||n==="")throw new Error;const a=Math.ceil(t.totalHits/p);if(l===a)return c.classList.add("btn-hidden"),u.error({color:"white",position:"topRight",message:"We're sorry, but you've reached the end of search results."});let r=new f(".gallery a",{captionsData:"alt",captionDelay:250});const e=t.hits.map(y).join("");d.innerHTML=e,l++,r.refresh()}catch(t){u.show({title:t,color:"red",message:"Sorry, there are no images matching your search query. Please try again!"})}h=d.hasChildNodes(),h&&c.classList.remove("btn-hidden"),M()}async function S(i){try{const t=await g(n,l,p),a=t.hits.map(y).join("");let r=new f(".gallery a",{captionsData:"alt",captionDelay:250});d.insertAdjacentHTML("beforeend",a),r.refresh();const s=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:s,left:0,behavior:"smooth"});const o=Math.ceil(t.totalHits/p);if(l===o)return c.classList.add("btn-hidden"),u.error({color:"white",position:"topRight",message:"We're sorry, but you've reached the end of search results."});l++}catch(t){u.show({title:t,color:"red",message:`${t}`})}}function q(){L.classList.remove("hidden")}function M(){L.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
