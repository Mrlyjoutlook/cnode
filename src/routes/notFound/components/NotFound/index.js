import React, { Component } from 'react';
// import { element } from 'prop-types';
import { NotFoundPage } from '../../../../components/Element';

class NotFound extends Component {
  static propTypes = {
    // children: element.isRequired,
    // direction: string.isRequired,
  }

  render() {
    const {} = this.props;

    return (
      <NotFoundPage>
        <h1>Not Found</h1>
      </NotFoundPage>
    );
  }
}

export default NotFound;
