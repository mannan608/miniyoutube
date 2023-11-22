import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./TagsApi";

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchTags = createAsyncThunk("videos/fetchTags", async () => {
  const tags = await getTags();
  return tags;
});

const TagsSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default TagsSlice.reducer;
