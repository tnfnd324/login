const mysql = require("mysql");

const db = mysql.createConnection({
    host: "login.cbecyuklthtq.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "tnfnd324",
    database: "login",

});

db.connect();

module.exports = db;
