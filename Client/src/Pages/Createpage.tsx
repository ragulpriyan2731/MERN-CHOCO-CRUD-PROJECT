import { useState } from "react";
import { useNavigate } from "react-router";
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
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name,value}=e.target
    setFormData({
      ...formData,
      [name]:value,
    });
  };
  
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
    try {
      const res =  await fetch('http://localhost:3000/api/create',
        {
           method: "POST",
             headers: {
                "Content-Type": "application/json",
                  },
                 body: JSON.stringify(formData)
                           
                    })
                navigate("/")
                const result = await res.json();
                console.log(result)
    } catch (error) {
      console.log(error)
    }

    setFormData({
      choconame: "",
      price: "",
      quantity: "",
      description: "",
    });
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