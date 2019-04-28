import axios from 'axios'
import config from '../config'

export default {
    loadStorys: (res, rej) => {
        axios.get(config.getServe() + '/story')
        .then(response => res(response.data))
        .catch(reject => rej(reject))
    }
}
