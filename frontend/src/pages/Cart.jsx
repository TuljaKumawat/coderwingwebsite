import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../Components/Navbar";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCart(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h3>Your Cart</h3>
        {cart?.map((item) =>
          item?.product ? (
            <div key={item._id}>
              <h5>{item.product.title}</h5>
              <p>₹{item.product.price}</p>
              <img src={item.product.image} width="120" />
            </div>
          ) : null,
        )}
      </div>
    </>
  );
}

export default Cart;
