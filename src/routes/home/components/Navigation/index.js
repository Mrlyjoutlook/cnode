import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Nav } from '../../../../components/Element';

class Navigation extends Component {
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
        <div>aaa</div>
      </Nav>
    );
  }
}

export default Navigation;
