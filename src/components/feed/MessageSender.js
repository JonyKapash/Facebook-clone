import { Avatar, Button } from "@material-ui/core";
import React, { useState, useCallback } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../../store/StateProvider";
import { storageService } from "../../services/localStorage";

function MessageSender() {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!input.trim()) return;

      storageService.addPost({
        message: input,
        timestamp: new Date().toISOString(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl,
      });

      setInput("");
      setImageUrl("");
    },
    [input, imageUrl, user.photoURL, user.displayName]
  );

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind ${user.displayName}?`}
          />
          <input
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
            placeholder={`Image URL (Optional)`}
          />

          <Button disabled={!input} onClick={handleSubmit} type="submit">
            Hidden submit
          </Button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MessageSender);
