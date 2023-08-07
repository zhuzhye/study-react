import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      titleSize: 30
    }
  }
  addTitleSize() {
    this.setState({
      titleSize: this.state.titleSize + 10
    })
  }
  render() {
    const { titleSize } = this.state
    return (
      <div>
        <button onClick={e => this.addTitleSize()}>添加titleSize </button>
        <h2 style={{ color: 'red' }} > 我是标题</h2>
        <h2 style={{ color: 'blue', fontSize: titleSize }}> 我是内容</h2>
      </div>
    )
  }
}

export default App