var e=globalThis,r={},t={},o=e.parcelRequire1655;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,o.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequire1655=o),(0,o.register)("b8qRW",function(e,r){function t(e){void 0===e&&(e=0);let r=document.querySelector("#background"),t=document.createElement("img");t.className="rotimg",import(`../IMG/metro${e}.png`).then(e=>{t.src=e.default,r.appendChild(t)}).catch(e=>{console.error(`Error loading image: ${e}`)})}Object.defineProperty(e.exports,"loadMetro",{get:()=>t,set:void 0,enumerable:!0,configurable:!0}),t(localStorage.getItem("metroNum"))}),o("b8qRW");
//# sourceMappingURL=cookieType.d4646030.js.map
