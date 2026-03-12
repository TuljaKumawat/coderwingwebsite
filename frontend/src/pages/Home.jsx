import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCart";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (productId) => {
    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/cart/add",
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert("Product added to cart");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="row">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
