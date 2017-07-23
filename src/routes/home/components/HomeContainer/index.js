import React, { Component } from 'react';
import { object } from 'prop-types';
import { withRouter } from 'react-router';
import { HomePage } from '../../../../components/Element';
import Navigation from '../Navigation';

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
      <HomePage>
        <Navigation />
      </HomePage>
    );
  }
}

export default withRouter(HomeContainer);
