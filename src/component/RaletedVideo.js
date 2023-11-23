import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../features/relatedvideos/RelatedVideosSlice";
import SingleRelatedVideo from "./SingleRelatedVideo";

const RaletedVideo = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedvideos
  );

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);

  let content = null;
  if (isLoading) {
    content = <p>Loading</p>;
  }
  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && relatedVideos?.length === 0) {
    content = <p>No Video Found</p>;
  }
  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => (
      <SingleRelatedVideo key={video.id} video={video} />
    ));
  }

  return <div className="d-flex flex-column gap-4">{content}</div>;
  // {relatedVideos.map((video) => {
  //   return <SingleRelatedVideo key={video.id} video={video} />;
  // })}
};

export default RaletedVideo;
