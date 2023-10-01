import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import "./TweetBox.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import GifBoxIcon from "@mui/icons-material/GifBox";
import BallotIcon from "@mui/icons-material/Ballot";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import { collection, addDoc } from "firebase/firestore";
import db from "./firebase";

function TweetBox() {
  const [tweet, setTweet] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const postTweet = (e) => {
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      name: "Naruto Uzumaki",
      username: "nauto_uzumaki",
      verified: true,
      text: tweet,
      image: tweetImage,
      avatar:
        "https://i.pinimg.com/564x/e9/be/67/e9be67dd130aee203aaed715ddfcf75c.jpg",
    });

    setTweet("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.pinimg.com/564x/e9/be/67/e9be67dd130aee203aaed715ddfcf75c.jpg" />
          <div className="tweetBox__textInput">
            <input
              value={tweet}
              placeholder="What is happening?!"
              onChange={(e) => setTweet(e.target.value)}
              type="text"
            />
            <input
              value={tweetImage}
              className="tweetBox__imageInput"
              placeholder="Optional: Enter image URL"
              type="text"
              onChange={(e) => setTweetImage(e.target.value)}
            />
          </div>
        </div>
        <div className="tweetBox__icon_button">
          <div className="tweetBox__icon">
            <InsertPhotoIcon sx={{ color: "var(--twitter-color)" }} />
            <GifBoxIcon sx={{ color: "var(--twitter-color)" }} />
            <BallotIcon sx={{ color: "var(--twitter-color)" }} />
            <InsertEmoticonIcon sx={{ color: "var(--twitter-color)" }} />
            <CalendarMonthIcon sx={{ color: "var(--twitter-color)" }} />
            <PlaceIcon sx={{ color: "var(--twitter-color)" }} />
          </div>
          <div className="tweetBox__button">
            <Button type="submit" onClick={postTweet}>
              Post
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
