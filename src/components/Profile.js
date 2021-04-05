import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import pic from "../imgs/profile-pic.png";
import { ThemeContext, UserContext } from "../App";
import ErrorBoundary from "../ErrorBoundary";
const Profile = () => {
  const darkTheme = useContext(ThemeContext);
  const user = useContext(UserContext);
  const themes = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
  };
  return (
    <ErrorBoundary>
      <div style={themes} className="profile-page main">
        {user.name === "oren" ? (
          <>
            <h1 className="title">Your Profile</h1>
            <img className="pic" src={pic} alt="profile-picture" />
            <h1 className="name">Oren Bachar</h1>
            <section className="about">Me</section>
            <h3 className="motto">Motto Motto</h3>
          </>
        ) : (
          <Redirect to="/error" />
        )}
      </div>
    </ErrorBoundary>
  );
};

export default Profile;
