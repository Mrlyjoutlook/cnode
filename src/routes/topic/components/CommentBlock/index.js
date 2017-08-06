import React, { Component } from 'react';
import { object, bool, func } from 'prop-types';
import { Barrier, AnimBlok, Submit } from '../../../../components/Element';

class CommentBlock extends Component {

  static propTypes = {
    show: bool.isRequired,
    barrierClick: func,
  }

  static defaultProps = {
    show: false,
    barrierClick: () => {},
  }

  componentWillReceiveProps(nextProps) {
    const { show } = nextProps;
    if (show !== this.props.show) {
      this.setState({ show })
    }
  }

  shouldComponentUpdate(nextProps) {
    const { show } = this.props;
    return show !== this.props;
  }

  onClickClose = () => {
    this.props.barrierClick();
  }

  render() {
    const { show } = this.props;
    return (
      <div>
        <Barrier onClick={this.onClickClose} show={show} />
        <AnimBlok show={show}>
          <div>@ 楼主</div>
          <textarea />
          <Submit>提交</Submit>
        </AnimBlok>
      </div>
    );
  }
}

export default CommentBlock;
