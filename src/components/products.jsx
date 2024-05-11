import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./product";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products);
    console.log(res.data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {products.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;
