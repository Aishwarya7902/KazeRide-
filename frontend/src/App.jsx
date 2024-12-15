import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import UserLogin from './page/UserLogin'
import UserSignup from './page/UserSignup'
import CaptainSignup from './page/CaptainSignup'
import CaptainLogin from './page/CaptainLogin'
import Start from './page/Start'
import UserProtectWrapper from './page/UserProtectWrapper'
import UserLogout from './page/UserLogout'
import CaptainHome from './page/CaptainHome'
import CaptainProtectWrapper from './page/CaptainProtectWrapper'
import CaptainLogout from './page/CaptainLogout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        } />
        <Route path='/user/logout' element={
          <UserProtectWrapper>
            <UserLogout></UserLogout>
          </UserProtectWrapper>
        } />
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
              <CaptainHome/>
          </CaptainProtectWrapper>
        }/>

        <Route path='/captain/logout' element={
          <CaptainProtectWrapper>
             <CaptainLogout/>
          </CaptainProtectWrapper>
        }/>
      </Routes>
    </div>
  )
}

export default App