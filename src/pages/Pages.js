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
            <Route index element={<Home/> }/>
            <Route path="/success" element={<Success/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/services" element={<Services/>} />
        </Routes>
    )
}