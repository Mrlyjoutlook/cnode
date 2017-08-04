import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Nav } from '../../../../components/Element';

class TabNavigation extends Component {
  static propTypes = {
    // match: object.isRequired,
    // location: object.isRequired,
    // history: object.isRequired,
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {

    const styleObj = {
      activeStyle: { color: '#fff' },
      style: {
        textDecoration: 'none',
        color: '#ace9f1',
      }
    };

    return (
      <Nav data-flex="main:center cross:center">
        <NavLink to="/home/all" {...styleObj}>全部</NavLink>
        <NavLink to="/home/good" {...styleObj}>精华</NavLink>
        <NavLink to="/home/share" {...styleObj}>分享</NavLink>
        <NavLink to="/home/answer" {...styleObj}>回答</NavLink>
        <NavLink to="/home/job" {...styleObj}>招聘</NavLink>
      </Nav>
    );
  }
}

export default TabNavigation;
