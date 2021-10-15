<template>
    <div id="app">
      <div id="nav">
            <div class="navbar">
                <h1 class="navTitleFont">BLOGGING FACTORY</h1>
                        <div class="nav-link">
                            <a href="#">
                                <router-link to="/">Home</router-link>
                            </a>
                            <a> 
                                | 
                            </a>
                            <a href="#">
                                <router-link to="/about">About</router-link>
                            </a>
                                |
                             <a href="#">
                                <router-link to="/admin">Admin</router-link>
                            </a>      
                        </div>
                    </div>
            </div>
      <router-view/>              
    </div>
</template>

<script>
export default {
  
  mounted() {
      this.$store.dispatch('getApi')
  }
  
  
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #22303f;
}

#nav {
    background-color: rgb(233, 233, 233);
}
#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav .router-link-exact-active {
    color: #42b983;
}

body {
    margin: 0%;
}

h1 {
    margin: 0;
}

.navbar {
    height: 100px;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1%;
    margin-bottom: 1%;
}

.navTitleFont {
    font-family: 'Roboto Condensed', sans-serif !important;
    font-size: 2em;
    padding-top: 4%;
    padding-left: 3%;
    }

.nav-link {
    text-align: center;
    padding-top: 3%;
    padding-right: 3%;
    height: fit-content;
    vertical-align: middle;
}
</style>