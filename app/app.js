//chapter 01. express 이용하여 웹서버 구축 및 페이지별 라우팅
//terminal에 npm install express --save : express 설치 : node_modules에서 화가인가능
//변경사항 후 서버를 항상 껐다 켜줘야함 : node app.js 명령어

"use strict";

//모듈
const express = require("express");     //require 명령어로 express라는 모듈 다운로드
const app = express();                  //app이라는 변수 안에 express 실행
const PORT = 3000;                      //포트 지정



//라우팅
const home = require("./src/routes/home");  //routes폴더 내부의 home 폴더에서 자바스크립트 파일 불러옴

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use('/js', express.static(`${__dirname}/src/public/js`));

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
//25: URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자 인식 문제 해결해주는 설정.

app.use("/", home);      // use : 미들웨어를 등록해주는 메서드.

module.exports = app;

app.get("/", (req, res) => {            // => : arrow function : 12열의 function()과 같음.  파라미터로 request, response.
    res.render("home/index");
    console.log("루트 페이지에 접근하였습니다.");
});

app.get("/login", (req, res) => {       //위와 같이 /login 디렉토리 생성, require, response를 파라미터로 전달받고 반환함.
    res.render("home/login");
    console.log("로그인 페이지에 접근하였습니다.");
});



//chapter 01 END



// // //chapter 02. express 사용하지 않고 HTTP 로 서버 구동하기
// // express에 비교해서 코드가 더럽고 비효율적임.

// const http = require("http");
// const app = http.createServer((req, res) => {       //http에서는 createServer 함수 사용 req, res parameters available.

//     res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8" }); //한글 깨짐 오류 해결 html 형식의 파일을 한글로 해석해라!

//     console.log(req.url);       //request 받은 url 주소를 콘솔 로그에 출력 : 파싱의 개념 ex) /login/tnfnd324
    
//     if (req.url === "/") {
//         res.end("여기는 루트 페이지 입니다.");
//     }
//     else if (req.url === "/login") {
//         res.end("여기는 로그인 페이지 입니다.");
//     }
//     else if (req.url === "/logout") {
//         res.end("여기는 로그아웃 페이지 입니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다");
// });


