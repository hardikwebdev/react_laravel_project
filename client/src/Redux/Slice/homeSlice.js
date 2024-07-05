import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchHome = createAsyncThunk("fetchHome", async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users`
  );
  return response.json();
});

const homeSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchHome.pending, (state, action) => {
        state.isLoading = true;
    });
    builder.addCase(fetchHome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
    });
    builder.addCase(fetchHome.rejected, (state, action) => {
        state.isLoading = true;
    });
  },
});

export default homeSlice.reducer;
