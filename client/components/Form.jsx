import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Multiselect } from 'multiselect-react-dropdown';
import FormContainer from './StyledComponents/FormContainer.js';
import FormWrapper from './StyledComponents/FormWrapper.js';

const Form = ({ setSuccessInfo, setDisplayError }) => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ spots, setSpots ] = useState([]);
  const [ condition, setCondition ] = useState({});


  const conditions = [
    { id: 4, name: 'POOR to FAIR' },
    { id: 5, name: 'FAIR' },
    { id: 6, name: 'FAIR to GOOD' },
    { id: 7, name: 'GOOD' },
    { id: 8, name: 'VERY GOOD' },
    { id: 9, name: 'GOOD to EPIC' },
    { id: 10, name: 'EPIC' }
  ];

  const options = [
    { name: 'Will Rogers State Beach', id: '5ff8a259222b7ff78169c757' },
    { name: 'Santa Monica Beach North', id: '5af21bc9177e44001a8cc60b' },
    { name: 'Santa Monica Pier, North', id: '5b7efe06d7830b001a875b22' },
    { name: 'Santa Monica Pier', id: '5842041f4e65fad6a77088f7' },
    { name: 'Bay St.', id: '5d6562fdca83aa00012b47af' },
    { name: 'Santa Monica Beach South', id: '5af21e4c8a1a07001a4531dc' },
    { name: 'Venice Breakwater', id: '590927576a2e4300134fbed8' },
    {
      name: 'Venice Breakwater Close-up',
      id: '5a26de8ccbecc0001bb480c9'
    },
    { name: 'Venice Beach', id: '5842041f4e65fad6a7708819' },
    { name: 'Venice Pier, Northside', id: '5accf274bd428f001ad70a33' },
    { name: 'Venice Pier, Southside', id: '5accf279bd428f001ad70a34' },
    { name: 'Venice Southside Overview', id: '5acd238f45d052001ad0b2bd' },
    { name: 'Dockweiler State Beach', id: '5842041f4e65fad6a77088ff' },
    { name: 'Shitpipe', id: '5842041f4e65fad6a7708900' },
    { name: 'Hammerland', id: '5842041f4e65fad6a7708902' },
    { name: 'El Porto 43rd St.', id: '5d684b426fcb630001f08a10' },
    { name: 'El Porto Overview', id: '584204214e65fad6a7709d24' },
    { name: 'El Porto 42nd St.', id: '5a25e409aa1aea001b27be39' },
    { name: 'El Porto 41st St.', id: '5d6847bda897100001ab02aa' },
    { name: 'El Porto 39th St.', id: '5842041f4e65fad6a7708906' },
    { name: 'Manhattan Pier Northside', id: '5acd24954031e5001a13854a' },
    { name: 'Manhattan Pier, Southside', id: '5842041f4e65fad6a7708907' },
    { name: 'Hermosa Beach', id: '5842041f4e65fad6a7708904' },
    { name: 'Hermosa Pier Northside', id: '5b17281e4a274e001a11fcc3' },
    { name: 'Hermosa Pier Southside', id: '5b17293b9f631f001a010d54' },
    { name: 'Redondo Breakwater', id: '5842041f4e65fad6a7708921' },
    { name: 'Sapphire St.', id: '584204214e65fad6a7709d0b' },
    { name: 'Torrance Beach', id: '5af211c8bb6fd9001a25054a' },
    { name: "Haggerty's", id: '5842041f4e65fad6a7708920' },
    { name: 'PV Cove', id: '5842041f4e65fad6a770892d' },
    { name: 'Cabrillo Beach', id: '5842041f4e65fad6a7708927' },
    { name: 'Lunada Bay', id: '5842041f4e65fad6a770892c' }
  ];

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const onSelectMulti = (selectedList, selectedItem) => {
    setSpots(selectedList);
  }

  const onSelectSingle = (selectedList, selectedItem) => {
    setCondition(selectedItem);
  }

  const onRemove = (selectedList, selectedItem) => {
    setSpots(selectedList);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      phone: phone,
      spots: spots,
      condition: condition.id
    }

    if (!spots[0] || !condition.id || name === '' || email === '' || phone === '') {
      setDisplayError(true);
      return;
    }

    axios.post('/user', data)
    .then(function (response) {
      setSuccessInfo({
        page: 2,
        info: {
          spots: spots,
          condition: condition.name
        }
      });;
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return(
      <FormContainer>
        <FormWrapper onSubmit={handleSubmit}>
          <label>
            <input type="text" value={name} onChange={handleNameChange} placeholder="name"></input>
          </label>
          <label>
            <input type="text" value={email} onChange={handleEmailChange} placeholder="email"></input>
          </label>
          <label>
            <input type="text" value={phone} onChange={handlePhoneChange} placeholder="phone"></input>
          </label>
          <div className="selector">
            <Multiselect id="multiselect1" onSelect={onSelectMulti} onRemove={onRemove} options={options} hidePlaceholder={true} displayValue="name"/>
          </div>
          <div className="selector">
            <Multiselect id="singleselect1" onSelect={onSelectSingle} options={conditions} singleSelect={true} displayValue="name"/>
          </div>
          <button type="submit" value="Submit">Sign up!</button>
        </FormWrapper>
      </FormContainer>
  );
}
export default Form;