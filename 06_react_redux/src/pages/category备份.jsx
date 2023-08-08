import React, { PureComponent } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { changeBannerAction, changeRecommandAction } from "../store/actionCreators";
export class category extends PureComponent {
  componentDidMount() {
    const { changeBanner, changeRecomend } = this.props;
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const banner = res.data.data.banner.list;
      const recomend = res.data.data.recommend.list;
      changeBanner(banner);
      changeRecomend(recomend);
      console.log(banner, recomend);
    });
  }
  render() {
    return (
      <div>
        <h2>category</h2>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  changeBanner: (banner) => dispatch(changeBannerAction(banner)),
  changeRecomend: (recomend) => dispatch(changeRecommandAction(recomend)),
});
export default connect(null, mapDispatchToProps)(category);
