import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../features/relatedvideos/RelatedVideosSlice";
import SingleRelatedVideo from "./SingleRelatedVideo";

const RaletedVideo = ({ currentvideoid, tags }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentvideoid }));
  }, [dispatch, tags, currentvideoid]);

  const { relatedvideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedvideos
  );

  let content = null;
  if (isLoading) {
    content = <p>Loading</p>;
  }
  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && relatedvideos?.length === 0) {
    content = <p>No Video Found</p>;
  }
  if (!isLoading && !isError && relatedvideos?.length > 0) {
    content = relatedvideos.map((video) => (
      <SingleRelatedVideo key={video.id} video={video} />
    ));
  }

  return <div className="d-flex flex-column gap-4">{content}</div>;
};

export default RaletedVideo;
