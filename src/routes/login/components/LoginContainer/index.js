import React, { Component } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { LoginPage, Button, Input } from '../../../../components/Element';
import Navigation from '../../../../components/Navigation';
import { LOGIN_IN } from '../../modules/loginActions';

class LoginContainer extends Component {
  static propTypes = {
    match: object.isRequired,
    location: object.isRequired,
    history: object.isRequired,
  }

  componentWillMount() {
  }

  shouldComponentUpdate() {
    return false;
  }

  handleOnClick = () => {
    const { dispatch } = this.props;
    dispatch({ type: LOGIN_IN, accesstoken: '3d926f56-bcee-4333-a18c-736a77638f49' });
  }

  handleGoBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <LoginPage>
        <Navigation title="登录" />
        <Input placeholder="请输入Access Token" />
        <Button data-flex="main:center cross:center" onClick={this.handleOnClick}>login in</Button>
      </LoginPage>
    );
  }
}

export default connect()(LoginContainer);
