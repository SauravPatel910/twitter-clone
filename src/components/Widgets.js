import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search" type="text" />
      </div>

      <div className="subscribePremium">
        <h3>Subscribe to Premium</h3>
        <p>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <Button className="subscribe__button">Subscribe</Button>
      </div>

      <div className="widgets__widgetsContainer">
        <h2>What's happening</h2>
      </div>
    </div>
  );
}

export default Widgets;
