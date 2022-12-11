import React from "react";
import data from "../../GoogleScholar.json";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Barchart from "./Barchart";

const GsMain = styled.div`
  padding: 20px;
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  /* background-color: black; */
  width: 100%;
  height: 100vh;
`;
const Card = styled.div`
  background:${props => props.bg ? `url(${props.bg})` : 'red'} ;
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
    background-color: ${props =>props.color ? props.color : ''};
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
function GoogleScholar() {
  console.log(data);

  return (
    <div>


    <GsMain>
      <Link to="articles">
        <Card bg = "Assets/patternpad.svg" color="#ff4e4e">
          <Text>Articles ({data.articles.length})</Text>
        </Card>
      </Link>
      <Link to="co_authors">
        <Card  bg = "Assets/card3.svg" color="#3868f6">
          <Text>Co Authors ({data.co_authors.length})</Text>
        </Card>
      </Link>

    </GsMain>
    <div>
      {/* <Barchart/> */}
    </div>
    </div>
  );
}

export default GoogleScholar;
