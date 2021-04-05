import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import pic from "../imgs/profile-pic.png";
import { ThemeContext, UserContext } from "../App";
const Profile = () => {
  const darkTheme = useContext(ThemeContext);
  const user = useContext(UserContext);
  const themes = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
  };
  return (
    <div
      style={themes}
      className="profile-page transitioned"
      hidden={user.name !== "oren"}
    >
      <h1 className="title">Your Profile</h1>
      <img className="pic" src={pic} alt="profile-picture" />
      <h1 className="name">Oren Bachar</h1>
      <section className="about">about</section>
      <h3 className="motto">Motto Motto</h3>
    </div>
  );
};

export default Profile;
