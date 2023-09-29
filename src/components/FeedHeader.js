import React from "react";
import "./FeedHeader.css";

function HeaderBoxCont({ text, active }) {
  return (
    <div className={`for_you ${active ? "for_you__active" : ""}`}>
      <h3>{text}</h3>
    </div>
  );
}

function FeedHeader({ active }) {
  return (
    <div className="feed__header">
      <div className="home">
        <h2>Home</h2>
      </div>
      <div className="headerBox">
        <HeaderBoxCont text={"For you"} active />
        <HeaderBoxCont text={"Following"} />
      </div>
    </div>
  );
}

export default FeedHeader;
