import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/VideosSlice";
import tagsReducer from "../features/tags/TagsSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
  },
});
