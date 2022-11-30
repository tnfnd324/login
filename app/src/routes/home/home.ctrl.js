"use strict";

const output = {
   home : (req, res) => {
    res.render("./home/index");
   },

   login : (req, res) => {
    res.render("./home/login");
   },

};

//index.js 에서 추가해준 router.post("/login", ctrl.process.login); 의 동작을 위해 obj 생성
const process = {
    login : (req, res) => {
        console.log(req.body);      //app.js에 body-parser 모듈 설치해줘야 req받은 데이터 파싱 가능.
    },
};


// home.ctrl.js 파일을 외부에서도 이용하기 위해 {오브젝트 형태}로 모듈 내보내기

module.exports = {
    output,
    process,
};

//원래 오브젝트형은 { key : value } 로 이루어져있으나
//{key} 값만 넣어둘 경우 자동으로 {key : key} => value 값도 key값과 같은 값으로 인식