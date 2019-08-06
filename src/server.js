
import Axios from 'axios';

export function getWeather(callback){
    Axios.get('https://www.tianqiapi.com/api/?version=v6&cityid=101070201').then(
            res =>{
                console.log(res.data.air_level,'bella')
                callback(res.data)
            }    
        ).catch(
            // error => {
            //   console.log(error,'error')
            // }
          )
}

