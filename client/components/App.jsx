import React, { useState, useEffect } from 'react';
import GlobalStyle from './StyledComponents/GlobalStyle';
import AppDiv from './StyledComponents/AppDiv';
import LegendContainer from './StyledComponents/LegendContainer';
import FormContainer from './StyledComponents/FormContainer';
import PleaseFillForm from './StyledComponents/PleaseFillForm.js';
import Form from './Form.jsx';
import Success from './Success.jsx';
import Landing from './Landing.jsx';


const App = () => {
  const [ successInfo, setSuccessInfo ] = useState({
    page: 0,
    spots: [],
    condition: ''
  });

  const [displayError, setDisplayError] = useState(false);

  return(
    <>
     <GlobalStyle />
      <AppDiv>
        <LegendContainer>
          <h1>Swellio</h1>
          <img src="./images/waveLogo.png" alt="logo"/>
        </LegendContainer>
        {displayError && successInfo.page === 1 && <PleaseFillForm>Please fill out all the info!</PleaseFillForm>}
        {successInfo.page === 0 && <Landing setSuccessInfo={setSuccessInfo} />}
        {successInfo.page === 1 && <Form setSuccessInfo={setSuccessInfo} setDisplayError={setDisplayError} />}
        {successInfo.page === 2 && <Success info={successInfo.info} />}
      </AppDiv>
    </>
  );
}
export default App;