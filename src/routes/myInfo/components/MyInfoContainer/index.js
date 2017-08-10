import React, { Component } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { MyInfoPage } from '../../../../components/Element';
import Navigation from '../../../../components/Navigation';

class MyInfoContainer extends Component {
  static propTypes = {
    // match: object.isRequired,
    // location: object.isRequired,
    // history: object.isRequired,
  }

  componentWillMount() {
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <MyInfoPage>
        <Navigation title="消息" style={{ background: '#00bcd4' }} />
      </MyInfoPage>
    );
  }
}

export default connect()(MyInfoContainer);
