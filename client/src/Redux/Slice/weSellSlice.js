import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchWeSell = createAsyncThunk("fetchWeSell", async () => {
  const response = await fetch(
    `${process.env.VITE_APP_URL}v1/customer/search-vehicle`
  );
  return response.json();
});

const weSellSlice = createSlice({
  name: "we_sell",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchWeSell.pending, (state, action) => {
        state.isLoading = true;
    });
    builder.addCase(fetchWeSell.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
    });
    builder.addCase(fetchWeSell.rejected, (state, action) => {
        state.isLoading = true;
    });
  },
});

export default weSellSlice.reducer;
