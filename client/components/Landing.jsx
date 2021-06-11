import React, { useState, useEffect } from 'react';
import IconsContainer from './StyledComponents/IconsContainer';
import LandingDiv from './StyledComponents/LandingDiv';
import LandingWrap from './StyledComponents/LandingWrap';
import StepsContainer from './StyledComponents/StepsContainer';

const Landing = ({ setSuccessInfo }) => {
  const clickHandler = () => {
    setSuccessInfo({
      page: 1,
      spots: [],
      condition: ''
    })
  }
  return(
    <LandingWrap>
      <IconsContainer>
        <div>
          <img src="./images/form.png" alt="form"/>
        </div>
        <div>
          <img src="./images/text.png" alt="text"/>
        </div>
        <div>
          <img src="./images/surf.png" alt="surf"/>
        </div>
      </IconsContainer>
      <StepsContainer>
        <LandingDiv>
            <h1>Sign up</h1>
            <ul>
              <li>Provide your contact info</li>
              <li>Select your surf spots</li>
              <li>Select the least-quality conditions to be notified of</li>
            </ul>
        </LandingDiv>
        <LandingDiv>
          <h1>Get notified</h1>
          <ul>
              <li>We'll keep track of the wave conditions at your selected spots </li>
              <li>You will receive a text when the waves meet your conditions</li>
            </ul>
        </LandingDiv>
        <LandingDiv>
          <h1>Go surf!</h1>
          <ul>
              <li>Never miss another swell again!</li>
            </ul>
        </LandingDiv>
      </StepsContainer>
      <img id="nextImg" src="./images/next.png" alt="next" onClick={clickHandler}/>
    </LandingWrap>
  );
}
export default Landing;