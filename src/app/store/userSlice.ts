// store/userSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user/fetch",
  async () => {
    // simulate async delay
    await new Promise(resolve => setTimeout(resolve, 150));
    return { name: "John" };
  }
);

interface UserState {
  loading: boolean;
  name: string | null;
}

const initialState: UserState = {
  loading: false,
  name: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.name = action.payload.name;
      });
  },
});

export default userSlice.reducer;
