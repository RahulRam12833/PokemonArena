import React, { useState } from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({pokemons}) => {
     console.log("list");

    return (
        <>
        <h1 className="title">Pokemon List</h1>
        <div className="pokemon-list">
            
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} className="pokemonCard"/>
            ))}     
        </div>
       </>
    );
};

export default PokemonList;