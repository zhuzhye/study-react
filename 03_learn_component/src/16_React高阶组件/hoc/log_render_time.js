import { PureComponent } from "react";

function logRenderTime(OriginComponent) {
    return class extends PureComponent {
        UNSAFE_componentWillMount() {
            this.beginTime = new Date().getTime();
        }
        componentDidMount() {
            this.endTime = new Date().getTime();
            console.log(this.endTime - this.beginTime);
        }
        render() {
            return <OriginComponent></OriginComponent>
        }
    }
}

export default logRenderTime