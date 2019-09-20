import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {addTodo} from './actions'

class AddPage extends PureComponent {

    handleSubmit =(e) =>{
        e.preventDefault()
        this.props.addTodo(this.input.value)
        this.input.value=""
    }

    render() {
        console.log(this.props)
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <input ref={input => {this.input  =  input }} />
                <button type="submit"> Todo </button>
            </form>
        </>
        );
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addTodo,
    },dispatch)

    // return {
    //     addTodo: (...args) => dispatch(addTodo(...args)),
    //   }
}

export default connect( () =>{},mapDispatchToProps)(AddPage);