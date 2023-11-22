import React from "react";

const VideoDesc = ({ video }) => {
  const { title, date } = video;
  return (
    <div className="video-description">
      <div className="video-title">
        <p>{title}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>{date}</p>
        <div className="d-flex gap-3">
          <p>Like</p>
          <p>UnLike</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDesc;
