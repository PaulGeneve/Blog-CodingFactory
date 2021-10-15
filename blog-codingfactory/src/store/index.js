import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [
 
    ]
  },
  mutations: {
    addArticle(state, article){
      state.articles.push(article)
    }
  },

  actions: {
    getApi(context){
      axios.get('https://newsdata.io/api/1/news?apikey=pub_1758053ff5b5f04708467f6785c94008f9c8')
      .then(result => {
        result.data.results.forEach(element => {
          let articles = {
            'title': element.title,
            'source': element.source_id,
            'description': element.description,
            'content': element.content,
            'date': element.pubDate,
            'image': element.image_url,
            'link': element.link
          }
          context.commit('addArticle', articles)
          console.log(element)
        })
      })
    }
  },
  getters: {
    getArticles(state) {
      return state.articles
    }
  }
})
