import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-page">
      <Link to="/login">
        <h1>login</h1>
      </Link>
    </div>
  );
};

export default Home;
