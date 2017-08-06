import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { is } from 'immutable';
import CommentItem from '../CommentItem';

class Comment extends Component {
  static propTypes = {
    dataSource: object.isRequired,
    handleClickAgree: func,
    handleClickComment: func,
  }

  shouldComponentUpdate(nextProps) {
    const { dataSource, handleClickAgree, handleClickComment } = nextProps;
    return !is(dataSource, this.props.dataSource);
  }

  render() {
    const { mapSource, dataSource, handleClickAgree, handleClickComment } = this.props;
    return (
      <div style={{ background: '#fff', padding: '.2rem .4rem', borderTop: '.5rem solid #f5f4f4' }}>
        {
          mapSource.map(
            (item, i) =>
              <CommentItem
                key={i}
                data={dataSource.get(item)}
                agreeEvent={handleClickAgree(item, i)}
                commentEvent={handleClickComment}
              />
          )
        }
      </div>
    );
  }
}

export default Comment;
