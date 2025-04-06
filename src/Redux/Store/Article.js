import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getArticleFromServer = createAsyncThunk(
  "article/getArticleFromServer",
  async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
);
export const RemoveArticle = createAsyncThunk("article/removeArticle", async (id) => {
  const response = await fetch(
    `https://redux-cms.iran.liara.run/api/articles/${id}`,
    {
      method: "DELETE",
    }
  );
  const data = await response.json();

  return data;
});

const slice = createSlice({
  name: "article",
  initialState: [],

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getArticleFromServer.fulfilled, (state, action) => {
      console.log(action);

      return action.payload;
    });
     builder.addCase(RemoveArticle.fulfilled, (state, action) => {
          const newArticle = state.filter((article) => article._id !== action.payload.id);
    
          return newArticle;
        });
  },
});

export default slice.reducer;
