import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("products");
  };
  return (
    <React.Fragment>
      <h1>Welcome to React Router Dom</h1>
      <p>
        Go to <Link to="products">the list of products</Link>
      </p>
      <p>
        Navigate programmatically with useNavigate.
        <br />
        <button onClick={handleNavigate}>useNavigate</button>
      </p>
    </React.Fragment>
  );
};

export default Home;
