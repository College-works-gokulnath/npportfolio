import React from "react";
import styled from "styled-components";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from '@mui/icons-material/Twitter';
const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
`;
const LeftSideMain = styled.div`
  height: 100%;
  width: 467px;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0px 72px 133px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;
`;

const RightSideMain = styled.div`
  height: 100%;
`;
const ProfileImg = styled.div`
  /* background-image: url('Assets/profileimg.svg'); */
`;
const Name = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;

  display: flex;
  align-items: center;
  letter-spacing: -0.5px;

  color: #000000;
`;

const GetInTouch = styled.button`
  width: 282px;
  height: 48px;

  border: none;

  background: #eeeeee;
  border-radius: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;

  align-items: center;
  text-align: center;
  text-transform: capitalize;

  color: #acacac;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftSideHead_1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const LeftSideSection_2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1.2px;

  /* or 160% */
  margin: 1rem 0;

  display: flex;
  align-items: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;

  color: #131313;
  /* or 160% */

  display: flex;
  align-items: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;

  color: rgba(19, 19, 19, 1); ;
`;
const SkillDesc = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const SkillNames = styled.li`
  list-style-type: none;
  /* paste */

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  padding: 7.01562px 10.8281px 8.98438px 11px;
  background: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 16px;
`;

const LeftSideSection_3 = styled.div``;
const AboutDesc = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  display: flex;
  align-items: center;
  text-align: justify;

  color: #3e3e3e;
`;
const Location = styled.div`
  display: flex;
  gap: 10px;
  margin: 1rem 0;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: lightgray;
`;
const LeftSideSection_4 = styled.div``;
const Icons = styled.div`
display: flex;
gap: 10px;
cursor: pointer;
align-items: center;
`;
function Main() {
  return (
    <MainSection>
      <LeftSideMain>
        <LeftSideHead_1>
          <ProfileImg>
            <img src="Assets/profileimg.svg" />
          </ProfileImg>
          <Name> Dr. G. NaliniPriya</Name>
          <GetInTouch>
            {" "}
            <img
              style={{
                marginRight: "10px",
              }}
              src="Assets/vector.svg"
            />{" "}
            Get In Touch
          </GetInTouch>

          <Line></Line>
        </LeftSideHead_1>

        <LeftSideSection_2>
          <Title>Skills</Title>
          <SkillDesc>
            <SkillNames>Leadership</SkillNames>
            <SkillNames>Research and Development</SkillNames>
            <SkillNames>Mentoring</SkillNames>
            <SkillNames>Lecturer</SkillNames>
            <SkillNames>Problem Solving</SkillNames>
            <SkillNames>Critical Thinking</SkillNames>
          </SkillDesc>

          <Line></Line>
        </LeftSideSection_2>
        <LeftSideSection_3>
          <Title>ABOUT</Title>
          <AboutDesc>
            Dr. G. Nalinipriya Presently working as a professor in the
            Department of Information Technology at Saveetha Engineering
            College, Anna University Chennai. Tamilnadu, India. She has done
            Bachelor of Engineering from Madras University and also done M.E and
            PhD Degree from Anna University Chennai. She has more than 26 years
            of experience in the field of Teaching, Industry and Research. She
            has published research papers in many International Journals having
            High impact Factor which are indexed in Google scholar, IEEE Xplore
            and SpringerLink. Currently she has published 6 Patents in cutting
            edge Technologies and 2 Patents granted. She has been invited as a
            resource person for Workshops, Seminars and Faculty Development
            Programs, Conferences in various Engineering Colleges, Universities
            across India and Abroad. She has visited Universities in Foreign
            countries like France, Singapore and Malaysia as International
            Conference Session chair and Guest speaker. She is an Editor and
            author for international Books Published by Elsevier, Wiley and
            Taylor & Francis. She Received “Outstanding Contribution in
            Reviewing” Award from Indian Heart Journal, Elsevier. She is a
            member of many professional bodies like IEEE, ISTE, CSI, IEI, ACEEE,
            CSTA, IAENG and ISRD. She has guided many Projects in UG, PG and PhD
            Levels. Her research interests include Data science, Big Data
            Analytics, Machine Learning, Artificial Intelligence, IOT, Language
            Computing and Cloud security.
          </AboutDesc>
          <Location>
            <PlaceIcon />
            <AboutDesc
              style={{
                color: "#131313",
              }}
            >
              Tamil Nadu, India
            </AboutDesc>
          </Location>
          <Line></Line>
        </LeftSideSection_3>
        <LeftSideSection_4>
          <Title>GOOGLE SCHOLAR</Title>
          <Location>
            <img src="Assets/GS.svg" />
            <AboutDesc>Identity Verified</AboutDesc>
          </Location>
          <Line></Line>
        </LeftSideSection_4>
        <LeftSideSection_4>
          <Title>Links</Title>
          <Icons>
            <InstagramIcon />
            <FacebookIcon />
            <GitHubIcon />
            <LinkedInIcon/>
            <TwitterIcon/>
          </Icons>
        </LeftSideSection_4>
      </LeftSideMain>

      <RightSideMain></RightSideMain>
    </MainSection>
  );
}

export default Main;
