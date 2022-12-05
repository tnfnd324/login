"use strict";

const User = require("../../models/User");

const output = {
   home : (req, res) => {
    res.render("home/index");
   },

   login : (req, res) => {
    res.render("home/login");
   },

   register : (req, res) => {
    res.render("home/register");
   }

};




//index.js 에서 추가해준 router.post("/login", ctrl.process.login); 의 동작을 위해 obj 생성
//이 함수 자체는 로그인 인증 과정 그 자체임.
const process = {
    login : (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
            
    },
};


// home.ctrl.js 파일을 외부에서도 이용하기 위해 {오브젝트 형태}로 모듈 내보내기

module.exports = {
    output,
    process,
};

//원래 오브젝트형은 { key : value } 로 이루어져있으나
//{key} 값만 넣어둘 경우 자동으로 {key : key} => value 값도 key값과 같은 값으로 인식