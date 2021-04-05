import React, { useState, useEffect } from 'react';
import GlobalStyle from './StyledComponents/GlobalStyle';
import AppDiv from './StyledComponents/AppDiv';
import LegendContainer from './StyledComponents/LegendContainer';
import FormContainer from './StyledComponents/FormContainer';
import Form from './Form.jsx';
import Sucess from './Success.jsx';
import Landing from './Landing.jsx';


const App = () => {
  const [ successInfo, setSuccessInfo ] = useState({
    page: 0,
    spots: [],
    condition: ''
  });
  return(
    <>
     <GlobalStyle />
      <AppDiv>
        <LegendContainer>
          <h1>Swellio</h1>
          <img src="./images/waveLogo.png" alt="logo"/>
        </LegendContainer>
        {successInfo.page === 0 && <Landing setSuccessInfo={setSuccessInfo} />}
        {successInfo.page === 1 && <Form setSuccessInfo={setSuccessInfo} />}
        {successInfo.page === 2 && <Sucess info={successInfo.info} />}
      </AppDiv>
    </>
  );
}
export default App;