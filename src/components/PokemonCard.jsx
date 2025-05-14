import React from 'react';

const PokemonCard = ({pokemon}) => {
    const { name, sprites, stats } = pokemon;
    return (
        <div className="pokecard-container">
            <h1>{name}</h1>
            <img src={sprites} alt={name} />
            <div className='stats'>
                {stats.map((stat)=>(
                    <div key={stat.name} className="stat">
                        <p>{stat.name}</p>
                        <p>{stat.value}</p>
                    </div>
                ))}
        </div>
        </div>
    );
};

export default PokemonCard;