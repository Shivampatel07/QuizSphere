import React, { useState } from "react";
import "./../css/navbar.css";

function Navbar() {
  const [profileIcon, setProfileIcon] = useState(false);
  return (
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
  );
}

export default Navbar;
