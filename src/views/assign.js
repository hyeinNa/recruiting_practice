import React, { useState, useEffect } from "react";
import "./style.css";
import "./result.css";
import axios from "axios";
import { useHistory } from "react-router";
//import Final from "./result_a";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Assign() {
  const [values, setValues] = useState({
    name: "",
    student_id: "",
    ewhaian_id: "",
    result: "",
    key: "",
  });
  const history = useHistory();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    // if (!Error) {
    axios
      .get(
        "/api/result/find/" +
          values.student_id +
          "/" +
          values.name +
          "/" +
          values.ewhaian_id
      )
      .then((res) => {
        console.log("res ", res);
        console.log(res.data);
        if (!res.data[0]) {
          alert("성명, 학번, 아이디 모두 정확히 입력했는지 확인해주세요!");
        } else if (res.data[0].key === undefined) {
          history.push("/closed");
        } else {
          history.push("/showresult/" + res.data[0].key);
        }
      });
  }

  return (
    <>
      <div className="banner_result">
      </div>
      <Container>
        <div className="r_title">과제 제출</div>

        <form onSubmit={handleSubmit}>
          <Content>성명</Content>
          <Input
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />

          <span className="r_content">학번</span>
          <span className="r_scontent">* 7자리를 입력해주세요.</span>
          <Input
            name="student_id"
            value={values.student_id}
            onChange={handleChange}
            required
          />

          <Content>이화이언 아이디</Content>
          <Input
            name="ewhaian_id"
            value={values.ewhaian_id}
            onChange={handleChange}
            required
          />

          <Button type="submit">
            <Link to="/assignSubmit">확인</Link>
          </Button>
        </form>
      </Container>
    </>
  );
}

export default Assign;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 840px;
  height: 60px;
  margin-top: 12px;
  margin-left: auto;
  border: none;
  background: #f2f2f2;
  box-sizing: border-box;
  font-size: 20px;
  outline: none;
  padding-left: 15px;
  @media screen and (max-width: 900px) {
    width: 90vw;
  }
`;

const Content = styled.div`
  min-width: 300px;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0em;
  line-height: 30px;
  width: 840px;
  text-align: left;
  padding-top: 34px;
  @media screen and (max-width: 900px) {
    width: 90vw;
    left: 5vw;
  }
`;

const Container = styled.div`
  // position: absolute;
  margin: 0 auto !important;
  width: 840px;
  height: 1000px;
  left: 50%;
  margin-left: -420px;
  @media screen and (max-width: 900px) {
    width: 90vw;
    margin-left: 0;
    left: 5vw;
  }
`;

const Button = styled.button`
  width: 840px;
  height: 60px;
  background: #ec1468;
  border-radius: 30px;
  color: white;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-top: 70px;
  border: none;
  box-shadow: 0px 10px 20px rgba(236, 20, 104, 0.35);
  @media screen and (max-width: 900px) {
    width: 90vw;
    left: 5vw;
  }
`;