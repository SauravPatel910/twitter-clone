import React, { useEffect, useState } from "react";
import "./Feed.css";
import FeedHeader from "./FeedHeader";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);

  // const fetchPost = async () =>
  //   await getDocs(collection(db, "posts")).then((querySnapshot) =>
  //     setPosts(querySnapshot.docs.map((doc) => doc.data()))
  //   );

  useEffect(() => {
    getDocs(collection(db, "posts")).then((querySnapshot) =>
      setPosts(querySnapshot.docs.map((doc) => doc.data()))
    );
  }, [posts]);

  return (
    <div className="feed">
      <FeedHeader active />
      <TweetBox />
      {posts.map((post) => (
        <Post
          name={post.name}
          username={post.username}
          verified={post.verified}
          avatar={post.avatar}
          text={post.text}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
