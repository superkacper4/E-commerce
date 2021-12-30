import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from '../components'
import { Main, Summary, Payment } from "../views";

const Router = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/:page" element={<Main />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/payment" element={<Payment />} />
        </Routes>
    </BrowserRouter>
)
export default Router
