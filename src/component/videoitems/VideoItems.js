import React, { useEffect } from "react";
import SingleVideo from "../singlevideo/SingleVideo";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/VideosSlice";

const VideoItems = () => {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );

  const { tags, search } = useSelector((state) => state.filter);
  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, tags, search]);
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
  return <div className="row home">{content}</div>;
};

export default VideoItems;
