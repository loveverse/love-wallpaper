import React, { Component, Requireable } from "react";
import PropTypes from "prop-types";

interface IProps {
  title?: string;
  leftShow?: boolean;
  rightShow?: boolean;
}
export default class Navbar extends Component<IProps> {
  // static类属性，不需要new就可以拿到 a = 1是对象属性，需要使用new
  // static propTypes : {
  //   title: Requireable<string>;
  //   leftShow: Requireable<boolean>;
  //   rightShow: Requireable<boolean>;
  // }; // 传参校验
  // static defaultProps: { title: string; };
  static propTypes = {
    title: PropTypes.string,
    leftShow: PropTypes.bool,
    rightShow: PropTypes.bool,
  };  // 属性写法
  static defaultProps = {
    title: "默认值"
  }
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.leftShow && <button>返回</button>}
        Navbar- {this.props.title}
        {this.props.rightShow && <button>前进</button>}
      </div>
    );
  }
}
// 类的对象写法
// Navbar.propTypes = {
//   title: PropTypes.string,
//   leftShow: PropTypes.bool,
//   rightShow: PropTypes.bool,
// };
// new Navbar()

// Navbar.defaultProps = {
//   title: "默认值"
// }
