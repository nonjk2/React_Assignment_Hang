import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  nickname: string;
}

const initialState: UserState = {
  id: "최은석",
  nickname: "최은석",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userSet: (state, action: PayloadAction<UserState>) => {
      const { id, nickname } = action.payload;
      state.id = id;
      state.nickname = nickname;
    },
  },
  extraReducers: () => {},
});
export const { userSet } = userSlice.actions;
export default userSlice.reducer;
