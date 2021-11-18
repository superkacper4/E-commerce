import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from '../Router';
import { GlobalStyle, theme, ThemeProviderComponent } from '../style';

function App() {
  return (
    <ThemeProviderComponent>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
        Bejamas
      </BrowserRouter>
    </ThemeProviderComponent>
  );
}

export default App;
