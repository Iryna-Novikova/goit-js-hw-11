import{a as c,S as f,i as a}from"./assets/vendor-CocXUmuy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();c.defaults.baseURL="https://pixabay.com";const g="50600244-46274b1c7bbfed49553e909c7",u=t=>{const o={key:g,q:t,image_type:"photo",orientation:"horisontal",safesearch:!0};return c.get("/api/",{params:o}).then(r=>r.data)},d=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function p(t){return`<li class="gallery-item">
    <a class="gallery-link" href="${t.webformatURL}">
      <img
        class="gallery-image"
        src="${t.largeImageURL}"
        alt="${t.tags}"
      /> 
    <div class="img-info">
      <div class="img-info-descr">
         <h2 class="img-info-header">likes</h2>
         <p class="img-info-p">${t.likes}</p>
      </div>
      <div class="img-info-descr">
         <h2 class="img-info-header">views</h2>
         <p class="img-info-p">${t.views}</p>
      </div>
      <div class="img-info-descr">
         <h2 class="img-info-header">comments</h2>
         <p class="img-info-p">${t.comments}</p>
      </div>
      <div class="img-info-descr">
         <h2 class="img-info-header">downloads</h2>
         <p class="img-info-p">${t.downloads}</p>
      </div>      
      </div>          
    </a>
    </li>`}function y(t){const o=t.map(p).join(`
`);d.insertAdjacentHTML("afterbegin",o),h.refresh()}function b(){d.innerHTML=""}function L(){m.classList.remove("hidden")}function v(){m.classList.add("hidden")}const n=document.querySelector(".form");n.addEventListener("submit",w);function w(t){t.preventDefault(),b();const o=n.elements["search-text"].value.trim();o!==""?(L(),u(o).then(r=>{r.hits.length===0?a.show({title:"",message:"❌ Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgb(136, 44, 44)",messageColor:"rgb(255, 255, 255)",position:"topRight"}):(y(r.hits),n.reset())}).catch(r=>{a.show({title:"",message:`❌ Sorry, it's some error hear: ${r}`,backgroundColor:"rgb(136, 44, 44)",messageColor:"rgb(255, 255, 255)",position:"topRight"})}).finally(()=>v())):a.show({title:"",message:"❌ Please enter non empty request.",backgroundColor:"rgb(136, 44, 44)",messageColor:"rgb(255, 255, 255)",position:"topRight"})}
//# sourceMappingURL=index.js.map
