import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App H1</h1>
        {createPortal(<h2>App H2</h2>, document.querySelector("#zzy"))}
        <Modal>
          <h1>标题</h1>
          <h1>xxxxx</h1>
        </Modal>
      </div>

    );
  }
}

export default App;
