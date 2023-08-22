import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { productID: id } = useParams();

  return (
    <React.Fragment>
      <h1>Product {id} Details</h1>
      <Link to=".." relative="path">Back</Link>
    </React.Fragment>
  );
};

export default ProductDetails;
