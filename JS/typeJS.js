(()=>{var e=globalThis,r={},t={},o=e.parcelRequire1655;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,o.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){t[e]=r},e.parcelRequire1655=o),(0,o.register)("yAbor",function(e,r){function t(e){(void 0==e||null==e)&&(e=0);let r=document.querySelector("#background"),t=document.createElement("img");t.className="rotimg",t.src=`../IMG/metro/metro${e}.png`,r.appendChild(t)}Object.defineProperty(e.exports,"loadMetro",{get:()=>t,set:void 0,enumerable:!0,configurable:!0}),t(localStorage.getItem("metroNum"))});var n=o("yAbor");let l=document.querySelector("#start"),c=l.querySelector("button"),a=document.querySelector("#qna"),i=a.querySelectorAll("div");function u(e){document.querySelector("#background").querySelector(".rotimg").remove();var r=parseInt(e.target.parentNode.id.substring(1));localStorage.setItem("metroNum",r),(0,n.loadMetro)(r)}function d(e){l.classList.add("off"),a.classList.add("on"),a.classList.remove("off")}!function(){c.addEventListener("click",d);for(var e=0;e<i.length;e++)i[e].addEventListener("click",u)}()})();
//# sourceMappingURL=typeJS.js.map
