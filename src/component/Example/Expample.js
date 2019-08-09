//子组件
import React, { PureComponent,Component } from 'react';
export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      a: this.props.person
    }
   }
  render() {
    console.log('example render');
    // const person = this.state.a;
    const a = this.state.a;
    const person = this.props.person
    return(
      <div>
        {a.name}
        {person.name}
      </div>
    );
  }
}