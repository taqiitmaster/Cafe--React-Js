import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
 <>
 <div className="nn bg-black text-white">
 <h1 className='text-center text-6xl pt-14'>Our Menu</h1>
 <p className='text-center text-5xl'>________</p>
 <div className="nav text-center pt-14 text-3xl pr-10">

   <Link to="/"><button className='pl-14'>All</button></Link>
   <Link to="/breakfast"><button className='pl-14'>Breakfast</button></Link>
   <Link to="/lunch"> <button className='pl-14'>Lunch</button></Link>
   <Link to="/shakes"><button className='pl-14'>Shakes</button></Link> 
 </div>
 </div>
 </>
  )
}

export default Nav
