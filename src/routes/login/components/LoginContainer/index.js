import React, { Component } from 'react';
import { object } from 'prop-types';
import { Page, Button } from '../common';
import SceneTransition from '../../../../components/SceneTransition';

class LoginContainer extends Component {
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
      <SceneTransition direction="y">
        <Page>
          <Button data-flex="main:center cross:center" onClick={this.handleOnClick}>login</Button>
        </Page>
      </SceneTransition>
    );
  }
}

export default LoginContainer;
