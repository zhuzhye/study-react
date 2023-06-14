import  { Component } from 'react'

export class App extends Component {
  constructor(){
    super()
    this.state={
      message:'App Commponts'
    }
  }
  render() {
    const {message}=this.state
    return (
      // 1.react元素：通过jsx编写的代码就会编译成React.createElement,所以返回的就是一个react元素
      <h2>{message}</h2>
      // 2.组件或者fragments
      //  ['abc','cab','ss']
      // [<h1>哈哈哈</h1>,<h2>ssss </h2>]
      // 3.字符串/数字类型
      //  'hello word'
      // 4.undefind 布尔 返回为空
      // true
    )
  }
}

export default App