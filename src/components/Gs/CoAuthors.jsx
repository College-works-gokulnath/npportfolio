import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../../GoogleScholar.json";
import { Input } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { height } from "@mui/system";

const ArticleMAin = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-family: "inter";
`;
const ArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
const ArticleList = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
const ArticleCard = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;

  flex-direction: column;

  justify-content: center;
  margin: 10px 0;
  padding: 1rem;
  border-radius: 20px;
  /* border: 1px solid gray; */
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;

  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
`;
const Title = styled.div`
  font-weight: 800;
  font-size: 30px;
`;
const Author = styled.div`
  font-weight: 500;
  font-size: 15px;
`;
const Publication = styled.div``;
const View = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 800;
  font-family: "inter";

  display: block;
  margin: auto;
  /* padding: 1rem; */
  border-radius: 20px;
  text-align: left;
`;
function CoAuthors() {
  const [data1, setdata1] = useState(data.co_authors);
  // let data1 = data.articles
  let data2 = data.co_authors;

  // useEffect(()=>{

  // },[data1])
  // console.log(data1)
  const handleChange = (e) => {
    const value = e.target.value;
    // console.log(value)
    setdata1((pre) => {
      return data2.filter(
        (data) => data.name.toLowerCase().includes(value) && data
      );
    });
    //  data1 = data1.filter(data=>{
    //        return  (data.title.includes(value)) && data

    //         }
    //     )
    // console.log(data1.length)
  };
  return (
    <ArticleMAin>
      <ArticleHeader>
        <h1
          style={{
            textTransform: "uppercase",
            width: "100%",
          }}
        >
          co authors
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            width: "100%",
          }}
        >
          <SearchIcon />
          <TextField
            id="outlined-basic"
            label="Search with name"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
      </ArticleHeader>

      <ArticleList>
        {data1.map((data) => {
          return (
            <ArticleCard>
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
                src={data.thumbnail}
              />
              <Title>
                <strong>Name :</strong> {data.name}
              </Title>
              <Author>
                <strong>Affiliations :</strong> {data.affiliations}
              </Author>
              <Publication>
                <strong>email :</strong> {data.email}
              </Publication>
              <View href={data.link} target="_blank">
                <Button sx={{ background: "#ff4242" }} variant="contained">
                  View profile
                </Button>
              </View>
            </ArticleCard>
          );
        })}
      </ArticleList>
      {data1.length == 0 && <h1>Author not Found !</h1>}
    </ArticleMAin>
  );
}

export default CoAuthors;
