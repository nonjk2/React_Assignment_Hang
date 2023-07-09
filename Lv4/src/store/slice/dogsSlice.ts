import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../types/post";
import { getMyDogs } from "../../api/Post";

interface PostsState {
  posts: Post[];
  status: "안에있음" | "로딩중" | "성공" | "실패";
  error: string | null | undefined;
}

const initialState: PostsState = {
  posts: [],
  status: "안에있음",
  error: null,
};

export const fetchMyDog = createAsyncThunk("posts/fetchMyDog", async (user: string) => {
  const response = await getMyDogs(user);
  return response;
});

export const mydogsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // 리듀서
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMyDog.pending, (state) => {
      state.status = "로딩중";
    });
    builder.addCase(fetchMyDog.fulfilled, (state, action) => {
      state.status = "성공";
      state.posts = action.payload;
    });
    builder.addCase(fetchMyDog.rejected, (state, action) => {
      state.status = "실패";
      state.error = action.error.message;
    });
  },
});

export default mydogsSlice.reducer;
