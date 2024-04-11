import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './page/HomePage'
import PokemonDetailsPage from './page/PokemonDetailsPage'
import PokemonsByTypePage from './page/PokemonsByTypePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element = {<HomePage />}/>
          <Route path="/details-pokemon/:pokemonID"  element = {<PokemonDetailsPage />}/>
          <Route path="/pokemons-by-type/:type"  element = {<PokemonsByTypePage />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
