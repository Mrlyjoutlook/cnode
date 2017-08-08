import React, { Component } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { HomePage, ListContainer } from '../../../../components/Element';
import PullRefresh from '../../../../components/PullRefresh';
import TabNavigation from '../TabNavigation';
import ListItem from '../ListItem';
import Load from '../Load';
import { GET_LIST, saveScrollTop } from '../../modules/listInfoActions';

class HomeContainer extends Component {
  static propTypes = {
    match: object.isRequired,
    location: object.isRequired,
    history: object.isRequired,
  }

  componentDidMount() {
    const { dispatch, scrollTop, location } = this.props;
    // 请求列表数据
    dispatch({ type: GET_LIST, tab: location.pathname.split('/')[2] || 'all' });
    // 回滚列表到指定高度
    if (scrollTop !== 0) {
      this.wrap.scrollTop = scrollTop;
    }
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(saveScrollTop(this.wrap.scrollTop));
  }

  handleOnClick = id => {
    return () => {
      const { history } = this.props;
      history.push(`/topic/${id}`);
    };
  }

  onRefresh = () => {

  }

  render() {
    const { listData, loading } = this.props;
    return (
      <HomePage>
        <TabNavigation />
        { loading && (<Load />) }
        {
          !loading && (
            <div className="wrap" id="wrap" ref={wrap => this.wrap = wrap} style={{ marginTop: '0.8rem', position: 'absolute', width: '100%', background: '#e8e8e8', overflow: 'scroll', height: '100%' }}>
              <PullRefresh onRefresh={this.onRefresh} container={'wrap'} />
              <ListContainer>
                {
                  listData.map((item, i) => <ListItem key={i} dataSource={item} itemClick={this.handleOnClick(item.get('id'))} />)
                }
              </ListContainer>
            </div>
          )
        }
      </HomePage>
    );
  }
}

function mapStateToProps(state) {
  return {
    listData: state.listInfo.get('listData'),
    scrollTop: state.listInfo.get('scrollTop'),
    loading: state.listInfo.get('loading'),
  }
}

export default connect(mapStateToProps)(HomeContainer);
