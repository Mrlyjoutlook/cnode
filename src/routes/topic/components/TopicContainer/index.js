import React, { Component } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { TopicPage } from '../../../../components/Element';
import Content from '../Content';
import Comment from '../Comment';
import CommentBlock from '../CommentBlock';
import Navigation from '../../../../components/Navigation';
import { GET_TOPIC, GIVE_AGREE } from '../../modules/topicActions';

class TopicContainer extends Component {

  static propTypes = {
    match: object.isRequired,
    location: object.isRequired,
    history: object.isRequired,
  }

  state = {
    showComment: false,
  }

  componentWillMount() {
  }

  componentDidMount() {
    const { dispatch, location } = this.props;
    dispatch({ type: GET_TOPIC, id: location.pathname.split('/')[2] });
  }

  shouldComponentUpdate() {
    return true;
  }

  barrierClick = () => {
    this.setState({ showComment: false });
  }

  handleClickAgree = (id, index) => {
    return () => {
      const { dispatch } = this.props;
      dispatch({ type: GIVE_AGREE, id, index });
    };
  }

  handleClickComment = () => {
    this.setState({ showComment: true });
  }

  render() {
    const { content, comment, commentId } = this.props;
    const { showComment } = this.state;
    return (
      <TopicPage>
        <Navigation title="帖子" style={{ background: '#00bcd4' }} />
        <Content content={content} />
        <Comment
          dataSource={comment}
          mapSource={commentId}
          handleClickAgree={this.handleClickAgree}
          handleClickComment={this.handleClickComment}
        />
        <CommentBlock
          show={showComment}
          barrierClick={this.barrierClick}
        />
      </TopicPage>
    );
  }
}

function mapStateToProps(state) {
  return {
    commentId: state.topic.get('commentId'),
    content: state.topic.getIn(['data', 'content']),
    comment: state.topic.get('comment'),
  }
}

export default connect(mapStateToProps)(TopicContainer);
