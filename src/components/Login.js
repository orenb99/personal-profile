import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
const Login = () => {
  const passwordElement = useRef("");
  const userElement = useRef("");
  const [errorMessage, setError] = useState("");
  function validate() {
    return (
      userElement.current.value === "oren" &&
      passwordElement.current.value === "1234"
    );
  }
  function errorHandling() {
    if (userElement.current.value === "") setError("Enter a username!");
    else if (passwordElement.current.value === "")
      setError("Enter a password!");
    else if (userElement.current.value !== "oren")
      setError("Invalid username!");
    else if (passwordElement.current.value !== "1234")
      setError("Invalid Password!");
  }
  return (
    <div className="login-page">
      <label htmlFor="username">Enter username</label>
      <input ref={userElement} name="username" type="text" required />
      <br />
      <label htmlFor="password">Enter password</label>
      <input ref={passwordElement} name="password" type="password" required />
      <button
        onMouseDown={() => (passwordElement.current.type = "text")}
        onMouseUp={() => (passwordElement.current.type = "password")}
        onMouseLeave={() => (passwordElement.current.type = "password")}
      >
        show password
      </button>
      <br />
      <LoginButton error={errorHandling} isValid={validate} />
      <br />
      <h3 className="errorMessage">{errorMessage}</h3>
    </div>
  );
};

export default Login;
