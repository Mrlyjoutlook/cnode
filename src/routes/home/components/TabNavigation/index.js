import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { Nav } from '../../../../components/Element';

const NavLinkStyle = {
  textDecoration: 'none',
  color: '#ace9f1',
}

class TabNavigation extends Component {
  static propTypes = {
    match: object.isRequired,
    location: object.isRequired,
    history: object.isRequired,
    itemClick: func.isRequired,
  }

  shouldComponentUpdate() {
    return false;
  }

  handleOnClick = () => {
    const { history } = this.props;
    history.push({
      pathname: '/',
      state: {
        state: {
          top: ''
        }
      }
    });
  }

  render() {
    const { itemClick } = this.props;
    return (
      <Nav data-flex="main:center cross:center">
        <NavLink to="/home/all" onClick={itemClick('all')} activeStyle={{ color: '#fff' }} style={NavLinkStyle}>全部</NavLink>
        <NavLink to="/home/good" onClick={itemClick('good')} style={NavLinkStyle}>精华</NavLink>
        <NavLink to="/home/share" onClick={itemClick('share')} style={NavLinkStyle}>分享</NavLink>
        <NavLink to="/home/answer" onClick={itemClick('answer')} style={NavLinkStyle}>回答</NavLink>
        <NavLink to="/home/job" onClick={itemClick('job')} style={NavLinkStyle}>招聘</NavLink>
      </Nav>
    );
  }
}

export default withRouter(TabNavigation);
