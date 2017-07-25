import React, { Component } from 'react';
import { object } from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { Nav } from '../../../../components/Element';

const NavLinkStyle = {
  textDecoration: 'none',
  color: '#ace9f1',
}

class HomeContainer extends Component {
  static propTypes = {
    match: object.isRequired,
    location: object.isRequired,
    history: object.isRequired,
  }

  shouldComponentUpdate() {
    return false;
  }

  handleOnClick = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <Nav data-flex="main:center cross:center">
        <NavLink to="/home/all" activeStyle={{color: '#fff'}} style={NavLinkStyle}>全部</NavLink>
        <NavLink to="/login" style={NavLinkStyle}>精华</NavLink>
        <NavLink to="/home/share" style={NavLinkStyle}>分享</NavLink>
        <NavLink to="/home/answer" style={NavLinkStyle}>回答</NavLink>
        <NavLink to="/home/job" style={NavLinkStyle}>招聘</NavLink>
      </Nav>
    );
  }
}

export default withRouter(HomeContainer);
