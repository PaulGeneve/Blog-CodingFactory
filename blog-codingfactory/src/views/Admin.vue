<template>
    <div>
        <div classe="title">
            <h1>Admin</h1>
        </div>
        <div class="share">
            <form>
                <label for=""></label>
                <input type="text" id="" name="" placeholder="recherche..">
            </form>
        </div>
        <div class="btn">
            <a href= "link" class="submit">Rechercher</a>
        </div>

        <div class="home">
           <ArticleList></ArticleList>
        </div>
        
    </div>
</template>

<script>

import ArticleList from '@/components/ArticleList.vue'

export default {
  name: 'Home',
  components: {
    ArticleList
  }
}
</script>

<style>

.share{
    margin-top: 3%;
}

input[type=text], select {
  width: 60%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.submit {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin-top:  30%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit:hover {
  background-color: #45a049;
}

.btn{
    margin-top: 3%;
}


</style>
