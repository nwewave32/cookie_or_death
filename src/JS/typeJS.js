import { loadMetro } from "./loadMetro.js";

const start = document.querySelector("#start"),
  startBtn = start.querySelector("button");

const qna = document.querySelector("#qna"),
  div = qna.querySelectorAll("div");

function handleSelect(event) {
  var imgs = document.querySelector("#background").querySelectorAll(".rotimg");
  for (let index = 0; index < imgs.length; index++) {
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
  loadMetro(num);
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
