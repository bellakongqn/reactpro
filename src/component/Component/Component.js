import React, { PureComponent, Component } from 'react';

// export default class Component1 extends PureComponent{
  export default class Component1 extends Component{
      state = {
        isShow: false
      };

    changeState = () => {
      this.setState({
        isShow: true
      })
    };
    render() {
      console.log('render');
      return (
        <div>
          <button onClick={this.changeState}>点击</button>
          <div>{this.state.isShow.toString()}</div>
        </div>
      );
    }
}