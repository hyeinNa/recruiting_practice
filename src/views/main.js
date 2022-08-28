import React from "react";
import "./main.css";
import styled from "styled-components";
import "./style.css";
import { Link } from "react-router-dom";

let tableContent = [
  {
    title: "다양한 프로그램 운영",
    content: `이화이언은 재학생들이 직접 운영하고 있는 '이화를 사랑하는 사람들을 위한' 비영리 집단입니다. 
        이화이언을 이용하는 벗들을 위한 다양한 프로그램을 운영하기 위해 활동하는 이화이언 운영진은, 마케팅팀,
        디자인팀, 웹개발팀으로 구성되어 있습니다.`,
  },
  {
    title: "이화 안의 더 큰 만남",
    content: `이화이언 온라인에서는 다양한 컨텐츠와 이벤트를 통해 이용자들에게 많은 혜택과 정보를 제공합니다. 
        이화이언은 탄생 이래 이화인들의 가장 많은 사랑을 받은 ‘비밀의 화원’부터, 다양한 기사가 올라오는 컨텐츠 카테고리, 
        이화에서 생활하기 위해 꼭 필요한 정보들이 가득한 캠퍼스 카테고리, 열린광장, 벼룩시장 등이 있는 라이프 카테고리까지! 
        처음 이화의 문을 열고 들어온 새내기, 이화의 베테랑이 된 정든내기, 졸업한 선배님까지 
        이화이언 안에서 ‘이화 안의 더 큰 만남’을 이루고 있습니다. `,
  },
  {
    title: "오프라인 이벤트",
    content: `또한, 이화이언은 온라인 뿐만 아니라 오프라인에서도 많은 활동들을 진행하고 있습니다. 
        다소 지칠 수 있는 학교 생활 속 이화이언이 각각 5월, 11월에 여는 오월드림과 배꽃정원은 
        화연들에게 매번 색다른 즐거움을 선사하고 있습니다.`,
  },
];
let teamInfo = [
  {
    name: "마케팅",
    content_t: ` 많은 이화인들이 참여하는 5월 행사와 11월 행사 기획을 맡습니다. 
    기획안 작성, 협찬 기업 컨택, 각종 게시글 작성, 협찬 물품 관리 등의 실무를 경험해볼 수 있습니다.
    그 외에도 이화이언 SNS 운영, 외부 이벤트 대행을 통한 제휴 제안, 컨택 등의 업무를 맡습니다.`,
  },
  {
    name: "디자인",
    content_t: `이화이언 및 이화이언 행사 홍보물 디자인을 맡습니다.5월,11월 행사의 포스터, 배너, 팝업, 굿즈, 웹페이지를 디자인합니다.
    또한 웹툰, 계절배너, 게시글 등의 이화이언 콘텐츠를 제작합니다.
    Adobe Photoshop, Illustrator 디자인 툴 스터디도 진행하고 있습니다. `,
  },
  {
    name: "웹개발",
    content_t: `이화이언 행사 사이트를 기획하고 개발합니다.
    마케팅팀, 디자인팀과 협업하여 행사에 필요한 웹페이지 배포 후 실제 행사에 사용합니다.
     "HTML, CSS, JavaScript, Node.js, MYSQL, Bootstrap, React" 등 웹프로그래밍 언어 스터디를 진행하고 있습니다.`,
  }
];
let team_explanation = [
  {
    detail: `-2022 여름계절 이화X라엘강연 진행`
  },
  {
    detail: `-디자인팀에서 작업한 리뉴얼 로고`
  },
  {
    detail: `-리크루팅 사이트와 같은 소프트웨어 개발`
  }
];

function Main() {
  return (
      <div>
        <div className="logo1" id="#ewhaian-introduce">
        <BackImage>
          <img src="../img/Frame.png" />
        </BackImage>
        </div>
        <span className="ewhaiantext">
          "이화안의 더 큰 만남, 이화이언"
        </span>
        <div>
        <div className="toptitle">
          "About 이화이언"
        <table className="table">
        {tableContent.map((list, i) => {
          return (
            <tr className="tr">
              <td className="title">{tableContent[i].title}</td>
              <td className="content">{tableContent[i].content}</td>
            </tr>
          );
        })}
        </table>
        </div>
        </div>
        <div id="#team-introduce">
        </div>
        <div className="teamtitle">
          팀 소개
        <div className="teamIntroduce">
        <table className="table">
            {teamInfo.map((list, i) => {
              return (
                <tr className="tr_t">
                  <td className="title">{teamInfo[i].name}</td>
                  <td className="content">{teamInfo[i].content_t}</td>
                  <div>
                    <div className="teamdetail">
                    <img src={"../img/team" + (i + 1) + ".jpg"} />
                    <span className="teamdetail_c">{team_explanation[i].detail}</span>
                    </div>  
                  </div>
                </tr>

              );
            })}
            </table>
        </div>
        <div className="contact-all">
        <div className="contact-title">CONTACT US</div>

        <div className="h_wrap">
          <div className="h_contact">
            <div className="contact_pic"><img className="kakao" src="/img/mail.jpg" /></div>
            <div className="h_content">ewhaianrecruit@daum.net</div>
          </div>

          <div className="h_contact">
            <div className="contact_pic"><img className="kakao" src="/img/kakao.png" /></div>
            <div className="h_content">
              채널 "이화이언 41기 수습운영진 모집"
            </div>
          </div>
        </div>
        </div>
        </div>    
      </div>
  );
}

export default Main;

const BackImage = styled.div`
  position: absolute;
  margin-top: 68px;
  width: 100%;
  height: 500px;
  left: 0px;
  background-image: url("../img/Peach.jpg");
  display: flex;
  justify-content: center;
  `;