<template>
  <div class="home">
    <list-post></list-post>
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
