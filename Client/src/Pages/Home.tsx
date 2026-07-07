import { Link } from "react-router"
import { SlPlus } from "react-icons/sl";
import { useEffect, useState } from "react";
import axios from "axios";
interface Chocolate {
  _id: string;
  choconame: string;
  price: number;
  quantity: number;
  description: string;
}

const Home = () => {
const [Data,setData]=useState<Chocolate[]>([])
useEffect(()=>{
  const fetchData = async()=>{
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get('http://localhost:3000/chocolate/all',
        {
          headers:{
            Authorization: `Bearer ${token}`,
          }
        }

      )
     
     setData(response.data.data)
    } catch (error) {
      console.log(error)
      
    }
  }
  fetchData()
},[])



  return (
    <>
    <header className="bg-gray-200">
    <div className="flex items-center justify-between p-2">
      <h2>ChocolateList</h2>
    <div className="bg-violet-500 p-2 rounded-2xl">
    <Link to="/createpage" className="flex items-center gap-2">
    <SlPlus/>
    <span>Add New</span>
   
    </Link>
    </div>
    
 </div> 
    </header>
    <div className="grid grid-cols-3 bg-gray-400">
    {Data?.map((item) => (
      <div key={item._id}>
        <h2>{item.choconame}</h2>
        <p>Price: {item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <p>{item.description}</p>
        <hr />
      </div>
    ))}
  </div>
  </>
  )
}

export default Home