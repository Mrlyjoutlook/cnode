import React, { Component } from 'react';
// import { element } from 'prop-types';
import { Motion, spring } from 'react-motion';

class SceneTransition extends Component {
  static propTypes = {
    // children: element.isRequired,
    // direction: string.isRequired,
  }

  static defaultProps = {
    direction: 'x', // x or y
  }

  render() {
    const { children, direction } = this.props;

    return (
      <Motion defaultStyle={{ [direction]: 100 }} style={{ [direction]: spring(0, { stiffness: 120, damping: 17 }) }}>
        {
          ({ x, y }) => React.cloneElement(children, { style: { transform:  x ? `translate3d(${x}px, 0, 0)` : `translate3d(0, ${y}px, 0)` } })
        }
      </Motion>
    );
  }
}

export default SceneTransition;
