import React, { Component } from 'react';
import { useState } from 'react';
import MainPage from '../mainPage';
import { useLocation,Link } from "react-router-dom"


function Sprint(props) {
    
    const location = useLocation();
    const pokemon1 = location.state?.pokemon1;
    const pokemon2 = location.state?.pokemon2;
    console.log(pokemon2);
    console.log(pokemon1);
    
    return ( 
        <div className="versusArena">
         
            <div className="player1">
            <button><Link to="/">Back</Link></button>
               {pokemon1.speed>pokemon2.speed ? <img className="alignElemsS" src={pokemon1.image} width="500" height="800" alt={pokemon1.name} /> : <img className="alignElemsS" width="400" height="800" src={pokemon2.image} alt={pokemon2.name} />}
            </div>

        </div>
      
     );
}

export default Sprint;