import React, { Component, useContext } from "react";

import axios from "axios";

interface IParams {
  fileList: object[];
  content?: string;
  info?: {
    [key: string]: any;
  };
}

const defaultValue = {
  //   info: {},
  //   changeInfo: (value) => {
  //     this.setState({});
  //   },
};

const GlobalContext = React.createContext(defaultValue);
// 第一个参数是props传参，第二个是state参数
export default class List extends Component<any, IParams> {
  constructor(props: IParams) {
    super(props);
    this.state = {
      fileList: [],
      info: {},
    };
    // this.init();
  }
  render() {
    // const context = useContext(GlobalContext)
    return (
      <GlobalContext.Provider
        value={{
          info: this.state.info,
          changeInfo: (value: any) => {
            this.setState({
              info: value,
            });
          },
        }}
      >
        <div id="myname">
          {this.state.fileList.map((item: object, index: number) => (
            <FileItem info={item} key={index}></FileItem>
          ))}
          <FileDetail></FileDetail>
        </div>
      </GlobalContext.Provider>
    );
  }
  // 第一次将要挂载(拿不到dom)
  // UNSAFE_componentWillMount() {
  //   this.init();
  //   console.log(1, document.getElementById("myname"));
  // }
  // 第一次已经挂载
  componentDidMount() {
    console.log(1, document.getElementById("myname"));
    this.init();
  }
  init = () => {
    axios
      .get("https://api.loveverse.top/findExcerpt")
      .then((res) => {
        this.setState({
          fileList: res.data.data,
        });
        // console.log(this.state.fileList)
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
      <GlobalContext.Consumer>
        {(value: any) => {
          return (
            <div
              style={fileItem}
              onClick={() => {
                // 没点一次就会把更新的生命周期走一遍
                value.changeInfo(this.props.info);
                // value.info = this.props.info;
                // console.log(this.props.info);
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
            </div>
          );
        }}
      </GlobalContext.Consumer>
    );
  }
  // nextState是新的状态
  shouldComponentUpdate(
    nextProps: Readonly<any>,
    nextState: Readonly<any>,
    nextContext: any
  ): boolean {
    if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
      return true;
    }

    // 老的状态不等于新的状态返回true：应该更新
    // 老的状态等于新的状态返回false：阻止更新
    console.log("是否更新");
    return false;
  }
  // 拿到的还是没更新的值（不能修改属性和状态）
  UNSAFE_componentWillUpdate(
    nextProps: Readonly<any>,
    nextState: Readonly<any>,
    nextContext: any
  ): void {
    console.log(2);
  }
  // 拿到的是更新后的值
  componentDidUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<any>,
    snapshot?: any
  ): void {
    // 更新后，想要获取dom节点
    console.log(1);
  }
}

class FileDetail extends Component<any, any> {
  constructor(props: any) {
    super(props);
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
      <GlobalContext.Consumer>
        {(value: any) => {
          return (
            <div className="file_detail" style={fileDetail}>
              {value.info.content}
              <Child>
                <div>插槽1</div>
                <div>插槽2</div>
                <div>插槽3</div>
              </Child>
            </div>
          );
        }}
      </GlobalContext.Consumer>
    );
  }
}

class Child extends Component<any, any> {
  render() {
    return (
      <div>
        context
        {/* 留三个插槽，渲染三遍 */}
        {this.props.children[0]}
        {this.props.children[1]}
        {this.props.children[2]}
      </div>
    );
  }
}
