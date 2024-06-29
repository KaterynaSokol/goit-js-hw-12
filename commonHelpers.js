import{a as y,S as L,i as d}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function u(o,e){const s="https://pixabay.com/api/";return await y.get(`${s}`,{params:{key:"44667658-9ba2d67695abf8a1c08d7f54b",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})}function f(o){return o.map(e=>`<li class="card">
             <a href="${e.largeImageURL}" class="big gallery-link">
               <img
                 src="${e.webformatURL}"
                 alt="${e.tags}"
                 title="${e.tags}"
                 class="card-img"
             /></a>
            <ul class="card-title">
               <li class="card-info">
                 <h2 class="card-text">Likes</h2>
                 <p class="card-text-value">${e.likes}</p>
             </li>
               <li class="card-info">
                 <h2 class="card-text">Views</h2>
                 <p class="card-text-value">${e.views}</p>
               </li>
               <li class="card-info">
                 <h2 class="card-text">Comments</h2>
                 <p class="card-text-value">${e.comments}</p>
               </li>
               <li class="card-info">
                 <h2 class="card-text">Downloads</h2>
                 <p class="card-text-value">${e.downloads}</p>
               </li>
             </ul> 
           </li>`).join("")}const h=new L(".gallery a",{captionsData:"alt",captionDelay:250}),a={searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-wrap"),loadmore:document.querySelector(".load-more-btn")};let i=1,n=null;a.searchForm.addEventListener("submit",async o=>{if(o.preventDefault(),a.gallery.innerHTML="",p(),i=1,n=o.target.elements.query.value.trim(),n==="")return d.warning({title:"Warning",message:"Please, enter the query",layout:2,displayMode:"once",backgroundColor:"#ef4040",messageColor:"#ffffff",position:"topRight"});try{const{data:{hits:e,totalHits:s}}=await u(n,i);if(e.length===0)return d.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",messageColor:"#ffffff",position:"topRight"});const l=f(e);a.gallery.insertAdjacentHTML("beforeend",l),h.refresh(),s>15?b():m()}catch(e){console.log(e)}finally{a.searchForm.reset(),g()}});a.loadmore.addEventListener("click",async o=>{i+=1,p();try{const{data:{hits:e,totalHits:s}}=await u(n,i);a.gallery.insertAdjacentHTML("beforeend",f(e)),h.refresh();const l=document.querySelector(".gallery").firstElementChild.getBoundingClientRect().height;console.log(l),window.scrollBy({top:l*2,behavior:"smooth"});const t=Math.ceil(s/15);i===t&&(m(),d.warning({title:"Warning",message:"We're sorry, but you've reached the end of search results.",layout:2,displayMode:"once",backgroundColor:"#ef4040",messageColor:"#ffffff",position:"topRight"}))}catch{}finally{g()}});function p(){a.loader.classList.remove("is-hidden")}function g(){a.loader.classList.add("is-hidden")}function b(){a.loadmore.classList.remove("is-hidden")}function m(){a.loadmore.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
