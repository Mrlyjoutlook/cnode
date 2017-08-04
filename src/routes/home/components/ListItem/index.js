import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { is } from 'immutable';
import { Card, CardTop, CardLabel, CardTitle, CardBottom, CardAvatar, CardName, CardTime, CardPop } from '../../../../components/Element';
import { getCardType } from '../../../../utils/util';

class ListItem extends Component {
  static propTypes = {
    dataSource: object.isRequired,
    itemClick: func.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    return !is(nextProps.dataSource, this.props.dataSource);
  }

  handleOnClick = () => {
    const { history } = this.props;
    history.push({
      pathname: '/login',
      state: {
        top: ''
      }
    });
  }

  render() {
    const { dataSource, itemClick } = this.props;

    return (
      <Card onClick={itemClick}>
        <CardTop>
          { dataSource.get('tab') && <CardLabel >{getCardType(dataSource.get('tab'))}</CardLabel> }
          { dataSource.get('good') && <CardLabel color="red">{getCardType('good')}</CardLabel> }
          { dataSource.get('top') && <CardLabel color="green">{getCardType('top')}</CardLabel> }
          <CardTitle>{dataSource.get('title')}</CardTitle>
        </CardTop>
        <CardBottom>
          <CardAvatar src={dataSource.get('author').avatar_url} />
          <div style={{ display: 'inline-block' }}>
            <CardName>{dataSource.get('author').loginname}</CardName>
            <CardTime>{dataSource.get('last_reply_at')}</CardTime>
          </div>
          <CardPop>{`${dataSource.getIn(['reply_count'])}/${dataSource.getIn(['visit_count'])}`}</CardPop>
        </CardBottom>
      </Card>
    );
  }
}

export default ListItem;
