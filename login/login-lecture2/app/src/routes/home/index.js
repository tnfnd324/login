"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
//10. /register 경로로 get 요청이 들어올 경우 ctrl.output.register 함수 실행.
router.post("/login", ctrl.process.login);

module.exports = router;
