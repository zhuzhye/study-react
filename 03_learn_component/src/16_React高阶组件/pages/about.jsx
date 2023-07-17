import { PureComponent } from "react";
import enhancedUserInfo from "../hoc/enhanced_props";
export class About extends PureComponent {
  render() {
    return <div>About:{this.props.age}</div>;
  }
}

export default enhancedUserInfo(About);
