/**
 * redux代码优化
 * 1.将派发的aciton生成的过程放置到actionCreators函数中
 * 2.将定义的所有actionCreators的函数，放到一个独立的文件中：actionCreators.js
 * 3.actionCreators和reducer函数中使用字符串常量是一致的，所以常量抽到一个独立的constants的文件中
 * 4.将reducer和默认值（initialState）放到独立的reducer.js文件中
 */

const store = require('./store')
const { changeNameAction, addAgeAction } = require('./store/actionCreators')
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('订阅数据的变化', store.getState())
})

// actionCreators:帮助创建aciton

// 修改store中的数据:必须action

store.dispatch(changeNameAction('kobe'))

store.dispatch(changeNameAction('李磊'))

store.dispatch(addAgeAction(50))
//  取消订阅
unsubscribe() 