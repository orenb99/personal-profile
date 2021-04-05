import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
    <div style={themes} className="profile-page main">
      {user.name === "oren" ? (
        <>
          <h1 className="title">Your Profile</h1>
          <img className="pic" src={pic} alt="profile-picture" />
          <h1 className="name">Oren Bachar</h1>
          <section className="about">about</section>
          <h3 className="motto">Motto Motto</h3>
        </>
      ) : (
        <>
          <h1>Unauthorized Access</h1>
          <Link to="/login">
            <h2>Back to the login page</h2>
          </Link>
        </>
      )}
    </div>
  );
};

export default Profile;
