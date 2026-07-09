import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
interface FormData {
  choconame: string;
  price: string;
  quantity: string;
  description: string;
}

const Createpage = () => {
  const [formData, setFormData] = useState<FormData>({
    choconame: "",
    price: "",
    quantity: "",
    description: "",
  });
  
  const navigate = useNavigate()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name,value}=e.target
    setFormData({
      ...formData,
      [name]:value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem("token");
      const createdata= await axios.post(
      'http://localhost:3000/chocolate/create',
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(createdata.data)
   
    navigate("/");
  
    setFormData({
      choconame: "",
      price: "",
      quantity: "",
      description: "",
    });
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Create Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="choconame"
            placeholder="Enter Choco Name"
            value={formData.choconame}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          />

          <input
            type="number"
            name="price"
            placeholder="Enter Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Enter Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          />

          <textarea
            name="description"
            placeholder="Enter Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            rows={4}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Createpage;