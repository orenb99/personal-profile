import React from "react";
import { Link } from "react-router-dom";
const LoginButton = ({ isValid, error }) => {
  return (
    <Link to={isValid() ? "/profile" : "/login"}>
      <button onClick={() => error()}>login</button>
    </Link>
  );
};

export default LoginButton;
