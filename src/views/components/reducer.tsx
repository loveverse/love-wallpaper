import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

const GlobalContext = React.createContext({});
const initalState = {
  fileList: [] as any,
  info: {},
};

const reducer = (state: any, { type, payload }) => {
  const newState = { ...state };
  switch (type) {
    case "change-info":
      newState.info = payload;
      return newState;
    case "change-fileList":
      newState.fileList = payload;
      return newState;
    default:
      return state;
  }
};

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, initalState);
  // const [count, setcount] = useState<number>(1);
  useEffect(() => {
    axios
      .get("https://api.loveverse.top/findExcerpt")
      .then((res) => {
        dispatch({
          type: "change-fileList",
          payload: res.data.data,
        });
      })
      .catch((error) => {
        console.log("[ error ] >", error);
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div>
        {state.fileList.map((item: any, index: number) => (
          <FileItem info={item} key={index}></FileItem>
        ))}
        {/* <p>{count}</p>
        <button
          onClick={() => {
            setcount(count + 1);
          }}
        >
          点击
        </button> */}
        <FileDetail></FileDetail>
      </div>
    </GlobalContext.Provider>
  );
}

function FileItem(props: any) {
  const { dispatch } = useContext(GlobalContext);
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
        // 没点一次就会把更新的生命周期走一遍
        dispatch({
          type: "change-info",
          payload: props.info,
        });
      }}
    >
      <p>{props.info.content}</p>
    </div>
  );
}
function FileDetail() {
  const { state } = useContext(GlobalContext);
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
      {state.info.content}
      {state.info.author}
      {/* {this.props.children[0]}
      {this.props.children[1]}
      {this.props.children[2]} */}
    </div>
  );
}
