import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 999,
        message: 'helloWorld'
    },
    reducers: {
        addNumber(state, actions) {
            console.log(actions);
            state.counter = state.counter + actions.payload
        },
        subNumber(state, actions) {
            console.log(actions);
            state.counter = state.counter - actions.payload
        },
        changeMessage(state, actions) {
            console.log(actions);
            state.message = actions.payload
        }
    }

})

export const { addNumber, subNumber, changeMessage } = counterSlice.actions
export default counterSlice.reducer