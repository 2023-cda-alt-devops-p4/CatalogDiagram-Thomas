import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import routes from "./Routes";

import * as themes from "./themes";

const App = () => {

  return (
    <ThemeProvider theme={themes.Default}>
      <AppContainer>
        <Routes>
          {routes.map((route, routeIndex) => ((
            <Route 
              key={`route-${routeIndex}`} 
              path={route?.path} 
              element={route?.element}
            >
              {route?.childrens.map((childrenRoute, childrenRouteIndex) => ((
                  <Route 
                    key={`route-${routeIndex}-${childrenRouteIndex}`} 
                    path={childrenRoute?.path} 
                    element={childrenRoute?.element} 
                  />
              )))}
            </Route>
          )))}
        </Routes>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App;

const AppContainer = styled.div`
  height: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colorPrimary()};
`;