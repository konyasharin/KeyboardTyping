import { configureStore } from '@reduxjs/toolkit';
import typingTestReducer from './slices/typingTestSlice.ts';

export const store = configureStore({
  reducer: {
    typingTest: typingTestReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
