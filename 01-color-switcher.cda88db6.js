!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=null,o=function(){return e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)};n.disabled=!0,t.addEventListener("click",(function(){n.disabled=!1,t.disabled=!0,o()})),n.addEventListener("click",(function(){t.disabled=!1,clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.cda88db6.js.map
