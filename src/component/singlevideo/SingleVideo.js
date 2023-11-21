import React from "react";
import { Link } from "react-router-dom";

const SingleVideo = ({ video }) => {
  const { id, title, author, avatar, duration, views, thumbnail } = video || {};
  return (
    <div className="col-lg-3 col-md-4">
      <Link to={`videos/${id}`}>
        <div className="card">
          <img src={thumbnail} className="card-img-top" alt={title} />
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <div className="d-flex justify-content-between align-items-center">
              <div className="author d-flex gap-2 align-items-center">
                <img src={avatar} alt={author} />
                <p>{author}</p>
              </div>
              <div className="d-flex gap-2">
                <p>Duration {duration}</p>
                <p> Views{views}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleVideo;
