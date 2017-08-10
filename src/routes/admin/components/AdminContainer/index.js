import React, { Component } from 'react';
import { element } from 'prop-types';
import { MyInfoPage } from '../../../../components/Element';
import Navigation from '../../../../components/Navigation';

class AdminContainer extends Component {
  static propTypes = {
    // children: element.isRequired,
  }

  render() {
    const { children } = this.props;

    return (
      <MyInfoPage>
        <Navigation title="个人中心" style={{ background: '#00bcd4' }} />
      </MyInfoPage>
    );
  }
}

export default AdminContainer;
