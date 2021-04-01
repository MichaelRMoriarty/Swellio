import React, { useState, useEffect } from 'react';
import GlobalStyle from './StyledComponents/GlobalStyle';
import AppDiv from './StyledComponents/AppDiv';
import LegendContainer from './StyledComponents/LegendContainer';
import FormContainer from './StyledComponents/FormContainer';
import Form from './Form.jsx';
// import logo from '../images/waveLogo.png';
// import waveLogo = require('../images/waveLogo.png';

const App = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('empty');
  const [ spots, setSpots ] = useState([]);
  const [ conditionsRequired, setConditionsRequired ] = useState({});

  const handleSubmit = (e) => {

  }
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