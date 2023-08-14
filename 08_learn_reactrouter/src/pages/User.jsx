import React, { PureComponent } from "react";
import { withRouter } from "../hoc";

export class User extends PureComponent {
  render() {
    const { query } = this.props.router;
    return (
      <div>
        <h1>{query.name}</h1>
        <h1>{query.age}</h1>
      </div>
    );
  }
}

export default withRouter(User);
