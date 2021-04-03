import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  label {
    width: 96%;
    height: 60px;
    // padding: 10px;
    // padding-right: 18px;
    margin: 10px;
    :focus {
      outline: none;
    };
  }

  input {
    width: 100%;
    height: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    font-size: 16px;
    text-align: center;
    :focus {
      outline: none;
    };
  }
  #multiselect1 {
    // width:100%;
    height: 80px;
  }

  #multiselect1 .search-wrapper {
    // width:100%;
    height: 100%;
  }

  // #multiselect1 .optionListContainer {
  //   width:100%;
  // }
  .selector {
    padding-top: 15px;
    padding-bottom: 15px;
    cursor: pointer;
  }

  button {
    color: white;
    font-size: 16px;
    height: 50px;
    background: linear-gradient(to left, #32b4dd, #16d0ff, #32b4dd);
    border-radius: 10px;
    border: none;
    &:hover {
      background: #32b4dd;
      cursor: pointer;
    }


  }
`;

export default FormWrapper;
