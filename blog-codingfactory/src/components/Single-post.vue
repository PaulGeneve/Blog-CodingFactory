<template>
    <div class="card" style="width: 18rem;">
      <img src = "../assets/logo.png" class="card-img" alt="...">
          <div class="card-body">
              <h3 class="card-title">Titre</h3>
                <h4 class="card-auteur">auteur</h4>
              <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, 
                quod quidem consequuntur eaque ullam id iusto !
              </p>
              <p class ="card-date">12/10/2021</p>
          </div>
        <a href = "link" class="button">Voir</a>
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

<style>

.card{
  margin-left: 10%;
  padding-top: 20%;
}

  .button {
    border: none;
    display: block;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
    overflow: hidden;
    position: relative;
    color: #eeeeee;
    font-weight: 110;
    font-size: 20px;
    background-color: #153f00;
      padding: 1px 10px;
      margin: 0 auto;
      }
      .button span {
      position: relative; 
      z-index: 1;
      }
      .button:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 290%;
      width: 140%;
      background: #52b71f;
      -webkit-transition: all .2s ease-in-out;
      transition: all .3s ease-in-out;
      -webkit-transform: translateX(-100%) translateY(-45%) rotate(45deg);
      transform: translateX(-100%) translateY(-45%) rotate(45deg);
      }
      .button:hover:after {
      -webkit-transform: translateX(-9%) translateY(-210%) rotate(45deg);
      transform: translateX(-9%) translateY(-210%) rotate(45deg);
      }



</style>