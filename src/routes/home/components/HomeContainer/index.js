import React, { Component } from 'react';
import { object } from 'prop-types';
import { withRouter } from 'react-router';
import { Page } from '../common';
import SceneTransition from '../../../../components/SceneTransition';
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
      <SceneTransition>
        <Page>
          <Navigation />
        </Page>
      </SceneTransition>
    );
  }
}

export default withRouter(HomeContainer);
