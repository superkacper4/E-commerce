import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import { Main } from "../views";
import paths from './paths'

const Router = () => (
    // <Routes>
    //     {/* {paths.map((path) => (
    //         <Route {...path} />
    //     ))} */}

    // </Routes>
    <BrowserRouter>
        <Routes>
            <Route path="/:page" element={<Main />} />
            {/* <Route path=":productId" element={<Product />} /> */}
        </Routes>
    </BrowserRouter>
)
export default Router
