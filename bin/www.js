"use strict";
//서버를 띄워주는 코드 : 원래 app.js에 app.listen(PORT, function() {} ) 형태로 있던걸 모듈화

const app = require("../app");  //app.js는 www.js의 상위폴더인 bin폴더의 형제 위치에 있기때문에 ../
const PORT = 3000;

app.listen(PORT, () => {           //3000번 포트를 열어달라 
    console.log("서버 가동");
});

//서버 가동하려면 node ./bin/www.js 명령어 입력해야함
//지금까지는 서버 구동 코드가 app.js에 있었기때문에 node app.js로 실행했지만 이젠 아님.

module.exports = app;