import React, { PureComponent } from "react";
import { Navigate } from "react-router-dom";

export class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
    };
  }
  Login() {
    this.setState({
      isLogin: true,
    });
  }
  render() {
    const { isLogin } = this.state;

    return <div>{isLogin ? <Navigate to="/home"></Navigate> : <button onClick={(e) => this.Login()}>登录</button>}</div>;
  }
}

export default Login;
