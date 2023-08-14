import React, { PureComponent } from "react";
import { withRouter } from "../hoc";

export class HomeSongMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      songMenu: [
        { id: 111, name: "华语新歌榜" },
        { id: 112, name: "古典音乐" },
        { id: 113, name: "民谣歌曲" },
      ],
    };
  }
  navigateTo(id) {
    console.log(this.props.router);
    const { navigate } = this.props.router;
    navigate("/detail/" + id);
  }
  render() {
    const { songMenu } = this.state;
    return (
      <div>
        <h2>Home Song Menu</h2>
        <ul>
          {songMenu.map((item) => {
            return (
              <li key={item.id} onClick={(e) => this.navigateTo(item.id)}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(HomeSongMenu);
