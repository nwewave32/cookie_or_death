// 이미지 경로를 저장할 객체
const images = {
  0: require("../IMG/metro0.png"),
  1: require("../IMG/metro1.png"),
  2: require("../IMG/metro2.png"),
  3: require("../IMG/metro3.png"),
  4: require("../IMG/metro4.png"),
};

export function loadMetro(num) {
  if (num === undefined) num = 0;

  const background = document.querySelector("#background");
  const newIMG = document.createElement("img");
  newIMG.className = "rotimg";

  // 이미지 경로를 설정
  newIMG.src = images[num];
  background.appendChild(newIMG);
}

var num = localStorage.getItem("metroNum");
loadMetro(num);

// export function loadMetro(num) {
//   if (num == undefined) num = 0;

//   const background = document.querySelector("#background");
//   //background 아이디 가진 속성 밑에 자식으로 img 만들어서 넣어줄거임
//   const newIMG = document.createElement("img");
//   newIMG.className = "rotimg";
//   newIMG.src = `../IMG/metro${num}.png`;
//   background.appendChild(newIMG);
// }
// var num = localStorage.getItem("metroNum");
// loadMetro(num);
