import React from "react";
import { Link } from "react-router-dom";

const SingleRelatedVideo = ({ video }) => {
  const { id, title, author, views, thumbnail, date, duration } = video || {};
  return (
    <div className="raleted-video d-flex gap-4">
      <div className="video-img w-50 position-relative">
        <Link to={`/videos/${id}`}>
          <img src={thumbnail} alt={title} className="w-auto h-auto" />
        </Link>
        <p className="duration">{duration}</p>
      </div>

      <div className="video-content w-50 d-flex flex-column gap-2">
        <Link to={`/videos/${id}`}>
          <p>{title}</p>
        </Link>
        <Link to={`/videos/${id}`}>
          <p>{author}</p>
        </Link>
        <p>
          {views} views {date}
        </p>
      </div>
    </div>
  );
};

export default SingleRelatedVideo;
