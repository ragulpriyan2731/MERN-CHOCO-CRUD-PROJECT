import { useState } from "react"
import { NavLink } from "react-router"
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  const [islogin,setislogin]=useState(false)
  return (
    <div className="bg-gray-800 p-6 flex items-center justify-between">
    <NavLink to="/">
       <h1 className="text-white"> Delicious Day</h1>
       </NavLink>
    {islogin ?(<div> <FaUser /> 
    <NavLink to="/">logout</NavLink></div>):(
      <div>
    <NavLink to="/login" className="bg-cyan-700 rounded-2xl p-2">
    Login
  
    </NavLink>
    
      </div>)}
    </div>
  )
}

export default Navbar