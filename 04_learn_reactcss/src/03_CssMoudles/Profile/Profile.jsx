import React, { PureComponent } from "react";
import profileStyle from "./Profile.module.css";
export class Profile extends PureComponent {
  render() {
    return <div className={profileStyle.section}>Profile</div>;
  }
}

export default Profile;
