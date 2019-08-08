//子组件
import React, { PureComponent,Component } from 'react';
export default class Example extends PureComponent {
  render() {
    console.log('example render');
    const { person } = this.props;
    return(
      <div>
        {person.name}
      </div>
    );
  }
}