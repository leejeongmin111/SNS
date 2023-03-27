const express = require("express");
const router = express.Router();
const mysql = require("mysql2"); //설치한 mysql기능
//사용자가 보낸 값이 post방식일때 분석해주는 express기능
const path = require("path");
const multer = require("multer");
const { json } = require("body-parser");
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
  console.log("가져온값", req.body.job);

  let email = req.body.email;
  let pw = req.body.pw;
  let name = req.body.name;
  let nick = req.body.nick;
  let rn = req.body.rn;
  let phone = req.body.phone;
  let job = 0;

  let sql = `insert into t_member(mb_id ,mb_pw, mb_name, mb_nick, mb_rn, mb_phone, t_job) values(?,?,?,?,?,?,?)`;
  // t_member테이블에 job컬럼없어서 오류발생 그러므로 생성해야함
  conn.query(
    sql,
    [email, pw, name, nick, rn, phone, job],
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

router.post("/changeProfile", upload.single("img"), (req, res) => {
  let nick = req.body.NickName;
  let password = req.body.password;
  let id = req.body.emailSend;
  console.log(req.body);
  console.log(id);
  if (req.file == undefined) {
  } else {
    let img = req.file.buffer;
    let sqldelete = `update t_member set m_profile = null where mb_id = '${id}' `;
    // let sqlImg = `update t_member set m_profile = ? where mb_id = ${id}`;
    let sqlImg = `update t_member set m_profile = ? where mb_id = '${id}'`;
    conn.query(sqldelete, (err) => {
      if (!err) {
        console.log("이미지 삭제 완료");
      } else {
        console.log("이미지 삭제 실패" + err);
      }
    });
    conn.query(sqlImg, [img], (err, rows) => {
      if (!err) {
        console.log("프로필사진 수정 성공");
      } else {
        console.log("프로필사진 수정 실패..." + err);
      }
    });
  }
  let cnt = ["mb_nick", "mb_pw"];
  let userInfo = [nick, password];
  for (let i = 0; i < userInfo.length; i++) {
    if (userInfo[i] == "") {
      cnt.splice(i, 1);
    }
  }
  userInfo = userInfo.filter(function (data) {
    return data != "";
  });
  cnt = cnt.filter(function (data) {
    return data != "";
  });
  for (let i = 0; i < userInfo.length; i++) {
    let sql = `update t_member set ${cnt[i]} = '${userInfo[i]}' where mb_id = '${id}'`;
    conn.query(sql, function (err, rows) {
      if (!err) {
        console.log("회원정보 수정 성공!", cnt[i], "를", userInfo[i]);
      } else {
        console.log("회원정보 수정 실패!" + err);
        console.log(cnt[i]);
        console.log(userInfo[i]);
      }
    });
  }
  res.redirect("http://127.0.0.1:3001/mypage");
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
    // let sqlText = `update t_member set m_profile = ? where mb_id = 'yangkang@daum.net'`;
    // conn.query(sqlText, [img], function (err, rows) {
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
  console.log("suggestion");

  let sql =
    // "select mb_id,mb_nick,m_profile from t_member where mb_id not in (select follow_id from t_follow ) order by rand() limit 5";
    `select mb_id,mb_nick,m_profile from t_member where mb_id = 'daOn@naver.com' union (select mb_id,mb_nick,m_profile from t_member where mb_id not in (select follow_id from t_follow ) and  mb_id != 'daOn@naver.com' and mb_id != 'kichul@naver.com' order by rand() limit 6)`;
  conn.query(sql, (err, info) => {
    if (!err) {
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
  let check;
  let email = req.body.emailSend;
  let sqlcheck = `select t_job from t_member where mb_id='${email}'`;
  conn.query(sqlcheck, (err, rows) => {
    if (!err) {
      check = rows[0].t_job;
      console.log(check);
      if (check == 1) {
        if (req.body.text === "" && req.file === undefined) {
          console.log("뭐좀 써봐");
          res.redirect("http://localhost:3000/jobsns");
        } else {
          let text = req.body.text;
          let img = req.file.buffer;
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
        res.redirect("http://localhost:3000/jobsns");
      } else {
        console.log("인증필요");
        res.redirect("http://localhost:3000/jobsns");
      }
    }
  });
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
  let sqlcheck = `select t_job from t_member where mb_id='${email}'`;
  conn.query(sqlcheck, (err, rows) => {
    if (!err) {
      check = rows[0].t_job;
      console.log(check);
      if (check == 0) {
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
      } else {
        res.json({
          suc: "인증필요",
        });
      }
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
    "select c.bd_seq,c.bd_id,c.bd_content,c.bd_likes,c.bd_cnt,m.mb_id,m.m_profile,c.img_file from t_community c, t_member m where c.bd_id = m.mb_id and bd_div=0 order by bd_time desc limit 10"; // 모든 정보 배열 형태로 보내기
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
  let sql =
    "select m.mb_nick,c.bd_seq,c.bd_id,c.bd_content,c.bd_likes,c.bd_cnt,m.mb_id,m.m_profile,c.img_file from t_community c, t_member m where c.bd_id = m.mb_id and bd_div=1 order by bd_time desc"; // 모든 정보 배열 형태로 보내기
  let sql_cmt = "select * from t_comment";
  let cmts;
  conn.query(sql_cmt, (err, rows) => {
    if (!err) {
      cmts = rows;
      // console.log("cmts값 넣기");
      // console.log("댓글들 ", cmts);
    }
  });

  conn.query(sql, (err, rows) => {
    if (!err) {
      // console.log("아이디값 정민정민", rows[0]);
      // console.log("게시글값 정민정민", rows);
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
  console.log("게시글 아이디 : ", req.body.bd_id);
  console.log("코멘트 : ", req.body.comment);
  console.log("로그인아이디 : ", req.body.mb_id);
  console.log("게시글 순번 : ", req.body.bd_seq);
  let bd_seq = req.body.bd_seq; // 게시글 번호
  let cmt_content = req.body.comment; // 댓글 내용
  let mb_id = req.body.mb_id; // 댓글 작성자
  let bd_id = req.body.bd_id; // 게시글 작성자
  console.log("mb_id = ", mb_id);
  console.log("bd_id = ", bd_id);
  //div search
  let comment;
  let div;
  let sqlDiv = `select bd_div from t_community where bd_seq = ${bd_seq}`;
  conn.query(sqlDiv, [bd_seq], (err, rows) => {
    if (!err) {
      div = rows[0].bd_div;
      console.log(div + "이거야이거");
      if (div == 0) {
        comment = `${mb_id}님이 회원님의 게시글에 댓글을 남겼습니다.`;
      } else if (div == 1) {
        comment = `JOBSNS에서 회원님의 게시글에 댓글을 남겼습니다.`;
      } else {
        comment = `코딩문답에서 회원님의 게시글에 댓글을 남겼습니다.`;
      }
    }
  });
  // notice comment

  let sql_cnt = "update t_community set bd_cnt = bd_cnt +1 where bd_seq =?";
  conn.query(sql_cnt, [bd_seq], (err, rows) => {
    if (!err) {
      console.log("댓글 수 증가 완료");
    }
  });

  let sql =
    "insert into t_comment(bd_seq,cmt_content,mb_id,bd_id) values(?,?,?,?)";
  let sqlNt = `insert into t_notice(bd_seq,bd_id,mb_id,n_div,n_comment) values (?,?,?,?,?)`;
  conn.query(sql, [bd_seq, cmt_content, mb_id, bd_id], (err, rows) => {
    if (!err) {
      console.log("댓글 넣어졌어");
      conn.query(sqlNt, [bd_seq, bd_id, mb_id, div, comment], (err, rows) => {
        if (!err) {
          console.log("알림 들어감!");
        } else {
          console.log("알림 안들어감" + err);
        }
      });
      res.send({
        suc: "성공 정민",
      });
    } else {
      console.log("댓글문제 : ", err);
    }
  });

  let sql_content = "select bd_content from t_community where bd_seq = ?";
  conn.query(sql_content, [bd_seq], (err, content) => {
    if (content.length > 0) {
      console.log("bd_content 성공 : ", content);
      res.send({
        content: content,
      });
    } else {
      console.log("bd_content에러", err);
    }
  });
});

router.post("/specials", (req, res) => {
  let sql_cmt = "select * from t_comment";
  let cmts;
  conn.query(sql_cmt, (err, rows) => {
    if (!err) {
      cmts = rows;
    }
  });
  console.log("여기야", cmts);
  let sql = `select * from t_community where bd_div = 2`;
  conn.query(sql, (err, rows) => {
    if (rows.length > 0) {
      res.send({
        specials: rows,
        cmts: cmts,
      });
    } else {
      console.log("코딩안됨/!!!", err);
    }
  });
});

router.post("/mypage", (req, res) => {
  console.log("마이페이지 라우터");

  let sql =
    "select mb_id,m_profile from t_member where mb_id not in (select follow_id from t_follow) limit 5";
  conn.query(sql, (err, rows) => {
    if (!err) {
      console.log("여기는 마이페이지 라우터");
      res.send({
        dbInfo: rows,
      });
    } else {
      console.log("마이페이지 라우터 오류", err);
    }
  });
});

router.post("/followClick", (req, res) => {
  console.log("followClick라우터 시작");
  let email = req.body.email;
  let sql = `select m.mb_id id,m.m_profile profile from t_member m, t_follow f where m.mb_id = f.follow_id and f.mb_id = ? and m.mb_id != ?;`;
  conn.query(sql, [email, email], (err, rows) => {
    if (rows.length > 0) {
      console.log("followClick성공");
      res.send({
        info: rows,
      });
    } else {
      console.log("followClick실패", err);
    }
  });
});

router.post("/followingClick", (req, res) => {
  console.log("followClick라우터 시작");
  let email = req.body.email;
  let sql = `select f.mb_id id,m.m_profile profile from t_member m, t_follow f where m.mb_id = f.follow_id and f.follow_id = ? and f.mb_id != ?;`;
  conn.query(sql, [email, email], (err, rows) => {
    if (rows.length > 0) {
      console.log("followClick성공");
      res.send({
        info: rows,
      });
    } else {
      console.log("followClick실패", err);
    }
  });
});

router.post("/mypagecnt", (req, res) => {
  console.log("mypagecnt" + req.body.email);
  let email = req.body.email;
  let sql = "select count(bd_seq) cnt from t_community where bd_id = ?";
  let sqlMy = "select m_profile from t_member where mb_id = ?";
  let myInfo;
  let sqlFollow =
    "select follow_id follow from t_follow where mb_id = ? and follow_id != ?";
  let follow;
  let followCnt;
  let sqlFollowing =
    "select count(mb_id) cnt from t_follow where follow_id = ? and mb_id != ?;";
  let followingCnt;
  conn.query(sqlFollow, [email, email], (err, rows) => {
    followCnt = rows.length;
    if (!err) {
      console.log("follow성공", rows);
      console.log("followcnt : ", followCnt);
      follow = rows;
    } else {
      console.log("follow쪽 문제", err);
    }
  });
  conn.query(sqlFollowing, [email, email], (err, rows) => {
    if (!err) {
      console.log("following성공", rows);
      followingCnt = rows;
    } else {
      console.log("following문제", err);
    }
  });
  conn.query(sqlMy, [email], (err, rows) => {
    if (!err) {
      myInfo = rows[0].m_profile;
    } else {
      console.log("마이페이지 내사진 안가져와짐 : ", err);
    }
  });

  conn.query(sql, [email], (err, rows) => {
    if (rows.length > 0) {
      console.log("라스트 마이프로필");
      res.send({
        myInfo: myInfo,
        cnt: rows,
        follow: follow,
        followCnt: followCnt,
        followingCnt: followingCnt,
      });
    } else {
      console.log("cnt값 안가져와짐", err);
    }
  });
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
  if (ch == 2) {
    let sql = `select a.img_file img_file, a.bd_seq bd_seq, b.save_time st from t_community a, m_save b where a.bd_seq = b.bd_seq and b.mb_id = '${id}' order by st desc`;
    conn.query(sql, (err, rows) => {
      if (!err) {
        console.log("성공");
        res.send({
          result: rows,
        });
      } else {
        console.log(err);
      }
    });
  } else {
    let sql = `select * from t_community where bd_id = '${id}' and bd_div=${div} order by bd_time desc`;
    conn.query(sql, (err, rows) => {
      if (!err) {
        console.log("성공");
        res.send({
          result: rows,
        });
      } else {
        console.log("실패" + err);
      }
    });
  }
});

router.post("/userpage", (req, res) => {
  let id = req.body.id;
  console.log(id);

  let sql = `select * from t_community where bd_id = '${id}' and bd_div=0 order by bd_time desc`;
  conn.query(sql, (err, rows) => {
    if (!err) {
      console.log("성공");
      res.send({
        result: rows,
      });
    } else {
      console.log("실패" + err);
    }
  });
});

router.post("/saveList", (req, res) => {
  // 스크랩 기능
  let id = req.body.id;
  let seq = req.body.bd_seq;
  console.log(id);
  console.log(seq);
  let sql1 = `select * from m_save where mb_id = '${id}' and bd_seq = ${seq}`;
  conn.query(sql1, (err, rows) => {
    if (rows.length > 0) {
      console.log("이미 저장된 데이터");
      let sql = `delete from m_save where mb_id = '${id}' and bd_seq = ${seq}`;
      conn.query(sql, (err1) => {
        if (!err1) {
          console.log("저장됨 삭제 완료");
          res.json({
            result: "삭제",
          });
        } else {
          console.log("저장됨 삭제 실패" + err1);
        }
      });
    } else {
      console.log("저장된 데이터 아님");
      let sql = `insert into m_save(mb_id ,bd_seq) values(?,?)`;
      conn.query(sql, [id, seq], (err) => {
        if (!err) {
          console.log("저장성공");
          res.json({
            result: "성공",
          });
        } else {
          console.log("저장실패" + err);
        }
      });
    }
  });
});

router.post("/likeIn", (req, res) => {
  let id = req.body.id;
  let bd_seq = req.body.bd_seq;
  let div;
  let master;
  let sql = `select * from t_like where mb_id = '${id}' and bd_seq = ${bd_seq}`;
  let sqlin = `update t_community set bd_likes = (bd_likes + 1) where bd_seq = ${bd_seq}`;
  let sqlout = `update t_community set bd_likes = (bd_likes - 1) where bd_seq = ${bd_seq}`;
  let comment;
  // bd_div 찾기
  let sqlDiv = `select bd_div,bd_id from t_community where bd_seq = ${bd_seq}`;

  let sqlLike =
    "select m.mb_id,m.mb_nick from t_like l, t_member m where m.mb_id = l.mb_id and l.mb_id = ?";
  let likeNick;
  let likeId;

  conn.query(sqlDiv, [bd_seq], (err, rows) => {
    if (!err) {
      div = rows[0].bd_div;
      master = rows[0].bd_id;
      if (div == 0) {
        comment = `${id}님이 회원님의 게시글에 좋아요를 눌렀습니다.`;
      } else if (div == 1) {
        comment = `JOBSNS에서 회원님의 게시글에 좋아요를 눌렀습니다.`;
      } else if (div == 2) {
        comment = `코딩문답에서 회원님의 게시글에 좋아요를 눌렀습니다.`;
      }
    }
  });
  let sqlNt = `insert into t_notice(bd_seq,bd_id,mb_id,n_div,n_comment) values (?,?,?,?,?)`;

  conn.query(sql, (err, rows) => {
    if (rows.length > 0) {
      let sql1 = `delete from t_like where mb_id = '${id}' and bd_seq = ${bd_seq}`;
      conn.query(sql1, (err, rows) => {
        if (!err) {
          console.log("좋아요 취소 = 헤어짐");
          conn.query(sqlout);
          res.json({
            result: "삭제",
          });
        } else {
          console.log("좋아요 삭제 실패...질척거릴거야!!!");
        }
      });
    } else {
      let sql1 = `insert into t_like values(?,?)`;
      conn.query(sql1, [id, bd_seq], (err) => {
        if (!err) {
          console.log("좋아요 성공!!!ㅋ커플탄생");
          conn.query(sqlin);
          conn.query(sqlNt, [bd_seq, master, id, div, comment], (err, rows) => {
            if (!err) {
              console.log("알림 들어감!");
            } else {
              console.log("알림 안들어감");
            }
          });
          conn.query(sqlLike, [id], (err, rows) => {
            if (rows.length > 0) {
              console.log("like정보 가져와짐");
              likeNick = rows[0].mb_nick;
              likeId = rows[0].mb_id;
              console.log("likeNick값 : " + likeNick);
              console.log("likeId값 : " + likeId);
            }
            res.json({
              result: "성공",
              nick: likeNick,
              id: likeId,
            });
          });
        } else {
          console.log("좋아요 실패...커플지옥 솔로천국");
        }
      });
    }
  });
});

router.post("/deleteProfile", (req, res) => {
  let id = req.body.id;
  let sql = `delete from t_member where mb_id = ${id}`;
  let sql1 = `delete from m_save where mb_id = ${id}`;
  let sql2 = `delete from t_comment where mb_id = ${id}`;
  let sql3 = `delete from t_follow where follow id =${id} and mb_id = ${id}`;
  let sql4 = `delete from t_like where mb_id = ${id}`;
  let sql5 = `delete from t_notice where mb_id = ${id}`;
  conn.query(sql5);
  conn.query(sql1);
  conn.query(sql3);
  conn.query(sql4);
  conn.query(sql2);
  conn.query(sql, function (err, rows) {
    if (!err) {
      console.log("회원 탈퇴 성공");
      res.redirect("http://localhost:3000/");
    } else {
      console.log("회원 탈퇴 문제", err);
      throw err;
    }
  });
});

router.post("/notice", (req, res) => {
  let id = req.body.id;
  console.log(id);
  let sql = `select n_comment,nt_time from t_notice where bd_id = '${id}' order by nt_time desc limit 5;`;
  conn.query(sql, (err, rows) => {
    if (!err) {
      console.log("알림데이터 꺼내먹어요~");
      res.json({
        comment: rows,
      });
    } else {
      console.log("알림데이터 못꺼내먹음..." + err);
    }
  });
});

router.post("/check", upload.single("img"), (req, res) => {
  let img = req.file.buffer;
  let id = req.body.emailSend;
  let sql = `insert into m_check values(?,1,1,?)`;
  conn.query(sql, [id, img], (err, rows) => {
    if (!err) {
      console.log("인증확인중");
      res.redirect("http://localhost:3000/mypage");
    } else {
      console.log("인증정보 불일치" + err);
    }
  });
});

router.get("/", function (request, response) {
  console.log("Happy Hacking!");
  response.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

module.exports = router;
