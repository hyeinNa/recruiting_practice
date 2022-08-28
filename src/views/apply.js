import React, { useState } from "react";
import "./apply.css";
import "./style.css";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";

/* testtest */

function Apply() {
  const history = useHistory();
  const [values, setValues] = useState({
    name: "",
    student_id: "",
    ewhaian_id: "",
    pwd: "",
  });

  const [selectedFile, setSelectedFile] = useState();
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    var fileInput = document.getElementsByClassName("file-input");
    var fileText = document.getElementById("upload_file_text");
    for (var i = 0; i < fileInput.length; i++) {
      if (fileInput[i].files.length > 0) {
        for (var j = 0; j < fileInput[i].files.length; j++) {
          fileText.textContent = fileInput[i].files[j].name;
        }
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const obj = {
      name: values.name,
      student_id: values.student_id * 1,
      ewhaian_id: values.ewhaian_id,
      pwd: values.pwd * 1,
      required: true,
    };

    const formData = new FormData();
    const config = { headers: { "constent-type": "multipart/form-data" } };
    formData.append("file", selectedFile);
    /*axios
      .post("/api/result/add/", obj)
      .then((res) => (res) => console.log("info add success"));
    */
    console.log(obj);
    axios
      .post("/api/upload", formData, config)
      .then((res) => {
        if (res.data.success === 1) {
          alert("파일을 성공적으로 저장했습니다!");
          axios
            .post("/api/result/add/", obj)
            .then((res)=>(res)=>console.log("Info add success"));

          setSuccess("success");
          history.push("/success");
        } else {
          alert("파일 저장에 실패했습니다. docx파일인지 확인해주세요.");
          setSuccess("fail");
        }
      })
      .catch((err) => {
        alert("파일 저장에 실패했습니다. 다시 시도해주세요!");
      });
  };

  return (
    <>
      <div className="banner_apply">
      </div>

      <div className="ContentBox">
        <div className="downFile">
          <a href="../ewhaian_application_41.docx" download>
            <div>
              <img src="../img/arrow.svg" />
            </div>
            <p>지원서 다운로드</p>
          </a>
        </div>

        <div>
          <H1>지원하기</H1>
        </div>

        <form onSubmit={handleSubmit}>
          <Content>성명</Content>
          <Input
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />

          <span className="r_content" required>
            학번
          </span>
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

          <span className="r_content" required style={{ width: 100 }}>
            비밀번호
          </span>
          <span className="r_scontent">* 숫자 4개를 입력하세요.</span>
          <Input
            name="pwd"
            value={values.pwd}
            onChange={handleChange}
            required
            placeholder="본인 식별에 사용됩니다"
          />

          <span className="r_content" style={{ width: "140px" }}>
            지원서 제출
          </span>
          <span className="r_scontent" required>
            * 파일 이름 : 41기 지원서_디자인(팀명)_이화연(성명)
          </span>

          <Input
            className="file-input"
            id="input_file"
            type="file"
            name="file"
            value={values.file}
            onChange={handleFileChange}
            style={{ display: "none" }}
            required
          />
          <div className="upload_file">
            <div>
              <p
                id="upload_file_text"
                style={{ float: "left", color: "#767676" }}
              >
                파일을 선택해 주세요
              </p>
              <label className="upload_file_label" for="input_file">
                <img src="../img/fileicon.svg" />
              </label>
            </div>
          </div>

          <Button type="submit">제출하기</Button>
        </form>
      </div>
    </>
  );
}

export default Apply;

const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 54px;
  clear: both;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
`;

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
  margin-bottom: 133px;
  border: none;
  box-shadow: 0px 10px 20px rgba(236, 20, 104, 0.35);
  @media screen and (max-width: 900px) {
    width: 90vw;
    left: 5vw;
  }
`;
