import React from "react";

interface ItemType {
  item: string;
  index: number;
  cb: (params: number) => void;
}

// 父组件
const Child: React.FC<ItemType> = (props) => {
  const { index, item, cb } = props;
  return (
    <div>
      {item}
      <button onClick={() => cb(index)}>del-{index}</button>
    </div>
  );
};

// 子组件

export default Child;
