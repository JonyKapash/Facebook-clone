import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import { storageService } from "../../services/localStorage";


function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Function to update posts
    const updatePosts = () => {
      setPosts(storageService.getPosts());
    };

    // Initial load
    updatePosts();

    // Listen for both storage and custom events
    window.addEventListener("postsUpdated", updatePosts);
    window.addEventListener("storage", updatePosts);

    return () => {
      window.removeEventListener("postsUpdated", updatePosts);
      window.removeEventListener("storage", updatePosts);
    };
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          postKey={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
