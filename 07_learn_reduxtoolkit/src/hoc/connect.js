
// 参数一：函数
// 参数二：函数

import { PureComponent } from "react";
import { StoreContext } from "./storeContext";
// 返回值:高阶组件
export function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrapperComponents) {
    class NewComponent extends PureComponent {
      constructor(props, context) {
        super(props)
        this.state = mapStateToProps(context.getState())
      }
      componentDidMount() {
        this.unSubscribe = this.context.subscribe(() => {
          this.setState(mapStateToProps(this.context.getState()))
        })
      }
      componentWillUnmount() {
        this.unSubscribe()
      }
      render() {
        const stateObj = mapStateToProps(this.context.getState())
        const dispatchObj = mapDispatchToProps(this.context.dispatch)
        return <WrapperComponents {...this.props} {...stateObj} {...dispatchObj} />
      }
    }
    NewComponent.contextType = StoreContext
    return NewComponent
  }
}