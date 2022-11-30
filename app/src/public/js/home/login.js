"use strict";

//login.ejs 파일과 연결 : login.ejs파일의 <head> 섹션에 <script src="/js/home/login.js"></script>

const id = document.querySelector("#id"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() { 
    console.log(id.value);
    console.log(psword.value);

    const req = {      //request 오브젝트
        id: id.value,
        psword: psword.value,
    };

    console.log(req);
}