!function(){var t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.btnStart.addEventListener("click",(function(){t.btnStart.disabled=!0,t.btnStop.disabled=!1,n=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)}));var n=null;t.btnStop.addEventListener("click",(function(){t.btnStop.disabled=!0,t.btnStart.disabled=!1,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.c4f99701.js.map
