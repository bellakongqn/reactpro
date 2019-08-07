
import Axios from 'axios';

export function getWeather(){
     return Axios.get('https://www.tianqiapi.com/api/?version=v6&cityid=101070201')
}

