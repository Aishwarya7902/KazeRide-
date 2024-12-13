import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './page/Home'
import UserLogin from './page/UserLogin'
import UserSignup from './page/UserSignup'
import CaptainSignup from './page/CaptainSignup'
import CaptainLogin from './page/CaptainLogin'
import Start from './page/Start'

const App = () => {
  return (
   <div>
     <Routes>
         <Route path='/' element={<Start/>}/>
         <Route path='/login' element={<UserLogin/>}/>
         <Route path='/signup' element={<UserSignup/>}/>
         <Route path='/captain-signup' element={<CaptainSignup/>}/>
         <Route path='/captain-login' element={<CaptainLogin/>}/>
         <Route path='/home' element={<Home/>}/>
     </Routes>
   </div>
  )
}

export default App