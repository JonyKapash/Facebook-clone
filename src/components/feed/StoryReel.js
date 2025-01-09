import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
	return (
		<div className="storyReel">
			<Story
				image="https://images.unsplash.com/photo-1612977060650-77024e7aac63?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
				profileSrc="https://images.unsplash.com/photo-1613188665424-b6790816c9f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
				title="Adam Dim"
			/>
			<Story
				image="https://images.unsplash.com/photo-1613244316743-b63cae1b6388?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
				profileSrc="https://images.unsplash.com/photo-1606274741559-d322810275c4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
				title="Ray Blue"
			/>
			<Story
				image="https://images.unsplash.com/photo-1612831660296-0cd5841b89fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
				profileSrc="https://images.unsplash.com/photo-1613005341945-35e159e522f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
				title="Shila Moon"
			/>
			<Story
				image="https://images.unsplash.com/photo-1612993232871-47e86e7de1f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
				profileSrc="https://images.unsplash.com/photo-1606569371439-56b1e393a06b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
				title="Jonatan Monero"
			/>
			<Story
				image="https://images.unsplash.com/photo-1566661983144-883ee0a8c0c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1082&q=80"
				profileSrc="https://images.unsplash.com/profile-1603237011473-f3db6183622aimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
				title="Lili Tompson"
			/>
		</div>
	);
}

export default StoryReel;
