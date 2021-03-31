import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
  border-radius: 4px;

  label {
    width: 100%;
    height: 60px;
    // padding: 10px;
    // padding-right: 18px;
  }
  input {
    width: 100%;
    height: 100%;
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
    padding-top: 10px;
    padding-bottom: 10px;
  }

  button {
    height: 20px;
  }
`;

export default FormWrapper;
