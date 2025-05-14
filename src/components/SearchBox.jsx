import React from "react";

export default function SearchBox({ searchTerm, setSearchTerm }) {
    return(
        <div>
            <input
                type="text"
                placeholder="Search Pokémon"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: '8px', width: '100%', marginBottom: '16px' }}
            />
            <button onClick={() => console.log('Searching for:', searchTerm)} style={{ padding: '8px', width: '100%' }}>
                Search Pokemon</button>
        </div>
    )
}