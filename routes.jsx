import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Tela_Inicial from "./src/Tela_Inicial";
import App from "./src/App";
import Filmes_Page from "./src/components/Filmes_Page";
import Series_Page from "./src/components/Series_Page";
import Mais_Informacoes from "./src/components/Mais_Informacoes";
import Video from "./src/components/Video";

export default function routes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path = '/' Component={Tela_Inicial} />
                <Route exect path = '/App' Component={App}/>
                <Route exect path = '/Filmes_Page' Component={Filmes_Page}/>
                <Route exect path = '/Series_Page' Component={Series_Page}/>
                <Route exect path = '/Mais_Informacoes' Component={Mais_Informacoes}/>
                <Route exect path = '/movie/:id' Component={Video}/>
            </Routes>
        </BrowserRouter>
    )
}