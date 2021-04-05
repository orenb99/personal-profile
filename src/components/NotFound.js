import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
const NotFound = () => {
  const darkTheme = useContext(ThemeContext);
  const themes = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
  };
  return (
    <div className="not-found main" style={themes}>
      <h1 className="error">An Error Occurred</h1>
      <Link to="/login" className="link">
        <span>Back to the login page</span>
      </Link>
    </div>
  );
};

export default NotFound;
