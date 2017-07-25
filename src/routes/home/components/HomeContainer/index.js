import React, { Component } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { HomePage, ListContainer } from '../../../../components/Element';
import PullRefresh from '../../../../components/PullRefresh';
import Navigation from '../Navigation';
import ListItem from '../ListItem';

class HomeContainer extends Component {
  static propTypes = {
    match: object.isRequired,
    location: object.isRequired,
    history: object.isRequired,
  }

  shouldComponentUpdate() {
    return false;
  }

  handleOnClick = () => {
    const { history } = this.props;
    history.push('/');
  }

  onRefresh = () => {
    
  }

  render() {
    const { listData } = this.props;
    return (
      <HomePage>
        <Navigation />
        <div className="wrap" id="wrap">
          <PullRefresh onRefresh={this.onRefresh} container={'wrap'} />
          <ListContainer >
            {
              listData.map((item, i) => <ListItem key={i} dataSource={item} />)
            }
          </ListContainer>
        </div>
      </HomePage>
    );
  }
}

function mapStateToProps(state) {
  return {
    listData: state.listInfo.get('listData'),
  }
}

export default connect(mapStateToProps)(HomeContainer);
