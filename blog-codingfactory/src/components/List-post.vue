<template>
  <div class="home">
    <h1>Blog
      <single-post></single-post>
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src

import SinglePost from '@/components/Single-post.vue'

export default {
  name: 'list-post',
   components: {
    SinglePost
  }


}
</script>
