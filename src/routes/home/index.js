"use strict";

const express = require("express");     // express 사용 명령
const router = express.Router();        // router 사용 선언. express 내부 기능 불러옴.

const ctrl = require("./home.ctrl");    //현재폴더 내부의 home폴더에서 ctrl이름의 js파일 가져옴

//router.get("") <- ""안의 경로(도메인)으로 접속했을때 response.render의 도메인으로 이동시켜줌.
router.get("/", ctrl.output.home);            //5번줄에서 찾은 ctrl파일의 내부에서 메서드 호출

router.get("/login", ctrl.output.login);

router.post("/login", ctrl.process.login);      //실제로 로그인을 처리한다는 뜻의 obj 생성(process)


module.exports = router;        // 이 모듈을 밖(외부, 다른 디렉터리, 파일 등)에서 사용할 수 있게 내보내주는 명령어