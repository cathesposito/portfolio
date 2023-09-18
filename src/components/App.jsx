import React from "react";

import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from './Home';
import ContactMe from "./ContactMe";


export default function App() {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contactme" element={<ContactMe />} />
                </Routes>
            </HashRouter>
        </div>
    );
}