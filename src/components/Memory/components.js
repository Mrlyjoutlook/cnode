import React, { Component } from 'react';
import { object, element } from 'prop-types';

class Memory extends Component {

  static contextTypes = {
    store: object,
    children: element,
    location: object,
  };

  componentWillUnmount() {
    const { location } = this.props;
    const { dispatch } = this.context.store;
    dispatch({ type: 'MEMORY_HISTORY', data: location });
  }

  render() {
    return (<div>{this.props.children}</div>);
  }
}


export default function memoryHistory(Comp) {
  return ({ location }) => <Memory location={location}>{Comp}</Memory>;
}
