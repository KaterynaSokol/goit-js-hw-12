import{S as i,i as c}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function d(a){const t="https://pixabay.com/api/",s=new URLSearchParams({key:"44667658-9ba2d67695abf8a1c08d7f54b",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=`${t}?${s}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function u(a){return a.map(t=>`<li class="card">
             <a href="${t.largeImageURL}" class="big gallery-link">
               <img
                 src="${t.webformatURL}"
                 alt="${t.tags}"
                 title="${t.tags}"
                 class="card-img"
             /></a>
            <ul class="card-title">
               <li class="card-info">
                 <h2 class="card-text">Likes</h2>
                 <p class="card-text-value">${t.likes}</p>
             </li>
               <li class="card-info">
                 <h2 class="card-text">Views</h2>
                 <p class="card-text-value">${t.views}</p>
               </li>
               <li class="card-info">
                 <h2 class="card-text">Comments</h2>
                 <p class="card-text-value">${t.comments}</p>
               </li>
               <li class="card-info">
                 <h2 class="card-text">Downloads</h2>
                 <p class="card-text-value">${t.downloads}</p>
               </li>
             </ul> 
           </li>`).join("")}const f=new i(".gallery a",{captionsData:"alt",captionDelay:250}),l={searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-wrap")};l.searchForm.addEventListener("submit",a=>{a.preventDefault(),l.gallery.innerHTML="",p();const t=a.target.elements.query.value.trim();if(t==="")return c.warning({title:"Warning",message:"Please, enter the query",layout:2,displayMode:"once",backgroundColor:"#ef4040",messageColor:"#ffffff",position:"topRight"});d(t).then(s=>{if(s.hits.length===0)return c.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",messageColor:"#ffffff",position:"topRight"});const o=u(s.hits);console.log(o),l.gallery.insertAdjacentHTML("beforeend",o),f.refresh()}).catch(s=>{console.log(s)}).finally(()=>{l.searchForm.reset(),h()})});function p(){l.loader.classList.remove("is-hidden")}function h(){l.loader.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
