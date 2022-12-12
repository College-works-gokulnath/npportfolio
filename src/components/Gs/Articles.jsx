import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../../GoogleScholar.json";
import { Input } from "@mui/material";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SearchIcon from "@mui/icons-material/Search";
import { articledata } from "../Gs/Articledata.js";
import Typography from "@mui/material/Typography";


const ArticleMAin = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-family: "inter";
  color: #343434;
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
  width: auto;
  gap: 1rem;
  flex-direction: column;

  justify-content: center;
  margin: 10px 0;
  padding: 1rem;
  border-radius: 20px;

  /* border: 1px solid gray; */
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
`;
const Title = styled.div`
  font-weight: 500;
`;
const Author = styled.div`
  font-weight: 500;
`;
const Publication = styled.div``;
const View = styled.div`
  text-decoration: none;
  color: black;
  font-weight: 800;
  font-family: "inter";
background-color: #4da3ff;
  display: block;
  margin: auto;
  padding: 1rem;
  border-radius: 20px;
  text-align: left;
  cursor: pointer;
  transition: .3s ease;
  &:hover{
background-color: #007bff;
color: white;
border: none;

  }
`;
const LinkHref = styled.a`
    text-decoration: none;
 color: #000000;


    &:hover{

        color:'red';


    }
`
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height:'70vh',
  bgcolor: "background.paper",
  border: "2px solid #ffffff",
  boxShadow: 4,
  p: 4,
  borderRadius: "20px",
  overflow:'scroll'
};

function Articles() {
  const [data1, setdata1] = useState(data.articles);
  const [open, setOpen] = React.useState(false);
  const [singleartical, setSingleartical] = useState(articledata);

  const handleOpen = async(id) => {


// Show result as JSON

    // console.log(articledata);
    const url = `https://serpapi.com/search.json?engine=google_scholar_author&view_op=view_citation&citation_id=${id}&api_key=4c2783de8b56434ddebad5e71ac1eb6b630ee6db93ba39bd3e4d688e21a6e55f`
const url2 = "https://serpapi.com/search.json?engine=google_scholar_author&view_op=view_citation&citation_id=LSsXyncAAAAJ:2osOgNQ5qMEC&api_key=4c2783de8b56434ddebad5e71ac1eb6b630ee6db93ba39bd3e4d688e21a6e55f"
//  const response  = await fetch(url2,{  
//         method: 'GET',  
//         withCredentials: true,  
//         crossorigin: true,  
//         mode: 'no-cors',    
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             }, 
//       }).then(data=>data.json())
//       .then(data=>console.log(data))



      fetch(url2,{
        method:'GET',

        headers:{
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Origin": "http://localhost:3000",

        }
        ,

      })
      .then(result => result.text())
      .then(data => console.log("hihi",data))
    // .then(data=>data.json())
    // .then(data=>console.log(data))
    
    // console.log(response)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // let data1 = data.articles
  let data2 = data.articles;

  // useEffect(()=>{

  // },[data1])
  // console.log(data1)
  const handleChange = (e) => {
    const value = e.target.value;
    // console.log(value)
    setdata1((pre) => {
      return data2.filter(
        (data) => data.title.toLowerCase().includes(value) && data
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
          Articles
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
            label="Search with title"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
      </ArticleHeader>

      <ArticleList>
        {data1.map((data) => {
          return (
            <ArticleCard>
              <Title>
                <strong>Title :</strong> {data.title}
              </Title>
              <Author>
                <strong>Author :</strong> {data.authors}
              </Author>
              <Publication>
                <strong>Publication :</strong> {data.publication}
              </Publication>
              <Publication>
                <strong>Year : </strong>
                {data.year}
              </Publication>

              <View><LinkHref href={data.link} target='_blank'>Explore</LinkHref> </View>
          
            </ArticleCard>
          );
        })}

        {/* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Title>
              <strong>Title</strong>
            </Title>

            <Typography id="modal-modal-title" variant="h6" component="h2">
              {articledata.citation.title}
            </Typography>
            <Title style={{ margin: "20px 0" }}>
              <strong>Description</strong>{" "}
            </Title>
            <Typography id="modal-modal-description" sx={{ mt: "10px" }}>
              {articledata.citation.description}
            </Typography>
            <Title style={{ margin: "20px 0" }}>
              <strong>Authors</strong>{" "}
            </Title>
            <Typography id="modal-modal-description" sx={{ mt: "10px" }}>
              {articledata.citation.authors}
            </Typography>

            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div>
                <Title style={{ margin: "20px 0" }}>
                  <strong>Publication date</strong>{" "}
                </Title>
                <Typography id="modal-modal-description" sx={{ mt: "10px" }}>
                  {articledata.citation.publication_date}
                </Typography>
              </div>
              <div>
                <Title style={{ margin: "20px 0" }}>
                  <strong>journal </strong>{" "}
                </Title>
                <Typography id="modal-modal-description" sx={{ mt: "10px" }}>
                  {articledata.citation.journal}
                </Typography>
              </div>

              <div>
                <Title style={{ margin: "20px 0" }}>
                  <strong>volume</strong>{" "}
                </Title>
                <Typography id="modal-modal-description" sx={{ mt: "10px" }}>
                  {articledata.citation.volume}
                </Typography>
              </div>
              <div>
                <Title style={{ margin: "20px 0" }}>
                  <strong>issue</strong>{" "}
                </Title>
                <Typography id="modal-modal-description" sx={{ mt: "10px" }}>
                  {articledata.citation.issue}
                </Typography>
              </div>
              <div>
                <Title style={{ margin: "20px 0" }}>
                  <strong>publisher</strong>{" "}
                </Title>
                <Typography id="modal-modal-description" sx={{ mt: "10px" }}>
                  {articledata.citation.publisher}
                </Typography>
              </div>
            </div>
          </Box>
        </Modal> */}
      </ArticleList>
      {data1.length == 0 && <h1>Article not Found !</h1>}
    </ArticleMAin>
  );
}

export default Articles;
