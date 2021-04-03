import React, { useState, useEffect } from 'react';
import GlobalStyle from './StyledComponents/GlobalStyle';
import AppDiv from './StyledComponents/AppDiv';


const App = () => {
  return(
    <>
     <GlobalStyle />
      <AppDiv>
        Hey, how y'all doing
      </AppDiv>
    </>
  );
}
export default App;