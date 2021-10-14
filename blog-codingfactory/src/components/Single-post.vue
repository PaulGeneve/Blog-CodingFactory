<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'single-post',
  
    data(){
    return{
      auteur:'',
      titre:'',
      description:'',
      link:'',
      image:'',
      date:'',
      contenu:''
    }
  },
  methods: {
    getNewsData(){
       axios.get('http://api.fakecompany.life:30002/news')
      .then(result => {
          console.log(result)
      })
    }
  }

}
</script>
