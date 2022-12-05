"use strict";
//front-end, 즉 html과 연결되어있는 js 파일.
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


    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json", 
        },
        body: JSON.stringify(req),
    }) 
        .then((res) => res.json())   //res를 받아서 파라미터로 콘솔 로그에 전달.
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("로그인 중 에러 발생"));
        });
}

//18th