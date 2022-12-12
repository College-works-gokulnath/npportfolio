


import React from "react";
import { ScopuJournalpapers,ScopusConferencepapers,ScopusBookchapters } from "../../data";
import styled from "styled-components";
const SciCard = styled.div`
    
`
const SciTitle = styled.div`

`
const Scihost = styled.div`
    font-weight: 800;
`
const SciContainer  = styled.div`

   display: flex;
   flex-direction: column;
   gap: 20px;
  padding: 20px;
  font-family: 'inter';



`

function Scops() {
  return (
    <div>

   
    <SciContainer>
        <h1>Scopus Listed Research Publications – Journal papers ({ScopuJournalpapers.length})</h1>
      {ScopuJournalpapers.map((data) => {
        return (
          <SciCard>
            <SciTitle>{data.name}</SciTitle>
            <Scihost>{data?.host}</Scihost>
            <hr/>
          </SciCard>
        );
      })}
    </SciContainer>

    <SciContainer>
        <h1>Scopus Listed Research Publications – Conference papers ({ScopusConferencepapers.length})</h1>
      {ScopusConferencepapers.map((data) => {
        return (
          <SciCard>
            <SciTitle>{data.name}</SciTitle>
            <Scihost>{data?.host}</Scihost>
            <hr/>
          </SciCard>
        );
      })}
    </SciContainer>

    <SciContainer>
        <h1>Scopus Listed Research Publications – Book chapters ({ScopusBookchapters.length})</h1>
      {ScopusBookchapters.map((data) => {
        return (
          <SciCard>
            <SciTitle> Name : {data.name}</SciTitle>
            <div style={{
                display:'flex'
            }} >
                <Scihost>Book Name : </Scihost>
                    <div> {data.BookName}</div>
            </div>
    
            <Scihost>Nameof the Conference : {data.NameoftheConference}</Scihost>
            <Scihost>Name of the Publisher : {data.NameofthePublisher}</Scihost>
            <Scihost> Month and Year : {data.MonthYear}</Scihost>
            <Scihost> ISBN No : {data.ISBNNo}</Scihost>
            <hr/>
          </SciCard>
        );
      })}
    </SciContainer>


    </div>
  );
}

export default Scops;
