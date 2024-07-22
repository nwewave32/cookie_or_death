const fs = require("fs");
const path = require("path");

// dist 디렉토리 내의 모든 파일을 검색합니다.
const directoryPath = path.join(__dirname, "dist/cookie_or_death/IMG/metro");

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error("Unable to scan directory: " + err);
  }

  // 파일 이름을 JSON 형태로 저장합니다.
  const fileMapping = {};
  files.forEach((file) => {
    console.log("##file", file);
    const num = file.match(/^metro(\d+)\./);
    if (num) {
      console.log("##num", num);
      fileMapping[num[1]] = `IMG/metro/${file}`;
    }
  });
  console.log("##fileMapping", fileMapping);
  fs.writeFileSync(
    "dist/fileMapping.json",
    JSON.stringify(fileMapping, null, 2)
  );
});
