!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("6JpON"),i=document.querySelector(".form"),a=document.querySelector('[name="delay"]'),u=document.querySelector('[name="amount"]'),c=document.querySelector('[name="step"]');document.querySelector('[type="submit"]');function l(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o({position:e,delay:n}):r({position:e,delay:n})}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();var n,t=parseInt(a.value),o=parseInt(c.value),i=parseInt(u.value);for(n=1;n<=i;n++)l(n,t).then((function(e){var n=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),t+=o}))}();
//# sourceMappingURL=03-promises.7d2c0c0e.js.map