import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TypingTestState = {
  results: {
    errors: number;
    wpm: number;
  } | null;
};

const initialState: TypingTestState = {
  results: null,
};

export const typingTestSlice = createSlice({
  name: 'typingTest',
  initialState,
  reducers: {
    setResults: (state, action: PayloadAction<TypingTestState['results']>) => {
      state.results = action.payload;
    },
  },
});

export const { setResults } = typingTestSlice.actions;
export default typingTestSlice.reducer;
