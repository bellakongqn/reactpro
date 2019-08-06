import React, { Component } from 'react';
import {getWeather} from '../../server';

class Express extends Component {
    state={
        data:{},
        error:'',
    }

    handlebtn = () =>{
        getWeather((value) =>{
            this.setState({
                data:value
            })
        })
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.handlebtn()}>点击啊啊啊</button>
                {
                     this.state.data?this.state.data.air_level:""
                }
            </div>
        );
    }
}

export default Express;