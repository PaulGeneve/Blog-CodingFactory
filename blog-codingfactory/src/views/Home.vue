<template>

  <div class="home">

    <Article-List></Article-List>

  </div>
</template>

<script>
// @ is an alias to /src
import ArticleList from '@/components/ArticleList.vue'

export default {
  name: 'Home',
  components: {
    ArticleList
  }
}
</script>

<style>


</style>
