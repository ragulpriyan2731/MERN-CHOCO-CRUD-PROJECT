import { Link } from "react-router-dom"
import { SlPlus } from "react-icons/sl";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
interface Chocolate {
  _id: string;
  choconame: string;
  price: string;
  quantity: string;
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
     console.log("GET response",response.data)
     setData(response.data.chocolates)
    } catch (error) {
      console.log(error)
      
    }
  }
  fetchData()
},[])
const deleteChocolate = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this chocolate?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:3000/chocolate/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setData((prev) =>
        prev.filter((chocolate) => chocolate._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <>
    <header className="bg-gray-200 mx-auto px-8 max-w-7xl">
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
        {Data.length === 0 ? (<div className="col-span-full flex justify-center mt-8">
    <div className="bg-white shadow-md rounded-lg p-8 text-center w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-700">
        No Data Available
      </h2>
      <p className="text-gray-500 mt-2">
        There are no chocolates to display.
      </p>
    </div>
  </div>):
   ( Data.map((item) => (
      <div key={item._id} className="bg-white shadow-2xl rounded-lg border p-4 mt-8 w-full max-w-md" >
        <h2>{item.choconame}</h2>
        <p>Price: {item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <p>{item.description}</p>
      <div className="flex justify-between mt-5">
        <Link to={`/edit/${item._id}`} className="bg-blue-600 px-2 py-4 rounded ">
        <FaRegEdit />
        <span className="text-white">Update</span>
        </Link>
       <button onClick={()=>deleteChocolate(item._id)} className="bg-red-600 text-white px-2 py-4 rounded">
          <MdDeleteOutline />
          <span>Delete</span>

       </button>



      </div> 
       
      </div>
    )))}
  </div>
  </>
  )
}

export default Home