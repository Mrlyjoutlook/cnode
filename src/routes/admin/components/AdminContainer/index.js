import React, { Component } from 'react';
import { element } from 'prop-types';
import { Page } from '../Common';
import SceneTransition from '../../../../components/SceneTransition';

class AdminContainer extends Component {
  static propTypes = {
    children: element.isRequired,
  }

  render() {
    const { children } = this.props;

    return (
      <SceneTransition>
        <Page>
          <h1>aaaaaa</h1>
        </Page>
      </SceneTransition>
    );
  }
}

export default AdminContainer;
