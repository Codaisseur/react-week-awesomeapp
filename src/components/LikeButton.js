// src/components/LikeButton.js
import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <button onClick={toggleLiked}>
      {liked ? "You've liked this" : "Like This"}
    </button>
  );
}
