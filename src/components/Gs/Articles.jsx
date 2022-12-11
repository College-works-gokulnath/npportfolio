import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import data from '../../GoogleScholar.json'
import { Input } from '@mui/material'
import {TextField} from '@mui/material'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import {articledata} from '../Gs/Articledata.js'
import Typography from '@mui/material/Typography';

const ArticleMAin = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    font-family: 'inter';
    color: #343434;

`
const ArticleHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`
const ArticleList = styled.div`
    padding:20px;
display: grid;
grid-template-columns: 1fr 1fr ;
gap: 1rem;

`
const ArticleCard  = styled.div`
   display: flex;
   width: auto;
   gap: 1rem;
   flex-direction: column;

   justify-content: center;
   margin: 10px 0;
   padding: 1rem;
   border-radius:20px;

   /* border: 1px solid gray; */
   /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
   box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
   background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);



` 
const Title = styled.div`
  font-weight: 500;

`
const Author = styled.div`
    font-weight: 500;
`
const Publication = styled.div`
    
`
const View = styled.div`
    text-decoration: none;
    color: black;
    font-weight: 800;
    font-family: 'inter';
    border: 1px solid gray;
   display: block;
   margin: auto;
   padding: 1rem;
   border-radius: 20px;
    text-align: left;
    cursor: pointer;

`
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #ffffff',
    boxShadow: 4,
    p: 4,
  };

function Articles() {
    const [data1,setdata1] = useState(data.articles)
    const [open, setOpen] = React.useState(false);
    const [singleartical,setSingleartical] = useState(articledata)

    const handleOpen = (id) => {

 console.log(articledata)
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    // let data1 = data.articles
    let data2 = data.articles

    // useEffect(()=>{
   
    // },[data1])
    // console.log(data1)
const handleChange = (e)=>{

const value  = e.target.value
// console.log(value)
setdata1(pre=>{
    
   return  data2.filter(data=>data.title.toLowerCase().includes(value) && data)})
//  data1 = data1.filter(data=>{ 
//        return  (data.title.includes(value)) && data 
 
//         }
//     )
    // console.log(data1.length)



}
  return (
 <ArticleMAin>
    <ArticleHeader>

    <h1 style={{
        textTransform:'uppercase'
        ,
        width:'100%'
    }}>Articles</h1>
    <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'1rem',
        width:'100%'
    }}>
<SearchIcon/>
    <TextField id="outlined-basic" label="Search with title" variant="outlined"  onChange={handleChange}/>
    </div>
    </ArticleHeader>

    <ArticleList>
        {data1.map(data=>{
           return <ArticleCard>
                    <Title><strong>Title :</strong> {data.title}</Title>
                    <Author><strong>Author :</strong> {data.authors}</Author>
                    <Publication><strong>Publication :</strong> {data.publication}</Publication>
                    <Publication><strong>Year : </strong>{data.year}</Publication>
                    <View onClick={()=>handleOpen(data.citation_id)} >Explore</View>
         
                </ArticleCard>
        })}

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {articledata.citation.authors}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {articledata.citation.description}
          </Typography>
        </Box>
      </Modal>

    </ArticleList>
    {data1.length==0 && <h1>Article not Found !</h1>}
 </ArticleMAin>
  )
}

export default Articles