import ProtectedRoute from "./component/protectedroutes"
import Createpage from "./Pages/Createpage"
import {Route, Routes } from "react-router"
import Home from "./Pages/Home"
import Login from "./Pages/login"
import Navbar from "./component/Navbar"
import Signup from "./Pages/signup"
import Mychocolate from "./Pages/mychocolate"
import EditChocolate from "./Pages/Editchocolate"


const App = () => {
  return (
    <div>
    <Navbar />
    <Routes> 
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />   
    <Route path="/createpage" element= <ProtectedRoute>{<Createpage/>} </ProtectedRoute>/> 
    <Route path="/mychocolate" element=<ProtectedRoute>{<Mychocolate/>}</ProtectedRoute>/>
    <Route path="/edit/:id" element= <ProtectedRoute>{<EditChocolate/>}</ProtectedRoute>/>
    </Routes>  
    </div>
  )
}

export default App