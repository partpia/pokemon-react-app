import React from 'react';
import './App.css';
import RandomlySelectedPokemons from './components/RandomlySelectedPokemons';
import TopAppBar from './components/TopAppBar';

export default function App() {

  return (
    <div className="App">
      <TopAppBar />
      <RandomlySelectedPokemons />
    </div>
  );
}
