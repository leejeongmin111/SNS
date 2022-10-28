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

// router.get("/", (req, res) => {
//   console.log("준구가 해줌");

//   let sql = "select * from member";

//   conn.query(sql, function (err, rows) {
//     if (rows.length > 0) {
//       console.log("DB로그인 접속 성공");
//     } else {
//       console.log("로그인 DB접속 실패", err);
//     }
//   });
// });

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
