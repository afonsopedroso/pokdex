import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Axios from "axios";
import {BrowserRouter, Route, Switch,Link,Redirect,useLocation} from 'react-router-dom';
import Sprint from './component/sprint';

function MainPage(props) {
  const [pokemonName, setPokemonName] = useState("");
  const[pokemonName2, setPokemonName2] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const[pokemon2,setPokemon2] = useState([])
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemonChosen2, setPokemonChosen2] = useState(false);
  const[gosprint,setGoSprint] = useState(false);


  function onGoSprint(){
      setGoSprint(true);
  }

  function searchPokemon2(){
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName2}`).then(
      (res) => {
        setPokemon2({
          name: pokemonName2,
          number: res.data.id,
          species: res.data.species.name,
          image: res.data.sprites.front_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          speed: res.data.stats[5].base_stat,
          type: res.data.types[0].type.name,
          });
          setPokemonChosen2(true);
      }
      );
  }
  function searchPokemon1(){
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (res) => {
        setPokemon({
          name: pokemonName,
          number: res.data.id,
          species: res.data.species.name,
          image: res.data.sprites.front_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          speed: res.data.stats[5].base_stat,
          type: res.data.types[0].type.name,
          });
          setPokemonChosen(true);
      }
      )

    
    };
    
    function searchPokemon(){
      searchPokemon2();
      searchPokemon1();
      
    }
    
  
  return (    
    
    
    <div className="App">
      <div className="TitleSection">
      
      <button onClick={onGoSprint}>go Sprint{gosprint ? 
            <Redirect to= {{
                pathname:"/sprint",
                state:{
                  pokemon2:pokemon2,
                  pokemon1:pokemon,
                  

                }
            }}/> : ""}</button>
        <h1>Sprint Battle</h1>
        <div className="displayInputs">
        <input
          type="text"
          onChange={(event) => {
          setPokemonName(event.target.value) ;
          }}
          value={pokemonName.toLowerCase()
          }
          placeholder="p1"
        />
        <span>&nbsp;&nbsp;&nbsp;</span>
        <input
          type="text"
          onChange={(event) => {
          setPokemonName2(event.target.value) ;
          }}
          value={pokemonName2.toLowerCase()}
        placeholder="p2"/>
        </div>
        {pokemonName  && pokemonName2 &&<button onClick={searchPokemon}>Search Pokémon</button>}
      </div>
      <div className="DisplaySection">
      {!pokemonChosen && !pokemonChosen2 ? (
        <h1 className="Please">Please choose a Pokémon</h1>
      ) : (<><h1 className="alignElems">{pokemon.name}
      </h1>
      <div className="displayPokemons">
      <div className="pokemonColumns">
      <img className="alignElems" src={pokemon.image} alt={pokemon.name} />
      <h3 className="alignElems">Number: #{pokemon.number}</h3>
      <h3 className="alignElems">Species: {pokemon.species}</h3>
      <h3 className="alignElems">Type: {pokemon.type}</h3>
      <h3 className="alignElems">Attack: {pokemon.attack}</h3>
      <h3 className="alignElems">Defense: {pokemon.defense}</h3>
      <h3 className="alignElems">Speed: {pokemon.speed}</h3>
      </div>
      
      <div className="pokemonColumns">
      <img className="alignElems" src={pokemon2.image} alt={pokemon.name} />
      <h3 className="alignElems">Number: #{pokemon2.number}</h3>
      <h3 className="alignElems">Species: {pokemon2.species}</h3>
      <h3 className="alignElems">Type: {pokemon2.type}</h3>
      <h3 className="alignElems">Attack: {pokemon2.attack}</h3>
      <h3 className="alignElems">Defense: {pokemon2.defense}</h3>
      <h3 className="alignElems">Speed: {pokemon2.speed}</h3>      
      </div>
      </div>
      <p><a href="https://en.wikipedia.org/wiki/Blue">VS</a></p>

      </>
      )}
      </div>
    </div>
  
  );
}

export default MainPage;
