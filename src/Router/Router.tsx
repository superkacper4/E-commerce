import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header, Cart } from '../components'
import { Main, Summary, Payment, Product } from "../views";

const Router = () => (
    <BrowserRouter>
        <Header />
        <Cart />
        <Routes>
            <Route path="/:page" element={<Main />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/payment" element={<Payment />} />
            <Route path=":page/product/:id" element={<Product />} />
        </Routes>
    </BrowserRouter>
)
export default Router
