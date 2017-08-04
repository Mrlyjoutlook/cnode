import React, { Component } from 'react';
import { string } from 'prop-types';
import './index.less';

class Content extends Component {

  static defaultProps = {
    content: ''
  }

  static propTypes = {
    content: string.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.content !== this.props.content;
  }

  render() {
    const { content } = this.props;
    return (
      <div className="topic">
        <div dangerouslySetInnerHTML={{__html: content}} />
      </div>
    );
  }
}

export default Content;
