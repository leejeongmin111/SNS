const express = require("express");
const router = express.Router();
const mysql = require("mysql2"); //설치한 mysql기능
//사용자가 보낸 값이 post방식일때 분석해주는 express기능
const path = require("path");
const multer = require("multer");
var upload = multer({ test: "upload/" });

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
  console.log("text 가져온값 : ", req.body);
  console.log("img 가져온값 : ", req.file);
  console.log("email 가져온 값 : ", req.body.emailSend);

  if (req.body.text === "" && req.file === undefined) {
    console.log("뭐좀 써봐");
    res.redirect("http://localhost:3000/mainsns");
  } else {
    let text = req.body.text;
    let img = req.file.buffer;
    let email = req.body.emailSend;
    let div = 0;

    let sqlText = `insert into t_community(bd_content,bd_id,bd_cnt,bd_likes,bd_div,img_file) values(?,?,0,0,${div},?)`;
    conn.query(sqlText, [text, email, img], function (err, rows) {
      if (!err) {
        console.log("데이터 넣기 성공");
        res.redirect("http://localhost:3000/mainsns");
      } else {
        console.log("text집어넣기 문제", err);
        throw err;
      }
    });
  }
});

router.post("/suggestion", (req, res) => {
  console.log("suggestion이 진짜 문제인가??");

  let sql =
    "select mb_id,m_profile from t_member where mb_id not in (select follow_id from t_follow) limit 5";
  conn.query(sql, (err, info) => {
    if (info.length > 0) {
      console.log("suggestion 정보 가져와짐");
      res.send({
        dbInfo: info,
      });
    } else {
      console.log("suggestion정보 안가져와짐", err);
    }
  });
});

router.post("/mainside", (req, res) => {
  console.log("mainside 라우터 시작");
  console.log("보낸 email 값 : ", req.body.email);
  let email = req.body.email;

  let sql = "select m_profile from t_member where mb_id = ?";
  conn.query(sql, [email], (err, info) => {
    if (info.length > 0) {
      console.log("mainside 정보 가져와짐");
      res.send({
        photo: info[0].m_profile,
      });
    } else {
      console.log("mainside정보 안가져와짐", err);
    }
  });
});

router.post("/write_job", upload.single("img"), (req, res) => {
  console.log("text 가져온값 : ", req.body);
  console.log("img 가져온값 : ", req.file);
  console.log("email 가져온 값 : ", req.body.emailSend);

  if (req.body.text === "" && req.file === undefined) {
    console.log("뭐좀 써봐");
    res.redirect("http://localhost:3000/jobsns");
  } else {
    let text = req.body.text;
    let img = req.file.buffer;
    let email = req.body.emailSend;
    let div = 1;

    let sqlText = `insert into t_community(bd_content,bd_id,bd_cnt,bd_likes,bd_div,img_file) values(?,?,0,0,${div},?)`;
    conn.query(sqlText, [text, email, img], function (err, rows) {
      if (!err) {
        console.log("데이터 넣기 성공");
        res.redirect("http://localhost:3000/jobsns");
      } else {
        console.log("text집어넣기 문제", err);
        throw err;
      }
    });
  }
});
router.post("/write_special", (req, res) => {
  console.log("텍스트 : ", req.body.text);
  console.log("아이디 : ", req.body.email);
  console.log("타이틀 : ", req.body.title);
  console.log("종류 : ", req.body.kind);

  let text = req.body.text;
  let title = req.body.title;
  let email = req.body.email;
  let kind = req.body.kind;
  let div = 2;

  let sqlText = `insert into t_community(bd_type,bd_title,bd_content,bd_id,bd_cnt,bd_likes,bd_div) values(?,?,?,?,0,0,${div})`;
  conn.query(sqlText, [kind, title, text, email], function (err, rows) {
    if (!err) {
      console.log("코딩문답 잘들어갔어요");
      res.json({
        suc: "잘들어갔어요",
      });
    } else {
      console.log("text집어넣기 문제", err);
      throw err;
    }
  });
});

router.post("/mainsns", (req, res) => {
  let sql = "select bd_content from t_community";
  conn.query(sql, (err, rows) => {
    if (!err) {
      console.log("값가져오기 성공", rows[0].bd_content);
      res.send({
        search: rows[0].bd_content,
      });
    } else {
      console.log("문제발생", err);
    }
  });
});

router.post("/follow", (req, res) => {
  console.log(req.body.username);
  let followuser = req.body.username;
  let myemail = req.body.email;

  let sql = "insert into t_follow values(?,?)";
  conn.query(sql, [myemail, followuser], (err, rows) => {
    if (!err) {
      console.log("팔로우 성공");
      res.send({
        suc: "팔로우 성공 승정보",
      });
    } else {
      console.log("팔로우실패", err);
    }
  });
});

