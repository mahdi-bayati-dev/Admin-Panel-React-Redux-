import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCoursesFromServer = createAsyncThunk(
  "Courses/getCoursesFromServer",
  async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
);

export const RemoveCourses = createAsyncThunk(
  "article/removeCourses",
  async (id) => {
    const response = await fetch(
      `https://redux-cms.iran.liara.run/api/Courses/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();

    return data;
  }
);

const slice = createSlice({
  name: "Courses",
  initialState: [],

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCoursesFromServer.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(RemoveCourses.fulfilled, (state, action) => {
      const newCourses = state.filter(
        (courses) => courses._id !== action.payload.id
      );

      return newCourses;
    });
  },
});

export default slice.reducer;
