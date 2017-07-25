import React, { Component } from 'react';
import { object } from 'prop-types';
import { Card, CardTop, CardLabel, CardTitle, CardBottom, CardAvatar, CardName, CardTime, CardPop } from '../../../../components/Element';
import { getCardType } from '../../../../utils/util';

class ListItem extends Component {
  static propTypes = {
    // match: object.isRequired,
    // location: object.isRequired,
    // history: object.isRequired,
  }

  shouldComponentUpdate() {
    return false;
  }

  handleOnClick = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { dataSource } = this.props;

    return (
      <Card>
        <CardTop>
          { dataSource.get('tab') && <CardLabel >{getCardType(dataSource.get('tab'))}</CardLabel> }
          { dataSource.get('good') && <CardLabel color="red">{getCardType('good')}</CardLabel> }
          { dataSource.get('top') && <CardLabel color="green">{getCardType('top')}</CardLabel> }
          <CardTitle>{dataSource.get('title')}</CardTitle>
        </CardTop>
        <CardBottom>
          <CardAvatar src={dataSource.getIn(['author', 'avatar_url'])} />
          <div style={{ display: 'inline-block' }}>
            <CardName>{dataSource.getIn(['author', 'loginname'])}</CardName>
            <CardTime>{dataSource.get('last_reply_at')}</CardTime>
          </div>
          <CardPop>{`${dataSource.getIn(['reply_count'])}/${dataSource.getIn(['visit_count'])}`}</CardPop>
        </CardBottom>
      </Card>
    );
  }
}

export default ListItem;
