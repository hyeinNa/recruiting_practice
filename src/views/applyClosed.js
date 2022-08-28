import React from "react";
import "./style.css";
import "./result.css";

import styled from "styled-components";

function ApplyClosed() {
  return (
    <>
      <div className="banner_result">
      </div>
      <Container>
        <div className="r_box" style={{ marginTop: 200, marginBottom: 200 }}>
          <div className="r_failbox">
            <div className="r_bold_">지원 기간이 아닙니다.</div>
          </div>
        </div>
      </Container>
    </>
  );
}
const Container = styled.div`
  // position: absolute;
  margin: 0 auto !important;
  width: 840px;
  left: 50%;
  margin-left: -420px;
  @media screen and (max-width: 900px) {
    width: 90vw;
    margin-left: 0;
    left: 5vw;
  }
`;
export default ApplyClosed;