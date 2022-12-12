import React from "react";
import { SCI } from "../../data";
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

function Scijournala() {
  return (
    <SciContainer>
      {SCI.map((data) => {
        return (
          <SciCard>
            <SciTitle>{data.name}</SciTitle>
            <Scihost>{data?.host}</Scihost>
            <hr/>
          </SciCard>
        );
      })}
    </SciContainer>
  );
}

export default Scijournala;
