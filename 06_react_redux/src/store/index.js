// applyMiddleware, compose
import { createStore, combineReducers, } from "redux"
// import thunk from "redux-thunk"
import counterReducer from "./counter"
import homeReducer from "./home"
import UserReducer from "./user"
import { log, thunk, applyMiddleware } from "../middleware"
// 将两个redcuer合并
const reducer = combineReducers({
    counter: counterReducer,
    home: homeReducer,
    user: UserReducer
})

// combineReducers的简单实现
// function reducer(state = {}, action) {
//     //返回一个对象，store的state
//     return {
//         counter: counterReducer(state.counter, action),
//         home: homeReducer(state.home, action),
//         user: UserReducer(state.user, action)
//     }
// }

// 正常情况下 store.dispatch(object)
// 想要派发函数：store.dispatch(function) redux-thunk
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

const store = createStore(reducer)
applyMiddleware(store, log, thunk)
export default store