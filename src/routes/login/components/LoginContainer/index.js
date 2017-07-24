import React, { Component } from 'react';
import { object } from 'prop-types';
import { LoginPage, Button } from '../../../../components/Element';

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

  handleGoBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <LoginPage>
        <Button data-flex="main:center cross:center" onClick={this.handleGoBack}>goBack</Button>
        <Button data-flex="main:center cross:center" onClick={this.handleOnClick}>login</Button>
      </LoginPage>
    );
  }
}

export default LoginContainer;
