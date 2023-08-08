import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"
import counterReducer from "./counter"
import homeReducer from "./home"
import UserReducer from "./user"
// 将两个redcuer合并
const reducer = combineReducers({
    counter: counterReducer,
    home: homeReducer,
    user: UserReducer
})
// 正常情况下 store.dispatch(object)
// 想要派发函数：store.dispatch(function) redux-thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
export default store