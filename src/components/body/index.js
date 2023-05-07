
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { decrement, increment,incrementByAmount } from '../../reducer/reducer'
import {specificPokemonData} from '../../reducer/pokemonDetail'
import '../../App.css'

export const BodyComponent=()=>{
  const dataToShow=useSelector((state)=> state.pokemon.allPokemonData)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  console.log(dataToShow)

  const getSpecificPokemonDelay=async(id)=>{
  debugger
  const fetxhingURL=`https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(fetxhingURL);
  const data = await res.json();
  dispatch(specificPokemonData(data))
  navigate(`${id}`)
  }

  return (
    <div className='BodyMainDIv'>
   {dataToShow.map((item,index)=>{
     return(
      <div className='BodyMainCardDiv' onClick={()=>getSpecificPokemonDelay(index+1)} key={index}>
     <div className='imgDiv'>
       <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} alt="iconImage" />
     </div>
     <div className='btnDiv'><button className='knowMoreBtn'>Click TO Know More</button></div>
     <p className='cardText'> {item.name}</p>
   </div>
     )
   })}
    </div>
  )
}
