import axios from "axios";
import React, { Component } from "react";

interface IParams {
  fileList: object[];
}
// 第一个参数是props传参，第二个是state参数
export default class List extends Component<any,IParams> {
  constructor(props: IParams) {
    super(props);
    this.state = {
      fileList: [],
    };
    console.log("[ 222 ] >", 222);
    axios
      .get("http://1.15.42.9:40002/find")
      .then((res) => {
        this.setState({
          fileList: res.data,
        });
        console.log("[ res ] >", res.data);
      })
      .catch((error) => {
        console.log("[ error ] >", error);
      });
  }
  render() {
    return (
      <div>
        {this.state.fileList.map((item: object, index: number) => (
          <FileItem info={item} key={index}></FileItem>
        ))}
      </div>
    );
  }
}

class FileItem extends Component<any> {
  constructor(props:any){
    super(props)
  }
  render() {
    return <div>中间人模式</div>;
  }
}
