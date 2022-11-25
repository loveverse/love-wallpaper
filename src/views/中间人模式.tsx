import axios from "axios";
import React, { Component, ReactNode, useDebugValue } from "react";

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
    // this.init();
    console.log("[ 222 ] >", 222);
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
  componentDidMount() {
    this.init();
  }
  init = () => {
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
  };
}

const defaultValue = 1;
const MyContext = React.createContext(defaultValue);
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
        <MyContext.Provider value={defaultValue}></MyContext.Provider>
        中间人模式
        <Item
          name="2"
          age={5}
          data={this.state.info}
          mutitle={this.state.mutitle}
        ></Item>
      </div>
    );
  }
}

class FileDetail extends Component<any> {
  constructor(props: any) {
    super(props);
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
interface Iprops {
  name?: string;
  age?: number;
}
type myType = string | number;
interface Idata extends Iprops {
  type?: number;
  data: {
    [key: string]: any;
  };
  mutitle: {
    weight: number;
  };
  readonly list?: myType[];
}

// 是函数式组件在ts使用的一个泛型 (props: Iprops)
const Item: React.FC<Idata> = ({ name, age, data, mutitle }: Idata) => {
  // const handleName = (event: React.MouseEventHandler<HTMLButtonElement>) => {
  //   console.log(event.target.innerText);

  //   // event.preventDefault()
  // };
  const handleName: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log((event.target as HTMLElement).innerText);

    // event.preventDefault()
  };
  return (
    <div>
      <span onClick={handleName}>姓名： {name}</span>
      <span>年龄： {age}</span>
      <span>性别：{data.sex}</span>
      <span>体重：{mutitle.weight}</span>
    </div>
  );
};

const reducer: React.Reducer<any, any> = (state, action) => {
  const { type, data } = action;
};

// 不确定的输入，输出函数
function uncertain<T>(arg: T): T {
  return arg;
}
