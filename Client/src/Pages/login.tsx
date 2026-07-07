import { useState } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../authcontext/useauth";

interface formlogin{
    email:string;
    password:string
}


const Login = () => {
    const navigate = useNavigate()
    const {login} =useAuth()
const [loginform,setloginform]=useState<formlogin>({
    email:"",
    password:""
})



const handlechange=(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name,value}= event.target
    setloginform({
        ...loginform,
         [name]:value,
        
    })
}

const submitHandler = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:3000/user/login",
      {
        email: loginform.email,
        password: loginform.password,
      }
    );

    login(response.data.token);

    alert("Login Successful");

    navigate("/");
  } catch (error) {
    console.error(error);
    alert("Invalid Email or Password");
  }
};


  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-6">
                Login
            </h1>
            <form onSubmit={submitHandler}className="space-y-4 mb-6">
                <input type="email" 
                placeholder="Enter your email"
                name="email"
                value={loginform.email} 
                onChange={handlechange}
                className="border w-full rounded-md p-3 focus:ring-1 outline-0"/>

                <input type="password" 
                placeholder="Enter your password"
                name="password"
                value={loginform.password} 
                onChange={handlechange}
                className="border w-full rounded-md p-3 focus:ring-1 outline-0"/>
            
            <button type="submit" className="w-full p-3 ring-1 rounded-2xl bg-gray-400">Login</button>
            <span>
                Don't have an Account?{" "}
                <Link to="/signup" className="text-blue-600 hover:underline">Signup</Link>
            </span>
            </form>



        </div>




    </div>
  )
}

export default Login