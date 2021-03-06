import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ExpandMoreOutlined } from "@material-ui/icons";
import db from "./firebase";



function Post({ postKey, profilePic, image, username, timestamp, message }) {

	const handleDeleteClick = () => {
		db.collection("posts").doc(postKey).delete().then(() => {
			console.log(`Document ${postKey} successfully deleted!`);
		}).catch((error) => {
			console.error("Error removing document: ", error);
		});
	}

	
	return (
		<div className="post">
			<div className="post__top">
				<Avatar src={profilePic} className="post__avatar" />
				<div className="post__topInfo">
					<h3>{username}</h3>
					<p>{new Date(timestamp?.toDate()).toUTCString()}</p>
				</div>
				<div className="post__delBtn">
				<Button onClick={handleDeleteClick}>X</Button>
				</div>
			</div>

			<div className="post__bottom">
				<p>{message}</p>
			</div>

			<div className="post__image">
				<img src={image} alt="" />
			</div>

			<div className="post__options">
				<div className="post__option">
					<ThumbUpIcon />
					<p>Like</p>
				</div>
				<div className="post__option">
					<ChatBubbleOutlineOutlinedIcon />
					<p>Comment</p>
				</div>
				<div className="post__option">
					<NearMeIcon />
					<p>Share</p>
				</div>
				<div className="post__option">
					<AccountCircleIcon />
					<ExpandMoreOutlined />
				</div>
			</div>
		</div>
	);
}

export default Post;
