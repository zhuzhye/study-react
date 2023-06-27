import React, { Component } from 'react'

export class Home extends Component {
  render() {
    const { name, age } = this.props
    return (
      <div>{name + '-' + age}</div>
    )
  }
}

export default Home