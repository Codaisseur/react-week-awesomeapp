// src/components/LikeCounter.js
import { useState } from "react";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  const increment = () => {
    console.log("Yes, clicked! Current number of likes:", numLikes);
  };

  set_numLikes(numLikes + 1); // This causes an error!!

  // This error is happening because the setter from useState causes a re-render,
  // but we are calling the setter inside our main function, which is the function
  // that React calls to render our component. In other words, infinite loop!!

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={increment}>Like</button>
      </p>
    </div>
  );
}
