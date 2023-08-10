
// 对每次派发的action进行拦截，进行日志打印
function log(store) {
    const next = store.dispatch
    function logAndDispatch(action) {
        console.log('当前派发的aciton', action)
        // 真正派发的代码：使用之前的disspatch
        next(action)
        console.log("派发之后的结果", store.getState())
    }
    // monkey patch:猴补丁=>篡改现有的代码，对整体的执行逻辑进行修改
    store.dispatch = logAndDispatch
}

export { log }