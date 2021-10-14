<template>
  <div class="home">
<<<<<<< Updated upstream
    
=======
    <div class="grille" style="width: 18rem;">
    <img :src = "image" class="card-img-top" alt="...">
        <div class="card-body">
            <h6 class="card-title">{{ auteur }}</h6>
              <h5 class="card-subtitle mb-2 text-muted">{{ titre }}</h5>
            <p class="card-text">{{ description }}</p>
            <p class ="card-date"> {{ date }} </p>
        <a :href = "link" class="btn btn-primary">Voir</a>
        </div>
     </div>
>>>>>>> Stashed changes
  </div>
</template>

<script>
// @ is an alias to /src
<<<<<<< Updated upstream
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
=======
</script>

<style>

.grille{
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 10px;
  margin-top: 30px;
  border: solid;
>>>>>>> Stashed changes
}
h1{
  text-align: center;
  font-size: larger;
    
}

.btn-primary {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
}

.btn-primary {
    border: 0;
    line-height: 2.5;
    padding: 0 20px;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
    background-color: #42b983;
    background-image: linear-gradient(to top left,
                                      rgba(0, 0, 0, .2),
                                      rgba(0, 0, 0, .2) 30%,
                                      rgba(0, 0, 0, 0));
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
                inset -2px -2px 3px rgba(0, 0, 0, .6);
}

.btn-primary:hover {
    background-color: #42b983;
}

.btn-primary:active {
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                inset 2px 2px 3px rgba(0, 0, 0, .6);
}

</style>