(()=>{"use strict";let t=t=>t[function(t,e){let o=10*Math.random()-.5;return Math.round(o)}()].author;function e(e,o,n){let l=[];l.push(n);for(let e=0;e<3;e++){let e=t(o);for(;-1!=l.indexOf(e);)e=t(o);l.push(e)}l=l.sort((()=>Math.random()-.5));let u=0;for(let t of e)t.textContent=l[u],u++}async function o(){const t=await fetch("images-en.json"),e=await t.json();let o=[];for(let t=0;t<e.length;t+=10)o.push(e.slice(t,t+10));return{artist:o.slice(0,12),pictures:o.slice(12,24)}}!function(){let t,n=document.querySelectorAll(".settings-btn"),l=document.getElementById("artist-quiz-btn"),u=document.getElementById("pictures-quiz-btn"),r=document.getElementById("main-page-btn"),c=document.querySelectorAll(".categories-btn"),i=document.querySelectorAll(".question-button"),s=document.querySelectorAll(".page"),a=document.querySelector(".index"),d=document.querySelector(".settings"),m=document.querySelector(".categories"),f=document.querySelector(".question-container"),g=document.querySelector(".question-pic");function h(t,e,o){t.addEventListener("click",(function(t){for(let t of s)t.classList.contains("hide")||t.classList.add("hide");e.classList.remove("hide"),o&&o(this)}))}for(let t of n)h(t,d);h(r,a),h(l,m),h(u,m);let q=0;for(let n of c)h(n,f,(async n=>{const l=n.dataset.id,u=await o();t=u.artist[l],g.src=`./images/image-data/full/${t[q].imageNum}full.jpg`;let r=[];for(let t of u.artist[l])r.push(t.author);e(i,t,t[q].author);let c=[];for(let o of i)o.addEventListener("click",(()=>{o.textContent!==t[q].author?c.push(!1):c.push(!0),q++,g.src=`./images/image-data/full/${t[q].imageNum}full.jpg`,e(i,t,t[q].author),console.log(c)}))}))}()})();