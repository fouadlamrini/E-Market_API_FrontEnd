import React from "react";
import { useParams } from "react-router-dom";

function Product_Details() {
  const { id } = useParams();

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-blue-600">🛒 Product Detail</h1>
      <p className="mt-2 text-lg">Product ID: {id}</p>
    </div>
  );
}

export default Product_Details;
