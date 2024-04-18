import{a as m,S as d,i as p}from"./assets/vendor-6e0bf343.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(s){return s.map(({webformatURL:o,largeImageURL:t,tags:a,likes:e,views:r,comments:i,downloads:u})=>`<li class="gallery-item">
	<a class="gallery-link" href="${t}">
		<img 
			class="gallery-image" 
			src="${o}"
			alt="${a}"
			width="360px"
            height="152px" />
	</a>
    <ul class="image-text"> 
    <li class="value">Likes<p class="amount">${e}</p></li>
    <li class="value">Views<p class="amount">${r}</p></li>
    <li class="value">Comments<p class="amount">${i}</p></li>
    <li class="value">Downloads<p class="amount">${u}</p></li>
    </ul>
   </li>`).join("")}const g="43312090-89e3d2b4f295c74d82d728d94";async function y(s){const o=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:99});try{const t=await m.get(`https://pixabay.com/api/?${o}`);if(!t.ok)throw new Error(t.statusText);return await t.json()}catch(t){throw console.error("Помилка отримання даних:",t),t}}const h=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),c=document.querySelector("form"),l=document.querySelector(".gallery"),n=document.querySelector("#animation");document.querySelector("js-loade-more");c.addEventListener("submit",L);function L(s){s.preventDefault(),n.classList.toggle("loader"),l.innerHTML="";const o=s.target.elements.text.value.trim();o&&y(o).then(t=>{t.total===0?p.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(l.innerHTML=f(t.hits),h.refresh()),n.classList.toggle("loader"),c.reset()}).catch(t=>console.log(t))}
//# sourceMappingURL=commonHelpers.js.map
