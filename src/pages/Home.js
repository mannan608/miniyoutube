import React, { useEffect } from "react";
import SingleVideo from "../component/singlevideo/SingleVideo";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../features/videos/VideosSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  let content;
  if (isLoading) {
    content = <p>Loading</p>;
  }
  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && videos?.length === 0) {
    content = <p>No Video Found</p>;
  }
  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => (
      <SingleVideo key={video.id} video={video} />
    ));
  }
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="taglist mb-4 d-flex gap-3 mt-4">
          <div className="tag">CSS</div>
          <div className="tag">HTML</div>
        </div>
        <div className="row home">{content}</div>
      </div>
    </div>
  );
};

export default Home;
