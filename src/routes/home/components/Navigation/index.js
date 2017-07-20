import React, { Component } from 'react';
import { object } from 'prop-types';
import { Link, withRouter } from 'react-router';
import { Nav } from '../common';

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
      <Nav>
        <Link to="/home/all">全部</Link>
        <Link to="/home/essence">精华</Link>
        <Link to="/home/share">分享</Link>
        <Link to="/home/answer">回答</Link>
        <Link to="/home/job">招聘</Link>
      </Nav>
    );
  }
}

export default withRouter(HomeContainer);
