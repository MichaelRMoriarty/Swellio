import React, { useState, useEffect } from 'react';
import GlobalStyle from './StyledComponents/GlobalStyle';
import AppDiv from './StyledComponents/AppDiv';
import LegendContainer from './StyledComponents/LegendContainer';
import FormContainer from './StyledComponents/FormContainer';
import Form from './Form.jsx';


const App = () => {
  return(
    <>
     <GlobalStyle />
      <AppDiv>
        <LegendContainer>
          <h1>Swellio</h1>
          <img src="./images/waveLogo.png" alt="logo"/>
        </LegendContainer>
        <Form />
      </AppDiv>
    </>
  );
}
export default App;