!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;function i(e,n){(function(e,n){return new Promise((function(t,o){var i=Math.random()>.5;setTimeout((function(){i?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))})(e,n).then((function(e){var n=e.position,t=e.delay;Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"),{timeout:4e3,backOverlay:!0})})).catch((function(e){var n=e.position,t=e.delay;Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"),{timeout:4e3,backOverlay:!0})}))}null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o),o("iU1Pc"),document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=e.currentTarget.elements,t=n.delay,o=n.step,r=n.amount,a=Number(t.value),u=1;u<=r.value;u+=1)1===u||(a+=Number(o.value)),i(u,a)}))}();
//# sourceMappingURL=03-promises.f601d646.js.map
