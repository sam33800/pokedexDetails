import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './page/HomePage'
import PokemonDetailsPage from './page/PokemonDetailsPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element = {<HomePage />}/>
          <Route path="/details-pokemon/:pokemonID"  element = {<PokemonDetailsPage />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
