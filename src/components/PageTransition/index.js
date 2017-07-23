import React, { Component } from 'react';
import { element, string } from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import './index.css';

class PageTransition extends Component {
  static propTypes = {
    children: element.isRequired,
    direction: string.isRequired,
  }

  static defaultProps = {
    direction: 'x', // x or y
  }

  getDirection = (d) => {
    switch(d) {
      case 'x':
        return 'left';
      case '-x':
        return 'right';
      case 'y':
        return 'top';
      case '-y':
        return 'bottom';
    }
  }

  render() {
    const { children, direction } = this.props;

    return (
      <CSSTransitionGroup
        transitionName={this.getDirection(direction)}
        transitionEnter={true}
        transitionLeave={true}
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
      >
        {children}
      </CSSTransitionGroup>
    );
  }
}

export default PageTransition;
