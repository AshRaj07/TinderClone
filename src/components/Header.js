import React from "react";
import "./Header.css"
import { IconButton } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

const Header = () => {
  return (
    <div className="header">
      <IconButton >
        <PersonIcon fontSize="large" className="header__button"/>
      </IconButton>
      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-768x432.jpg"
        alt="tinder"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header__button"/>
      </IconButton>
    </div>
  );
};

export default Header;
