function applyMiddleware(store, ...args) {
    args.forEach(fn => {
        fn(store)
    })
}
export default applyMiddleware;