import React, { Component } from "react";

import "./OverlapCheckText.styles.scss";

class OverlapCheckText extends Component {
  constructor() {
    super();
    this.state = {
      idCheck: ["6자 이상의 영문 혹은 영문과 숫자를 조합", "아이디 중복확인"],
      pwdCheck: [
        "10자 이상 입력",
        "영문/숫자/특수문자(공백 제외)만 허용하며, 각각 1개 이상 조합",
      ],
      pwdDubleCheck: ["동일 비밀번호를 입력해주세요."],
      addInfo: [
        "추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다.",
        "가입 이후, 수정이 불가합니다.",
        "대소문자 및 띄어쓰기에 유의해주세요.",
      ],
      phoneCheckText: ["핸드폰 인증 확인"],
    };
  }

  render() {
    const {
      idCheck,
      pwdCheck,
      pwdDubleCheck,
      addInfo,
      phoneCheckText,
    } = this.state;
    const {
      user_id,
      userIdCheck,
      password,
      userPwdCheck,
      recommendCheck,
      phoneCheck,
    } = this.props.onData;
    const idCondition = /[A-Za-z0-9]\w{5,}/;
    const pwdCondition = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;
    return (
      <div className="OverlapCheckText">
        {this.props.onOffCount === "idCheck" && (
          <>
            <span
              className={`initial ${
                user_id.match(idCondition) ? "correct" : "incorrect"
              }`}
            >
              {idCheck[0]}
            </span>
            <span
              className={`initial ${
                userIdCheck === true ? "correct" : "incorrect"
              }`}
            >
              {idCheck[1]}
            </span>
          </>
        )}
        {this.props.onOffCount === "pwdCheck" && (
          <>
            <span
              className={`initial ${
                password.length >= 10 ? "correct" : "incorrect"
              }`}
            >
              {pwdCheck[0]}
            </span>
            <span
              className={`initial ${
                password.match(pwdCondition) ? "correct" : "incorrect"
              }`}
            >
              {pwdCheck[1]}
            </span>
          </>
        )}
        {this.props.onOffCount === "pwdDubleCheck" && (
          <>
            <span
              className={`initial ${
                password.match(pwdCondition) && password === userPwdCheck
                  ? "correct"
                  : "incorrect"
              }`}
            >
              {pwdDubleCheck[0]}
            </span>
          </>
        )}
        {this.props.onOffCount === "phoneCheck" && (
          <>
            <span className={`initial ${phoneCheck ? "correct" : "incorrect"}`}>
              {phoneCheckText[0]}
            </span>
          </>
        )}
        <>
          {recommendCheck !== "" &&
            this.props.onOffCount === "addInfo" &&
            recommendCheck !== "" &&
            addInfo.map((text, idx) => (
              <span key={idx} className={"initial-recommend"}>
                {text}
              </span>
            ))}
        </>
      </div>
    );
  }
}

export default OverlapCheckText;
