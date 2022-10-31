const express = require("express");
const router = express.Router();
const mysql = require("mysql2"); //설치한 mysql기능
//사용자가 보낸 값이 post방식일때 분석해주는 express기능

const path = require("path");

let conn = mysql.createConnection({
  // 나의 DB 정보
  host: "project-db-stu.ddns.net",
  user: "campus_h_1024_5",
  password: "smhrd5",
  port: "3307",
  database: "campus_h_1024_5",
});

router.post("/register", (req, res) => {
  console.log("가져온값", req.body.email);
  console.log("가져온값", req.body.pw);
  console.log("가져온값", req.body.name);
  console.log("가져온값", req.body.nick);
  console.log("가져온값", req.body.rn);
  console.log("가져온값", req.body.phone);
  console.log("가져온값", req.body.gender);
  console.log("가져온값", req.body.job);

  let email = req.body.email;
  let pw = req.body.pw;
  let name = req.body.name;
  let nick = req.body.nick;
  let rn = req.body.rn;
  let phone = req.body.phone;
  let gender = req.body.gender;
  let job = req.body.job;

  let sql = `insert into t_member(mb_id ,mb_pw, mb_name, mb_nick, mb_rn, mb_phone, mb_gender) values(?,?,?,?,?,?,?)`;
  // t_member테이블에 job컬럼없어서 오류발생 그러므로 생성해야함
  conn.query(
    sql,
    [email, pw, name, nick, rn, phone, gender, job],
    function (err, rows) {
      if (!err) {
        console.log("문제없음");
        res.json({
          email: email,
        });
      } else {
        console.log("문제존나많아 앙기철ㄸㄸㄸㄸ", err);
        throw err;
      }
    }
  );
});

router.post("/write_daily", (req, res) => {
  console.log("가져온값 : ", req.body.text);
  console.log("가져온값 : ", req.body.img);

  let text = req.body.text;
  let img = req.body.img;
  let div = 0;

  let sqlText = `insert into t_community(bd_content,bd_id,bd_cnt,bd_likes,bd_div) values(?,"jays",0,0,${div})`;
  conn.query(sqlText, [text], function (err, rows) {
    if (!err) {
      console.log("text집어넣기성공");
      res.json("text집어넣기 성공");
    } else {
      console.log("text집어넣기 문제", err);
      throw err;
    }
  });
});

router.post("/mainsns", (req, res) => {
  console.log("mainsns");
  let id = request.body.id;

  // 세션 등록
  // request.session.원하는 변수이름 = {}
  // key는 ""안에 작성 => EJS render 작업할때와 비교해서 주의할것
  request.session.user = {
    id: id,
  };

  console.log("세션 등록 성공");
  res.json({});

  // 등록한 세션 확인
  console.log(request.session.user.id);

  // 응답을 끝내주는 작업
  response.end();
});

router.post("/login", (req, res) => {
  // View (React) => router로 데이텅 보내기
  console.log("join router", req.body.email);
  console.log("join router", req.body.pw);

  let email = req.body.email;
  let pw = req.body.pw;

  let sql = "select mb_id, mb_nick from t_member where mb_id = ? and mb_pw = ?";

  conn.query(sql, [email, pw], function (err, rows) {
    if (rows.length > 0) {
      console.log("문제없음");
      res.json({
        email: email,
      });
    } else {
      console.log("문제존나많아 앙기철ㄸㄸㄸㄸ", err);
      throw err;
    }
  });
});

router.get("*", function (request, response) {
  console.log("Happy Hacking!");
  response.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

module.exports = router;
