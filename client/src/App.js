import React from 'react'
import {Routes, Route} from "react-router-dom"
import {CssBaseline, ThemeProvider, Box} from '@mui/material'
import {useMode} from './theme'

import Navbar from "./components/navbar.component"
import HowItWorks from "./components/how-it-works.component"
import CreateUser from "./components/create-user.component"
import EditUser from "./components/edit-user.component"
import HomePage from "./components/home-page.component"
import Login from "./components/login.component"
import MemberPage from "./components/member-page.component"
import "bootstrap/dist/css/bootstrap.min.css"

function App(){
  const [theme] = useMode()

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app" >
            <Navbar/>
            <br/>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/hiw' element={<HowItWorks/>}/>
              <Route path='/edituser/:id' element={<EditUser/>}/>
              <Route path='/create' element={<CreateUser/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/users/:id' element={<MemberPage/>}/>
            </Routes>
          </div>
        </CssBaseline>
      </ThemeProvider>
  )
}

export default App;