import { PureComponent } from "react";

function enhancedUserInfo(OriginComponent) {
    class NewComponent extends PureComponent {
        constructor() {
            super()
            this.state = {
                userInfo: {
                    name: "zzy",
                    age: 99,
                },
            };
        }
        render() {
            return <OriginComponent {...this.props} {...this.state.userInfo} />
        }
    }
    return NewComponent;
}
export default enhancedUserInfo