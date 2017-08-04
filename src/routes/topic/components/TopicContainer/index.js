import React, { Component } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { TopicPage } from '../../../../components/Element';
import Content from '../Content';
import Comment from '../Comment';
import Navigation from '../../../../components/Navigation';
import { GET_TOPIC } from '../../modules/topicActions';

class TopicContainer extends Component {
  static propTypes = {
    match: object.isRequired,
    location: object.isRequired,
    history: object.isRequired,
  }

  componentWillMount() {
  }

  componentDidMount() {
    const { dispatch, location } = this.props;
    dispatch({ type: GET_TOPIC, id: location.pathname.split('/')[2] })
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { content, replies } = this.props;
    return (
      <TopicPage>
        <Navigation title="帖子" style={{background: '#00bcd4'}}/>
        <Content content={content} />
        <Comment dataSource={replies} />
      </TopicPage>
    );
  }
}

function mapStateToProps(state) {
  return {
    content: state.topic.getIn(['data', 'content']),
    replies: state.topic.getIn(['data', 'replies']) || [],
  }
}

export default connect(mapStateToProps)(TopicContainer);
