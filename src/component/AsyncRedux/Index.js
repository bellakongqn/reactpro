import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchPosts} from './action'

class Index extends PureComponent {

    handleFetch =() =>{
        this.props.fetchPosts('react.js')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleFetch}>点击</button>
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        list: state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchPosts,
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);