import config from '../config'
import axios from 'axios'

export default {
  getArticles: (res, rej) => {
    axios.get('https://api.bluesquare.io/externals/articles').then(response => res(response.data)).catch(reject => rej(reject));

  },
  getArticle: (id, res, rej) => {
    axios.get('https://api.bluesquare.io/externals/articles/' + id).then(response => res(response.data)).catch(reject => rej(reject));
  }
}
