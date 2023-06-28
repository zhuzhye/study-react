import React, { Component } from 'react'
import ThemeContext from './context/theme-context';
import { UserContext, aa } from './context/user-context';
export class HomeInfo extends Component {
  render() {
    console.log(aa);
    return (
      <div>
        <h2>HomeInfo:{this.context.color}</h2>
        <UserContext.Consumer>
          {value => {
            return <h2> Info:User:{value.nickname}</h2>
          }}
        </UserContext.Consumer>
      </div>
    )
  }
}
HomeInfo.contextType = ThemeContext
export default HomeInfo