import React from "react";
import { Routes, Route } from "react-router-dom";
import paths from './paths'

const Router = () => (
    <Routes>
        {paths.map((path) => (
            <Route {...path} />
        ))}
    </Routes>
)
export default Router
