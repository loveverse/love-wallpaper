import React, { Component } from "react";
import axios, { AxiosHeaders } from "axios";
import BetterScroll from "better-scroll";
export default class ClassDemo extends Component {
  state = {
    text: "收藏",
    myShow: true,
    name: "小红",
    list: new Array(5).fill(1),
    loveList: [],
  };

  constructor(props: any) {
    super(props);
    // this.state = {
    //   text: "收藏",
    //   myShow: true,
    //   name: "小红",
    //   list: [],
    //   loveList: [],
    // };
    interface IParams {
      cityId: number;
      pageNum: number;
      pageSize: number;
      type: number;
      k: number;
    }
    interface IConfig {
      a: string;
      ch: string;
      v: string;
      e: string;
      bc: string;
    }
    const obj: IParams = {
      cityId: 110100,
      pageNum: 1,
      pageSize: 10,
      type: 1,
      k: 3318736,
    };
    const conf: any = {
      a: "3000",
      ch: "1002",
      v: "5.2.1",
      e: "16676230384733784104632321",
      bc: "110100",
    };
    // axios
    //   .get("https://loveverse.top/api/findExcerpt")
    //   .then((res) => {
    //     this.setState({
    //       loveList: res.data,
    //     });
    //     console.log("[ res ] >", this.state);
    //   })
    //   .catch((e) => {
    //     console.log("[ e ] >", e);
    //   });
  }
  refNameRef = React.createRef<HTMLInputElement>();

  render() {
    // const aa: [] = this.state.list.map((item, index) => (
    //   <li key={index}>{item}</li>
    // ));
    return (
      <div>
        {/* <h2>{this.state.text}</h2>
        <button
          onClick={() => {
            this.setState({
              text: "取消收藏",
            });
          }}
        >
          修改
        </button>
        <h3>{this.state.name}</h3>
        <button
          onClick={() => {
            this.setState({
              name: "小明",
            });
          }}
        >
          修改名字
        </button> */}
        <div
          className="scroll_wrapper"
          style={{
            height: "200px",
            backgroundColor: "yellow",
            overflow: "hidden",
          }}
        >
          <ul>
            {this.state.list.length ? (
              this.state.list.map((item: any, index: number) => (
                <li key={index}>
                  {item}
                  <button onClick={this.handleDel.bind(this, index)}>
                    del
                  </button>
                  {/* 将html展示出来 */}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item,
                    }}
                  ></span>
                </li>
              ))
            ) : (
              <div>暂无数据</div>
            )}
            {/* {aa} */}
          </ul>
        </div>
        <input type="text" ref={this.refNameRef} />
        <button
          onClick={() => {
            // 不能直接修改state
            const newList = this.state.list.slice();
            newList.push(this.refNameRef.current.value);
            this.setState({
              list: newList,
            });
          }}
        >
          增加
        </button>
        <button onClick={this.handleUpdate.bind(this)}>更新scroll</button>
      </div>
    );
  }
  handleDel(index: number) {
    const list = [...this.state.list];

    list.splice(index, 1);
    this.setState({
      list,
    });
    console.log("[ index ] >", index);
  }
  handleUpdate() {
    const list = new Array(20).fill("scroll");
    this.setState(
      {
        list: list,
      },
      () => {
        // DOM更新完在渲染
        new BetterScroll(".scroll_wrapper");
      }
    );
  }
}
