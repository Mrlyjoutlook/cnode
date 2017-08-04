import React, { Component } from 'react';
import { object, func } from 'prop-types';
import './index.less';
import praise_fill from '../../../../assets/praise_fill.svg';

class CommentItem extends Component {
  static propTypes = {
    data: object.isRequired,
    agreeEvent: func.isRequired,
    commentEvent: func.isRequired,
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  shouldComponentUpdate() {
    return true;
  }

  handleClickAgree = () => {
    this.props.agreeEvent();
  }

  handleClickComment = () => {
    this.props.commentEvent();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="commentItem" data-flex="main:justify cross:top">
        <div className="commentItem_left">
          <div>
            <img src={data.getIn(['author', 'avatar_url'])} alt=""/>
          </div>
        </div>
        <div className="commentItem_right">
          <div className="commentItem_right_top" data-flex="main:justify cross:center">
            <span>{data.getIn(['author', 'loginname'])}</span>
            <span>{data.get('create_at')}</span>
          </div>
          <div className="commentItem_right_mid" dangerouslySetInnerHTML={{__html: data.get('content')}} />
          <div className="commentItem_right_bot">
            <span onClick={this.handleClickComment}>回复</span>
            <span onClick={this.handleClickAgree}><img src={praise_fill} alt=""/></span>
            <span>1</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentItem;
