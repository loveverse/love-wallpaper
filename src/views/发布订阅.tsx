import React, { Component } from "react";

export default class PubSub extends Component {
  render() {
    return <div></div>;
  }
}
const bus: any = {
  list: [],
  // 订阅
  subscribe(callback: any) {
    // callback();
    this.list.push(callback);
    console.log("[ 订阅者 ] >");
  },
  // 发布
  publish() {
    // 遍历所有list，将回调函数执行
    this.list.forEach((callback: any) => {
      callback && callback();
    });
    console.log("发布者");
  },
};
bus.subscribe(() => {
  console.log("[ 订阅消息 ] >");
});
bus.subscribe(() => {
  console.log("[ 订阅消息2 ] >");
});
// 发布者  
setTimeout(() => {
  bus.publish();
}, 0);
