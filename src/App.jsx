import React from "react";
import styled from "styled-components";

const App = () => {

  return (
    <AppContainer>

    </AppContainer>
  )
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colorPrimary()};
`;