import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Home from "./components/Home";
import "./App.css";

export const ThemeContext = React.createContext();
function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  function changeTheme(e) {
    let text = e.target.innerText;
    if (text.includes("light")) text = text.replace("light", "dark");
    else text = text.replace("dark", "light");
    e.target.innerText = text;
    setDarkTheme(!darkTheme);
  }
  return (
    <Router>
      <ThemeContext.Provider value={darkTheme}>
        <button class="dark-mode" onClick={(e) => changeTheme(e)}>
          dark mode
        </button>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
