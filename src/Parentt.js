//父组件
import React, { PureComponent } from 'react';
import _ from 'lodash'
import Example from "../src/component/Example/Expample";

export default class IndexPage extends PureComponent{
  constructor() {
    super();
    this.state = {
      person: {
        name: 'sxt'
      },
      counter:1,
    };
    console.log('constructor');
  }
  // 对象解构赋值1
  // changeState = () => {
  //   let { person } = this.state;
  //   person.name = 'sxt2';
  //   this.setState( 
  //     person
  //   )
  //   // this.setState({
  //   //   person:{...this.state.person,name:'sxt2'}
  //   // })
  // };

  // lodash cloneDeep改变对象的值
  // this.setState(state)用来改变整个state的值

  
  // changeState=() =>{
  //   let state = _.cloneDeep(this.state)
  //   state.person.name="bella"
  //   state.counter+=1
  //   this.setState(state)
  // }

  // json.parse json.string改变对象的值
  changeState=() =>{
    let person = JSON.parse(JSON.stringify(this.state.person))
    person.name="bella"
    this.setState({
      person
    })
  }
  render() {
    console.log('IndexPage render');
    const { person,counter } = this.state;
    return (
      <div>
        <button onClick={this.changeState}>点击</button>
        {counter}
        <Example person={person} />
      </div>
    );
  }
}