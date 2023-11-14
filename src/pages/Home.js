import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Eureur from './Eureur'
import Details from './Details'

const Home = () => {
  return (
    <div> 
        <Routes>
            <Route exact path='/' Component={App}/>
            <Route path='/*' Component={Eureur}/>
            <Route path='/details/:id' Component={Details}/>
            
        </Routes>
    </div>
  )
}

export default Home