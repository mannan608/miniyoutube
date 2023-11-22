import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/VideosSlice";
import videoReducer from "../features/video/VideoSlice";
import tagsReducer from "../features/tags/TagsSlice";
import RelatedReducer from "../features/relatedvideos/RelatedVideosSlice";
import filterReducer from "../features/filter/FilterSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedvideos: RelatedReducer,
    filter: filterReducer,
  },
});
