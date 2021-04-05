import React, { useState, useRef, useContext } from "react";
import LoginButton from "./LoginButton";
//need to fix the double click delay
import { ThemeContext, UserContext } from "../App";
import ErrorBoundary from "../ErrorBoundary";

const Login = () => {
  const darkTheme = useContext(ThemeContext);
  const user = useContext(UserContext);
  const themes = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
  };
  const passwordElement = useRef("");
  const userElement = useRef("");
  const [errorMessage, setError] = useState("");
  function validate() {
    user.set(userElement.current.value);
    return (
      userElement.current.value === "oren" &&
      passwordElement.current.value === "1234"
    );
  }
  function errorHandling() {
    if (userElement.current.value === "") setError("Enter a username!");
    else if (passwordElement.current.value === "")
      setError("Enter a password!");
    else setError("User not found!");
  }
  return (
    <ErrorBoundary>
      <div className="login-page main" style={themes}>
        <div className="content">
          <h1>Login</h1>
          <label htmlFor="username">Enter username</label>
          <input ref={userElement} name="username" type="text" required />
          <br />
          <label htmlFor="password">Enter password</label>
          <input
            ref={passwordElement}
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
          <LoginButton error={errorHandling} isValid={validate} />
          <br />
          <h3 className="errorMessage">{errorMessage}</h3>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Login;
