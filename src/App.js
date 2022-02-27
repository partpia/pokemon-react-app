import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import FetchPokemonData from './components/FetchPokemonData';

export default function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<FetchPokemonData />} />
        </Routes>
    </div>
  );
}
