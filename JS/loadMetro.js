var e,r,t,o;r={},t={},null==(o=(e=globalThis).parcelRequire1655)&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,o.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequire1655=o),(0,o.register)("yAbor",function(e,r){function t(e){(void 0==e||null==e)&&(e=0);let r=document.querySelector("#background"),t=document.createElement("img");t.className="rotimg",t.src=`../IMG/metro/metro${e}.png`,r.appendChild(t)}Object.defineProperty(e.exports,"loadMetro",{get:()=>t,set:void 0,enumerable:!0,configurable:!0}),t(localStorage.getItem("metroNum"))}),o("yAbor");
//# sourceMappingURL=loadMetro.js.map
