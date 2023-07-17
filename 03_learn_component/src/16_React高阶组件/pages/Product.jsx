import React, { PureComponent } from "react";
import WithTheme from "../hoc/with_theme";

// export class Product extends PureComponent {
//   render() {
//     return (
//       <div>
//         <ThemeContext.Consumer>
//           {(value) => {
//             const { color, size } = value;
//             return (
//               <h2>
//                 {" "}
//                 thme:{color}-{size}
//               </h2>
//             );
//           }}
//         </ThemeContext.Consumer>
//       </div>
//     );
//   }
// }
export class Product extends PureComponent {
  render() {
    const { color, size } = this.props;
    return (
      <div>
        product:{color}--{size}
      </div>
    );
  }
}
export default WithTheme(Product);
