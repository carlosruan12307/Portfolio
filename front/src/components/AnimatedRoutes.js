import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import { useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'
import SobreMim from './SobreMim';
import Projetos from './Projetos';
function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path='/' element={<><Header/><Home/></>}/>
    <Route path='/SobreMim' element={<><Header/><SobreMim/></>}></Route>
    <Route path='/Projetos' element={<><Header/><Projetos/></>}></Route>
  </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoutes