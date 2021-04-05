import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
const Login = () => {
  const passwordElement = useRef();
  const [userInput, setUsername] = useState("");
  const [passwordInput, setPassword] = useState("");
  const [errorMessage, setError] = useState("");

  function validate() {
    return userInput === "oren" && passwordInput === "1234";
  }
  function errorHandling() {
    if (userInput === "") setError("Enter a username!");
    else if (passwordInput === "") setError("Enter a password!");
    else if (userInput !== "oren") setError("Invalid username!");
    else if (passwordInput !== "1234") setError("Invalid Password!");
  }
  return (
    <div className="login-page">
      <label htmlFor="username">Enter username</label>
      <input
        onChange={(e) => setUsername(e.target.value)}
        name="username"
        type="text"
        required
      />
      <br />
      <label htmlFor="password">Enter password</label>
      <input
        ref={passwordElement}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        type="password"
        required
      />
      <button
        onMouseDown={() => (passwordElement.current.type = "text")}
        onMouseUp={() => (passwordElement.current.type = "password")}
        onMouseLeave={() => (passwordElement.current.type = "password")}
      >
        show password
      </button>
      <br />
      <LoginButton error={errorHandling} validation={() => validate()} />
      <br />
      <h3 className="errorMessage">{errorMessage}</h3>
    </div>
  );
};

export default Login;
