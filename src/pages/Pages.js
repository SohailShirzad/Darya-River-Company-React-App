import React from "react";
import About from "../components/OurTeam";
import Contact from "../components/Contact";
import Services from "../components/MainSectionServices"
import Success from "../components/Success";
import Home from './Home'
import { Route, Routes } from "react-router-dom";

export default function Pages(){
    return(
        <Routes>
            <Route path="/" element={<Home/> }/>
            <Route path="/" element={<About/>} />
            <Route path="/" element={<Contact/>} />
            <Route path="/" element={<Services/>} />
            <Route path="/success" element={<Success/>} />
        </Routes>
    )
}