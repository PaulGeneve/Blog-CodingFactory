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
    getApi(state){
      axios.get('https://newsdata.io/api/1/news?apikey=pub_1758053ff5b5f04708467f6785c94008f9c8')
      .then(result => {
        result.data.results.forEach(article =>{
          state.articles.push(article)
        });
        
          console.log(result.data.results);
      })
  }        
  },
  actions: {
  },
  modules: {
  }
})
