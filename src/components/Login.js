import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Login = () => {
  const passwordInput = useRef();
  const userInput = useRef();

  return (
    <div className="login-page">
      <label for="username">Enter username</label>
      <input ref={userInput} name="username" type="text" required />
      <br />
      <label for="password">Enter password</label>
      <input ref={passwordInput} name="password" type="password" required />
      <button
        onMouseDown={() => (passwordInput.current.type = "text")}
        onMouseUp={() => (passwordInput.current.type = "password")}
      >
        show password
      </button>
      <br />
      <button>login</button>
    </div>
  );
};

export default Login;
