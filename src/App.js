import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Home from "./components/Home";
import "./styles/app.css";
import NotFound from "./components/NotFound";

export const ThemeContext = React.createContext();
export const UserContext = React.createContext();
function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [userName, setUserName] = useState("yes");
  const theme = {
    backgroundColor: darkTheme ? "#111" : "#EEE",
    color: darkTheme ? "#EEE" : "#111",
    padding: "5px",
    width: "80px",
    height: "50px",
    margin: "10px",
    fontSize: "18px",
  };
  function changeTheme(e) {
    let text = e.target.innerText;
    if (text.includes("Light")) text = text.replace("Light", "Dark");
    else text = text.replace("Dark", "Light");
    e.target.innerText = text;
    setDarkTheme(!darkTheme);
    //throw new Error("yes");
  }
  return (
    <Router>
      <ThemeContext.Provider value={darkTheme}>
        <UserContext.Provider value={{ name: userName, set: setUserName }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </UserContext.Provider>

        <button
          className="dark-mode-button"
          onClick={(e) => changeTheme(e)}
          style={theme}
        >
          Dark Mode
        </button>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
