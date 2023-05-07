import React from "react"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import '../../App.css'


export const SpecificPokemonDetailCom=()=>{
  const dataToShow=useSelector((state)=> state.pokemon.specificPokemonDetail)
  console.log(dataToShow)
return Object.keys(dataToShow).length<1 ? <h1>loading...</h1> : (
  <div className="row">
    <div className="col-md-6 poke-img">
    <Link to="/home" className="text-center"><button type="button" className="backBtn">Back to list</button></Link> <h2>{dataToShow.name}</h2> 
    </div>
    <div className="col-md-6 card poke-card">
    <div>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dataToShow.id}.png`} alt="img" style={{ width: '25rem' }} />
    </div>
    <div>
      <div className="height">
        <h3>HEIGHT</h3>
        <p>{dataToShow.height}</p>
      </div>
      <div className="weight">
        <h3>WEIGHT</h3>
        <p>{dataToShow.weight}</p>
      </div>
      <div className="experience">
        <h3>XP</h3>
        <p>{dataToShow.base_experience}</p>
      </div>
      <div className="abilities">
        <h3>ABILITIES</h3>
        {dataToShow.abilities ? dataToShow.abilities.map(ab => <span className="ability" key={ab.ability.name}>{ab.ability.name}</span>) : 'undefined' }
      </div>
      <div className="types">
        <h3>Type</h3>
        {dataToShow.types ? dataToShow.types.map(type => <span className="type" key={type.type.name}>{type.type.name}</span>) : 'undefined' }
      </div>
    </div>
    </div>
    <div className="moves mt-3 p-2 card">
      <h3>MOVES</h3>
      <div className="list-moves">
        {dataToShow.moves ? dataToShow.moves.map(move => <span className="move" key={move.move.name}>{move.move.name}</span>) : 'undefined' }
      </div>
    </div>
  
  </div>
);
}