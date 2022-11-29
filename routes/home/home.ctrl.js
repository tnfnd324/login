"use strict";

const hello = (req, res) => {
    res.render("home/index");
    console.log("루트 페이지에 접근하였습니다.");
}

const login = (req, res) => {
    res.render("home/login");
    console.log("로그인 페이지에 접근하였습니다");
}

const logout = (req, res) => {
    res.render("home/logout");
    console.log("로그아웃 페이지에 접근하였습니다");
}

//이 home.ctrl.js 파일을 외부에서도 이용하기 위해 {오브젝트 형태}로 모듈 내보내기

module.exports = {
    hello,
    login,
    logout,
};

//원래 오브젝트형은 { key : value } 로 이루어져있으나
//{key} 값만 넣어둘 경우 자동으로 {key : key} => value 값도 key값과 같은 값으로 인식