import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./RelatedVideosApi";

const initialState = {
  relatedvideos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchRelatedVideos = createAsyncThunk(
  "relatedvideos/fetchRelatedVideos",
  async ({ tags, id }) => {
    const relatedvideos = await getRelatedVideos({ tags, id });
    return relatedvideos;
  }
);

const RelatedVideosSlice = createSlice({
  name: "relatedvideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedvideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedvideos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default RelatedVideosSlice.reducer;
