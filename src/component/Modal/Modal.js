import React from 'react';
import './Modal.css'

export default class Modal extends React.Component {

    state={
        visible:false,
    }
    
    // 首次渲染使用父组件的状态更新 modal 中的 visible 状态，只调用一次
    componentDidMount() {
        this.setState({
            visible: this.props.visible
        })
    }

    // 每次接收 props 就根据父组件的状态更新 modal 中的 visible 状态，首次渲染不会调用
    componentWillReceiveProps(props) {
        this.setState({
            visible: props.visible
        })
    }

    handleClose = () => {
        const { onClose } = this.props
        onClose && onClose()
        this.setState({
            visible: false
        })
    }
    handleConfirm = () => {
        const { onConfirm } = this.props
        onConfirm && onConfirm()
        this.setState({
            visible: false
        })
    }
    handleMask = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        const { title, children,footer=true, cancleText,confirmText} = this.props
        const visible = this.state.visible
        return visible && (
            <div className='wrapper'>
                <div className='modal'>
                    <div className='title'>
                        <div className="close-icon" onClick={this.handleClose}>
                          <svg t="1566353852804" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6819" width="16" height="16"><path d="M543.6416 510.532267l381.994667-382.011734a21.316267 21.316267 0 0 0 0-30.165333 21.316267 21.316267 0 0 0-30.165334 0L513.476267 480.3584 128.5376 95.402667a21.316267 21.316267 0 0 0-30.165333 0 21.316267 21.316267 0 0 0 0 30.165333l384.938666 384.955733-384.938666 384.955734a21.316267 21.316267 0 0 0 15.086933 36.411733c5.461333 0 10.922667-2.082133 15.086933-6.2464l384.938667-384.955733 381.994667 382.011733c4.164267 4.164267 9.6256 6.2464 15.086933 6.2464s10.914133-2.082133 15.086933-6.2464a21.316267 21.316267 0 0 0 0-30.165333L543.6416 510.532267z" p-id="6820"></path></svg>
                        </div>
                       {title}
                    </div>
                    <div className='content'>{children}</div>
                    {
                        footer&&
                        <div className='operator'>
                            <button className='close' onClick={this.handleClose}>{cancleText}</button>
                            <button className='confirm' onClick={this.handleConfirm}>{confirmText}</button>
                        </div>
                    }
                   
                </div>
            </div>
            )
    }
}