import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUser, fetchUserRepos } from "../api/userApi";
import type { User, Repo } from "./userTypes";

interface UserState {
  user: User | null;
  repos: Repo[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  repos: [],
  loading: false,
  error: null,
};

export const loadUser = createAsyncThunk<User, string>(
  "user/loadUser",
  async (username: string) => {
    return await fetchUser(username);
  }
);

export const loadRepos = createAsyncThunk<Repo[], string>(
  "user/loadRepos",
  async (username: string) => {
    return await fetchUserRepos(username);
  }
);

const userSlice = createSlice<UserState, {}, "user">({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.user = null;
        state.repos = [];
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loadUser.rejected, (state) => {
        state.loading = false;
        state.error = "User not found";
        state.user = null;
      })
      .addCase(loadRepos.fulfilled, (state, action) => {
        state.repos = action.payload;
      });
  },
});

export default userSlice.reducer;