const store = require('./store')
store.subscribe(() => {
  console.log('订阅数据的变化', store.getState())
})
const { changeNameAction } = require('./store/actionCreators')
store.dispatch(changeNameAction('curry'))
