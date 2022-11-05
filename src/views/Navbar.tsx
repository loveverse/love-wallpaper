import React, { Component } from "react";

interface IProps {
  title?: string;
}
export default class Navbar extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return <div>Navbar- {this.props.title}</div>;
  }
}
