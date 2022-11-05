import React, { Component } from "react";

export default class ClassDemo extends Component {
  state = {
    text: "收藏",
  };
  render() {
    return (
      <div>
        <h2>{this.state.text}</h2>
        <button onClick={() => {
          this.setState({
            text: "取消收藏"
          })
        }}>修改</button>
      </div>
    );
  }
}
