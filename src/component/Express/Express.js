import React, { Component } from 'react';
import {getWeather} from '../../service';

class Express extends Component {
    state={
        data:{},
        error:'',
    }

    handlebtn = async () =>{
       const data = await getWeather()
       this.setState({
           data:data.data
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