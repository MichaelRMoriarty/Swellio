import React, { useState, useEffect } from 'react';
import GlobalStyle from './StyledComponents/GlobalStyle';
import AppDiv from './StyledComponents/AppDiv';
import FormContainer from './StyledComponents/FormContainer';
import Form from './Form.jsx';
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
        <h1>Swellio</h1>
        <h5>Never miss a swell again!</h5>
        <Form />
      </AppDiv>
    </>
  );
}
export default App;