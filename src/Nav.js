import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, HandleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        HandleShow(true);
      } else HandleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div>
      <div className={`nav ${show && "nav__black"}`}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
          alt="Netflix Logo"
          className="nav__logo"
        />
        <img
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="Netflix Logo"
          className="nav__avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
