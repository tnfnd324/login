"use strict";

const output = {
   home : (req, res) => {
    res.render("./home/index");
   },

   login : (req, res) => {
    res.render("./home/login");
   },

};

//Login 데이터(샘플) : DB 구축 및 연동 전 샘플 데이터로 가정.
const users = {
    id : ["worrimIT", "나개발", "김팀장"],
    psword : ["1234", "1234", "123456"],
};


//index.js 에서 추가해준 router.post("/login", ctrl.process.login); 의 동작을 위해 obj 생성
//이 함수 자체는 로그인 인증 과정 그 자체임.
const process = {
    login : (req, res) => {
        const id = req.body.id,      //app.js에 body-parser 모듈 설치해줘야 req받은 데이터 파싱 가능.
            psword = req.body.psword;

            if (users.id.includes(id)) {
                const idx = users.id.indexOf(id);

                if(users.psword[idx] === psword) {
                    return res.json({
                        success : true,
                    });
                }
            }

            return res.json({
                success : false,
                msg : "로그인에 실패하였습니다."
            });

            
    },
};


// home.ctrl.js 파일을 외부에서도 이용하기 위해 {오브젝트 형태}로 모듈 내보내기

module.exports = {
    output,
    process,
};

//원래 오브젝트형은 { key : value } 로 이루어져있으나
//{key} 값만 넣어둘 경우 자동으로 {key : key} => value 값도 key값과 같은 값으로 인식