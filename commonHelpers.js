import{a as h,i as f,S as b}from"./assets/vendor-48b140de.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();async function y(r,e){const n="43312090-89e3d2b4f295c74d82d728d94",o="https://pixabay.com/api/";return(await h.get(o,{params:{key:n,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}function g(r){return r.hits.map(e=>`<div class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
            </a>
            <div class="gallery-item-info">
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Likes: <span>${e.likes}</span>
                    </span>
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Views: <span>${e.views}</span>
                    </span>
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Comments: <span>${e.comments}</span>
                    </span>
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Downloads: <span>${e.downloads}</span>
                    </span>
                </p>
            </div>
        </div>`).join("")}function L(){f.info({timeout:3e3,position:"topRight",message:"We're sorry, but you've reached the end of search results."})}function v(){f.info({timeout:3e3,position:"topRight",message:"The search query can not be epty!"})}function w(){f.error({timeout:3e3,position:"topRight",message:"There are no images matching your search query. Please, enter something else!"})}const m=new b(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),c=document.querySelector(".search-form"),a=document.querySelector(".gallery"),d=document.querySelector(".loader"),i=document.querySelector(".load-btn");let l="",p;c.addEventListener("submit",M);i.addEventListener("click",q);async function M(r){if(p=1,r.preventDefault(),a.innerHTML="",l=c.elements.searchWord.value.trim(),i.style.display="block",l===""){v(),a.innerHTML="",i.style.display="none",c.reset();return}d.style.display="block";try{const e=await y(l,p).then(n=>{const o=g(n);if(n.hits.length===0){w(),i.style.display="none",d.style.display="none";return}a.insertAdjacentHTML("beforeend",o),m.refresh(),d.style.display="none"})}catch(e){console.error("Error:",e)}c.reset()}async function q(){p+=1;try{const r=await y(l,p).then(e=>{const n=g(e);a.insertAdjacentHTML("beforeend",n),m.refresh();const o=a.getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"}),e.hits.length<=14&&(i.style.display="none",L(),m.refresh())})}catch(r){console.error("Error:",r)}}
//# sourceMappingURL=commonHelpers.js.map
