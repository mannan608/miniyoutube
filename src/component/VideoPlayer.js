import React from "react";

const VideoPlayer = ({ link, title }) => {
  return (
    <div className="video-player">
      <iframe
        width="100%"
        height="100%"
        className="aspect-video"
        src={link}
        title={title}
        frameBorder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
