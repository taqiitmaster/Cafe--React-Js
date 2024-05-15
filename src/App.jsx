import React from 'react'
import Data from './Data'
import Nav from './Nav'
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Shakes from './Shakes'
import All from './All'
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
  } from "react-router-dom";

function App() {
  return (
    <>
  

    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch/*" element={<Lunch />} />
        <Route path="/shakes/*" element={<Shakes />} />
      </Routes>
    </BrowserRouter>



   
    

      
    </>
  )
}

export default App
