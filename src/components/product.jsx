import React from "react";

const Product = ({ item }) => {
  return (
    <div>
      <h1 className="text-5xl yellow">{item.title}</h1>
      <p className="text-3xl">{item.description}</p>
      <p className="text-2xl">rating: {item.rating}</p>
      <p>price: {item.price}</p>
      <div className="flex gap-5">
        <img src={item.images[0]} alt="" />
        <img src={item.images[1]} alt="" />
        <img src={item.images[2]} alt="" />
        <img src={item.images[3]} alt="" />
      </div>
    </div>
  );
};

export default Product;
