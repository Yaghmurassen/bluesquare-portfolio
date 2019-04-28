import axios from 'axios'
import config from '../config'

export default {
    loadProjets: (res, rej) => {
        axios.get(config.getServe() + '/front/realisations?toJson=true')
        .then(response => res(response.data))
        .catch(reject => rej(reject))
    }
}
