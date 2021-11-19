import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from '../Router';
import { GlobalStyle, theme, ThemeProviderComponent } from '../style';
import { Header } from '../components'
import { CartProvider } from '../Context/context';

function App() {
  return (
    <ThemeProviderComponent>
      <CartProvider>
        <GlobalStyle />
        <Header />
        <Router />
      </CartProvider>
    </ThemeProviderComponent>
  );
}

export default App;
