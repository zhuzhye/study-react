const { CHANGE_NAME, CHANGE_AGE } = require('./constants')
// 初始化函数
const initialState = {
  name: 'zzy',
  age: 19
}
// 定义reducer 函数:纯函数
// 两个参数
// 参数1：store中目前保存的state
// 参数2：action本次需要更新的数据（dispatch传递过来的）
// 返回值：返回值作为store之后储存的state

function reducer(state = initialState, action) {
  // console.log('reducer', state, action)
  // 如果有数据进行更新的时候，那么返回一个新的state

  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name
      }
    case CHANGE_AGE:
      return {
        ...state,
        age: action.age
      }
    default:
      return state
  }
}

module.exports = reducer 