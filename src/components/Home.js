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
    <div className="home-page main" style={themes}>
      <h1>Welcome to my profile!</h1>
      <Link to="/login" className="link">
        <h1>login</h1>
      </Link>
    </div>
  );
};

export default Home;
