// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"PWnB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadMetro = loadMetro;
function loadMetro(num) {
  if (num == undefined || num == null || isNaN(num)) num = 0;
  var background = document.querySelector("#background");
  //background 아이디 가진 속성 밑에 자식으로 img 만들어서 넣어줄거임
  var newIMG = document.createElement("img");
  newIMG.className = "rotimg";
  newIMG.src = "./images/metro".concat(num, ".png");
  background.appendChild(newIMG);
}
var num = localStorage.getItem("metroNum");
loadMetro(num);
},{}],"L3Bp":[function(require,module,exports) {
"use strict";

var _loadMetro = require("./loadMetro.js");
var start = document.querySelector("#start"),
  startBtn = start.querySelector("button");
var qna = document.querySelector("#qna"),
  div = qna.querySelectorAll("div");
function handleSelect(event) {
  var imgs = document.querySelector("#background").querySelectorAll(".rotimg");
  for (var index = 0; index < imgs.length; index++) {
    imgs[index].remove();
    if (imgs[index]) imgs[index].style.visibility = "hidden";
  }
  var selec = event.target.parentNode;
  var strNum = selec.id.substring(1);
  var num = parseInt(strNum);
  if (isNaN(num)) {
    strNum = event.target.id.substring(1);
    num = parseInt(strNum);
  }
  localStorage.setItem("metroNum", num);
  (0, _loadMetro.loadMetro)(num);
}
function handleStartBtn(event) {
  start.classList.add("off");
  qna.classList.add("on");
  qna.classList.remove("off");
}
function init() {
  startBtn.addEventListener("click", handleStartBtn);
  for (var i = 0; i < div.length; i++) {
    div[i].addEventListener("click", handleSelect);
  }
}
init();
},{"./loadMetro.js":"PWnB"}]},{},["L3Bp"], null)
//# sourceMappingURL=/cookie_or_death/typeJS.033c0bee.js.map