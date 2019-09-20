import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {setCompleted} from './actions'

class TodoList extends Component {

    setCompleted = (id) =>{
        this.props.setCompleted(id)
        debugger
    }
   
    render() {
        
        return (
            <div>
                <ul>
                    {
                        this.props.todoList.map(item => 
                            <li key={item.id} onClick={()=> this.setCompleted(item.id)}
                                style={{
                                        cursor:'pointer',
                                        textDecoration: item.completed ? 'line-through' : 'none'
                                    }} >
                                {item.text}
                            </li>)
                    }
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        todoList: state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        setCompleted,
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);