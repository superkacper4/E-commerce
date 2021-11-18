import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from '../Router';
import { GlobalStyle, theme, ThemeProviderComponent } from '../style';
import { Header } from '../components'

function App() {
  return (
    <ThemeProviderComponent>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
        <Header />
      </BrowserRouter>
    </ThemeProviderComponent>
  );
}

export default App;
