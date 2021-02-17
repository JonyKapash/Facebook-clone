import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
function Feed() {
	return (
		<div className="feed">
			<StoryReel />
			<MessageSender />
			<Post
				profilePic="https://images.unsplash.com/photo-1612387606984-2461a2189d70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=723&q=80"
				message="Look at this beautiful bird!"
				timestamp="17.2.21 20:00 pm"
				username="Jony Kps"
				image="https://images.unsplash.com/photo-1613295186594-b69a0fa446ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
			/>
			<Post
				profilePic="https://images.unsplash.com/photo-1612387606984-2461a2189d70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=723&q=80"
				message="Heading to eat dinner with my beautiful boyfriend"
				timestamp="17.2.21 20:09 pm"
				username="Jony Kps"
			/>
			<Post />
		</div>
	);
}

export default Feed;
