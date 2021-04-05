import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import pic from "../imgs/profile-pic.png";
const Profile = () => {
  return (
    <div className="Profile-page">
      <h1 className="title">Your Profile</h1>
      <img className="pic" src={pic} alt="profile-picture" />
      <h1 className="name">Oren Bachar</h1>
      <section className="about">about</section>
      <h3 className="motto">Motto Motto</h3>
    </div>
  );
};

export default Profile;
