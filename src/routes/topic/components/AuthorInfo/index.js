import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { is } from 'immutable';
import { CardLabel } from '../../../../components/Element';
import { getCardType } from '../../../../utils/util';
import './index.less';

class AuthorInfo extends Component {
  // static propTypes = {
  //   dataSource: object.isRequired,
  //   handleClickAgree: func,
  //   handleClickComment: func,
  // }

  // shouldComponentUpdate(nextProps) {
  //   const { dataSource, handleClickAgree, handleClickComment } = nextProps;
  //   return !is(dataSource, this.props.dataSource);
  // }

  render() {
    const { info } = this.props;
    return (
      <div className="authorInfo" >
        <div className="authorInfo_label">
          { info.get('tab') && <CardLabel >{getCardType(info.get('tab'))}</CardLabel> }
          { info.get('good') && <CardLabel color="red">{getCardType('good')}</CardLabel> }
          { info.get('top') && <CardLabel color="green">{getCardType('top')}</CardLabel> }
        </div>
        <div className="authorInfo_img"><img src={info.getIn(['author', 'avatar_url'])} alt=""/></div>
        <div className="authorInfo_info" data-flex="main:justify cross:center">
          <div>{info.getIn(['author', 'loginname'])}</div>
          <div>{`${info.get('reply_count')}/${info.get('visit_count')}`}</div>
          <div>{info.get('create_at')}</div>
        </div>
      </div>
    );
  }
}

export default AuthorInfo;
