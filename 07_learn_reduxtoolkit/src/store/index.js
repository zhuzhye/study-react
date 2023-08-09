import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/conter'
import homeReducer from './features/home'
const store = configureStore({
    reducer: {
        counter: counterReducer,
        home: homeReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
})
export default store