router.post("/maincards", (req, res) => {
  let sql =
    "select c.bd_id,c.bd_content,c.bd_likes,c.bd_cnt,m.mb_id,m.m_profile,c.img_file from t_community c, t_member m where c.bd_id = m.mb_id and bd_div=0 order by bd_time desc"; // 모든 정보 배열 형태로 보내기
  let sql_cmt = "select * from t_comment";
  let cmts;
  conn.query(sql_cmt, (err, rows) => {
    if (!err) {
      cmts = rows;
    }
  });

  conn.query(sql, (err, rows) => {
    if (!err) {
      res.send({
        post: rows,
        cmts: cmts,
      });
    } else {
      console.log("정민이 아노디ㅛㅇ", err);
    }
  });
});

router.post("/jobcards", (req, res) => {
  let sql = "select * from t_community where bd_div = 1"; // 모든 정보 배열 형태로 보내기
  let sql_cmt = "select * from t_comment";
  let cmts;
  conn.query(sql_cmt, (err, rows) => {
    if (!err) {
      cmts = rows;
      console.log("cmts값 넣기");
      console.log("댓글들 ", cmts);
    }
  });

  conn.query(sql, (err, rows) => {
    if (!err) {
      console.log("아이디값 정민정민", rows[0]);
      console.log("게시글값 정민정민", rows);
      res.send({
        email: rows[0].bd_id,
        // content: rows[0].bd_content,
        // 배열 안 객체로 보냄
        post: rows,
        cmts: cmts,
      });
    } else {
      console.log("정민이 아노디ㅛㅇ", err);
    }
  });
});

router.post("/comment", (req, res) => {
  // console.log("아이디", req.body.email);
  // console.log("코멘트", req.body.comment);
  let bd_seq = req.body.bd_seq; // 게시글 번호
  let cmt_content = req.body.cmt_content; // 댓글 내용
  let mb_id = req.body.mb_id; // 댓글 작성자
  let bd_id = req.body.bd_id; // 게시글 작성자

  let sql_cnt = "update t_community set bd_cnt = bd_cnt +1 where bd_seq =?";
  conn.query(sql_cnt, [bd_seq], (err, rows) => {
    if (!err) {
      console.log("댓글 수 증가 완료");
    }
  });

  let sql =
    "insert into t_comment(bd_seq,cmt_content,mb_id,bd_id) values(?,?,?,?)";

  conn.query(sql, [bd_seq, cmt_content, mb_id, bd_id], (err, rows) => {
    if (!err) {
      console.log("댓글 넣어졌어");
      res.send({
        suc: "성공 정민",
      });
    }
  });
});

router.post("/specials", (req, res) => {
  let sql = `select * from t_community where bd_div = 2`;
  conn.query(sql, (err, rows) => {
    if (rows.length > 0) {
      res.send({
        specials: rows,
      });
    } else {
      console.log("코딩안됨/!!!", err);
    }
  });
});

router.post("/mypage", (req, res) => {
  console.log("마이페이지 라우터");

  let sql =
    "select mb_id,mb_profile from t_member where mb_id not in (select follow_id from t_follow) limit 5";
  conn.query(sql, (err, rows) => {
    if (rows.length > 0) {
      console.log("여기는 마이페이지 라우터");
      res.send({
        dbInfo: rows,
      });
    } else {
      console.log("마이페이지 라우터 오류", err);
    }
  });
});

router.post("/mypagecnt", (req, res) => {
  console.log("mypagecnt" + req.body.email);
  let email = req.body.email;
  let sql = "select count(bd_seq) cnt from t_community where bd_id = ?";
  // let cnt;
  conn.query(sql, [email], (err, rows) => {
    if (rows.length > 0) {
      console.log("cnt값 가져와짐");
      res.send({
        cnt: rows,
      });
    } else {
      console.log("cnt값 안가져와짐", err);
    }
  });
  let sqlLast = "select ";
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
      console.log("문제없음", rows[0].mb_id);
      console.log("문제없음", rows[0].mb_nick);
      res.json({
        email: rows[0].mb_id,
        nick: rows[0].mb_nick,
      });
    } else {
      console.log("문제존나많아 앙기철ㄸㄸㄸㄸ", err);
      throw err;
    }
  });
});

router.post("/myPage/daily", (req, res) => {
  let id = req.body.id;
  let div = req.body.div;
  let ch = req.body.ch;
  console.log(id);
  // if (ch == 2) {
  // let sql = `select a.img_file img_file, a.bd_file bd_file from t_community a, m_save b where a.bd_seq = b.bd_seq`
  // } else {
  let sql = `select * from t_community where bd_id = ${id} and bd_div=${div} order by bd_time desc`;
  conn.query(sql, (err, rows) => {
    if (rows.length > 0) {
      console.log("성공");
      res.send({
        result: rows,
      });
    }
  });
  // }
});
router.get("/", function (request, response) {
  console.log("Happy Hacking!");
  response.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

module.exports = router;
