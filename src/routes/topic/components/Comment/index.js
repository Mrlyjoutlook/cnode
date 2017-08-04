import React, { Component } from 'react';
import { object } from 'prop-types';
import CommentItem from '../CommentItem';

class Comment extends Component {
  static propTypes = {
    match: object.isRequired,
    location: object.isRequired,
    history: object.isRequired,
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  shouldComponentUpdate() {
    return true;
  }

  handleClickAgree = () => {

  }

  handleClickComment = () => {

  }

  render() {
    const { dataSource } = this.props;
    return (
      <div style={{background: '#fff', padding: '.2rem .4rem', borderTop: '.5rem solid #f5f4f4',}}>
        {
          dataSource.map(
            (item, i) =>
              <CommentItem
                data={item}
                agreeEvent={this.handleClickAgree}
                commentEvent={this.handleClickComment}
              />
          )
        }
      </div>
    );
  }
}

export default Comment;
