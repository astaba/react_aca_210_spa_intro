import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <h1>Welcome to React Router Dom</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
    </React.Fragment>
  );
};

export default Home;
