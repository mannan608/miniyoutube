import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideo } from "../features/video/VideoSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../component/VideoPlayer";
import VideoDesc from "../component/VideoDesc";
import RaletedVideo from "../component/RaletedVideo";

const VideoDetails = () => {
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );
  const dispatch = useDispatch();
  const { videoId } = useParams();

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);
  const { id, link, title, tags } = video || {};

  let content = null;
  if (isLoading) {
    content = <p>Loading</p>;
  }
  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && !video?.id) {
    content = <p>No Video Found</p>;
  }
  if (!isLoading && !isError && video?.id) {
    content = (
      <div className="row">
        <div className="col-8">
          <div className=" d-flex flex-column gap-3">
            <VideoPlayer link={link} title={title} />
            <VideoDesc video={video} />
          </div>
        </div>
        <div className="col-4">
          <RaletedVideo currentVideoId={id} tags={tags} />
        </div>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="videodetails mt-4">{content}</div>
    </div>
  );
};

export default VideoDetails;
