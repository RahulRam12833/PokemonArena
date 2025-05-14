import React from 'react';

const CombatArena = () => {
    return (
        <div>
            <h1 className="title">Welcome to Pokemon Arena</h1>
            <form className='form'>
          <div className="container">
              <div className='search-container'>
                <input type="text" placeholder="Enter first pokemon" className="search-input" />
                <h1>Vs.</h1>
                <input type="text" placeholder="Enter second pokemon" className="search-input" />
              </div>
              <div className='button-container'>
                <button className="search-button">Search</button>
                  <br/>
                <button className="combat-button">Combat</button>
              </div>
          </div>
          </form>
        </div>
    );
};

export default CombatArena;