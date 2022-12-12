

import React from "react";
import { UGC } from "../../data";
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

function Ugcjournaal() {
  return (
    <SciContainer>
      {UGC.map((data) => {
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

export default Ugcjournaal;
