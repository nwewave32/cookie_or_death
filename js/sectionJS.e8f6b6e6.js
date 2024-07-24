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
})({"kYJC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alien = void 0;
var Alien = exports.Alien = ["Ω", "Б", "ξ", "ζ", "п", "ㅥ", "Ωζ ", "ББ ", " ξΩ", "ㅥζ ", " Бㅥ", "пп ", "пξ ", "ζζ ", " ΩΩ", " ζㅥ", "БΩ ", "ξп ", "ΩБ ", "Бζ ", " ξξ", " пㅥ", " пБ", "ζξ ", "ζΩ ", " ㅥㅥ"];
},{}],"rFy2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.String = void 0;
var String = exports.String = {
  plain: ["Be careful.", "Be careful driving.", "Chicago is very different from Boston.", "Don't worry.", "Everyone knows it.", "Everything is ready.", "Excellent.", "From time to time.", "Good idea.", "He likes it very much.", "He's coming soon.", "He's right.", "He's very annoying.", "He's very famous.", "I ate already.", "I can't hear you.", "I'd like to go for a walk.", "I don't know how to use it.", "I don't like him.", "I don't like it.", "I don't speak very well.", "I don't understand.", "I don't want it.", "I don't want that.", "I don't want to bother you.", "undefined", "I feel good.", "If you need my help, please let me know.", "I get off of work at 6.", "I have a headache.", "I hope you and your wife have a nice trip.", "I know.", "I like her.", "I'll call you when I leave.", "I'll come back later.", "I'll pay.", "I'll take it.", "I'll take you to the bus stop.", "I lost my watch.", "I love you.", "I'm an American.", "I'm cleaning my room.", "I'm cold.", "I'm coming to pick you up.", "I'm going to leave.", "I'm happy.", "I'm hungry.", "I'm married.", "I'm not busy.", "I'm not married.", "I'm not ready yet.", "I'm not sure.", "I'm sorry, we're sold out.", "I'm thirsty.", "I'm very busy. I don't have time now.", "undefined", "I need to change clothes.", "I need to go home.", "I only want a snack.", "I think it's very good.", "I think it tastes good.", "I thought the clothes were cheaper.", "It's longer than 2 miles.", "I've been here for two days.", "I've heard Texas is a beautiful place.", "I've never seen that before.", "I was about to leave the restaurant when my friends arrived.", "Just a little.", "Just a moment.", "Let me check.", "Let me think about it.", "Let's go have a look.", "Let's practice English.", "More than that.", "Never mind.", "Next time.", "No.", "Nonsense.", "No, thank you.", "Nothing else.", "Not recently.", "Not yet.", "Of course.", "undefined", "Okay.", "Please fill out this form.", "Please take me to this address.", "Please write it down.", "Right here.", "Right there.", "See you later.", "See you tomorrow.", "See you tonight.", "She's pretty.", "Sorry to bother you.", "Take a chance.", "Take it outside.", "Tell me.", "Thanks for everything.", "Thanks for your help.", "Thank you.", "Thank you miss.", "Thank you sir.", "Thank you very much.", "That looks great.", "That's alright.", "That's enough.", "That's fine.", "That's it.", "That smells bad.", "That's not fair.", "That's not right.", "That's right.", "That's too bad.", "That's too many.", "That's too much.", "The book is under the table.", "They'll be right back.", "They're the same.", "They're very busy.", "This doesn't work.", "This is very difficult.", "This is very important.", "Try it.", "Very good, thanks.", "We like it very much.", "Yes, really.", "You're beautiful.", "You're very nice.", "You're very smart.", "Your things are all here."],
  question: ["Can you translate this for me?", "How are you?", "How's work going?", "I'm good, and you?", "Is Mr. Smith an American?", "Is that enough?", "May I speak to Mrs. Smith please?", "Really?", "Would you take a message please?"],
  exclaimation: ["Help!", "Hurry!", "Stop!"]
};
},{}],"UAxc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Translator = Translator;
var _alien = require("./alien.js");
var _string = require("./string.js");
function Translator(mode, string) {
  var char = [];
  var transText = "";
  if (mode == "eng") {
    if (string.indexOf("?") !== -1) {
      transText += "¿";
    } else if (string.indexOf("!") !== -1) {
      transText += "¡";
    } else {
      transText += "˙";
    }
    string = string.replace(/[^0-9a-zA-Z]/g, "");
    string = string.replace(/\s/g, '');
    string = string.toLowerCase();
    var j = 0;
    for (var i = string.length - 1; i >= 0; i--) {
      char[j] = string.charCodeAt([i]) - 97;
      j++;
      // 1/5의 확률로 б 넣기
    }
    for (var i = 0; i < string.length; i++) {
      transText += _alien.Alien[char[i]];
    }
    localStorage.setItem("atext", transText);
    return transText;
  } else if (mode == "alien") {
    var ranNum = 0;
    string = string.replace(/\s/g, '');
    var prevText = localStorage.getItem("text");
    var prevTransedText = localStorage.getItem("atext");
    prevTransedText = prevTransedText.replace(/\s/g, '');
    if (string == prevTransedText) {
      return prevText;
    } else {
      if ((string.indexOf("?") || string.indexOf("¿")) !== -1) {
        ranNum = Math.floor(Math.random() * _string.String.question.length);
        string = _string.String.question[ranNum];
        localStorage.setItem("stext", string);
      } else if ((string.indexOf("!") || string.indexOf("¡")) !== -1) {
        ranNum = Math.floor(Math.random() * _string.String.exclaimation.length);
        string = _string.String.exclaimation[ranNum];
        localStorage.setItem("stext", string);
      } else {
        ranNum = Math.floor(Math.random() * _string.String.plain.length);
        string = _string.String.plain[ranNum];
        localStorage.setItem("stext", string);
      }
      return string;
    }
  }
}
},{"./alien.js":"kYJC","./string.js":"rFy2"}],"J2Td":[function(require,module,exports) {
"use strict";

var _translate = require("./translate.js");
//left
var left = document.querySelector("#left");
//top
var leftTopText = left.querySelector(".top").querySelector(".text");
var langBtn = left.querySelector(".top").querySelector("#change").querySelector("button");
//mid
var leftForm = left.querySelector("form");
var leftTextarea = leftForm.querySelector("textarea");
var leftTextLen = left.querySelector("#textLen");
//btm
var leftBottom = left.querySelector(".btm"),
  submitBtn = leftBottom.querySelector("button");

//right
var right = document.querySelector("#right");
//mid
var rightTranslator = right.querySelector(".mid").querySelector(".text");
//btm
var copyBtn = right.querySelector(".btm").querySelector("#copy").querySelector("button");

//modal
var body = document.querySelector("body");
var modal = document.querySelector(".modal");
var modalBody = document.querySelector(".modal_body");
var btnOpenPopup = document.querySelector("#share").querySelector("button");
var modalClose = document.querySelector("#modal_close");
var faceb = modalBody.querySelector("#face"),
  twit = modalBody.querySelector("#twit"),
  link = modalBody.querySelector("#link");
var mode = "eng";
var n = 0;
var nowUrl = window.location.href;
function shareUrl() {
  navigator.clipboard.writeText(nowUrl).then(function (res) {
    swal({
      title: "",
      text: "copied successfully!",
      icon: "success" //"info,success,warning,error" 중 택1
    });
  }).catch(swal({
    title: "",
    text: "error",
    icon: "error" //"info,success,warning,error" 중 택1
  }));
}
function shareTwitter() {
  var sendText = ""; // 전달할 텍스트
  var sendUrl = nowUrl; // 전달할 URL
  window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}
function shareFacebook() {
  var sendUrl = nowUrl; // 전달할 URL
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}
twit.addEventListener("click", shareTwitter);
faceb.addEventListener("click", shareFacebook);
link.addEventListener("click", shareUrl);
btnOpenPopup.addEventListener("click", function () {
  modal.classList.toggle("show");
  modalBody.classList.toggle("show");
  body.style.overflow = "hidden";
  //modal.style.opacity = "0.4";
});
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.toggle("show");
    modalBody.classList.toggle("show");
    if (!modal.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});
modalClose.addEventListener("click", function (event) {
  modal.classList.toggle("show");
  modalBody.classList.toggle("show");
  if (!modal.classList.contains("show")) {
    body.style.overflow = "auto";
  }
});
function handleKeyup(event) {
  var targetTxt = leftTextarea.value;
  n = targetTxt.length;
  leftTextLen.innerText = "".concat(n, "/1000");
  if (mode == "eng") {
    var regAlphabet = /^[a-zA-Z0-9?.!\n ]*$/;
    var isAlphabet = regAlphabet.test(targetTxt);
    setStyleSubmitBtn(isAlphabet && targetTxt.trim().length !== 0);
  } else if (mode == "alien") {
    var regAlienel = /^[ΩζξБпㅥ0-9?.!˙\n ]*$/;
    var isAlienel = regAlienel.test(targetTxt);
    setStyleSubmitBtn(isAlienel && targetTxt.trim().length !== 0);
  }
}
function setStyleSubmitBtn(isDisable) {
  if (isDisable) {
    submitBtn.style.color = "black";
    submitBtn.style.pointerEvents = "auto";
  } else {
    submitBtn.style.color = "gray";
    submitBtn.style.pointerEvents = "none";
  }
}
function handleCopy(event) {
  var text = rightTranslator.innerText;
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = text;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
  swal({
    title: "",
    text: "copied successfully!",
    icon: "success" //"info,success,warning,error" 중 택1
  });
}
function loadRightTranslator(text) {
  rightTranslator.innerText = text;
}
function handleSubmit(event) {
  event.preventDefault();
  var text = leftTextarea.value;
  var transText = "";
  if (mode == "eng") {
    //translate eng -> alien
    localStorage.setItem("text", text);
  } else if (mode == "alien") {
    //translate alien -> eng
  } else {
    console.log("fail");
  }
  transText = (0, _translate.Translator)(mode, text);
  loadRightTranslator(transText);
  copyBtn.addEventListener("click", handleCopy);
}
function handleClickLangBtn(event) {
  leftTextarea.value = "";
  rightTranslator.innerText = "";
  if (langBtn.name == "eng") {
    langBtn.name = "alien";
    langBtn.innerText = "eng";
    leftTopText.innerText = "alien";
    mode = "alien";
  } else if (langBtn.name == "alien") {
    langBtn.name = "eng";
    langBtn.innerText = "alien";
    leftTopText.innerText = "eng";
    mode = "eng";
  }
}
function handleLang() {
  langBtn.addEventListener("click", handleClickLangBtn);
}
function init() {
  handleLang();
  submitBtn.addEventListener("click", handleSubmit);
  leftTextarea.addEventListener("keyup", handleKeyup);
}
init();
},{"./translate.js":"UAxc"}]},{},["J2Td"], null)
//# sourceMappingURL=/cookie_or_death/sectionJS.e8f6b6e6.js.map