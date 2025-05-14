import React from 'react';
import './App.css';
import CombatArena from './pages/CombatArena';
import PokemonCard from './components/PokemonCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PokemonList from './components/PokemonList';
import SearchBox from './components/SearchBox';
function App() {

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        const data= response.data;

        const pokemonData = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            const data= pokemonResponse.data;
            return {
              id: data.id,
              name: data.name,
              sprites: data.sprites.front_default,
              stats: data.stats.filter((stat) => (stat.stat.name !== 'special-attack' && stat.stat.name !== 'special-defense')).map((stat) => ({
                name: stat.stat.name,
                value: stat.base_stat,
              })),
            };
          })
        );
        setPokemons(pokemonData);


      } catch (error) {
        setError(error.message);
      }
      finally {
        setLoading(false);
      }
    };
    fetchPokemonList();
  }
  , []);
  console.log(pokemons);
  

  if(loading){
    return <div className="loading">Loading...</div>
  }

  if (error){
    return <div className="error">Error: {error}</div>
  }
  if (pokemons.length === 0){
    return <div className="no-pokemons">No Pokemons found</div>
  }

 
  return (
    <div className="App">
      
      <PokemonList pokemons={pokemons}/>
      
    </div>
  );
}

export default App;