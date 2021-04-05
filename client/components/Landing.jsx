import React, { useState, useEffect } from 'react';
// import GlobalStyle from './StyledComponents/GlobalStyle';
// import AppDiv from './StyledComponents/AppDiv';
import FormContainer from './StyledComponents/FormContainer';
import SuccessDiv from './StyledComponents/SuccessDiv';

const Landing = ({ setSuccessInfo }) => {
  return(
    <FormContainer>
      <SuccessDiv>
        <h1>1</h1>
      </SuccessDiv>
      <SuccessDiv>
        <h1>2</h1>
      </SuccessDiv>
      <SuccessDiv>
        <h1>3</h1>
      </SuccessDiv>
    </FormContainer>
  );
}
export default Landing;