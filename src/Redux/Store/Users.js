import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersFromServer = createAsyncThunk(
  "users/getUsersFromServer",
  async () => {
    const response = await fetch("https://redux-cms.iran.liara.run/api/users/");
    const data = await response.json();

    return data;
  }
);

export const RemoveUser = createAsyncThunk("users/removeUser", async (id) => {
  const response = await fetch(
    `https://redux-cms.iran.liara.run/api/users/${id}`,
    {
      method: "DELETE",
    }
  );
  const data = await response.json();

  return data;
});

const slice = createSlice({
  name: "users",
  initialState: [],

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getUsersFromServer.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(RemoveUser.fulfilled, (state, action) => {
      const newUser = state.filter((user) => user._id !== action.payload.id);

      return newUser;
    });
  },
});

export default slice.reducer;
