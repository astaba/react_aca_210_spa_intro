import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productID: id } = useParams();

  return <h1>Product {id} Details</h1>;
};

export default ProductDetails;
