import { createSlice } from "@reduxjs/toolkit"

const counterSilce = createSlice({
    name: "counter",
    initialState: {
        counter: 999
    },
    reducers: {
        addNumber(state, { payload }) {
            state.counter = state.counter + payload
        },
        subNumber(state, { payload }) {
            state.counter = state.counter - payload
        },
    }
})
export const { addNumber, subNumber } = counterSilce.actions
export default counterSilce.reducer