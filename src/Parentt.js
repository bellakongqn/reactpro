//父组件
import React, { PureComponent, Component } from 'react';
import Example from "../src/component/Example/Expample";

export default class IndexPage extends PureComponent{
  constructor() {
    super();
    this.state = {
      person: {
        name: 'sxt'
      }
    };
    console.log('constructor');
  }
  changeState = () => {
    let { person } = this.state;
    person.name = 'sxt2';
    this.setState({ 
      person
    })
  };
  render() {
    console.log('IndexPage render');
    const { person } = this.state;
    return (
      <div>
        <button onClick={this.changeState}>点击</button>
        <Example person={person} />
      </div>
    );
  }
}