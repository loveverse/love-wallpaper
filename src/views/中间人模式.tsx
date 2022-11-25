import axios from "axios";
import React, { Component } from "react";

interface IParams {
  fileList: object[];
  content: string;
}
// 第一个参数是props传参，第二个是state参数
export default class List extends Component<any, IParams> {
  constructor(props: IParams) {
    super(props);
    this.state = {
      fileList: [],
      content: "",
    };
    axios
      .get("http://1.15.42.9:40002/find")
      .then((res) => {
        this.setState({
          fileList: res.data,
        });
        // console.log("[ res ] >", res.data);
      })
      .catch((error) => {
        console.log("[ error ] >", error);
      });
  }
  render() {
    return (
      <div>
        {this.state.fileList.map((item: object) => (
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
        ))}
        <FileDetail content={this.state.content}></FileDetail>
      </div>
    );
  }
}

class FileItem extends Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div
        onClick={() => {
          // console.log("[ this.props.id ] >", this.props.id);
          this.props.onEvent(this.props.content);
        }}
      >
        {this.props.content}
      </div>
    );
  }
}

class FileDetail extends Component<any> {
  constructor(props:any){
    super(props)
  }
  render() {
    const fileDetail: any = {
      width: "200px",
      height: "200px",
      position: "fixed",
      background: "yellow",
      top: 0,
      right: 0,
    };
    return (
      <div className="file_detail" style={fileDetail}>
        {this.props.content}
      </div>
    );
  }
}
