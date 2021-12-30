import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Main, Summary } from "../views";

const Router = () => (
    // <Routes>
    //     {/* {paths.map((path) => (
    //         <Route {...path} />
    //     ))} */}

    // </Routes>
    <BrowserRouter>
        <Routes>
            <Route path="/:page" element={<Main />} />
            <Route path="/summary" element={<Summary />} />
        </Routes>
    </BrowserRouter>
)
export default Router
