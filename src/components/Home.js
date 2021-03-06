import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import ErrorBoundary from "../ErrorBoundary";
const Home = () => {
  const darkTheme = useContext(ThemeContext);
  const themes = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
  };
  return (
    <ErrorBoundary>
      <div className="home-page main" style={themes}>
        <h1>Welcome to my profile!</h1>
        <Link to="/login" className="link">
          <span>login</span>
        </Link>
      </div>
    </ErrorBoundary>
  );
};

export default Home;
