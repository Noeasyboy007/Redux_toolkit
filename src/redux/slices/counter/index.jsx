import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    initialState: 0,
    name: 'counter',
    reducers: {
        incriment: (state) => state + 1,
        decrement: (state) => state - 1,
    }
})

export const { incriment, decrement } = counterSlice.actions;

export default counterSlice.reducer;