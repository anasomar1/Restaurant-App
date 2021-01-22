import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./Products.css";

const Products = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api");
      const data = await response.json();
      setFoods(data);
    };

    fetchData();
  }, []);

  return (
    <div className="products-container">
      {foods.map((food) => (
        <Product food={food} key={food._id.$oid} />
      ))}
    </div>
  );
};

export default Products;
