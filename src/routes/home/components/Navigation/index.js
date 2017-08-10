import React, { Component } from 'react';
import { number, func } from 'prop-types';
import { HomeNav, Title, Img, Badge } from '../../../../components/Element';
import remind from '../../../../assets/remind.svg';
import people from '../../../../assets/people.svg';

class Navigation extends Component {
  static propTypes = {
    onClickPeople: func.isRequired,
    onClickRemind: func.isRequired,
    news: number,
  }

  shouldComponentUpdate(nextProps) {
    const { onClickPeople, onClickRemind, news } = this.props;
    return onClickPeople !== this.props.onClickPeople ||
           onClickRemind !== this.props.onClickRemind ||
           news !== this.props.news;
  }

  render() {
    const { onClickPeople, onClickRemind, news } = this.props;
    return (
      <HomeNav data-flex="main:justify cross:center">
        <div><Title>Cnode中文社区</Title></div>
        <div>
          <Badge>{news}</Badge>
          <Img src={remind} onClick={onClickRemind} />
          <Img src={people} onClick={onClickPeople} />
        </div>
      </HomeNav>
    );
  }
}

export default Navigation;
