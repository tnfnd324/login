"use strict";

//login.ejs 파일과 연결 : login.ejs파일의 <head> 섹션에 <script src="/js/home/login.js"></script>

const id = document.querySelector("#id"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() { 
    const req = {      //request 오브젝트
        id: id.value,
        psword: psword.value,
    };

    console.log(req);
    console.log(JSON.stringify(req));

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON>stringify(req),
    });
}