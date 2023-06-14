import React from 'react'
import HelloWord from './Commponents/HelloWord'
// 编写react代码,并且通过react渲染出对应的内容
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            message: 123
        }
    }
    render() {
        const { message } = this.state
        return (
            <div>
                <h2>{message}</h2>
                <HelloWord></HelloWord>
            </div>
        )
    }
}
export default App