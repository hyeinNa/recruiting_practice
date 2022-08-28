import "./header.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  const GetClick = (e) => {
    setCurrentClick(e.target.id);

    if (document.body.clientWidth <= 768) {
      let toggleUL = document.getElementById("headerUl");
      let headerBox = document.getElementById("headerBox");

      if (toggleUL.style.display === "block") {
        toggleUL.style.display = "none";
        headerBox.style.boxShadow = "0px 5px 20px rgba(0, 0, 0, 0)";
      } else {
        toggleUL.style.display = "block";
        headerBox.style.boxShadow = "0px 5px 20px rgba(0, 0, 0, 0.1)";
      }
    }
  };

  useEffect(
    (e) => {
      if (currentClick === "apply" || currentClick === "result" || currentClick === "assign") {
        let current = document.getElementById(currentClick);
        let currentLi = document.getElementById(currentClick + "_1");

        current.style.color = "#EC1468";
        currentLi.style.border = "1px solid #EC1468";
        currentLi.style.boxSizing = "border-box";
        currentLi.style.borderRadius = "23px";
      }

      if (prevClick === "apply" || prevClick === "result" || prevClick === "assign" || currentClick === "home") {
        let prev = document.getElementById(prevClick);
        let prevLi = document.getElementById(prevClick + "_1");

        prev.style.color = "black";
        prevLi.style.border = "none";
      }

      setPrevClick(currentClick);
    },
    [currentClick]
  );

  return (
    <div id="headerBox" className="headerBox">
      <Link to="/" className="logoA" id="home" onClick={GetClick}>
        <img className="logoImg" id="main" src="/img/Frame.png" alt="ewhaian" />
      </Link>
      <Ul id="headerUl" className="headerUl">
        <Li id="apply_1">
          <Link to="/apply" id="apply" onClick={GetClick}>
            지원하기
          </Link>
        </Li>
        <Li id="result_1">
          <Link to="/result" id="result" onClick={GetClick}>
            결과확인
          </Link>
        </Li>
        <Li id="assign_1">
          <Link to="/assign" id="assign" onClick={GetClick}>
            과제제출
          </Link>
        </Li>
        <Li onClick={GetClick}>
          <a href="http://www.ewhaian.com/" target="_blank">
            <Btn id="to-ewhaian" className="toEwhaian">
              이화이언 홈
            </Btn>
          </a>
        </Li>
      </Ul>
      <a className="toggleBtn" onClick={GetClick}>
        <div className="toggleBar" style={{ marginBottom: "5px" }} div />
        <div className="toggleBar" style={{ marginBottom: "5px" }} div />
        <div className="toggleBar" div />
      </a>
    </div>
  );
}

export default Header;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

const Li = styled.li`
  float: left;
  margin-right: 20px;
  width: 90px;
  height: 36px;
  text-align: center;
  line-height: 36px;
`;

const Btn = styled.div`
  position: absolute;
  width: 134px;
  height: 36px;
  right: 15%;
  background: #ec1468;
  border-radius: 23px;
  color: white;
  text-align: center;
  line-height: 36px;
`;