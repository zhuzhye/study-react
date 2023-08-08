const store = require('./store')
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('订阅数据的变化', store.getState())
})
// 修改store中的数据:必须action

store.dispatch({ type: "change_name", name: 'kobe' })

store.dispatch({ type: "change_name", name: "lilei" })

store.dispatch({ type: "change_age", age: 20 })
//  取消订阅
unsubscribe()