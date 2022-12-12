import React from "react";
import styled from "styled-components";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from '@mui/icons-material/Twitter';
import Tabs from './Tabs'
import like from '../images/like.svg' 
import share from '../images/share.svg'
import send from '../images/send.svg'
import './main.css'
const MainSection = styled.div`
  display: flex;
  height: 100%; 

  /* background: linear-gradient(180deg, #426bff 18.54%, #5a78ff 36.77%, #5c63ef 74.79%, #1a60f6 100%); */
`;
const LeftSideMain = styled.div`
  height: 100%;
  flex: 2;
  /* background: rgba(255, 255, 255, 0.72); */
  /* background-color: white; */
  background-color: #6082ff;
  /* box-shadow: 0px 72px 133px rgba(0, 0, 0, 0.25);
   */
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; */
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 20px;
  padding: 20px;
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
  cursor: pointer;
  /* box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px; 1*/ 
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

  &:active{
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  }

  background: #000000;
  border-radius: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;

  align-items: center;
  text-align: center;
  text-transform: capitalize;

  color: #ffffff;
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

  color: rgba(19, 19, 19, 1); 
`;
const SkillDesc = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const SkillNames = styled.li`
  list-style-type: none;
  /* paste */
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  font-family: "poppins";
  /* font-style: normal; */
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 12px;
  line-height: 16px;

  padding: 7.01562px 10.8281px 8.98438px 11px;
  background: #000000;
  /* border: 1px solid #e3e3e3; */
  color: #ffffff;
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
  background-color: #494949;
  border-radius: 40px;
`;
const LeftSideSection_4 = styled.div``;
const Icons = styled.div`
display: flex;
gap: 10px;
cursor: pointer;
align-items: center;
`;

// Right Main Stylings

const RightSideMain = styled.div`
  flex: 5;
  padding: 3rem;
`;
const Heading = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    font-family: 'poppins';
    line-height: 1.25;
`
const Desc = styled.p`
    font-size: 1.5rem;
    font-weight: 500;

`
const Share = styled.div`
    background-color: white;
    border-radius: 100px;
    height: auto;
    padding: 0.5rem;
    gap:0.7rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 79px;
    top:20%;
    right:15%;
    /* box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px; */
    box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px;
