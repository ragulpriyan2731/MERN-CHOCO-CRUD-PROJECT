import { useState } from "react"
interface formlogin{
    email:string;
    password:string
}


const Login = () => {
const [login,setlogin]=useState<formlogin>({
    email:"",
    password:""
})
const handlechange=(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name,value}= event.target
    setlogin({
        ...login,
         [name]:value,
        
    })
}


  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-6">
                Login
            </h1>
            <form className="space-y-4 mb-6">
                <input type="email" 
                placeholder="Enter your email"
                name="email"
                value={login.email} 
                onChange={handlechange}
                className="border w-full rounded-md p-3 focus:ring-1 outline-0"/>

                <input type="password" 
                placeholder="Enter your password"
                name="password"
                value={login.password} 
                onChange={handlechange}
                className="border w-full rounded-md p-3 focus:ring-1 outline-0"/>
            
            <button type="submit" className="w-full p-3 ring-1 rounded-2xl bg-gray-400">Login</button>
            
            </form>



        </div>




    </div>
  )
}

export default Login