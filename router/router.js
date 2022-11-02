const express = require("express");
const router = express.Router();
const mysql = require("mysql2"); //설치한 mysql기능
//사용자가 보낸 값이 post방식일때 분석해주는 express기능
const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./public/images/"); // '../public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var upload = multer({
  storage: storage,
});
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

router.post("/write_daily", upload.single("img"), (req, res) => {
  console.log("가져온값 : ", req.body.text);
  console.log("가져온값 : ", req.body.img);

  let text = req.body.text;
  let img = req.body.img;
  let email = req.body.email;
  let div = 0;
  if (text === "" && img === "") {
    console.log("뭐좀 써봐");
    res.redirect("/mainsns");
  }

  let sqlText = `insert into t_community(bd_content,bd_id,bd_cnt,bd_likes,bd_div) values(?,?,0,0,${div})`;
  conn.query(sqlText, [text, email], function (err, rows) {
    if (!err) {
      console.log("text집어넣기성공");
    } else {
      console.log("text집어넣기 문제", err);
      throw err;
    }
  });
  if (img !== undefined) {
    let seq = "select bd_seq from t_community order by bd_seq desc";
    conn.query(seq, (err, cnt) => {
      if (!err) {
        console.log("bd_seq가져오기 성공", cnt[0]);
        let sqlImg = `insert into bd_file values(?,?,?)`;
        console.log("위 기철" + cnt[0]);
        console.log("No file upload");
        var imgsrc = "http://127.0.0.1:3000/images/" + req.file.filename;
        conn.query(sqlImg, [email, cnt[0], imgsrc], (err, result) => {
          if (err) throw err;
          console.log("file uploaded");
        });
      } else {
        console.log("bd_seq 실패", err);
        throw err;
      }
    });
  }
  res.redirect("/mainsns");
});

router.post("/write_job", upload.single("img"), (req, res) => {
  console.log("가져온값 : ", req.body.text);
  console.log("가져온값 : ", req.body.img);
  console.log("가져온값 : ", req.body.email);

  let text = req.body.text;
  let img = req.body.img;
  let email = req.body.email;
  let div = 1;
  if (text === "" && img === "") {
    console.log("뭐좀 써봐");
    res.redirect("/mainsns");
  }

  let sqlText = `insert into t_community(bd_content,bd_id,bd_cnt,bd_likes,bd_div) values(?,?,0,0,${div})`;
  conn.query(sqlText, [text, email], function (err, rows) {
    if (!err) {
      console.log("text집어넣기성공");
    } else {
      console.log("text집어넣기 문제", err);
      throw err;
    }
  });
  if (img !== undefined) {
    let seq = "select bd_seq from t_community order by bd_seq desc";
    conn.query(seq, (err, cnt) => {
      if (!err) {
        console.log("bd_seq가져오기 성공", cnt[0]);
        let sqlImg = `insert into bd_file values(?,?,?)`;
        console.log("위 기철" + cnt[0]);
        console.log("No file upload");
        var imgsrc = "http://127.0.0.1:3001/images/" + req.file.filename;
        conn.query(sqlImg, [email, cnt[0], imgsrc], (err, result) => {
          if (err) throw err;
          console.log("file uploaded");
        });
      } else {
        console.log("bd_seq 실패", err);
        throw err;
      }
    });
  }
  res.redirect("/mainsns");
});

router.post("/write_special", upload.single("img"), (req, res) => {
  console.log("텍스트 : ", req.body.text);
  console.log("이미지 : ", req.body.img);
  console.log("아이디 : ", req.body.email);
  console.log("타이틀 : ", req.body.title);
  console.log("종류 : ", req.body.kind);

  // let text = req.body.text;
  // let img = req.body.img;
  // let email = req.body.email;
  // let div = 1;
  // if (text === "" && img === "") {
  //   console.log("뭐좀 써봐");
  //   res.redirect("/mainsns");
  // }

  // let sqlText = `insert into t_community(bd_content,bd_id,bd_cnt,bd_likes,bd_div) values(?,?,0,0,${div})`;
  // conn.query(sqlText, [text, email], function (err, rows) {
  //   if (!err) {
  //     console.log("text집어넣기성공");
  //   } else {
  //     console.log("text집어넣기 문제", err);
  //     throw err;
  //   }
  // });
  // if (img !== undefined) {
  //   let seq = "select bd_seq from t_community order by bd_seq desc";
  //   conn.query(seq, (err, cnt) => {
  //     if (!err) {
  //       console.log("bd_seq가져오기 성공", cnt[0]);
  //       let sqlImg = `insert into bd_file values(?,?,?)`;
  //       console.log("위 기철" + cnt[0]);
  //       console.log("No file upload");
  //       var imgsrc = "http://127.0.0.1:3001/images/" + req.file.filename;
  //       conn.query(sqlImg, [email, cnt[0], imgsrc], (err, result) => {
  //         if (err) throw err;
  //         console.log("file uploaded");
  //       });
  //     } else {
  //       console.log("bd_seq 실패", err);
  //       throw err;
  //     }
  //   });
  // }
  // res.redirect("/mainsns");
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

router.get("/", function (request, response) {
  console.log("Happy Hacking!");
  response.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

module.exports = router;
