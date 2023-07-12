import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar.component"
import About from "./components/about.component"
import HowItWorks from "./components/how-it-works.component"
import CreateUser from "./components/create-user.component"
import EditUser from "./components/edit-user.component"
import HomePage from "./components/home-page.component"
import Login from "./components/login.component"
import MemberPage from "./components/member-page.component"

function App(){
  return (
    <BrowserRouter>
      <div className="container-fluid" >
        <Navbar/>
        <br/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/hiw' element={<HowItWorks/>}/>
          <Route path='/edituser/:id' element={<EditUser/>}/>
          <Route path='/create' element={<CreateUser/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/users/:id' element={<MemberPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;