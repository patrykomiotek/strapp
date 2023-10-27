import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface PostsState {
  total: number;
}

// Define the initial state using that type
const initialState: PostsState = {
  total: 0,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // addNumber: (state, action) => {
    //   state.list = action.payload;
    // }
    addNumber: (state, action: PayloadAction<number>) => {
      state.total += action.payload;
    },
  },
});

// addNumber = () => ({ type: 'posts/addNumber', payload? })

export const { addNumber } = postsSlice.actions;
export const reducer = postsSlice.reducer;
