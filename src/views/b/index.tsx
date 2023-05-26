import React, { useState } from "react";
import { Image, Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "@/store/addReducer";
import type { RootState } from "@/store";

const { Meta } = Card;

export default function B() {
  const [visible, setVisible] = useState(false);
  const { value } = useSelector((state: RootState) => state.add);
  const dispatch = useDispatch();
  return (
    <div>
      <Card hoverable style={{ width: 240 }}>
        <Meta title="启动环境" description="https://cn.vitejs.dev/" />
        <p>环境名:{import.meta.env.VITE_NAME}</p>
        <p>参数: {import.meta.env.MODE}</p>
      </Card>
      <Image
        preview={{ visible: false }}
        width={200}
        src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
        onClick={() => setVisible(true)}
      />
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
        </Image.PreviewGroup>
      </div>
      <h4>{value}</h4>
      <button onClick={() => dispatch(increase())}>点击加1</button>
      <button onClick={() => dispatch(decrease())}>点击减1</button>
    </div>
  );
}
