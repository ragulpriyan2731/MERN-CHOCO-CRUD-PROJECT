import { Link } from "react-router"
import { SlPlus } from "react-icons/sl";
import { useEffect, useState } from "react";
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
      const response = await fetch('http://localhost:3000/api/all')
      const responseData = await response.json()
      console.log(responseData.data)
      setData(responseData.data)
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
    <div>
    {Data.map((item) => (
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