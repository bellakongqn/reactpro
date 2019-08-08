import React, { Component } from 'react';
import {setUser} from '../../service'

class Input extends Component {

    state={
        username:'v6',
        password:'101070201'
    }

    handleName = e =>{
        this.setState({
            username:e.target.value,
        })
    }
    handlePas = e =>{
        this.setState({
            password:e.target.value,
        })
    }
    handleSubmit = async() =>{
        const data = await setUser(this.state.username,this.state.password)
        alert(data.data.air_level)
    }
    render() {
        return (
            <div>
                    <input type='text'  placeholder="请输入姓名" name='username' onChange={this.handleName} value={this.state.username}/>
                    <input type='text'  placeholder="请输入密码" name='password' onChange={this.handlePas} value={this.state.password}/>
                    <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </div>
        );
    }
}

export default Input;