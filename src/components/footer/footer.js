
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from '../../reducer/reducer'
import {incrementByPayload} from '../../reducer/pokemonDetail'

export function Footer() {
  const count = useSelector((state) => state.counter)
console.log(count)
  return (
    <div style={{    padding: "0px 35px 17px 0px"}}>
    <p style={{textAlign: "end"}}>
      {count.name}
    </p>
    <p style={{textAlign: "end"}}>{count.mail}</p>
    </div>
  )
}

