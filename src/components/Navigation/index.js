import React, { Component } from 'react';
import { string, node, func } from 'prop-types';
import './index.less';

class Navigation extends Component {

  static propTypes = {
    onLeftClick: func,
    onRightClick: func,
    leftContent: node,
    rightContent: node,
    title: string,
  }

  static defaultProps = {
    onLeftClick: () => {},
    onRightClick: () => {},
    leftContent: '',
    rightContent: '',
    title: '导航栏',
  }

  shouldComponentUpdate(nextProps) {
    const { onLeftClick, onRightClick, leftContent, rightContent, title } = nextProps;
    return onRightClick !== this.props.onRightClick ||
           onLeftClick !== this.props.onLeftClick ||
           leftContent !== this.props.onLeftClick ||
           rightContent !== this.props.onLeftClick ||
           title !== this.props.onLeftClick;
  }

  handleLeftOnClick = () => {
    window.history.go(-1);
    this.props.onLeftClick();
  }

  handleRightOnClick = () => {
    this.props.onRightClick();
  }

  render() {
    const { title, leftContent, rightContent, style } = this.props;

    const svg = <svg viewBox="0 0 36 38" id="left" width="40%" height="100%"><path fill="#fff" d="M16.247 21.399L28.48 9.166l2.121 2.121-10.118 10.119 10.118 10.118-2.121 2.121-12.233-12.233.007-.006z"></path></svg>

    return (
      <div className="nav" data-flex="main:center cross:center" style={style}>
        <div className="nav_left" onClick={this.handleLeftOnClick}>{ leftContent ? leftContent : svg }</div>
        <div className="nav_center">{ title }</div>
        <div className="nav_right" onClick={this.handleRightOnClick}>{ rightContent }</div>
      </div>
    );
  }
}

export default Navigation;
