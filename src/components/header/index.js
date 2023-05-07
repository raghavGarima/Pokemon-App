
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {allPokemonData} from '../../reducer/pokemonDetail'

export function Header() {
  const dispatch = useDispatch()
  const [searchedPokemon,setSearchedPokemon]=useState("")

  useEffect(()=>{
   getData()
  },[])

const getData= async ()=>{
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
  const data = await res.json();
  dispatch(allPokemonData(data.results));
}

const dataSearched=(event)=>{
  event.preventDefault()
  console.log(searchedPokemon)
}

  return (
    <div>
    <h3>You can search here </h3>
    <form onSubmit={(event)=>dataSearched(event)} className="headerField">
    <input type="text" value={searchedPokemon} onChange={(event)=>{setSearchedPokemon(event.target.value)}} />
    <button type="submit" className='d' >search</button>
    </form>
    
    </div>
  )
}
