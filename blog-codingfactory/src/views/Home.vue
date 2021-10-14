<template>
  <div class="home">
    <div class="header">
      <img class="fit-picture"
      src="/media/cc0-images/grapefruit-slice-332-332.jpg"
      alt="Grapefruit slice atop a pile of other slices">
    </div>
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
