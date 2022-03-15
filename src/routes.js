
  
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import ListPokemonsPage from './pages/ListPokemonsPage'
import DetailsPages from './pages/DetailsPages'
import PokedexPage from './pages/PokedexPage'


const RoutesApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Home />} />
                <Route path="/list_pokemons" element ={<ListPokemonsPage />} />
                <Route path="/details_pages/:name" element ={<DetailsPages />} />
                <Route path="/pokedex_page" element ={<PokedexPage />} />
            </Routes>
        </BrowserRouter> 
    );
    
}

export default RoutesApp;