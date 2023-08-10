function thunk(store) {
    const next = store.dispatch
    function dispatchThunk(action) {
        // 如果是函数，执行一下
        if (typeof action === 'function') {
            action(store.dispatch, store.getState)
        } else {
            next(action)
        }
    }
    store.dispatch = dispatchThunk
}
export { thunk }