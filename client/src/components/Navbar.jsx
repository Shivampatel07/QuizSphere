import React, { useState } from "react";
import "./../css/navbar.css";

function Navbar() {
  const [profileIcon, setProfileIcon] = useState(false);
  return (
    <>
      <div></div>
      <div className="navbar">
        <div className="Logo">QuizSphere</div>
        <div className="searchbar">
          <input type="text" name="SearchBar" placeholder="search..." />
        </div>
        <div className="profile-icon">
          <img
            src="profile.png"
            alt="Profile"
            onClick={() => {
              setProfileIcon(!profileIcon);
              console.log(profileIcon);
            }}
          />
        </div>
      </div>
      <div className="sub-navbar">
        <ul>
          <li>Batch</li>
          <li>Store</li>
          <li>Subscription plan</li>
          <li>GATE2024</li>
          <li>JEE2024</li>
          <li>Coding plateform</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
