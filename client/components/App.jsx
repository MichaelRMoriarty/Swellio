import React, { useState, useEffect } from 'react';
const App = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('empty');
  const [ spots, setSpots ] = useState([]);
  const [ conditionsRequired, setConditionsRequired ] = useState({});

  const handleSubmit = (e) => {

  }
  return(
      <div>
        <h1>Swellio</h1>
        <h5>Never miss a swell again!</h5>
        <form>
          <label>Name:
            <input type="text"></input>
          </label>
          <label>email:
            <input type="text"></input>
          </label>
          <label>phone:
            <input type="text"></input>
          </label>
        </form>
      </div>
  );
}
export default App;