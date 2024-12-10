import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './page/Home'
import UserLogin from './page/UserLogin'
import UserSignup from './page/UserSignup'
import CaptainSignup from './page/CaptainSignup'
import CaptainLogin from './page/CaptainLogin'

const App = () => {
  return (
   <div>
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<UserLogin/>}/>
         <Route path='/signup' element={<UserSignup/>}/>
         <Route path='/captain-signup' element={<CaptainSignup/>}/>
         <Route path='/captain-login' element={<CaptainLogin/>}/>
     </Routes>
   </div>
  )
}

export default App