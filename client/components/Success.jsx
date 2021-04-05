import React, { useState, useEffect } from 'react';
import FormContainer from './StyledComponents/FormContainer';
import SuccessDiv from './StyledComponents/SuccessDiv';

const Success = ({ info }) => {
  const { spots, condition } = info;

  let body = `We will send you a text when the waves are at least ${condition} at ${spots[0].name}`;

  if (spots.length > 1) {
    for (let i = 1; i < spots.length; i++) {
      if (i === spots.length - 1) {
        body += `, and ${spots[i].name}`
      } else {
        body += `, ${spots[i].name}`
      }
    }
  }

  return(
    <FormContainer>
      <SuccessDiv>
        <h1>You're all set!</h1>
        <p>{body}</p>
      </SuccessDiv>
    </FormContainer>
  );
}
export default Success;