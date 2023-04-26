import React, { Component } from "react";

// export default class PubSub extends Component {
//   render() {
//     return <div></div>;
//   }
// }
const bus: any = {
  list: [],
  // 订阅
  subscribe(callback: any) {
    // callback();
    this.list.push(callback);
    console.log("[ 订阅者 ] >");
  },
  // 发布
  publish(value: any) {
    // 遍历所有list，将回调函数执行
    this.list.forEach((callback: any) => {
      callback && callback(value);
    });
    console.log("发布者");
  },
};
// bus.subscribe(() => {
//   console.log("[ 订阅消息 ] >");
// });
// bus.subscribe(() => {
//   console.log("[ 订阅消息2 ] >");
// });
// 发布者
// setTimeout(() => {
// bus.publish();
// }, 0);

import axios from "axios";

interface IParams {
  fileList: object[];
  content?: string;
}

// 第一个参数是props传参，第二个是state参数
export default class List extends Component<any, IParams> {
  constructor(props: IParams) {
    super(props);
    this.state = {
      fileList: [],
    };
    // this.init();
  }
  render() {
    return (
      <div>
        {this.state.fileList.map((item: object, index: number) => (
          <FileItem info={item} key={index}/>
        ))}
        <FileDetail/>
      </div>
    );
  }
  componentDidMount() {
    this.init();
  }
  init = () => {
    axios
      .get("http://1.15.42.9:40001/findExcerpt")
      .then((res) => {
        this.setState({
          fileList: res.data,
        });
        // console.log("[ res ] >", res.data);
      })
      .catch((error) => {
        console.log("[ error ] >", error);
      });
  };
}
class FileItem extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      info: {
        sex: "男",
        score: 20,
      },
      mutitle: {
        weight: 100,
      },
    };
  }

  render() {
    const fileItem: any = {
      width: "600px",
      height: "50px",
      background: "yellow",
      overflow: "hidden",
      marginBottom: "10px",
    };
    return (
      <div
        style={fileItem}
        onClick={() => {
          console.log(this.props.info);

          bus.publish(this.props.info);
        }}
      >
        <p>{this.props.info.content}</p>
        <p>{this.props.info.author}</p>
        {/* {this.state.fileList.map((item: object) => (
          <FileItem
            {...item}
            key={item.id}
            onEvent={(value: string) => {
              // console.log("[ 父组件接收 ] >");
              this.setState({
                content: value,
              });
            }}
          ></FileItem>
        ))} */}

        {/* <MyContext.Provider value={defaultValue}></MyContext.Provider>
        中间人模式
        <Item
          name="2"
          age={5}
          data={this.state.info}
          mutitle={this.state.mutitle}
        ></Item> */}
      </div>
    );
  }
}

class FileDetail extends Component<any, any> {
  constructor(props: any) {
    super(props);
    // 订阅者
    this.state = {
      info: {},
    };
  }
  // 为什么这里知道我是订阅函数
  componentDidMount(): void {
    // 必须在钩子函数中订阅，不然会有警告
    bus.subscribe((value: any) => {
      // console.log("fileDetail订阅", value);
      // return;
      this.setState({
        info: value,
      });
    });
  }
  render() {
    const fileDetail: any = {
      width: "400px",
      height: "400px",
      position: "fixed",
      background: "yellow",
      top: 0,
      right: 0,
    };
    return (
      <div className="file_detail" style={fileDetail}>
        {this.state.info.content}
      </div>
    );
  }
}
