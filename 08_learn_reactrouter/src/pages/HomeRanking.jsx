import React, { PureComponent } from "react";

export class HomeRanking extends PureComponent {
  constructor() {
    super();
    this.state = {
      rankingData: [],
    };
  }
  render() {
    return (
      <div>
        <h2>Ranking Nav</h2>
        <h2>榜单的数据</h2>
        <ul>
          <li>"歌曲数据"</li>
          <li>"歌曲数据"</li>
          <li>"歌曲数据"</li>
          <li>"歌曲数据"</li>
          <li>"歌曲数据"</li>
        </ul>
      </div>
    );
  }
}

export default HomeRanking;
