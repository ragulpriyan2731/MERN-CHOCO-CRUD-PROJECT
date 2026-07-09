import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
interface signinpage{
    username:string;
    email:string;
    password:string
}


const Signup = () => {
const [User,setUser]= useState<signinpage>({
    username:"",
    email:"",
    password:""
})
const navigate = useNavigate()

const handleuserchange =(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name,value}= event.target
    setUser({
       ...User, 
        [name]:value,
    })
}
const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:3000/user/signup",
      {
        username: User.username, // or name, depending on your backend
        email: User.email,
        password: User.password,
      }
    );

    console.log(response.data);

    alert("Signup Successful");

    navigate("/login");
  } catch (error) {
    console.error(error);
    alert("Signup Failed");
  }
};
  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-4">SignUp</h1>
        <form onSubmit={submitHandler}className="space-y-4 mb-6">
            <input type="text" 
            placeholder="username" 
            name="username" 
            value={User.username}
            onChange={handleuserchange}
            className="border w-full rounded-2xl focus:ring-1 outline-0 p-3"
            />
            <input type="email" 
            placeholder="enter your email"
            name="email"
            value={User.email}
            onChange={handleuserchange}
            className="border w-full p-3 rounded-2xl focus:ring-1 outline-0"
            />
            <input type="password" 
            placeholder="enter your password"
            name="password"
            value={User.password}
            onChange={handleuserchange}
            className="border w-full rounded-2xl focus:ring-1 outline-0 p-3"
            />
            <button type="submit" className="w-full border p-3 ring-1 rounded-xl bg-gray-600">Signup</button>
            <span>
                Already have an Account?{""}
                <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            </span>
        </form>
        </div>
    </div>
  )
}
export default Signup