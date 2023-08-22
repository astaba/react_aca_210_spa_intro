import React from "react";
import { Link } from "react-router-dom";

const ITEMS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const Products = () => {
  return (
    <React.Fragment>
      <h1>My products page</h1>
      <ul>
        {(ITEMS || []).map((item) => (
          <li key={item.id}>
            <Link to={item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Products;
