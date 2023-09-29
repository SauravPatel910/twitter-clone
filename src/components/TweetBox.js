import React from "react";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import "./TweetBox.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import GifBoxIcon from "@mui/icons-material/GifBox";
import BallotIcon from "@mui/icons-material/Ballot";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="%PUBLIC_URL%/Naruto.jpg" />
          <input placeholder="What is happening?!" />
        </div>
      </form>
      <InsertPhotoIcon sx={{ color: "var(--twitter-color)" }} />
      <GifBoxIcon sx={{ color: "var(--twitter-color)" }} />
      <BallotIcon sx={{ color: "var(--twitter-color)" }} />
      <InsertEmoticonIcon sx={{ color: "var(--twitter-color)" }} />
      <CalendarMonthIcon sx={{ color: "var(--twitter-color)" }} />
      <PlaceIcon sx={{ color: "var(--twitter-color)" }} />
      <Button className="tweetBox__button">Post</Button>
    </div>
  );
}

export default TweetBox;
