import React, { Component } from 'react';

class DragContainer extends Component {

    state={
        in:false,
    }

    handleDragEnter = (e) => {
        e.preventDefault();
        if (this.props.canDragIn) {
            this.setState({
                in: true
            })
        }
    }

    handleDragLeave = (e) => {
        e.preventDefault();
        if (this.props.canDragIn) {
            this.setState({
                in: false
            })
        }
    }

    handleDrop = (e) => {
        e.preventDefault();
        this.props.dragTo(this.props.status);
        this.setState({
            in: false
        })
    }

    render() {
        let { status, children } = this.props;
        return (
            <div 
                id={`col-${status}`} 
                className='container'
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDragOver={this.handleDragEnter}
                onDrop={this.handleDrop}
            >
                <header className="status-header">
                    {status}
                </header>
                {/* <main className={'col-main' + (this.state.in ? ' active' : '')}> */}
                <main className={'content'+ (this.state.in ? ' active' : '')}>
                    {children}
                </main>
            </div>
        )
    }
}

export default DragContainer;