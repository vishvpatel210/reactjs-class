import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import usersReducer from "../features/usersSlice";
import postsReducer from "../features/postsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
    posts: postsReducer,
  },
});
