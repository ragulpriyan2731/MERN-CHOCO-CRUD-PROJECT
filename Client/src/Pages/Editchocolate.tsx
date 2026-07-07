import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

function EditChocolate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [choconame, setchocoName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchChocolate = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `http://localhost:5000/chocolate/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const chocolate = response.data;

        setchocoName(chocolate.choconame);
        setPrice(chocolate.price);
        setQuantity(chocolate.quantity);
        setDescription(chocolate.description);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChocolate();
  }, [id]);

  const submitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.patch(`http://localhost:3000/chocolate/${id}`,
        {
          choconame,
          price,
          quantity,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Chocolate Updated Successfully");

      navigate("/mychocolate");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 shadow-lg p-8 rounded-lg">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Edit Chocolate
      </h1>

      <form
        onSubmit={submitHandler}
        className="space-y-5"
      >
        <input
          type="text"
          placeholder="Chocolate Name"
          value={choconame}
          onChange={(e) => setchocoName(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          placeholder="Description"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700"
        >
          Update Chocolate
        </button>
      </form>
    </div>
  );
}

export default EditChocolate;