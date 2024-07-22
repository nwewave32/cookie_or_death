import { Translator } from "./translate.js";

//left
const left = document.querySelector("#left");
//top
const leftTopText = left.querySelector(".top").querySelector(".text");
const langBtn = left
  .querySelector(".top")
  .querySelector("#change")
  .querySelector("button");
//mid
const leftForm = left.querySelector("form");
const leftTextarea = leftForm.querySelector("textarea");
const leftTextLen = left.querySelector("#textLen");
//btm
const leftBottom = left.querySelector(".btm"),
  submitBtn = leftBottom.querySelector("button");

//right
const right = document.querySelector("#right");
//mid
const rightTranslator = right.querySelector(".mid").querySelector(".text");
//btm
const copyBtn = right
  .querySelector(".btm")
  .querySelector("#copy")
  .querySelector("button");

//modal
const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal_body");
const btnOpenPopup = document.querySelector("#share").querySelector("button");
const modalClose = document.querySelector("#modal_close");

const faceb = modalBody.querySelector("#face"),
  twit = modalBody.querySelector("#twit"),
  link = modalBody.querySelector("#link");

var mode = "eng";
var n = 0;

let nowUrl = window.location.href;
function shareUrl() {
  navigator.clipboard
    .writeText(nowUrl)
    .then((res) => {
      swal({
        title: "",
        text: "copied successfully!",
        icon: "success", //"info,success,warning,error" 중 택1
      });
    })
    .catch(
      swal({
        title: "",
        text: "error",
        icon: "error", //"info,success,warning,error" 중 택1
      })
    );
}
function shareTwitter() {
  var sendText = ""; // 전달할 텍스트
  var sendUrl = nowUrl; // 전달할 URL
  window.open(
    "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl
  );
}
function shareFacebook() {
  var sendUrl = nowUrl; // 전달할 URL
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}
twit.addEventListener("click", shareTwitter);
faceb.addEventListener("click", shareFacebook);
link.addEventListener("click", shareUrl);

btnOpenPopup.addEventListener("click", () => {
  modal.classList.toggle("show");
  modalBody.classList.toggle("show");
  body.style.overflow = "hidden";
  //modal.style.opacity = "0.4";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.toggle("show");
    modalBody.classList.toggle("show");
    if (!modal.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});

modalClose.addEventListener("click", (event) => {
  modal.classList.toggle("show");
  modalBody.classList.toggle("show");
  if (!modal.classList.contains("show")) {
    body.style.overflow = "auto";
  }
});

function handleKeyup(event) {
  let targetTxt = leftTextarea.value;
  n = targetTxt.length;
  leftTextLen.innerText = `${n}/1000`;

  if (mode == "eng") {
    const regAlphabet = /^[a-zA-Z0-9^? ]*$/;
    const isAlphabet = regAlphabet.test(targetTxt);
    setStyleSubmitBtn(isAlphabet && targetTxt.trim().length !== 0);
  } else if (mode == "alien") {
    const regAlienel = /^[ΩζξБпㅥ0-9^? ]*$/;
    const isAlienel = regAlienel.test(targetTxt);
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
  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = text;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);

  swal({
    title: "",
    text: "copied successfully!",
    icon: "success", //"info,success,warning,error" 중 택1
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
  transText = Translator(mode, text);
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
