import React, { PureComponent, Fragment } from 'react'

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      section: [
        { id: 1, name: 'zzy1', age: 18 },
        { id: 2, name: 'zzy2', age: 130 },
        { id: 3, name: 'zzy3', age: 120 },
      ]
    }
  }
  render() {
    const { section } = this.state;
    return (
      <>
        <h1>App H1</h1>
        <h2>App H2</h2>
        {
          section.map(item => {
            return (
              <Fragment key={item.id}>
                <h2>{item.name}</h2>
              </Fragment>
            )
          })
        }
      </>
    )
  }
}

export default App