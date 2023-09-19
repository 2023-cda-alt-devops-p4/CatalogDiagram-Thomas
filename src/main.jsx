import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from 'styled-components';
import * as themes from './themes';

const isProd = process.env.NODE_ENV === 'production';
if ( isProd )
    disableReactDevTools();
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themes.Default}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);