`

const All = styled.div`
  padding: 1rem 10%;
  height: 100%;
  background: linear-gradient(180deg, #426bff 18.54%, #5a78ff 36.77%, #5c63ef 74.79%, #1a60f6 100%);
`
const Aboutme = styled.div`
z-index: 10000;
  
`
// cnst sec = "${props}"
const pr = "#f7cfc8"
const AboutTitle = styled.div`
    font-family: "Inter";
  font-style: normal;
 text-align: center;
  font-size: 7vw;

  margin: 2rem auto;
  width: 100%;
  /* line-height: 16px; */


  /* or 160% */



  letter-spacing: 1.2px;
  text-transform: uppercase;

  color:"${pr}";

  /* color:  #f7cfc8; */
  font-family: "Luckiest Guy", cursive;
  font-size: 180px;
  letter-spacing: 10px;
  text-align: center;
  text-shadow: ${props=> "-6px -6px "+props.sec+", -5px -5px "+props.sec+",-4px -4px "+props.sec+", -3px -3px "+props.sec+", -2px -2px "+props.sec+",-1px -1px "+props.sec+", 1px 1px "+props.sec+", 2px 2px "+props.sec+",3px 3px "+props.sec+", 4px 4px "+props.sec+", 5px 5px "+props.sec+",6px 6px "+props.sec+", 7px 7px "+props.sec+", 8px 8px "+props.sec+",9px 9px "+props.sec+", 10px 10px "+props.sec+", 11px 11px "+props.sec+",12px 12px "+props.sec+", 13px 13px "+props.sec+", 14px 14px "+props.sec+",15px 15px "+props.sec+", 16px 16px "+props.sec+", 17px 17px "+props.sec+",18px 18px "+props.sec+", 19px 19px "+props.sec+", 20px 20px "+props.sec+",21px 21px "+props.sec+", 22px 22px "+props.sec+", 23px 23px "+props.sec+",24px 24px "+props.sec+", 25px 25px "+props.sec+", 26px 26px "+props.sec+",27px 27px "+props.sec+", 25px 25px "+props.sec+", 28px 28px "+props.sec+",29px 29px "+props.sec+", 30px 30px "+props.sec+", 31px 31px "+props.sec+",32px 32px "+props.sec+", 33px 33px "+props.sec+", 34px 34px "+props.sec+",35px 35px "+props.sec+", 36px 36px "+props.sec+", 37px 37px "+props.sec+",38px 38px "+props.sec+", 39px 39px "+props.sec+", 40px 40px;"};
  width: 100%;

`
const Aboutdec  = styled.div`
   font-family: "Inter";
  font-style: normal;
 text-align: center;
  font-size: 1.5vw;
border-radius:20px;
background-color: #201b1b;
line-height: 2rem;
color: white;
padding: 1rem;
text-align: center;
letter-spacing: 1px;
box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`

function Main() {
  return (
    <All>
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
            <SkillNames>Mentoring</SkillNames>
            <SkillNames>Lecturer</SkillNames>
            <SkillNames>Leadership</SkillNames>
            <SkillNames>Problem Solving</SkillNames>
            <SkillNames>Research and Development</SkillNames>
            <SkillNames>Critical Thinking</SkillNames>
          </SkillDesc>

          <Line></Line>
        </LeftSideSection_2>
        {/* <LeftSideSection_3>
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
        </LeftSideSection_3> */}

        {/* <LeftSideSection_4>
          <Title>GOOGLE SCHOLAR</Title>
          <Location>
            <img src="Assets/GS.svg" />
            <AboutDesc>Identity Verified</AboutDesc>
          </Location>
          <Line></Line>
        </LeftSideSection_4> */}

        {/* <LeftSideSection_4>
          <Title>Links</Title>
          <Icons>
            <InstagramIcon />
            <FacebookIcon />
            <GitHubIcon />
            <LinkedInIcon />
            <TwitterIcon />
          </Icons>
        </LeftSideSection_4> */}
      </LeftSideMain>
      <RightSideMain>
        <Heading>M.E., Ph.D </Heading>
        <Desc>Professor at Saveetha Engineering College</Desc>
        <main style={{width:"80%", marginTop: "1rem"}}>
          <Tabs />
        </main>
      </RightSideMain>
      <Share>
        <img  src={like} alt="image" />        
         <hr/>     
        <img  src={share} alt="image" />        
        <img  src={send} alt="image" />        
      </Share>
    </MainSection>
    <Aboutme>
      <AboutTitle sec="#a0b0fe">About me</AboutTitle>
      <Aboutdec><p>Dr. G. Nalinipriya Presently working as a professor in the Department of Information Technology at Saveetha Engineering College, Anna University Chennai. Tamilnadu, India. She has done Bachelor of Engineering from Madras University and also done M.E and PhD Degree from Anna University Chennai. She has more than 26 years of experience in the field of Teaching, Industry and Research. She has published research papers in many International Journals having High impact Factor which are indexed in Google scholar, IEEE Xplore and SpringerLink. Currently she has published 6 Patents in cutting edge Technologies and 2 Patents granted. She has been invited as a resource person for Workshops, Seminars and Faculty Development Programs, Conferences in various Engineering Colleges, Universities across India and Abroad. She has visited Universities in Foreign countries like France, Singapore and Malaysia as International Conference Session chair and Guest speaker. She is an Editor and author for international Books Published by Elsevier, Wiley and Taylor & Francis. She Received “Outstanding Contribution in Reviewing” Award from Indian Heart Journal, Elsevier. She is a member of many professional bodies like IEEE, ISTE, CSI, IEI, ACEEE, CSTA, IAENG and ISRD. She has guided many Projects in UG, PG and PhD Levels. Her research interests include Data science, Big Data Analytics, Machine Learning, Artificial Intelligence, IOT, Language Computing and Cloud security.</p></Aboutdec>
    </Aboutme>
    </All>




  );
}

export default Main;
