"use strict";

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
psword = document.querySelector("#psword"),
confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("아이디를 입력해주세요." );
    if (psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.")

  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
  };


  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),  //버튼이 눌리면 이 바디에 입력된 데이터 저장
  })
    .then((res) => res.json())  //promise 객체 반환
    .then((res) => {
      if (res.success) {
        location.href = "/login";   //success시 로그인페이지로 이동
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입 중 에러 발생");
    });
};
