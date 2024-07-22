// // 파일 존재 여부를 체크하는 함수
// function fileExists(url) {
//   return fetch(url, { method: "HEAD" })
//     .then((response) => response.ok)
//     .catch(() => false);
// }

// // JSON 파일의 존재 여부를 체크하고, 존재할 경우 import
// export function loadMetro(num) {
//   if (num === undefined || num === null) num = 0;

//   const background = document.querySelector("#background");
//   const newIMG = document.createElement("img");
//   newIMG.className = "rotimg";

//   // JSON 파일의 경로
//   const jsonFilePath = "../cookie_or_death/fileMapping.json";

//   // JSON 파일의 존재 여부 확인
//   fileExists(jsonFilePath)
//     .then((exists) => {
//       if (exists) {
//         // JSON 파일이 존재할 경우 import
//         import(jsonFilePath)
//           .then((module) => {
//             const fileMapping = module.default;
//             const fileName = fileMapping[num] || "IMG/metro/metro0.png";
//             const imagePath = `../cookie_or_death/${fileName}`;

//             // 이미지 파일의 존재 여부 확인
//             fileExists(imagePath)
//               .then((imageExists) => {
//                 if (imageExists) {
//                   // 이미지 파일이 존재할 경우 import
//                   import(imagePath)
//                     .then((imageModule) => {
//                       newIMG.src = imageModule.default;
//                       background.appendChild(newIMG);
//                     })
//                     .catch((error) => {
//                       console.error(`Error loading image: ${error}`);
//                     });
//                 } else {
//                   console.error(`Image file does not exist: ${imagePath}`);
//                 }
//               })
//               .catch((error) => {
//                 console.error(`Error checking image file existence: ${error}`);
//               });
//           })
//           .catch((error) => {
//             console.error(`Error loading file mapping: ${error}`);
//           });
//       } else {
//         console.error(`JSON file does not exist: ${jsonFilePath}`);
//       }
//     })
//     .catch((error) => {
//       console.error(`Error checking JSON file existence: ${error}`);
//     });
// }

// const num = localStorage.getItem("metroNum");
// loadMetro(num);

export function loadMetro(num) {
  if (num == undefined) num = 0;

  const background = document.querySelector("#background");
  //background 아이디 가진 속성 밑에 자식으로 img 만들어서 넣어줄거임
  const newIMG = document.createElement("img");
  newIMG.className = "rotimg";
  newIMG.src = `../IMG/metro/metro${num}.png`;
  background.appendChild(newIMG);
}
var num = localStorage.getItem("metroNum");
loadMetro(num);
