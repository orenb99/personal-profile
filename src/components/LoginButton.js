import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
const LoginButton = ({ validation, error }) => {
  let bol = validation();
  return bol ? (
    <Link to="/profile">
      <button>login</button>
    </Link>
  ) : (
    <button onClick={() => error()}>login</button>
  );
};

export default LoginButton;
