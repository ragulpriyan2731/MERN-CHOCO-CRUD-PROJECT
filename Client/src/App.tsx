import Createpage from "./Pages/Createpage"
import {Route, Routes } from "react-router"
import Home from "./Pages/Home"
import Login from "./auth/login"


const App = () => {
  return (
    <div>
    <Routes> 
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>} />
    <Route path="/createpage" element={<Createpage/>} /> 
    </Routes>  
    </div>
  )
}

export default App