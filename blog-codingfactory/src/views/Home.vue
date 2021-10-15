<template>
  <div class="home">
    <list-post></list-post>
  </div>
</template>

<script>
// @ is an alias to /src
import ListPost from '@/components/List-post.vue'

export default {
  name: 'Home',
  components: {
    ListPost
  }
}
</script>
