import React from 'react';
var { fromJS,List} = require('immutable');

class Immutable  extends React.PureComponent {

    state={
        person:fromJS({
            name:'bella',
            age:18
        }),
        items: List()
    }

    handleClick = () =>{
        // let { person } = this.state;
        // person.name = 'sxt2';
        // this.setState({
        //    person
        // })
        let person = this.state.person.set('age' ,'24')
        let items = this.state.items.push('1')
        this.setState({
            person,
            items
        })
    }

    render() {
        const person = this.state.person.toJS()
        const items = this.state.items
        // const person = this.state.person
        return (
            <div>
                <button onClick={this.handleClick}>点击</button>
               {person.name+person.age} 
               {/* {person.get("name")} */}
               {
                   items.map(item => 
                    <li>Saved: {item}</li>
                  )
               }
            </div>
        );
    }
}

export default Immutable ;