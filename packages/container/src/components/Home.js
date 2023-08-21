import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Container</h1>
      <div>Home page</div>
      <NavLink to="/marketing">Go to marketing</NavLink>
    </div>
  );
};

export default Home;
