import React from "react";
import "./Feed.css";
import FeedHeader from "./FeedHeader";
import TweetBox from "./TweetBox";

function Feed() {
  return (
    <div className="feed">
      <FeedHeader active />
      <TweetBox />
    </div>
  );
}

export default Feed;
