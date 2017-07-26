import React, { Component } from 'react';

require('./index.less');

class PullRefresh extends Component {

  static defaultProps = {
    dragThreshold: 0.3,
    moveCount: 200,
    beforePull: () => { },
    afterPull: (flag) => { },
    onRefresh: () => { },
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.dragThreshold = this.props.dragThreshold;
    this.moveCount = this.props.moveCount;
    this.dragStart = null;
    this.percentage = 0;
    this.changeOneTimeFlag = 0;
    this.joinRefreshFlag = null
    this.refreshFlag = 0;
  }

  componentDidMount() {
    this.pullIcon = this.refs.pullIcon;
    this.container = document.getElementById(this.props.container);
    this.bindEvent();
  }

  touchStart = (event) => {
    if (this.refreshFlag) {
      event.preventDefault();
      return;
    }
    event = event.touches[0];
    this.dragStart = event.clientY;
    this.container.style.webkitTransition = 'none';
    this.pullIcon.classList.add('none');
  }

  touchMove = (event) => {
    if (this.dragStart === null) {
      return;
    }

    if (this.refreshFlag) {
      event.preventDefault();
      return;
    }

    const target = event.touches[0];
    this.percentage = (this.dragStart - target.clientY) / window.screen.height;

    // 当且紧当scrolltop是0且往下滚动时才触发
    if (document.body.scrollTop == 0) {
      if (this.percentage < 0) {
        event.preventDefault();
        if (!this.changeOneTimeFlag) {
          this.props.beforePull();
          this.changeOneTimeFlag = 1;
        }

        let translateX = -this.percentage * this.moveCount;
        this.joinRefreshFlag = true;

        if (Math.abs(this.percentage) > this.dragThreshold) {
          this.setState({
            stateText: '释放刷新',
          });
        } else {
          this.setState({
            stateText: '下拉刷新',
          });
        }

        if (this.percentage > 0) {
          this.container.style.webkitTransform = 'translate3d(0,' + translateX + 'px,0)';
        } else {
          this.container.style.webkitTransform = 'translate3d(0,' + translateX + 'px,0)';
        }
      } else {
        if (this.joinRefreshFlag == null) {
          this.joinRefreshFlag = false;
        }
      }
    } else {
      if (this.joinRefreshFlag == null) {
        this.joinRefreshFlag = false;
      }
    }
  }

  touchEnd = (event) => {
    if (this.percentage === 0) {
      return;
    }

    if (this.refreshFlag) {
      event.preventDefault();
      return;
    }

    if (Math.abs(this.percentage) > this.dragThreshold && this.joinRefreshFlag) {

      this.props.onRefresh();

      this.setState({
        stateText: '正在刷新..'
      });
      this.pullIcon.classList.remove('none');

      this.container.style.webkitTransition = '330ms';
      this.container.style.webkitTransform = 'translate3d(0,' + 43 + 'px,0)';

      // 进入下拉刷新状态
      this.refreshFlag = 1;

      setTimeout(() => {
        this.setState({
          stateText: '刷新成功',
        });
        this.pullIcon.classList.add('none');
        this.container.style.webkitTransform = 'translate3d(0,0,0)';
        setTimeout(() => {
          this.props.afterPull(1);
          // 重置标志位
          this.refreshFlag = 0;
        }, 300);
      }, 700);
    } else {
      if (this.joinRefreshFlag) {
        this.refreshFlag = 1;
        this.container.style.webkitTransition = '330ms';
        this.container.style.webkitTransform = 'translate3d(0,0,0)';
        setTimeout(() => {
          this.props.afterPull();
          // 重置标志位
          this.refreshFlag = 0;
        }, 300);
      }

    }

    // 重置changeOneTimeFlag
    this.changeOneTimeFlag = 0;

    // 重置joinRefreshFlag
    this.joinRefreshFlag = null;

    // 重置percentage
    this.dragStart = null;

    // 重置percentage
    this.percentage = 0;
  }

  bindEvent = () => {
    const dom = this.container;// 监听touch事件的元素dom

    dom.addEventListener('touchstart', this.touchStart);
    dom.addEventListener('touchmove', this.touchMove);
    dom.addEventListener('touchend', this.touchEnd);
  }

  render() {
    return (
      <div className="pull-down-content">
        <div ref="pullIcon" id="pullIcon" className="spinner"></div>
        <span ref="pullText" id="pullText">{this.state.stateText}</span>
      </div>
    );
  }
}

export default PullRefresh;
