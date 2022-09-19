import React from "react";
import "../HelpVideo/ResponsivePlayer.css";
import ReactPlayer from "react-player";

const ResponsivePlayer = () => {
  return (
    <div className="player-wrapper ">
      <ReactPlayer
        className="react-player  "
        url="https://www.youtube.com/watch?v=KjDDyll-KF8"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default ResponsivePlayer;
