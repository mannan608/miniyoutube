import { Link } from "react-router-dom";

const SingleVideo = ({ video = {} }) => {
  const { id, title, author, avatar, views, thumbnail, date } = video;
  return (
    <div className="col-lg-3 col-md-4">
      <Link to={`videos/${id}`}>
        <div className="card">
          <img src={thumbnail} className="card-img-top" alt={title} />
          <div className="card-body">
            <div className="d-flex  gap-2">
              <img src={avatar} alt={author} />
              <div>
                <p className="card-title">{title}</p>
                <div className="author">
                  <p>{author}</p>
                  <div className="d-flex gap-4 ">
                    <p> {views} Views</p>
                    <p> {date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleVideo;
