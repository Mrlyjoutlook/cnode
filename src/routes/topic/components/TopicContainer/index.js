import React, { Component } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { TopicPage, Collect } from '../../../../components/Element';
import AuthorInfo from '../AuthorInfo';
import Content from '../Content';
import Comment from '../Comment';
import CommentBlock from '../CommentBlock';
import Navigation from '../../../../components/Navigation';
import { GET_TOPIC, GIVE_AGREE, DELCOLLECT_TOPIC, COLLECT_TOPIC } from '../../modules/topicActions';

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

  handleNavRight = () => {
    const { dispatch, info } = this.props;
    dispatch({ type: info.get('is_collect') ? DELCOLLECT_TOPIC : COLLECT_TOPIC })
  }

  render() {
    const { content, comment, commentId, info } = this.props;
    const { showComment } = this.state;
    const navBtn = (<Collect>{ info.get('is_collect') ? '取消收藏' : '收藏' }</Collect>)
    return (
      <TopicPage>
        <Navigation
          title="帖子"
          style={{ background: '#00bcd4' }}
          rightContent={navBtn}
          onRightClick={this.handleNavRight}
        />
        <AuthorInfo info={info} />
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
    info: state.topic.get('data'),
    commentId: state.topic.get('commentId'),
    content: state.topic.getIn(['data', 'content']),
    comment: state.topic.get('comment'),
  }
}

export default connect(mapStateToProps)(TopicContainer);
