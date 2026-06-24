import Createpage from "./Pages/Createpage"
import {Route, Routes } from "react-router"
import Home from "./Pages/Home"
import Login from "./auth/login"
import Navbar from "./component/Navbar"


const App = () => {
  return (
    <div>
    <Navbar />
    <Routes> 
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>} />
    <Route path="/createpage" element={<Createpage/>} /> 
    </Routes>  
    </div>
  )
}

export default App