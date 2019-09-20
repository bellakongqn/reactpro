import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {filter} from './actions'

class Toggle extends PureComponent {
    handleFilter =(type) =>{
        switch(type){
            case 'SHOW_ALL':
            case 'SHOW_COMPLETED':
                return this.props.todoList.filter(t => t.completed === true)
            case 'SHOW_ACTIVE':
                return this.props.todoList.filter(t => !t.completed === false)
            default:
                return this.props.todoList
        }

    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleFilter('SHOW_ALL')}>All</button>
                <button onClick={() => this.handleFilter('SHOW_COMPLETED')}>Yes</button>
                <button onClick={() => this.handleFilter('SHOW_ACTIVE')}>No</button>
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
        filter,
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Toggle);