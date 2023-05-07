import React from "react";
import {MainComponent} from "./components/MainComponent/index" ;
import {SpecificPokemonDetailCom} from './components/SpecificPokemonDetailCom/index';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom"

const CenterScreenLayout=()=>{
  return (
    <>
    <Outlet />
    </> 
  )
}

const Routing=()=>{
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<CenterScreenLayout />} >
              <Route index element={<Navigate to={'/home'} />} />
              <Route path="/home" element={<MainComponent />} />
              <Route path="/home/:id" element={<SpecificPokemonDetailCom />} />            
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing;