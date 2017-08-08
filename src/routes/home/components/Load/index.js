import React, { Component } from 'react';
import { object, func } from 'prop-types';

import bars from '../../../../assets/bars.svg';

class Load extends Component {
  static propTypes = {
    // match: object.isRequired,
    // location: object.isRequired,
    // history: object.isRequired,
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {

    return (
      <div data-flex="dir:top main:center cross:center" style={{ height: '100%' }}>
        <div><img src={bars} alt="" style={{ width: '1rem' }} /></div>
        <div style={{ color: '#8a8d8e' }}>正在加载中...</div>
      </div>
    );
  }
}

export default Load;
