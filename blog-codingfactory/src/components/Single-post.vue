<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

export default {
  name: 'single-post',
  
  computed:{
    getArticles(){
      return this.$store.state.articles
    }
  },
  methods:{
    getArticleData(){
      axios.get('https://newsdata.io/api/1/news?apikey=pub_1758053ff5b5f04708467f6785c94008f9c8')
      .then(result => {
          console.log(result)
      })
    }
  }
}
</script>
