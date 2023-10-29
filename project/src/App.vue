<template>
  <nav>
    <NavComp/>
    <!-- <router-link to="/">Home</router-link> |-->
    <!-- <router-link to="/about">About</router-link>  -->
  </nav>
  <router-view/>
</template>

<script>
import NavComp from './components/NavComp.vue';
export default {
component:{
  NavComp,
}
}




</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
body{
  background-image: url(./assets/img/abstract-wavy-background1.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
