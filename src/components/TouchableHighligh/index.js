import React, { Component } from 'react';
import { element } from 'prop-types';

class TouchableHighligh extends Component {

  static propTypes = {
    children: element.isRequired,
  }

  shouldComponentUpdate() {
    return false;
  }

  handleTouchEvent = (event) => {
    const { activeStyle } = this.props;
		event.stopPropagation();
		switch (event.type) {
			case 'touchstart':
        this.target.className = activeStyle;
				break;
			//   case 'touchmove':
			//     this.moveEndX = event.changedTouches[0].pageX;
			//     this.moveEndY = event.changedTouches[0].pageY;
			//     let w = this.moveEndX < 0 ? this.moveEndX * -1 : this.moveEndX;     //x轴的滑动值
			//     let h = this.moveEndY < 0 ? this.moveEndY * -1 : this.moveEndY;     //y轴的滑动值
			//     // 阻止滑动时浏览器也跟随滑动
			//     // if(w < h){
			//     //   event.preventDefault();
			//     // }
			//     break;
			case 'touchend':
				this.target.className = '';
				break;
		}
	}

  render() {
    const { children } = this.props;
    return React.cloneElement(
      children,
      {
        ref: target => this.target = target,
        onTouchStart: this.handleTouchEvent,
        onTouchEnd: this.handleTouchEvent
      }
    )
  }
}

export default TouchableHighligh;
