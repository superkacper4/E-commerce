import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import Router from '../Router';
import { GlobalStyle, theme, ThemeProviderComponent } from '../style';
import { Header } from '../components'
import { CartProvider } from '../Context/context';

function App() {
  return (
    <ThemeProviderComponent>
      <CartProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bejamas_</title>
          <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@100;400&display=swap" rel="stylesheet" />
        </Helmet>
        <GlobalStyle />
        <Header />
        <Router />
      </CartProvider>
    </ThemeProviderComponent>
  );
}

export default App;
