(()=>{function e(){document.querySelectorAll(".bn-wrapperWrithwhasd").forEach(e=>{const r=e.parentElement;r?r.remove():e.remove()}),document.querySelectorAll(".fpaping").forEach(e=>e.remove())}e(),new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0})})();

new MutationObserver(()=>document.querySelectorAll(".grid>div").forEach(e=>!e.children.length&&!e.textContent.trim()&&e.getAttribute("style")?.includes("margin-bottom: 20px")&&e.remove())).observe(document.body,{childList:!0,subtree:!0});

document.addEventListener("DOMContentLoaded",function(){if(/^\?page\d+$/i.test(location.search))["slider","slider2","top-widget"].forEach(function(e){(e=document.getElementById(e))&&e.remove()})});

const box=document.getElementById("CHAT_BOX"),btn=document.getElementById("chatToggle"),close=document.getElementById("chatClose");function openChat(){box.classList.remove("hide"),btn.style.display="none"}function closeChat(){box.classList.add("hide"),btn.style.display="flex"}btn.onclick=function(t){t.stopPropagation(),openChat()},close.onclick=function(){closeChat()},box.onclick=function(t){t.stopPropagation()},document.addEventListener("click",function(t){box.classList.contains("hide")||box.contains(t.target)||closeChat()});

