import React, { useState } from "react";
import Child from "../child/index";
const Father: React.FC = () => {
  const [list, setlist] = useState(["1", "2", "3", "4"]);
  return (
    <div>
      {list.map((item, index) => {
        return (
          <Child
            key={index}
            item={item}
            index={index}
            cb={(index) => {
              const newList = [...list];
              newList.splice(index, 1);
              setlist(newList);
            }}
          ></Child>
        );
      })}
    </div>
  );
};
export default Father;
