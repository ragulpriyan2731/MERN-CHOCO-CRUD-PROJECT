

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Chocolate {
  _id: string;
  choconame: string;
  price: number;
  quantity: number;
  description: string;
}

function Mychocolate() {
  const [chocolates, setChocolates] = useState<Chocolate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  

  useEffect(() => {
    const fetchChocolates = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:3000/chocolate/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setChocolates(response.data.chocolates);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  fetchChocolates()
  }, []);

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

      setChocolates((prev) =>
        prev.filter((chocolate) => chocolate._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Chocolates</h1>

        <button
          onClick={() => navigate("/create")}
          className="bg-amber-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Chocolate
        </button>
      </div>

      {chocolates.length === 0 ? (
        <h2>No Chocolates Found</h2>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {chocolates.map((item) => (
            <div
              key={item._id}
              className="border rounded-lg shadow-md p-5"
            >
              <h2 className="text-2xl font-bold mb-3">
                🍫 {item.choconame}
              </h2>

              <p>
                <strong>Price:</strong> ₹{item.price}
              </p>

              <p>
                <strong>Quantity:</strong> {item.quantity}
              </p>

              <p className="mt-2">
                <strong>Description:</strong>
                <br />
                {item.description}
              </p>

              <div className="flex justify-between mt-5">
                <button
                  onClick={() => navigate(`/edit/${item._id}`)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteChocolate(item._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Mychocolate;