import React from "react";
import data from "../../GoogleScholar.json";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Barchart from "./Barchart";
import { googleschoolarprofiledata } from "../../data";
import send from "../../images/share.svg";
import { borderRadius, margin } from "@mui/system";
import { Margin } from "@mui/icons-material";
const GsMain = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  /* background-color: black; */
  width: 100%;
  height: 100%;
`;
const Card = styled.div`
  background: ${(props) => (props.bg ? `url(${props.bg})` : "red")};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 400px;
  height: 250px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: flex-end;
  transition: 0.2s ease;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &::before {
    content: "";
    width: 50%;
    height: 100%;
    transform: skewX(40deg);
    background-color: ${(props) => (props.color ? props.color : "")};
  }
  &:hover {
    transform: scale(1.1);
  }
`;
const Text = styled.div`
  text-transform: capitalize;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 40px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  color: #ffffff;
  position: absolute;
  box-shadow: 1px 1px 5px gray;

  padding: 20px;

  align-items: flex-end;
`;
const Profile = styled.div`
  font-family: "inter";
  font-size: 1.5vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const SgName = styled.div`
  font-family: "inter";
  font-size: 3vw;
`;
const VeiwProfile = styled.a`
  text-decoration: none;
  color: white;

  width: 100%;
`;
function GoogleScholar() {
  console.log(data);

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      {googleschoolarprofiledata.profiles.map((data) => {
        return (
          <Profile>
            <SgName> {data.name}</SgName>
            <p> {data.affiliations}</p>
            <p>
              <strong>Cited by : </strong>
              {data.cited_by}{" "}
            </p>
            <p>
              <strong>Interests : </strong>
              {data.interests.map((data) => (
                <bold>{data.title},</bold>
              ))}
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                width: "250px",
                alignItems: "center",
                background: "black",
                padding: "10px",
                color:'white',
                borderRadius:'20px',
                margin:'20px 0',
                textTransform:'capitalize'
              }}
            >
              <img src={send} />
              <VeiwProfile href={data.link} target="_blank">
                {" "}
                view profile
              </VeiwProfile>
            </div>
          </Profile>
        );
      })}
      <GsMain>
        <Link to="articles">
          <Card bg="Assets/patternpad.svg" color="#ff4e4e">
            <Text>Articles ({data.articles.length})</Text>
          </Card>
        </Link>
        {/* <Link to="co_authors">
        <Card  bg = "Assets/card3.svg" color="#3868f6">
          <Text>Co Authors ({data.co_authors.length})</Text>
        </Card>
      </Link> */}
      </GsMain>
      <div>{/* <Barchart/> */}</div>
    </div>
  );
}

export default GoogleScholar;
