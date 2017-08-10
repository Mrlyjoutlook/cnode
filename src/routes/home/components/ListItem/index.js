import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { is } from 'immutable';
import moment from 'moment';
import { Card, CardTop, CardLabel, CardTitle, CardBottom, CardAvatar, CardName, CardTime, CardPop } from '../../../../components/Element';
import { getCardType } from '../../../../utils/util';
import browse_fill from '../../../../assets/browse_fill.svg';
import interactive_fill from '../../../../assets/interactive_fill.svg';
import time_fill from '../../../../assets/time_fill.svg';

class ListItem extends Component {
  static propTypes = {
    dataSource: object.isRequired,
    itemClick: func.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    return !is(nextProps.dataSource, this.props.dataSource);
  }

  render() {
    const { dataSource, itemClick } = this.props;
    return (
      <Card onClick={itemClick}>
        <CardTop>
          { dataSource.get('tab') && <CardLabel >{getCardType(dataSource.get('tab'))}</CardLabel> }
          { dataSource.get('good') && <CardLabel color="red">{getCardType('good')}</CardLabel> }
          { dataSource.get('top') && <CardLabel color="green">{getCardType('top')}</CardLabel> }
        </CardTop>
        <div data-flex="main:justify cross:center">
          <CardAvatar src={dataSource.get('author').avatar_url} />
          <CardTitle>{dataSource.get('title')}</CardTitle>
        </div>
        <CardBottom data-flex="main:justify cross:center">
          <CardName>{dataSource.get('author').loginname || 'node'}</CardName>
          <CardTime>
            <img src={time_fill} alt=""/>
            <span>{moment(dataSource.get('last_reply_at')).fromNow()}</span>
          </CardTime>
          <CardPop>
            <img src={browse_fill} alt=""/><span>{dataSource.getIn(['visit_count'])}</span>
            <img src={interactive_fill} alt=""/><span>{dataSource.getIn(['reply_count'])}</span>
          </CardPop>
        </CardBottom>
      </Card>
    );
  }
}

export default ListItem;
