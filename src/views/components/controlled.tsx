import React, { Component } from "react";
import axios from "axios";
export default class Controlled extends Component {
  state = {
    iptContent: "",
    list: [],
  };

  render() {
    return (
      <div>
        {/* 受控组件 */}
        <p>{this.state.iptContent}</p>
        <input
          type="text"
          value={this.state.iptContent}
          onChange={(evt) => {
            this.setState({
              iptContent: evt.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            console.log("[ this.state.iptContent ] >", this.state.iptContent);
          }}
        >
          登录
        </button>
        <button onClick={this.getList}>获取数据</button>
      </div>
    );
  }
  getList = () => {
    axios
      .get("http://1.15.42.9:40001/findExcerpt")
      .then((res) => {
        this.setState({
          list: res.data,
        });
        console.log("[ res ] >", this.state);
      })
      .catch((e) => {
        console.log("[ e ] >", e);
      });
  };
}
