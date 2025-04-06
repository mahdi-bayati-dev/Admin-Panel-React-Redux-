import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Store/Users.js";
import CoursesReducer from "./Store/Courses.js";
import ArticleReducer from "./Store/Article.js";

export default configureStore({
  reducer: {
    users: userReducer,
    courses: CoursesReducer,
    article: ArticleReducer
  },
});
