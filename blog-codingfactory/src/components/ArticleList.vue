<template>

    <div class="card" >
      <div v-for="(item, index) in getArticles" :key="index" >
        <div class="singleCard">
          <img :src = "item.image" class="card-img" alt="image not found" width="100%" height="auto" >
            <div class="card-body">
                <h3 class="card-title">{{ item.title }}</h3>
                <a :href= "item.link" target="_blank">
                  <h4 class="card-auteur"> {{ item.source }} </h4>
                </a>
                <p class="card-text"> {{ item.description }} </p>
                <p class ="card-date"> {{ item.date }} </p>
            </div>
            <a href= "" target="_blank" class="button">Voir</a>
          </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

export default {
  name: 'Article-List',
  
  computed:{
    getArticles(){
      return this.$store.getters.getArticles
    }
  },
  mounted() {
    console.log(this.getArticles);
    this.getArticles
  }


}
</script>

<style>

a{
  text-decoration: none;
  display: inline;
  align-items: center;
  color: black;

}
.singleCard{
  margin-top: 5%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.5s cubic-bezier(.25,.8,.25,1);
}
.singleCard:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transform: scale(1.02);
}
.card{
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  grid-gap: 30px;
  justify-content: center;
  padding-bottom: 10%;
}
.card-text{
  overflow: hidden;
  height: 100px;
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