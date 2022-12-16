"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");

const output = {
  home: (req, res) => {
    logger.info(`get / 200 "Move to Home"`);
    res.render("home/index");
  },
  login: (req, res) => {
    logger.info(`get /login 200 "Move to login"`);

    res.render("home/login");
  },
  register: (req, res) => {
    logger.info(`get /register 200 "Move to register"`);

    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    logger.info(
      `POST /login 200 Response: "success: ${response.success}, msg: ${response.msg}"`
    );
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    logger.info(
      `POST /register 200 Response: "success: ${response.success}, msg: ${response.msg}"`
    );
    return res.json(response);          //json 메서드를 통해서 클라이언트에게 응답
  },
};

module.exports = {
  output,
  process,
};
