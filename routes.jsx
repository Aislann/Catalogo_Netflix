import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Tela_Inicial from "./src/Tela_Inicial";
import App from "./src/App";

export default function routes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path = '/' Component={Tela_Inicial} />
                <Route exect path = '/App' Component={App}/>
            </Routes>
        </BrowserRouter>
    )
}