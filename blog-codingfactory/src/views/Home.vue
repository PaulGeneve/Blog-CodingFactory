<template>
  <div class="home">

    <single-post></single-post>

  </div>
</template>

<script>
// @ is an alias to /src
import SinglePost from '@/components/Single-post.vue'

export default {
  name: 'Home',
  components: {
    SinglePost
  }
}
</script>

<style>

.grill{
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  grid-gap: 30px;
  justify-content: center;
  padding-bottom: 10%;
}

</style>
