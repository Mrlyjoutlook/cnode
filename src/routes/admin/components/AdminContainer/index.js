import React, { Component } from 'react';
import { element } from 'prop-types';
import { connect } from 'react-redux';
import { MyInfoPage, AdminInfo, BarBtn } from '../../../../components/Element';
import Navigation from '../../../../components/Navigation';
import message_fill from '../../../../assets/message_fill.svg';
import createtask_fill from '../../../../assets/createtask_fill.svg';

class AdminContainer extends Component {
  static propTypes = {
    // children: element.isRequired,
  }

  render() {
    const { adminInfo, recentTopics, recentReplies } = this.props;
    return (
      <MyInfoPage>
        <Navigation title="个人中心" style={{ background: '#00bcd4' }} />
        <AdminInfo data-flex="main:justify cross:center">
          <div>
            <img src="" alt=""/>
          </div>
          <div>
            <div>adwda</div>
            <div>dawda</div>
            <div>dawdaw</div>
          </div>
          <div>
            <img src="" alt=""/>
          </div>
        </AdminInfo>
        <BarBtn>
          <img src={createtask_fill} alt=""/><span>最近创建的话题</span>
        </BarBtn>
        <BarBtn>
          <img src={message_fill} alt=""/><span>最近参与的话题</span>
        </BarBtn>
        <BarBtn>
          <span>注销</span>
        </BarBtn>
      </MyInfoPage>
    );
  }
}

function mapStateToProps(state) {
  return {
    adminInfo: state.adminInfo.get('adminInfo'),
    recentTopics: state.adminInfo.getIn(['adminInfo', 'recent_topics']),
    recentReplies: state.adminInfo.getIn(['adminInfo', 'recent_replies']),
  }
}

export default connect(mapStateToProps)(AdminContainer);
