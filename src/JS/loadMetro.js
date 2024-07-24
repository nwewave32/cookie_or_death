export function loadMetro(num) {
  if (num == undefined || num == null || isNaN(num)) num = 0;

  const background = document.querySelector("#background");
  //background 아이디 가진 속성 밑에 자식으로 img 만들어서 넣어줄거임
  const newIMG = document.createElement("img");
  newIMG.className = "rotimg";
  newIMG.src = `./images/metro${num}.png`;

  background.appendChild(newIMG);
}
var num = localStorage.getItem("metroNum");
loadMetro(num);
