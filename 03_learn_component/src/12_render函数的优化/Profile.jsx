import { memo } from "react";
const Profile = memo(function Profile(props) {
  console.log("ProFile Render");
  return <h2> ProFile:{props.message}</h2>;
});
export default Profile;
