import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
const Home = () => {
  const darkTheme = useContext(ThemeContext);
  const themes = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
  };
  return (
    <div className="home-page transitioned" style={themes}>
      <Link to="/login">
        <h1>login</h1>
      </Link>
    </div>
  );
};

export default Home;
